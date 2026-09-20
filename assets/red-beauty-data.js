// 红颜进阶与升级数据。若游戏更新，优先同步 DB_Hero_beauty.lua、DB_Hero_beauty_adv.lua 与 DB_Hero_beauty_meili.lua 后重新生成此文件。
// adv_cost 原字段为 level|57|0|quantity；57 是红颜精魄这种专用资源类型，不是物品 ID。
window.heroBeautyData = {
  "items": {
    "60114": {
      "name": "红颜结",
      "icon": "assets/red-beauty-items/hongyanjie.png"
    },
    "57": {
      "name": "红颜精魄",
      "icon": "assets/red-beauty-items/hongyanjingpo.png"
    },
    "60115": {
      "name": "红颜升星玉",
      "icon": "assets/red-beauty-items/hongyanshengxingyu.png"
    },
    "63101": {
      "name": "孙鲁班",
      "icon": "assets/red-beauty-items/63101.png"
    },
    "63102": {
      "name": "张春华",
      "icon": "assets/red-beauty-items/63102.png"
    },
    "63103": {
      "name": "马云禄",
      "icon": "assets/red-beauty-items/63103.png"
    },
    "63104": {
      "name": "诸葛果",
      "icon": "assets/red-beauty-items/63104.png"
    },
    "63105": {
      "name": "步练师",
      "icon": "assets/red-beauty-items/63105.png"
    },
    "63106": {
      "name": "曹节",
      "icon": "assets/red-beauty-items/63106.png"
    }
  },
  "xianggui": {
    "materialId": 60114,
    "maxLevel": 25,
    "costsByTargetLevel": [20, 60, 100, 140, 180, 220, 260, 300, 340, 380, 420, 460, 500, 540, 580, 620, 660, 700, 740, 780, 820, 860, 900, 940, 980],
    "categories": [
      {"name": "色", "attributeId": 100, "attributeName": "全体攻击", "baseValue": 1000, "valuePerLevel": 5000},
      {"name": "才", "attributeId": 51, "attributeName": "全体生命", "baseValue": 5000, "valuePerLevel": 25000},
      {"name": "艺", "attributeId": 54, "attributeName": "全体物防", "baseValue": 1000, "valuePerLevel": 5000},
      {"name": "德", "attributeId": 55, "attributeName": "全体法防", "baseValue": 1000, "valuePerLevel": 5000}
    ]
  },
  "beauties": [
    {
      "id": 200001,
      "name": "孙鲁班",
      "quality": "红",
      "fragmentId": 63101,
      "fragmentIcon": "assets/red-beauty-items/63101.png",
      "activationQuantity": 1,
      "maxStar": 10,
      "maxLevel": 40,
      "starCosts": [
        {
          "star": 1,
          "materials": [
            {
              "id": 63101,
              "quantity": 3
            },
            {
              "id": 60115,
              "quantity": 200
            }
          ]
        },
        {
          "star": 2,
          "materials": [
            {
              "id": 63101,
              "quantity": 6
            },
            {
              "id": 60115,
              "quantity": 400
            }
          ]
        },
        {
          "star": 3,
          "materials": [
            {
              "id": 63101,
              "quantity": 9
            },
            {
              "id": 60115,
              "quantity": 600
            }
          ]
        },
        {
          "star": 4,
          "materials": [
            {
              "id": 63101,
              "quantity": 12
            },
            {
              "id": 60115,
              "quantity": 800
            }
          ]
        },
        {
          "star": 5,
          "materials": [
            {
              "id": 63101,
              "quantity": 15
            },
            {
              "id": 60115,
              "quantity": 1000
            }
          ]
        },
        {
          "star": 6,
          "materials": [
            {
              "id": 63101,
              "quantity": 18
            },
            {
              "id": 60115,
              "quantity": 1500
            }
          ]
        },
        {
          "star": 7,
          "materials": [
            {
              "id": 63101,
              "quantity": 21
            },
            {
              "id": 60115,
              "quantity": 2000
            }
          ]
        },
        {
          "star": 8,
          "materials": [
            {
              "id": 63101,
              "quantity": 25
            },
            {
              "id": 60115,
              "quantity": 3000
            }
          ]
        },
        {
          "star": 9,
          "materials": [
            {
              "id": 63101,
              "quantity": 30
            },
            {
              "id": 60115,
              "quantity": 4000
            }
          ]
        },
        {
          "star": 10,
          "materials": [
            {
              "id": 63101,
              "quantity": 40
            },
            {
              "id": 60115,
              "quantity": 5000
            }
          ]
        }
      ],
      "starAttributes": [
        {"star": 1, "attributes": [{"id": 11, "name": "生命比", "quantity": 2000}]},
        {"star": 2, "attributes": [{"id": 195, "name": "魅力减伤", "quantity": 500}, {"id": 51, "name": "生命", "quantity": 250000}]},
        {"star": 3, "attributes": [{"id": 194, "name": "魅力增伤", "quantity": 500}, {"id": 195, "name": "魅力减伤", "quantity": 500}]},
        {"star": 4, "attributes": [{"id": 194, "name": "魅力增伤", "quantity": 500}, {"id": 195, "name": "魅力减伤", "quantity": 1000}]},
        {"star": 5, "attributes": [{"id": 194, "name": "魅力增伤", "quantity": 500}, {"id": 195, "name": "魅力减伤", "quantity": 1500}]},
        {"star": 6, "attributes": [{"id": 194, "name": "魅力增伤", "quantity": 2000}, {"id": 56, "name": "伤害", "quantity": 2000}]},
        {"star": 7, "attributes": [{"id": 195, "name": "魅力减伤", "quantity": 2500}, {"id": 57, "name": "免伤", "quantity": 2500}]},
        {"star": 8, "attributes": [{"id": 194, "name": "魅力增伤", "quantity": 3000}, {"id": 56, "name": "伤害", "quantity": 3000}]},
        {"star": 9, "attributes": [{"id": 195, "name": "魅力减伤", "quantity": 3500}, {"id": 57, "name": "免伤", "quantity": 3500}]},
        {"star": 10, "attributes": [{"id": 194, "name": "魅力增伤", "quantity": 4000}, {"id": 57, "name": "免伤", "quantity": 4000}]}
      ],
      "upgradeCosts": [
        {
          "level": 1,
          "material": {
            "id": 57,
            "quantity": 100
          },
          "attributes": [
            {
              "id": 55,
              "name": "法防",
              "quantity": 10000
            }
          ],
          "skill": null
        },
        {
          "level": 2,
          "material": {
            "id": 57,
            "quantity": 200
          },
          "attributes": [
            {
              "id": 54,
              "name": "物防",
              "quantity": 10000
            }
          ],
          "skill": null
        },
        {
          "level": 3,
          "material": {
            "id": 57,
            "quantity": 300
          },
          "attributes": [
            {
              "id": 51,
              "name": "生命",
              "quantity": 50000
            }
          ],
          "skill": null
        },
        {
          "level": 4,
          "material": {
            "id": 57,
            "quantity": 400
          },
          "attributes": [
            {
              "id": 100,
              "name": "攻击",
              "quantity": 10000
            }
          ],
          "skill": null
        },
        {
          "level": 5,
          "material": {
            "id": 57,
            "quantity": 1000
          },
          "attributes": [],
          "skill": {
            "id": 701732,
            "name": "激活红颜技能",
            "description": "为己方随机1个武将回复其10%最大生命的血量（己方每一轮大回合结束后释放）"
          }
        },
        {
          "level": 6,
          "material": {
            "id": 57,
            "quantity": 700
          },
          "attributes": [
            {
              "id": 55,
              "name": "法防",
              "quantity": 25000
            }
          ],
          "skill": null
        },
        {
          "level": 7,
          "material": {
            "id": 57,
            "quantity": 900
          },
          "attributes": [
            {
              "id": 54,
              "name": "物防",
              "quantity": 25000
            }
          ],
          "skill": null
        },
        {
          "level": 8,
          "material": {
            "id": 57,
            "quantity": 1100
          },
          "attributes": [
            {
              "id": 195,
              "name": "魅力减伤",
              "quantity": 400
            }
          ],
          "skill": null
        },
        {
          "level": 9,
          "material": {
            "id": 57,
            "quantity": 1300
          },
          "attributes": [
            {
              "id": 194,
              "name": "魅力增伤",
              "quantity": 400
            }
          ],
          "skill": null
        },
        {
          "level": 10,
          "material": {
            "id": 57,
            "quantity": 2000
          },
          "attributes": [],
          "skill": {
            "id": 701733,
            "name": "提升技能效果",
            "description": "为己方攻击最高武将回复其15%最大生命的血量，并增加50%暴击率，持续1回合。（己方每一轮大回合结束后释放）"
          }
        },
        {
          "level": 11,
          "material": {
            "id": 57,
            "quantity": 1800
          },
          "attributes": [
            {
              "id": 51,
              "name": "生命",
              "quantity": 200000
            }
          ],
          "skill": null
        },
        {
          "level": 12,
          "material": {
            "id": 57,
            "quantity": 2100
          },
          "attributes": [
            {
              "id": 100,
              "name": "攻击",
              "quantity": 40000
            }
          ],
          "skill": null
        },
        {
          "level": 13,
          "material": {
            "id": 57,
            "quantity": 2400
          },
          "attributes": [
            {
              "id": 195,
              "name": "魅力减伤",
              "quantity": 600
            }
          ],
          "skill": null
        },
        {
          "level": 14,
          "material": {
            "id": 57,
            "quantity": 2700
          },
          "attributes": [
            {
              "id": 194,
              "name": "魅力增伤",
              "quantity": 600
            }
          ],
          "skill": null
        },
        {
          "level": 15,
          "material": {
            "id": 57,
            "quantity": 4000
          },
          "attributes": [],
          "skill": {
            "id": 701734,
            "name": "提升技能并激活新战斗表现",
            "description": "为己方攻击最高武将回复其20%最大生命的血量（该回复效果，不受任何抑制回血类buff的影响），并增加50%暴击率和50%怒气加伤，持续2回合。（己方每一轮大回合结束后释放）"
          }
        },
        {
          "level": 16,
          "material": {
            "id": 57,
            "quantity": 3400
          },
          "attributes": [
            {
              "id": 55,
              "name": "法防",
              "quantity": 60000
            }
          ],
          "skill": null
        },
        {
          "level": 17,
          "material": {
            "id": 57,
            "quantity": 3800
          },
          "attributes": [
            {
              "id": 54,
              "name": "物防",
              "quantity": 60000
            }
          ],
          "skill": null
        },
        {
          "level": 18,
          "material": {
            "id": 57,
            "quantity": 4200
          },
          "attributes": [
            {
              "id": 195,
              "name": "魅力减伤",
              "quantity": 800
            }
          ],
          "skill": null
        },
        {
          "level": 19,
          "material": {
            "id": 57,
            "quantity": 4600
          },
          "attributes": [
            {
              "id": 194,
              "name": "魅力增伤",
              "quantity": 800
            }
          ],
          "skill": null
        },
        {
          "level": 20,
          "material": {
            "id": 57,
            "quantity": 7000
          },
          "attributes": [],
          "skill": {
            "id": 701877,
            "name": "提升技能效果",
            "description": "为己方攻击最高武将回复其25%最大生命的血量（该回复效果，不受任何抑制回血类buff的影响），并增加50%暴击率和50%怒气加伤和50%伤害，持续3回合（己方每一轮大回合结束后释放）"
          }
        },
        {
          "level": 21,
          "material": {
            "id": 57,
            "quantity": 5500
          },
          "attributes": [
            {
              "id": 51,
              "name": "生命",
              "quantity": 400000
            }
          ],
          "skill": null
        },
        {
          "level": 22,
          "material": {
            "id": 57,
            "quantity": 6000
          },
          "attributes": [
            {
              "id": 100,
              "name": "攻击",
              "quantity": 80000
            }
          ],
          "skill": null
        },
        {
          "level": 23,
          "material": {
            "id": 57,
            "quantity": 6500
          },
          "attributes": [
            {
              "id": 195,
              "name": "魅力减伤",
              "quantity": 1000
            }
          ],
          "skill": null
        },
        {
          "level": 24,
          "material": {
            "id": 57,
            "quantity": 7000
          },
          "attributes": [
            {
              "id": 194,
              "name": "魅力增伤",
              "quantity": 1000
            }
          ],
          "skill": null
        },
        {
          "level": 25,
          "material": {
            "id": 57,
            "quantity": 11000
          },
          "attributes": [],
          "skill": {
            "id": 702049,
            "name": "提升技能效果",
            "description": "为己方攻击最高武将回复其30%最大生命的血量（该回复效果，不受任何抑制回血类buff的影响），并增加50%暴击率和50%怒气加伤和50%伤害，且额外增加15%魅力增伤，持续4回合（己方每一轮大回合结束后释放）"
          }
        },
        {
          "level": 26,
          "material": {
            "id": 57,
            "quantity": 7600
          },
          "attributes": [
            {
              "id": 55,
              "name": "法防",
              "quantity": 100000
            }
          ],
          "skill": null
        },
        {
          "level": 27,
          "material": {
            "id": 57,
            "quantity": 8200
          },
          "attributes": [
            {
              "id": 54,
              "name": "物防",
              "quantity": 100000
            }
          ],
          "skill": null
        },
        {
          "level": 28,
          "material": {
            "id": 57,
            "quantity": 8800
          },
          "attributes": [
            {
              "id": 195,
              "name": "魅力减伤",
              "quantity": 1200
            }
          ],
          "skill": null
        },
        {
          "level": 29,
          "material": {
            "id": 57,
            "quantity": 9400
          },
          "attributes": [
            {
              "id": 194,
              "name": "魅力增伤",
              "quantity": 1200
            }
          ],
          "skill": null
        },
        {
          "level": 30,
          "material": {
            "id": 57,
            "quantity": 16000
          },
          "attributes": [],
          "skill": {
            "id": 702050,
            "name": "提升技能效果",
            "description": "为己方攻击最高2名武将回复其30%最大生命的血量（该回复效果，不受任何抑制回血类buff的影响），并增加50%暴击率和50%怒气加伤和50%伤害，且额外增加30%魅力增伤，持续5回合（己方每一轮大回合结束后释放）"
          }
        },
        {
          "level": 31,
          "material": {
            "id": 57,
            "quantity": 10700
          },
          "attributes": [
            {
              "id": 51,
              "name": "生命",
              "quantity": 600000
            }
          ],
          "skill": null
        },
        {
          "level": 32,
          "material": {
            "id": 57,
            "quantity": 11400
          },
          "attributes": [
            {
              "id": 100,
              "name": "攻击",
              "quantity": 120000
            }
          ],
          "skill": null
        },
        {
          "level": 33,
          "material": {
            "id": 57,
            "quantity": 12100
          },
          "attributes": [
            {
              "id": 195,
              "name": "魅力减伤",
              "quantity": 1400
            }
          ],
          "skill": null
        },
        {
          "level": 34,
          "material": {
            "id": 57,
            "quantity": 12800
          },
          "attributes": [
            {
              "id": 194,
              "name": "魅力增伤",
              "quantity": 1400
            }
          ],
          "skill": null
        },
        {
          "level": 35,
          "material": {
            "id": 57,
            "quantity": 22000
          },
          "attributes": [],
          "skill": {
            "id": 702632,
            "name": "提升技能效果",
            "description": "为己方攻击最高2名武将回复其30%最大生命的血量（该回复效果，不受任何抑制回血类buff的影响），并增加70%暴击率和70%怒气加伤和70%伤害，且额外增加45%魅力增伤，持续6回合（己方每一轮大回合结束后释放）"
          }
        },
        {
          "level": 36,
          "material": {
            "id": 57,
            "quantity": 15000
          },
          "attributes": [
            {
              "id": 55,
              "name": "法防",
              "quantity": 140000
            }
          ],
          "skill": null
        },
        {
          "level": 37,
          "material": {
            "id": 57,
            "quantity": 16000
          },
          "attributes": [
            {
              "id": 54,
              "name": "物防",
              "quantity": 140000
            }
          ],
          "skill": null
        },
        {
          "level": 38,
          "material": {
            "id": 57,
            "quantity": 17000
          },
          "attributes": [
            {
              "id": 195,
              "name": "魅力减伤",
              "quantity": 1600
            }
          ],
          "skill": null
        },
        {
          "level": 39,
          "material": {
            "id": 57,
            "quantity": 18000
          },
          "attributes": [
            {
              "id": 194,
              "name": "魅力增伤",
              "quantity": 1600
            }
          ],
          "skill": null
        },
        {
          "level": 40,
          "material": {
            "id": 57,
            "quantity": 29000
          },
          "attributes": [],
          "skill": {
            "id": 702693,
            "name": "提升技能效果",
            "description": "为己方攻击最高2名武将回复其30%最大生命的血量（该回复效果，不受任何抑制回血类buff的影响），并增加90%暴击率和90%怒气加伤和90%伤害，且额外增加60%魅力增伤，持续7回合（己方每一轮大回合结束后释放）"
          }
        }
      ],
      "effectLevels": [
        5,
        10,
        15
      ],
      "attributeOrder": [
        {
          "id": 51,
          "name": "生命"
        },
        {
          "id": 11,
          "name": "生命"
        },
        {
          "id": 195,
          "name": "魅力减伤"
        },
        {
          "id": 194,
          "name": "魅力增伤"
        },
        {
          "id": 56,
          "name": "伤害"
        },
        {
          "id": 57,
          "name": "免伤"
        }
      ],
      "lvAdv": {
        "1": 10001,
        "2": 10002,
        "3": 10003,
        "4": 10004,
        "5": 10005,
        "6": 10006,
        "7": 10007,
        "8": 10008,
        "9": 10009,
        "10": 10010,
        "11": 10011,
        "12": 10012,
        "13": 10013,
        "14": 10014,
        "15": 10015,
        "16": 10091,
        "17": 10092,
        "18": 10093,
        "19": 10094,
        "20": 10095,
        "21": 10121,
        "22": 10122,
        "23": 10123,
        "24": 10124,
        "25": 10125,
        "26": 10126,
        "27": 10127,
        "28": 10128,
        "29": 10129,
        "30": 10130,
        "31": 10181,
        "32": 10182,
        "33": 10183,
        "34": 10184,
        "35": 10185,
        "36": 10211,
        "37": 10212,
        "38": 10213,
        "39": 10214,
        "40": 10215
      }
    },
    {
      "id": 200002,
      "name": "张春华",
      "quality": "红",
      "fragmentId": 63102,
      "fragmentIcon": "assets/red-beauty-items/63102.png",
      "activationQuantity": 1,
      "maxStar": 10,
      "maxLevel": 40,
      "starCosts": [
        {
          "star": 1,
          "materials": [
            {
              "id": 63102,
              "quantity": 3
            },
            {
              "id": 60115,
              "quantity": 200
            }
          ]
        },
        {
          "star": 2,
          "materials": [
            {
              "id": 63102,
              "quantity": 6
            },
            {
              "id": 60115,
              "quantity": 400
            }
          ]
        },
        {
          "star": 3,
          "materials": [
            {
              "id": 63102,
              "quantity": 9
            },
            {
              "id": 60115,
              "quantity": 600
            }
          ]
        },
        {
          "star": 4,
          "materials": [
            {
              "id": 63102,
              "quantity": 12
            },
            {
              "id": 60115,
              "quantity": 800
            }
          ]
        },
        {
          "star": 5,
          "materials": [
            {
              "id": 63102,
              "quantity": 15
            },
            {
              "id": 60115,
              "quantity": 1000
            }
          ]
        },
        {
          "star": 6,
          "materials": [
            {
              "id": 63102,
              "quantity": 18
            },
            {
              "id": 60115,
              "quantity": 1500
            }
          ]
        },
        {
          "star": 7,
          "materials": [
            {
              "id": 63102,
              "quantity": 21
            },
            {
              "id": 60115,
              "quantity": 2000
            }
          ]
        },
        {
          "star": 8,
          "materials": [
            {
              "id": 63102,
              "quantity": 25
            },
            {
              "id": 60115,
              "quantity": 3000
            }
          ]
        },
        {
          "star": 9,
          "materials": [
            {
              "id": 63102,
              "quantity": 30
            },
            {
              "id": 60115,
              "quantity": 4000
            }
          ]
        },
        {
          "star": 10,
          "materials": [
            {
              "id": 63102,
              "quantity": 40
            },
            {
              "id": 60115,
              "quantity": 5000
            }
          ]
        }
      ],
      "starAttributes": [
        {"star": 1, "attributes": [{"id": 19, "name": "攻击比", "quantity": 2000}]},
        {"star": 2, "attributes": [{"id": 194, "name": "魅力增伤", "quantity": 500}, {"id": 100, "name": "攻击", "quantity": 50000}]},
        {"star": 3, "attributes": [{"id": 194, "name": "魅力增伤", "quantity": 500}, {"id": 195, "name": "魅力减伤", "quantity": 500}]},
        {"star": 4, "attributes": [{"id": 194, "name": "魅力增伤", "quantity": 1000}, {"id": 195, "name": "魅力减伤", "quantity": 500}]},
        {"star": 5, "attributes": [{"id": 194, "name": "魅力增伤", "quantity": 1500}, {"id": 195, "name": "魅力减伤", "quantity": 500}]},
        {"star": 6, "attributes": [{"id": 195, "name": "魅力减伤", "quantity": 2000}, {"id": 56, "name": "伤害", "quantity": 2000}]},
        {"star": 7, "attributes": [{"id": 194, "name": "魅力增伤", "quantity": 2500}, {"id": 56, "name": "伤害", "quantity": 2000}]},
        {"star": 8, "attributes": [{"id": 195, "name": "魅力减伤", "quantity": 3000}, {"id": 56, "name": "伤害", "quantity": 3000}]},
        {"star": 9, "attributes": [{"id": 195, "name": "魅力减伤", "quantity": 3500}, {"id": 57, "name": "免伤", "quantity": 3500}]},
        {"star": 10, "attributes": [{"id": 194, "name": "魅力增伤", "quantity": 4000}, {"id": 56, "name": "伤害", "quantity": 4000}]}
      ],
      "upgradeCosts": [
        {
          "level": 1,
          "material": {
            "id": 57,
            "quantity": 100
          },
          "attributes": [
            {
              "id": 55,
              "name": "法防",
              "quantity": 10000
            }
          ],
          "skill": null
        },
        {
          "level": 2,
          "material": {
            "id": 57,
            "quantity": 200
          },
          "attributes": [
            {
              "id": 54,
              "name": "物防",
              "quantity": 10000
            }
          ],
          "skill": null
        },
        {
          "level": 3,
          "material": {
            "id": 57,
            "quantity": 300
          },
          "attributes": [
            {
              "id": 51,
              "name": "生命",
              "quantity": 50000
            }
          ],
          "skill": null
        },
        {
          "level": 4,
          "material": {
            "id": 57,
            "quantity": 400
          },
          "attributes": [
            {
              "id": 100,
              "name": "攻击",
              "quantity": 10000
            }
          ],
          "skill": null
        },
        {
          "level": 5,
          "material": {
            "id": 57,
            "quantity": 1000
          },
          "attributes": [],
          "skill": {
            "id": 701735,
            "name": "激活红颜技能",
            "description": "30%概率对敌方随机1个武将附加碎骨状态（碎骨状态降低50%怒气减伤），持续1回合（在装备该红颜的武将每回合行动前释放）"
          }
        },
        {
          "level": 6,
          "material": {
            "id": 57,
            "quantity": 700
          },
          "attributes": [
            {
              "id": 55,
              "name": "法防",
              "quantity": 25000
            }
          ],
          "skill": null
        },
        {
          "level": 7,
          "material": {
            "id": 57,
            "quantity": 900
          },
          "attributes": [
            {
              "id": 54,
              "name": "物防",
              "quantity": 25000
            }
          ],
          "skill": null
        },
        {
          "level": 8,
          "material": {
            "id": 57,
            "quantity": 1100
          },
          "attributes": [
            {
              "id": 195,
              "name": "魅力减伤",
              "quantity": 400
            }
          ],
          "skill": null
        },
        {
          "level": 9,
          "material": {
            "id": 57,
            "quantity": 1300
          },
          "attributes": [
            {
              "id": 194,
              "name": "魅力增伤",
              "quantity": 400
            }
          ],
          "skill": null
        },
        {
          "level": 10,
          "material": {
            "id": 57,
            "quantity": 2000
          },
          "attributes": [],
          "skill": {
            "id": 701736,
            "name": "提升技能效果",
            "description": "降低敌方攻击最高武将20%伤害，并有50%概率附加碎骨状态（碎骨状态降低50%怒气减伤），均持续1回合（在装备该红颜的武将每回合行动前释放）"
          }
        },
        {
          "level": 11,
          "material": {
            "id": 57,
            "quantity": 1800
          },
          "attributes": [
            {
              "id": 51,
              "name": "生命",
              "quantity": 200000
            }
          ],
          "skill": null
        },
        {
          "level": 12,
          "material": {
            "id": 57,
            "quantity": 2100
          },
          "attributes": [
            {
              "id": 100,
              "name": "攻击",
              "quantity": 40000
            }
          ],
          "skill": null
        },
        {
          "level": 13,
          "material": {
            "id": 57,
            "quantity": 2400
          },
          "attributes": [
            {
              "id": 195,
              "name": "魅力减伤",
              "quantity": 600
            }
          ],
          "skill": null
        },
        {
          "level": 14,
          "material": {
            "id": 57,
            "quantity": 2700
          },
          "attributes": [
            {
              "id": 194,
              "name": "魅力增伤",
              "quantity": 600
            }
          ],
          "skill": null
        },
        {
          "level": 15,
          "material": {
            "id": 57,
            "quantity": 4000
          },
          "attributes": [],
          "skill": {
            "id": 701737,
            "name": "提升技能并激活新战斗表现",
            "description": "对敌方攻击最高武将造成目标10%最大生命的伤害，并降低其20%伤害和20%免伤，并有80%概率附加碎骨状态（碎骨状态降低50%怒气减伤），均持续2回合（在装备该红颜的武将每回合行动前释放）"
          }
        },
        {
          "level": 16,
          "material": {
            "id": 57,
            "quantity": 3400
          },
          "attributes": [
            {
              "id": 55,
              "name": "法防",
              "quantity": 60000
            }
          ],
          "skill": null
        },
        {
          "level": 17,
          "material": {
            "id": 57,
            "quantity": 3800
          },
          "attributes": [
            {
              "id": 54,
              "name": "物防",
              "quantity": 60000
            }
          ],
          "skill": null
        },
        {
          "level": 18,
          "material": {
            "id": 57,
            "quantity": 4200
          },
          "attributes": [
            {
              "id": 195,
              "name": "魅力减伤",
              "quantity": 800
            }
          ],
          "skill": null
        },
        {
          "level": 19,
          "material": {
            "id": 57,
            "quantity": 4600
          },
          "attributes": [
            {
              "id": 194,
              "name": "魅力增伤",
              "quantity": 800
            }
          ],
          "skill": null
        },
        {
          "level": 20,
          "material": {
            "id": 57,
            "quantity": 7000
          },
          "attributes": [],
          "skill": {
            "id": 701878,
            "name": "提升技能效果",
            "description": "对敌方攻击最高2名武将造成目标10%最大生命的伤害，并降低其20%伤害和20%免伤和50%抗暴率，并有100%概率附加碎骨状态（碎骨状态降低50%怒气减伤），均持续3回合（在装备该红颜的武将每回合行动前释放）"
          }
        },
        {
          "level": 21,
          "material": {
            "id": 57,
            "quantity": 5500
          },
          "attributes": [
            {
              "id": 51,
              "name": "生命",
              "quantity": 400000
            }
          ],
          "skill": null
        },
        {
          "level": 22,
          "material": {
            "id": 57,
            "quantity": 6000
          },
          "attributes": [
            {
              "id": 100,
              "name": "攻击",
              "quantity": 80000
            }
          ],
          "skill": null
        },
        {
          "level": 23,
          "material": {
            "id": 57,
            "quantity": 6500
          },
          "attributes": [
            {
              "id": 195,
              "name": "魅力减伤",
              "quantity": 1000
            }
          ],
          "skill": null
        },
        {
          "level": 24,
          "material": {
            "id": 57,
            "quantity": 7000
          },
          "attributes": [
            {
              "id": 194,
              "name": "魅力增伤",
              "quantity": 1000
            }
          ],
          "skill": null
        },
        {
          "level": 25,
          "material": {
            "id": 57,
            "quantity": 11000
          },
          "attributes": [],
          "skill": {
            "id": 702051,
            "name": "提升技能效果",
            "description": "对敌方攻击最高2名武将造成目标12%最大生命的伤害，并降低其20%伤害和20%免伤和50%抗暴率，且额外降低20%魅力增伤，并有100%概率附加碎骨状态（碎骨状态降低50%怒气减伤），均持续4回合（在装备该红颜的武将每回合行动前释放）"
          }
        },
        {
          "level": 26,
          "material": {
            "id": 57,
            "quantity": 7600
          },
          "attributes": [
            {
              "id": 55,
              "name": "法防",
              "quantity": 100000
            }
          ],
          "skill": null
        },
        {
          "level": 27,
          "material": {
            "id": 57,
            "quantity": 8200
          },
          "attributes": [
            {
              "id": 54,
              "name": "物防",
              "quantity": 100000
            }
          ],
          "skill": null
        },
        {
          "level": 28,
          "material": {
            "id": 57,
            "quantity": 8800
          },
          "attributes": [
            {
              "id": 195,
              "name": "魅力减伤",
              "quantity": 1200
            }
          ],
          "skill": null
        },
        {
          "level": 29,
          "material": {
            "id": 57,
            "quantity": 9400
          },
          "attributes": [
            {
              "id": 194,
              "name": "魅力增伤",
              "quantity": 1200
            }
          ],
          "skill": null
        },
        {
          "level": 30,
          "material": {
            "id": 57,
            "quantity": 16000
          },
          "attributes": [],
          "skill": {
            "id": 702052,
            "name": "提升技能效果",
            "description": "对敌方攻击最高2名武将造成目标15%最大生命的伤害，并降低其20%伤害和20%免伤和50%抗暴率，且额外降低20%魅力增伤和魅力减伤，并有100%概率附加碎骨状态（碎骨状态降低50%怒气减伤），均持续5回合（在装备该红颜的武将每回合行动前释放）"
          }
        },
        {
          "level": 31,
          "material": {
            "id": 57,
            "quantity": 10700
          },
          "attributes": [
            {
              "id": 51,
              "name": "生命",
              "quantity": 600000
            }
          ],
          "skill": null
        },
        {
          "level": 32,
          "material": {
            "id": 57,
            "quantity": 11400
          },
          "attributes": [
            {
              "id": 100,
              "name": "攻击",
              "quantity": 120000
            }
          ],
          "skill": null
        },
        {
          "level": 33,
          "material": {
            "id": 57,
            "quantity": 12100
          },
          "attributes": [
            {
              "id": 195,
              "name": "魅力减伤",
              "quantity": 1400
            }
          ],
          "skill": null
        },
        {
          "level": 34,
          "material": {
            "id": 57,
            "quantity": 12800
          },
          "attributes": [
            {
              "id": 194,
              "name": "魅力增伤",
              "quantity": 1400
            }
          ],
          "skill": null
        },
        {
          "level": 35,
          "material": {
            "id": 57,
            "quantity": 22000
          },
          "attributes": [],
          "skill": {
            "id": 702633,
            "name": "提升技能效果",
            "description": "对敌方攻击最高2名武将造成目标18%最大生命的伤害，并降低其35%伤害和35%免伤和70%抗暴率，且额外降低30%魅力增伤和魅力减伤，并有100%概率附加碎骨状态（碎骨状态降低50%怒气减伤），均持续6回合（在装备该红颜的武将每回合行动前释放）"
          }
        },
        {
          "level": 36,
          "material": {
            "id": 57,
            "quantity": 15000
          },
          "attributes": [
            {
              "id": 55,
              "name": "法防",
              "quantity": 140000
            }
          ],
          "skill": null
        },
        {
          "level": 37,
          "material": {
            "id": 57,
            "quantity": 16000
          },
          "attributes": [
            {
              "id": 54,
              "name": "物防",
              "quantity": 140000
            }
          ],
          "skill": null
        },
        {
          "level": 38,
          "material": {
            "id": 57,
            "quantity": 17000
          },
          "attributes": [
            {
              "id": 195,
              "name": "魅力减伤",
              "quantity": 1600
            }
          ],
          "skill": null
        },
        {
          "level": 39,
          "material": {
            "id": 57,
            "quantity": 18000
          },
          "attributes": [
            {
              "id": 194,
              "name": "魅力增伤",
              "quantity": 1600
            }
          ],
          "skill": null
        },
        {
          "level": 40,
          "material": {
            "id": 57,
            "quantity": 29000
          },
          "attributes": [],
          "skill": {
            "id": 702694,
            "name": "提升技能效果",
            "description": "对敌方攻击最高2名武将造成目标21%最大生命的伤害，并降低其50%伤害和50%免伤和90%抗暴率，且额外降低40%魅力增伤和魅力减伤，并有100%概率附加碎骨状态（碎骨状态降低50%怒气减伤），均持续7回合（在装备该红颜的武将每回合行动前释放）"
          }
        }
      ],
      "effectLevels": [
        5,
        10,
        15
      ],
      "attributeOrder": [
        {
          "id": 100,
          "name": "攻击"
        },
        {
          "id": 19,
          "name": "攻击"
        },
        {
          "id": 194,
          "name": "魅力增伤"
        },
        {
          "id": 195,
          "name": "魅力减伤"
        },
        {
          "id": 56,
          "name": "伤害"
        },
        {
          "id": 57,
          "name": "免伤"
        }
      ],
      "lvAdv": {
        "1": 10016,
        "2": 10017,
        "3": 10018,
        "4": 10019,
        "5": 10020,
        "6": 10021,
        "7": 10022,
        "8": 10023,
        "9": 10024,
        "10": 10025,
        "11": 10026,
        "12": 10027,
        "13": 10028,
        "14": 10029,
        "15": 10030,
        "16": 10096,
        "17": 10097,
        "18": 10098,
        "19": 10099,
        "20": 10100,
        "21": 10131,
        "22": 10132,
        "23": 10133,
        "24": 10134,
        "25": 10135,
        "26": 10136,
        "27": 10137,
        "28": 10138,
        "29": 10139,
        "30": 10140,
        "31": 10186,
        "32": 10187,
        "33": 10188,
        "34": 10189,
        "35": 10190,
        "36": 10216,
        "37": 10217,
        "38": 10218,
        "39": 10219,
        "40": 10220
      }
    },
    {
      "id": 200003,
      "name": "马云禄",
      "quality": "红",
      "fragmentId": 63103,
      "fragmentIcon": "assets/red-beauty-items/63103.png",
      "activationQuantity": 1,
      "maxStar": 10,
      "maxLevel": 40,
      "starCosts": [
        {
          "star": 1,
          "materials": [
            {
              "id": 63103,
              "quantity": 3
            },
            {
              "id": 60115,
              "quantity": 200
            }
          ]
        },
        {
          "star": 2,
          "materials": [
            {
              "id": 63103,
              "quantity": 6
            },
            {
              "id": 60115,
              "quantity": 400
            }
          ]
        },
        {
          "star": 3,
          "materials": [
            {
              "id": 63103,
              "quantity": 9
            },
            {
              "id": 60115,
              "quantity": 600
            }
          ]
        },
        {
          "star": 4,
          "materials": [
            {
              "id": 63103,
              "quantity": 12
            },
            {
              "id": 60115,
              "quantity": 800
            }
          ]
        },
        {
          "star": 5,
          "materials": [
            {
              "id": 63103,
              "quantity": 15
            },
            {
              "id": 60115,
              "quantity": 1000
            }
          ]
        },
        {
          "star": 6,
          "materials": [
            {
              "id": 63103,
              "quantity": 18
            },
            {
              "id": 60115,
              "quantity": 1500
            }
          ]
        },
        {
          "star": 7,
          "materials": [
            {
              "id": 63103,
              "quantity": 21
            },
            {
              "id": 60115,
              "quantity": 2000
            }
          ]
        },
        {
          "star": 8,
          "materials": [
            {
              "id": 63103,
              "quantity": 25
            },
            {
              "id": 60115,
              "quantity": 3000
            }
          ]
        },
        {
          "star": 9,
          "materials": [
            {
              "id": 63103,
              "quantity": 30
            },
            {
              "id": 60115,
              "quantity": 4000
            }
          ]
        },
        {
          "star": 10,
          "materials": [
            {
              "id": 63103,
              "quantity": 40
            },
            {
              "id": 60115,
              "quantity": 5000
            }
          ]
        }
      ],
      "starAttributes": [
        {"star": 1, "attributes": [{"id": 19, "name": "攻击比", "quantity": 2000}]},
        {"star": 2, "attributes": [{"id": 194, "name": "魅力增伤", "quantity": 500}, {"id": 100, "name": "攻击", "quantity": 50000}]},
        {"star": 3, "attributes": [{"id": 194, "name": "魅力增伤", "quantity": 1000}]},
        {"star": 4, "attributes": [{"id": 194, "name": "魅力增伤", "quantity": 1500}]},
        {"star": 5, "attributes": [{"id": 194, "name": "魅力增伤", "quantity": 2000}]},
        {"star": 6, "attributes": [{"id": 194, "name": "魅力增伤", "quantity": 2000}, {"id": 56, "name": "伤害", "quantity": 2000}]},
        {"star": 7, "attributes": [{"id": 194, "name": "魅力增伤", "quantity": 2500}, {"id": 56, "name": "伤害", "quantity": 2500}]},
        {"star": 8, "attributes": [{"id": 194, "name": "魅力增伤", "quantity": 3000}, {"id": 56, "name": "伤害", "quantity": 3000}]},
        {"star": 9, "attributes": [{"id": 195, "name": "魅力减伤", "quantity": 3500}, {"id": 56, "name": "伤害", "quantity": 3500}]},
        {"star": 10, "attributes": [{"id": 195, "name": "魅力减伤", "quantity": 4000}, {"id": 56, "name": "伤害", "quantity": 4000}]}
      ],
      "upgradeCosts": [
        {
          "level": 1,
          "material": {
            "id": 57,
            "quantity": 100
          },
          "attributes": [
            {
              "id": 55,
              "name": "法防",
              "quantity": 10000
            }
          ],
          "skill": null
        },
        {
          "level": 2,
          "material": {
            "id": 57,
            "quantity": 200
          },
          "attributes": [
            {
              "id": 54,
              "name": "物防",
              "quantity": 10000
            }
          ],
          "skill": null
        },
        {
          "level": 3,
          "material": {
            "id": 57,
            "quantity": 300
          },
          "attributes": [
            {
              "id": 51,
              "name": "生命",
              "quantity": 50000
            }
          ],
          "skill": null
        },
        {
          "level": 4,
          "material": {
            "id": 57,
            "quantity": 400
          },
          "attributes": [
            {
              "id": 100,
              "name": "攻击",
              "quantity": 10000
            }
          ],
          "skill": null
        },
        {
          "level": 5,
          "material": {
            "id": 57,
            "quantity": 1000
          },
          "attributes": [],
          "skill": {
            "id": 701769,
            "name": "激活红颜技能",
            "description": "对敌方随机1个武将造成目标10%最大生命的伤害（己方每一轮大回合前释放）"
          }
        },
        {
          "level": 6,
          "material": {
            "id": 57,
            "quantity": 700
          },
          "attributes": [
            {
              "id": 55,
              "name": "法防",
              "quantity": 25000
            }
          ],
          "skill": null
        },
        {
          "level": 7,
          "material": {
            "id": 57,
            "quantity": 900
          },
          "attributes": [
            {
              "id": 54,
              "name": "物防",
              "quantity": 25000
            }
          ],
          "skill": null
        },
        {
          "level": 8,
          "material": {
            "id": 57,
            "quantity": 1100
          },
          "attributes": [
            {
              "id": 195,
              "name": "魅力减伤",
              "quantity": 400
            }
          ],
          "skill": null
        },
        {
          "level": 9,
          "material": {
            "id": 57,
            "quantity": 1300
          },
          "attributes": [
            {
              "id": 194,
              "name": "魅力增伤",
              "quantity": 400
            }
          ],
          "skill": null
        },
        {
          "level": 10,
          "material": {
            "id": 57,
            "quantity": 2000
          },
          "attributes": [],
          "skill": {
            "id": 701770,
            "name": "提升技能效果",
            "description": "对敌方随机1个武将造成目标15%最大生命的伤害（己方每一轮大回合前释放）"
          }
        },
        {
          "level": 11,
          "material": {
            "id": 57,
            "quantity": 1800
          },
          "attributes": [
            {
              "id": 51,
              "name": "生命",
              "quantity": 200000
            }
          ],
          "skill": null
        },
        {
          "level": 12,
          "material": {
            "id": 57,
            "quantity": 2100
          },
          "attributes": [
            {
              "id": 100,
              "name": "攻击",
              "quantity": 40000
            }
          ],
          "skill": null
        },
        {
          "level": 13,
          "material": {
            "id": 57,
            "quantity": 2400
          },
          "attributes": [
            {
              "id": 195,
              "name": "魅力减伤",
              "quantity": 600
            }
          ],
          "skill": null
        },
        {
          "level": 14,
          "material": {
            "id": 57,
            "quantity": 2700
          },
          "attributes": [
            {
              "id": 194,
              "name": "魅力增伤",
              "quantity": 600
            }
          ],
          "skill": null
        },
        {
          "level": 15,
          "material": {
            "id": 57,
            "quantity": 4000
          },
          "attributes": [],
          "skill": {
            "id": 701771,
            "name": "提升技能并激活新战斗表现",
            "description": "对敌方随机1个武将造成目标20%最大生命的伤害（己方每一轮大回合前释放）"
          }
        },
        {
          "level": 16,
          "material": {
            "id": 57,
            "quantity": 3400
          },
          "attributes": [
            {
              "id": 55,
              "name": "法防",
              "quantity": 60000
            }
          ],
          "skill": null
        },
        {
          "level": 17,
          "material": {
            "id": 57,
            "quantity": 3800
          },
          "attributes": [
            {
              "id": 54,
              "name": "物防",
              "quantity": 60000
            }
          ],
          "skill": null
        },
        {
          "level": 18,
          "material": {
            "id": 57,
            "quantity": 4200
          },
          "attributes": [
            {
              "id": 195,
              "name": "魅力减伤",
              "quantity": 800
            }
          ],
          "skill": null
        },
        {
          "level": 19,
          "material": {
            "id": 57,
            "quantity": 4600
          },
          "attributes": [
            {
              "id": 194,
              "name": "魅力增伤",
              "quantity": 800
            }
          ],
          "skill": null
        },
        {
          "level": 20,
          "material": {
            "id": 57,
            "quantity": 7000
          },
          "attributes": [],
          "skill": {
            "id": 701879,
            "name": "提升技能效果",
            "description": "对敌方随机1个武将造成目标25%最大生命的伤害（己方每一轮大回合前释放）"
          }
        },
        {
          "level": 21,
          "material": {
            "id": 57,
            "quantity": 5500
          },
          "attributes": [
            {
              "id": 51,
              "name": "生命",
              "quantity": 400000
            }
          ],
          "skill": null
        },
        {
          "level": 22,
          "material": {
            "id": 57,
            "quantity": 6000
          },
          "attributes": [
            {
              "id": 100,
              "name": "攻击",
              "quantity": 80000
            }
          ],
          "skill": null
        },
        {
          "level": 23,
          "material": {
            "id": 57,
            "quantity": 6500
          },
          "attributes": [
            {
              "id": 195,
              "name": "魅力减伤",
              "quantity": 1000
            }
          ],
          "skill": null
        },
        {
          "level": 24,
          "material": {
            "id": 57,
            "quantity": 7000
          },
          "attributes": [
            {
              "id": 194,
              "name": "魅力增伤",
              "quantity": 1000
            }
          ],
          "skill": null
        },
        {
          "level": 25,
          "material": {
            "id": 57,
            "quantity": 11000
          },
          "attributes": [],
          "skill": {
            "id": 702053,
            "name": "提升技能效果",
            "description": "对敌方随机1个武将造成目标30%最大生命的伤害（己方每一轮大回合前释放）"
          }
        },
        {
          "level": 26,
          "material": {
            "id": 57,
            "quantity": 7600
          },
          "attributes": [
            {
              "id": 55,
              "name": "法防",
              "quantity": 100000
            }
          ],
          "skill": null
        },
        {
          "level": 27,
          "material": {
            "id": 57,
            "quantity": 8200
          },
          "attributes": [
            {
              "id": 54,
              "name": "物防",
              "quantity": 100000
            }
          ],
          "skill": null
        },
        {
          "level": 28,
          "material": {
            "id": 57,
            "quantity": 8800
          },
          "attributes": [
            {
              "id": 195,
              "name": "魅力减伤",
              "quantity": 1200
            }
          ],
          "skill": null
        },
        {
          "level": 29,
          "material": {
            "id": 57,
            "quantity": 9400
          },
          "attributes": [
            {
              "id": 194,
              "name": "魅力增伤",
              "quantity": 1200
            }
          ],
          "skill": null
        },
        {
          "level": 30,
          "material": {
            "id": 57,
            "quantity": 16000
          },
          "attributes": [],
          "skill": {
            "id": 702054,
            "name": "提升技能效果",
            "description": "对敌方随机2个武将造成目标30%最大生命的伤害（己方每一轮大回合前释放）"
          }
        },
        {
          "level": 31,
          "material": {
            "id": 57,
            "quantity": 10700
          },
          "attributes": [
            {
              "id": 51,
              "name": "生命",
              "quantity": 600000
            }
          ],
          "skill": null
        },
        {
          "level": 32,
          "material": {
            "id": 57,
            "quantity": 11400
          },
          "attributes": [
            {
              "id": 100,
              "name": "攻击",
              "quantity": 120000
            }
          ],
          "skill": null
        },
        {
          "level": 33,
          "material": {
            "id": 57,
            "quantity": 12100
          },
          "attributes": [
            {
              "id": 195,
              "name": "魅力减伤",
              "quantity": 1400
            }
          ],
          "skill": null
        },
        {
          "level": 34,
          "material": {
            "id": 57,
            "quantity": 12800
          },
          "attributes": [
            {
              "id": 194,
              "name": "魅力增伤",
              "quantity": 1400
            }
          ],
          "skill": null
        },
        {
          "level": 35,
          "material": {
            "id": 57,
            "quantity": 22000
          },
          "attributes": [],
          "skill": {
            "id": 702634,
            "name": "提升技能效果",
            "description": "对敌方随机3个武将造成目标30%最大生命的伤害（己方每一轮大回合前释放）"
          }
        },
        {
          "level": 36,
          "material": {
            "id": 57,
            "quantity": 15000
          },
          "attributes": [
            {
              "id": 55,
              "name": "法防",
              "quantity": 140000
            }
          ],
          "skill": null
        },
        {
          "level": 37,
          "material": {
            "id": 57,
            "quantity": 16000
          },
          "attributes": [
            {
              "id": 54,
              "name": "物防",
              "quantity": 140000
            }
          ],
          "skill": null
        },
        {
          "level": 38,
          "material": {
            "id": 57,
            "quantity": 17000
          },
          "attributes": [
            {
              "id": 195,
              "name": "魅力减伤",
              "quantity": 1600
            }
          ],
          "skill": null
        },
        {
          "level": 39,
          "material": {
            "id": 57,
            "quantity": 18000
          },
          "attributes": [
            {
              "id": 194,
              "name": "魅力增伤",
              "quantity": 1600
            }
          ],
          "skill": null
        },
        {
          "level": 40,
          "material": {
            "id": 57,
            "quantity": 29000
          },
          "attributes": [],
          "skill": {
            "id": 702695,
            "name": "提升技能效果",
            "description": "对敌方随机3个武将造成目标35%最大生命的伤害（己方每一轮大回合前释放）"
          }
        }
      ],
      "effectLevels": [
        5,
        10,
        15
      ],
      "attributeOrder": [
        {
          "id": 100,
          "name": "攻击"
        },
        {
          "id": 19,
          "name": "攻击"
        },
        {
          "id": 194,
          "name": "魅力增伤"
        },
        {
          "id": 56,
          "name": "伤害"
        }
      ],
      "lvAdv": {
        "1": 10031,
        "2": 10032,
        "3": 10033,
        "4": 10034,
        "5": 10035,
        "6": 10036,
        "7": 10037,
        "8": 10038,
        "9": 10039,
        "10": 10040,
        "11": 10041,
        "12": 10042,
        "13": 10043,
        "14": 10044,
        "15": 10045,
        "16": 10101,
        "17": 10102,
        "18": 10103,
        "19": 10104,
        "20": 10105,
        "21": 10141,
        "22": 10142,
        "23": 10143,
        "24": 10144,
        "25": 10145,
        "26": 10146,
        "27": 10147,
        "28": 10148,
        "29": 10149,
        "30": 10150,
        "31": 10191,
        "32": 10192,
        "33": 10193,
        "34": 10194,
        "35": 10195,
        "36": 10221,
        "37": 10222,
        "38": 10223,
        "39": 10224,
        "40": 10225
      }
    },
    {
      "id": 200004,
      "name": "诸葛果",
      "quality": "红",
      "fragmentId": 63104,
      "fragmentIcon": "assets/red-beauty-items/63104.png",
      "activationQuantity": 1,
      "maxStar": 10,
      "maxLevel": 40,
      "starCosts": [
        {
          "star": 1,
          "materials": [
            {
              "id": 63104,
              "quantity": 3
            },
            {
              "id": 60115,
              "quantity": 200
            }
          ]
        },
        {
          "star": 2,
          "materials": [
            {
              "id": 63104,
              "quantity": 6
            },
            {
              "id": 60115,
              "quantity": 400
            }
          ]
        },
        {
          "star": 3,
          "materials": [
            {
              "id": 63104,
              "quantity": 9
            },
            {
              "id": 60115,
              "quantity": 600
            }
          ]
        },
        {
          "star": 4,
          "materials": [
            {
              "id": 63104,
              "quantity": 12
            },
            {
              "id": 60115,
              "quantity": 800
            }
          ]
        },
        {
          "star": 5,
          "materials": [
            {
              "id": 63104,
              "quantity": 15
            },
            {
              "id": 60115,
              "quantity": 1000
            }
          ]
        },
        {
          "star": 6,
          "materials": [
            {
              "id": 63104,
              "quantity": 18
            },
            {
              "id": 60115,
              "quantity": 1500
            }
          ]
        },
        {
          "star": 7,
          "materials": [
            {
              "id": 63104,
              "quantity": 21
            },
            {
              "id": 60115,
              "quantity": 2000
            }
          ]
        },
        {
          "star": 8,
          "materials": [
            {
              "id": 63104,
              "quantity": 25
            },
            {
              "id": 60115,
              "quantity": 3000
            }
          ]
        },
        {
          "star": 9,
          "materials": [
            {
              "id": 63104,
              "quantity": 30
            },
            {
              "id": 60115,
              "quantity": 4000
            }
          ]
        },
        {
          "star": 10,
          "materials": [
            {
              "id": 63104,
              "quantity": 40
            },
            {
              "id": 60115,
              "quantity": 5000
            }
          ]
        }
      ],
      "starAttributes": [
        {"star": 1, "attributes": [{"id": 14, "name": "物防比", "quantity": 2000}, {"id": 15, "name": "法防比", "quantity": 2000}]},
        {"star": 2, "attributes": [{"id": 195, "name": "魅力减伤", "quantity": 500}, {"id": 51, "name": "生命", "quantity": 250000}]},
        {"star": 3, "attributes": [{"id": 195, "name": "魅力减伤", "quantity": 1000}]},
        {"star": 4, "attributes": [{"id": 195, "name": "魅力减伤", "quantity": 1500}]},
        {"star": 5, "attributes": [{"id": 195, "name": "魅力减伤", "quantity": 2000}]},
        {"star": 6, "attributes": [{"id": 195, "name": "魅力减伤", "quantity": 2000}, {"id": 57, "name": "免伤", "quantity": 2000}]},
        {"star": 7, "attributes": [{"id": 195, "name": "魅力减伤", "quantity": 2500}, {"id": 57, "name": "免伤", "quantity": 2500}]},
        {"star": 8, "attributes": [{"id": 195, "name": "魅力减伤", "quantity": 3000}, {"id": 57, "name": "免伤", "quantity": 3000}]},
        {"star": 9, "attributes": [{"id": 194, "name": "魅力增伤", "quantity": 3500}, {"id": 57, "name": "免伤", "quantity": 3500}]},
        {"star": 10, "attributes": [{"id": 194, "name": "魅力增伤", "quantity": 4000}, {"id": 57, "name": "免伤", "quantity": 4000}]}
      ],
      "upgradeCosts": [
        {
          "level": 1,
          "material": {
            "id": 57,
            "quantity": 100
          },
          "attributes": [
            {
              "id": 55,
              "name": "法防",
              "quantity": 10000
            }
          ],
          "skill": null
        },
        {
          "level": 2,
          "material": {
            "id": 57,
            "quantity": 200
          },
          "attributes": [
            {
              "id": 54,
              "name": "物防",
              "quantity": 10000
            }
          ],
          "skill": null
        },
        {
          "level": 3,
          "material": {
            "id": 57,
            "quantity": 300
          },
          "attributes": [
            {
              "id": 51,
              "name": "生命",
              "quantity": 50000
            }
          ],
          "skill": null
        },
        {
          "level": 4,
          "material": {
            "id": 57,
            "quantity": 400
          },
          "attributes": [
            {
              "id": 100,
              "name": "攻击",
              "quantity": 10000
            }
          ],
          "skill": null
        },
        {
          "level": 5,
          "material": {
            "id": 57,
            "quantity": 1000
          },
          "attributes": [],
          "skill": {
            "id": 701772,
            "name": "激活红颜技能",
            "description": "为己方攻击最高的武将回复15%最大生命的血量（攻击最高的武将生命值达到50%以下触发，每回合仅触发1次）"
          }
        },
        {
          "level": 6,
          "material": {
            "id": 57,
            "quantity": 700
          },
          "attributes": [
            {
              "id": 55,
              "name": "法防",
              "quantity": 25000
            }
          ],
          "skill": null
        },
        {
          "level": 7,
          "material": {
            "id": 57,
            "quantity": 900
          },
          "attributes": [
            {
              "id": 54,
              "name": "物防",
              "quantity": 25000
            }
          ],
          "skill": null
        },
        {
          "level": 8,
          "material": {
            "id": 57,
            "quantity": 1100
          },
          "attributes": [
            {
              "id": 195,
              "name": "魅力减伤",
              "quantity": 400
            }
          ],
          "skill": null
        },
        {
          "level": 9,
          "material": {
            "id": 57,
            "quantity": 1300
          },
          "attributes": [
            {
              "id": 194,
              "name": "魅力增伤",
              "quantity": 400
            }
          ],
          "skill": null
        },
        {
          "level": 10,
          "material": {
            "id": 57,
            "quantity": 2000
          },
          "attributes": [],
          "skill": {
            "id": 701773,
            "name": "提升技能效果",
            "description": "为己方攻击最高的武将回复25%最大生命的血量（攻击最高的武将生命值达到55%以下触发，每回合仅触发1次）"
          }
        },
        {
          "level": 11,
          "material": {
            "id": 57,
            "quantity": 1800
          },
          "attributes": [
            {
              "id": 51,
              "name": "生命",
              "quantity": 200000
            }
          ],
          "skill": null
        },
        {
          "level": 12,
          "material": {
            "id": 57,
            "quantity": 2100
          },
          "attributes": [
            {
              "id": 100,
              "name": "攻击",
              "quantity": 40000
            }
          ],
          "skill": null
        },
        {
          "level": 13,
          "material": {
            "id": 57,
            "quantity": 2400
          },
          "attributes": [
            {
              "id": 195,
              "name": "魅力减伤",
              "quantity": 600
            }
          ],
          "skill": null
        },
        {
          "level": 14,
          "material": {
            "id": 57,
            "quantity": 2700
          },
          "attributes": [
            {
              "id": 194,
              "name": "魅力增伤",
              "quantity": 600
            }
          ],
          "skill": null
        },
        {
          "level": 15,
          "material": {
            "id": 57,
            "quantity": 4000
          },
          "attributes": [],
          "skill": {
            "id": 701774,
            "name": "提升技能并激活新战斗表现",
            "description": "为己方攻击最高的武将回复35%最大生命的血量（该回复效果，不受任何抑制回血类buff的影响）（攻击最高的武将生命值达到60%以下触发，每回合仅触发1次）"
          }
        },
        {
          "level": 16,
          "material": {
            "id": 57,
            "quantity": 3400
          },
          "attributes": [
            {
              "id": 55,
              "name": "法防",
              "quantity": 60000
            }
          ],
          "skill": null
        },
        {
          "level": 17,
          "material": {
            "id": 57,
            "quantity": 3800
          },
          "attributes": [
            {
              "id": 54,
              "name": "物防",
              "quantity": 60000
            }
          ],
          "skill": null
        },
        {
          "level": 18,
          "material": {
            "id": 57,
            "quantity": 4200
          },
          "attributes": [
            {
              "id": 195,
              "name": "魅力减伤",
              "quantity": 800
            }
          ],
          "skill": null
        },
        {
          "level": 19,
          "material": {
            "id": 57,
            "quantity": 4600
          },
          "attributes": [
            {
              "id": 194,
              "name": "魅力增伤",
              "quantity": 800
            }
          ],
          "skill": null
        },
        {
          "level": 20,
          "material": {
            "id": 57,
            "quantity": 7000
          },
          "attributes": [],
          "skill": {
            "id": 701880,
            "name": "提升技能效果",
            "description": "为己方攻击最高的武将回复45%最大生命的血量（该回复效果，不受任何抑制回血类buff的影响），并增加30%免伤，持续3回合（攻击最高的武将生命值达到65%以下触发，每回合仅触发1次）"
          }
        },
        {
          "level": 21,
          "material": {
            "id": 57,
            "quantity": 5500
          },
          "attributes": [
            {
              "id": 51,
              "name": "生命",
              "quantity": 400000
            }
          ],
          "skill": null
        },
        {
          "level": 22,
          "material": {
            "id": 57,
            "quantity": 6000
          },
          "attributes": [
            {
              "id": 100,
              "name": "攻击",
              "quantity": 80000
            }
          ],
          "skill": null
        },
        {
          "level": 23,
          "material": {
            "id": 57,
            "quantity": 6500
          },
          "attributes": [
            {
              "id": 195,
              "name": "魅力减伤",
              "quantity": 1000
            }
          ],
          "skill": null
        },
        {
          "level": 24,
          "material": {
            "id": 57,
            "quantity": 7000
          },
          "attributes": [
            {
              "id": 194,
              "name": "魅力增伤",
              "quantity": 1000
            }
          ],
          "skill": null
        },
        {
          "level": 25,
          "material": {
            "id": 57,
            "quantity": 11000
          },
          "attributes": [],
          "skill": {
            "id": 702055,
            "name": "提升技能效果",
            "description": "为己方攻击最高的武将回复50%最大生命的血量（该回复效果，不受任何抑制回血类buff的影响），并增加30%免伤和魅力减伤，持续4回合（攻击最高的武将生命值达到65%以下触发）"
          }
        },
        {
          "level": 26,
          "material": {
            "id": 57,
            "quantity": 7600
          },
          "attributes": [
            {
              "id": 55,
              "name": "法防",
              "quantity": 100000
            }
          ],
          "skill": null
        },
        {
          "level": 27,
          "material": {
            "id": 57,
            "quantity": 8200
          },
          "attributes": [
            {
              "id": 54,
              "name": "物防",
              "quantity": 100000
            }
          ],
          "skill": null
        },
        {
          "level": 28,
          "material": {
            "id": 57,
            "quantity": 8800
          },
          "attributes": [
            {
              "id": 195,
              "name": "魅力减伤",
              "quantity": 1200
            }
          ],
          "skill": null
        },
        {
          "level": 29,
          "material": {
            "id": 57,
            "quantity": 9400
          },
          "attributes": [
            {
              "id": 194,
              "name": "魅力增伤",
              "quantity": 1200
            }
          ],
          "skill": null
        },
        {
          "level": 30,
          "material": {
            "id": 57,
            "quantity": 16000
          },
          "attributes": [],
          "skill": {
            "id": 702056,
            "name": "提升技能效果",
            "description": "为己方攻击最高2名武将回复50%最大生命的血量（该回复效果，不受任何抑制回血类buff的影响），并增加30%免伤和魅力减伤，且额外增加50%怒气减伤，持续5回合（攻击最高的武将生命值达到65%以下触发）"
          }
        },
        {
          "level": 31,
          "material": {
            "id": 57,
            "quantity": 10700
          },
          "attributes": [
            {
              "id": 51,
              "name": "生命",
              "quantity": 600000
            }
          ],
          "skill": null
        },
        {
          "level": 32,
          "material": {
            "id": 57,
            "quantity": 11400
          },
          "attributes": [
            {
              "id": 100,
              "name": "攻击",
              "quantity": 120000
            }
          ],
          "skill": null
        },
        {
          "level": 33,
          "material": {
            "id": 57,
            "quantity": 12100
          },
          "attributes": [
            {
              "id": 195,
              "name": "魅力减伤",
              "quantity": 1400
            }
          ],
          "skill": null
        },
        {
          "level": 34,
          "material": {
            "id": 57,
            "quantity": 12800
          },
          "attributes": [
            {
              "id": 194,
              "name": "魅力增伤",
              "quantity": 1400
            }
          ],
          "skill": null
        },
        {
          "level": 35,
          "material": {
            "id": 57,
            "quantity": 22000
          },
          "attributes": [],
          "skill": {
            "id": 702635,
            "name": "提升技能效果",
            "description": "为己方攻击最高2名武将回复50%最大生命的血量（该回复效果，不受任何抑制回血类buff的影响），并增加45%免伤和魅力减伤，且额外增加70%怒气减伤，持续6回合（攻击最高的武将生命值达到65%以下触发）"
          }
        },
        {
          "level": 36,
          "material": {
            "id": 57,
            "quantity": 15000
          },
          "attributes": [
            {
              "id": 55,
              "name": "法防",
              "quantity": 140000
            }
          ],
          "skill": null
        },
        {
          "level": 37,
          "material": {
            "id": 57,
            "quantity": 16000
          },
          "attributes": [
            {
              "id": 54,
              "name": "物防",
              "quantity": 140000
            }
          ],
          "skill": null
        },
        {
          "level": 38,
          "material": {
            "id": 57,
            "quantity": 17000
          },
          "attributes": [
            {
              "id": 195,
              "name": "魅力减伤",
              "quantity": 1600
            }
          ],
          "skill": null
        },
        {
          "level": 39,
          "material": {
            "id": 57,
            "quantity": 18000
          },
          "attributes": [
            {
              "id": 194,
              "name": "魅力增伤",
              "quantity": 1600
            }
          ],
          "skill": null
        },
        {
          "level": 40,
          "material": {
            "id": 57,
            "quantity": 29000
          },
          "attributes": [],
          "skill": {
            "id": 702696,
            "name": "提升技能效果",
            "description": "为己方攻击最高2名武将回复50%最大生命的血量（该回复效果，不受任何抑制回血类buff的影响），并增加60%免伤和魅力减伤，且额外增加90%怒气减伤，持续7回合（攻击最高的武将生命值达到65%以下触发）"
          }
        }
      ],
      "effectLevels": [
        5,
        10,
        15
      ],
      "attributeOrder": [
        {
          "id": 54,
          "name": "物防"
        },
        {
          "id": 55,
          "name": "法防"
        },
        {
          "id": 14,
          "name": "物防"
        },
        {
          "id": 15,
          "name": "法防"
        },
        {
          "id": 51,
          "name": "生命"
        },
        {
          "id": 194,
          "name": "魅力增伤"
        },
        {
          "id": 195,
          "name": "魅力减伤"
        },
        {
          "id": 57,
          "name": "免伤"
        }
      ],
      "lvAdv": {
        "1": 10046,
        "2": 10047,
        "3": 10048,
        "4": 10049,
        "5": 10050,
        "6": 10051,
        "7": 10052,
        "8": 10053,
        "9": 10054,
        "10": 10055,
        "11": 10056,
        "12": 10057,
        "13": 10058,
        "14": 10059,
        "15": 10060,
        "16": 10106,
        "17": 10107,
        "18": 10108,
        "19": 10109,
        "20": 10110,
        "21": 10151,
        "22": 10152,
        "23": 10153,
        "24": 10154,
        "25": 10155,
        "26": 10156,
        "27": 10157,
        "28": 10158,
        "29": 10159,
        "30": 10160,
        "31": 10196,
        "32": 10197,
        "33": 10198,
        "34": 10199,
        "35": 10200,
        "36": 10226,
        "37": 10227,
        "38": 10228,
        "39": 10229,
        "40": 10230
      }
    },
    {
      "id": 200005,
      "name": "步练师",
      "quality": "红",
      "fragmentId": 63105,
      "fragmentIcon": "assets/red-beauty-items/63105.png",
      "activationQuantity": 1,
      "maxStar": 10,
      "maxLevel": 40,
      "starCosts": [
        {
          "star": 1,
          "materials": [
            {
              "id": 63105,
              "quantity": 3
            },
            {
              "id": 60115,
              "quantity": 200
            }
          ]
        },
        {
          "star": 2,
          "materials": [
            {
              "id": 63105,
              "quantity": 6
            },
            {
              "id": 60115,
              "quantity": 400
            }
          ]
        },
        {
          "star": 3,
          "materials": [
            {
              "id": 63105,
              "quantity": 9
            },
            {
              "id": 60115,
              "quantity": 600
            }
          ]
        },
        {
          "star": 4,
          "materials": [
            {
              "id": 63105,
              "quantity": 12
            },
            {
              "id": 60115,
              "quantity": 800
            }
          ]
        },
        {
          "star": 5,
          "materials": [
            {
              "id": 63105,
              "quantity": 15
            },
            {
              "id": 60115,
              "quantity": 1000
            }
          ]
        },
        {
          "star": 6,
          "materials": [
            {
              "id": 63105,
              "quantity": 18
            },
            {
              "id": 60115,
              "quantity": 1500
            }
          ]
        },
        {
          "star": 7,
          "materials": [
            {
              "id": 63105,
              "quantity": 21
            },
            {
              "id": 60115,
              "quantity": 2000
            }
          ]
        },
        {
          "star": 8,
          "materials": [
            {
              "id": 63105,
              "quantity": 25
            },
            {
              "id": 60115,
              "quantity": 3000
            }
          ]
        },
        {
          "star": 9,
          "materials": [
            {
              "id": 63105,
              "quantity": 30
            },
            {
              "id": 60115,
              "quantity": 4000
            }
          ]
        },
        {
          "star": 10,
          "materials": [
            {
              "id": 63105,
              "quantity": 40
            },
            {
              "id": 60115,
              "quantity": 5000
            }
          ]
        }
      ],
      "starAttributes": [
        {"star": 1, "attributes": [{"id": 19, "name": "攻击比", "quantity": 2000}]},
        {"star": 2, "attributes": [{"id": 195, "name": "魅力减伤", "quantity": 500}, {"id": 51, "name": "生命", "quantity": 250000}]},
        {"star": 3, "attributes": [{"id": 194, "name": "魅力增伤", "quantity": 1000}]},
        {"star": 4, "attributes": [{"id": 194, "name": "魅力增伤", "quantity": 1500}]},
        {"star": 5, "attributes": [{"id": 195, "name": "魅力减伤", "quantity": 2000}]},
        {"star": 6, "attributes": [{"id": 195, "name": "魅力减伤", "quantity": 2000}, {"id": 57, "name": "免伤", "quantity": 2000}]},
        {"star": 7, "attributes": [{"id": 194, "name": "魅力增伤", "quantity": 2500}, {"id": 56, "name": "伤害", "quantity": 2500}]},
        {"star": 8, "attributes": [{"id": 194, "name": "魅力增伤", "quantity": 3000}, {"id": 57, "name": "免伤", "quantity": 3000}]},
        {"star": 9, "attributes": [{"id": 194, "name": "魅力增伤", "quantity": 3500}, {"id": 56, "name": "伤害", "quantity": 3500}]},
        {"star": 10, "attributes": [{"id": 195, "name": "魅力减伤", "quantity": 4000}, {"id": 56, "name": "伤害", "quantity": 4000}]}
      ],
      "upgradeCosts": [
        {
          "level": 1,
          "material": {
            "id": 57,
            "quantity": 100
          },
          "attributes": [
            {
              "id": 55,
              "name": "法防",
              "quantity": 10000
            }
          ],
          "skill": null
        },
        {
          "level": 2,
          "material": {
            "id": 57,
            "quantity": 200
          },
          "attributes": [
            {
              "id": 54,
              "name": "物防",
              "quantity": 10000
            }
          ],
          "skill": null
        },
        {
          "level": 3,
          "material": {
            "id": 57,
            "quantity": 300
          },
          "attributes": [
            {
              "id": 51,
              "name": "生命",
              "quantity": 50000
            }
          ],
          "skill": null
        },
        {
          "level": 4,
          "material": {
            "id": 57,
            "quantity": 400
          },
          "attributes": [
            {
              "id": 100,
              "name": "攻击",
              "quantity": 10000
            }
          ],
          "skill": null
        },
        {
          "level": 5,
          "material": {
            "id": 57,
            "quantity": 1000
          },
          "attributes": [],
          "skill": {
            "id": 701871,
            "name": "激活红颜技能",
            "description": "为己方装备步练师的武将回复5%最大生命的血量，并增加10%伤害，持续1回合（装备步练师的武将生命值达到70%以下触发，每回合仅触发1次）"
          }
        },
        {
          "level": 6,
          "material": {
            "id": 57,
            "quantity": 700
          },
          "attributes": [
            {
              "id": 55,
              "name": "法防",
              "quantity": 25000
            }
          ],
          "skill": null
        },
        {
          "level": 7,
          "material": {
            "id": 57,
            "quantity": 900
          },
          "attributes": [
            {
              "id": 54,
              "name": "物防",
              "quantity": 25000
            }
          ],
          "skill": null
        },
        {
          "level": 8,
          "material": {
            "id": 57,
            "quantity": 1100
          },
          "attributes": [
            {
              "id": 195,
              "name": "魅力减伤",
              "quantity": 400
            }
          ],
          "skill": null
        },
        {
          "level": 9,
          "material": {
            "id": 57,
            "quantity": 1300
          },
          "attributes": [
            {
              "id": 194,
              "name": "魅力增伤",
              "quantity": 400
            }
          ],
          "skill": null
        },
        {
          "level": 10,
          "material": {
            "id": 57,
            "quantity": 2000
          },
          "attributes": [],
          "skill": {
            "id": 701872,
            "name": "提升技能效果",
            "description": "为己方装备步练师的武将回复5%最大生命的血量，并增加25%伤害，并有30%的概率为其增加一个可抵消1次任意伤害的护盾，均持续1回合（装备步练师的武将生命值达到75%以下触发，每回合仅触发1次）"
          }
        },
        {
          "level": 11,
          "material": {
            "id": 57,
            "quantity": 1800
          },
          "attributes": [
            {
              "id": 51,
              "name": "生命",
              "quantity": 200000
            }
          ],
          "skill": null
        },
        {
          "level": 12,
          "material": {
            "id": 57,
            "quantity": 2100
          },
          "attributes": [
            {
              "id": 100,
              "name": "攻击",
              "quantity": 40000
            }
          ],
          "skill": null
        },
        {
          "level": 13,
          "material": {
            "id": 57,
            "quantity": 2400
          },
          "attributes": [
            {
              "id": 195,
              "name": "魅力减伤",
              "quantity": 600
            }
          ],
          "skill": null
        },
        {
          "level": 14,
          "material": {
            "id": 57,
            "quantity": 2700
          },
          "attributes": [
            {
              "id": 194,
              "name": "魅力增伤",
              "quantity": 600
            }
          ],
          "skill": null
        },
        {
          "level": 15,
          "material": {
            "id": 57,
            "quantity": 4000
          },
          "attributes": [],
          "skill": {
            "id": 701873,
            "name": "提升技能并激活新战斗表现",
            "description": "为己方装备步练师的武将回复10%最大生命的血量（该回复效果，不受任何抑制回血类buff的影响），并增加70%伤害，并有70%的概率为其增加一个可抵消1次任意伤害的护盾，均持续2回合（装备步练师的武将生命值达到80%以下触发，每回合仅触发1次）"
          }
        },
        {
          "level": 16,
          "material": {
            "id": 57,
            "quantity": 3400
          },
          "attributes": [
            {
              "id": 55,
              "name": "法防",
              "quantity": 60000
            }
          ],
          "skill": null
        },
        {
          "level": 17,
          "material": {
            "id": 57,
            "quantity": 3800
          },
          "attributes": [
            {
              "id": 54,
              "name": "物防",
              "quantity": 60000
            }
          ],
          "skill": null
        },
        {
          "level": 18,
          "material": {
            "id": 57,
            "quantity": 4200
          },
          "attributes": [
            {
              "id": 195,
              "name": "魅力减伤",
              "quantity": 800
            }
          ],
          "skill": null
        },
        {
          "level": 19,
          "material": {
            "id": 57,
            "quantity": 4600
          },
          "attributes": [
            {
              "id": 194,
              "name": "魅力增伤",
              "quantity": 800
            }
          ],
          "skill": null
        },
        {
          "level": 20,
          "material": {
            "id": 57,
            "quantity": 7000
          },
          "attributes": [],
          "skill": {
            "id": 701881,
            "name": "提升技能效果",
            "description": "为己方装备步练师的武将回复10%最大生命的血量（该回复效果，不受任何抑制回血类buff的影响），并增加70%伤害和15%法伤和物伤，并有100%的概率为其增加一个可抵消1次任意伤害的护盾，均持续2回合（装备步练师的武将生命值达到85%以下触发，每回合仅触发1次）"
          }
        },
        {
          "level": 21,
          "material": {
            "id": 57,
            "quantity": 5500
          },
          "attributes": [
            {
              "id": 51,
              "name": "生命",
              "quantity": 400000
            }
          ],
          "skill": null
        },
        {
          "level": 22,
          "material": {
            "id": 57,
            "quantity": 6000
          },
          "attributes": [
            {
              "id": 100,
              "name": "攻击",
              "quantity": 80000
            }
          ],
          "skill": null
        },
        {
          "level": 23,
          "material": {
            "id": 57,
            "quantity": 6500
          },
          "attributes": [
            {
              "id": 195,
              "name": "魅力减伤",
              "quantity": 1000
            }
          ],
          "skill": null
        },
        {
          "level": 24,
          "material": {
            "id": 57,
            "quantity": 7000
          },
          "attributes": [
            {
              "id": 194,
              "name": "魅力增伤",
              "quantity": 1000
            }
          ],
          "skill": null
        },
        {
          "level": 25,
          "material": {
            "id": 57,
            "quantity": 11000
          },
          "attributes": [],
          "skill": {
            "id": 702057,
            "name": "提升技能效果",
            "description": "为己方装备步练师的武将回复10%最大生命的血量（该回复效果，不受任何抑制回血类buff的影响），并增加70%伤害和30%法伤和物伤，并有100%的概率为其增加一个可抵消2次任意伤害的护盾，均持续3回合（装备步练师的武将生命值达到85%以下触发，每一大回合触发一次）"
          }
        },
        {
          "level": 26,
          "material": {
            "id": 57,
            "quantity": 7600
          },
          "attributes": [
            {
              "id": 55,
              "name": "法防",
              "quantity": 100000
            }
          ],
          "skill": null
        },
        {
          "level": 27,
          "material": {
            "id": 57,
            "quantity": 8200
          },
          "attributes": [
            {
              "id": 54,
              "name": "物防",
              "quantity": 100000
            }
          ],
          "skill": null
        },
        {
          "level": 28,
          "material": {
            "id": 57,
            "quantity": 8800
          },
          "attributes": [
            {
              "id": 195,
              "name": "魅力减伤",
              "quantity": 1200
            }
          ],
          "skill": null
        },
        {
          "level": 29,
          "material": {
            "id": 57,
            "quantity": 9400
          },
          "attributes": [
            {
              "id": 194,
              "name": "魅力增伤",
              "quantity": 1200
            }
          ],
          "skill": null
        },
        {
          "level": 30,
          "material": {
            "id": 57,
            "quantity": 16000
          },
          "attributes": [],
          "skill": {
            "id": 702058,
            "name": "提升技能效果",
            "description": "为己方装备步练师的武将回复10%最大生命的血量（该回复效果，不受任何抑制回血类buff的影响），并增加70%伤害和30%法伤和物伤，且额外增加35%魅力增伤，并有100%的概率为其增加一个可抵消3次任意伤害的护盾，均持续3回合（装备步练师的武将生命值达到85%以下触发，每一大回合触发一次）"
          }
        },
        {
          "level": 31,
          "material": {
            "id": 57,
            "quantity": 10700
          },
          "attributes": [
            {
              "id": 51,
              "name": "生命",
              "quantity": 600000
            }
          ],
          "skill": null
        },
        {
          "level": 32,
          "material": {
            "id": 57,
            "quantity": 11400
          },
          "attributes": [
            {
              "id": 100,
              "name": "攻击",
              "quantity": 120000
            }
          ],
          "skill": null
        },
        {
          "level": 33,
          "material": {
            "id": 57,
            "quantity": 12100
          },
          "attributes": [
            {
              "id": 195,
              "name": "魅力减伤",
              "quantity": 1400
            }
          ],
          "skill": null
        },
        {
          "level": 34,
          "material": {
            "id": 57,
            "quantity": 12800
          },
          "attributes": [
            {
              "id": 194,
              "name": "魅力增伤",
              "quantity": 1400
            }
          ],
          "skill": null
        },
        {
          "level": 35,
          "material": {
            "id": 57,
            "quantity": 22000
          },
          "attributes": [],
          "skill": {
            "id": 702636,
            "name": "提升技能效果",
            "description": "为己方装备步练师的武将回复10%最大生命的血量（该回复效果，不受任何抑制回血类buff的影响），并增加90%伤害和40%法伤和物伤，且额外增加45%魅力增伤，并有100%的概率为其增加一个可抵消4次任意伤害的护盾，均持续3回合（装备步练师的武将生命值达到85%以下触发，每一大回合触发一次）"
          }
        },
        {
          "level": 36,
          "material": {
            "id": 57,
            "quantity": 15000
          },
          "attributes": [
            {
              "id": 55,
              "name": "法防",
              "quantity": 140000
            }
          ],
          "skill": null
        },
        {
          "level": 37,
          "material": {
            "id": 57,
            "quantity": 16000
          },
          "attributes": [
            {
              "id": 54,
              "name": "物防",
              "quantity": 140000
            }
          ],
          "skill": null
        },
        {
          "level": 38,
          "material": {
            "id": 57,
            "quantity": 17000
          },
          "attributes": [
            {
              "id": 195,
              "name": "魅力减伤",
              "quantity": 1600
            }
          ],
          "skill": null
        },
        {
          "level": 39,
          "material": {
            "id": 57,
            "quantity": 18000
          },
          "attributes": [
            {
              "id": 194,
              "name": "魅力增伤",
              "quantity": 1600
            }
          ],
          "skill": null
        },
        {
          "level": 40,
          "material": {
            "id": 57,
            "quantity": 29000
          },
          "attributes": [],
          "skill": {
            "id": 702697,
            "name": "提升技能效果",
            "description": "为己方装备步练师的武将回复10%最大生命的血量（该回复效果，不受任何抑制回血类buff的影响），并增加120%伤害和45%法伤和物伤，且额外增加55%魅力增伤，并有100%的概率为其增加一个可抵消4次任意伤害的护盾，均持续3回合（装备步练师的武将生命值达到85%以下触发，每一大回合触发一次）"
          }
        }
      ],
      "effectLevels": [
        5,
        10,
        15
      ],
      "attributeOrder": [
        {
          "id": 54,
          "name": "物防"
        },
        {
          "id": 55,
          "name": "法防"
        },
        {
          "id": 19,
          "name": "攻击"
        },
        {
          "id": 51,
          "name": "生命"
        },
        {
          "id": 194,
          "name": "魅力增伤"
        },
        {
          "id": 195,
          "name": "魅力减伤"
        },
        {
          "id": 57,
          "name": "免伤"
        },
        {
          "id": 56,
          "name": "伤害"
        }
      ],
      "lvAdv": {
        "1": 10061,
        "2": 10062,
        "3": 10063,
        "4": 10064,
        "5": 10065,
        "6": 10066,
        "7": 10067,
        "8": 10068,
        "9": 10069,
        "10": 10070,
        "11": 10071,
        "12": 10072,
        "13": 10073,
        "14": 10074,
        "15": 10075,
        "16": 10111,
        "17": 10112,
        "18": 10113,
        "19": 10114,
        "20": 10115,
        "21": 10161,
        "22": 10162,
        "23": 10163,
        "24": 10164,
        "25": 10165,
        "26": 10166,
        "27": 10167,
        "28": 10168,
        "29": 10169,
        "30": 10170,
        "31": 10201,
        "32": 10202,
        "33": 10203,
        "34": 10204,
        "35": 10205,
        "36": 10231,
        "37": 10232,
        "38": 10233,
        "39": 10234,
        "40": 10235
      }
    },
    {
      "id": 200006,
      "name": "曹节",
      "quality": "红",
      "fragmentId": 63106,
      "fragmentIcon": "assets/red-beauty-items/63106.png",
      "activationQuantity": 1,
      "maxStar": 10,
      "maxLevel": 40,
      "starCosts": [
        {
          "star": 1,
          "materials": [
            {
              "id": 63106,
              "quantity": 3
            },
            {
              "id": 60115,
              "quantity": 200
            }
          ]
        },
        {
          "star": 2,
          "materials": [
            {
              "id": 63106,
              "quantity": 6
            },
            {
              "id": 60115,
              "quantity": 400
            }
          ]
        },
        {
          "star": 3,
          "materials": [
            {
              "id": 63106,
              "quantity": 9
            },
            {
              "id": 60115,
              "quantity": 600
            }
          ]
        },
        {
          "star": 4,
          "materials": [
            {
              "id": 63106,
              "quantity": 12
            },
            {
              "id": 60115,
              "quantity": 800
            }
          ]
        },
        {
          "star": 5,
          "materials": [
            {
              "id": 63106,
              "quantity": 15
            },
            {
              "id": 60115,
              "quantity": 1000
            }
          ]
        },
        {
          "star": 6,
          "materials": [
            {
              "id": 63106,
              "quantity": 18
            },
            {
              "id": 60115,
              "quantity": 1500
            }
          ]
        },
        {
          "star": 7,
          "materials": [
            {
              "id": 63106,
              "quantity": 21
            },
            {
              "id": 60115,
              "quantity": 2000
            }
          ]
        },
        {
          "star": 8,
          "materials": [
            {
              "id": 63106,
              "quantity": 25
            },
            {
              "id": 60115,
              "quantity": 3000
            }
          ]
        },
        {
          "star": 9,
          "materials": [
            {
              "id": 63106,
              "quantity": 30
            },
            {
              "id": 60115,
              "quantity": 4000
            }
          ]
        },
        {
          "star": 10,
          "materials": [
            {
              "id": 63106,
              "quantity": 40
            },
            {
              "id": 60115,
              "quantity": 5000
            }
          ]
        }
      ],
      "starAttributes": [
        {"star": 1, "attributes": [{"id": 14, "name": "物防比", "quantity": 2000}, {"id": 15, "name": "法防比", "quantity": 2000}]},
        {"star": 2, "attributes": [{"id": 194, "name": "魅力增伤", "quantity": 500}, {"id": 100, "name": "攻击", "quantity": 50000}]},
        {"star": 3, "attributes": [{"id": 194, "name": "魅力增伤", "quantity": 500}, {"id": 195, "name": "魅力减伤", "quantity": 500}]},
        {"star": 4, "attributes": [{"id": 194, "name": "魅力增伤", "quantity": 1000}, {"id": 195, "name": "魅力减伤", "quantity": 500}]},
        {"star": 5, "attributes": [{"id": 194, "name": "魅力增伤", "quantity": 1500}, {"id": 195, "name": "魅力减伤", "quantity": 500}]},
        {"star": 6, "attributes": [{"id": 194, "name": "魅力增伤", "quantity": 2000}, {"id": 56, "name": "伤害", "quantity": 2000}]},
        {"star": 7, "attributes": [{"id": 195, "name": "魅力减伤", "quantity": 2500}, {"id": 56, "name": "伤害", "quantity": 2500}]},
        {"star": 8, "attributes": [{"id": 195, "name": "魅力减伤", "quantity": 3000}, {"id": 57, "name": "免伤", "quantity": 3000}]},
        {"star": 9, "attributes": [{"id": 195, "name": "魅力减伤", "quantity": 3500}, {"id": 56, "name": "伤害", "quantity": 3500}]},
        {"star": 10, "attributes": [{"id": 194, "name": "魅力增伤", "quantity": 4000}, {"id": 56, "name": "伤害", "quantity": 4000}]}
      ],
      "upgradeCosts": [
        {
          "level": 1,
          "material": {
            "id": 57,
            "quantity": 100
          },
          "attributes": [
            {
              "id": 55,
              "name": "法防",
              "quantity": 10000
            }
          ],
          "skill": null
        },
        {
          "level": 2,
          "material": {
            "id": 57,
            "quantity": 200
          },
          "attributes": [
            {
              "id": 54,
              "name": "物防",
              "quantity": 10000
            }
          ],
          "skill": null
        },
        {
          "level": 3,
          "material": {
            "id": 57,
            "quantity": 300
          },
          "attributes": [
            {
              "id": 51,
              "name": "生命",
              "quantity": 50000
            }
          ],
          "skill": null
        },
        {
          "level": 4,
          "material": {
            "id": 57,
            "quantity": 400
          },
          "attributes": [
            {
              "id": 100,
              "name": "攻击",
              "quantity": 10000
            }
          ],
          "skill": null
        },
        {
          "level": 5,
          "material": {
            "id": 57,
            "quantity": 1000
          },
          "attributes": [],
          "skill": {
            "id": 701874,
            "name": "激活红颜技能",
            "description": "对敌方随机1个武将造成目标5%最大生命的伤害，并降低其10%伤害，持续1回合（在装备该红颜的武将每回合行动后释放）"
          }
        },
        {
          "level": 6,
          "material": {
            "id": 57,
            "quantity": 700
          },
          "attributes": [
            {
              "id": 55,
              "name": "法防",
              "quantity": 25000
            }
          ],
          "skill": null
        },
        {
          "level": 7,
          "material": {
            "id": 57,
            "quantity": 900
          },
          "attributes": [
            {
              "id": 54,
              "name": "物防",
              "quantity": 25000
            }
          ],
          "skill": null
        },
        {
          "level": 8,
          "material": {
            "id": 57,
            "quantity": 1100
          },
          "attributes": [
            {
              "id": 195,
              "name": "魅力减伤",
              "quantity": 400
            }
          ],
          "skill": null
        },
        {
          "level": 9,
          "material": {
            "id": 57,
            "quantity": 1300
          },
          "attributes": [
            {
              "id": 194,
              "name": "魅力增伤",
              "quantity": 400
            }
          ],
          "skill": null
        },
        {
          "level": 10,
          "material": {
            "id": 57,
            "quantity": 2000
          },
          "attributes": [],
          "skill": {
            "id": 701875,
            "name": "提升技能效果",
            "description": "对敌方生命最高2名武将造成目标5%最大生命的伤害，并降低其20%伤害，持续1回合（在装备该红颜的武将每回合行动后释放）"
          }
        },
        {
          "level": 11,
          "material": {
            "id": 57,
            "quantity": 1800
          },
          "attributes": [
            {
              "id": 51,
              "name": "生命",
              "quantity": 200000
            }
          ],
          "skill": null
        },
        {
          "level": 12,
          "material": {
            "id": 57,
            "quantity": 2100
          },
          "attributes": [
            {
              "id": 100,
              "name": "攻击",
              "quantity": 40000
            }
          ],
          "skill": null
        },
        {
          "level": 13,
          "material": {
            "id": 57,
            "quantity": 2400
          },
          "attributes": [
            {
              "id": 195,
              "name": "魅力减伤",
              "quantity": 600
            }
          ],
          "skill": null
        },
        {
          "level": 14,
          "material": {
            "id": 57,
            "quantity": 2700
          },
          "attributes": [
            {
              "id": 194,
              "name": "魅力增伤",
              "quantity": 600
            }
          ],
          "skill": null
        },
        {
          "level": 15,
          "material": {
            "id": 57,
            "quantity": 4000
          },
          "attributes": [],
          "skill": {
            "id": 701876,
            "name": "提升技能并激活新战斗表现",
            "description": "对敌方生命最高武将2名武将造成目标5%最大生命的伤害，并降低其50%伤害和100%暴击率，持续2回合（在装备该红颜的武将每回合行动后释放）"
          }
        },
        {
          "level": 16,
          "material": {
            "id": 57,
            "quantity": 3400
          },
          "attributes": [
            {
              "id": 55,
              "name": "法防",
              "quantity": 60000
            }
          ],
          "skill": null
        },
        {
          "level": 17,
          "material": {
            "id": 57,
            "quantity": 3800
          },
          "attributes": [
            {
              "id": 54,
              "name": "物防",
              "quantity": 60000
            }
          ],
          "skill": null
        },
        {
          "level": 18,
          "material": {
            "id": 57,
            "quantity": 4200
          },
          "attributes": [
            {
              "id": 195,
              "name": "魅力减伤",
              "quantity": 800
            }
          ],
          "skill": null
        },
        {
          "level": 19,
          "material": {
            "id": 57,
            "quantity": 4600
          },
          "attributes": [
            {
              "id": 194,
              "name": "魅力增伤",
              "quantity": 800
            }
          ],
          "skill": null
        },
        {
          "level": 20,
          "material": {
            "id": 57,
            "quantity": 7000
          },
          "attributes": [],
          "skill": {
            "id": 701882,
            "name": "提升技能效果",
            "description": "对敌方生命最高武将2名武将造成目标5%最大生命的伤害，并降低其80%伤害、5%的法免和物免、100%暴击率，持续3回合（在装备该红颜的武将每回合行动后释放）"
          }
        },
        {
          "level": 21,
          "material": {
            "id": 57,
            "quantity": 5500
          },
          "attributes": [
            {
              "id": 51,
              "name": "生命",
              "quantity": 400000
            }
          ],
          "skill": null
        },
        {
          "level": 22,
          "material": {
            "id": 57,
            "quantity": 6000
          },
          "attributes": [
            {
              "id": 100,
              "name": "攻击",
              "quantity": 80000
            }
          ],
          "skill": null
        },
        {
          "level": 23,
          "material": {
            "id": 57,
            "quantity": 6500
          },
          "attributes": [
            {
              "id": 195,
              "name": "魅力减伤",
              "quantity": 1000
            }
          ],
          "skill": null
        },
        {
          "level": 24,
          "material": {
            "id": 57,
            "quantity": 7000
          },
          "attributes": [
            {
              "id": 194,
              "name": "魅力增伤",
              "quantity": 1000
            }
          ],
          "skill": null
        },
        {
          "level": 25,
          "material": {
            "id": 57,
            "quantity": 11000
          },
          "attributes": [],
          "skill": {
            "id": 702059,
            "name": "提升技能效果",
            "description": "对敌方生命最高武将2名武将造成目标5%最大生命的伤害，并降低其100%伤害、10%的法免和物免、100%暴击率，持续4回合（在装备该红颜的武将每回合行动后释放）"
          }
        },
        {
          "level": 26,
          "material": {
            "id": 57,
            "quantity": 7600
          },
          "attributes": [
            {
              "id": 55,
              "name": "法防",
              "quantity": 100000
            }
          ],
          "skill": null
        },
        {
          "level": 27,
          "material": {
            "id": 57,
            "quantity": 8200
          },
          "attributes": [
            {
              "id": 54,
              "name": "物防",
              "quantity": 100000
            }
          ],
          "skill": null
        },
        {
          "level": 28,
          "material": {
            "id": 57,
            "quantity": 8800
          },
          "attributes": [
            {
              "id": 195,
              "name": "魅力减伤",
              "quantity": 1200
            }
          ],
          "skill": null
        },
        {
          "level": 29,
          "material": {
            "id": 57,
            "quantity": 9400
          },
          "attributes": [
            {
              "id": 194,
              "name": "魅力增伤",
              "quantity": 1200
            }
          ],
          "skill": null
        },
        {
          "level": 30,
          "material": {
            "id": 57,
            "quantity": 16000
          },
          "attributes": [],
          "skill": {
            "id": 702060,
            "name": "提升技能效果",
            "description": "对敌方生命最高武将2名武将造成目标5%最大生命的伤害，并降低其100%伤害、10%的法免和物免、100%暴击率，且额外降低35%魅力增伤，持续5回合（在装备该红颜的武将每回合行动后释放）"
          }
        },
        {
          "level": 31,
          "material": {
            "id": 57,
            "quantity": 10700
          },
          "attributes": [
            {
              "id": 51,
              "name": "生命",
              "quantity": 600000
            }
          ],
          "skill": null
        },
        {
          "level": 32,
          "material": {
            "id": 57,
            "quantity": 11400
          },
          "attributes": [
            {
              "id": 100,
              "name": "攻击",
              "quantity": 120000
            }
          ],
          "skill": null
        },
        {
          "level": 33,
          "material": {
            "id": 57,
            "quantity": 12100
          },
          "attributes": [
            {
              "id": 195,
              "name": "魅力减伤",
              "quantity": 1400
            }
          ],
          "skill": null
        },
        {
          "level": 34,
          "material": {
            "id": 57,
            "quantity": 12800
          },
          "attributes": [
            {
              "id": 194,
              "name": "魅力增伤",
              "quantity": 1400
            }
          ],
          "skill": null
        },
        {
          "level": 35,
          "material": {
            "id": 57,
            "quantity": 22000
          },
          "attributes": [],
          "skill": {
            "id": 702637,
            "name": "提升技能效果",
            "description": "对敌方生命最高2名武将造成目标5%最大生命的伤害，并降低其125%伤害、15%的法免和物免、120%暴击率，且额外降低45%魅力增伤，持续6回合（在装备该红颜的武将每回合行动后释放）"
          }
        },
        {
          "level": 36,
          "material": {
            "id": 57,
            "quantity": 15000
          },
          "attributes": [
            {
              "id": 55,
              "name": "法防",
              "quantity": 140000
            }
          ],
          "skill": null
        },
        {
          "level": 37,
          "material": {
            "id": 57,
            "quantity": 16000
          },
          "attributes": [
            {
              "id": 54,
              "name": "物防",
              "quantity": 140000
            }
          ],
          "skill": null
        },
        {
          "level": 38,
          "material": {
            "id": 57,
            "quantity": 17000
          },
          "attributes": [
            {
              "id": 195,
              "name": "魅力减伤",
              "quantity": 1600
            }
          ],
          "skill": null
        },
        {
          "level": 39,
          "material": {
            "id": 57,
            "quantity": 18000
          },
          "attributes": [
            {
              "id": 194,
              "name": "魅力增伤",
              "quantity": 1600
            }
          ],
          "skill": null
        },
        {
          "level": 40,
          "material": {
            "id": 57,
            "quantity": 29000
          },
          "attributes": [],
          "skill": {
            "id": 702698,
            "name": "提升技能效果",
            "description": "对敌方生命最高2名武将造成目标5%最大生命的伤害，并降低其150%伤害、20%的法免和物免、140%暴击率，且额外降低55%魅力增伤，持续7回合（在装备该红颜的武将每回合行动后释放）"
          }
        }
      ],
      "effectLevels": [
        5,
        10,
        15
      ],
      "attributeOrder": [
        {
          "id": 100,
          "name": "攻击"
        },
        {
          "id": 14,
          "name": "物防"
        },
        {
          "id": 15,
          "name": "法防"
        },
        {
          "id": 194,
          "name": "魅力增伤"
        },
        {
          "id": 195,
          "name": "魅力减伤"
        },
        {
          "id": 56,
          "name": "伤害"
        },
        {
          "id": 57,
          "name": "免伤"
        }
      ],
      "lvAdv": {
        "1": 10076,
        "2": 10077,
        "3": 10078,
        "4": 10079,
        "5": 10080,
        "6": 10081,
        "7": 10082,
        "8": 10083,
        "9": 10084,
        "10": 10085,
        "11": 10086,
        "12": 10087,
        "13": 10088,
        "14": 10089,
        "15": 10090,
        "16": 10116,
        "17": 10117,
        "18": 10118,
        "19": 10119,
        "20": 10120,
        "21": 10171,
        "22": 10172,
        "23": 10173,
        "24": 10174,
        "25": 10175,
        "26": 10176,
        "27": 10177,
        "28": 10178,
        "29": 10179,
        "30": 10180,
        "31": 10206,
        "32": 10207,
        "33": 10208,
        "34": 10209,
        "35": 10210,
        "36": 10236,
        "37": 10237,
        "38": 10238,
        "39": 10239,
        "40": 10240
      }
    }
  ]
};
