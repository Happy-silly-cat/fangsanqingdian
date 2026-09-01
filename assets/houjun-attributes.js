/*
  后军属性维护：数据来自解包后的 DB_Lingdi_houjun.lua。
  base 对应 base_att，upgrade 对应 up_att，milestones 对应 s_lv_att。
  baseSpeed 是领地默认运输速度 10；speed 对应 speed_att（后军自身提供的速度）；
  speedMilestones 对应 s_lv_speed（达到阶段时追加的速度）。普通等级不会额外增加运输速度。
  morale 对应 morale（键为升级起始等级，值为该升级区间增加的气势）。
  percent 属性沿用游戏配置的数值单位，例如 500 显示为 5%。
  新增后军时，先在 byQuality 中补充对应品质配置，再在下方增加名字映射。
*/
const HOUJUN_BASE_TRANSPORT_SPEED = 10;

function createMoraleByLevel(multiplier) {
  return Object.fromEntries(
    Array.from({ length: 69 }, (_, index) => [index + 1, (index + 1) * multiplier])
  );
}

const HOUJUN_ATTRIBUTE_BY_QUALITY = {
  6: {
    baseSpeed: HOUJUN_BASE_TRANSPORT_SPEED,
    base: [
      { name: "攻击", value: 300 },
      { name: "生命", value: 1500 },
      { name: "物防", value: 300 },
      { name: "法防", value: 300 }
    ],
    upgrade: [
      { name: "攻击", value: 300 },
      { name: "生命", value: 1500 },
      { name: "物防", value: 300 },
      { name: "法防", value: 300 }
    ],
    speed: 30,
    milestones: {
      10: [{ name: "生命", value: 50000 }],
      20: [{ name: "物防", value: 10000 }],
      30: [{ name: "法防", value: 10000 }],
      40: [{ name: "攻击", value: 10000 }],
      50: [
        { name: "法防", value: 500, percent: true },
        { name: "物防", value: 500, percent: true }
      ],
      60: [{ name: "物防", value: 20000 }],
      70: [{ name: "法防", value: 20000 }]
    },
    speedMilestones: { 10: 10, 20: 20, 30: 30, 40: 40, 50: 50, 60: 60, 70: 70 },
    morale: createMoraleByLevel(1)
  },
  7: {
    baseSpeed: HOUJUN_BASE_TRANSPORT_SPEED,
    base: [
      { name: "攻击", value: 600 },
      { name: "生命", value: 3000 },
      { name: "物防", value: 600 },
      { name: "法防", value: 600 }
    ],
    upgrade: [
      { name: "攻击", value: 600 },
      { name: "生命", value: 3000 },
      { name: "物防", value: 600 },
      { name: "法防", value: 600 }
    ],
    speed: 40,
    milestones: {
      10: [{ name: "生命", value: 100000 }],
      20: [{ name: "物防", value: 20000 }],
      30: [{ name: "法防", value: 20000 }],
      40: [{ name: "攻击", value: 20000 }],
      50: [
        { name: "法防", value: 1000, percent: true },
        { name: "物防", value: 1000, percent: true }
      ],
      60: [{ name: "物防", value: 50000 }],
      70: [{ name: "法防", value: 50000 }]
    },
    speedMilestones: { 10: 25, 20: 35, 30: 45, 40: 55, 50: 65, 60: 75, 70: 85 },
    morale: createMoraleByLevel(2)
  },
  8: {
    baseSpeed: HOUJUN_BASE_TRANSPORT_SPEED,
    base: [
      { name: "攻击", value: 3000 },
      { name: "生命", value: 15000 },
      { name: "物防", value: 3000 },
      { name: "法防", value: 3000 }
    ],
    upgrade: [
      { name: "攻击", value: 3000 },
      { name: "生命", value: 15000 },
      { name: "物防", value: 3000 },
      { name: "法防", value: 3000 }
    ],
    speed: 60,
    milestones: {
      10: [{ name: "生命", value: 250000 }],
      20: [{ name: "物防", value: 50000 }],
      30: [{ name: "法防", value: 50000 }],
      40: [{ name: "攻击", value: 50000 }],
      50: [
        { name: "生命", value: 1500, percent: true },
        { name: "攻击", value: 1500, percent: true }
      ],
      60: [{ name: "生命", value: 500000 }],
      70: [{ name: "攻击", value: 100000 }]
    },
    speedMilestones: { 10: 45, 20: 65, 30: 85, 40: 105, 50: 125, 60: 145, 70: 165 },
    morale: createMoraleByLevel(4)
  },
  9: {
    baseSpeed: HOUJUN_BASE_TRANSPORT_SPEED,
    base: [
      { name: "攻击", value: 8500 },
      { name: "生命", value: 42500 },
      { name: "物防", value: 8500 },
      { name: "法防", value: 8500 }
    ],
    upgrade: [
      { name: "攻击", value: 8500 },
      { name: "生命", value: 42500 },
      { name: "物防", value: 8500 },
      { name: "法防", value: 8500 }
    ],
    speed: 110,
    milestones: {
      10: [{ name: "生命", value: 750000 }],
      20: [{ name: "物防", value: 150000 }],
      30: [{ name: "法防", value: 150000 }],
      40: [{ name: "攻击", value: 150000 }],
      50: [{ name: "攻击", value: 5000, percent: true }],
      60: [{ name: "生命", value: 1500000 }],
      70: [{ name: "攻击", value: 300000 }]
    },
    speedMilestones: { 10: 75, 20: 105, 30: 135, 40: 165, 50: 195, 60: 225, 70: 255 },
    morale: createMoraleByLevel(10)
  }
};

window.HOUJUN_ATTRIBUTES = {
  "曹植": HOUJUN_ATTRIBUTE_BY_QUALITY[6],
  "糜夫人": HOUJUN_ATTRIBUTE_BY_QUALITY[6],
  "丁奉": HOUJUN_ATTRIBUTE_BY_QUALITY[6],
  "张宝": HOUJUN_ATTRIBUTE_BY_QUALITY[6],
  "颜良": HOUJUN_ATTRIBUTE_BY_QUALITY[7],
  "文丑": HOUJUN_ATTRIBUTE_BY_QUALITY[7],
  "黄盖": HOUJUN_ATTRIBUTE_BY_QUALITY[8],
  "徐晃": HOUJUN_ATTRIBUTE_BY_QUALITY[8],
  "陈宫": HOUJUN_ATTRIBUTE_BY_QUALITY[9]
};
