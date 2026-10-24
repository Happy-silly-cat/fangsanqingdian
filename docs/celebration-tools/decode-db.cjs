const fs = require("node:fs");
const path = require("node:path");

const source = path.join(__dirname, "db");
const output = path.join(__dirname, "decoded");
const marker = Buffer.from([0xfe, 0xfe, 0xfe, 0xfe]);

fs.mkdirSync(output, { recursive: true });

for (const filename of fs.readdirSync(source)) {
  const file = path.join(source, filename);
  if (!fs.statSync(file).isFile()) continue;

  const raw = fs.readFileSync(file);
  if (!raw.subarray(0, 4).equals(marker)) {
    fs.writeFileSync(path.join(output, filename), raw);
    continue;
  }

  const body = Buffer.from(raw.subarray(32));
  const header = Buffer.from(
    `-- Filename: ${filename}\n` +
    "-- Author: auto-created by XmlToScript tool.\n" +
    "-- Function: it`s auto-created by XmlToScript tool.\n",
  );
  if (header.length < 32) throw new Error(`Unexpected Lua header: ${filename}`);

  let key = null;
  for (let period = 1; period * 2 <= header.length; period += 1) {
    const candidate = [];
    for (let position = 0; position < period * 2; position += 2) {
      candidate.push(body[position] ^ header[position]);
    }
    let matches = true;
    for (let position = 0; position < header.length; position += 1) {
      const decoded = position % 2 === 0
        ? body[position] ^ candidate[(position / 2) % period]
        : body[position];
      if (decoded !== header[position]) {
        matches = false;
        break;
      }
    }
    if (matches) {
      key = candidate;
      break;
    }
  }
  if (!key) {
    console.warn(`Skipped nonstandard Lua encoding: ${filename}`);
    continue;
  }
  for (let index = 0; index < body.length; index += 2) {
    body[index] ^= key[(index / 2) % key.length];
  }
  fs.writeFileSync(path.join(output, filename), body);
}

console.log(`Decoded ${fs.readdirSync(output).length} tables to ${output}`);
