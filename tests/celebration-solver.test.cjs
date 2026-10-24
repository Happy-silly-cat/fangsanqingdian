const assert = require('node:assert/strict');
const { test } = require('node:test');
const { solve, groupTasks } = require('../assets/celebration-solver');

const prices = [0, 20, 20, 20, 20, 50];
const inputFor = (melon, word, maxBuys, baseStars = 0) => ({
  needMelon: melon, needWord: word, targetMelon: melon, targetWord: word,
  ownedMelon: 0, ownedWord: 0, maxBuys, baseStars
});
const task = (name, cost, stars, melon, word, probability) => ({ name, cost, stars, melon, word, probability });
const close = (actual, expected) => assert(Math.abs(actual - expected) < 1e-7 * Math.max(1, expected), `${actual} != ${expected}`);

// Independent oracle: enumerate complete task histories and every tail acceptance subset.
function exhaustive(input, items, tiers) {
  function visit(counts) {
    const buys = counts.reduce((sum, count) => sum + count, 0);
    const stars = input.baseStars + counts.reduce((sum, count, i) => sum + count * items[i].stars, 0);
    const gifts = tiers.filter(tier => tier.need > input.baseStars && tier.need <= stars);
    const melon = gifts.reduce((sum, tier) => sum + tier.melon, 0)
      + counts.reduce((sum, count, i) => sum + count * items[i].melon, 0);
    const word = gifts.reduce((sum, tier) => sum + tier.word, 0)
      + counts.reduce((sum, count, i) => sum + count * items[i].word, 0);
    if (melon >= input.needMelon && word >= input.needWord) return Array(6).fill(0);
    if (buys === input.maxBuys) return Array(6).fill(Infinity);
    const children = items.map((item, i) => {
      const next = counts.slice(); next[i]++;
      return visit(next);
    });
    const values = Array(6).fill(Infinity);
    for (let mask = 1; mask < 2 ** items.length; mask++) {
      let p = 0, cost = 0;
      items.forEach((item, i) => {
        if (mask & (1 << i)) { p += item.probability; cost += item.probability * (item.cost + children[i][5]); }
      });
      values[5] = Math.min(values[5], (cost + (1 - p) * prices[5]) / p);
    }
    if (!Number.isFinite(values[5])) return values;
    for (let k = 4; k >= 0; k--) {
      const reject = prices[k] + values[k + 1];
      const other = 1 - items.reduce((sum, item) => sum + item.probability, 0);
      values[k] = other * reject + items.reduce((sum, item, i) =>
        sum + item.probability * Math.min(reject, item.cost + children[i][k]), 0);
    }
    return values;
  }
  return visit(items.map(() => 0))[0];
}

test('grouping preserves supplied probabilities and keeps different prices separate', () => {
  const grouped = groupTasks([
    task('word A', 225, 30, 0, 10, .0124), task('word B', 225, 30, 0, 10, .0138),
    task('stone A', 540, 50, 0, 0, .0144), task('stone B', 540, 50, 0, 0, .0123),
    task('cheap package', 225, 50, 0, 0, .0137)
  ]);
  assert.equal(grouped.length, 3);
  assert.equal(grouped[0].probability, .0262);
  assert.equal(grouped[0].name, '30星字');
  assert.equal(grouped[1].probability, .0267);
  assert.equal(grouped[1].name, '50星，540金币道具');
  assert.deepEqual(grouped[1].names, ['stone A', 'stone B']);
  assert.equal(grouped[2].cost, 225);
  assert.equal(grouped[2].name, '50星，225金币道具');
});

test('generic items merge only when stars and gold match, without merging currency tasks', () => {
  const raw = [
    task('rune refine', 225, 30, 0, 0, .0128),
    task('rune advance', 225, 30, 0, 0, .0149),
    task('treasure crystal', 225, 30, 0, 0, .0123),
    task('guiguzi', 225, 30, 0, 0, .0126),
    task('material', 225, 30, 2, 0, .0137),
    task('word', 225, 30, 0, 10, .0124),
    task('more stars', 225, 50, 0, 0, .0137),
    task('higher price', 288, 35, 0, 0, .0142)
  ];
  const grouped = groupTasks(raw);
  assert.equal(grouped.length, 5);
  assert.equal(grouped[0].name, '30星，225金币道具');
  assert.equal(grouped[0].probability, .0526);
  assert.equal(grouped[0].names.length, 4);
  assert.equal(grouped[1].name, 'material');
  assert.equal(grouped[2].name, 'word');
  assert.equal(grouped[3].name, '50星，225金币道具');
  assert.equal(grouped[4].name, '35星，288金币道具');
  const input = inputFor(1, 1, 2);
  const tiers = [{ need: 30, melon: 1, word: 1 }];
  close(solve(input, grouped, tiers, prices).cost, exhaustive(input, raw, tiers));
});

