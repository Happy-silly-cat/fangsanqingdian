(() => {
  const iconRoot = "assets/jinnang-items/";

  // 锦囊维护区：后续补齐逐级材料或属性时，优先在这里更新，页面会自动读取。
  // 材料名称、用途和品质节点对应解包后的锦囊配置；69051 当前没有单独图标，使用锦囊通用图标。
  const items = {
    "60060": { name: "鬼谷子", icon: `${iconRoot}guiguzi.png` },
    "60073": { name: "圣·鬼谷子", icon: `${iconRoot}shengguiguzi.png` },
    "60089": { name: "神·鬼谷子", icon: `${iconRoot}shenguiguzi.png` },
    "60099": { name: "真神·鬼谷子", icon: `${iconRoot}zhenshenguiguzi.png` },
    "69051": { name: "圣神·鬼谷子", icon: `${iconRoot}pokect_n.png`, fallback: true },
    "800005": { name: "魂级经验锦囊", icon: `${iconRoot}pockets/small_exp_01.png` }
  };

  const advanceMaterials = [
    { id: "60060", stage: "进阶", amount: 270, use: "用于锦囊进阶" },
    { id: "60073", stage: "升金", amount: 100, use: "用于锦囊升金" },
    { id: "60089", stage: "升暗金", amount: 40, use: "用于锦囊升暗金" },
    { id: "60099", stage: "升白金", amount: 15, use: "用于锦囊升白金" },
    { id: "69051", stage: "升琉金", amount: 10, use: "用于锦囊升琉金" }
  ];

  // DB_Item_gift.lua 的 20703 条目给出了整包数量；它不是按升阶阶段拆开的单次消耗。
  const materialPack = {
    id: "20703",
    name: "锦囊材料包",
    note: "解包配置中的整包数量，不能直接当作单次升阶消耗。",
    contents: [
      { id: "60060", amount: 270 },
      { id: "60073", amount: 100 },
      { id: "60089", amount: 40 },
      { id: "60099", amount: 15 },
      { id: "69051", amount: 10 },
      { id: "800005", amount: 80 }
    ]
  };

  const qualityUnlocks = [
    { quality: "金", level: 145 },
    { quality: "暗金", level: 185 },
    { quality: "白金", level: 215 },
    { quality: "琉金", level: 237 }
  ];

  // 锦囊计入战意的品质门槛，来自锦囊对应的战意配置。
  const qualityStages = [
    { quality: "金", moraleTarget: 8, required: 4, limit: 30 },
    { quality: "暗金", moraleTarget: 9, required: 8, limit: 30 },
    { quality: "白金", moraleTarget: 10, required: 12, limit: 30 },
    { quality: "琉金", moraleTarget: 11, required: 16, limit: 30 }
  ];

  // 当前解包中能确认锦囊可提供的属性类型；逐级数值在 jinnang-details.js 中维护。
  const properties = [
    { name: "攻击", description: "攻击属性" },
    { name: "物防", description: "物理防御属性" },
    { name: "法防", description: "法术防御属性" },
    { name: "生命", description: "生命属性" },
    { name: "最终免伤", description: "最终免伤属性" },
    { name: "最终伤害", description: "最终伤害属性" },
    { name: "治疗值", description: "治疗值属性" },
    { name: "被治疗值", description: "被治疗值属性" },
    { name: "抗暴", description: "降低受到暴击的概率" },
    { name: "暴击率", description: "暴击率属性" },
    { name: "眩晕抗性", description: "降低受到眩晕效果的概率" },
    { name: "封技抗性", description: "降低受到封技效果的概率" },
    { name: "禁怒抗性", description: "降低受到禁怒效果的概率" },
    { name: "降怒抗性", description: "降低受到降怒效果的概率" },
    { name: "麻痹抗性", description: "降低受到麻痹效果的概率" },
    { name: "封疗抗性", description: "降低受到封疗效果的概率" },
    { name: "混乱抗性", description: "降低受到混乱效果的概率" },
    { name: "魅惑抗性", description: "降低受到魅惑效果的概率" },
    { name: "石化抗性", description: "降低受到石化效果的概率" },
    { name: "冻结抗性", description: "降低受到冻结效果的概率" },
    { name: "挑衅抗性", description: "降低受到挑衅效果的概率" },
    { name: "恐惧抗性", description: "降低受到恐惧效果的概率" },
    { name: "沮丧抗性", description: "降低受到沮丧效果的概率" },
    { name: "残废抗性", description: "降低受到残废效果的概率" },
    { name: "诅咒抗性", description: "降低受到诅咒效果的概率" },
    { name: "封魂抗性", description: "降低受到封魂效果的概率" },
    { name: "封印抗性", description: "降低受到封印效果的概率" },
    { name: "压抑抗性", description: "降低受到压抑效果的概率" },
    { name: "忽视抗眩晕", description: "忽视目标眩晕抗性" },
    { name: "忽视抗封技", description: "忽视目标封技抗性" },
    { name: "忽视抗禁怒", description: "忽视目标禁怒抗性" },
    { name: "忽视抗降怒", description: "忽视目标降怒抗性" },
    { name: "忽视抗麻痹", description: "忽视目标麻痹抗性" },
    { name: "强化眩晕概率", description: "强化眩晕概率" },
    { name: "强化封技概率", description: "强化封技概率" },
    { name: "强化禁怒概率", description: "强化禁怒概率" },
    { name: "强化降怒概率", description: "强化降怒概率" },
    { name: "强化麻痹概率", description: "强化麻痹概率" }
  ];

  window.jinnangData = {
    unlockLevel: 80,
    icon: `${iconRoot}pokect_n.png`,
    items,
    advanceMaterials,
    materialPack,
    qualityUnlocks,
    qualityStages,
    properties
  };
})();
