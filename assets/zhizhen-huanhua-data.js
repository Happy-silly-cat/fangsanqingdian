// 数据来源：DB_Huanhua_mj、DB_Huanhua_mj_item_type、DB_Awake_ability、DB_Affix。
// item_num 为源表的 6|6 配置，因此每个至臻进阶节点按 6 个至臻晶石展示；item_order_quality 只决定品质颜色。
window.zhizhenHuanhuaData = {
  source: "DB_Huanhua_mj / DB_Huanhua_mj_item_type / DB_Awake_ability / DB_Affix",
  materials: {
    1: { name: "至臻晶石", quality: "紫", className: "purple", icon: "assets/zhizhen-huanhua/materials/zhizhen-crystal.png" },
    2: { name: "至臻晶石", quality: "橙", className: "orange", icon: "assets/zhizhen-huanhua/materials/zhizhen-crystal.png" },
    6: { name: "至臻晶石", quality: "红", className: "red", icon: "assets/zhizhen-huanhua/materials/zhizhen-crystal.png" },
    8: { name: "至臻晶石", quality: "暗金", className: "dark-gold", icon: "assets/zhizhen-huanhua/materials/zhizhen-crystal.png" },
    9: { name: "至臻晶石", quality: "紫金", className: "purple-gold", icon: "assets/zhizhen-huanhua/materials/zhizhen-crystal.png" }
  },
  upgrade: {
    levelLimit: 280,
    experienceItem: {
      name: "至臻经验丹",
      icon: "assets/zhizhen-huanhua/materials/zhizhen-exp-pill.png"
    },
    experience: { start: 1000, step: 150 },
    baseAttributes: [
      { id: 100, name: "攻击", amount: 400 },
      { id: 51, name: "生命", amount: 2000 },
      { id: 54, name: "物防", amount: 400 },
      { id: 55, name: "法防", amount: 400 }
    ],
    growthAttributes: [
      { id: 100, name: "攻击", amount: 40 },
      { id: 51, name: "生命", amount: 200 },
      { id: 54, name: "物防", amount: 40 },
      { id: 55, name: "法防", amount: 40 }
    ]
  },
  heroes: [
    {
      id: 1,
      heroId: 10001,
      name: "张辽",
      faction: "魏",
      accent: "wei",
      icon: "assets/zhizhen-huanhua/heroes/zhangliao-zhizhen-head.png",
      bodyImage: "assets/zhizhen-huanhua/heroes/zhangliao-zhizhen-body.png",
      skill: "张辽每回合结束后，对敌方攻击最高2名武将造成60%伤害（该技能不受控制效果影响）",
      upgradeTalents: [
        { level: 20, name: "20级天赋", description: "全体上阵武将攻击比+20%" },
        { level: 40, name: "40级天赋", description: "战斗中，自身法术伤害属性的5%，转化为物理伤害" },
        { level: 60, name: "60级天赋", description: "全体上阵武将破魏+2%、抗魏+2%" },
        { level: 80, name: "80级天赋", description: "战斗中，法术伤害转化为物理伤害的百分比由5%提升至10%" },
        { level: 100, name: "100级天赋", description: "全体上阵武将破蜀+2%、抗蜀+2%" },
        { level: 120, name: "120级天赋", description: "战斗中，法术伤害转化为物理伤害的百分比由10%提升至15%" },
        { level: 140, name: "140级天赋", description: "全体上阵武将破吴+2%、抗吴+2%" },
        { level: 160, name: "160级天赋", description: "战斗中，法术伤害转化为物理伤害的百分比由15%提升至20%" },
        { level: 180, name: "180级天赋", description: "全体上阵武将破群+2%、抗群+2%" },
        { level: 200, name: "200级天赋", description: "战斗中，法术伤害转化为物理伤害的百分比由20%提升至25%" },
        { level: 220, name: "220级天赋", description: "全体上阵武将攻击比+25%" },
        { level: 240, name: "240级天赋", description: "全体上阵武将生命比+25%" },
        { level: 260, name: "260级天赋", description: "全体上阵武将物防比+25%" },
        { level: 280, name: "280级天赋", description: "全体上阵武将法防比+25%" }
      ],
      stages: [
        { from: 1, to: 2, material: 1, attribute: { id: 51, name: "生命", amount: 30000 } },
        { from: 2, to: 3, material: 6, attribute: { id: 57, name: "免伤", amount: 500, percent: true } },
        { from: 3, to: 4, material: 1, attribute: { id: 51, name: "生命", amount: 30000 } },
        { from: 4, to: 5, material: 8, attribute: { id: 234, name: "追击减伤", amount: 400 } },
        { from: 5, to: 6, material: 9, attribute: { id: 233, name: "追击增伤", amount: 500 } },
        { from: 3, to: 6, material: 2, attribute: { id: 100, name: "攻击", amount: 15000 } }
      ]
    },
    {
      id: 2,
      heroId: 10008,
      name: "赵云",
      faction: "蜀",
      accent: "shu",
      icon: "assets/zhizhen-huanhua/heroes/zhaoyun-zhizhen-head.png",
      bodyImage: "assets/zhizhen-huanhua/heroes/zhaoyun-zhizhen-body.png",
      skill: "赵云首次触发【底力】状态时，自身忽视抗封魂+20%，物理伤害+10%，物理免伤+10%，持续至战斗结束",
      upgradeTalents: [
        { level: 20, name: "20级天赋", description: "全体上阵武将攻击比+20%" },
        { level: 40, name: "40级天赋", description: "战斗中，自身法术伤害属性的5%，转化为物理伤害" },
        { level: 60, name: "60级天赋", description: "全体上阵武将破魏+2%、抗魏+2%" },
        { level: 80, name: "80级天赋", description: "战斗中，法术伤害转化为物理伤害的百分比由5%提升至10%" },
        { level: 100, name: "100级天赋", description: "全体上阵武将破蜀+2%、抗蜀+2%" },
        { level: 120, name: "120级天赋", description: "战斗中，法术伤害转化为物理伤害的百分比由10%提升至15%" },
        { level: 140, name: "140级天赋", description: "全体上阵武将破吴+2%、抗吴+2%" },
        { level: 160, name: "160级天赋", description: "战斗中，法术伤害转化为物理伤害的百分比由15%提升至20%" },
        { level: 180, name: "180级天赋", description: "全体上阵武将破群+2%、抗群+2%" },
        { level: 200, name: "200级天赋", description: "战斗中，法术伤害转化为物理伤害的百分比由20%提升至25%" },
        { level: 220, name: "220级天赋", description: "全体上阵武将攻击比+25%" },
        { level: 240, name: "240级天赋", description: "全体上阵武将生命比+25%" },
        { level: 260, name: "260级天赋", description: "全体上阵武将物防比+25%" },
        { level: 280, name: "280级天赋", description: "全体上阵武将法防比+25%" }
      ],
      stages: [
        { from: 1, to: 2, material: 1, attribute: { id: 51, name: "生命", amount: 30000 } },
        { from: 2, to: 3, material: 6, attribute: { id: 57, name: "免伤", amount: 500, percent: true } },
        { from: 3, to: 4, material: 1, attribute: { id: 51, name: "生命", amount: 30000 } },
        { from: 4, to: 5, material: 8, attribute: { id: 234, name: "追击减伤", amount: 400 } },
        { from: 5, to: 6, material: 9, attribute: { id: 233, name: "追击增伤", amount: 500 } },
        { from: 3, to: 6, material: 2, attribute: { id: 100, name: "攻击", amount: 15000 } }
      ]
    },
    {
      id: 3,
      heroId: 10011,
      name: "周瑜",
      faction: "吴",
      accent: "wu",
      icon: "assets/zhizhen-huanhua/heroes/zhouyu-zhizhen-head.png",
      bodyImage: "assets/zhizhen-huanhua/heroes/zhouyu-zhizhen-body.png",
      skill: "每个大回合前，对敌方随机3人造成10%攻击伤害并有25%概率附加业火1回合（必定命中且与周瑜被控制与否无关）",
      upgradeTalents: [
        { level: 20, name: "20级天赋", description: "全体上阵武将攻击比+20%" },
        { level: 40, name: "40级天赋", description: "战斗中，自身物理伤害属性的5%，转化为法术伤害" },
        { level: 60, name: "60级天赋", description: "全体上阵武将破魏+2%、抗魏+2%" },
        { level: 80, name: "80级天赋", description: "战斗中，物理伤害转化为法术伤害的百分比由5%提升至10%" },
        { level: 100, name: "100级天赋", description: "全体上阵武将破蜀+2%、抗蜀+2%" },
        { level: 120, name: "120级天赋", description: "战斗中，物理伤害转化为法术伤害的百分比由10%提升至15%" },
        { level: 140, name: "140级天赋", description: "全体上阵武将破吴+2%、抗吴+2%" },
        { level: 160, name: "160级天赋", description: "战斗中，物理伤害转化为法术伤害的百分比由15%提升至20%" },
        { level: 180, name: "180级天赋", description: "全体上阵武将破群+2%、抗群+2%" },
        { level: 200, name: "200级天赋", description: "战斗中，物理伤害转化为法术伤害的百分比由20%提升至25%" },
        { level: 220, name: "220级天赋", description: "全体上阵武将攻击比+25%" },
        { level: 240, name: "240级天赋", description: "全体上阵武将生命比+25%" },
        { level: 260, name: "260级天赋", description: "全体上阵武将物防比+25%" },
        { level: 280, name: "280级天赋", description: "全体上阵武将法防比+25%" }
      ],
      stages: [
        { from: 1, to: 2, material: 1, attribute: { id: 55, name: "法防", amount: 6000 } },
        { from: 2, to: 3, material: 6, attribute: { id: 56, name: "伤害", amount: 500, percent: true } },
        { from: 3, to: 4, material: 1, attribute: { id: 55, name: "法防", amount: 6000 } },
        { from: 4, to: 5, material: 8, attribute: { id: 234, name: "追击减伤", amount: 400 } },
        { from: 5, to: 6, material: 9, attribute: { id: 233, name: "追击增伤", amount: 500 } },
        { from: 3, to: 6, material: 2, attribute: { id: 54, name: "物防", amount: 15000 } }
      ]
    },
    {
      id: 4,
      heroId: 10016,
      name: "吕布",
      faction: "群",
      accent: "qun",
      icon: "assets/zhizhen-huanhua/heroes/lvbu-zhizhen-head.png",
      bodyImage: "assets/zhizhen-huanhua/heroes/lvbu-zhizhen-body.png",
      skill: "开场前自身格挡率+30%，伤害+30%，持续整场战斗；吕布每次成功格挡反击后将再次对敌方攻击最高武将再造成50%的攻击伤害（该技能不受控制效果影响）",
      upgradeTalents: [
        { level: 20, name: "20级天赋", description: "全体上阵武将攻击比+20%" },
        { level: 40, name: "40级天赋", description: "战斗中，自身法术伤害属性的5%，转化为物理伤害" },
        { level: 60, name: "60级天赋", description: "全体上阵武将破魏+2%、抗魏+2%" },
        { level: 80, name: "80级天赋", description: "战斗中，法术伤害转化为物理伤害的百分比由5%提升至10%" },
        { level: 100, name: "100级天赋", description: "全体上阵武将破蜀+2%、抗蜀+2%" },
        { level: 120, name: "120级天赋", description: "战斗中，法术伤害转化为物理伤害的百分比由10%提升至15%" },
        { level: 140, name: "140级天赋", description: "全体上阵武将破吴+2%、抗吴+2%" },
        { level: 160, name: "160级天赋", description: "战斗中，法术伤害转化为物理伤害的百分比由15%提升至20%" },
        { level: 180, name: "180级天赋", description: "全体上阵武将破群+2%、抗群+2%" },
        { level: 200, name: "200级天赋", description: "战斗中，法术伤害转化为物理伤害的百分比由20%提升至25%" },
        { level: 220, name: "220级天赋", description: "全体上阵武将攻击比+25%" },
        { level: 240, name: "240级天赋", description: "全体上阵武将生命比+25%" },
        { level: 260, name: "260级天赋", description: "全体上阵武将物防比+25%" },
        { level: 280, name: "280级天赋", description: "全体上阵武将法防比+25%" }
      ],
      stages: [
        { from: 1, to: 2, material: 1, attribute: { id: 54, name: "物防", amount: 6000 } },
        { from: 2, to: 3, material: 6, attribute: { id: 56, name: "伤害", amount: 500, percent: true } },
        { from: 3, to: 4, material: 1, attribute: { id: 54, name: "物防", amount: 6000 } },
        { from: 4, to: 5, material: 8, attribute: { id: 234, name: "追击减伤", amount: 400 } },
        { from: 5, to: 6, material: 9, attribute: { id: 233, name: "追击增伤", amount: 500 } },
        { from: 3, to: 6, material: 2, attribute: { id: 55, name: "法防", amount: 15000 } }
      ]
    }
  ]
};
