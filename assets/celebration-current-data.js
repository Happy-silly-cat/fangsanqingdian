// Snapshot extracted from the MuMu live resource files on 2026-10-03.
// Activity source: ActivityConfig.cfg.game40010254 -> annivTask.
// Gift contents: Resources/db/DB_Item_gift.lua and DB_Item_direct.lua.
window.celebrationCurrentData = {
  sourceUpdatedAt: "2026-10-03 00:35",
  itemIcons: {
    "助庆福利礼包": "assets/celebration-items/tongyonglibao.png",
    "琉金宠物福利包": "assets/celebration-items/box3.png",
    "红颜幻化福利包": "assets/celebration-items/xinbao10.png",
    "初级抗性符石包": "assets/celebration-items/box5.png",
    "助庆材料包": "assets/celebration-items/libao1.png",
    "节": "assets/celebration-items/jie.png",
    "日": "assets/celebration-items/ri.png",
    "快": "assets/celebration-items/kuai1.png",
    "乐": "assets/celebration-items/le1.png",
    "红灯笼": "assets/celebration-items/denglong.png",
    "毕方精华": "assets/celebration-items/pet_head_bifang.png",
    "白金古宝碎片包": "assets/celebration-items/2.png",
    "断情伤躯": "assets/celebration-items/huanhua_zhangchunhua_h1.png",
    "权倾朝野": "assets/celebration-items/huanhua_sunluban_h1.png",
    "清冷出尘": "assets/celebration-items/huanhua_zhugeguo_h1.png",
    "女中无双": "assets/celebration-items/huanhua_mayunlu_h1.png",
    "妙舞清歌": "assets/celebration-items/huanhua_bulianshi_h1.png",
    "续梦浮生": "assets/celebration-items/huanhua_caojie_h1.png",
    "兵符进阶令": "assets/celebration-items/bingfujinjieling.png"
  },
  event: {
    id: "annivTask",
    start: "2026-10-01 00:00",
    end: "2026-10-06 23:59:59",
    note: "活动兑换数据来自当前模拟器资源；礼包中的内容为资源列出的可选项。"
  },
  exchanges: [
    {
      id: 100001,
      reward: { name: "助庆福利礼包", id: 20820, isPackage: true, iconTone: "gift" },
      cost: [
        { name: "节", amount: 20, iconTone: "word" },
        { name: "日", amount: 20, iconTone: "word" },
        { name: "红灯笼", amount: 15, iconTone: "lantern" },
        { name: "快", amount: 20, iconTone: "word" },
        { name: "乐", amount: 20, iconTone: "word" }
      ],
      limit: 4
    },
    {
      id: 100002,
      reward: { name: "琉金宠物福利包", id: 20822, isPackage: true, iconTone: "gift" },
      cost: [
        { name: "节", amount: 100, iconTone: "word" },
        { name: "日", amount: 100, iconTone: "word" },
        { name: "红灯笼", amount: 240, iconTone: "lantern" },
        { name: "快", amount: 100, iconTone: "word" },
        { name: "乐", amount: 100, iconTone: "word" }
      ],
      limit: 1
    },
    {
      id: 100003,
      reward: { name: "红颜幻化福利包", id: 20614, isPackage: true, iconTone: "beauty" },
      cost: [
        { name: "节", amount: 35, iconTone: "word" },
        { name: "日", amount: 35, iconTone: "word" },
        { name: "红灯笼", amount: 50, iconTone: "lantern" },
        { name: "快", amount: 35, iconTone: "word" },
        { name: "乐", amount: 35, iconTone: "word" }
      ],
      limit: 1
    },
    {
      id: 100004,
      reward: { name: "初级抗性符石包", id: 20817, isPackage: true, iconTone: "gift" },
      cost: [
        { name: "节", amount: 15, iconTone: "word" },
        { name: "日", amount: 15, iconTone: "word" },
        { name: "红灯笼", amount: 8, iconTone: "lantern" },
        { name: "快", amount: 15, iconTone: "word" },
        { name: "乐", amount: 15, iconTone: "word" }
      ],
      limit: 10
    },
    {
      id: 100005,
      reward: { name: "阵旗琉金魂", id: 69055, icon: "assets/hero-star-soul-items/zhenqiliujinhun.png", iconTone: "material" },
      cost: [{ name: "红灯笼", amount: 4, iconTone: "lantern" }],
      limit: 100
    },
    {
      id: 100006,
      reward: { name: "红颜结", id: 60114, icon: "assets/lingdi-items/hongyanjie.png", iconTone: "material" },
      cost: [{ name: "节", amount: 1, iconTone: "word" }],
      limit: 5000
    },
    {
      id: 100007,
      reward: { name: "玄兵强化石", id: 60126, icon: "assets/lingdi-items/xuanbing-qianghuashi.png", iconTone: "material" },
      cost: [{ name: "日", amount: 1, iconTone: "word" }],
      limit: 5000
    },
    {
      id: 100008,
      reward: { name: "神兵洗炼石", amount: 5, id: 60025, icon: "assets/lingdi-items/small_chihuoshenbingshi.png", iconTone: "material" },
      cost: [{ name: "快", amount: 1, iconTone: "word" }],
      limit: 5000
    },
    {
      id: 100009,
      reward: { name: "天命石", id: 60051, icon: "assets/lingdi-items/tianmingshi.png", iconTone: "material" },
      cost: [{ name: "乐", amount: 1, iconTone: "word" }],
      limit: 5000
    },
    {
      id: 100010,
      selectable: false,
      reward: { name: "助庆材料包", amount: 5, id: 20164, isPackage: true, iconTone: "gift" },
      cost: [{ name: "红灯笼", amount: 1, iconTone: "lantern" }],
      limit: 1000
    }
  ],
  packages: [
    {
      id: 20822,
      name: "琉金宠物福利包",
      iconTone: "gift",
      description: "特别准备的琉金宠物大礼包，机不可失哦！",
      choices: [
        { name: "毕方精华", amount: 120, iconTone: "pet" },
        { name: "白金古宝碎片包", amount: 40, iconTone: "gift" },
        { name: "化身突破石", amount: 4200, icon: "assets/lingdi-items/huashentuposhi.png", iconTone: "material" },
        { name: "阵旗强化令", amount: 7000, icon: "assets/lingdi-items/zhenqiling.png", iconTone: "material" }
      ]
    },
    {
      id: 20614,
      name: "红颜幻化福利包",
      iconTone: "beauty",
      description: "夏日快乐！为主公特别准备的红颜珍品幻化福利！",
      choices: [
        { name: "断情伤躯", iconTone: "beauty" },
        { name: "权倾朝野", iconTone: "beauty" },
        { name: "清冷出尘", iconTone: "beauty" },
        { name: "女中无双", iconTone: "beauty" },
        { name: "妙舞清歌", iconTone: "beauty" },
        { name: "续梦浮生", iconTone: "beauty" },
        { name: "名将残卷", amount: 400, icon: "assets/lingdi-items/canjuan.png", iconTone: "material" },
        { name: "兵符进阶令", amount: 2000, iconTone: "material" }
      ]
    }
  ]
};
