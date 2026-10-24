const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { test } = require('node:test');

const root = path.resolve(__dirname, '..');

function loadPage() {
  const elements = new Map();
  const document = {
    getElementById(id) {
      if (!elements.has(id)) elements.set(id, {
        innerHTML: '', textContent: '', value: '',
        style: {}, classList: { toggle() {} },
        buttons: [],
        append() {}, addEventListener() {},
        querySelectorAll(selector) {
          const key = selector === '[data-season]' ? 'season' : 'category';
          this.buttons = Array.from(this.innerHTML.matchAll(new RegExp(`data-${key}="(\\d+)"`, 'g')), match => ({
            dataset: { [key]: match[1] },
            addEventListener(type, handler) { this[type] = handler; }
          }));
          return this.buttons;
        }
      });
      return elements.get(id);
    },
    createElement() { return {}; }
  };
  const context = vm.createContext({
    window: { location: { search: '' } }, document, URLSearchParams
  });
  for (const filename of ['assets/festival-carnival-items.js', 'assets/festival-carnival-data.js']) {
    vm.runInContext(fs.readFileSync(path.join(root, filename), 'utf8'), context);
  }
  const html = fs.readFileSync(path.join(root, 'festival-carnival.html'), 'utf8');
  vm.runInContext(html.match(/<script>([\s\S]*?)<\/script>/)[1], context);
  return { context, elements, event: context.window.festivalCarnivalArchives[0] };
}

test('item IDs resolve within item tables rather than hero tables', () => {
  const { context, elements, event } = loadPage();
  const items = context.window.festivalCarnivalItems.items;
  assert.match(elements.get('eventHero').style.backgroundImage, /activity-background\.png/);
  assert.equal(items['30062'].name, '紫马碎片包');
  assert.equal(items['30052'].name, '紫书碎片包');
  assert.equal(items['30301'].name, '放开那红包');
  assert.equal(event.seasons[0].tabs[0].tasks[0].rewards[1].name, '金币');
  assert.equal(event.seasons[0].tabs[0].tasks[0].rewards[1].amount, 300);
  assert.equal(event.seasons[0].tabs[0].tasks[8].rewards[1].name, '澜金时装选择包六');
  assert.equal(event.exchanges[1].icons[0].split('/').at(-1), 'myql.png');
  assert.deepEqual(Array.from(event.exchanges[0].icons, icon => icon.split('/').at(-1)),
    ['small_nanzhu_shizhuang_89.png', 'small_nvzhu_shizhuang_89.png']);
});

test('every season, shop and exchange renders using verified local item images', () => {
  const { context, elements, event } = loadPage();
  const checkMarkup = markup => {
    assert(!/资源\s*\d+|undefined/.test(markup));
    for (const match of markup.matchAll(/<span class="item-chip(?: ([^"]+))?">/g)) {
      assert.match(match[1] || "", /quality-\d+/, "every visible item chip should carry its quality color");
    }
    for (const [, icon] of markup.matchAll(/<img[^>]+src="([^"]+)"/g)) {
      const png = fs.readFileSync(path.join(root, icon));
      assert.equal(png.subarray(0, 8).toString('hex'), '89504e470d0a1a0a', icon);
    }
  };
  for (let season = 0; season < event.seasons.length; season++) {
    for (let category = 0; category < event.seasons[season].tabs.length; category++) {
      vm.runInContext(`seasonIndex=${season};categoryIndex=${category};renderContent();`, context);
      checkMarkup(elements.get('activityContent').innerHTML);
    }
  }
  const exchangeCategory = event.seasons[0].tabs.length;
  vm.runInContext(`seasonIndex=0;categoryIndex=${exchangeCategory};renderCategories();renderContent();`, context);
  assert.match(elements.get('categoryTabs').innerHTML, /兑换奖励/);
  checkMarkup(elements.get('activityContent').innerHTML);
  assert.match(elements.get('activityContent').innerHTML, /exchangeRowsRight/);
  vm.runInContext('seasonIndex=0;categoryIndex=1;renderContent();', context);
  assert.match(elements.get('activityContent').innerHTML, /银币 ×230w/);
  assert.doesNotMatch(elements.get('activityContent').innerHTML, /银币 ×2,300,000/);
  assert.match(elements.get('activityContent').innerHTML, /高级名将点将10次/);
  assert.doesNotMatch(elements.get('activityContent').innerHTML, /task-target/);
  assert.doesNotMatch(elements.get('activityContent').innerHTML, /达成/);
  vm.runInContext('seasonIndex=0;categoryIndex=2;renderContent();', context);
  assert.match(elements.get('activityContent').innerHTML, /黑市兑换50/);
  for (const item of Object.values(context.window.festivalCarnivalItems.items)) {
    assert(item.icons.length > 0, item.name);
    for (const icon of item.icons) assert(fs.existsSync(path.join(root, icon)), item.name);
  }
});

test('switching seasons preserves each category and keeps its highlight in sync', () => {
  for (let category = 0; category < 4; category++) {
    const { context, elements, event } = loadPage();
    elements.get('categoryTabs').buttons[category].click();
    for (const season of [1, 0]) {
      elements.get('seasonTabs').buttons[season].click();
      assert.equal(vm.runInContext('seasonIndex', context), season);
      assert.equal(vm.runInContext('categoryIndex', context), category);
      const selected = elements.get('categoryTabs').innerHTML.match(/class="tab-button active"[^>]+data-category="(\d+)"/);
      assert.equal(Number(selected[1]), category);
      const content = elements.get('activityContent').innerHTML;
      const tab = event.seasons[season].tabs[category];
      if (tab.shop) {
        assert(content.includes('shop-table'));
        assert(!content.includes('task-card'));
        assert(content.includes(tab.shop[2].name));
      } else {
        const compactTaskName = tab.tasks[0].name.replace('黑市兑换购买物品', '黑市兑换').replace('精品折扣累计积分', '精品折扣积分');
        assert(content.includes(compactTaskName));
        assert(!/ · \d+-\d+/.test(content));
      }
    }
  }
});
