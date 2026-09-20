// 装备天赋与连锁属性，整理自 DB_Arm_talent.lua、DB_Arm_suit.lua、DB_Item_arm.lua。
// 天赋的 unlockStage 已按客户端 EquipUtil.lua 的品质阶位偏移换算为装备总进阶等级。
window.equipmentTalentChainData = {
  talents: {
    weapon: [
      { quality: '暗金', id: 1001, unlockStage: 14, effect: '怒气加伤 +5%' },
      { quality: '暗金', id: 1002, unlockStage: 16, effect: '怒气加伤 +10%' },
      { quality: '暗金', id: 1000, unlockStage: 17, effect: '开启第三个宝石位' },
      { quality: '白金', id: 5001, unlockStage: 20, effect: '怒气加伤 +7.5%' },
      { quality: '白金', id: 5002, unlockStage: 22, effect: '怒气加伤 +15%' },
      { quality: '白金', id: 9003, unlockStage: 23, effect: '开启第四个宝石位' },
      { quality: '琉金', id: 10001, unlockStage: 26, effect: '怒气加伤 +10%' },
      { quality: '琉金', id: 10002, unlockStage: 28, effect: '怒气加伤 +20%' },
      { quality: '琉金', id: 14003, unlockStage: 29, effect: '开启第五个宝石位' },
      { quality: '澜金', id: 15001, unlockStage: 32, effect: '怒气加伤 +12.5%' },
      { quality: '澜金', id: 15002, unlockStage: 34, effect: '怒气加伤 +25%' },
      { quality: '澜金', id: 19003, unlockStage: 35, effect: '开启第六个宝石位' }
    ],
    armor: [
      { quality: '暗金', id: 3001, unlockStage: 14, effect: '物理免伤 +3%' },
      { quality: '暗金', id: 3002, unlockStage: 16, effect: '物理免伤 +7%' },
      { quality: '暗金', id: 1000, unlockStage: 17, effect: '开启第三个宝石位' },
      { quality: '白金', id: 7001, unlockStage: 20, effect: '物理免伤 +5%' },
      { quality: '白金', id: 7002, unlockStage: 22, effect: '物理免伤 +10%' },
      { quality: '白金', id: 9003, unlockStage: 23, effect: '开启第四个宝石位' },
      { quality: '琉金', id: 12001, unlockStage: 26, effect: '物理免伤 +7.5%' },
      { quality: '琉金', id: 12002, unlockStage: 28, effect: '物理免伤 +12.5%' },
      { quality: '琉金', id: 14003, unlockStage: 29, effect: '开启第五个宝石位' },
      { quality: '澜金', id: 17001, unlockStage: 32, effect: '物理免伤 +10%' },
      { quality: '澜金', id: 17002, unlockStage: 34, effect: '物理免伤 +15%' },
      { quality: '澜金', id: 19003, unlockStage: 35, effect: '开启第六个宝石位' }
    ],
    helmet: [
      { quality: '暗金', id: 4001, unlockStage: 14, effect: '法术免伤 +3%' },
      { quality: '暗金', id: 4002, unlockStage: 16, effect: '法术免伤 +7%' },
      { quality: '暗金', id: 1000, unlockStage: 17, effect: '开启第三个宝石位' },
      { quality: '白金', id: 8001, unlockStage: 20, effect: '法术免伤 +5%' },
      { quality: '白金', id: 8002, unlockStage: 22, effect: '法术免伤 +10%' },
      { quality: '白金', id: 9003, unlockStage: 23, effect: '开启第四个宝石位' },
      { quality: '琉金', id: 13001, unlockStage: 26, effect: '法术免伤 +7.5%' },
      { quality: '琉金', id: 13002, unlockStage: 28, effect: '法术免伤 +12.5%' },
      { quality: '琉金', id: 14003, unlockStage: 29, effect: '开启第五个宝石位' },
      { quality: '澜金', id: 18001, unlockStage: 32, effect: '法术免伤 +10%' },
      { quality: '澜金', id: 18002, unlockStage: 34, effect: '法术免伤 +15%' },
      { quality: '澜金', id: 19003, unlockStage: 35, effect: '开启第六个宝石位' }
    ],
    accessory: [
      { quality: '暗金', id: 2001, unlockStage: 14, effect: '怒气减伤 +5%' },
      { quality: '暗金', id: 2002, unlockStage: 16, effect: '怒气减伤 +10%' },
      { quality: '暗金', id: 1000, unlockStage: 17, effect: '开启第三个宝石位' },
      { quality: '白金', id: 6001, unlockStage: 20, effect: '怒气减伤 +7.5%' },
      { quality: '白金', id: 6002, unlockStage: 22, effect: '怒气减伤 +15%' },
      { quality: '白金', id: 9003, unlockStage: 23, effect: '开启第四个宝石位' },
      { quality: '琉金', id: 11001, unlockStage: 26, effect: '怒气减伤 +10%' },
      { quality: '琉金', id: 11002, unlockStage: 28, effect: '怒气减伤 +20%' },
      { quality: '琉金', id: 14003, unlockStage: 29, effect: '开启第五个宝石位' },
      { quality: '澜金', id: 16001, unlockStage: 32, effect: '怒气减伤 +12.5%' },
      { quality: '澜金', id: 16002, unlockStage: 34, effect: '怒气减伤 +25%' },
      { quality: '澜金', id: 19003, unlockStage: 35, effect: '开启第六个宝石位' }
    ]
  },
  // 连锁属性来自 DB_Arm_suit.lua；缺少的 6、12、18、24、30 是品质切换节点，不是连锁属性档位。
  chain: [
    { quality: '红色', rows: [
      { stage: 1, unlockStage: 1, attributes: [['攻击', 2500], ['生命', 12500]] },
      { stage: 2, unlockStage: 2, attributes: [['攻击', 3750], ['生命', 18750]] },
      { stage: 3, unlockStage: 3, attributes: [['攻击', 5000], ['生命', 25000]] },
      { stage: 4, unlockStage: 4, attributes: [['攻击', 6250], ['生命', 31250]] },
      { stage: 5, unlockStage: 5, attributes: [['攻击', 7500], ['生命', 37500]] }
    ]},
    { quality: '金色', rows: [
      { stage: 1, unlockStage: 7, attributes: [['攻击', 5000], ['生命', 25000]] },
      { stage: 2, unlockStage: 8, attributes: [['攻击', 7500], ['生命', 37500]] },
      { stage: 3, unlockStage: 9, attributes: [['攻击', 10000], ['生命', 50000]] },
      { stage: 4, unlockStage: 10, attributes: [['攻击', 12500], ['生命', 62500]] },
      { stage: 5, unlockStage: 11, attributes: [['攻击', 15000], ['生命', 75000]] }
    ]},
    { quality: '暗金', rows: [
      { stage: 1, unlockStage: 13, attributes: [['物防', 8000], ['法防', 8000]] },
      { stage: 2, unlockStage: 14, attributes: [['攻击', 12000], ['生命', 60000]] },
      { stage: 3, unlockStage: 15, attributes: [['物防', 16000], ['法防', 16000]] },
      { stage: 4, unlockStage: 16, attributes: [['攻击', 20000], ['生命', 100000]] },
      { stage: 5, unlockStage: 17, attributes: [['物防', 24000], ['法防', 24000]] }
    ]},
    { quality: '白金', rows: [
      { stage: 1, unlockStage: 19, attributes: [['物防', 12000], ['法防', 12000]] },
      { stage: 2, unlockStage: 20, attributes: [['攻击', 18000], ['生命', 90000]] },
      { stage: 3, unlockStage: 21, attributes: [['物防', 24000], ['法防', 24000]] },
      { stage: 4, unlockStage: 22, attributes: [['攻击', 30000], ['生命', 150000]] },
      { stage: 5, unlockStage: 23, attributes: [['物防', 36000], ['法防', 36000]] }
    ]},
    { quality: '琉金', rows: [
      { stage: 1, unlockStage: 25, attributes: [['物防', 18000], ['法防', 18000]] },
      { stage: 2, unlockStage: 26, attributes: [['攻击', 27000], ['生命', 135000]] },
      { stage: 3, unlockStage: 27, attributes: [['物防', 36000], ['法防', 36000]] },
      { stage: 4, unlockStage: 28, attributes: [['攻击', 45000], ['生命', 225000]] },
      { stage: 5, unlockStage: 29, attributes: [['物防', 54000], ['法防', 54000]] }
    ]},
    { quality: '澜金', rows: [
      { stage: 1, unlockStage: 31, attributes: [['物防', 27000], ['法防', 27000]] },
      { stage: 2, unlockStage: 32, attributes: [['攻击', 40500], ['生命', 202500]] },
      { stage: 3, unlockStage: 33, attributes: [['物防', 54000], ['法防', 54000]] },
      { stage: 4, unlockStage: 34, attributes: [['攻击', 67500], ['生命', 337500]] },
      { stage: 5, unlockStage: 35, attributes: [['物防', 81000], ['法防', 81000]] }
    ]}
  ]
};
