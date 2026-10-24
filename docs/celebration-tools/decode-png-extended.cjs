const fs = require('node:fs');
const path = require('node:path');

function crc32(bytes) {
  let crc = 0xffffffff;
  for (const byte of bytes) {
    crc ^= byte;
    for (let bit = 0; bit < 8; bit += 1) crc = (crc >>> 1) ^ (crc & 1 ? 0xedb88320 : 0);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function hasValidChunks(png) {
  let offset = 8;
  let chunks = 0;
  let sawIend = false;
  while (offset + 12 <= png.length && chunks < 1000) {
    const length = png.readUInt32BE(offset);
    if (length > png.length - offset - 12) return false;
    const type = png.toString('ascii', offset + 4, offset + 8);
    if (!/^[A-Za-z]{4}$/.test(type)) return false;
    const data = png.subarray(offset + 4, offset + 8 + length);
    if (crc32(data) !== png.readUInt32BE(offset + 8 + length)) return false;
    offset += length + 12;
    chunks += 1;
    if (type === 'IEND') { sawIend = true; break; }
  }
  return sawIend && offset === png.length;
}

function decode(filename) {
  const raw = fs.readFileSync(filename);
  const body = raw.subarray(32);
  if (!raw.subarray(0, 4).equals(Buffer.from([0xfe, 0xfe, 0xfe, 0xfe]))) return false;
  const pngSignature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  const key = Array(22);
  for (let i = 0; i < 8; i += 1) key[i] = body[i * 2] ^ pngSignature[i];
  const idatLength = body.length - 57;
  if (idatLength < 0) return false;
  const lengthBytes = Buffer.alloc(4);
  lengthBytes.writeUInt32BE(idatLength);
  const flgs = Array.from({ length: 256 }, (_, value) => value).filter((value) => {
    const cmf = body[41];
    return (cmf & 15) === 8 && (cmf >> 4) <= 7 && ((cmf << 8) | value) % 31 === 0 && (value & 32) === 0;
  });

  for (let widthHigh = 0; widthHigh < 4; widthHigh += 1) {
    for (let widthThird = 0; widthThird < 256; widthThird += 1) {
      for (let heightHigh = 0; heightHigh < 4; heightHigh += 1) {
        for (let heightThird = 0; heightThird < 256; heightThird += 1) {
          const ihdr = Buffer.from([
            0x49, 0x48, 0x44, 0x52,
            widthHigh, body[17], widthThird, body[19],
            heightHigh, body[21], heightThird, body[23],
            8, body[25], 0, 0, 0,
          ]);
          const crc = crc32(ihdr);
          const crcBytes = Buffer.from([crc >>> 24, (crc >>> 16) & 255, (crc >>> 8) & 255, crc & 255]);
          if (body[29] !== crcBytes[0] || body[31] !== crcBytes[2]) continue;
          key[8] = body[16] ^ widthHigh;
          key[9] = body[18] ^ widthThird;
          key[10] = body[20] ^ heightHigh;
          key[11] = body[22] ^ heightThird;
          key[12] = body[24] ^ 8;
          key[13] = body[26];
          key[14] = body[28];
          key[15] = body[30] ^ crcBytes[1];
          key[16] = body[32] ^ crcBytes[3];
          if (body[33] !== lengthBytes[0] || body[35] !== lengthBytes[2] || body[37] !== 0x49 || body[39] !== 0x41) continue;
          key[17] = body[34] ^ lengthBytes[1];
          key[18] = body[36] ^ lengthBytes[3];
          key[19] = body[38] ^ 0x44;
          key[20] = body[40] ^ 0x54;
          for (const flg of flgs) {
            key[21] = body[42] ^ flg;
            for (let period = 17; period <= 22; period += 1) {
              const output = Buffer.from(body);
              for (let i = 0; i < output.length; i += 2) output[i] ^= key[(i / 2) % period];
              if (output.subarray(0, 8).equals(pngSignature) && hasValidChunks(output)) {
                fs.writeFileSync(filename, output);
                console.log(`${path.basename(filename)} decoded with period ${period}`);
                return true;
              }
            }
          }
        }
      }
    }
  }
  return false;
}

let failed = 0;
for (const filename of process.argv.slice(2)) if (!decode(path.resolve(filename))) { console.error(`unsupported: ${path.basename(filename)}`); failed += 1; }
process.exitCode = failed ? 1 : 0;
