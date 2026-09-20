// 红颜本体升品数据，来源：DB_Herobeauty_arm_grade.lua。
// 这里的碎片是对应红颜自身的 6310x 材料；配饰的 950xxx 材料只在配饰页面使用。
window.heroBeautyQualityData = {
  unlockLevel: 96,
  featureDescription: "升品可解锁额外配饰，且获得新效果",
  qualities: [
    { id: 7, name: "红" },
    { id: 8, name: "金" },
    { id: 9, name: "暗金" },
    { id: 10, name: "白金" },
    { id: 11, name: "琉金" },
    { id: 12, name: "澜金" }
  ],
  transitions: [
    {
      from: 7,
      to: 8,
      fragmentQuantity: 20,
      silver: 200000000,
      effects: ["升星等级上限 +15", "配饰孔数量 +1"]
    },
    {
      from: 8,
      to: 9,
      fragmentQuantity: 40,
      silver: 400000000,
      effects: ["解锁红颜特殊技能", "配饰孔数量 +1"]
    },
    {
      from: 9,
      to: 10,
      fragmentQuantity: 60,
      silver: 600000000,
      effects: ["进阶等级上限 +20", "配饰孔数量 +1"]
    },
    {
      from: 10,
      to: 11,
      fragmentQuantity: 80,
      silver: 800000000,
      effects: ["进阶等级上限 +35", "配饰孔数量 +1"]
    },
    {
      from: 11,
      to: 12,
      fragmentQuantity: 80,
      silver: 800000000,
      effects: ["进阶等级上限 +40", "配饰孔数量 +1"]
    }
  ]
};
