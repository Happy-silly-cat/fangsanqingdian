const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const zlib = require('node:zlib');
const { test } = require('node:test');

const root = path.resolve(__dirname, '..');

function loadData() {
  const context = vm.createContext({ window: {} });
  const source = fs.readFileSync(path.join(root, 'assets/recharge-rewards-data.js'), 'utf8');
  vm.runInContext(source, context);
  return context.window.rechargeRewardsData;
}

function hasReadablePng(buffer) {
  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  if (!buffer.subarray(0, 8).equals(signature)) return false;

  let offset = 8;
  let sawHeader = false;
  let sawEnd = false;
  const imageData = [];
  while (offset + 12 <= buffer.length) {
    const length = buffer.readUInt32BE(offset);
    const end = offset + length + 12;
    if (end > buffer.length) return false;
    const type = buffer.toString('ascii', offset + 4, offset + 8);
    if (!/^[A-Za-z]{4}$/.test(type)) return false;
    const chunk = buffer.subarray(offset + 4, offset + 8 + length);
    if (crc32(chunk) !== buffer.readUInt32BE(offset + 8 + length)) return false;
    if (offset === 8) {
      if (type !== 'IHDR' || length !== 13) return false;
      sawHeader = buffer.readUInt32BE(offset + 8) > 0 && buffer.readUInt32BE(offset + 12) > 0;
    }
    if (type === 'IDAT') imageData.push(buffer.subarray(offset + 8, offset + 8 + length));
    offset = end;
    if (type === 'IEND') {
      sawEnd = length === 0;
      break;
    }
  }

  if (!sawHeader || !sawEnd || offset !== buffer.length || imageData.length === 0) return false;
  try {
    zlib.inflateSync(Buffer.concat(imageData));
    return true;
  } catch {
    return false;
  }
}

function crc32(buffer) {
  let crc = 0xffffffff;
  for (const byte of buffer) {
    crc ^= byte;
    for (let bit = 0; bit < 8; bit += 1) crc = (crc >>> 1) ^ (crc & 1 ? 0xedb88320 : 0);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

test('cumulative recharge table keeps every configured tier and resolves rewards', () => {
  const data = loadData();
  const thresholds = [...data.rows].map((row) => row.threshold);
  const referencedIds = new Set();

  for (const row of data.rows) {
    for (const group of ['fixed', 'selected']) {
      for (const [id] of row[group]) referencedIds.add(String(id));
    }
  }

  assert.deepEqual(thresholds, [
    60, 300, 500, 1000, 2000, 3500, 5000, 10000, 15000, 20000, 25000,
    30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000, 110000, 120000
  ]);
  assert.equal(referencedIds.size, 68);
  assert.deepEqual(
    [...referencedIds].filter((id) => !data.items[id]),
    []
  );
});

test('cumulative recharge page shows the configured event dates', () => {
  const data = loadData();
  const page = fs.readFileSync(path.join(root, 'recharge-rewards.html'), 'utf8');

  assert.deepEqual({ ...data.event }, {
    start: '2026-10-17 00:00',
    end: '2026-10-23 23:59:59'
  });
  assert.match(page, /id="eventDates"/);
  assert.match(page, /dateLabel\(data\.event\.start\).*dateLabel\(data\.event\.end\)/);
});

test('cumulative recharge page exposes its saved event archive selector', () => {
  const context = vm.createContext({ window: {} });
  const source = fs.readFileSync(path.join(root, 'assets/recharge-rewards-data.js'), 'utf8');
  vm.runInContext(source, context);
  const page = fs.readFileSync(path.join(root, 'recharge-rewards.html'), 'utf8');
  const archives = context.window.rechargeRewardsArchives;

  assert.equal(archives.length, 1);
  assert.equal(archives[0].archiveId, '2026-golden-autumn');
  assert.equal(archives[0].title, '2026 金秋十月');
  assert.match(page, /<select id="archiveSelect"><\/select>/);
  assert.match(page, /archives\.find\(\(archive\) => archive\.archiveId === selectedId\)/);
  assert.match(page, /url\.searchParams\.set\("event", select\.value\)/);
});

test('home page links to the cumulative recharge table', () => {
  const home = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  assert.match(home, /href="recharge-rewards\.html"/);
  assert.match(home, />累充回馈</);
});

test('every configured recharge reward icon is a readable PNG', () => {
  const data = loadData();
  const referencedIds = new Set(
    data.rows.flatMap((row) => [...row.fixed, ...row.selected].map(([id]) => String(id)))
  );

  assert.equal(data.items['17514'].icon, 'assets/recharge-rewards-icons/houjun_huanggai_h3.png');
  assert.equal(data.items['69065'].icon, 'assets/recharge-rewards-icons/baozhushengjin.png');

  for (const id of referencedIds) {
    assert.ok(data.items[id]?.icon, `${id} ${data.items[id]?.name ?? 'reward'} is missing an icon`);
  }

  for (const [id, item] of Object.entries(data.items)) {
    if (!item.icon) continue;
    const iconPath = path.resolve(root, item.icon);
    assert.ok(iconPath.startsWith(`${root}${path.sep}`), `${id} icon must stay inside the project`);
    assert.ok(fs.existsSync(iconPath), `${id} ${item.name} icon is missing: ${item.icon}`);
    assert.ok(hasReadablePng(fs.readFileSync(iconPath)), `${id} ${item.name} icon is not a readable PNG`);
  }
});
