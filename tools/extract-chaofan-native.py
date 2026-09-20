"""Extract and restore the game's native Spine resources for the web gallery.

The game stores Spine textures as encrypted PVR/CCZ files.  This script keeps
the original JSON/atlas/PVR files and additionally creates a browser-friendly
PNG plus an atlas whose texture page points at that PNG.

When a newer APK is available, run this script again: it reads the `spine`
field from assets/chaofan-huanhua-data.js, so newly added skins are picked up
without changing the extraction logic.
"""

from __future__ import annotations

import argparse
import json
import plistlib
import re
import shutil
import struct
import zlib
import xml.etree.ElementTree as ET
from pathlib import Path
from zipfile import ZipFile

from PIL import Image


DEFAULT_APK = Path(r"D:\fknsango_export_20260803_174000\apk_extract\fknsango_uc_base.apk")
DEFAULT_LIB = Path(__file__).resolve().parents[1] / ".tmp-native-tools" / "libgame.so"
DEFAULT_OUTPUT = Path(__file__).resolve().parents[1] / "assets" / "chaofan-native"
LIB_STATIC_TABLE_OFFSET = 0x735A20


def configured_spines(data_file: Path) -> list[str]:
    text = data_file.read_text(encoding="utf-8")
    names = re.findall(r'"spine"\s*:\s*"([^"]+)"', text)
    return list(dict.fromkeys(names))


def native_table(lib_bytes: bytes) -> tuple[int, ...]:
    table = lib_bytes[LIB_STATIC_TABLE_OFFSET : LIB_STATIC_TABLE_OFFSET + 128 * 4]
    if len(table) != 128 * 4:
        raise ValueError("libgame.so static hash table is unavailable")
    return struct.unpack("<128I", table)


def native_key_for_algorithm(lib_bytes: bytes, algorithm: int) -> bytes:
    """Reproduce the small key generators selected by the texture header."""
    values = native_table(lib_bytes)
    if algorithm == 0:  # header: first 32 words copied as-is
        return bytes(value & 0xFF for value in values[:32])
    if algorithm == 1:  # tail: S[95], S[96], ... S[126]
        return bytes(value & 0xFF for value in values[95:127])
    if algorithm == 2:  # odd: S[1], S[3], ...
        return bytes(value & 0xFF for value in values[1::2][:32])
    if algorithm == 3:  # even: S[0], S[2], ...
        return bytes(value & 0xFF for value in values[0::2][:32])
    if algorithm == 4:  # fibonacci: a short fixed key in the native library
        return bytes((0x96, 0x9D, 0x52, 0x79, 0xBD, 0x5C, 0x04, 0xE0, 0xB2, 0xCA))
    if algorithm == 5:  # native prime table: S[2], S[3], S[5], ... S[119]
        prime_indices = (
            2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47,
            53, 59, 61, 67, 71, 73, 79, 83, 89, 93, 97, 101, 103, 107,
            109, 113, 119,
        )
        return bytes(values[index] & 0xFF for index in prime_indices)
    if algorithm == 6:  # odds: the first 32 odd words in S
        return bytes(value & 0xFF for value in values if value & 1)[:32]
    if algorithm == 7:  # evens: the first 32 even words in S
        return bytes(value & 0xFF for value in values if not (value & 1))[:32]
    if algorithm == 8:  # tail_odd: S[127], S[125], ...
        return bytes(value & 0xFF for value in values[127::-2][:32])
    if algorithm == 9:  # tail_even: S[126], S[124], ...
        return bytes(values[index] & 0xFF for index in range(126, 62, -2))
    if algorithm == 10:  # tail_odds: odd values from S[127] backwards
        return bytes(value & 0xFF for value in reversed(values) if value & 1)[:32]
    if algorithm == 11:  # tail_evens: even values from S[127] backwards
        return bytes(value & 0xFF for value in reversed(values) if not (value & 1))[:32]
    if algorithm == 12:  # odd_sub: (S[0] - S[1]), (S[2] - S[3]), ...
        return bytes((values[index] - values[index + 1]) & 0xFF for index in range(0, 64, 2))
    if algorithm == 13:  # even_sub: (S[1] - S[2]), (S[3] - S[4]), ...
        return bytes((values[index] - values[index + 1]) & 0xFF for index in range(1, 64, 2))
    if algorithm == 14:  # odd_add: (S[0] + S[1]), (S[2] + S[3]), ...
        return bytes((values[index] + values[index + 1]) & 0xFF for index in range(0, 64, 2))
    if algorithm == 15:  # even_add: (S[1] + S[2]), (S[3] + S[4]), ...
        return bytes((values[index] + values[index + 1]) & 0xFF for index in range(1, 64, 2))
    raise ValueError(f"unsupported native texture algorithm: {algorithm}")


