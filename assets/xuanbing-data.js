// 玄兵进阶、升级材料与属性。数据依据 DB_Ancient_weapons.lua、DB_Affix.lua、DB_Item_normal.lua 整理。
// 当前 7 品质 max_lv 为 75，quality_cost 与 limit_grow_xb 表明进阶到 8 品质后上限扩展至 100 级。
// grow_sp_att 与 base_awake_id 中的 76～100 级内容也一并保留，页面会标注这些等级需要 8 品质。
// 若游戏更新，优先检查上述三个配置表，并同步更新本文件的升级数量与属性节点。
(function () {
  const items = {
    "60126": {
      name: "玄兵强化石",
      icon: "assets/lingdi-items/xuanbing-qianghuashi.png"
    },
    "69067": {
      name: "玄兵升金石",
      icon: "assets/xuanbing-items/xuanbingshengjin.png"
    },
    "65051": { name: "五火七禽扇碎片", icon: "assets/xuanbing-items/xb_wuhuoqiqinsha.png" },
    "65052": { name: "崆峒印碎片", icon: "assets/xuanbing-items/xb_kongtong.png" },
    "65053": { name: "无量尺碎片", icon: "assets/xuanbing-items/xb_wuliangchi.png" },
    "65064": { name: "太虚神甲碎片", icon: "assets/xuanbing-items/xb_taixushenjia.png" },
    "65065": { name: "惊夜枪碎片", icon: "assets/xuanbing-items/xb_jingyeqiang.png" },
    "65066": { name: "射日弓碎片", icon: "assets/xuanbing-items/xb_sherigong.png" }
  };

  const statNames = {
    14: "物防",
    15: "法防",
    19: "攻击",
    51: "生命",
    54: "物防",
    55: "法防",
    56: "伤害",
    57: "免伤",
    60: "怒气加伤",
    61: "怒气减伤",
    100: "攻击",
    204: "破水",
    205: "破火",
    206: "破木",
    207: "抗水",
    208: "抗火",
    209: "抗木",
    281: "破雷",
    282: "抗雷",
    283: "破金",
    284: "抗金",
    285: "破土",
    286: "抗土"
  };

  // DB_Affix 中 type=3 的玄兵属性使用百分之一的数值单位，例如 1000 显示为 10%。
  const percentStatIds = new Set([14, 15, 19, 56, 57, 60, 61, 204, 205, 206, 207, 208, 209, 281, 282, 283, 284, 285, 286]);
  const stat = (id, value) => ({
    id,
    name: statNames[id] || `属性${id}`,
    value,
    percent: percentStatIds.has(id)
  });

  // 玄兵强化石的 1～75 级消耗，来源于每件玄兵相同的 grow_sp_att 字段。
  const enhancementQuantities = [
    100, 120, 140, 160, 600, 200, 220, 240, 260, 900,
    300, 320, 340, 360, 1200, 400, 420, 440, 460, 1500,
    500, 520, 540, 560, 2400, 600, 620, 640, 660, 1800,
    700, 720, 740, 760, 2100, 800, 820, 840, 860, 2400,
    900, 920, 940, 960, 2700, 1000, 1020, 1040, 1060, 4800,
    1100, 1150, 1200, 1250, 3000, 1350, 1400, 1450, 1500, 3500,
    1600, 1650, 1700, 1750, 4000, 1850, 1900, 1950, 2000, 4500,
    2100, 2150, 2200, 2250, 7200, 2300, 2400, 2500, 2600, 5000,
    2800, 2900, 3000, 3100, 6000, 3300, 3400, 3500, 3600, 7000,
    3800, 3900, 4000, 4100, 8000, 4300, 4400, 4500, 4600, 9600
  ];

  // 每 5 级附加对应玄兵碎片，数量同样来自 grow_sp_att。
  const fragmentQuantities = {
    5: 60,
    10: 90,
    15: 120,
    20: 150,
    25: 240,
    30: 180,
    35: 210,
    40: 240,
    45: 270,
    50: 480,
    55: 300,
    60: 350,
    65: 400,
    70: 450,
    75: 720,
    80: 500,
    85: 600,
    90: 700,
    95: 800,
    100: 960
  };

  const commonMilestones = {
    5: [stat(51, 50000)],
    10: [stat(54, 10000)],
    15: [stat(55, 10000)],
    20: [stat(100, 10000)],
    30: [stat(15, 1000)],
    35: [stat(14, 1000)],
    40: [stat(19, 1000)],
    55: [stat(15, 1500)],
    60: [stat(14, 1500)],
    65: [stat(19, 1500)],
    80: [stat(15, 2000)],
    85: [stat(14, 2000)],
    90: [stat(19, 2000)]
  };

  const weapons = [
    {
      id: 1,
      name: "五火七禽扇",
      fragmentId: 65051,
      type: "攻击型",
      milestoneAttributes: { 45: [stat(206, 1000)], 70: [stat(208, 1500)], 95: [stat(206, 2000)] },
      qualityAttributes: [stat(100, 300000), stat(57, 3000), stat(206, 500)]
    },
    {
      id: 2,
      name: "崆峒印",
      fragmentId: 65052,
      type: "防御型",
      milestoneAttributes: { 45: [stat(204, 1000)], 70: [stat(209, 1500)], 95: [stat(204, 2000)] },
      qualityAttributes: [stat(54, 300000), stat(56, 3000), stat(204, 500)]
    },
    {
      id: 3,
      name: "无量尺",
      fragmentId: 65053,
      type: "辅助型",
      milestoneAttributes: { 45: [stat(205, 1000)], 70: [stat(207, 1500)], 95: [stat(205, 2000)] },
      qualityAttributes: [stat(55, 300000), stat(56, 3000), stat(205, 500)]
    },
    {
      id: 4,
      name: "太虚神甲",
      fragmentId: 65064,
      type: "防御型",
      milestoneAttributes: { 45: [stat(281, 1000)], 70: [stat(282, 1500)], 95: [stat(281, 2000)] },
      qualityAttributes: [stat(54, 300000), stat(60, 3000), stat(281, 500)]
    },
    {
      id: 5,
      name: "惊夜枪",
      fragmentId: 65065,
      type: "攻击型",
      milestoneAttributes: { 45: [stat(283, 1000)], 70: [stat(284, 1500)], 95: [stat(283, 2000)] },
      qualityAttributes: [stat(100, 300000), stat(61, 3000), stat(283, 500)]
    },
    {
      id: 6,
      name: "射日弓",
      fragmentId: 65066,
      type: "辅助型",
      milestoneAttributes: { 45: [stat(285, 1000)], 70: [stat(286, 1500)], 95: [stat(285, 2000)] },
      qualityAttributes: [stat(55, 300000), stat(60, 3000), stat(285, 500)]
    }
  ].map((weapon) => {
    const upgradeCosts = enhancementQuantities.map((quantity, index) => {
      const level = index + 1;
      const materials = [{ id: 60126, quantity }];
      if (fragmentQuantities[level]) {
        materials.push({ id: weapon.fragmentId, quantity: fragmentQuantities[level] });
      }
      return {
        level,
        materials,
        attributes: [
          ...(commonMilestones[level] || []),
          ...(weapon.milestoneAttributes[level] || [])
        ]
      };
    });

    return {
      ...weapon,
      quality: 7,
      currentMaxLevel: 75,
      maxLevel: 100,
      activation: { id: weapon.fragmentId, quantity: 40 },
      baseAttributes: [stat(54, 100), stat(55, 100), stat(100, 100), stat(51, 500)],
      qualityAdvance: {
        targetQuality: 8,
        material: { id: 69067, quantity: 300 },
        attributes: weapon.qualityAttributes
      },
      upgradeCosts
    };
  });

  window.xuanbingData = { items, weapons };
})();
