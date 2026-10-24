(() => {
  const reward = (name, amount = 1, tone = "material", id = "") => ({ name, amount, tone, id });
  const autumn = amount => reward("秋菊", amount, "autumn", "60685");
  const maple = amount => reward("红枫叶", amount, "maple", "60686");
  const silver = amount => ({ ...reward("银币", amount, "silver", "0"), quality: 3 });
  const coins = amount => ({
    ...reward("金币", amount, "gold", "0"),
    quality: 5,
    icons: ["assets/festival-carnival/2026-golden-autumn/icons/game/jinbi_da.png"]
  });

  const progressRewards = (targetCount, amounts, finalExtra = []) => Array.from({ length: targetCount }, (_, index) => {
    // Some source tables omit the repeated final reward amount even though the
    // corresponding target row still exists. Reuse the last amount so every
    // target can be rendered instead of leaving an undefined reward list.
    const amount = amounts[index] ?? amounts.at(-1) ?? 0;
    return index === targetCount - 1
      ? [maple(finalExtra.length ? finalExtra[0] : 5), silver(finalExtra.length ? finalExtra[1] : 2300000), ...finalExtra.slice(2)]
      : [autumn(amount)];
  });

  const makeProgress = (id, name, targets, amounts, finalExtra = []) => targets.map((target, index) => ({
    id: `${id}-${index + 1}`,
    name,
    target,
    rewards: progressRewards(targets.length, amounts, finalExtra)[index]
  }));

  const recharge = (id, amount, rewards, limit = 10) => ({
    id,
    name: `单笔充值${amount}元`,
    target: `单笔充值 ${amount} 元`,
    limit,
    rewards
  });

  const seasonOnePublic = [
    { id: "101001", name: "登陆第一天", target: "第 1 天", rewards: [autumn(10), coins(300), reward("紫马碎片包", 1, "gift", "30062")] },
    { id: "101002", name: "登陆第二天", target: "第 2 天", rewards: [autumn(10), coins(300), reward("紫书碎片包", 1, "gift", "30052")] },
    { id: "101003", name: "登陆第三天", target: "第 3 天", rewards: [autumn(10), coins(300), maple(1)] },
    recharge("110001", 6, [maple(1), reward("体力丹", 5, "material", "10032"), reward("300金币", 1, "gold", "10028")]),
    recharge("110002", 30, [maple(3), reward("体力丹", 10, "material", "10032"), reward("500金币", 1, "gold", "10024")]),
    recharge("110003", 50, [maple(5), reward("神将战策选择包", 1, "gift", "20210"), reward("500金币", 1, "gold", "10024")]),
    recharge("110004", 98, [maple(8), reward("统帅强化石", 35, "material", "69062"), reward("1000金币", 1, "gold", "10025")]),
    recharge("110005", 198, [maple(10), reward("高级材料选择包十", 1, "gift", "20754"), reward("宝珠升红石", 3, "material", "69064")]),
    recharge("110006", 488, [maple(20), reward("资源 20824", 2, "gift", "20824"), reward("化身突破石", 375, "material", "60112")])
  ];

  const seasonTwoPublic = [
    { id: "101004", name: "登陆第四天", target: "第 4 天", rewards: [autumn(10), coins(300), maple(1)] },
    { id: "101005", name: "登陆第五天", target: "第 5 天", rewards: [autumn(10), coins(300), maple(1)] },
    { id: "101006", name: "登陆第六天", target: "第 6 天", rewards: [autumn(10), coins(300), maple(1)] },
    recharge("110007", 6, [maple(1), reward("耐力丹", 10, "material", "10042"), reward("300金币", 1, "gold", "10028")]),
    recharge("110008", 30, [maple(3), reward("耐力丹", 20, "material", "10042"), reward("500金币", 1, "gold", "10024")]),
    recharge("110009", 50, [maple(5), reward("红颜升星玉", 5, "material", "60115"), reward("500金币", 1, "gold", "10024")]),
    recharge("110010", 98, [maple(8), reward("统帅强化石", 35, "material", "69062"), reward("1000金币", 1, "gold", "10025")]),
    recharge("110011", 198, [maple(10), reward("高级材料选择包十一", 1, "gift", "20755"), reward("兵鉴强化石", 15, "material", "60137")]),
    recharge("110012", 488, [maple(20), reward("统帅材料包", 4, "gift", "20808"), reward("化身突破石", 375, "material", "60112")])
  ];

  const seasonOneEast = [
    ...makeProgress("104", "夺宝", [75, 150, 225, 300, 375, 450, 525, 600], [5, 5, 10, 10, 15, 15, 20], [5, 2300000, reward("进阶材料选择包", 10, "gift", "20057")]),
    ...makeProgress("111", "竞技场挑战", [75, 150, 225, 300, 375, 450, 525, 600], [5, 5, 10, 10, 15, 15, 20], [5, 2300000, reward("进阶材料选择包", 10, "gift", "20057")]),
    { id: "112001", name: "七星台召星", target: "召星 10 次", rewards: [maple(5), silver(2300000), reward("七星令", 5, "material", "60055")] },
    { id: "114001", name: "神器台召唤", target: "召唤 10 次", rewards: [maple(5), silver(2300000), reward("玄兵令", 5, "material", "60124")] },
    { id: "115001", name: "普通名将点将", target: "点将 10 次", rewards: [maple(5), silver(2300000), reward("名将令", 5, "material", "60091")] },
    { id: "116001", name: "高级名将点将", target: "点将 10 次", rewards: [maple(5), silver(2300000), reward("高级名将令", 5, "material", "60092")] },
    { id: "117001", name: "铜雀台送花", target: "送花 10 次", rewards: [maple(5), silver(2300000), reward("红颜花束", 5, "material", "60116")] },
    { id: "118001", name: "后军台击鼓", target: "击鼓 10 次", rewards: [maple(5), silver(2300000), reward("后军令", 5, "material", "60119")] },
    { id: "119001", name: "玄兵台召唤", target: "召唤 10 次", rewards: [maple(5), silver(2300000), reward("玄兵令", 5, "material", "60124")] },
    { id: "120001", name: "军师台召唤", target: "召唤 10 次", rewards: [maple(5), silver(2300000), reward("军师令", 5, "material", "60135")] },
    { id: "121001", name: "统帅台击鼓", target: "击鼓 10 次", rewards: [maple(5), silver(2300000), reward("统帅令", 5, "material", "60144")] }
  ];

  const seasonTwoEast = [
    ...makeProgress("102", "普通副本胜利", [90, 180, 270, 360, 450, 540, 630, 720], [5, 5, 10, 10, 15, 15, 20], [5, 2300000, reward("进阶材料选择包", 10, "gift", "20057")]),
    ...makeProgress("105", "比武", [20, 40, 60, 80, 100, 120], [5, 10, 10, 15, 20], [5, 1700000, reward("进阶材料选择包", 10, "gift", "20057")]),
    { id: "112002", name: "七星台召星", target: "召星 10 次", rewards: [maple(5), silver(2300000), reward("七星令", 5, "material", "60055")] },
    { id: "114002", name: "神器台召唤", target: "召唤 10 次", rewards: [maple(5), silver(2300000), reward("玄兵令", 5, "material", "60124")] },
    { id: "115002", name: "普通名将点将", target: "点将 10 次", rewards: [maple(5), silver(2300000), reward("名将令", 5, "material", "60091")] },
    { id: "116002", name: "高级名将点将", target: "点将 10 次", rewards: [maple(5), silver(2300000), reward("高级名将令", 5, "material", "60092")] },
    { id: "117002", name: "铜雀台送花", target: "送花 10 次", rewards: [maple(5), silver(2300000), reward("红颜花束", 5, "material", "60116")] },
    { id: "118002", name: "后军台击鼓", target: "击鼓 10 次", rewards: [maple(5), silver(2300000), reward("后军令", 5, "material", "60119")] },
    { id: "119002", name: "玄兵台召唤", target: "召唤 10 次", rewards: [maple(5), silver(2300000), reward("玄兵令", 5, "material", "60124")] },
    { id: "120002", name: "军师台召唤", target: "召唤 10 次", rewards: [maple(5), silver(2300000), reward("军师令", 5, "material", "60135")] },
    { id: "121002", name: "统帅台击鼓", target: "击鼓 10 次", rewards: [maple(5), silver(2300000), reward("统帅令", 5, "material", "60144")] }
  ];

  const seasonOneActivity = [
    ...makeProgress("108", "黑市兑换购买物品", [50, 100, 150, 200], [10, 15, 20], [20, 2300000, reward("折扣材料选择包", 10, "gift", "20231")]),
    ...makeProgress("113", "精品折扣累计积分", [5000, 10000, 15000, 20000], [10, 15, 20], [20, 2300000, reward("折扣材料选择包", 10, "gift", "20231")])
  ];

  const seasonTwoActivity = [
    ...makeProgress("106", "跨服团购积分", [1000, 3000, 5000, 10000, 12000, 15000, 18000, 20000], [5, 5, 10, 10, 15, 15, 20], [20, 2300000, reward("折扣材料选择包", 10, "gift", "20231")]),
    ...makeProgress("107", "积分轮盘积分", [25, 50, 100, 150, 200, 250, 275, 300], [5, 5, 10, 10, 15, 15, 20], [20, 2300000, reward("折扣材料选择包", 10, "gift", "20231")])
  ];

  const seasonOneShop = [
    ["201001", "红枫叶", 1, 250, 225, 20], ["201002", "秋菊", 1, 50, 30, 50], ["201003", "资源 15322", 1, 3250, 688, 40], ["201004", "战魂材料礼包", 1, 2000, 300, 50], ["201005", "宝物材料礼包", 1, 3000, 450, 50], ["201006", "兵符材料礼包", 1, 2000, 300, 50], ["201007", "神兵材料选择包", 1, 1200, 280, 60], ["201008", "金品神器碎片包", 1, 1000, 698, 50], ["201009", "阵旗精华", 1, 200, 120, 200], ["201010", "金马精华", 1, 100, 75, 300]
  ].map(([id, name, amount, original, price, limit]) => ({ id, name, amount, original, price, limit }));

  const seasonTwoShop = [
    ["201011", "红枫叶", 1, 250, 225, 20], ["201012", "秋菊", 1, 50, 30, 50], ["201013", "资源 15322", 1, 3250, 688, 40], ["201014", "战魂材料礼包", 1, 2000, 300, 50], ["201015", "稀有材料礼包", 1, 4500, 450, 30], ["201016", "兵符材料礼包", 1, 2000, 300, 50], ["201017", "红品神器碎片包", 1, 800, 588, 60], ["201018", "神兵材料选择包", 1, 1200, 280, 60], ["201019", "阵旗强化令", 5, 100, 60, 400], ["201020", "金书精华", 1, 100, 75, 300]
  ].map(([id, name, amount, original, price, limit]) => ({ id, name, amount, original, price, limit }));

  const exchanges = [
    ["301001", "澜金时装碎片（苍鹰逐野 / 云原猎影）", [["红枫叶", 3], ["秋菊", 5]], 80],
    ["301002", "木叶秋凉", [["红枫叶", 40], ["秋菊", 100]], 1],
    ["301003", "超凡经验丹", [["红枫叶", 1], ["秋菊", 1]], 2000],
    ["301004", "真神·鬼谷子", [["红枫叶", 1], ["秋菊", 3]], 100],
    ["301005", "放开那红包", [["秋菊", 1]], 25],
    ["301006", "暗金名将选择包", [["红枫叶", 3], ["秋菊", 3]], 100],
    ["301007", "五色神牛碎片（资源 9300006）", [["红枫叶", 4], ["秋菊", 6]], 30],
    ["301008", "限时金魂箱·贰", [["红枫叶", 12], ["秋菊", 12]], 15],
    ["301009", "限时金魂箱·壹", [["红枫叶", 8], ["秋菊", 8]], 50],
    ["301010", "神将魂石选择包", [["红枫叶", 2], ["秋菊", 1]], 100],
    ["301011", "神将战策选择包", [["红枫叶", 8]], 100],
    ["301012", "热卖精华箱·壹", [["红枫叶", 8]], 30],
    ["301013", "限时精华箱·贰", [["红枫叶", 12]], 30],
    ["301014", "限时精华箱·壹", [["红枫叶", 8]], 50],
    ["301015", "幻化晶石", [["红枫叶", 3], ["秋菊", 1]], 100],
    ["301016", "珍品幻化选择包", [["幻化晶石", 100]], 1],
    ["301017", "金装金宠碎片箱", [["红枫叶", 6]], 10],
    ["301018", "装备材料选择包", [["秋菊", 20]], 150],
    ["301019", "红装红宠碎片箱", [["红枫叶", 4]], 200],
    ["301020", "进阶材料选择包", [["秋菊", 2]], 500],
    ["301021", "星魂珠", [["秋菊", 1]], 1000],
    ["301022", "秋菊 ×5", [["红枫叶", 1]], 500]
  ].map(([id, name, costs, limit]) => ({ id, name, costs, limit }));

  const season = (id, title, start, end, publicTasks, eastTasks, activityTasks, shop) => ({
    id, title, start, end,
    tabs: [
      { id: "public", title: "全民福利", tasks: publicTasks },
      { id: "east", title: "东征西讨", tasks: eastTasks },
      { id: "activity", title: "活动福利", tasks: activityTasks },
      { id: "shop", title: "折扣商店", shop }
    ]
  });

  window.festivalCarnivalArchives = [{
    schemaVersion: 1,
    archiveId: "2026-golden-autumn",
    title: "2026 金秋十月",
    sourceUpdatedAt: "2026-10-19 14:45",
    event: { start: "2026-10-17 00:00", end: "2026-10-23 23:59:59", exchangeEnd: "2026-10-23 23:59:59" },
    preview: "assets/festival-carnival/2026-golden-autumn/activity-background.png",
    seasons: [
      season(1, "第一季", "2026-10-17 00:00", "2026-10-19 23:59:59", seasonOnePublic, seasonOneEast, seasonOneActivity, seasonOneShop),
      season(2, "第二季", "2026-10-20 00:00", "2026-10-22 23:59:59", seasonTwoPublic, seasonTwoEast, seasonTwoActivity, seasonTwoShop)
    ],
    exchanges
  }];

  const catalog = window.festivalCarnivalItems;
  if (catalog) {
    const assignItem = (item, resourceId) => {
      const source = catalog.items[resourceId];
      if (!source) throw new Error(`Missing festival item: ${resourceId}`);
      Object.assign(item, source, { resourceId });
    };
    for (const archive of window.festivalCarnivalArchives) {
      for (const season of archive.seasons) {
        for (const tab of season.tabs) {
          for (const task of tab.tasks || []) {
            for (const item of task.rewards) {
              if (item.id !== "0") assignItem(item, item.id);
            }
          }
          for (const item of tab.shop || []) assignItem(item, catalog.shopItems[item.id]);
        }
      }
      for (const item of archive.exchanges) {
        assignItem(item, catalog.exchangeItems[item.id]);
        if (item.id === "301022") item.name += " ×5";
      }
    }
  }
})();
