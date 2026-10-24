const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { test } = require('node:test');
const solver = require('../assets/celebration-solver');
const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'celebration.html'), 'utf8');
const snapshot = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'assets/celebration-events/2026-national-day.js'), 'utf8'), snapshot);
const calculation = snapshot.window.celebrationEventSnapshots[0].calculation;
const items = solver.groupTasks(calculation.tasks);
let stars = 0;
const rewardTiers = calculation.starRewards.map(tier => ({ ...tier, need: stars += tier.stars }));
function extract(name, next) {
  return html.slice(html.indexOf(`    function ${name}(`), html.indexOf(`    function ${next}(`));
}
function makeContext() {
  const pending = [];
  const display = {};
  let rebuilds = 0;
  const context = {
    items, rewardTiers, refreshPrices: calculation.refreshPrices,
    costDistributionSamples: 3000,
    format: value => String(value), $: () => display,
    window: { setTimeout: callback => pending.push(callback) },
    calculateExpected: input => {
      rebuilds++;
      return solver.solve(input, items, rewardTiers, calculation.refreshPrices);
    },
    rewardsForStars: (total, base) => {
      const tiers = rewardTiers.filter(tier => tier.need > base && tier.need <= total);
      return { melon: tiers.reduce((sum, tier) => sum + tier.melon, 0),
        word: tiers.reduce((sum, tier) => sum + tier.word, 0), count: tiers.length };
    }
  };
  vm.createContext(context);
  vm.runInContext(extract('simulateCostDistribution', 'setCostLabel'), context);
  vm.runInContext(extract('betterPlan', 'readInput'), context);
  vm.runInContext(extract('calculateDirect', 'calculateExpectedInBackground'), context);
  return { context, display, run: () => { while (pending.length) pending.shift()(); }, rebuilds: () => rebuilds };
}
function simulate(input, decisions) {
  const fixture = makeContext();
  let result;
  fixture.context.simulateCostDistribution(input, decisions, () => true, value => result = value);
  fixture.run();
  return { result, rebuilds: fixture.rebuilds() };
}
const inputFor = (m, w, n, baseStars = 0) => ({
  needMelon: m, needWord: w, targetMelon: m, targetWord: w,
  ownedMelon: 0, ownedWord: 0, maxBuys: n, baseStars, mode: 'expected'
});

test('the actual page simulation uses the new policy and agrees with its expected cost', () => {
  const input = inputFor(15, 80, 96);
  const exact = solver.solve(input, items, rewardTiers, calculation.refreshPrices);
  assert(exact.metricCostErrorBound < .0001);
  const { result } = simulate(input, exact.buyDecisions);
  assert.equal(result.sampleCount, 3000);
  assert.equal(result.completionSpends.length, 3000);
  assert(result.standardDeviation > 0);
  assert(Math.abs(result.mean - exact.cost) < 5 * result.standardDeviation / Math.sqrt(result.sampleCount));
  assert(result.lower95 < exact.cost && result.upper95 > exact.cost);
});

test('missing rare policies are reconstructed without resetting the refresh tier', () => {
  const input = inputFor(1, 10, 2);
  const exact = solver.solve(input, items, rewardTiers, calculation.refreshPrices);
  const policy = exact.buyDecisions;
  const key = input.maxBuys * policy.starSize * policy.melonSize * policy.wordSize
    + input.needMelon * policy.wordSize + Math.ceil(input.needWord / policy.wordUnit);
  const index = policy.keys.indexOf(key);
  policy.keys = new Float64Array([key]);
  policy.masks = policy.masks.slice(index * 6, index * 6 + 6);
  const { result, rebuilds } = simulate(input, policy);
  assert(rebuilds > 0);
  assert.equal(result.completionSpends.length, 3000);
  assert(Math.abs(result.mean - exact.cost) < 5 * result.standardDeviation / Math.sqrt(result.sampleCount));
});

test('cancelled simulations do not overwrite newer output', () => {
  const fixture = makeContext();
  let completed = false;
  fixture.context.simulateCostDistribution(inputFor(0, 0, 0),
    { keys: new Float64Array(), masks: new Uint32Array() }, () => false, () => completed = true);
  fixture.run();
  assert.equal(completed, false);
  assert.equal(fixture.display.textContent, undefined);
});

test('the no-50-star mode excludes ordinary items but retains currency-task chest rewards', () => {
  const fixture = makeContext();
  const input = { ...inputFor(2, 10, 1, 50), mode: 'melon30only' };
  const supplemental = fixture.context.calculateDirect(input);
  assert.equal(supplemental.cost, 675);
  assert.equal(supplemental.buys, 1);
  assert.equal(supplemental.purchaseOnlyCounts[items.findIndex(item => item.key === 'melon30')], 2);
  assert.equal(items.length, 4);
  assert(items.every(item => item.melon > 0 || item.word > 0));
  const result = fixture.context.calculateDirect({ ...input, baseStars: 70 });
  assert.equal(result.cost, 225);
  assert.equal(result.counts[items.findIndex(item => item.key === 'melon30')], 1);
  assert.equal(result.reward.melon, 2);
  assert.equal(result.reward.word, 10);
});