def native_key_for_tail_odds(lib_bytes: bytes) -> bytes:
    """Backward-compatible name for the algorithm used by most newer files."""
    # The native routine reads S[127] ... S[0], keeps odd values, then uses
    # those low bytes as the repeating XOR key.
    return native_key_for_algorithm(lib_bytes, 10)


def decrypt_basic(raw: bytes, lib_bytes: bytes) -> bytes:
    if not raw.startswith(b"\xfe\xfe\xfe\xfe") or len(raw) < 32:
        return raw
    body = bytearray(raw[32:])
    expected_length = struct.unpack_from("<I", raw, 4)[0]
    if expected_length != len(body):
        raise ValueError("encrypted texture length does not match its header")
    key = native_key_for_algorithm(lib_bytes, raw[9])
    shift = len(body) % len(key)
    for offset in range(0, len(body), 2):
        body[offset] ^= key[(offset + shift) % len(key)]
    return bytes(body)


def pvr_to_png(raw: bytes, output: Path) -> None:
    """Decode the restored PVR v2 RGBA4444 payload used by the game."""
    if raw[:4] != b"CCZ!":
        raise ValueError("restored texture is not CCZ")
    decompressed = zlib.decompress(raw[16:])
    if decompressed[44:48] != b"PVR!":
        raise ValueError("decompressed payload is not PVR v2")
    header_length, height, width = struct.unpack_from("<3I", decompressed, 0)
    bits_per_pixel = struct.unpack_from("<I", decompressed, 24)[0]
    if bits_per_pixel != 16:
        raise ValueError(f"unsupported PVR bit depth: {bits_per_pixel}")
    masks = struct.unpack_from("<4I", decompressed, 28)
    if masks != (0xF000, 0x0F00, 0x00F0, 0x000F):
        raise ValueError("expected RGBA4444 PVR texture")
    pixel_count = width * height
    pixels = decompressed[header_length : header_length + pixel_count * 2]
    if len(pixels) != pixel_count * 2:
        raise ValueError("PVR pixel payload is truncated")
    rgba = bytearray(pixel_count * 4)
    for index in range(pixel_count):
        word = pixels[index * 2] | (pixels[index * 2 + 1] << 8)
        rgba[index * 4] = ((word >> 12) & 0x0F) * 17
        rgba[index * 4 + 1] = ((word >> 8) & 0x0F) * 17
        rgba[index * 4 + 2] = ((word >> 4) & 0x0F) * 17
        rgba[index * 4 + 3] = (word & 0x0F) * 17
    Image.frombytes("RGBA", (width, height), bytes(rgba)).save(output)


def normalize_animation_curves(value: object) -> None:
    """Convert Spine 3.2 curve arrays to the 3.8 JSON curve fields."""
    if isinstance(value, dict):
        curve = value.get("curve")
        if isinstance(curve, list) and len(curve) == 4:
            value["curve"], value["c2"], value["c3"], value["c4"] = curve
        for child in value.values():
            normalize_animation_curves(child)
    elif isinstance(value, list):
        for child in value:
            normalize_animation_curves(child)


def parse_vector(value: object) -> list[float]:
    """Read TexturePacker/XML vectors such as ``{147,112}``."""
    return [float(item) for item in re.findall(r"-?\d+(?:\.\d+)?", str(value or ""))]


