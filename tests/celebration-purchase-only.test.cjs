const assert = require('node:assert/strict');
const { test } = require('node:test');
const { solve, groupTasks } = require('../assets/celebration-solver');
const prices = [0, 20, 20, 20, 20, 50];
const task = (name, cost, stars, melon, word, probability, purchaseMelon = 0) =>
  ({ name, cost, stars, melon, word, probability, ...(purchaseMelon ? { purchaseMelon } : {}) });
const inputFor = (m, w, n, baseStars = 0) => ({ needMelon: m, needWord: w, maxBuys: n,
  baseStars, ownedMelon: 0, ownedWord: 0, allowPurchaseOnly: true });
const close = (a, b) => assert(Math.abs(a - b) < 1e-7 * Math.max(1, b), `${a} != ${b}`);

// Enumerate every mutually exclusive reject/claim/purchase-only tail policy.
function oracle(input, items, tiers) {
  const memo = new Map();
  const cap = Math.max(input.baseStars, ...tiers.map(tier => tier.need));
  function visit(r, stars, m, w) {
    if (!m && !w) return Array(6).fill(0);
    if (!r) return Array(6).fill(Infinity);
    const key = [r, stars, m, w].join(',');
    if (memo.has(key)) return memo.get(key);
    const options = items.map(item => {
      const nextStars = Math.min(cap, stars + item.stars);
      const gifts = tiers.filter(tier => tier.need > stars && tier.need <= nextStars);
      const claim = visit(r - 1, nextStars, Math.max(0, m - item.melon - gifts.reduce((sum, tier) => sum + tier.melon, 0)),
        Math.max(0, w - item.word - gifts.reduce((sum, tier) => sum + tier.word, 0)));
      const remaining = Math.max(0, m - (item.purchaseMelon || 0));
      const partial = item.purchaseMelon && m ? visit(r, stars, remaining, w) : null;
      return Array.from({ length: 6 }, (_, k) => [item.cost + claim[k],
        partial ? item.cost + ((!remaining && !w) ? 0 : prices[Math.max(1, k)] + partial[Math.min(5, k + 1)]) : Infinity]);
    });
    const values = Array(6).fill(Infinity);
    function combinations(i, p, weighted) {
      if (i === items.length) {
        if (p > 0) values[5] = Math.min(values[5], (weighted + (1 - p) * prices[5]) / p);
        return;
      }
      combinations(i + 1, p, weighted);
      for (const cost of options[i][5]) if (Number.isFinite(cost)) {
        combinations(i + 1, p + items[i].probability, weighted + items[i].probability * cost);
      }
    }
    combinations(0, 0, 0);
    for (let k = 4; k >= 0; k--) {
      const reject = prices[k] + values[k + 1];
      values[k] = (1 - items.reduce((sum, item) => sum + item.probability, 0)) * reject
        + items.reduce((sum, item, i) => sum + item.probability * Math.min(reject, ...options[i][k]), 0);
    }
    memo.set(key, values);
    return values;
  }
  return visit(input.maxBuys, input.baseStars, input.needMelon, input.needWord)[0];
}

test('purchase-only can exceed task capacity without stars or extra claimed tasks', () => {
  const items = [task('50 star', 100, 50, 4, 0, .2, 2)];
  const input = inputFor(10, 0, 1);
  const result = solve(input, items, [], prices);
  close(result.cost, oracle(input, items, []));
  close(result.counts[0], 1);
  close(result.purchaseOnlyCounts[0], 3);
  close(result.buys, 1);
  close(result.stars, 50);
  close(result.melon, 10);
  close(result.cost, result.purchaseCost + result.refreshCost);
  assert(result.buyDecisions.purchaseMasks.some(mask => mask !== 0));
  assert.equal(solve({ ...input, allowPurchaseOnly: false }, items, [], prices), null);
  assert.equal(solve(inputFor(10, 0, 0), items, [], prices), null);
});

test('normal claims remain optimal with abundant tasks and purchase-only cannot generate words', () => {
  const items = [task('50 star', 100, 50, 4, 0, .2, 2), task('word', 50, 30, 0, 10, .3)];
  const normal = solve(inputFor(8, 0, 4), items, [], prices);
  close(normal.purchaseOnlyCounts[0], 0);
  const input = inputFor(3, 10, 1);
  const result = solve(input, items, [], prices);
  close(result.cost, oracle(input, items, []));
  close(result.counts[1], 1);
  close(result.counts[0], 0);
  close(result.purchaseOnlyCounts[0], 2);
  close(result.stars, 30);
  assert.equal(solve(inputFor(1, 11, 1), items, [], prices), null);
});

test('purchase-only receives no stars or chest gifts; already claimed tiers stay excluded', () => {
  const items = [task('50 star', 100, 50, 4, 0, .2, 2), task('30 star', 50, 30, 2, 0, .3, 1),
    task('word', 50, 30, 0, 10, .2), task('free', 0, 5, 1, 0, .1)];
  const tiers = [{ need: 30, melon: 2, word: 5 }, { need: 80, melon: 4, word: 10 }];
  for (const base of [0, 30, 77, 100]) for (const [m, w, n] of [[10, 0, 1], [8, 10, 1], [7, 16, 2], [15, 12, 3]]) {
    const input = inputFor(m, w, n, base);
    const expected = oracle(input, items, tiers);
    const result = solve(input, items, tiers, prices);
    if (!Number.isFinite(expected)) assert.equal(result, null);
    else {
      close(result.cost, expected);
      close(result.cost, result.purchaseCost + result.refreshCost);
      assert(result.buys <= n + 1e-8);
      close(result.stars, base + result.counts.reduce((sum, count, i) => sum + count * items[i].stars, 0));
    }
  }
});

test('random small reusable-task cases agree with independent exclusive-offer policies', () => {
  let seed = 731;
  const random = max => { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed % max; };
  for (let i = 0; i < 35; i++) {
    const items = [task('big', 20 + random(100), 50, 4, 0, .12, 2),
      task('small', 10 + random(60), 30, 2, 0, .15, 1),
      task('word', 20 + random(40), 30, 0, 5, .2), task('free', 0, 5, 1, 0, .08)];
    const tiers = [{ need: 30, melon: 1, word: 5 }, { need: 80, melon: 2, word: 5 }];
    const input = inputFor(random(13), random(17), 1 + random(3), random(100));
    const expected = oracle(input, items, tiers);
    const result = solve(input, items, tiers, prices);
    if (!Number.isFinite(expected)) assert.equal(result, null);
    else { close(result.cost, expected); close(result.cost, result.purchaseCost + result.refreshCost); }
  }
});

test('grouping separates different purchase-only rewards and rejects invalid quantities', () => {
  const a = task('A', 100, 50, 4, 0, .1, 2);
  assert.equal(groupTasks([a, { ...a, name: 'B', purchaseMelon: 1 }]).length, 2);
  assert.throws(() => groupTasks([{ ...a, purchaseMelon: 5 }]), /Invalid purchase-only/);
});
