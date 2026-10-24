(function (root) {
  function groupTasks(tasks) {
    const groups = [];
    const byEffect = new Map();
    for (const task of tasks) {
      if (![task.cost, task.stars, task.melon, task.word].every(Number.isSafeInteger)
        || task.cost < 0 || task.stars <= 0 || task.melon < 0 || task.word < 0
        || !Number.isFinite(task.probability) || task.probability <= 0 || task.probability > 1) {
        throw new Error('Invalid task configuration');
      }
      if (task.enabled === false) continue;
      if (task.purchaseMelon !== undefined && (!Number.isSafeInteger(task.purchaseMelon)
        || task.purchaseMelon < 0 || task.purchaseMelon > task.melon || (task.purchaseMelon > 0 && task.cost <= 0))) {
        throw new Error('Invalid purchase-only reward');
      }
      const key = [task.cost, task.stars, task.melon, task.word, task.purchaseMelon || 0].join(':');
      let group = byEffect.get(key);
      if (!group) {
        group = { ...task, names: [], probability: 0, probabilityPoints: 0 };
        groups.push(group);
        byEffect.set(key, group);
      }
      group.names.push(task.name);
      group.probabilityPoints += Math.round(task.probability * 10000);
      group.probability = group.probabilityPoints / 10000;
      group.name = group.names.join(' / ');
      if (group.word > 0 && group.names.length > 1) {
        group.key = 'word30';
        group.name = `${group.stars}星字`;
      } else if (group.melon === 0 && group.word === 0) {
        group.name = `${group.stars}星，${group.cost}金币道具`;
      }
    }
    if (groups.reduce((sum, group) => sum + group.probabilityPoints, 0) > 10000) {
      throw new Error('Task probabilities exceed 100%');
    }
    return groups;
  }

  function purchaseOnlyPlan(need, items, refreshPrices, startDeficit = need) {
    need = Math.max(0, Math.ceil(need));
    startDeficit = Math.max(0, Math.min(need, Math.ceil(startDeficit)));
    const masks = new Uint32Array((need + 1) * 6);
    const values = new Float64Array((need + 1) * 6);
    const expectedCounts = items.map(() => 0);
    const partial = items.map((item, index) => ({ item, index })).filter(({ item }) => item.purchaseMelon > 0);
    if (!need || !startDeficit) return { cost: 0, masks, expectedCounts };
    if (!partial.length) return null;
    const valueAt = (deficit, stage) => values[deficit * 6 + stage];
    const priceAfterPartial = stage => refreshPrices[Math.max(1, stage)];

    for (let deficit = 1; deficit <= need; deficit++) {
      const offers = partial.map(({ item, index }) => ({
        index,
        value: item.cost + (deficit > item.purchaseMelon
          ? priceAfterPartial(5) + valueAt(deficit - item.purchaseMelon, 5) : 0)
      })).sort((a, b) => a.value - b.value);
      let probability = 0;
      let weighted = 0;
      let threshold = Infinity;
      let mask = 0;
      let prefixMask = 0;
      for (const offer of offers) {
        probability += items[offer.index].probability;
        weighted += items[offer.index].probability * offer.value;
        const candidate = (refreshPrices[5] + weighted) / probability;
        prefixMask |= 1 << offer.index;
        threshold = candidate;
        mask = prefixMask;
        if (candidate <= (offers[offers.indexOf(offer) + 1]?.value ?? Infinity)) break;
      }
      values[deficit * 6 + 5] = threshold - refreshPrices[5];
      masks[deficit * 6 + 5] = mask;

      for (let stage = 4; stage >= 0; stage--) {
        const reject = refreshPrices[stage] + valueAt(deficit, stage + 1);
        let value = reject;
        let acceptedProbability = 0;
        let acceptedCost = 0;
        let acceptedMask = 0;
        for (const { item, index } of partial) {
          const buy = item.cost + (deficit > item.purchaseMelon
            ? priceAfterPartial(stage) + valueAt(deficit - item.purchaseMelon, Math.min(5, stage + 1)) : 0);
          if (buy <= reject) {
            acceptedProbability += item.probability;
            acceptedCost += item.probability * buy;
            acceptedMask |= 1 << index;
          }
        }
        value = (1 - acceptedProbability) * reject + acceptedCost;
        values[deficit * 6 + stage] = value;
        masks[deficit * 6 + stage] = acceptedMask;
      }
    }

    const expected = Array.from({ length: need + 1 }, () =>
      Array.from({ length: 6 }, () => new Float64Array(items.length)));
    for (let deficit = 1; deficit <= need; deficit++) {
      const mask = masks[deficit * 6 + 5];
      const probability = items.reduce((sum, item, index) =>
        sum + ((mask & (1 << index)) ? item.probability : 0), 0);
      for (let i = 0; i < items.length; i++) {
        let count = 0;
        for (let acceptedIndex = 0; acceptedIndex < items.length; acceptedIndex++) {
          if (!(mask & (1 << acceptedIndex))) continue;
          const next = Math.max(0, deficit - items[acceptedIndex].purchaseMelon);
          count += items[acceptedIndex].probability * (
            (acceptedIndex === i ? 1 : 0) + expected[next][5][i]
          );
        }
        expected[deficit][5][i] = probability ? count / probability : 0;
      }
      for (let stage = 4; stage >= 0; stage--) {
        const mask = masks[deficit * 6 + stage];
        const rejectProbability = 1 - items.reduce((sum, item, index) =>
          sum + ((mask & (1 << index)) ? item.probability : 0), 0);
        for (let i = 0; i < items.length; i++) {
          let count = rejectProbability * expected[deficit][stage + 1][i];
          for (let acceptedIndex = 0; acceptedIndex < items.length; acceptedIndex++) {
            if (!(mask & (1 << acceptedIndex))) continue;
            const next = Math.max(0, deficit - items[acceptedIndex].purchaseMelon);
            count += items[acceptedIndex].probability * (
              (acceptedIndex === i ? 1 : 0)
              + expected[next][Math.min(5, stage + 1)][i]
            );
          }
          expected[deficit][stage][i] = count;
        }
      }
    }
    for (let i = 0; i < items.length; i++) expectedCounts[i] = expected[startDeficit][0][i];
    return { cost: values[startDeficit * 6], masks, expectedCounts };
  }

  // The state records resources, not task counts: identical outcomes share a child.
  function solve(input, items, rewardTiers, refreshPrices, onProgress) {
    const startedAt = Date.now();
    let reportedAt = startedAt;
    const reportProgress = () => {
      const now = Date.now();
      if (onProgress && now - reportedAt >= 2000) {
        reportedAt = now;
        onProgress({ elapsedSeconds: Math.floor((now - startedAt) / 1000) });
      }
    };
    const gcd = (a, b) => b ? gcd(b, a % b) : a;
    const starUnit = items.reduce((unit, item) => gcd(unit, item.stars), 0) || 1;
    const wordUnit = [...items.map(item => item.word), ...rewardTiers.map(tier => tier.word)]
      .reduce((unit, value) => gcd(unit, value), 0) || 1;
    const maxBuys = input.maxBuys;
    const reusable = input.allowPurchaseOnly === true && items.some(item => item.purchaseMelon > 0);
    // The free refresh has already found the purchased offer; never grant
    // another free refresh when abandoning its unclaimed reward.
    const purchaseRefreshPrice = stage => refreshPrices[Math.max(1, stage)];
    const maxStars = Math.max(...items.map(item => item.stars));
    const lastReward = rewardTiers.filter(tier => tier.need > input.baseStars
      && tier.need <= input.baseStars + maxBuys * maxStars).at(-1)?.need || input.baseStars;
    const starCap = Math.min(maxBuys * maxStars / starUnit,
      Math.max(0, Math.ceil((lastReward - input.baseStars) / starUnit)));
    const melonSize = input.needMelon + 1;
    const wordSize = Math.ceil(input.needWord / wordUnit) + 1;
    const starSize = starCap + 1;
    const keyFor = (r, s, m, w) => (((r * starSize + s) * melonSize + m) * wordSize + w);
    if (!Number.isSafeInteger(keyFor(maxBuys, starCap, melonSize - 1, wordSize - 1))) {
      throw new Error('Calculation target is too large');
    }
    if (items.length > 30) throw new Error('Too many distinct task outcomes');
    const rewards = Array.from({ length: starSize }, (_, s) => {
      const unlocked = rewardTiers.filter(tier => tier.need > input.baseStars
        && tier.need <= input.baseStars + s * starUnit);
      return {
        melon: unlocked.reduce((sum, tier) => sum + tier.melon, 0),
        word: unlocked.reduce((sum, tier) => sum + tier.word, 0) / wordUnit,
        count: unlocked.length
      };
    });
    const maxMelon = Math.max(...items.map(item => item.melon));
    const maxWord = Math.max(...items.map(item => item.word / wordUnit));
    if ((!reusable && input.needMelon > maxBuys * maxMelon + rewards[starCap].melon)
      || Math.ceil(input.needWord / wordUnit) > maxBuys * maxWord + rewards[starCap].word) return null;
    const effects = [];
    const effectIds = items.map(item => {
      const effect = [item.stars / starUnit, item.melon, item.word / wordUnit];
      let id = effects.findIndex(other => other.every((value, i) => value === effect[i]));
      if (id < 0) { id = effects.length; effects.push(effect); }
      return id;
    });
    const totalTaskProbability = items.reduce((sum, item) => sum + item.probability, 0);
    const nextStarTable = new Uint32Array(starSize * effects.length);
    for (let s = 0; s < starSize; s++) {
      for (let e = 0; e < effects.length; e++) nextStarTable[s * effects.length + e] = Math.min(starCap, s + effects[e][0]);
    }
    // Bound the minimum stars needed even with the most favorable possible offers.
    // If finishing one resource necessarily earns enough gifts for the other,
    // the two-resource problem is exactly a single-resource problem.
    function directFrontier(component) {
      const length = maxBuys * maxStars / starUnit + 1;
      const rows = [new Float64Array(length)];
      for (let r = 1; r <= maxBuys; r++) {
        const row = new Float64Array(length);
        for (let stars = 0; stars < length; stars++) {
          let best = rows[r - 1][stars];
          for (const effect of effects) {
            if (stars >= effect[0]) best = Math.max(best, rows[r - 1][stars - effect[0]] + effect[component]);
          }
          row[stars] = Math.max(best, stars > 0 ? row[stars - 1] : 0);
        }
        rows.push(row);
      }
      return rows;
    }
    const materialFrontier = directFrontier(1);
    const wordFrontier = directFrontier(2);
    function guaranteedGift(r, s, deficit, kind) {
      const rows = kind === 'melon' ? materialFrontier : wordFrontier;
      let low = 0, high = r * maxStars / starUnit;
      while (low < high) {
        const mid = Math.floor((low + high) / 2);
        const gain = rows[r][mid] + rewards[Math.min(starCap, s + mid)][kind] - rewards[s][kind];
        if (gain >= deficit) high = mid;
        else low = mid + 1;
      }
      return rewards[Math.min(starCap, s + low)];
    }
    const transition = (state, effect) => {
      const [r, s, m, w] = state;
      const nextS = Math.min(starCap, s + effect[0]);
      return [r - 1, nextS,
        Math.max(0, m - effect[1] - rewards[nextS].melon + rewards[s].melon),
        Math.max(0, w - effect[2] - rewards[nextS].word + rewards[s].word)];
    };
    // Single-resource relaxations ignore the other target and the purchase limit.
    // They are lower bounds, used only to avoid evaluating provably rejected offers.
    function resourceBound(kind, limit) {
      const gainFor = effect => effect[kind === 'melon' ? 1 : 2];
      const maxDirect = Math.max(...effects.map(gainFor));
      const gainTable = new Float64Array(nextStarTable.length);
      for (let s = 0; s < starSize; s++) {
        for (let e = 0; e < effects.length; e++) {
          const index = s * effects.length + e;
          gainTable[index] = gainFor(effects[e]) + rewards[nextStarTable[index]][kind] - rewards[s][kind];
        }
      }
      const size = limit + 1;
      const values = new Float64Array(starSize * size * 6).fill(NaN);
      const steps = new Uint16Array(starSize * size * 6);
      const unlimitedMasks = new Uint32Array(starSize * size * 6);
      function bound(s, deficit, stage) {
        if (!deficit) return 0;
        const offset = (s * size + deficit) * 6;
        if (!Number.isNaN(values[offset])) return values[offset + stage];
        const children = effects.map(effect => {
          const nextS = Math.min(starCap, s + effect[0]);
          const nextDeficit = Math.max(0, deficit - gainFor(effect)
            - rewards[nextS][kind] + rewards[s][kind]);
          return nextS === s && nextDeficit === deficit ? null : [nextS, nextDeficit];
        });
        const offers = items.map((item, i) => ({ index: i,
          value: children[effectIds[i]] ? item.cost + bound(...children[effectIds[i]], 5) : Infinity
        })).filter(offer => Number.isFinite(offer.value)).sort((a, b) => a.value - b.value);
        if (!offers.length) {
          values.fill(Infinity, offset, offset + 6);
          return Infinity;
        }
        const loops = items.map((item, i) => ({ ...item, index: i }))
          .filter(item => !children[effectIds[item.index]]).sort((a, b) => a.cost - b.cost);
        const tailLoops = loops.filter(item => item.cost < refreshPrices[5]);
        const tailCharge = refreshPrices[5] + tailLoops.reduce((sum, item) =>
          sum + item.probability * (item.cost - refreshPrices[5]), 0);
        let p = 0, weighted = 0, threshold = Infinity;
        for (let i = 0; i < offers.length; i++) {
          const offer = offers[i];
          p += items[offer.index].probability;
          weighted += items[offer.index].probability * offer.value;
          threshold = (tailCharge + weighted) / p;
          if (threshold <= (offers[i + 1]?.value ?? Infinity)) break;
        }
        values[offset + 5] = threshold - refreshPrices[5];
        if (tailLoops.length) {
          steps[offset + 5] = 65535;
          tailLoops.forEach(item => unlimitedMasks[offset + 5] |= 1 << item.index);
        }
        for (const offer of offers) {
          if (offer.value > threshold) continue;
          unlimitedMasks[offset + 5] |= 1 << offer.index;
          const child = children[effectIds[offer.index]];
          const childSteps = child[1] ? steps[(child[0] * size + child[1]) * 6 + 5] : 0;
          steps[offset + 5] = Math.max(steps[offset + 5], Math.min(65535, childSteps + 1));
        }
        const totalP = items.reduce((sum, item) => sum + item.probability, 0);
        for (let k = 4; k >= 0; k--) {
          const reject = refreshPrices[k] + values[offset + k + 1];
          let value = (1 - totalP) * reject;
          steps[offset + k] = steps[offset + k + 1];
          items.forEach((item, i) => {
            const child = children[effectIds[i]];
            const buy = child ? item.cost + bound(...child, k) : Infinity;
            value += item.probability * Math.min(reject, buy);
            if (buy <= reject) {
              unlimitedMasks[offset + k] |= 1 << i;
              steps[offset + k] = Math.max(steps[offset + k],
                Math.min(65535, 1 + (child[1] ? steps[(child[0] * size + child[1]) * 6 + k] : 0)));
            }
          });
          let loopP = 0, loopCost = 0, loopMask = 0, bestValue = value, bestMask = 0;
          for (const loop of loops) {
            loopP += loop.probability;
            loopCost += loop.probability * loop.cost;
            loopMask |= 1 << loop.index;
            const candidate = (value - loopP * reject + loopCost) / (1 - loopP);
            if (candidate < bestValue) { bestValue = candidate; bestMask = loopMask; }
          }
          values[offset + k] = bestValue;
          if (bestMask) {
            unlimitedMasks[offset + k] |= bestMask;
            steps[offset + k] = 65535;
          }
        }
        return values[offset + stage];
      }
      const denseMemo = starSize * size * (maxBuys + 1) <= 32000000;
      const finiteMemo = Array.from({ length: maxBuys + 1 }, () => denseMemo ? null : new Map());
      const finiteChunks = [];
      const finiteMaskChunks = [];
      const finitePurchaseChunks = [];
      const reusableResource = reusable && kind === 'melon';
      let finiteCount = 0;
      function finite(r, s, deficit, stage) {
        if (!deficit) return 0;
        if (!r) return Infinity;
        const key = s * size + deficit;
        const savedId = denseMemo ? (finiteMemo[r]?.[key] || 0) - 1 : finiteMemo[r].get(key);
        if (savedId !== undefined && savedId >= 0) {
          const saved = finiteChunks[Math.floor(savedId / 32768)][savedId % 32768 * 6 + stage];
          if (!Number.isNaN(saved)) return saved;
        }
        const lower = bound(s, deficit, stage);
        const offset = (s * size + deficit) * 6;
        if (r >= steps[offset + stage]) return lower;
        const possibleS = Math.min(starCap, s + r * maxStars / starUnit);
        if (!reusableResource && deficit > r * maxDirect + rewards[possibleS][kind] - rewards[s][kind]) return Infinity;
        let id = savedId;
        if (id === undefined || id < 0) {
          id = finiteCount++;
          if (id % 16384 === 0) reportProgress();
          if (id % 32768 === 0) {
            finiteChunks.push(new Float64Array(32768 * 6).fill(NaN));
            finiteMaskChunks.push(new Uint32Array(32768 * 6));
            if (reusableResource) finitePurchaseChunks.push(new Uint32Array(32768 * 6));
          }
          if (denseMemo) {
            finiteMemo[r] ||= new Uint32Array(starSize * size);
            finiteMemo[r][key] = id + 1;
          } else finiteMemo[r].set(key, id);
        }
        const current = finiteChunks[Math.floor(id / 32768)];
        const currentMasks = finiteMaskChunks[Math.floor(id / 32768)];
        const purchaseMasks = reusableResource ? finitePurchaseChunks[Math.floor(id / 32768)] : null;
        const index = id % 32768 * 6;
        const effectOffset = s * effects.length;
        const purchaseValue = (i, k) => {
          if (!reusableResource || !items[i].purchaseMelon) return Infinity;
          const remaining = Math.max(0, deficit - items[i].purchaseMelon);
          return items[i].cost + (remaining ? purchaseRefreshPrice(k) + finite(r, s, remaining, Math.min(5, k + 1)) : 0);
        };
        if (stage < 5) {
          const reject = refreshPrices[stage] + finite(r, s, deficit, stage + 1);
          let value = (1 - totalTaskProbability) * reject;
          for (let i = 0; i < items.length; i++) {
            const effectIndex = effectOffset + effectIds[i];
            const buy = items[i].cost + finite(r - 1, nextStarTable[effectIndex], Math.max(0, deficit - gainTable[effectIndex]), stage);
            const purchase = purchaseValue(i, stage);
            value += items[i].probability * Math.min(reject, buy, purchase);
            if (purchase < buy && purchase <= reject) purchaseMasks[index + stage] |= 1 << i;
            else if (buy <= reject) currentMasks[index + stage] |= 1 << i;
          }
          current[index + stage] = value;
          return value;
        }
        const buys = new Float64Array(items.length);
        let mask = 0;
        let purchaseMask = 0;
        for (let i = 0; i < items.length; i++) {
          const effectIndex = effectOffset + effectIds[i];
          const claim = items[i].cost + finite(r - 1, nextStarTable[effectIndex], Math.max(0, deficit - gainTable[effectIndex]), 5);
          const purchase = purchaseValue(i, 5);
          buys[i] = Math.min(claim, purchase);
          if (purchase < claim) purchaseMask |= 1 << i;
          if (Number.isFinite(buys[i])) mask |= 1 << i;
        }
        if (!mask) { current[index + 5] = Infinity; return Infinity; }
        let threshold;
        // Removing offers above the current threshold can only lower it.
        // This finds the same optimal prefix without allocating sorted objects.
        while (true) {
          let p = 0, weighted = 0;
          for (let i = 0; i < items.length; i++) {
            if (!(mask & (1 << i))) continue;
            p += items[i].probability;
            weighted += items[i].probability * buys[i];
          }
          threshold = (refreshPrices[5] + weighted) / p;
          let nextMask = mask;
          for (let i = 0; i < items.length; i++) if (buys[i] > threshold) nextMask &= ~(1 << i);
          if (nextMask === mask) break;
          mask = nextMask;
        }
        current[index + 5] = threshold - refreshPrices[5];
        currentMasks[index + 5] = mask & ~purchaseMask;
        if (purchaseMasks) purchaseMasks[index + 5] = mask & purchaseMask;
        return current[index + stage];
      }
      finite.mask = (r, s, deficit, stage) => {
        finite(r, s, deficit, stage);
        const offset = (s * size + deficit) * 6;
        if (r >= steps[offset + stage]) return unlimitedMasks[offset + stage];
        const key = s * size + deficit;
        const id = denseMemo ? (finiteMemo[r]?.[key] || 0) - 1 : finiteMemo[r].get(key);
        return id === undefined || id < 0 ? 0 : finiteMaskChunks[Math.floor(id / 32768)][id % 32768 * 6 + stage];
      };
      finite.lower = bound;
      finite.purchaseMask = (r, s, deficit, stage) => {
        if (!reusableResource) return 0;
        finite(r, s, deficit, stage);
        const offset = (s * size + deficit) * 6;
        if (r >= steps[offset + stage]) return 0;
        const key = s * size + deficit;
        const id = denseMemo ? (finiteMemo[r]?.[key] || 0) - 1 : finiteMemo[r].get(key);
        return id === undefined || id < 0 ? 0 : finitePurchaseChunks[Math.floor(id / 32768)][id % 32768 * 6 + stage];
      };
      finite.unlimitedFits = (r, s, deficit) => {
        bound(s, deficit, 0);
        const offset = (s * size + deficit) * 6;
        return Array.from({ length: 6 }, (_, stage) => steps[offset + stage]).every(count => count <= r);
      };
      return finite;
    }
    const materialBound = resourceBound('melon', input.needMelon);
    const wordBound = resourceBound('word', wordSize - 1);
    const lowerBound = (state, stage) => Math.max(materialBound.lower(state[1], state[2], stage),
      reusable ? wordBound(state[0], state[1], state[3], stage) : wordBound.lower(state[1], state[3], stage));
    const memo = Array.from({ length: maxBuys + 1 }, () => new Map());
    const feasibility = new Map();
    const coverMaterial = items.find(item => items.every(other => other.melon <= item.melon
      && (other.word > 0 || other.stars <= item.stars)) && item.word === 0);
    const coverWord = items.find(item => item.word === maxWord * wordUnit
      && item.melon === 0
      && items.every(other => other.word === 0 || (other.melon === 0 && other.word <= item.word && other.stars <= item.stars)));
    function canFinish(r, s, m, w) {
      if (reusable) return true;
      if (!coverMaterial || !coverWord) return true;
      const key = r * starSize + s;
      let frontier = feasibility.get(key);
      if (!frontier) {
        frontier = new Float64Array(wordSize).fill(-1);
        for (let words = 0; words <= r; words++) {
          const endS = Math.min(starCap, s + ((r - words) * coverMaterial.stars + words * coverWord.stars) / starUnit);
          const gainM = (r - words) * coverMaterial.melon + rewards[endS].melon - rewards[s].melon;
          const gainW = Math.min(wordSize - 1, words * coverWord.word / wordUnit + rewards[endS].word - rewards[s].word);
          frontier[gainW] = Math.max(frontier[gainW], gainM);
        }
        for (let w = wordSize - 2; w >= 0; w--) frontier[w] = Math.max(frontier[w], frontier[w + 1]);
        feasibility.set(key, frontier);
      }
      return m <= frontier[w];
    }
    const keys = [];
    const stateFor = key => {
      const w = key % wordSize;
      key = Math.floor(key / wordSize);
      const m = key % melonSize;
      key = Math.floor(key / melonSize);
      return [Math.floor(key / starSize), key % starSize, m, w];
    };
    const chunkSize = 32768;
    const valueChunks = [];
    const maskChunks = [];
    const purchaseMaskChunks = [];
    const valueAt = (id, stage) => id === -1 ? 0 : id === -2 ? Infinity
      : valueChunks[Math.floor(id / chunkSize)][(id % chunkSize) * 6 + stage];
    const maskAt = (id, stage) => maskChunks[Math.floor(id / chunkSize)][(id % chunkSize) * 6 + stage];
    const purchaseMaskAt = (id, stage) => reusable && id >= 0
      ? purchaseMaskChunks[Math.floor(id / chunkSize)][(id % chunkSize) * 6 + stage] : 0;
    function register(state, key) {
      const id = keys.length;
      if (id % 16384 === 0) reportProgress();
      keys.push(key);
      memo[state[0]].set(key, id);
      if (id % chunkSize === 0) {
        valueChunks.push(new Float64Array(chunkSize * 6));
        maskChunks.push(new Uint32Array(chunkSize * 6));
        if (reusable) purchaseMaskChunks.push(new Uint32Array(chunkSize * 6));
      }
      return id;
    }
    function visit(state) {
      const [r, s, m, w] = state;
      if (m === 0 && w === 0) return -1;
      if (r === 0) return -2;
      const key = keyFor(r, s, m, w);
      const saved = memo[r].get(key);
      if (saved !== undefined) return saved;
      const possibleS = Math.min(starCap, s + r * maxStars / starUnit);
      if ((!reusable && m > r * maxMelon + rewards[possibleS].melon - rewards[s].melon)
        || w > r * maxWord + rewards[possibleS].word - rewards[s].word) return -2;
      if (!canFinish(r, s, m, w)) return -2;
      const materialCoversBoth = m && (!reusable || materialBound.unlimitedFits(r, s, m))
        && w <= guaranteedGift(r, s, m, 'melon').word - rewards[s].word;
      const wordCoversBoth = w && m <= guaranteedGift(r, s, w, 'word').melon - rewards[s].melon;
      if (!m || !w || materialCoversBoth || wordCoversBoth) {
        const useMaterial = !w || materialCoversBoth;
        const bound = useMaterial ? materialBound : wordBound;
        const deficit = useMaterial ? m : w;
        const value = bound(r, s, deficit, 5);
        if (!Number.isFinite(value)) return -2;
        const id = register(state, key);
        for (let stage = 0; stage < 6; stage++) {
          valueChunks[Math.floor(id / chunkSize)][id % chunkSize * 6 + stage] = bound(r, s, deficit, stage);
          maskChunks[Math.floor(id / chunkSize)][id % chunkSize * 6 + stage] = bound.mask(r, s, deficit, stage);
          if (reusable) purchaseMaskChunks[Math.floor(id / chunkSize)][id % chunkSize * 6 + stage] = bound.purchaseMask(r, s, deficit, stage);
        }
        return id;
      }
      const children = effects.map(effect => transition(state, effect));
      const purchaseChildren = items.map(item => reusable && item.purchaseMelon > 0 && m > 0
        ? [r, s, Math.max(0, m - item.purchaseMelon), w] : null);
      const purchaseIds = items.map(() => undefined);
      const purchaseLower = (i, stage) => {
        const child = purchaseChildren[i];
        if (!child) return Infinity;
        return items[i].cost + (child[2] || child[3]
          ? purchaseRefreshPrice(stage) + lowerBound(child, Math.min(5, stage + 1)) : 0);
      };
      const purchaseValue = (i, stage) => {
        const child = purchaseChildren[i];
        if (!child) return Infinity;
        if (!child[2] && !child[3]) return items[i].cost;
        if (purchaseIds[i] === undefined) purchaseIds[i] = visit(child);
        return items[i].cost + purchaseRefreshPrice(stage) + valueAt(purchaseIds[i], Math.min(5, stage + 1));
      };
      const childIds = effects.map(() => undefined);
      const resolve = effectId => {
        if (childIds[effectId] === undefined) childIds[effectId] = visit(children[effectId]);
        return childIds[effectId];
      };
      const pending = items.map((item, index) => ({
        index, lower: Math.min(item.cost + lowerBound(children[effectIds[index]], 5), purchaseLower(index, 5))
      })).sort((a, b) => a.lower - b.lower);
      let offers = [];
      let bestThreshold = Infinity;
      for (const candidate of pending) {
        if (candidate.lower > bestThreshold + 1e-8) break;
        const i = candidate.index;
        const claim = items[i].cost + lowerBound(children[effectIds[i]], 5) <= bestThreshold + 1e-8
          ? items[i].cost + valueAt(resolve(effectIds[i]), 5) : Infinity;
        const purchase = purchaseLower(i, 5) <= bestThreshold + 1e-8 ? purchaseValue(i, 5) : Infinity;
        const value = Math.min(claim, purchase);
        if (!Number.isFinite(value)) continue;
        offers.push({ index: i, value, purchaseOnly: purchase < claim });
        offers.sort((a, b) => a.value - b.value);
        let p = 0, weighted = 0;
        for (const offer of offers) {
          p += items[offer.index].probability;
          weighted += items[offer.index].probability * offer.value;
          bestThreshold = Math.min(bestThreshold, (refreshPrices[5] + weighted) / p);
        }
      }
      if (!offers.length) { memo[r].set(key, -2); return -2; }
      const id = register(state, key);
      const offset = (id % chunkSize) * 6;
      const values = valueChunks[Math.floor(id / chunkSize)];
      const masks = maskChunks[Math.floor(id / chunkSize)];
      const purchaseMasks = reusable ? purchaseMaskChunks[Math.floor(id / chunkSize)] : null;
      let p = 0, weighted = 0, threshold = Infinity, mask = 0, purchaseMask = 0;
      for (let i = 0; i < offers.length; i++) {
        const offer = offers[i];
        p += items[offer.index].probability;
        weighted += items[offer.index].probability * offer.value;
        if (offer.purchaseOnly) purchaseMask |= 1 << offer.index;
        else mask |= 1 << offer.index;
        threshold = (refreshPrices[5] + weighted) / p;
        if (threshold <= (offers[i + 1]?.value ?? Infinity)) break;
      }
      values[offset + 5] = threshold - refreshPrices[5];
      masks[offset + 5] = mask;
      if (purchaseMasks) purchaseMasks[offset + 5] = purchaseMask;
      for (let stage = 4; stage >= 0; stage--) {
        const reject = refreshPrices[stage] + values[offset + stage + 1];
        let value = (1 - totalTaskProbability) * reject;
        let buyMask = 0;
        let purchaseOnlyMask = 0;
        for (let i = 0; i < items.length; i++) {
          const effectId = effectIds[i];
          const child = children[effectId];
          const buy = childIds[effectId] !== undefined ? items[i].cost + valueAt(childIds[effectId], stage)
            : items[i].cost + lowerBound(child, stage) > reject + 1e-8
              ? Infinity : items[i].cost + valueAt(resolve(effectId), stage);
          const purchase = purchaseLower(i, stage) <= reject + 1e-8 ? purchaseValue(i, stage) : Infinity;
          if (purchase < buy && purchase <= reject) purchaseOnlyMask |= 1 << i;
          else if (buy <= reject) buyMask |= 1 << i;
          value += items[i].probability * Math.min(buy, purchase, reject);
        }
        values[offset + stage] = value;
        masks[offset + stage] = buyMask;
        if (purchaseMasks) purchaseMasks[offset + stage] = purchaseOnlyMask;
      }
      return id;
    }
    const start = [maxBuys, 0, input.needMelon, Math.ceil(input.needWord / wordUnit)];
    const rootId = visit(start);
    if (rootId === -2) return null;
    const rootCost = valueAt(rootId, 0);
    const counts = items.map(() => 0);
    const purchaseOnlyCounts = items.map(() => 0);
    let purchaseCost = 0, refreshCost = 0, refreshCount = 0;
    let rewardMelon = 0, rewardWord = 0, rewardCount = 0;
    const reachableKeys = [];
    // Continuation values bound any discarded numerical tail, without changing
    // the optimal value. Rare simulation states can reconstruct their policy.
    let discardedCost = 0;
    let cutoff = 1e-15;
    do {
      counts.fill(0);
      purchaseOnlyCounts.fill(0);
      purchaseCost = 0; refreshCost = 0; refreshCount = 0;
      rewardMelon = 0; rewardWord = 0; rewardCount = 0;
      reachableKeys.length = 0;
      discardedCost = 0;
      let incoming = new Map(rootId < 0 ? [] : [[rootId, new Float64Array([1, 0, 0, 0, 0, 0])]]);
      for (let r = maxBuys; r > 0 && incoming.size; r--) {
        const next = new Map();
        // Same-layer children may first be materialized by a scalar policy.
        // A max heap admits them lazily while keeping parents before children.
        const heap = [];
        const queued = new Set();
        const enqueue = id => {
          if (queued.has(id)) return;
          queued.add(id);
          let index = heap.length;
          heap.push(id);
          while (index > 0) {
            const parent = Math.floor((index - 1) / 2);
            if (keys[heap[parent]] >= keys[id]) break;
            heap[index] = heap[parent]; index = parent;
          }
          heap[index] = id;
        };
        const dequeue = () => {
          const id = heap[0], last = heap.pop();
          if (heap.length) {
            let index = 0;
            while (index * 2 + 1 < heap.length) {
              let child = index * 2 + 1;
              if (child + 1 < heap.length && keys[heap[child + 1]] > keys[heap[child]]) child++;
              if (keys[last] >= keys[heap[child]]) break;
              heap[index] = heap[child]; index = child;
            }
            heap[index] = last;
          }
          return id;
        };
        if (reusable) for (const id of incoming.keys()) enqueue(id);
        const layer = reusable ? (function* () { while (heap.length) yield dequeue(); })() : incoming.keys();
        for (const id of layer) {
          const mass = incoming.get(id);
          if (!mass) continue;
          incoming.delete(id);
        if (id % 16384 === 0) reportProgress();
          if (mass.reduce((sum, value) => sum + value, 0) < cutoff) {
            for (let stage = 0; stage < 6; stage++) discardedCost += mass[stage] * valueAt(id, stage);
            continue;
          }
          const state = stateFor(keys[id]);
          reachableKeys.push(keys[id]);
          const children = effects.map(effect => transition(state, effect));
          for (let stage = 0; stage < 6; stage++) {
            if (!mass[stage]) continue;
            const mask = maskAt(id, stage);
            const purchaseMask = purchaseMaskAt(id, stage);
            const acceptedP = items.reduce((sum, item, i) => sum + (((mask | purchaseMask) & (1 << i)) ? item.probability : 0), 0);
            const rejected = mass[stage] * (1 - acceptedP);
            const failed = stage === 5 ? rejected / acceptedP : rejected;
            refreshCost += failed * refreshPrices[stage];
            refreshCount += failed;
            if (stage < 5) mass[stage + 1] += rejected;
            items.forEach((item, i) => {
              if (!((mask | purchaseMask) & (1 << i))) return;
              const weight = mass[stage] * item.probability / (stage === 5 ? acceptedP : 1);
              const purchaseOnly = !!(purchaseMask & (1 << i));
              const child = purchaseOnly ? [state[0], state[1], Math.max(0, state[2] - item.purchaseMelon), state[3]]
                : children[effectIds[i]];
              if (purchaseOnly) purchaseOnlyCounts[i] += weight;
              else counts[i] += weight;
              purchaseCost += weight * item.cost;
              rewardMelon += weight * (rewards[child[1]].melon - rewards[state[1]].melon);
              rewardWord += weight * (rewards[child[1]].word - rewards[state[1]].word) * wordUnit;
              rewardCount += weight * (rewards[child[1]].count - rewards[state[1]].count);
              if (child[2] || child[3]) {
                const childId = visit(child);
                const destination = purchaseOnly ? incoming : next;
                let childMass = destination.get(childId);
                if (!childMass) {
                  childMass = new Float64Array(6); destination.set(childId, childMass);
                  if (purchaseOnly) enqueue(childId);
                }
                childMass[purchaseOnly ? Math.min(5, stage + 1) : stage] += weight;
                if (purchaseOnly) {
                  refreshCost += weight * purchaseRefreshPrice(stage);
                  refreshCount += weight;
                }
              }
            });
          }
        }
        incoming = next;
      }
      if (discardedCost > 0.0001) cutoff = 0;
      else break;
    } while (true);
    const policyKeys = new Float64Array(reachableKeys).sort();
    const policyMasks = new Uint32Array(policyKeys.length * 6);
    const policyPurchaseMasks = reusable ? new Uint32Array(policyKeys.length * 6) : null;
    policyKeys.forEach((key, index) => {
      const id = memo[stateFor(key)[0]].get(key);
      for (let stage = 0; stage < 6; stage++) policyMasks[index * 6 + stage] = maskAt(id, stage);
      if (policyPurchaseMasks) for (let stage = 0; stage < 6; stage++) policyPurchaseMasks[index * 6 + stage] = purchaseMaskAt(id, stage);
    });
    return {
      cost: rootCost, purchaseCost, refreshCost, refreshCount, counts, purchaseOnlyCounts,
      buys: counts.reduce((sum, count) => sum + count, 0),
      stars: input.baseStars + counts.reduce((sum, count, i) => sum + count * items[i].stars, 0),
      rewardMelon, rewardWord, rewardCount,
      melon: input.ownedMelon + rewardMelon + counts.reduce((sum, count, i) => sum + count * items[i].melon, 0)
        + purchaseOnlyCounts.reduce((sum, count, i) => sum + count * (items[i].purchaseMelon || 0), 0),
      word: input.ownedWord + rewardWord + counts.reduce((sum, count, i) => sum + count * items[i].word, 0),
      metricCostErrorBound: discardedCost,
      buyDecisions: { keys: policyKeys, masks: policyMasks, purchaseMasks: policyPurchaseMasks, allowPurchaseOnly: reusable,
        starUnit, wordUnit, starCap, starSize, melonSize, wordSize },
      actions: items.map((item, i) => ({ name: item.name, buy: rootId >= 0 && !!((maskAt(rootId, 0) | purchaseMaskAt(rootId, 0)) & (1 << i)),
        purchaseOnly: rootId >= 0 && !!(purchaseMaskAt(rootId, 0) & (1 << i)) })),
      probabilitySum: 1
    };
  }
  const api = { groupTasks, purchaseOnlyPlan, solve };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.celebrationSolver = api;
})(typeof window !== 'undefined' ? window : globalThis);
