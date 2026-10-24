const fs = require('fs');
const path = require('path');

const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const marker = Buffer.from([0xfe, 0xfe, 0xfe, 0xfe]);

function crc32(bytes) {
  let crc = 0xffffffff;
  for (const byte of bytes) {
    crc ^= byte;
    for (let bit = 0; bit < 8; bit += 1) crc = (crc >>> 1) ^ (crc & 1 ? 0xedb88320 : 0);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function decode(filePath) {
  const raw = fs.readFileSync(filePath);
  if (raw.subarray(0, 8).equals(signature)) return;
  if (!raw.subarray(0, 4).equals(marker) || raw.length <= 40) throw new Error(`不是可识别的 PNG 资源：${filePath}`);
  const body = Buffer.from(raw.subarray(32));
  const key = [];
  const header = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0x00, 0x00, 0x00, 0x0d, 0x49, 0x48, 0x44, 0x52]);
  for (let index = 0; index < 8; index += 1) key.push(body[index * 2] ^ header[index * 2]);
  const ihdrEvenBytes = [0, 0, 0, 0, 8, 0, 0];
  for (let index = 8; index < 15; index += 1) key[index] = body[index * 2] ^ ihdrEvenBytes[index - 8];
  const iend = Buffer.from([0, 0, 0, 0, 0x49, 0x45, 0x4e, 0x44, 0xae, 0x42, 0x60, 0x82]);
  for (let index = 0; index < iend.length; index += 1) {
    const bodyIndex = body.length - iend.length + index;
    if (bodyIndex % 2 === 0) key[(bodyIndex / 2) % 16] = body[bodyIndex] ^ iend[index];
  }
  const width = [0, body[17], 0, body[19]];
  const height = [0, body[21], 0, body[23]];
  width[0] = body[16] ^ key[8]; width[2] = body[18] ^ key[9];
  height[0] = body[20] ^ key[10]; height[2] = body[22] ^ key[11];
  const ihdr = Buffer.from([0x49, 0x48, 0x44, 0x52, ...width, ...height, 8, body[25], 0, 0, 0]);
  const crc = crc32(ihdr);
  const crcBytes = [(crc >>> 24) & 0xff, (crc >>> 16) & 0xff, (crc >>> 8) & 0xff, crc & 0xff];
  if (key[15] === undefined) key[15] = body[30] ^ crcBytes[1];
  for (let index = 0; index < body.length; index += 2) body[index] ^= key[(index / 2) % 16];
  if (!body.subarray(0, 8).equals(signature)) throw new Error(`解码失败：${path.basename(filePath)}`);
  fs.writeFileSync(filePath, body);
}

for (const file of process.argv.slice(2)) decode(path.resolve(file));
console.log('decoded', process.argv.slice(2).join(', '));