test('the page only enables purchase-only actions after normal calculation fails', () => {
  const fixture = makeContext();
  const attempts = [];
  fixture.context.celebrationSolver = { purchaseOnlyPlan: solver.purchaseOnlyPlan, solve: (input, ...rest) => {
    attempts.push(input.allowPurchaseOnly);
    return solver.solve(input, ...rest);
  } };
  vm.runInContext(html.slice(html.indexOf('    function calculateExpected('), html.indexOf('    const costDistributionSamples')), fixture.context);
  const normal = fixture.context.calculateExpected(inputFor(4, 0, 1));
  assert(normal);
  assert.deepEqual(attempts, [false]);
  assert.equal(normal.buyDecisions.allowPurchaseOnly, false);
  attempts.length = 0;
  const input = inputFor(12, 0, 1);
  const supplemental = fixture.context.calculateExpected(input);
  assert.deepEqual(attempts, [false, false]);
  assert.equal(supplemental.usedPurchaseOnlyFallback, true);
  assert(supplemental.purchaseOnlyCounts.some(count => count > 0));
  const { result } = simulate(input, supplemental.buyDecisions);
  assert.equal(result.completionSpends.length, 3000);
  assert(Math.abs(result.mean - supplemental.cost) < 5 * result.standardDeviation / Math.sqrt(result.sampleCount));
});

test('large targets use an integer supplemental deficit and retain every fallback policy state', () => {
  const fixture = makeContext();
  fixture.context.celebrationSolver = { purchaseOnlyPlan: solver.purchaseOnlyPlan, solve: solver.solve };
  vm.runInContext(html.slice(html.indexOf('    function calculateExpected('), html.indexOf('    const costDistributionSamples')), fixture.context);
  const result = fixture.context.calculateExpected(inputFor(358, 820, 84));
  assert(result);
  assert.equal(result.usedPurchaseOnlyFallback, true);
  assert.equal(result.buyDecisions.purchaseOnlyMasks.length, (358 + 1) * 6);
  assert(result.purchaseOnlyCounts.every(Number.isFinite));
  assert(result.purchaseOnlyCounts.some(count => count > 1));
});

test('reconstructed purchase-only policies preserve the active rule and paid refresh tier', () => {
  const input = { ...inputFor(12, 0, 1), allowPurchaseOnly: true };
  const exact = solver.solve(input, items, rewardTiers, calculation.refreshPrices);
  const policy = exact.buyDecisions;
  const rootKey = input.maxBuys * policy.starSize * policy.melonSize * policy.wordSize + input.needMelon * policy.wordSize;
  const index = policy.keys.indexOf(rootKey);
  policy.keys = new Float64Array([rootKey]);
  policy.masks = policy.masks.slice(index * 6, index * 6 + 6);
  policy.purchaseMasks = policy.purchaseMasks.slice(index * 6, index * 6 + 6);
  const fixture = makeContext();
  fixture.context.costDistributionSamples = 300;
  let result;
  fixture.context.simulateCostDistribution(input, policy, () => true, value => result = value);
  fixture.run();
  assert(fixture.rebuilds() > 0);
  assert.equal(result.completionSpends.length, 300);
  assert(Math.abs(result.mean - exact.cost) < 5 * result.standardDeviation / Math.sqrt(result.sampleCount));
});

function cacheFixture(storage) {
  const context = { items: structuredClone(items), rewardTiers, refreshPrices: calculation.refreshPrices,
    eventData: { archiveId: '2026-national-day' }, costDistributionSamples: 10000,
    window: { localStorage: storage } };
  vm.createContext(context);
  vm.runInContext(html.slice(html.indexOf('    const calculationCacheEntries'),
    html.indexOf('    function calculateExpectedInBackground(')), context);
  return context;
}

test('completed calculations and distributions survive reload; inputs and model changes invalidate them', () => {
  const storageData = new Map();
  const storage = { getItem: key => storageData.get(key), setItem: (key, value) => storageData.set(key, value) };
  const context = cacheFixture(storage);
  const input = inputFor(15, 80, 96);
  const result = { cost: 1000, counts: [1], buyDecisions: { keys: new Float64Array([1]) } };
  const distribution = { sampleCount: 10000, mean: 1000, standardDeviation: 10,
    lower95: 980, upper95: 1020, lower99: 970, upper99: 1030,
    completionSpends: new Float64Array(10000).fill(1000), quantiles: [{ percent: 50, cost: 1000 }] };
  context.saveCachedCalculation(input, result, distribution);
  const restored = cacheFixture(storage);
  const cached = restored.getCachedCalculation(input);
  assert.equal(cached.result.cost, 1000);
  assert.equal(cached.result.buyDecisions, undefined);
  assert.equal(cached.distribution.completionSpends.length, 10000);
  assert.equal(cached.distribution.completionSpends[0], 1000);
  assert.equal(restored.getCachedCalculation({ ...input, maxBuys: 95 }), null);
  restored.items[0].probability += .0001;
  assert.equal(restored.getCachedCalculation(input), null);
  restored.items[0].probability -= .0001;
  restored.eventData.archiveId = 'other-event';
  assert.equal(restored.getCachedCalculation(input), null);
});

test('calculation cache tolerates disabled storage and only keeps the last six results', () => {
  const context = cacheFixture({ getItem: () => { throw new Error('disabled'); }, setItem: () => { throw new Error('disabled'); } });
  const distribution = { sampleCount: 10000, completionSpends: new Float64Array([1]), quantiles: [{ cost: 1 }] };
  assert.equal(context.getCachedCalculation(inputFor(1, 0, 1)), null);
  for (let m = 1; m <= 7; m++) context.saveCachedCalculation(inputFor(m, 0, 1), { cost: m }, distribution);
  assert.equal(context.getCachedCalculation(inputFor(1, 0, 1)), null);
  assert.equal(context.getCachedCalculation(inputFor(7, 0, 1)).result.cost, 7);
  const corrupted = cacheFixture({ getItem: () => '[null,{}, {"key":"bad"}]' });
  assert.equal(corrupted.getCachedCalculation(inputFor(1, 0, 1)), null);
});
