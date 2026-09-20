const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const context = vm.createContext({ window: {}, document: { getElementById: () => ({}) } });
for (const file of ['zhenqi-data.js', 'zhenqi-costs.js']) {
  vm.runInContext(fs.readFileSync(path.join(root, 'assets', file), 'utf8'), context);
}
const html = fs.readFileSync(path.join(root, 'zhenqi-upgrade.html'), 'utf8');
const script = html.slice(html.lastIndexOf('<script>') + 8, html.lastIndexOf('</script>'));
vm.runInContext(script.replace(/\s+renderAll\(\);\s*$/, ''), context);
function totals(fromQuality, fromLevel, toQuality, toLevel) {
  return vm.runInContext(`Object.fromEntries(calculateMaterials(${fromQuality},${fromLevel},${toQuality},${toLevel}).materials.map(x => [x.material.id,x.count]))`, context);
}
assert.equal(totals(6, 1, 6, 2)[60070], 20);
assert.equal(totals(6, 49, 6, 50)[60070], 4250);
assert.equal(totals(6, 49, 6, 50)[931001], 10);
assert.equal(totals(6, 50, 7, 50)[60070], 500);
assert.equal(totals(6, 50, 7, 50)[60078], 100);
assert.equal(totals(6, 50, 7, 50)[931001], 5);
for (const [quality, level, count] of [[6,50,71115], [7,60,109115], [8,70,149615], [9,80,193115]]) {
  assert.equal(totals(6, 1, quality, level)[60070], count);
}
assert.equal(Object.keys(totals(6, 30, 6, 30)).length, 0);
for (let index = 0; index < context.window.ZHENQI_DATA.types.length; index++) {
  vm.runInContext(`selectedType = data.types[${index}]; renderUpgradeTable(); renderAdvanceTable();`, context);
  const records = context.window.ZHENQI_DATA.types[index].records;
  for (const record of records) {
    const result = totals(record.quality, 1, record.quality, record.maxLevel);
    assert.ok(result[60070] > 0);
  }
  const full = totals(6, 1, 11, 100);
  const first = totals(6, 1, 8, 65);
  const second = totals(8, 65, 11, 100);
  for (const id of Object.keys(full)) assert.equal(full[id], (first[id] || 0) + (second[id] || 0));
}
console.log('Passed: source coverage, 12 flag types, 76 quality records, upgrade/advance boundaries and split-route totals.');