test('disabled tasks are skipped without renormalizing the remaining probabilities', () => {
  const raw = [task('active', 225, 30, 0, 0, .1),
    { ...task('disabled', 225, 30, 0, 0, .2), enabled: false },
    { ...task('disabled stars', 288, 35, 0, 0, .3), enabled: false }];
  const grouped = groupTasks(raw);
  assert.equal(grouped.length, 1);
  assert.equal(grouped[0].probability, .1);
  assert.deepEqual(grouped[0].names, ['active']);
  assert.equal(raw[1].probability, .2);
  const input = inputFor(1, 0, 1);
  const tiers = [{ need: 30, melon: 1, word: 0 }];
  close(solve(input, grouped, tiers, prices).cost, exhaustive(input, [raw[0]], tiers));
});

test('resource-state pruning matches exhaustive histories, including finite slots and claimed chests', () => {
  const items = [task('material', 30, 50, 4, 0, .12), task('word', 15, 30, 0, 10, .2),
    task('free', 0, 5, 1, 0, .06), task('stars only', 10, 35, 0, 0, .16)];
  const tiers = [{ need: 30, melon: 2, word: 5 }, { need: 80, melon: 4, word: 10 }];
  for (const baseStars of [0, 7, 30, 77, 100]) {
    for (const [m, w, n] of [[0, 0, 0], [1, 0, 1], [0, 1, 1], [3, 7, 2], [7, 16, 3], [30, 70, 2]]) {
      const input = inputFor(m, w, n, baseStars);
      const expected = exhaustive(input, items, tiers);
      const result = solve(input, items, tiers, prices);
      if (!Number.isFinite(expected)) assert.equal(result, null);
      else {
        assert(result);
        assert(Math.abs(result.cost - expected) < 1e-7 * Math.max(1, expected),
          JSON.stringify({ baseStars, m, w, n, expected, got: result.cost }));
        close(result.cost, result.purchaseCost + result.refreshCost);
        assert(result.buys <= n + 1e-10);
      }
    }
  }
});

test('a stars-only discount can be the optimal way to unlock needed chest materials', () => {
  const items = [task('expensive material', 1000, 5, 1, 0, .05), task('cheap stars', 25, 50, 0, 0, .3)];
  const result = solve(inputFor(2, 10, 1, 50), items, [{ need: 100, melon: 2, word: 10 }], prices);
  assert(result);
  close(result.counts[0], 0);
  close(result.counts[1], 1);
  close(result.rewardMelon, 2);
  close(result.rewardWord, 10);
});

test('nine task types retain the ninth policy bit; refresh is not reset after buying', () => {
  const items = Array.from({ length: 9 }, (_, i) => task(`item ${i}`, i === 8 ? 10 : 10000, 5, 1, 0, .02));
  const input = inputFor(2, 0, 2);
  const result = solve(input, items, [], prices);
  assert(result);
  close(result.cost, exhaustive(input, items, []));
  assert(result.buyDecisions.masks.some(mask => mask & 256));
  close(result.counts[8], 2);
  result.counts.slice(0, 8).forEach(count => close(count, 0));
});

test('unreachable shared targets return null even when each target individually fits', () => {
  const items = [task('material', 10, 50, 4, 0, .3), task('word', 10, 30, 0, 10, .3)];
  assert.equal(solve(inputFor(4, 10, 1), items, [], prices), null);
});

test('a free nonproductive claim provides another draw but still consumes a finite opportunity', () => {
  const items = [task('word', 225, 30, 0, 10, .05), task('free material', 0, 5, 1, 0, .1)];
  for (const n of [1, 2, 3, 4]) {
    const input = inputFor(0, 10, n, 100);
    const result = solve(input, items, [], prices);
    close(result.cost, exhaustive(input, items, []));
    close(result.cost, result.purchaseCost + result.refreshCost);
  }
});

test('random small instances match the independent oracle rather than only the current task table', () => {
  let seed = 731;
  const random = max => { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed % max; };
  for (let caseId = 0; caseId < 80; caseId++) {
    const items = Array.from({ length: caseId % 2 ? 6 : 4 }, (_, i) => task(`task ${i}`, random(80), 5 * (1 + random(10)),
      random(5), random(4) * 5, (5 + random(10)) / 100));
    const tiers = [{ need: 30, melon: 2, word: 5 }, { need: 80, melon: 4, word: 10 }];
    const input = inputFor(random(12), random(35), 3, random(90));
    const expected = exhaustive(input, items, tiers);
    const result = solve(input, items, tiers, prices);
    if (!Number.isFinite(expected)) assert.equal(result, null);
    else { assert(result); close(result.cost, expected); close(result.cost, result.purchaseCost + result.refreshCost); }
  }
});

test('invalid prices, gains and probability mass are rejected', () => {
  assert.throws(() => groupTasks([task('bad', -1, 5, 0, 0, .1)]), /Invalid/);
  assert.throws(() => groupTasks([task('bad', 0, 0, 0, 0, .1)]), /Invalid/);
  assert.throws(() => groupTasks([task('one', 0, 5, 1, 0, .6), task('two', 0, 5, 1, 0, .5)]), /100%/);
});
