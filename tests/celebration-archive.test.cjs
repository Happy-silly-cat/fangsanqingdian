const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { test } = require('node:test');

const root = path.resolve(__dirname, '..');
const snapshotFile = path.join(root, 'assets/celebration-events/2026-national-day.js');
const catalogFile = path.join(root, 'assets/celebration-current-data.js');

function loadSnapshots() {
  const context = { window: {} };
  vm.runInNewContext(fs.readFileSync(snapshotFile, 'utf8'), context);
  return structuredClone(context.window.celebrationEventSnapshots);
}

function loadCatalog(snapshots, search = '') {
  const context = {
    window: { celebrationEventSnapshots: snapshots, location: { search } },
    structuredClone,
    URLSearchParams
  };
  vm.runInNewContext(fs.readFileSync(catalogFile, 'utf8'), context);
  return context.window;
}

test('National Day archive retains task days, redemption day and recorded probabilities', () => {
  const data = loadCatalog(loadSnapshots()).celebrationCurrentData;
  assert.equal(data.archiveId, '2026-national-day');
  assert.equal(data.event.end, '2026-10-06 23:59:59');
  assert.equal(data.event.exchangeEnd, '2026-10-07 23:59:59');
  assert.equal(data.calculation.tasks.length, 16);
  assert.equal(data.calculation.tasks.find(task => task.key === 'melon30').probability, .0137);
  assert.equal(data.calculation.tasks.find(task => task.key === 'melon50').probability, .0137);
  assert.equal(data.calculation.tasks.find(task => task.key === 'melon50').purchaseMelon, 2);
  assert.equal(data.calculation.tasks.find(task => task.key === 'melon30').purchaseMelon, 1);
  assert.equal(data.calculation.tasks.find(task => task.key === 'lantern5').probability, .0143);
  assert.equal(data.calculation.tasks.reduce((sum, task) => sum + Math.round(task.probability * 10000), 0), 2143);
  assert.equal(data.calculation.tasks.filter(task => task.word > 0)
    .reduce((sum, task) => sum + Math.round(task.probability * 10000), 0), 517);
  const grouped = require('../assets/celebration-solver').groupTasks(data.calculation.tasks);
  assert.equal(grouped.length, 4);
  assert.equal(grouped.reduce((sum, task) => sum + task.probabilityPoints, 0), 934);
  assert.equal((10000 - grouped.reduce((sum, task) => sum + task.probabilityPoints, 0)) / 10000, .9066);
  assert.deepEqual(data.calculation.tasks.filter(task => task.enabled === false).map(task => task.key),
    ['runeRefine', 'runeAdvance', 'treasureCrystal', 'guiguzi', 'stamina', 'energy', 'weaponRefine', 'dragonScale', 'goldMerit']);
  assert.deepEqual(grouped.filter(task => !task.melon && !task.word), []);
  assert.equal(data.exchanges.length, 10);
  assert.equal(data.exchanges.find(item => item.id === 100002).cost.find(item => item.name === '红灯笼').amount, 240);
  assert.equal(data.packages.find(item => item.id === 20614).choices.length, 8);
});

test('all archive icons are PNG files stored in the event-specific directory', () => {
  const source = loadSnapshots()[0];
  const data = loadCatalog([source]).celebrationCurrentData;
  const icons = new Set(Object.values(data.itemIcons));
  const collect = value => {
    if (!value || typeof value !== 'object') return;
    if (value.icon) icons.add(value.icon);
    Object.values(value).forEach(collect);
  };
  collect(data);
  assert.equal(icons.size, 27);
  for (const icon of icons) {
    assert(icon.startsWith(source.assetRoot));
    const archive = fs.readFileSync(path.join(root, icon));
    assert.equal(archive.subarray(0, 8).toString('hex'), '89504e470d0a1a0a', icon);
    assert(archive.length > 24, icon);
  }
});

test('latest is date-based; URL selection restores an older frozen event without inheriting new data', () => {
  const old = loadSnapshots()[0];
  const future = structuredClone(old);
  future.archiveId = 'test-future';
  future.title = 'Test future event';
  future.event.start = '2027-01-01 00:00';
  future.event.end = '2027-01-06 23:59:59';
  future.exchanges[0].limit = 99;
  future.calculation.tasks[1].probability = .02;
  const catalog = loadCatalog([old, future]);
  assert.equal(catalog.celebrationCurrentData.archiveId, 'test-future');
  assert.equal(catalog.celebrationEventArchive.events[1].archiveId, old.archiveId);
  const archive = loadCatalog([future, old], '?event=2026-national-day').celebrationCurrentData;
  assert.equal(archive.exchanges[0].limit, 4);
  assert.equal(archive.calculation.tasks[1].probability, .0137);
  assert(Object.isFrozen(archive.exchanges[0].cost));
  future.exchanges[0].limit = 10;
  assert.equal(catalog.celebrationCurrentData.exchanges[0].limit, 99);
  assert.equal(loadCatalog([old, future], '?event=missing').celebrationCurrentData.archiveId, future.archiveId);
});

test('duplicate IDs and unsupported schema versions fail explicitly', () => {
  const old = loadSnapshots()[0];
  assert.throws(() => loadCatalog([old, old]), /编号无效/);
  const invalid = structuredClone(old);
  invalid.schemaVersion = 2;
  assert.throws(() => loadCatalog([invalid]), /版本/);
});