def parse_effect_plist(path: Path) -> dict[str, dict[str, object]]:
    """Convert the game's plist frame metadata into browser-friendly numbers."""
    plist = plistlib.loads(path.read_bytes())
    frames: dict[str, dict[str, object]] = {}
    for filename, frame in plist.get("frames", {}).items():
        # Newer packs use textureRect/spriteSourceSize/spriteOffset.  Older
        # super-skin packs use frame/sourceSize/offset for the same values.
        rect = parse_vector(frame.get("textureRect") or frame.get("frame"))
        source_size = parse_vector(frame.get("spriteSourceSize") or frame.get("sourceSize"))
        offset = parse_vector(frame.get("spriteOffset") or frame.get("offset"))
        if len(rect) != 4 or len(source_size) != 2:
            continue
        frames[Path(filename).stem] = {
            "x": int(rect[0]),
            "y": int(rect[1]),
            "width": int(rect[2]),
            "height": int(rect[3]),
            "sourceWidth": source_size[0],
            "sourceHeight": source_size[1],
            "offsetX": offset[0] if len(offset) > 0 else 0,
            "offsetY": offset[1] if len(offset) > 1 else 0,
            "rotated": bool(frame.get("textureRotated", frame.get("rotated", False))),
        }
    return frames


def parse_effect_xml(path: Path) -> dict[str, object] | None:
    """Convert one XML action into sparse frame data for the web player."""
    root = ET.fromstring(path.read_text(encoding="utf-8", errors="replace"))
    action = root.find(".//action")
    if action is None:
        return None
    total_frame = int(action.attrib.get("totalFrame", "0"))
    frames: list[dict[str, object] | None] = [None] * max(total_frame, 0)
    for frame_info in action.findall(".//frameInfo"):
        frame_number = int(frame_info.attrib.get("frame", "0"))
        frame_data = frame_info.find("frameData")
        if frame_data is None or not (0 <= frame_number < len(frames)):
            continue
        position = parse_vector(frame_data.attrib.get("position"))
        frames[frame_number] = {
            "bitmap": frame_data.attrib.get("bitmapName", ""),
            "x": position[0] if len(position) > 0 else 0,
            "y": position[1] if len(position) > 1 else 0,
            "rotation": float(frame_data.attrib.get("rotation", "0")),
            "scaleX": float(frame_data.attrib.get("scaleX", "1")),
            "scaleY": float(frame_data.attrib.get("scaleY", "1")),
            # XMLSprite animates opacity per frame. Keep the source value so
            # the browser can reproduce fades instead of forcing every layer
            # to full opacity.
            "alpha": float(frame_data.attrib.get("alpha", "1")),
        }
    return {
        "name": action.attrib.get("actionName", path.stem),
        "totalFrame": total_frame,
        "frames": frames,
    }


def extract_effect_assets(target: Path, spine: str, lib_bytes: bytes) -> dict[str, object] | None:
    """Restore the XML/plist sprite animation layered over a native Spine model."""
    effect_dir = target / "effect"
    raw_png_path = effect_dir / f"{spine}.png"
    plist_path = effect_dir / f"{spine}.plist"
    if not raw_png_path.exists() or not plist_path.exists():
        return None
    decoded_png = decrypt_basic(raw_png_path.read_bytes(), lib_bytes)
    if decoded_png[:8] != b"\x89PNG\r\n\x1a\n":
        raise ValueError(f"restored effect texture is not PNG: {spine}")
    web_png = effect_dir / f"{spine}.web.png"
    web_png.write_bytes(decoded_png)
    actions = []
    for xml_path in sorted(effect_dir.glob(f"{spine}_*.xml"), key=lambda item: int(item.stem.rsplit("_", 1)[1])):
        action = parse_effect_xml(xml_path)
        if action:
            actions.append(action)
    if not actions:
        return None
    effect_json = effect_dir / f"{spine}.web.json"
    effect_json.write_text(
        json.dumps({"fps": 30, "frames": parse_effect_plist(plist_path), "actions": actions}, ensure_ascii=False, separators=(",", ":")),
        encoding="utf-8",
    )
    return {
        "json": f"assets/chaofan-native/{spine}/effect/{spine}.web.json",
        "texture": f"assets/chaofan-native/{spine}/effect/{spine}.web.png",
        "actionCount": len(actions),
    }
