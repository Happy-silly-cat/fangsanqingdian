window.heroBeautyAccessoryData = {
  qualities: {
    7: { name: "红", className: "quality-7" },
    8: { name: "金", className: "quality-8" },
    9: { name: "暗金", className: "quality-9" },
    10: { name: "白金", className: "quality-10" },
    11: { name: "琉金", className: "quality-11" },
    12: { name: "澜金", className: "quality-12" }
  },
  attributeNames: {
    24: "物理免伤",
    25: "法术免伤",
    51: "生命",
    54: "物防",
    55: "法防",
    56: "伤害",
    57: "免伤",
    60: "怒气加伤",
    61: "怒气减伤",
    100: "攻击"
  },
  accessories: [
    {
      id: 950101, name: "逆流发带", quality: 7, icon: "assets/red-beauty-accessories/niliufadai.png",
      base: [[54, 300], [55, 300]], upgrades: []
    },
    {
      id: 950201, name: "雾绒羽环", quality: 8, icon: "assets/red-beauty-accessories/wurongyuhuan.png",
      base: [[100, 2000], [51, 5000]],
      upgrades: [{ to: 9, costs: [{ itemId: 950201, quantity: 30 }], attributes: [[100, 20000], [51, 50000]] }]
    },
    {
      id: 950301, name: "唤潮摇扇", quality: 9, icon: "assets/red-beauty-accessories/huanchaoyaoshan.png",
      base: [[100, 50000], [56, 500]],
      upgrades: [
        { to: 10, costs: [{ itemId: 950301, quantity: 1 }], attributes: [[100, 150000], [56, 1500]] },
        { to: 11, costs: [{ itemId: 950301, quantity: 2 }], attributes: [[100, 400000], [56, 4000]] },
        { to: 12, costs: [{ itemId: 950301, quantity: 5 }], attributes: [[100, 1000000], [56, 7500]] }
      ]
    },
    {
      id: 950401, name: "珑上生花", quality: 9, icon: "assets/red-beauty-accessories/longshangshenghua.png",
      base: [[100, 50000], [60, 500]],
      upgrades: [
        { to: 10, costs: [{ itemId: 950401, quantity: 1 }], attributes: [[100, 150000], [60, 1500]] },
        { to: 11, costs: [{ itemId: 950401, quantity: 2 }], attributes: [[100, 400000], [60, 4000]] },
        { to: 12, costs: [{ itemId: 950401, quantity: 5 }], attributes: [[100, 1000000], [60, 7500]] }
      ]
    },
    {
      id: 950601, name: "碧落浮蕊", quality: 9, icon: "assets/red-beauty-accessories/biluofurui.png",
      base: [[100, 50000], [61, 500]],
      upgrades: [
        { to: 10, costs: [{ itemId: 950601, quantity: 1 }], attributes: [[51, 750000], [61, 1500]] },
        { to: 11, costs: [{ itemId: 950601, quantity: 2 }], attributes: [[54, 400000], [61, 4000]] },
        { to: 12, costs: [{ itemId: 950601, quantity: 5 }], attributes: [[100, 1000000], [61, 7500]] }
      ]
    },
    {
      id: 950701, name: "凝波之钗", quality: 9, icon: "assets/red-beauty-accessories/ningbozhichai.png",
      base: [[100, 50000], [57, 500]],
      upgrades: [
        { to: 10, costs: [{ itemId: 950701, quantity: 1 }], attributes: [[51, 750000], [57, 1500]] },
        { to: 11, costs: [{ itemId: 950701, quantity: 2 }], attributes: [[55, 400000], [57, 4000]] },
        { to: 12, costs: [{ itemId: 950701, quantity: 5 }], attributes: [[100, 1000000], [57, 7500]] }
      ]
    },
    {
      id: 950801, name: "常燃羽结", quality: 9, icon: "assets/red-beauty-accessories/changranyujie.png",
      base: [[100, 50000], [25, 350]],
      upgrades: [
        { to: 10, costs: [{ itemId: 950801, quantity: 1 }], attributes: [[55, 150000], [25, 1000]] },
        { to: 11, costs: [{ itemId: 950801, quantity: 2 }], attributes: [[54, 400000], [25, 3000]] },
        { to: 12, costs: [{ itemId: 950801, quantity: 5 }], attributes: [[55, 1250000], [25, 4000]] }
      ]
    },
    {
      id: 950102, name: "绽舞双环", quality: 7, icon: "assets/red-beauty-accessories/zhanwushuanghuan.png",
      base: [[100, 300], [51, 1500]], upgrades: []
    },
    {
      id: 950202, name: "酣醉杯盏", quality: 8, icon: "assets/red-beauty-accessories/hanzuibeizhan.png",
      base: [[54, 1500], [55, 1500]],
      upgrades: [{ to: 9, costs: [{ itemId: 950202, quantity: 30 }], attributes: [[54, 15000], [55, 15000]] }]
    },
    {
      id: 950203, name: "琉璃金钗", quality: 8, icon: "assets/red-beauty-accessories/liulijinchai.png",
      base: [[100, 2000], [54, 1000]],
      upgrades: [{ to: 9, costs: [{ itemId: 950203, quantity: 30 }], attributes: [[100, 20000], [54, 10000]] }]
    },
    {
      id: 950204, name: "翎羽花簪", quality: 8, icon: "assets/red-beauty-accessories/lingyuhuazan.png",
      base: [[51, 10000], [55, 1000]],
      upgrades: [{ to: 9, costs: [{ itemId: 950204, quantity: 30 }], attributes: [[51, 100000], [55, 10000]] }]
    },
    {
      id: 950501, name: "华锦云肩", quality: 9, icon: "assets/red-beauty-accessories/huajinyunjian.png",
      base: [[51, 250000], [24, 350]],
      upgrades: [
        { to: 10, costs: [{ itemId: 950501, quantity: 1 }], attributes: [[51, 750000], [24, 1000]] },
        { to: 11, costs: [{ itemId: 950501, quantity: 2 }], attributes: [[100, 400000], [24, 3000]] },
        { to: 12, costs: [{ itemId: 950501, quantity: 5 }], attributes: [[54, 1250000], [24, 4000]] }
      ]
    }
  ]
};