def convert_extracted_one(target: Path, spine: str, lib_bytes: bytes) -> bool:
    """Convert one copied native folder into browser-friendly assets."""
    # The original files use Spine 3.2's object-shaped `skins` field.  The
    # browser runtime is 3.8-compatible and expects the same data as a list;
    # this web copy changes only that container shape and keeps the original
    # JSON beside it for reference and future native tooling.
    skeleton = json.loads((target / f"{spine}.json").read_text(encoding="utf-8"))
    if isinstance(skeleton.get("skins"), dict):
        skeleton["skins"] = [
            {"name": skin_name, "attachments": skin_map}
            for skin_name, skin_map in skeleton["skins"].items()
        ]
    # Spine 3.2 names weighted meshes explicitly; the browser runtime uses the
    # regular mesh attachment type and still reads the embedded bone weights.
    for skin in skeleton.get("skins", []):
        for attachment_map in skin.get("attachments", {}).values():
            for attachment in attachment_map.values():
                if attachment.get("type") == "weightedmesh":
                    attachment["type"] = "mesh"
    normalize_animation_curves(skeleton.get("animations", {}))
    # The data format was authored by Spine 3.2, while the bundled web
    # runtime is 3.8-compatible; the converted copy can advertise the newer
    # format after the fields above have been normalized.
    if isinstance(skeleton.get("skeleton"), dict):
        skeleton["skeleton"]["spine"] = "3.8.99"
    (target / f"{spine}.web.json").write_text(
        json.dumps(skeleton, ensure_ascii=False, separators=(",", ":")), encoding="utf-8"
    )

    # Browser atlas pages cannot refer to the game's encrypted PVR filename.
    atlas = (target / f"{spine}.atlas").read_text(encoding="utf-8", errors="replace")
    atlas_lines = atlas.splitlines()
    for line_index, line in enumerate(atlas_lines):
        if line.strip():
            atlas_lines[line_index] = f"{spine}.png"
            break
    (target / f"{spine}.web.atlas").write_text("\n".join(atlas_lines) + "\n", encoding="utf-8")
    pvr = decrypt_basic((target / f"{spine}.pvr.ccz").read_bytes(), lib_bytes)
    pvr_to_png(pvr, target / f"{spine}.png")
    backdrop = target / f"{spine}ditu.png"
    if backdrop.exists():
        decoded_backdrop = decrypt_basic(backdrop.read_bytes(), lib_bytes)
        if decoded_backdrop[:8] == b"\x89PNG\r\n\x1a\n":
            (target / f"{spine}ditu.web.png").write_bytes(decoded_backdrop)
    effect = extract_effect_assets(target, spine, lib_bytes)
    (target / "effect-manifest.json").write_text(json.dumps(effect, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    return True


def extract_one(archive: ZipFile, spine: str, output: Path, lib_bytes: bytes) -> bool:
    prefix = f"assets/images/base/hero/body_img_spine/{spine}/"
    required = [f"{prefix}{spine}.json", f"{prefix}{spine}.atlas", f"{prefix}{spine}.pvr.ccz"]
    if any(name not in archive.namelist() for name in required):
        return False
    target = output / spine
    target.mkdir(parents=True, exist_ok=True)
    for name in required:
        (target / Path(name).name).write_bytes(archive.read(name))
    # Keep the other native files beside the Spine quartet as well.  Some
    # models have effect XML/Lua/PNG resources that the game layers on top of
    # the skeleton animation; preserving them makes the pack useful later.
    for name in archive.namelist():
        if not name.startswith(prefix) or name in required or name.endswith("/"):
            continue
        relative = name[len(prefix) :]
        destination = target / Path(relative)
        destination.parent.mkdir(parents=True, exist_ok=True)
        destination.write_bytes(archive.read(name))

    return convert_extracted_one(target, spine, lib_bytes)


def extract_one_from_directory(source_root: Path, spine: str, output: Path, lib_bytes: bytes) -> bool:
    """Extract one native folder copied from the running Android app."""
    source = source_root / spine
    required = [source / f"{spine}.json", source / f"{spine}.atlas", source / f"{spine}.pvr.ccz"]
    if not source.is_dir() or any(not path.is_file() for path in required):
        return False
    target = output / spine
    target.mkdir(parents=True, exist_ok=True)
    for source_file in source.rglob("*"):
        if not source_file.is_file():
            continue
        destination = target / source_file.relative_to(source)
        destination.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(source_file, destination)
    return convert_extracted_one(target, spine, lib_bytes)


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--apk", type=Path, default=DEFAULT_APK)
    parser.add_argument("--source-dir", type=Path, help="Runtime native folders copied from the Android app")
    parser.add_argument("--lib", type=Path, default=DEFAULT_LIB)
    parser.add_argument("--output", type=Path, default=DEFAULT_OUTPUT)
    parser.add_argument("--data", type=Path, default=Path(__file__).resolve().parents[1] / "assets" / "chaofan-huanhua-data.js")
    args = parser.parse_args()

    spines = configured_spines(args.data)
    lib_bytes = args.lib.read_bytes()
    args.output.mkdir(parents=True, exist_ok=True)
    available: list[str] = []
    if args.source_dir and args.source_dir.exists():
        for spine in spines:
            try:
                if extract_one_from_directory(args.source_dir, spine, args.output, lib_bytes):
                    available.append(spine)
            except (ValueError, zlib.error) as error:
                print(f"Skipped runtime conversion for {spine}: {error}")
    if args.apk.exists():
        with ZipFile(args.apk) as archive:
            for spine in spines:
                if spine in available:
                    continue
                try:
                    if extract_one(archive, spine, args.output, lib_bytes):
                        available.append(spine)
                except (ValueError, zlib.error) as error:
                    # Keep already-copied native files, but do not make one new
                    # encryption variant prevent the rest of the pack exporting.
                    print(f"Skipped browser conversion for {spine}: {error}")

    manifest = {
        "format": "native-spine",
        "runtime": "spine-3.8-compatible",
        "available": available,
        "skins": {
            spine: {
                "json": f"assets/chaofan-native/{spine}/{spine}.web.json",
                "atlas": f"assets/chaofan-native/{spine}/{spine}.web.atlas",
                "texture": f"assets/chaofan-native/{spine}/{spine}.png",
                "backdrop": f"assets/chaofan-native/{spine}/{spine}ditu.web.png" if (args.output / spine / f"{spine}ditu.web.png").exists() else None,
                "sourceJson": f"assets/chaofan-native/{spine}/{spine}.json",
                "effect": json.loads((args.output / spine / "effect-manifest.json").read_text(encoding="utf-8")),
            }
            for spine in available
        },
        "note": "Only models present in the supplied APK are included; rerun with a newer APK to extend this list.",
    }
    (args.output / "manifest.json").write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    (args.output / "manifest.js").write_text(
        "window.chaofanNativeManifest = " + json.dumps(manifest, ensure_ascii=False, separators=(",", ":")) + ";\n",
        encoding="utf-8",
    )
    # Keep the small effect timelines inline as well as in JSON files.  This
    # lets the gallery work when a user opens index.html directly with
    # file://, where browser fetch() is blocked by local-file security rules.
    inline_effects = {}
    for spine in available:
        effect_json = args.output / spine / "effect" / f"{spine}.web.json"
        if effect_json.exists():
            inline_effects[spine] = json.loads(effect_json.read_text(encoding="utf-8"))
    (args.output / "effect-inline.js").write_text(
        "window.chaofanNativeInlineEffects = "
        + json.dumps(inline_effects, ensure_ascii=False, separators=(",", ":"))
        + ";\n",
        encoding="utf-8",
    )
    print(f"Extracted {len(available)} of {len(spines)} configured super skins: {', '.join(available)}")


if __name__ == "__main__":
    main()
