// 由 DB_Item_dress.lua、DB_Item_fragment.lua 与 DB_Dress_up_liujin.lua 整理生成。
// 主角时装配置更新时，优先更新解包数据后重新生成本文件，页面会自动读取新增时装。
// DB_Item_dress 的 extra_attr 对应强化节点属性，awake_ability 对应时装天赋。
// dress_att 对应解锁时的进阶属性，liujin_adv 对应可进阶档位；DB_Dress_up_liujin 提供每档进阶属性与消耗。
window.PROTAGONIST_FASHION_DATA = {
  "materials": {
    "60016": {
      "name": "时装精华",
      "icon": "assets/protagonist-fashion-items/shizhuang-jinghua.png"
    },
    "69043": {
      "name": "时装精魂",
      "icon": "assets/protagonist-fashion-items/fashion-shuizhijingpo.png"
    },
    "69060": {
      "name": "时装升星石",
      "icon": "assets/protagonist-fashion-items/shizhuangshengxingshi.png"
    }
  },
  "attributeNames": {
    "1": "生命",
    "4": "物防",
    "5": "法防",
    "6": "统帅",
    "7": "武力",
    "8": "智力",
    "9": "攻击",
    "22": "物理伤害",
    "23": "法术伤害",
    "24": "物理免伤",
    "25": "法术免伤",
    "51": "生命",
    "54": "物防",
    "55": "法防",
    "56": "伤害",
    "57": "免伤",
    "60": "怒气加伤",
    "61": "怒气减伤",
    "67": "破魏",
    "68": "破蜀",
    "69": "破吴",
    "70": "破群",
    "71": "抗魏",
    "72": "抗蜀",
    "73": "抗吴",
    "74": "抗群",
    "90": "眩晕抗性",
    "91": "封技抗性",
    "92": "禁怒抗性",
    "93": "降怒抗性",
    "94": "麻痹抗性",
    "95": "封疗抗性",
    "100": "攻击",
    "101": "PvP增伤",
    "102": "PvP减伤",
    "104": "魅惑抗性",
    "110": "恐惧抗性",
    "138": "封魂抗性",
    "179": "竞技增伤",
    "180": "竞技减伤",
    "233": "追击增伤"
  },
  "plans": [
    {
      "id": 1,
      "rows": [
        {
          "level": 15,
          "silver": 100000,
          "materialId": 60016,
          "materialAmount": 5
        },
        {
          "level": 20,
          "silver": 200000,
          "materialId": 60016,
          "materialAmount": 10
        },
        {
          "level": 30,
          "silver": 300000,
          "materialId": 60016,
          "materialAmount": 15
        },
        {
          "level": 40,
          "silver": 400000,
          "materialId": 60016,
          "materialAmount": 20
        },
        {
          "level": 50,
          "silver": 500000,
          "materialId": 60016,
          "materialAmount": 25
        },
        {
          "level": 60,
          "silver": 600000,
          "materialId": 60016,
          "materialAmount": 30
        },
        {
          "level": 70,
          "silver": 700000,
          "materialId": 60016,
          "materialAmount": 35
        },
        {
          "level": 80,
          "silver": 800000,
          "materialId": 60016,
          "materialAmount": 40
        },
        {
          "level": 90,
          "silver": 900000,
          "materialId": 60016,
          "materialAmount": 45
        },
        {
          "level": 100,
          "silver": 1000000,
          "materialId": 60016,
          "materialAmount": 50
        },
        {
          "level": 103,
          "silver": 1100000,
          "materialId": 60016,
          "materialAmount": 55
        },
        {
          "level": 106,
          "silver": 1200000,
          "materialId": 60016,
          "materialAmount": 60
        },
        {
          "level": 109,
          "silver": 1300000,
          "materialId": 60016,
          "materialAmount": 65
        },
        {
          "level": 112,
          "silver": 1400000,
          "materialId": 60016,
          "materialAmount": 70
        },
        {
          "level": 115,
          "silver": 1500000,
          "materialId": 60016,
          "materialAmount": 75
        },
        {
          "level": 118,
          "silver": 1600000,
          "materialId": 60016,
          "materialAmount": 80
        },
        {
          "level": 121,
          "silver": 1700000,
          "materialId": 60016,
          "materialAmount": 85
        },
        {
          "level": 124,
          "silver": 1800000,
          "materialId": 60016,
          "materialAmount": 90
        },
        {
          "level": 127,
          "silver": 1900000,
          "materialId": 60016,
          "materialAmount": 95
        },
        {
          "level": 130,
          "silver": 2000000,
          "materialId": 60016,
          "materialAmount": 100
        },
        {
          "level": 133,
          "silver": 2100000,
          "materialId": 60016,
          "materialAmount": 105
        },
        {
          "level": 136,
          "silver": 2200000,
          "materialId": 60016,
          "materialAmount": 110
        },
        {
          "level": 139,
          "silver": 2300000,
          "materialId": 60016,
          "materialAmount": 115
        },
        {
          "level": 142,
          "silver": 2400000,
          "materialId": 60016,
          "materialAmount": 120
        },
        {
          "level": 145,
          "silver": 2500000,
          "materialId": 60016,
          "materialAmount": 125
        },
        {
          "level": 148,
          "silver": 2600000,
          "materialId": 60016,
          "materialAmount": 130
        },
        {
          "level": 151,
          "silver": 2700000,
          "materialId": 60016,
          "materialAmount": 135
        },
        {
          "level": 154,
          "silver": 2800000,
          "materialId": 60016,
          "materialAmount": 140
        },
        {
          "level": 157,
          "silver": 2900000,
          "materialId": 60016,
          "materialAmount": 145
        },
        {
          "level": 160,
          "silver": 3000000,
          "materialId": 60016,
          "materialAmount": 150
        },
        {
          "level": 163,
          "silver": 3100000,
          "materialId": 60016,
          "materialAmount": 155
        },
        {
          "level": 166,
          "silver": 3200000,
          "materialId": 60016,
          "materialAmount": 160
        },
        {
          "level": 169,
          "silver": 3300000,
          "materialId": 60016,
          "materialAmount": 165
        },
        {
          "level": 172,
          "silver": 3400000,
          "materialId": 60016,
          "materialAmount": 170
        },
        {
          "level": 175,
          "silver": 3500000,
          "materialId": 60016,
          "materialAmount": 175
        },
        {
          "level": 178,
          "silver": 3600000,
          "materialId": 60016,
          "materialAmount": 180
        },
        {
          "level": 181,
          "silver": 3700000,
          "materialId": 60016,
          "materialAmount": 185
        },
        {
          "level": 184,
          "silver": 3800000,
          "materialId": 60016,
          "materialAmount": 190
        },
        {
          "level": 187,
          "silver": 3900000,
          "materialId": 60016,
          "materialAmount": 195
        },
        {
          "level": 190,
          "silver": 4000000,
          "materialId": 60016,
          "materialAmount": 200
        },
        {
          "level": 193,
          "silver": 4100000,
          "materialId": 60016,
          "materialAmount": 205
        },
        {
          "level": 196,
          "silver": 4200000,
          "materialId": 60016,
          "materialAmount": 210
        },
        {
          "level": 199,
          "silver": 4300000,
          "materialId": 60016,
          "materialAmount": 215
        },
        {
          "level": 202,
          "silver": 4400000,
          "materialId": 60016,
          "materialAmount": 220
        },
        {
          "level": 205,
          "silver": 4500000,
          "materialId": 60016,
          "materialAmount": 225
        },
        {
          "level": 208,
          "silver": 4600000,
          "materialId": 60016,
          "materialAmount": 230
        },
        {
          "level": 211,
          "silver": 4700000,
          "materialId": 60016,
          "materialAmount": 235
        },
        {
          "level": 214,
          "silver": 4800000,
          "materialId": 60016,
          "materialAmount": 240
        },
        {
          "level": 217,
          "silver": 4900000,
          "materialId": 60016,
          "materialAmount": 245
        },
        {
          "level": 220,
          "silver": 5000000,
          "materialId": 60016,
          "materialAmount": 250
        },
        {
          "level": 223,
          "silver": 5100000,
          "materialId": 60016,
          "materialAmount": 255
        },
        {
          "level": 226,
          "silver": 5200000,
          "materialId": 60016,
          "materialAmount": 260
        },
        {
          "level": 229,
          "silver": 5300000,
          "materialId": 60016,
          "materialAmount": 265
        },
        {
          "level": 232,
          "silver": 5400000,
          "materialId": 60016,
          "materialAmount": 270
        },
        {
          "level": 235,
          "silver": 5500000,
          "materialId": 60016,
          "materialAmount": 275
        },
        {
          "level": 238,
          "silver": 5600000,
          "materialId": 60016,
          "materialAmount": 280
        },
        {
          "level": 241,
          "silver": 5700000,
          "materialId": 60016,
          "materialAmount": 285
        },
        {
          "level": 244,
          "silver": 5800000,
          "materialId": 60016,
          "materialAmount": 290
        },
        {
          "level": 247,
          "silver": 5900000,
          "materialId": 60016,
          "materialAmount": 295
        },
        {
          "level": 250,
          "silver": 6000000,
          "materialId": 60016,
          "materialAmount": 300
        },
        {
          "level": 253,
          "silver": 6100000,
          "materialId": 60016,
          "materialAmount": 305
        },
        {
          "level": 256,
          "silver": 6200000,
          "materialId": 60016,
          "materialAmount": 310
        },
        {
          "level": 259,
          "silver": 6300000,
          "materialId": 60016,
          "materialAmount": 315
        },
        {
          "level": 262,
          "silver": 6400000,
          "materialId": 60016,
          "materialAmount": 320
        },
        {
          "level": 265,
          "silver": 6500000,
          "materialId": 60016,
          "materialAmount": 325
        },
        {
          "level": 268,
          "silver": 6600000,
          "materialId": 60016,
          "materialAmount": 330
        },
        {
          "level": 271,
          "silver": 6700000,
          "materialId": 60016,
          "materialAmount": 335
        },
        {
          "level": 274,
          "silver": 6800000,
          "materialId": 60016,
          "materialAmount": 340
        },
        {
          "level": 277,
          "silver": 6900000,
          "materialId": 60016,
          "materialAmount": 345
        },
        {
          "level": 280,
          "silver": 7000000,
          "materialId": 60016,
          "materialAmount": 350
        }
      ]
    },
    {
      "id": 2,
      "rows": [
        {
          "level": 15,
          "silver": 200000,
          "materialId": 60016,
          "materialAmount": 10
        },
        {
          "level": 20,
          "silver": 400000,
          "materialId": 60016,
          "materialAmount": 20
        },
        {
          "level": 30,
          "silver": 600000,
          "materialId": 60016,
          "materialAmount": 30
        },
        {
          "level": 40,
          "silver": 800000,
          "materialId": 60016,
          "materialAmount": 40
        },
        {
          "level": 50,
          "silver": 1000000,
          "materialId": 60016,
          "materialAmount": 50
        },
        {
          "level": 60,
          "silver": 1200000,
          "materialId": 60016,
          "materialAmount": 60
        },
        {
          "level": 70,
          "silver": 1400000,
          "materialId": 60016,
          "materialAmount": 70
        },
        {
          "level": 80,
          "silver": 1600000,
          "materialId": 60016,
          "materialAmount": 80
        },
        {
          "level": 90,
          "silver": 1800000,
          "materialId": 60016,
          "materialAmount": 90
        },
        {
          "level": 100,
          "silver": 2000000,
          "materialId": 60016,
          "materialAmount": 100
        },
        {
          "level": 103,
          "silver": 2200000,
          "materialId": 60016,
          "materialAmount": 110
        },
        {
          "level": 106,
          "silver": 2400000,
          "materialId": 60016,
          "materialAmount": 120
        },
        {
          "level": 109,
          "silver": 2600000,
          "materialId": 60016,
          "materialAmount": 130
        },
        {
          "level": 112,
          "silver": 2800000,
          "materialId": 60016,
          "materialAmount": 140
        },
        {
          "level": 115,
          "silver": 3000000,
          "materialId": 60016,
          "materialAmount": 150
        },
        {
          "level": 118,
          "silver": 3200000,
          "materialId": 60016,
          "materialAmount": 160
        },
        {
          "level": 121,
          "silver": 3400000,
          "materialId": 60016,
          "materialAmount": 170
        },
        {
          "level": 124,
          "silver": 3600000,
          "materialId": 60016,
          "materialAmount": 180
        },
        {
          "level": 127,
          "silver": 3800000,
          "materialId": 60016,
          "materialAmount": 190
        },
        {
          "level": 130,
          "silver": 4000000,
          "materialId": 60016,
          "materialAmount": 200
        },
        {
          "level": 133,
          "silver": 4200000,
          "materialId": 60016,
          "materialAmount": 210
        },
        {
          "level": 136,
          "silver": 4400000,
          "materialId": 60016,
          "materialAmount": 220
        },
        {
          "level": 139,
          "silver": 4600000,
          "materialId": 60016,
          "materialAmount": 230
        },
        {
          "level": 142,
          "silver": 4800000,
          "materialId": 60016,
          "materialAmount": 240
        },
        {
          "level": 145,
          "silver": 5000000,
          "materialId": 60016,
          "materialAmount": 250
        },
        {
          "level": 148,
          "silver": 5200000,
          "materialId": 60016,
          "materialAmount": 260
        },
        {
          "level": 151,
          "silver": 5400000,
          "materialId": 60016,
          "materialAmount": 270
        },
        {
          "level": 154,
          "silver": 5600000,
          "materialId": 60016,
          "materialAmount": 280
        },
        {
          "level": 157,
          "silver": 5800000,
          "materialId": 60016,
          "materialAmount": 290
        },
        {
          "level": 160,
          "silver": 6000000,
          "materialId": 60016,
          "materialAmount": 300
        },
        {
          "level": 163,
          "silver": 6200000,
          "materialId": 60016,
          "materialAmount": 310
        },
        {
          "level": 166,
          "silver": 6400000,
          "materialId": 60016,
          "materialAmount": 320
        },
        {
          "level": 169,
          "silver": 6600000,
          "materialId": 60016,
          "materialAmount": 330
        },
        {
          "level": 172,
          "silver": 6800000,
          "materialId": 60016,
          "materialAmount": 340
        },
        {
          "level": 175,
          "silver": 7000000,
          "materialId": 60016,
          "materialAmount": 350
        },
        {
          "level": 178,
          "silver": 7200000,
          "materialId": 60016,
          "materialAmount": 360
        },
        {
          "level": 181,
          "silver": 7400000,
          "materialId": 60016,
          "materialAmount": 370
        },
        {
          "level": 184,
          "silver": 7600000,
          "materialId": 60016,
          "materialAmount": 380
        },
        {
          "level": 187,
          "silver": 7800000,
          "materialId": 60016,
          "materialAmount": 390
        },
        {
          "level": 190,
          "silver": 8000000,
          "materialId": 60016,
          "materialAmount": 400
        },
        {
          "level": 193,
          "silver": 8200000,
          "materialId": 60016,
          "materialAmount": 410
        },
        {
          "level": 196,
          "silver": 8400000,
          "materialId": 60016,
          "materialAmount": 420
        },
        {
          "level": 199,
          "silver": 8600000,
          "materialId": 60016,
          "materialAmount": 430
        },
        {
          "level": 202,
          "silver": 8800000,
          "materialId": 60016,
          "materialAmount": 440
        },
        {
          "level": 205,
          "silver": 9000000,
          "materialId": 60016,
          "materialAmount": 450
        },
        {
          "level": 208,
          "silver": 9200000,
          "materialId": 60016,
          "materialAmount": 460
        },
        {
          "level": 211,
          "silver": 9400000,
          "materialId": 60016,
          "materialAmount": 470
        },
        {
          "level": 214,
          "silver": 9600000,
          "materialId": 60016,
          "materialAmount": 480
        },
        {
          "level": 217,
          "silver": 9800000,
          "materialId": 60016,
          "materialAmount": 490
        },
        {
          "level": 220,
          "silver": 10000000,
          "materialId": 60016,
          "materialAmount": 500
        },
        {
          "level": 223,
          "silver": 10200000,
          "materialId": 60016,
          "materialAmount": 510
        },
        {
          "level": 226,
          "silver": 10400000,
          "materialId": 60016,
          "materialAmount": 520
        },
        {
          "level": 229,
          "silver": 10600000,
          "materialId": 60016,
          "materialAmount": 530
        },
        {
          "level": 232,
          "silver": 10800000,
          "materialId": 60016,
          "materialAmount": 540
        },
        {
          "level": 235,
          "silver": 11000000,
          "materialId": 60016,
          "materialAmount": 550
        },
        {
          "level": 238,
          "silver": 11200000,
          "materialId": 60016,
          "materialAmount": 560
        },
        {
          "level": 241,
          "silver": 11400000,
          "materialId": 60016,
          "materialAmount": 570
        },
        {
          "level": 244,
          "silver": 11600000,
          "materialId": 60016,
          "materialAmount": 580
        },
        {
          "level": 247,
          "silver": 11800000,
          "materialId": 60016,
          "materialAmount": 590
        },
        {
          "level": 250,
          "silver": 12000000,
          "materialId": 60016,
          "materialAmount": 600
        },
        {
          "level": 253,
          "silver": 12200000,
          "materialId": 60016,
          "materialAmount": 610
        },
        {
          "level": 256,
          "silver": 12400000,
          "materialId": 60016,
          "materialAmount": 620
        },
        {
          "level": 259,
          "silver": 12600000,
          "materialId": 60016,
          "materialAmount": 630
        },
        {
          "level": 262,
          "silver": 12800000,
          "materialId": 60016,
          "materialAmount": 640
        },
        {
          "level": 265,
          "silver": 13000000,
          "materialId": 60016,
          "materialAmount": 650
        },
        {
          "level": 268,
          "silver": 13200000,
          "materialId": 60016,
          "materialAmount": 660
        },
        {
          "level": 271,
          "silver": 13400000,
          "materialId": 60016,
          "materialAmount": 670
        },
        {
          "level": 274,
          "silver": 13600000,
          "materialId": 60016,
          "materialAmount": 680
        },
        {
          "level": 277,
          "silver": 13800000,
          "materialId": 60016,
          "materialAmount": 690
        },
        {
          "level": 280,
          "silver": 14000000,
          "materialId": 60016,
          "materialAmount": 700
        }
      ]
    },
    {
      "id": 3,
      "rows": [
        {
          "level": 15,
          "silver": 500000,
          "materialId": 60016,
          "materialAmount": 25
        },
        {
          "level": 20,
          "silver": 1000000,
          "materialId": 60016,
          "materialAmount": 50
        },
        {
          "level": 30,
          "silver": 1500000,
          "materialId": 60016,
          "materialAmount": 75
        },
        {
          "level": 40,
          "silver": 2000000,
          "materialId": 60016,
          "materialAmount": 100
        },
        {
          "level": 50,
          "silver": 2500000,
          "materialId": 60016,
          "materialAmount": 125
        },
        {
          "level": 60,
          "silver": 3000000,
          "materialId": 60016,
          "materialAmount": 150
        },
        {
          "level": 70,
          "silver": 3500000,
          "materialId": 60016,
          "materialAmount": 175
        },
        {
          "level": 80,
          "silver": 4000000,
          "materialId": 60016,
          "materialAmount": 200
        },
        {
          "level": 90,
          "silver": 4500000,
          "materialId": 60016,
          "materialAmount": 225
        },
        {
          "level": 100,
          "silver": 5000000,
          "materialId": 60016,
          "materialAmount": 250
        },
        {
          "level": 103,
          "silver": 5500000,
          "materialId": 60016,
          "materialAmount": 275
        },
        {
          "level": 106,
          "silver": 6000000,
          "materialId": 60016,
          "materialAmount": 300
        },
        {
          "level": 109,
          "silver": 6500000,
          "materialId": 60016,
          "materialAmount": 325
        },
        {
          "level": 112,
          "silver": 7000000,
          "materialId": 60016,
          "materialAmount": 350
        },
        {
          "level": 115,
          "silver": 7500000,
          "materialId": 60016,
          "materialAmount": 375
        },
        {
          "level": 118,
          "silver": 8000000,
          "materialId": 60016,
          "materialAmount": 400
        },
        {
          "level": 121,
          "silver": 8500000,
          "materialId": 60016,
          "materialAmount": 425
        },
        {
          "level": 124,
          "silver": 9000000,
          "materialId": 60016,
          "materialAmount": 450
        },
        {
          "level": 127,
          "silver": 9500000,
          "materialId": 60016,
          "materialAmount": 475
        },
        {
          "level": 130,
          "silver": 10000000,
          "materialId": 60016,
          "materialAmount": 500
        },
        {
          "level": 133,
          "silver": 10500000,
          "materialId": 60016,
          "materialAmount": 525
        },
        {
          "level": 136,
          "silver": 11000000,
          "materialId": 60016,
          "materialAmount": 550
        },
        {
          "level": 139,
          "silver": 11500000,
          "materialId": 60016,
          "materialAmount": 575
        },
        {
          "level": 142,
          "silver": 12000000,
          "materialId": 60016,
          "materialAmount": 600
        },
        {
          "level": 145,
          "silver": 12500000,
          "materialId": 60016,
          "materialAmount": 625
        },
        {
          "level": 148,
          "silver": 13000000,
          "materialId": 60016,
          "materialAmount": 650
        },
        {
          "level": 151,
          "silver": 13500000,
          "materialId": 60016,
          "materialAmount": 675
        },
        {
          "level": 154,
          "silver": 14000000,
          "materialId": 60016,
          "materialAmount": 700
        },
        {
          "level": 157,
          "silver": 14500000,
          "materialId": 60016,
          "materialAmount": 725
        },
        {
          "level": 160,
          "silver": 15000000,
          "materialId": 60016,
          "materialAmount": 750
        },
        {
          "level": 163,
          "silver": 15500000,
          "materialId": 60016,
          "materialAmount": 775
        },
        {
          "level": 166,
          "silver": 16000000,
          "materialId": 60016,
          "materialAmount": 800
        },
        {
          "level": 169,
          "silver": 16500000,
          "materialId": 60016,
          "materialAmount": 825
        },
        {
          "level": 172,
          "silver": 17000000,
          "materialId": 60016,
          "materialAmount": 850
        },
        {
          "level": 175,
          "silver": 17500000,
          "materialId": 60016,
          "materialAmount": 875
        },
        {
          "level": 178,
          "silver": 18000000,
          "materialId": 60016,
          "materialAmount": 900
        },
        {
          "level": 181,
          "silver": 18500000,
          "materialId": 60016,
          "materialAmount": 925
        },
        {
          "level": 184,
          "silver": 19000000,
          "materialId": 60016,
          "materialAmount": 950
        },
        {
          "level": 187,
          "silver": 19500000,
          "materialId": 60016,
          "materialAmount": 975
        },
        {
          "level": 190,
          "silver": 20000000,
          "materialId": 60016,
          "materialAmount": 1000
        },
        {
          "level": 193,
          "silver": 20500000,
          "materialId": 60016,
          "materialAmount": 1025
        },
        {
          "level": 196,
          "silver": 21000000,
          "materialId": 60016,
          "materialAmount": 1050
        },
        {
          "level": 199,
          "silver": 21500000,
          "materialId": 60016,
          "materialAmount": 1075
        },
        {
          "level": 202,
          "silver": 22000000,
          "materialId": 60016,
          "materialAmount": 1100
        },
        {
          "level": 205,
          "silver": 22500000,
          "materialId": 60016,
          "materialAmount": 1125
        },
        {
          "level": 208,
          "silver": 23000000,
          "materialId": 60016,
          "materialAmount": 1150
        },
        {
          "level": 211,
          "silver": 23500000,
          "materialId": 60016,
          "materialAmount": 1175
        },
        {
          "level": 214,
          "silver": 24000000,
          "materialId": 60016,
          "materialAmount": 1200
        },
        {
          "level": 217,
          "silver": 24500000,
          "materialId": 60016,
          "materialAmount": 1225
        },
        {
          "level": 220,
          "silver": 25000000,
          "materialId": 60016,
          "materialAmount": 1250
        },
        {
          "level": 223,
          "silver": 25500000,
          "materialId": 60016,
          "materialAmount": 1275
        },
        {
          "level": 226,
          "silver": 26000000,
          "materialId": 60016,
          "materialAmount": 1300
        },
        {
          "level": 229,
          "silver": 26500000,
          "materialId": 60016,
          "materialAmount": 1325
        },
        {
          "level": 232,
          "silver": 27000000,
          "materialId": 60016,
          "materialAmount": 1350
        },
        {
          "level": 235,
          "silver": 27500000,
          "materialId": 60016,
          "materialAmount": 1375
        },
        {
          "level": 238,
          "silver": 28000000,
          "materialId": 60016,
          "materialAmount": 1400
        },
        {
          "level": 241,
          "silver": 28500000,
          "materialId": 60016,
          "materialAmount": 1425
        },
        {
          "level": 244,
          "silver": 29000000,
          "materialId": 60016,
          "materialAmount": 1450
        },
        {
          "level": 247,
          "silver": 29500000,
          "materialId": 60016,
          "materialAmount": 1475
        },
        {
          "level": 250,
          "silver": 30000000,
          "materialId": 60016,
          "materialAmount": 1500
        },
        {
          "level": 253,
          "silver": 30500000,
          "materialId": 60016,
          "materialAmount": 1525
        },
        {
          "level": 256,
          "silver": 31000000,
          "materialId": 60016,
          "materialAmount": 1550
        },
        {
          "level": 259,
          "silver": 31500000,
          "materialId": 60016,
          "materialAmount": 1575
        },
        {
          "level": 262,
          "silver": 32000000,
          "materialId": 60016,
          "materialAmount": 1600
        },
        {
          "level": 265,
          "silver": 32500000,
          "materialId": 60016,
          "materialAmount": 1625
        },
        {
          "level": 268,
          "silver": 33000000,
          "materialId": 60016,
          "materialAmount": 1650
        },
        {
          "level": 271,
          "silver": 33500000,
          "materialId": 60016,
          "materialAmount": 1675
        },
        {
          "level": 274,
          "silver": 34000000,
          "materialId": 60016,
          "materialAmount": 1700
        },
        {
          "level": 277,
          "silver": 34500000,
          "materialId": 60016,
          "materialAmount": 1725
        },
        {
          "level": 280,
          "silver": 35000000,
          "materialId": 60016,
          "materialAmount": 1750
        }
      ]
    },
    {
      "id": 4,
      "rows": [
        {
          "level": 15,
          "silver": 800000,
          "materialId": 60016,
          "materialAmount": 40
        },
        {
          "level": 20,
          "silver": 1600000,
          "materialId": 60016,
          "materialAmount": 80
        },
        {
          "level": 30,
          "silver": 2400000,
          "materialId": 60016,
          "materialAmount": 120
        },
        {
          "level": 40,
          "silver": 3200000,
          "materialId": 60016,
          "materialAmount": 160
        },
        {
          "level": 50,
          "silver": 4000000,
          "materialId": 60016,
          "materialAmount": 200
        },
        {
          "level": 60,
          "silver": 4800000,
          "materialId": 60016,
          "materialAmount": 240
        },
        {
          "level": 70,
          "silver": 5600000,
          "materialId": 60016,
          "materialAmount": 280
        },
        {
          "level": 80,
          "silver": 6400000,
          "materialId": 60016,
          "materialAmount": 320
        },
        {
          "level": 90,
          "silver": 7200000,
          "materialId": 60016,
          "materialAmount": 360
        },
        {
          "level": 100,
          "silver": 8000000,
          "materialId": 60016,
          "materialAmount": 400
        },
        {
          "level": 103,
          "silver": 8800000,
          "materialId": 60016,
          "materialAmount": 440
        },
        {
          "level": 106,
          "silver": 9600000,
          "materialId": 60016,
          "materialAmount": 480
        },
        {
          "level": 109,
          "silver": 10400000,
          "materialId": 60016,
          "materialAmount": 520
        },
        {
          "level": 112,
          "silver": 11200000,
          "materialId": 60016,
          "materialAmount": 560
        },
        {
          "level": 115,
          "silver": 12000000,
          "materialId": 60016,
          "materialAmount": 600
        },
        {
          "level": 118,
          "silver": 12800000,
          "materialId": 60016,
          "materialAmount": 640
        },
        {
          "level": 121,
          "silver": 13600000,
          "materialId": 60016,
          "materialAmount": 680
        },
        {
          "level": 124,
          "silver": 14400000,
          "materialId": 60016,
          "materialAmount": 720
        },
        {
          "level": 127,
          "silver": 15200000,
          "materialId": 60016,
          "materialAmount": 760
        },
        {
          "level": 130,
          "silver": 16000000,
          "materialId": 60016,
          "materialAmount": 800
        },
        {
          "level": 133,
          "silver": 16800000,
          "materialId": 60016,
          "materialAmount": 840
        },
        {
          "level": 136,
          "silver": 17600000,
          "materialId": 60016,
          "materialAmount": 880
        },
        {
          "level": 139,
          "silver": 18400000,
          "materialId": 60016,
          "materialAmount": 920
        },
        {
          "level": 142,
          "silver": 19200000,
          "materialId": 60016,
          "materialAmount": 960
        },
        {
          "level": 145,
          "silver": 20000000,
          "materialId": 60016,
          "materialAmount": 1000
        },
        {
          "level": 148,
          "silver": 20800000,
          "materialId": 60016,
          "materialAmount": 1040
        },
        {
          "level": 151,
          "silver": 21600000,
          "materialId": 60016,
          "materialAmount": 1080
        },
        {
          "level": 154,
          "silver": 22400000,
          "materialId": 60016,
          "materialAmount": 1120
        },
        {
          "level": 157,
          "silver": 23200000,
          "materialId": 60016,
          "materialAmount": 1160
        },
        {
          "level": 160,
          "silver": 24000000,
          "materialId": 60016,
          "materialAmount": 1200
        },
        {
          "level": 163,
          "silver": 24800000,
          "materialId": 60016,
          "materialAmount": 1240
        },
        {
          "level": 166,
          "silver": 25600000,
          "materialId": 60016,
          "materialAmount": 1280
        },
        {
          "level": 169,
          "silver": 26400000,
          "materialId": 60016,
          "materialAmount": 1320
        },
        {
          "level": 172,
          "silver": 27200000,
          "materialId": 60016,
          "materialAmount": 1360
        },
        {
          "level": 175,
          "silver": 28000000,
          "materialId": 60016,
          "materialAmount": 1400
        },
        {
          "level": 178,
          "silver": 28800000,
          "materialId": 60016,
          "materialAmount": 1440
        },
        {
          "level": 181,
          "silver": 29600000,
          "materialId": 60016,
          "materialAmount": 1480
        },
        {
          "level": 184,
          "silver": 30400000,
          "materialId": 60016,
          "materialAmount": 1520
        },
        {
          "level": 187,
          "silver": 31200000,
          "materialId": 60016,
          "materialAmount": 1560
        },
        {
          "level": 190,
          "silver": 32000000,
          "materialId": 60016,
          "materialAmount": 1600
        },
        {
          "level": 193,
          "silver": 32800000,
          "materialId": 60016,
          "materialAmount": 1640
        },
        {
          "level": 196,
          "silver": 33600000,
          "materialId": 60016,
          "materialAmount": 1680
        },
        {
          "level": 199,
          "silver": 34400000,
          "materialId": 60016,
          "materialAmount": 1720
        },
        {
          "level": 202,
          "silver": 35200000,
          "materialId": 60016,
          "materialAmount": 1760
        },
        {
          "level": 205,
          "silver": 36000000,
          "materialId": 60016,
          "materialAmount": 1800
        },
        {
          "level": 208,
          "silver": 36800000,
          "materialId": 60016,
          "materialAmount": 1840
        },
        {
          "level": 211,
          "silver": 37600000,
          "materialId": 60016,
          "materialAmount": 1880
        },
        {
          "level": 214,
          "silver": 38400000,
          "materialId": 60016,
          "materialAmount": 1920
        },
        {
          "level": 217,
          "silver": 39200000,
          "materialId": 60016,
          "materialAmount": 1960
        },
        {
          "level": 220,
          "silver": 40000000,
          "materialId": 60016,
          "materialAmount": 2000
        },
        {
          "level": 223,
          "silver": 40800000,
          "materialId": 60016,
          "materialAmount": 2040
        },
        {
          "level": 226,
          "silver": 41600000,
          "materialId": 60016,
          "materialAmount": 2080
        },
        {
          "level": 229,
          "silver": 42400000,
          "materialId": 60016,
          "materialAmount": 2120
        },
        {
          "level": 232,
          "silver": 43200000,
          "materialId": 60016,
          "materialAmount": 2160
        },
        {
          "level": 235,
          "silver": 44000000,
          "materialId": 60016,
          "materialAmount": 2200
        },
        {
          "level": 238,
          "silver": 44800000,
          "materialId": 60016,
          "materialAmount": 2240
        },
        {
          "level": 241,
          "silver": 45600000,
          "materialId": 60016,
          "materialAmount": 2280
        },
        {
          "level": 244,
          "silver": 46400000,
          "materialId": 60016,
          "materialAmount": 2320
        },
        {
          "level": 247,
          "silver": 47200000,
          "materialId": 60016,
          "materialAmount": 2360
        },
        {
          "level": 250,
          "silver": 48000000,
          "materialId": 60016,
          "materialAmount": 2400
        },
        {
          "level": 253,
          "silver": 48800000,
          "materialId": 60016,
          "materialAmount": 2440
        },
        {
          "level": 256,
          "silver": 49600000,
          "materialId": 60016,
          "materialAmount": 2480
        },
        {
          "level": 259,
          "silver": 50400000,
          "materialId": 60016,
          "materialAmount": 2520
        },
        {
          "level": 262,
          "silver": 51200000,
          "materialId": 60016,
          "materialAmount": 2560
        },
        {
          "level": 265,
          "silver": 52000000,
          "materialId": 60016,
          "materialAmount": 2600
        },
        {
          "level": 268,
          "silver": 52800000,
          "materialId": 60016,
          "materialAmount": 2640
        },
        {
          "level": 271,
          "silver": 53600000,
          "materialId": 60016,
          "materialAmount": 2680
        },
        {
          "level": 274,
          "silver": 54400000,
          "materialId": 60016,
          "materialAmount": 2720
        },
        {
          "level": 277,
          "silver": 55200000,
          "materialId": 60016,
          "materialAmount": 2760
        },
        {
          "level": 280,
          "silver": 56000000,
          "materialId": 60016,
          "materialAmount": 2800
        }
      ]
    },
    {
      "id": 5,
      "rows": [
        {
          "level": 15,
          "silver": 300000,
          "materialId": 60016,
          "materialAmount": 10
        },
        {
          "level": 20,
          "silver": 600000,
          "materialId": 60016,
          "materialAmount": 20
        },
        {
          "level": 30,
          "silver": 900000,
          "materialId": 60016,
          "materialAmount": 30
        },
        {
          "level": 40,
          "silver": 1200000,
          "materialId": 60016,
          "materialAmount": 40
        },
        {
          "level": 50,
          "silver": 1500000,
          "materialId": 60016,
          "materialAmount": 50
        },
        {
          "level": 60,
          "silver": 1800000,
          "materialId": 60016,
          "materialAmount": 60
        },
        {
          "level": 70,
          "silver": 2100000,
          "materialId": 60016,
          "materialAmount": 70
        },
        {
          "level": 80,
          "silver": 2400000,
          "materialId": 60016,
          "materialAmount": 80
        },
        {
          "level": 90,
          "silver": 2700000,
          "materialId": 60016,
          "materialAmount": 90
        },
        {
          "level": 100,
          "silver": 3000000,
          "materialId": 60016,
          "materialAmount": 100
        },
        {
          "level": 103,
          "silver": 3300000,
          "materialId": 60016,
          "materialAmount": 110
        },
        {
          "level": 106,
          "silver": 3600000,
          "materialId": 60016,
          "materialAmount": 120
        },
        {
          "level": 109,
          "silver": 3900000,
          "materialId": 60016,
          "materialAmount": 130
        },
        {
          "level": 112,
          "silver": 4200000,
          "materialId": 60016,
          "materialAmount": 140
        },
        {
          "level": 115,
          "silver": 4500000,
          "materialId": 60016,
          "materialAmount": 150
        },
        {
          "level": 118,
          "silver": 4800000,
          "materialId": 60016,
          "materialAmount": 160
        },
        {
          "level": 121,
          "silver": 5100000,
          "materialId": 60016,
          "materialAmount": 170
        },
        {
          "level": 124,
          "silver": 5400000,
          "materialId": 60016,
          "materialAmount": 180
        },
        {
          "level": 127,
          "silver": 5700000,
          "materialId": 60016,
          "materialAmount": 190
        },
        {
          "level": 130,
          "silver": 6000000,
          "materialId": 60016,
          "materialAmount": 200
        },
        {
          "level": 133,
          "silver": 6300000,
          "materialId": 60016,
          "materialAmount": 210
        },
        {
          "level": 136,
          "silver": 6600000,
          "materialId": 60016,
          "materialAmount": 220
        },
        {
          "level": 139,
          "silver": 6900000,
          "materialId": 60016,
          "materialAmount": 230
        },
        {
          "level": 142,
          "silver": 7200000,
          "materialId": 60016,
          "materialAmount": 240
        },
        {
          "level": 145,
          "silver": 7500000,
          "materialId": 60016,
          "materialAmount": 250
        },
        {
          "level": 148,
          "silver": 7800000,
          "materialId": 60016,
          "materialAmount": 260
        },
        {
          "level": 151,
          "silver": 8100000,
          "materialId": 60016,
          "materialAmount": 270
        },
        {
          "level": 154,
          "silver": 8400000,
          "materialId": 60016,
          "materialAmount": 280
        },
        {
          "level": 157,
          "silver": 8700000,
          "materialId": 60016,
          "materialAmount": 290
        },
        {
          "level": 160,
          "silver": 9000000,
          "materialId": 60016,
          "materialAmount": 300
        },
        {
          "level": 163,
          "silver": 9300000,
          "materialId": 60016,
          "materialAmount": 310
        },
        {
          "level": 166,
          "silver": 9600000,
          "materialId": 60016,
          "materialAmount": 320
        },
        {
          "level": 169,
          "silver": 9900000,
          "materialId": 60016,
          "materialAmount": 330
        },
        {
          "level": 172,
          "silver": 10200000,
          "materialId": 60016,
          "materialAmount": 340
        },
        {
          "level": 175,
          "silver": 10500000,
          "materialId": 60016,
          "materialAmount": 350
        },
        {
          "level": 178,
          "silver": 10800000,
          "materialId": 60016,
          "materialAmount": 360
        },
        {
          "level": 181,
          "silver": 11100000,
          "materialId": 60016,
          "materialAmount": 370
        },
        {
          "level": 184,
          "silver": 11400000,
          "materialId": 60016,
          "materialAmount": 380
        },
        {
          "level": 187,
          "silver": 11700000,
          "materialId": 60016,
          "materialAmount": 390
        },
        {
          "level": 190,
          "silver": 12000000,
          "materialId": 60016,
          "materialAmount": 400
        },
        {
          "level": 193,
          "silver": 12300000,
          "materialId": 60016,
          "materialAmount": 410
        },
        {
          "level": 196,
          "silver": 12600000,
          "materialId": 60016,
          "materialAmount": 420
        },
        {
          "level": 199,
          "silver": 12900000,
          "materialId": 60016,
          "materialAmount": 430
        },
        {
          "level": 202,
          "silver": 13200000,
          "materialId": 60016,
          "materialAmount": 440
        },
        {
          "level": 205,
          "silver": 13500000,
          "materialId": 60016,
          "materialAmount": 450
        },
        {
          "level": 208,
          "silver": 13800000,
          "materialId": 60016,
          "materialAmount": 460
        },
        {
          "level": 211,
          "silver": 14100000,
          "materialId": 60016,
          "materialAmount": 470
        },
        {
          "level": 214,
          "silver": 14400000,
          "materialId": 60016,
          "materialAmount": 480
        },
        {
          "level": 217,
          "silver": 14700000,
          "materialId": 60016,
          "materialAmount": 490
        },
        {
          "level": 220,
          "silver": 15000000,
          "materialId": 60016,
          "materialAmount": 500
        },
        {
          "level": 223,
          "silver": 15300000,
          "materialId": 60016,
          "materialAmount": 510
        },
        {
          "level": 226,
          "silver": 15600000,
          "materialId": 60016,
          "materialAmount": 520
        },
        {
          "level": 229,
          "silver": 15900000,
          "materialId": 60016,
          "materialAmount": 530
        },
        {
          "level": 232,
          "silver": 16200000,
          "materialId": 60016,
          "materialAmount": 540
        },
        {
          "level": 235,
          "silver": 16500000,
          "materialId": 60016,
          "materialAmount": 550
        },
        {
          "level": 238,
          "silver": 16800000,
          "materialId": 60016,
          "materialAmount": 560
        },
        {
          "level": 241,
          "silver": 17100000,
          "materialId": 60016,
          "materialAmount": 570
        },
        {
          "level": 244,
          "silver": 17400000,
          "materialId": 60016,
          "materialAmount": 580
        },
        {
          "level": 247,
          "silver": 17700000,
          "materialId": 60016,
          "materialAmount": 590
        },
        {
          "level": 250,
          "silver": 18000000,
          "materialId": 60016,
          "materialAmount": 600
        },
        {
          "level": 253,
          "silver": 18300000,
          "materialId": 60016,
          "materialAmount": 610
        },
        {
          "level": 256,
          "silver": 18600000,
          "materialId": 60016,
          "materialAmount": 620
        },
        {
          "level": 259,
          "silver": 18900000,
          "materialId": 60016,
          "materialAmount": 630
        },
        {
          "level": 262,
          "silver": 19200000,
          "materialId": 60016,
          "materialAmount": 640
        },
        {
          "level": 265,
          "silver": 19500000,
          "materialId": 60016,
          "materialAmount": 650
        },
        {
          "level": 268,
          "silver": 19800000,
          "materialId": 60016,
          "materialAmount": 660
        },
        {
          "level": 271,
          "silver": 20100000,
          "materialId": 60016,
          "materialAmount": 670
        },
        {
          "level": 274,
          "silver": 20400000,
          "materialId": 60016,
          "materialAmount": 680
        },
        {
          "level": 277,
          "silver": 20700000,
          "materialId": 60016,
          "materialAmount": 690
        },
        {
          "level": 280,
          "silver": 21000000,
          "materialId": 60016,
          "materialAmount": 700
        }
      ]
    }
  ],
  "items": [
    {
      "id": 1,
      "dbId": 80001,
      "names": {
        "male": "炎马烈铠",
        "female": "天马霓裳"
      },
      "quality": 5,
      "score": 10,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-01.png",
          "big": "assets/fashion-gallery/male-big-01.png",
          "hero": "assets/fashion-gallery/male-hero-01.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-01.png",
          "big": "assets/fashion-gallery/female-big-01.png",
          "hero": "assets/fashion-gallery/female-hero-01.png"
        }
      },
      "synthesis": null,
      "baseAttributes": [
        {
          "id": 1,
          "amount": 1000
        },
        {
          "id": 4,
          "amount": 100
        },
        {
          "id": 5,
          "amount": 100
        },
        {
          "id": 9,
          "amount": 100
        },
        {
          "id": 6,
          "amount": 100
        },
        {
          "id": 7,
          "amount": 100
        },
        {
          "id": 8,
          "amount": 100
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 500
        },
        {
          "id": 9,
          "amount": 50
        },
        {
          "id": 4,
          "amount": 50
        },
        {
          "id": 5,
          "amount": 50
        },
        {
          "id": 6,
          "amount": 20
        },
        {
          "id": 7,
          "amount": 20
        },
        {
          "id": 8,
          "amount": 20
        }
      ],
      "strengthenPlan": 1,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 51,
          "amount": 30000
        },
        {
          "star": 2,
          "attributeId": 51,
          "amount": 60000
        },
        {
          "star": 3,
          "attributeId": 51,
          "amount": 90000
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 40
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 80
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 160
        }
      ],
      "strengthenAttributes": [
        {
          "level": 5,
          "attributeId": 51,
          "amount": 1000
        },
        {
          "level": 10,
          "attributeId": 100,
          "amount": 325
        },
        {
          "level": 15,
          "attributeId": 54,
          "amount": 200
        },
        {
          "level": 15,
          "attributeId": 55,
          "amount": 200
        },
        {
          "level": 20,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 25,
          "attributeId": 100,
          "amount": 600
        },
        {
          "level": 30,
          "attributeId": 100,
          "amount": 700
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 800
        },
        {
          "level": 40,
          "attributeId": 100,
          "amount": 900
        },
        {
          "level": 45,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 50,
          "attributeId": 100,
          "amount": 1100
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 1200
        },
        {
          "level": 60,
          "attributeId": 100,
          "amount": 1300
        },
        {
          "level": 65,
          "attributeId": 100,
          "amount": 1400
        },
        {
          "level": 70,
          "attributeId": 100,
          "amount": 1500
        }
      ]
    },
    {
      "id": 2,
      "dbId": 80002,
      "names": {
        "male": "皇帝新装",
        "female": "女王新装"
      },
      "quality": 5,
      "score": 8,
      "assets": {
        "male": {
          "hero": "assets/fashion-gallery/male-hero-02.png",
          "small": "assets/fashion-gallery/male-small-02.png",
          "big": "assets/fashion-gallery/male-big-02.png"
        },
        "female": {
          "hero": "assets/fashion-gallery/female-hero-02.png",
          "small": "assets/fashion-gallery/female-small-02.png",
          "big": "assets/fashion-gallery/female-big-02.png"
        }
      },
      "synthesis": {
        "id": 1800025,
        "names": {
          "male": "帝王新装碎片",
          "female": "女王新装碎片"
        },
        "name": "帝王新装碎片",
        "amount": 10
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 500
        },
        {
          "id": 4,
          "amount": 50
        },
        {
          "id": 5,
          "amount": 50
        },
        {
          "id": 9,
          "amount": 50
        },
        {
          "id": 6,
          "amount": 100
        },
        {
          "id": 7,
          "amount": 100
        },
        {
          "id": 8,
          "amount": 100
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 250
        },
        {
          "id": 9,
          "amount": 25
        },
        {
          "id": 4,
          "amount": 25
        },
        {
          "id": 5,
          "amount": 25
        },
        {
          "id": 6,
          "amount": 10
        },
        {
          "id": 7,
          "amount": 10
        },
        {
          "id": 8,
          "amount": 10
        }
      ],
      "strengthenPlan": 1,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 51,
          "amount": 30000
        },
        {
          "star": 2,
          "attributeId": 51,
          "amount": 60000
        },
        {
          "star": 3,
          "attributeId": 51,
          "amount": 90000
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 40
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 80
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 160
        }
      ],
      "strengthenAttributes": [
        {
          "level": 5,
          "attributeId": 51,
          "amount": 1000
        },
        {
          "level": 10,
          "attributeId": 100,
          "amount": 325
        },
        {
          "level": 15,
          "attributeId": 54,
          "amount": 200
        },
        {
          "level": 15,
          "attributeId": 55,
          "amount": 200
        },
        {
          "level": 20,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 25,
          "attributeId": 100,
          "amount": 600
        },
        {
          "level": 30,
          "attributeId": 100,
          "amount": 700
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 800
        },
        {
          "level": 40,
          "attributeId": 100,
          "amount": 900
        },
        {
          "level": 45,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 50,
          "attributeId": 100,
          "amount": 1100
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 1200
        },
        {
          "level": 60,
          "attributeId": 100,
          "amount": 1300
        },
        {
          "level": 65,
          "attributeId": 100,
          "amount": 1400
        },
        {
          "level": 70,
          "attributeId": 100,
          "amount": 1500
        }
      ]
    },
    {
      "id": 3,
      "dbId": 80003,
      "names": {
        "male": "塞鹰青甲",
        "female": "饰蝶缕衣"
      },
      "quality": 5,
      "score": 10,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-03.png",
          "big": "assets/fashion-gallery/male-big-03.png",
          "hero": "assets/fashion-gallery/male-hero-03.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-03.png",
          "big": "assets/fashion-gallery/female-big-03.png",
          "hero": "assets/fashion-gallery/female-hero-03.png"
        }
      },
      "synthesis": null,
      "baseAttributes": [
        {
          "id": 1,
          "amount": 1000
        },
        {
          "id": 4,
          "amount": 100
        },
        {
          "id": 5,
          "amount": 100
        },
        {
          "id": 9,
          "amount": 100
        },
        {
          "id": 6,
          "amount": 100
        },
        {
          "id": 7,
          "amount": 100
        },
        {
          "id": 8,
          "amount": 100
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 500
        },
        {
          "id": 9,
          "amount": 50
        },
        {
          "id": 4,
          "amount": 50
        },
        {
          "id": 5,
          "amount": 50
        },
        {
          "id": 6,
          "amount": 20
        },
        {
          "id": 7,
          "amount": 20
        },
        {
          "id": 8,
          "amount": 20
        }
      ],
      "strengthenPlan": 1,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 51,
          "amount": 30000
        },
        {
          "star": 2,
          "attributeId": 51,
          "amount": 60000
        },
        {
          "star": 3,
          "attributeId": 51,
          "amount": 90000
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 40
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 80
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 160
        }
      ],
      "strengthenAttributes": [
        {
          "level": 5,
          "attributeId": 51,
          "amount": 1000
        },
        {
          "level": 10,
          "attributeId": 100,
          "amount": 325
        },
        {
          "level": 15,
          "attributeId": 54,
          "amount": 200
        },
        {
          "level": 15,
          "attributeId": 55,
          "amount": 200
        },
        {
          "level": 20,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 25,
          "attributeId": 100,
          "amount": 600
        },
        {
          "level": 30,
          "attributeId": 100,
          "amount": 700
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 800
        },
        {
          "level": 40,
          "attributeId": 100,
          "amount": 900
        },
        {
          "level": 45,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 50,
          "attributeId": 100,
          "amount": 1100
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 1200
        },
        {
          "level": 60,
          "attributeId": 100,
          "amount": 1300
        },
        {
          "level": 65,
          "attributeId": 100,
          "amount": 1400
        },
        {
          "level": 70,
          "attributeId": 100,
          "amount": 1500
        }
      ]
    },
    {
      "id": 4,
      "dbId": 80004,
      "names": {
        "male": "炫酷水龙",
        "female": "荷塘月色"
      },
      "quality": 5,
      "score": 10,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-04.png",
          "big": "assets/fashion-gallery/male-big-04.png",
          "hero": "assets/fashion-gallery/male-hero-04.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-04.png",
          "big": "assets/fashion-gallery/female-big-04.png",
          "hero": "assets/fashion-gallery/female-hero-04.png"
        }
      },
      "synthesis": null,
      "baseAttributes": [
        {
          "id": 1,
          "amount": 1000
        },
        {
          "id": 4,
          "amount": 100
        },
        {
          "id": 5,
          "amount": 100
        },
        {
          "id": 9,
          "amount": 100
        },
        {
          "id": 6,
          "amount": 100
        },
        {
          "id": 7,
          "amount": 100
        },
        {
          "id": 8,
          "amount": 100
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 500
        },
        {
          "id": 9,
          "amount": 50
        },
        {
          "id": 4,
          "amount": 50
        },
        {
          "id": 5,
          "amount": 50
        },
        {
          "id": 6,
          "amount": 20
        },
        {
          "id": 7,
          "amount": 20
        },
        {
          "id": 8,
          "amount": 20
        }
      ],
      "strengthenPlan": 1,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 51,
          "amount": 30000
        },
        {
          "star": 2,
          "attributeId": 51,
          "amount": 60000
        },
        {
          "star": 3,
          "attributeId": 51,
          "amount": 90000
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 40
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 80
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 160
        }
      ],
      "strengthenAttributes": [
        {
          "level": 5,
          "attributeId": 51,
          "amount": 1000
        },
        {
          "level": 10,
          "attributeId": 100,
          "amount": 325
        },
        {
          "level": 15,
          "attributeId": 54,
          "amount": 200
        },
        {
          "level": 15,
          "attributeId": 55,
          "amount": 200
        },
        {
          "level": 20,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 25,
          "attributeId": 100,
          "amount": 600
        },
        {
          "level": 30,
          "attributeId": 100,
          "amount": 700
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 800
        },
        {
          "level": 40,
          "attributeId": 100,
          "amount": 900
        },
        {
          "level": 45,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 50,
          "attributeId": 100,
          "amount": 1100
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 1200
        },
        {
          "level": 60,
          "attributeId": 100,
          "amount": 1300
        },
        {
          "level": 65,
          "attributeId": 100,
          "amount": 1400
        },
        {
          "level": 70,
          "attributeId": 100,
          "amount": 1500
        }
      ]
    },
    {
      "id": 5,
      "dbId": 80005,
      "names": {
        "male": "春江花月夜",
        "female": "月影饮琉璃"
      },
      "quality": 5,
      "score": 12,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-05.png",
          "big": "assets/fashion-gallery/male-big-05.png",
          "hero": "assets/fashion-gallery/male-hero-05.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-05.png",
          "big": "assets/fashion-gallery/female-big-05.png",
          "hero": "assets/fashion-gallery/female-hero-05.png"
        }
      },
      "synthesis": null,
      "baseAttributes": [
        {
          "id": 1,
          "amount": 1000
        },
        {
          "id": 4,
          "amount": 100
        },
        {
          "id": 5,
          "amount": 100
        },
        {
          "id": 9,
          "amount": 100
        },
        {
          "id": 6,
          "amount": 100
        },
        {
          "id": 7,
          "amount": 100
        },
        {
          "id": 8,
          "amount": 100
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 500
        },
        {
          "id": 9,
          "amount": 50
        },
        {
          "id": 4,
          "amount": 50
        },
        {
          "id": 5,
          "amount": 50
        },
        {
          "id": 6,
          "amount": 20
        },
        {
          "id": 7,
          "amount": 20
        },
        {
          "id": 8,
          "amount": 20
        }
      ],
      "strengthenPlan": 1,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 51,
          "amount": 30000
        },
        {
          "star": 2,
          "attributeId": 51,
          "amount": 60000
        },
        {
          "star": 3,
          "attributeId": 51,
          "amount": 90000
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 40
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 80
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 160
        }
      ],
      "strengthenAttributes": [
        {
          "level": 5,
          "attributeId": 51,
          "amount": 1000
        },
        {
          "level": 10,
          "attributeId": 100,
          "amount": 325
        },
        {
          "level": 15,
          "attributeId": 54,
          "amount": 200
        },
        {
          "level": 15,
          "attributeId": 55,
          "amount": 200
        },
        {
          "level": 20,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 25,
          "attributeId": 100,
          "amount": 600
        },
        {
          "level": 30,
          "attributeId": 100,
          "amount": 700
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 800
        },
        {
          "level": 40,
          "attributeId": 100,
          "amount": 900
        },
        {
          "level": 45,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 50,
          "attributeId": 100,
          "amount": 1100
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 1200
        },
        {
          "level": 60,
          "attributeId": 100,
          "amount": 1300
        },
        {
          "level": 65,
          "attributeId": 100,
          "amount": 1400
        },
        {
          "level": 70,
          "attributeId": 100,
          "amount": 1500
        }
      ]
    },
    {
      "id": 6,
      "dbId": 80006,
      "names": {
        "male": "雪山飞狐",
        "female": "素雪赤霞"
      },
      "quality": 5,
      "score": 12,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-06.png",
          "big": "assets/fashion-gallery/male-big-06.png",
          "hero": "assets/fashion-gallery/male-hero-06.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-06.png",
          "big": "assets/fashion-gallery/female-big-06.png",
          "hero": "assets/fashion-gallery/female-hero-06.png"
        }
      },
      "synthesis": null,
      "baseAttributes": [
        {
          "id": 1,
          "amount": 1000
        },
        {
          "id": 4,
          "amount": 100
        },
        {
          "id": 5,
          "amount": 100
        },
        {
          "id": 9,
          "amount": 100
        },
        {
          "id": 6,
          "amount": 100
        },
        {
          "id": 7,
          "amount": 100
        },
        {
          "id": 8,
          "amount": 100
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 500
        },
        {
          "id": 9,
          "amount": 50
        },
        {
          "id": 4,
          "amount": 50
        },
        {
          "id": 5,
          "amount": 50
        },
        {
          "id": 6,
          "amount": 20
        },
        {
          "id": 7,
          "amount": 20
        },
        {
          "id": 8,
          "amount": 20
        }
      ],
      "strengthenPlan": 1,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 51,
          "amount": 30000
        },
        {
          "star": 2,
          "attributeId": 51,
          "amount": 60000
        },
        {
          "star": 3,
          "attributeId": 51,
          "amount": 90000
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 40
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 80
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 160
        }
      ],
      "strengthenAttributes": [
        {
          "level": 5,
          "attributeId": 51,
          "amount": 1000
        },
        {
          "level": 10,
          "attributeId": 100,
          "amount": 325
        },
        {
          "level": 15,
          "attributeId": 54,
          "amount": 200
        },
        {
          "level": 15,
          "attributeId": 55,
          "amount": 200
        },
        {
          "level": 20,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 25,
          "attributeId": 100,
          "amount": 600
        },
        {
          "level": 30,
          "attributeId": 100,
          "amount": 700
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 800
        },
        {
          "level": 40,
          "attributeId": 100,
          "amount": 900
        },
        {
          "level": 45,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 50,
          "attributeId": 100,
          "amount": 1100
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 1200
        },
        {
          "level": 60,
          "attributeId": 100,
          "amount": 1300
        },
        {
          "level": 65,
          "attributeId": 100,
          "amount": 1400
        },
        {
          "level": 70,
          "attributeId": 100,
          "amount": 1500
        }
      ]
    },
    {
      "id": 7,
      "dbId": 80007,
      "names": {
        "male": "顺手牵羊",
        "female": "吉羊九泰"
      },
      "quality": 5,
      "score": 12,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-07.png",
          "big": "assets/fashion-gallery/male-big-07.png",
          "hero": "assets/fashion-gallery/male-hero-07.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-07.png",
          "big": "assets/fashion-gallery/female-big-07.png",
          "hero": "assets/fashion-gallery/female-hero-07.png"
        }
      },
      "synthesis": null,
      "baseAttributes": [
        {
          "id": 1,
          "amount": 1000
        },
        {
          "id": 4,
          "amount": 100
        },
        {
          "id": 5,
          "amount": 100
        },
        {
          "id": 9,
          "amount": 100
        },
        {
          "id": 6,
          "amount": 100
        },
        {
          "id": 7,
          "amount": 100
        },
        {
          "id": 8,
          "amount": 100
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 500
        },
        {
          "id": 9,
          "amount": 50
        },
        {
          "id": 4,
          "amount": 50
        },
        {
          "id": 5,
          "amount": 50
        },
        {
          "id": 6,
          "amount": 20
        },
        {
          "id": 7,
          "amount": 20
        },
        {
          "id": 8,
          "amount": 20
        }
      ],
      "strengthenPlan": 1,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 51,
          "amount": 30000
        },
        {
          "star": 2,
          "attributeId": 51,
          "amount": 60000
        },
        {
          "star": 3,
          "attributeId": 51,
          "amount": 90000
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 40
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 80
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 160
        }
      ],
      "strengthenAttributes": [
        {
          "level": 5,
          "attributeId": 51,
          "amount": 1000
        },
        {
          "level": 10,
          "attributeId": 100,
          "amount": 325
        },
        {
          "level": 15,
          "attributeId": 54,
          "amount": 200
        },
        {
          "level": 15,
          "attributeId": 55,
          "amount": 200
        },
        {
          "level": 20,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 25,
          "attributeId": 100,
          "amount": 600
        },
        {
          "level": 30,
          "attributeId": 100,
          "amount": 700
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 800
        },
        {
          "level": 40,
          "attributeId": 100,
          "amount": 900
        },
        {
          "level": 45,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 50,
          "attributeId": 100,
          "amount": 1100
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 1200
        },
        {
          "level": 60,
          "attributeId": 100,
          "amount": 1300
        },
        {
          "level": 65,
          "attributeId": 100,
          "amount": 1400
        },
        {
          "level": 70,
          "attributeId": 100,
          "amount": 1500
        }
      ]
    },
    {
      "id": 8,
      "dbId": 80008,
      "names": {
        "male": "海豚湾之恋",
        "female": "明月青莲"
      },
      "quality": 5,
      "score": 12,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-08.png",
          "big": "assets/fashion-gallery/male-big-08.png",
          "hero": "assets/fashion-gallery/male-hero-08.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-08.png",
          "big": "assets/fashion-gallery/female-big-08.png",
          "hero": "assets/fashion-gallery/female-hero-08.png"
        }
      },
      "synthesis": null,
      "baseAttributes": [
        {
          "id": 1,
          "amount": 2000
        },
        {
          "id": 4,
          "amount": 200
        },
        {
          "id": 5,
          "amount": 200
        },
        {
          "id": 9,
          "amount": 200
        },
        {
          "id": 6,
          "amount": 200
        },
        {
          "id": 7,
          "amount": 200
        },
        {
          "id": 8,
          "amount": 200
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 500
        },
        {
          "id": 9,
          "amount": 50
        },
        {
          "id": 4,
          "amount": 50
        },
        {
          "id": 5,
          "amount": 50
        },
        {
          "id": 6,
          "amount": 20
        },
        {
          "id": 7,
          "amount": 20
        },
        {
          "id": 8,
          "amount": 20
        }
      ],
      "strengthenPlan": 1,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 51,
          "amount": 30000
        },
        {
          "star": 2,
          "attributeId": 51,
          "amount": 60000
        },
        {
          "star": 3,
          "attributeId": 51,
          "amount": 90000
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 40
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 80
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 160
        }
      ],
      "strengthenAttributes": [
        {
          "level": 5,
          "attributeId": 51,
          "amount": 1000
        },
        {
          "level": 10,
          "attributeId": 100,
          "amount": 325
        },
        {
          "level": 15,
          "attributeId": 54,
          "amount": 200
        },
        {
          "level": 15,
          "attributeId": 55,
          "amount": 200
        },
        {
          "level": 20,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 25,
          "attributeId": 100,
          "amount": 600
        },
        {
          "level": 30,
          "attributeId": 100,
          "amount": 700
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 800
        },
        {
          "level": 40,
          "attributeId": 100,
          "amount": 900
        },
        {
          "level": 45,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 50,
          "attributeId": 100,
          "amount": 1100
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 1200
        },
        {
          "level": 60,
          "attributeId": 100,
          "amount": 1300
        },
        {
          "level": 65,
          "attributeId": 100,
          "amount": 1400
        },
        {
          "level": 70,
          "attributeId": 100,
          "amount": 1500
        }
      ]
    },
    {
      "id": 9,
      "dbId": 80009,
      "names": {
        "male": "张郃时装",
        "female": "张郃时装"
      },
      "quality": 5,
      "score": 14,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-09.png",
          "big": "assets/fashion-gallery/male-big-09.png",
          "hero": "assets/fashion-gallery/male-hero-09.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-09.png",
          "big": "assets/fashion-gallery/female-big-09.png",
          "hero": "assets/fashion-gallery/female-hero-09.png"
        }
      },
      "synthesis": null,
      "baseAttributes": [
        {
          "id": 1,
          "amount": 2000
        },
        {
          "id": 4,
          "amount": 200
        },
        {
          "id": 5,
          "amount": 200
        },
        {
          "id": 9,
          "amount": 200
        },
        {
          "id": 6,
          "amount": 200
        },
        {
          "id": 7,
          "amount": 200
        },
        {
          "id": 8,
          "amount": 200
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 1000
        },
        {
          "id": 4,
          "amount": 100
        },
        {
          "id": 5,
          "amount": 100
        },
        {
          "id": 9,
          "amount": 100
        },
        {
          "id": 6,
          "amount": 40
        },
        {
          "id": 7,
          "amount": 40
        },
        {
          "id": 8,
          "amount": 40
        }
      ],
      "strengthenPlan": 2,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 51,
          "amount": 30000
        },
        {
          "star": 2,
          "attributeId": 51,
          "amount": 60000
        },
        {
          "star": 3,
          "attributeId": 51,
          "amount": 90000
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 40
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 80
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 160
        }
      ],
      "strengthenAttributes": [
        {
          "level": 5,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 10,
          "attributeId": 100,
          "amount": 750
        },
        {
          "level": 15,
          "attributeId": 54,
          "amount": 500
        },
        {
          "level": 15,
          "attributeId": 55,
          "amount": 500
        },
        {
          "level": 20,
          "attributeId": 100,
          "amount": 1250
        },
        {
          "level": 25,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 30,
          "attributeId": 100,
          "amount": 1750
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 2000
        },
        {
          "level": 40,
          "attributeId": 100,
          "amount": 2250
        },
        {
          "level": 45,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 50,
          "attributeId": 100,
          "amount": 2750
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 60,
          "attributeId": 100,
          "amount": 3250
        },
        {
          "level": 65,
          "attributeId": 100,
          "amount": 3500
        },
        {
          "level": 70,
          "attributeId": 100,
          "amount": 3750
        }
      ]
    },
    {
      "id": 10,
      "dbId": 80010,
      "names": {
        "male": "马超时装",
        "female": "马超时装"
      },
      "quality": 6,
      "score": 20,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-10.png",
          "big": "assets/fashion-gallery/male-big-10.png",
          "hero": "assets/fashion-gallery/male-hero-10.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-10.png",
          "big": "assets/fashion-gallery/female-big-10.png",
          "hero": "assets/fashion-gallery/female-hero-10.png"
        }
      },
      "synthesis": null,
      "baseAttributes": [
        {
          "id": 1,
          "amount": 10000
        },
        {
          "id": 4,
          "amount": 1000
        },
        {
          "id": 5,
          "amount": 1000
        },
        {
          "id": 9,
          "amount": 1000
        },
        {
          "id": 6,
          "amount": 200
        },
        {
          "id": 7,
          "amount": 200
        },
        {
          "id": 8,
          "amount": 200
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 2000
        },
        {
          "id": 4,
          "amount": 200
        },
        {
          "id": 5,
          "amount": 200
        },
        {
          "id": 9,
          "amount": 200
        },
        {
          "id": 6,
          "amount": 40
        },
        {
          "id": 7,
          "amount": 40
        },
        {
          "id": 8,
          "amount": 40
        }
      ],
      "strengthenPlan": 3,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 67,
          "amount": 200
        },
        {
          "star": 2,
          "attributeId": 67,
          "amount": 400
        },
        {
          "star": 3,
          "attributeId": 67,
          "amount": 600
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 70
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 140
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 280
        }
      ],
      "strengthenAttributes": [
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 10,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 15,
          "attributeId": 54,
          "amount": 1000
        },
        {
          "level": 15,
          "attributeId": 55,
          "amount": 1000
        },
        {
          "level": 20,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 25,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 30,
          "attributeId": 100,
          "amount": 3500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 40,
          "attributeId": 100,
          "amount": 4500
        },
        {
          "level": 45,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 50,
          "attributeId": 100,
          "amount": 5500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 60,
          "attributeId": 100,
          "amount": 6500
        },
        {
          "level": 65,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 70,
          "attributeId": 100,
          "amount": 7500
        }
      ]
    },
    {
      "id": 11,
      "dbId": 80011,
      "names": {
        "male": "绝代双骄",
        "female": "绝代双骄"
      },
      "quality": 6,
      "score": 20,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-11.png",
          "big": "assets/fashion-gallery/male-big-11.png",
          "hero": "assets/fashion-gallery/male-hero-11.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-11.png",
          "big": "assets/fashion-gallery/female-big-11.png",
          "hero": "assets/fashion-gallery/female-hero-11.png"
        }
      },
      "synthesis": null,
      "baseAttributes": [
        {
          "id": 1,
          "amount": 10000
        },
        {
          "id": 4,
          "amount": 1000
        },
        {
          "id": 5,
          "amount": 1000
        },
        {
          "id": 9,
          "amount": 1000
        },
        {
          "id": 6,
          "amount": 200
        },
        {
          "id": 7,
          "amount": 200
        },
        {
          "id": 8,
          "amount": 200
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 2000
        },
        {
          "id": 4,
          "amount": 200
        },
        {
          "id": 5,
          "amount": 200
        },
        {
          "id": 9,
          "amount": 200
        },
        {
          "id": 6,
          "amount": 40
        },
        {
          "id": 7,
          "amount": 40
        },
        {
          "id": 8,
          "amount": 40
        }
      ],
      "strengthenPlan": 3,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 68,
          "amount": 200
        },
        {
          "star": 2,
          "attributeId": 68,
          "amount": 400
        },
        {
          "star": 3,
          "attributeId": 68,
          "amount": 600
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 70
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 140
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 280
        }
      ],
      "strengthenAttributes": [
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 10,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 15,
          "attributeId": 54,
          "amount": 1000
        },
        {
          "level": 15,
          "attributeId": 55,
          "amount": 1000
        },
        {
          "level": 20,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 25,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 30,
          "attributeId": 100,
          "amount": 3500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 40,
          "attributeId": 100,
          "amount": 4500
        },
        {
          "level": 45,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 50,
          "attributeId": 100,
          "amount": 5500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 60,
          "attributeId": 100,
          "amount": 6500
        },
        {
          "level": 65,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 70,
          "attributeId": 100,
          "amount": 7500
        }
      ]
    },
    {
      "id": 12,
      "dbId": 80012,
      "names": {
        "male": "甘宁时装",
        "female": "甘宁时装"
      },
      "quality": 6,
      "score": 20,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-12.png",
          "big": "assets/fashion-gallery/male-big-12.png",
          "hero": "assets/fashion-gallery/male-hero-12.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-12.png",
          "big": "assets/fashion-gallery/female-big-12.png",
          "hero": "assets/fashion-gallery/female-hero-12.png"
        }
      },
      "synthesis": null,
      "baseAttributes": [
        {
          "id": 1,
          "amount": 10000
        },
        {
          "id": 4,
          "amount": 1000
        },
        {
          "id": 5,
          "amount": 1000
        },
        {
          "id": 9,
          "amount": 1000
        },
        {
          "id": 6,
          "amount": 200
        },
        {
          "id": 7,
          "amount": 200
        },
        {
          "id": 8,
          "amount": 200
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 2000
        },
        {
          "id": 4,
          "amount": 200
        },
        {
          "id": 5,
          "amount": 200
        },
        {
          "id": 9,
          "amount": 200
        },
        {
          "id": 6,
          "amount": 40
        },
        {
          "id": 7,
          "amount": 40
        },
        {
          "id": 8,
          "amount": 40
        }
      ],
      "strengthenPlan": 3,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 69,
          "amount": 200
        },
        {
          "star": 2,
          "attributeId": 69,
          "amount": 400
        },
        {
          "star": 3,
          "attributeId": 69,
          "amount": 600
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 70
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 140
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 280
        }
      ],
      "strengthenAttributes": [
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 10,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 15,
          "attributeId": 54,
          "amount": 1000
        },
        {
          "level": 15,
          "attributeId": 55,
          "amount": 1000
        },
        {
          "level": 20,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 25,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 30,
          "attributeId": 100,
          "amount": 3500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 40,
          "attributeId": 100,
          "amount": 4500
        },
        {
          "level": 45,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 50,
          "attributeId": 100,
          "amount": 5500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 60,
          "attributeId": 100,
          "amount": 6500
        },
        {
          "level": 65,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 70,
          "attributeId": 100,
          "amount": 7500
        }
      ]
    },
    {
      "id": 13,
      "dbId": 80013,
      "names": {
        "male": "于吉时装",
        "female": "于吉时装"
      },
      "quality": 5,
      "score": 14,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-13.png",
          "big": "assets/fashion-gallery/male-big-13.png",
          "hero": "assets/fashion-gallery/male-hero-13.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-13.png",
          "big": "assets/fashion-gallery/female-big-13.png",
          "hero": "assets/fashion-gallery/female-hero-13.png"
        }
      },
      "synthesis": null,
      "baseAttributes": [
        {
          "id": 1,
          "amount": 2000
        },
        {
          "id": 4,
          "amount": 200
        },
        {
          "id": 5,
          "amount": 200
        },
        {
          "id": 9,
          "amount": 200
        },
        {
          "id": 6,
          "amount": 200
        },
        {
          "id": 7,
          "amount": 200
        },
        {
          "id": 8,
          "amount": 200
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 1000
        },
        {
          "id": 4,
          "amount": 100
        },
        {
          "id": 5,
          "amount": 100
        },
        {
          "id": 9,
          "amount": 100
        },
        {
          "id": 6,
          "amount": 40
        },
        {
          "id": 7,
          "amount": 40
        },
        {
          "id": 8,
          "amount": 40
        }
      ],
      "strengthenPlan": 2,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 51,
          "amount": 30000
        },
        {
          "star": 2,
          "attributeId": 51,
          "amount": 60000
        },
        {
          "star": 3,
          "attributeId": 51,
          "amount": 90000
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 40
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 80
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 160
        }
      ],
      "strengthenAttributes": [
        {
          "level": 5,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 10,
          "attributeId": 100,
          "amount": 750
        },
        {
          "level": 15,
          "attributeId": 54,
          "amount": 500
        },
        {
          "level": 15,
          "attributeId": 55,
          "amount": 500
        },
        {
          "level": 20,
          "attributeId": 100,
          "amount": 1250
        },
        {
          "level": 25,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 30,
          "attributeId": 100,
          "amount": 1750
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 2000
        },
        {
          "level": 40,
          "attributeId": 100,
          "amount": 2250
        },
        {
          "level": 45,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 50,
          "attributeId": 100,
          "amount": 2750
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 60,
          "attributeId": 100,
          "amount": 3250
        },
        {
          "level": 65,
          "attributeId": 100,
          "amount": 3500
        },
        {
          "level": 70,
          "attributeId": 100,
          "amount": 3750
        }
      ]
    },
    {
      "id": 14,
      "dbId": 80014,
      "names": {
        "male": "神犬警探",
        "female": "灵猫女警"
      },
      "quality": 6,
      "score": 20,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-14.png",
          "big": "assets/fashion-gallery/male-big-14.png",
          "hero": "assets/fashion-gallery/male-hero-14.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-14.png",
          "big": "assets/fashion-gallery/female-big-14.png",
          "hero": "assets/fashion-gallery/female-hero-14.png"
        }
      },
      "synthesis": null,
      "baseAttributes": [
        {
          "id": 1,
          "amount": 10000
        },
        {
          "id": 4,
          "amount": 1000
        },
        {
          "id": 5,
          "amount": 1000
        },
        {
          "id": 9,
          "amount": 1000
        },
        {
          "id": 6,
          "amount": 200
        },
        {
          "id": 7,
          "amount": 200
        },
        {
          "id": 8,
          "amount": 200
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 2000
        },
        {
          "id": 4,
          "amount": 200
        },
        {
          "id": 5,
          "amount": 200
        },
        {
          "id": 9,
          "amount": 200
        },
        {
          "id": 6,
          "amount": 40
        },
        {
          "id": 7,
          "amount": 40
        },
        {
          "id": 8,
          "amount": 40
        }
      ],
      "strengthenPlan": 3,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 70,
          "amount": 200
        },
        {
          "star": 2,
          "attributeId": 70,
          "amount": 400
        },
        {
          "star": 3,
          "attributeId": 70,
          "amount": 600
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 70
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 140
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 280
        }
      ],
      "strengthenAttributes": [
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 10,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 15,
          "attributeId": 54,
          "amount": 1000
        },
        {
          "level": 15,
          "attributeId": 55,
          "amount": 1000
        },
        {
          "level": 20,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 25,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 30,
          "attributeId": 100,
          "amount": 3500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 40,
          "attributeId": 100,
          "amount": 4500
        },
        {
          "level": 45,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 50,
          "attributeId": 100,
          "amount": 5500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 60,
          "attributeId": 100,
          "amount": 6500
        },
        {
          "level": 65,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 70,
          "attributeId": 100,
          "amount": 7500
        }
      ]
    },
    {
      "id": 15,
      "dbId": 80015,
      "names": {
        "male": "竹烟波月",
        "female": "浣溪纱"
      },
      "quality": 7,
      "score": 24,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-15.png",
          "big": "assets/fashion-gallery/male-big-15.png",
          "hero": "assets/fashion-gallery/male-hero-15.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-15.png",
          "big": "assets/fashion-gallery/female-big-15.png",
          "hero": "assets/fashion-gallery/female-hero-15.png"
        }
      },
      "synthesis": {
        "id": 1800150,
        "names": {
          "male": "竹烟波月碎片",
          "female": "浣溪沙碎片"
        },
        "name": "竹烟波月碎片",
        "amount": 100
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 20000
        },
        {
          "id": 4,
          "amount": 2000
        },
        {
          "id": 5,
          "amount": 2000
        },
        {
          "id": 9,
          "amount": 2000
        },
        {
          "id": 6,
          "amount": 300
        },
        {
          "id": 7,
          "amount": 300
        },
        {
          "id": 8,
          "amount": 300
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 54,
          "amount": 20000
        },
        {
          "star": 2,
          "attributeId": 54,
          "amount": 40000
        },
        {
          "star": 3,
          "attributeId": 54,
          "amount": 60000
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 120
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 240
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 480
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ]
    },
    {
      "id": 16,
      "dbId": 80016,
      "names": {
        "male": "陆逊时装",
        "female": "陆逊时装"
      },
      "quality": 5,
      "score": 14,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-16.png",
          "big": "assets/fashion-gallery/male-big-16.png",
          "hero": "assets/fashion-gallery/male-hero-16.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-16.png",
          "big": "assets/fashion-gallery/female-big-16.png",
          "hero": "assets/fashion-gallery/female-hero-16.png"
        }
      },
      "synthesis": null,
      "baseAttributes": [
        {
          "id": 1,
          "amount": 2000
        },
        {
          "id": 4,
          "amount": 200
        },
        {
          "id": 5,
          "amount": 200
        },
        {
          "id": 9,
          "amount": 200
        },
        {
          "id": 6,
          "amount": 200
        },
        {
          "id": 7,
          "amount": 200
        },
        {
          "id": 8,
          "amount": 200
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 1000
        },
        {
          "id": 4,
          "amount": 100
        },
        {
          "id": 5,
          "amount": 100
        },
        {
          "id": 9,
          "amount": 100
        },
        {
          "id": 6,
          "amount": 40
        },
        {
          "id": 7,
          "amount": 40
        },
        {
          "id": 8,
          "amount": 40
        }
      ],
      "strengthenPlan": 2,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 51,
          "amount": 30000
        },
        {
          "star": 2,
          "attributeId": 51,
          "amount": 60000
        },
        {
          "star": 3,
          "attributeId": 51,
          "amount": 90000
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 40
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 80
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 160
        }
      ],
      "strengthenAttributes": [
        {
          "level": 5,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 10,
          "attributeId": 100,
          "amount": 750
        },
        {
          "level": 15,
          "attributeId": 54,
          "amount": 500
        },
        {
          "level": 15,
          "attributeId": 55,
          "amount": 500
        },
        {
          "level": 20,
          "attributeId": 100,
          "amount": 1250
        },
        {
          "level": 25,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 30,
          "attributeId": 100,
          "amount": 1750
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 2000
        },
        {
          "level": 40,
          "attributeId": 100,
          "amount": 2250
        },
        {
          "level": 45,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 50,
          "attributeId": 100,
          "amount": 2750
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 60,
          "attributeId": 100,
          "amount": 3250
        },
        {
          "level": 65,
          "attributeId": 100,
          "amount": 3500
        },
        {
          "level": 70,
          "attributeId": 100,
          "amount": 3750
        }
      ]
    },
    {
      "id": 17,
      "dbId": 80017,
      "names": {
        "male": "吕布时装",
        "female": "貂蝉时装"
      },
      "quality": 7,
      "score": 24,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-17.png",
          "big": "assets/fashion-gallery/male-big-17.png",
          "hero": "assets/fashion-gallery/male-hero-17.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-17.png",
          "big": "assets/fashion-gallery/female-big-17.png",
          "hero": "assets/fashion-gallery/female-hero-17.png"
        }
      },
      "synthesis": {
        "id": 1800153,
        "names": {
          "male": "吕布时装碎片",
          "female": "貂蝉时装碎片"
        },
        "name": "吕布时装碎片",
        "amount": 100
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 20000
        },
        {
          "id": 4,
          "amount": 2000
        },
        {
          "id": 5,
          "amount": 2000
        },
        {
          "id": 9,
          "amount": 2000
        },
        {
          "id": 6,
          "amount": 300
        },
        {
          "id": 7,
          "amount": 300
        },
        {
          "id": 8,
          "amount": 300
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 54,
          "amount": 20000
        },
        {
          "star": 2,
          "attributeId": 54,
          "amount": 40000
        },
        {
          "star": 3,
          "attributeId": 54,
          "amount": 60000
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 120
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 240
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 480
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ]
    },
    {
      "id": 18,
      "dbId": 80018,
      "names": {
        "male": "刘备时装",
        "female": "刘备时装"
      },
      "quality": 5,
      "score": 15,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-18.png",
          "big": "assets/fashion-gallery/male-big-18.png",
          "hero": "assets/fashion-gallery/male-hero-18.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-18.png",
          "big": "assets/fashion-gallery/female-big-18.png",
          "hero": "assets/fashion-gallery/female-hero-18.png"
        }
      },
      "synthesis": null,
      "baseAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 200
        },
        {
          "id": 7,
          "amount": 200
        },
        {
          "id": 8,
          "amount": 200
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 1500
        },
        {
          "id": 4,
          "amount": 150
        },
        {
          "id": 5,
          "amount": 150
        },
        {
          "id": 9,
          "amount": 150
        },
        {
          "id": 6,
          "amount": 40
        },
        {
          "id": 7,
          "amount": 40
        },
        {
          "id": 8,
          "amount": 40
        }
      ],
      "strengthenPlan": 5,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 51,
          "amount": 30000
        },
        {
          "star": 2,
          "attributeId": 51,
          "amount": 60000
        },
        {
          "star": 3,
          "attributeId": 51,
          "amount": 90000
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 40
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 80
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 160
        }
      ],
      "strengthenAttributes": [
        {
          "level": 5,
          "attributeId": 51,
          "amount": 3000
        },
        {
          "level": 10,
          "attributeId": 100,
          "amount": 850
        },
        {
          "level": 15,
          "attributeId": 54,
          "amount": 600
        },
        {
          "level": 15,
          "attributeId": 55,
          "amount": 600
        },
        {
          "level": 20,
          "attributeId": 100,
          "amount": 1600
        },
        {
          "level": 25,
          "attributeId": 100,
          "amount": 2000
        },
        {
          "level": 30,
          "attributeId": 100,
          "amount": 2400
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 2800
        },
        {
          "level": 40,
          "attributeId": 100,
          "amount": 3200
        },
        {
          "level": 45,
          "attributeId": 100,
          "amount": 3600
        },
        {
          "level": 50,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 4400
        },
        {
          "level": 60,
          "attributeId": 100,
          "amount": 4800
        },
        {
          "level": 65,
          "attributeId": 100,
          "amount": 5200
        },
        {
          "level": 70,
          "attributeId": 100,
          "amount": 5600
        }
      ]
    },
    {
      "id": 19,
      "dbId": 80019,
      "names": {
        "male": "郭嘉时装",
        "female": "郭嘉时装"
      },
      "quality": 5,
      "score": 15,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-19.png",
          "big": "assets/fashion-gallery/male-big-19.png",
          "hero": "assets/fashion-gallery/male-hero-19.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-19.png",
          "big": "assets/fashion-gallery/female-big-19.png",
          "hero": "assets/fashion-gallery/female-hero-19.png"
        }
      },
      "synthesis": null,
      "baseAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 200
        },
        {
          "id": 7,
          "amount": 200
        },
        {
          "id": 8,
          "amount": 200
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 1500
        },
        {
          "id": 4,
          "amount": 150
        },
        {
          "id": 5,
          "amount": 150
        },
        {
          "id": 9,
          "amount": 150
        },
        {
          "id": 6,
          "amount": 40
        },
        {
          "id": 7,
          "amount": 40
        },
        {
          "id": 8,
          "amount": 40
        }
      ],
      "strengthenPlan": 5,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 51,
          "amount": 30000
        },
        {
          "star": 2,
          "attributeId": 51,
          "amount": 60000
        },
        {
          "star": 3,
          "attributeId": 51,
          "amount": 90000
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 40
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 80
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 160
        }
      ],
      "strengthenAttributes": [
        {
          "level": 5,
          "attributeId": 51,
          "amount": 3000
        },
        {
          "level": 10,
          "attributeId": 100,
          "amount": 850
        },
        {
          "level": 15,
          "attributeId": 54,
          "amount": 600
        },
        {
          "level": 15,
          "attributeId": 55,
          "amount": 600
        },
        {
          "level": 20,
          "attributeId": 100,
          "amount": 1600
        },
        {
          "level": 25,
          "attributeId": 100,
          "amount": 2000
        },
        {
          "level": 30,
          "attributeId": 100,
          "amount": 2400
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 2800
        },
        {
          "level": 40,
          "attributeId": 100,
          "amount": 3200
        },
        {
          "level": 45,
          "attributeId": 100,
          "amount": 3600
        },
        {
          "level": 50,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 4400
        },
        {
          "level": 60,
          "attributeId": 100,
          "amount": 4800
        },
        {
          "level": 65,
          "attributeId": 100,
          "amount": 5200
        },
        {
          "level": 70,
          "attributeId": 100,
          "amount": 5600
        }
      ]
    },
    {
      "id": 20,
      "dbId": 80020,
      "names": {
        "male": "派对达人",
        "female": "奇幻公主"
      },
      "quality": 7,
      "score": 24,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-20.png",
          "big": "assets/fashion-gallery/male-big-20.png",
          "hero": "assets/fashion-gallery/male-hero-20.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-20.png",
          "big": "assets/fashion-gallery/female-big-20.png",
          "hero": "assets/fashion-gallery/female-hero-20.png"
        }
      },
      "synthesis": {
        "id": 1800151,
        "names": {
          "male": "派对达人碎片",
          "female": "奇幻公主碎片"
        },
        "name": "派对达人碎片",
        "amount": 100
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 20000
        },
        {
          "id": 4,
          "amount": 2000
        },
        {
          "id": 5,
          "amount": 2000
        },
        {
          "id": 9,
          "amount": 2000
        },
        {
          "id": 6,
          "amount": 300
        },
        {
          "id": 7,
          "amount": 300
        },
        {
          "id": 8,
          "amount": 300
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 54,
          "amount": 20000
        },
        {
          "star": 2,
          "attributeId": 54,
          "amount": 40000
        },
        {
          "star": 3,
          "attributeId": 54,
          "amount": 60000
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 120
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 240
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 480
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ]
    },
    {
      "id": 21,
      "dbId": 80021,
      "names": {
        "male": "萌鸡报喜",
        "female": "凤舞新春"
      },
      "quality": 7,
      "score": 24,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-21.png",
          "big": "assets/fashion-gallery/male-big-21.png",
          "hero": "assets/fashion-gallery/male-hero-21.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-21.png",
          "big": "assets/fashion-gallery/female-big-21.png",
          "hero": "assets/fashion-gallery/female-hero-21.png"
        }
      },
      "synthesis": {
        "id": 1800152,
        "names": {
          "male": "萌鸡报喜碎片",
          "female": "凤舞新春碎片"
        },
        "name": "萌鸡报喜碎片",
        "amount": 100
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 20000
        },
        {
          "id": 4,
          "amount": 2000
        },
        {
          "id": 5,
          "amount": 2000
        },
        {
          "id": 9,
          "amount": 2000
        },
        {
          "id": 6,
          "amount": 300
        },
        {
          "id": 7,
          "amount": 300
        },
        {
          "id": 8,
          "amount": 300
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 54,
          "amount": 20000
        },
        {
          "star": 2,
          "attributeId": 54,
          "amount": 40000
        },
        {
          "star": 3,
          "attributeId": 54,
          "amount": 60000
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 120
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 240
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 480
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ]
    },
    {
      "id": 22,
      "dbId": 80022,
      "names": {
        "male": "天地龙皇",
        "female": "至尊红颜"
      },
      "quality": 8,
      "score": 28,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-22.png",
          "big": "assets/fashion-gallery/male-big-22.png",
          "hero": "assets/fashion-gallery/male-hero-22.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-22.png",
          "big": "assets/fashion-gallery/female-big-22.png",
          "hero": "assets/fashion-gallery/female-hero-22.png"
        }
      },
      "synthesis": {
        "id": 1800154,
        "names": {
          "male": "天地龙皇碎片",
          "female": "至尊红颜碎片"
        },
        "name": "天地龙皇碎片",
        "amount": 100
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 40000
        },
        {
          "id": 4,
          "amount": 4000
        },
        {
          "id": 5,
          "amount": 4000
        },
        {
          "id": 9,
          "amount": 4000
        },
        {
          "id": 6,
          "amount": 400
        },
        {
          "id": 7,
          "amount": 400
        },
        {
          "id": 8,
          "amount": 400
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 90,
          "amount": 500
        },
        {
          "star": 2,
          "attributeId": 90,
          "amount": 1000
        },
        {
          "star": 3,
          "attributeId": 90,
          "amount": 1500
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 100
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 200
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 400
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ]
    },
    {
      "id": 23,
      "dbId": 80023,
      "names": {
        "male": "血战神",
        "female": "女武神"
      },
      "quality": 8,
      "score": 28,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-23.png",
          "big": "assets/fashion-gallery/male-big-23.png",
          "hero": "assets/fashion-gallery/male-hero-23.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-23.png",
          "big": "assets/fashion-gallery/female-big-23.png",
          "hero": "assets/fashion-gallery/female-hero-23.png"
        }
      },
      "synthesis": {
        "id": 1800155,
        "names": {
          "male": "血战神碎片",
          "female": "女武神碎片"
        },
        "name": "血战神碎片",
        "amount": 100
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 40000
        },
        {
          "id": 4,
          "amount": 4000
        },
        {
          "id": 5,
          "amount": 4000
        },
        {
          "id": 9,
          "amount": 4000
        },
        {
          "id": 6,
          "amount": 400
        },
        {
          "id": 7,
          "amount": 400
        },
        {
          "id": 8,
          "amount": 400
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 90,
          "amount": 500
        },
        {
          "star": 2,
          "attributeId": 90,
          "amount": 1000
        },
        {
          "star": 3,
          "attributeId": 90,
          "amount": 1500
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 100
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 200
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 400
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ]
    },
    {
      "id": 24,
      "dbId": 80024,
      "names": {
        "male": "九天战仙",
        "female": "九天玄女"
      },
      "quality": 8,
      "score": 28,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-24.png",
          "big": "assets/fashion-gallery/male-big-24.png",
          "hero": "assets/fashion-gallery/male-hero-24.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-24.png",
          "big": "assets/fashion-gallery/female-big-24.png",
          "hero": "assets/fashion-gallery/female-hero-24.png"
        }
      },
      "synthesis": {
        "id": 1800156,
        "names": {
          "male": "九天战仙碎片",
          "female": "九天玄女碎片"
        },
        "name": "九天战仙碎片",
        "amount": 100
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 40000
        },
        {
          "id": 4,
          "amount": 4000
        },
        {
          "id": 5,
          "amount": 4000
        },
        {
          "id": 9,
          "amount": 4000
        },
        {
          "id": 6,
          "amount": 400
        },
        {
          "id": 7,
          "amount": 400
        },
        {
          "id": 8,
          "amount": 400
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 91,
          "amount": 500
        },
        {
          "star": 2,
          "attributeId": 91,
          "amount": 1000
        },
        {
          "star": 3,
          "attributeId": 91,
          "amount": 1500
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 100
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 200
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 400
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ]
    },
    {
      "id": 25,
      "dbId": 80025,
      "names": {
        "male": "魔尊天下",
        "female": "邪魅苍生"
      },
      "quality": 8,
      "score": 28,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-25.png",
          "big": "assets/fashion-gallery/male-big-25.png",
          "hero": "assets/fashion-gallery/male-hero-25.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-25.png",
          "big": "assets/fashion-gallery/female-big-25.png",
          "hero": "assets/fashion-gallery/female-hero-25.png"
        }
      },
      "synthesis": {
        "id": 1800157,
        "names": {
          "male": "魔尊天下碎片",
          "female": "邪魅苍生碎片"
        },
        "name": "魔尊天下碎片",
        "amount": 100
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 40000
        },
        {
          "id": 4,
          "amount": 4000
        },
        {
          "id": 5,
          "amount": 4000
        },
        {
          "id": 9,
          "amount": 4000
        },
        {
          "id": 6,
          "amount": 400
        },
        {
          "id": 7,
          "amount": 400
        },
        {
          "id": 8,
          "amount": 400
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 91,
          "amount": 500
        },
        {
          "star": 2,
          "attributeId": 91,
          "amount": 1000
        },
        {
          "star": 3,
          "attributeId": 91,
          "amount": 1500
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 100
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 200
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 400
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ]
    },
    {
      "id": 26,
      "dbId": 80026,
      "names": {
        "male": "祥云现世",
        "female": "月满长空"
      },
      "quality": 8,
      "score": 28,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-26.png",
          "big": "assets/fashion-gallery/male-big-26.png",
          "hero": "assets/fashion-gallery/male-hero-26.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-26.png",
          "big": "assets/fashion-gallery/female-big-26.png",
          "hero": "assets/fashion-gallery/female-hero-26.png"
        }
      },
      "synthesis": {
        "id": 1800158,
        "names": {
          "male": "祥云现世碎片",
          "female": "月满长空碎片"
        },
        "name": "祥云现世碎片",
        "amount": 100
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 40000
        },
        {
          "id": 4,
          "amount": 4000
        },
        {
          "id": 5,
          "amount": 4000
        },
        {
          "id": 9,
          "amount": 4000
        },
        {
          "id": 6,
          "amount": 400
        },
        {
          "id": 7,
          "amount": 400
        },
        {
          "id": 8,
          "amount": 400
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 92,
          "amount": 500
        },
        {
          "star": 2,
          "attributeId": 92,
          "amount": 1000
        },
        {
          "star": 3,
          "attributeId": 92,
          "amount": 1500
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 100
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 200
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 400
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ]
    },
    {
      "id": 27,
      "dbId": 80027,
      "names": {
        "male": "雪国来客",
        "female": "雪国精灵"
      },
      "quality": 8,
      "score": 28,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-27.png",
          "big": "assets/fashion-gallery/male-big-27.png",
          "hero": "assets/fashion-gallery/male-hero-27.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-27.png",
          "big": "assets/fashion-gallery/female-big-27.png",
          "hero": "assets/fashion-gallery/female-hero-27.png"
        }
      },
      "synthesis": {
        "id": 1800159,
        "names": {
          "male": "雪国来客碎片",
          "female": "雪国精灵碎片"
        },
        "name": "雪国来客碎片",
        "amount": 100
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 40000
        },
        {
          "id": 4,
          "amount": 4000
        },
        {
          "id": 5,
          "amount": 4000
        },
        {
          "id": 9,
          "amount": 4000
        },
        {
          "id": 6,
          "amount": 400
        },
        {
          "id": 7,
          "amount": 400
        },
        {
          "id": 8,
          "amount": 400
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 92,
          "amount": 500
        },
        {
          "star": 2,
          "attributeId": 92,
          "amount": 1000
        },
        {
          "star": 3,
          "attributeId": 92,
          "amount": 1500
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 100
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 200
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 400
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ]
    },
    {
      "id": 28,
      "dbId": 80028,
      "names": {
        "male": "龙伏华冠",
        "female": "凤舞倪裳"
      },
      "quality": 8,
      "score": 28,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-28.png",
          "big": "assets/fashion-gallery/male-big-28.png",
          "hero": "assets/fashion-gallery/male-hero-28.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-28.png",
          "big": "assets/fashion-gallery/female-big-28.png",
          "hero": "assets/fashion-gallery/female-hero-28.png"
        }
      },
      "synthesis": {
        "id": 1800160,
        "names": {
          "male": "龙伏华冠碎片",
          "female": "凤舞倪裳碎片"
        },
        "name": "龙伏华冠碎片",
        "amount": 100
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 40000
        },
        {
          "id": 4,
          "amount": 4000
        },
        {
          "id": 5,
          "amount": 4000
        },
        {
          "id": 9,
          "amount": 4000
        },
        {
          "id": 6,
          "amount": 400
        },
        {
          "id": 7,
          "amount": 400
        },
        {
          "id": 8,
          "amount": 400
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 93,
          "amount": 500
        },
        {
          "star": 2,
          "attributeId": 93,
          "amount": 1000
        },
        {
          "star": 3,
          "attributeId": 93,
          "amount": 1500
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 100
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 200
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 400
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ]
    },
    {
      "id": 29,
      "dbId": 80029,
      "names": {
        "male": "天狗使者",
        "female": "瑞狗仙子"
      },
      "quality": 8,
      "score": 28,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-29.png",
          "big": "assets/fashion-gallery/male-big-29.png",
          "hero": "assets/fashion-gallery/male-hero-29.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-29.png",
          "big": "assets/fashion-gallery/female-big-29.png",
          "hero": "assets/fashion-gallery/female-hero-29.png"
        }
      },
      "synthesis": {
        "id": 1800161,
        "names": {
          "male": "天狗使者碎片",
          "female": "瑞狗仙子碎片"
        },
        "name": "天狗使者碎片",
        "amount": 100
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 40000
        },
        {
          "id": 4,
          "amount": 4000
        },
        {
          "id": 5,
          "amount": 4000
        },
        {
          "id": 9,
          "amount": 4000
        },
        {
          "id": 6,
          "amount": 400
        },
        {
          "id": 7,
          "amount": 400
        },
        {
          "id": 8,
          "amount": 400
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 93,
          "amount": 500
        },
        {
          "star": 2,
          "attributeId": 93,
          "amount": 1000
        },
        {
          "star": 3,
          "attributeId": 93,
          "amount": 1500
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 100
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 200
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 400
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ]
    },
    {
      "id": 30,
      "dbId": 80030,
      "names": {
        "male": "归燕踏歌",
        "female": "归燕衔花"
      },
      "quality": 7,
      "score": 24,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-30.png",
          "big": "assets/fashion-gallery/male-big-30.png",
          "hero": "assets/fashion-gallery/male-hero-30.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-30.png",
          "big": "assets/fashion-gallery/female-big-30.png",
          "hero": "assets/fashion-gallery/female-hero-30.png"
        }
      },
      "synthesis": {
        "id": 1800162,
        "names": {
          "male": "归燕踏歌碎片",
          "female": "归燕衔花碎片"
        },
        "name": "归燕踏歌碎片",
        "amount": 100
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 20000
        },
        {
          "id": 4,
          "amount": 2000
        },
        {
          "id": 5,
          "amount": 2000
        },
        {
          "id": 9,
          "amount": 2000
        },
        {
          "id": 6,
          "amount": 300
        },
        {
          "id": 7,
          "amount": 300
        },
        {
          "id": 8,
          "amount": 300
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 54,
          "amount": 20000
        },
        {
          "star": 2,
          "attributeId": 54,
          "amount": 40000
        },
        {
          "star": 3,
          "attributeId": 54,
          "amount": 60000
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 120
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 240
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 480
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ]
    },
    {
      "id": 31,
      "dbId": 80031,
      "names": {
        "male": "高歌颂勤",
        "female": "谱诗颂勤"
      },
      "quality": 8,
      "score": 28,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-31.png",
          "big": "assets/fashion-gallery/male-big-31.png",
          "hero": "assets/fashion-gallery/male-hero-31.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-31.png",
          "big": "assets/fashion-gallery/female-big-31.png",
          "hero": "assets/fashion-gallery/female-hero-31.png"
        }
      },
      "synthesis": {
        "id": 1800163,
        "names": {
          "male": "高歌颂勤碎片",
          "female": "谱诗颂勤碎片"
        },
        "name": "高歌颂勤碎片",
        "amount": 100
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 40000
        },
        {
          "id": 4,
          "amount": 4000
        },
        {
          "id": 5,
          "amount": 4000
        },
        {
          "id": 9,
          "amount": 4000
        },
        {
          "id": 6,
          "amount": 400
        },
        {
          "id": 7,
          "amount": 400
        },
        {
          "id": 8,
          "amount": 400
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 94,
          "amount": 500
        },
        {
          "star": 2,
          "attributeId": 94,
          "amount": 1000
        },
        {
          "star": 3,
          "attributeId": 94,
          "amount": 1500
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 100
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 200
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 400
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ]
    },
    {
      "id": 32,
      "dbId": 80032,
      "names": {
        "male": "挚乐童趣",
        "female": "烂漫童真"
      },
      "quality": 7,
      "score": 24,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-32.png",
          "big": "assets/fashion-gallery/male-big-32.png",
          "hero": "assets/fashion-gallery/male-hero-32.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-32.png",
          "big": "assets/fashion-gallery/female-big-32.png",
          "hero": "assets/fashion-gallery/female-hero-32.png"
        }
      },
      "synthesis": {
        "id": 1800164,
        "names": {
          "male": "挚乐童趣碎片",
          "female": "烂漫童真碎片"
        },
        "name": "挚乐童趣碎片",
        "amount": 100
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 20000
        },
        {
          "id": 4,
          "amount": 2000
        },
        {
          "id": 5,
          "amount": 2000
        },
        {
          "id": 9,
          "amount": 2000
        },
        {
          "id": 6,
          "amount": 300
        },
        {
          "id": 7,
          "amount": 300
        },
        {
          "id": 8,
          "amount": 300
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 54,
          "amount": 20000
        },
        {
          "star": 2,
          "attributeId": 54,
          "amount": 40000
        },
        {
          "star": 3,
          "attributeId": 54,
          "amount": 60000
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 120
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 240
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 480
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ]
    },
    {
      "id": 33,
      "dbId": 80033,
      "names": {
        "male": "终极梦想",
        "female": "荣耀喝彩"
      },
      "quality": 8,
      "score": 28,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-33.png",
          "big": "assets/fashion-gallery/male-big-33.png",
          "hero": "assets/fashion-gallery/male-hero-33.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-33.png",
          "big": "assets/fashion-gallery/female-big-33.png",
          "hero": "assets/fashion-gallery/female-hero-33.png"
        }
      },
      "synthesis": {
        "id": 1800165,
        "names": {
          "male": "终极梦想碎片",
          "female": "荣耀喝彩碎片"
        },
        "name": "终极梦想碎片",
        "amount": 100
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 40000
        },
        {
          "id": 4,
          "amount": 4000
        },
        {
          "id": 5,
          "amount": 4000
        },
        {
          "id": 9,
          "amount": 4000
        },
        {
          "id": 6,
          "amount": 400
        },
        {
          "id": 7,
          "amount": 400
        },
        {
          "id": 8,
          "amount": 400
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 94,
          "amount": 500
        },
        {
          "star": 2,
          "attributeId": 94,
          "amount": 1000
        },
        {
          "star": 3,
          "attributeId": 94,
          "amount": 1500
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 100
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 200
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 400
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ]
    },
    {
      "id": 34,
      "dbId": 80034,
      "names": {
        "male": "思卿归暮",
        "female": "鹊引郎桥"
      },
      "quality": 8,
      "score": 28,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-34.png",
          "big": "assets/fashion-gallery/male-big-34.png",
          "hero": "assets/fashion-gallery/male-hero-34.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-34.png",
          "big": "assets/fashion-gallery/female-big-34.png",
          "hero": "assets/fashion-gallery/female-hero-34.png"
        }
      },
      "synthesis": {
        "id": 1800166,
        "names": {
          "male": "思卿归暮碎片",
          "female": "鹊引郎桥碎片"
        },
        "name": "思卿归暮碎片",
        "amount": 100
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 40000
        },
        {
          "id": 4,
          "amount": 4000
        },
        {
          "id": 5,
          "amount": 4000
        },
        {
          "id": 9,
          "amount": 4000
        },
        {
          "id": 6,
          "amount": 400
        },
        {
          "id": 7,
          "amount": 400
        },
        {
          "id": 8,
          "amount": 400
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 95,
          "amount": 500
        },
        {
          "star": 2,
          "attributeId": 95,
          "amount": 1000
        },
        {
          "star": 3,
          "attributeId": 95,
          "amount": 1500
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 100
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 200
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 400
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ]
    },
    {
      "id": 35,
      "dbId": 80035,
      "names": {
        "male": "旌旗高举",
        "female": "鼓奏佳音"
      },
      "quality": 7,
      "score": 24,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-35.png",
          "big": "assets/fashion-gallery/male-big-35.png",
          "hero": "assets/fashion-gallery/male-hero-35.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-35.png",
          "big": "assets/fashion-gallery/female-big-35.png",
          "hero": "assets/fashion-gallery/female-hero-35.png"
        }
      },
      "synthesis": {
        "id": 1800167,
        "names": {
          "male": "旌旗高举碎片",
          "female": "鼓奏佳音碎片"
        },
        "name": "旌旗高举碎片",
        "amount": 100
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 20000
        },
        {
          "id": 4,
          "amount": 2000
        },
        {
          "id": 5,
          "amount": 2000
        },
        {
          "id": 9,
          "amount": 2000
        },
        {
          "id": 6,
          "amount": 300
        },
        {
          "id": 7,
          "amount": 300
        },
        {
          "id": 8,
          "amount": 300
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 54,
          "amount": 20000
        },
        {
          "star": 2,
          "attributeId": 54,
          "amount": 40000
        },
        {
          "star": 3,
          "attributeId": 54,
          "amount": 60000
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 120
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 240
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 480
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ]
    },
    {
      "id": 36,
      "dbId": 80036,
      "names": {
        "male": "驯鹿骑士",
        "female": "雪夜童谣"
      },
      "quality": 7,
      "score": 24,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-36.png",
          "big": "assets/fashion-gallery/male-big-36.png",
          "hero": "assets/fashion-gallery/male-hero-36.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-36.png",
          "big": "assets/fashion-gallery/female-big-36.png",
          "hero": "assets/fashion-gallery/female-hero-36.png"
        }
      },
      "synthesis": {
        "id": 1800168,
        "names": {
          "male": "驯鹿骑士碎片",
          "female": "雪夜童谣碎片"
        },
        "name": "驯鹿骑士碎片",
        "amount": 100
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 20000
        },
        {
          "id": 4,
          "amount": 2000
        },
        {
          "id": 5,
          "amount": 2000
        },
        {
          "id": 9,
          "amount": 2000
        },
        {
          "id": 6,
          "amount": 300
        },
        {
          "id": 7,
          "amount": 300
        },
        {
          "id": 8,
          "amount": 300
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 54,
          "amount": 20000
        },
        {
          "star": 2,
          "attributeId": 54,
          "amount": 40000
        },
        {
          "star": 3,
          "attributeId": 54,
          "amount": 60000
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 120
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 240
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 480
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ]
    },
    {
      "id": 37,
      "dbId": 80037,
      "names": {
        "male": "五载同舟",
        "female": "共渡流年"
      },
      "quality": 8,
      "score": 28,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-37.png",
          "big": "assets/fashion-gallery/male-big-37.png",
          "hero": "assets/fashion-gallery/male-hero-37.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-37.png",
          "big": "assets/fashion-gallery/female-big-37.png",
          "hero": "assets/fashion-gallery/female-hero-37.png"
        }
      },
      "synthesis": {
        "id": 1800169,
        "names": {
          "male": "五载同舟碎片",
          "female": "共渡流年碎片"
        },
        "name": "五载同舟碎片",
        "amount": 100
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 40000
        },
        {
          "id": 4,
          "amount": 4000
        },
        {
          "id": 5,
          "amount": 4000
        },
        {
          "id": 9,
          "amount": 4000
        },
        {
          "id": 6,
          "amount": 400
        },
        {
          "id": 7,
          "amount": 400
        },
        {
          "id": 8,
          "amount": 400
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 95,
          "amount": 500
        },
        {
          "star": 2,
          "attributeId": 95,
          "amount": 1000
        },
        {
          "star": 3,
          "attributeId": 95,
          "amount": 1500
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 100
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 200
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 400
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ]
    },
    {
      "id": 38,
      "dbId": 80038,
      "names": {
        "male": "闹酒迎春",
        "female": "宴飨辞岁"
      },
      "quality": 9,
      "score": 32,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-38.png",
          "big": "assets/fashion-gallery/male-big-38.png",
          "hero": "assets/fashion-gallery/male-hero-38.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-38.png",
          "big": "assets/fashion-gallery/female-big-38.png",
          "hero": "assets/fashion-gallery/female-hero-38.png"
        }
      },
      "synthesis": {
        "id": 1800170,
        "names": {
          "male": "闹酒迎春碎片",
          "female": "宴飨辞岁碎片"
        },
        "name": "闹酒迎春碎片",
        "amount": 180
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 40000
        },
        {
          "id": 4,
          "amount": 4000
        },
        {
          "id": 5,
          "amount": 4000
        },
        {
          "id": 9,
          "amount": 4000
        },
        {
          "id": 6,
          "amount": 400
        },
        {
          "id": 7,
          "amount": 400
        },
        {
          "id": 8,
          "amount": 400
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 67,
          "amount": 400
        },
        {
          "star": 2,
          "attributeId": 67,
          "amount": 800
        },
        {
          "star": 3,
          "attributeId": 67,
          "amount": 1200
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 130
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 260
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 520
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ],
      "talent": {
        "id": 90239,
        "name": "暗金时装天赋1",
        "description": "全体上阵武将物防+5000，法防+5000；死亡时对敌方前排单体造成150%攻击伤害，且有50%概率眩晕目标1回合"
      }
    },
    {
      "id": 39,
      "dbId": 80039,
      "names": {
        "male": "耕耘昼夜",
        "female": "戴月披星"
      },
      "quality": 7,
      "score": 24,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-39.png",
          "big": "assets/fashion-gallery/male-big-39.png",
          "hero": "assets/fashion-gallery/male-hero-39.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-39.png",
          "big": "assets/fashion-gallery/female-big-39.png",
          "hero": "assets/fashion-gallery/female-hero-39.png"
        }
      },
      "synthesis": {
        "id": 1800171,
        "names": {
          "male": "耕耘昼夜碎片",
          "female": "戴月披星碎片"
        },
        "name": "耕耘昼夜碎片",
        "amount": 100
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 20000
        },
        {
          "id": 4,
          "amount": 2000
        },
        {
          "id": 5,
          "amount": 2000
        },
        {
          "id": 9,
          "amount": 2000
        },
        {
          "id": 6,
          "amount": 300
        },
        {
          "id": 7,
          "amount": 300
        },
        {
          "id": 8,
          "amount": 300
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 54,
          "amount": 20000
        },
        {
          "star": 2,
          "attributeId": 54,
          "amount": 40000
        },
        {
          "star": 3,
          "attributeId": 54,
          "amount": 60000
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 120
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 240
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 480
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ]
    },
    {
      "id": 40,
      "dbId": 80040,
      "names": {
        "male": "鸠车竹马",
        "female": "犹忆童稚"
      },
      "quality": 9,
      "score": 32,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-40.png",
          "big": "assets/fashion-gallery/male-big-40.png",
          "hero": "assets/fashion-gallery/male-hero-40.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-40.png",
          "big": "assets/fashion-gallery/female-big-40.png",
          "hero": "assets/fashion-gallery/female-hero-40.png"
        }
      },
      "synthesis": {
        "id": 1800172,
        "names": {
          "male": "鸠车竹马碎片",
          "female": "犹忆童稚碎片"
        },
        "name": "鸠车竹马碎片",
        "amount": 180
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 40000
        },
        {
          "id": 4,
          "amount": 4000
        },
        {
          "id": 5,
          "amount": 4000
        },
        {
          "id": 9,
          "amount": 4000
        },
        {
          "id": 6,
          "amount": 400
        },
        {
          "id": 7,
          "amount": 400
        },
        {
          "id": 8,
          "amount": 400
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 68,
          "amount": 400
        },
        {
          "star": 2,
          "attributeId": 68,
          "amount": 800
        },
        {
          "star": 3,
          "attributeId": 68,
          "amount": 1200
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 130
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 260
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 520
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ],
      "talent": {
        "id": 90315,
        "name": "暗金时装天赋2",
        "description": "全体上阵武将物防+5000，法防+5000；被怒气攻击时60%概率令攻击者【眩晕】，持续1回合"
      }
    },
    {
      "id": 41,
      "dbId": 80041,
      "names": {
        "male": "忠诚信徒",
        "female": "梦想闪耀"
      },
      "quality": 7,
      "score": 24,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-41.png",
          "big": "assets/fashion-gallery/male-big-41.png",
          "hero": "assets/fashion-gallery/male-hero-41.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-41.png",
          "big": "assets/fashion-gallery/female-big-41.png",
          "hero": "assets/fashion-gallery/female-hero-41.png"
        }
      },
      "synthesis": {
        "id": 1800173,
        "names": {
          "male": "忠诚信徒碎片",
          "female": "梦想闪耀碎片"
        },
        "name": "忠诚信徒碎片",
        "amount": 100
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 20000
        },
        {
          "id": 4,
          "amount": 2000
        },
        {
          "id": 5,
          "amount": 2000
        },
        {
          "id": 9,
          "amount": 2000
        },
        {
          "id": 6,
          "amount": 300
        },
        {
          "id": 7,
          "amount": 300
        },
        {
          "id": 8,
          "amount": 300
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 54,
          "amount": 20000
        },
        {
          "star": 2,
          "attributeId": 54,
          "amount": 40000
        },
        {
          "star": 3,
          "attributeId": 54,
          "amount": 60000
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 120
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 240
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 480
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ]
    },
    {
      "id": 42,
      "dbId": 80042,
      "names": {
        "male": "海底世界",
        "female": "梦幻乐园"
      },
      "quality": 9,
      "score": 32,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-42.png",
          "big": "assets/fashion-gallery/male-big-42.png",
          "hero": "assets/fashion-gallery/male-hero-42.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-42.png",
          "big": "assets/fashion-gallery/female-big-42.png",
          "hero": "assets/fashion-gallery/female-hero-42.png"
        }
      },
      "synthesis": {
        "id": 1800174,
        "names": {
          "male": "海底世界碎片",
          "female": "梦幻乐园碎片"
        },
        "name": "海底世界碎片",
        "amount": 180
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 40000
        },
        {
          "id": 4,
          "amount": 4000
        },
        {
          "id": 5,
          "amount": 4000
        },
        {
          "id": 9,
          "amount": 4000
        },
        {
          "id": 6,
          "amount": 400
        },
        {
          "id": 7,
          "amount": 400
        },
        {
          "id": 8,
          "amount": 400
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 69,
          "amount": 400
        },
        {
          "star": 2,
          "attributeId": 69,
          "amount": 800
        },
        {
          "star": 3,
          "attributeId": 69,
          "amount": 1200
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 130
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 260
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 520
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ],
      "talent": {
        "id": 90383,
        "name": "暗金时装天赋3",
        "description": "全体上阵武将物防+5000，法防+5000；被普通攻击时60%概率令攻击者【麻痹】，持续1回合"
      }
    },
    {
      "id": 43,
      "dbId": 80043,
      "names": {
        "male": "金玉良辰",
        "female": "千灯祈愿"
      },
      "quality": 7,
      "score": 24,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-43.png",
          "big": "assets/fashion-gallery/male-big-43.png",
          "hero": "assets/fashion-gallery/male-hero-43.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-43.png",
          "big": "assets/fashion-gallery/female-big-43.png",
          "hero": "assets/fashion-gallery/female-hero-43.png"
        }
      },
      "synthesis": {
        "id": 1800175,
        "names": {
          "male": "金玉良辰碎片",
          "female": "千灯祈愿碎片"
        },
        "name": "金玉良辰碎片",
        "amount": 100
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 20000
        },
        {
          "id": 4,
          "amount": 2000
        },
        {
          "id": 5,
          "amount": 2000
        },
        {
          "id": 9,
          "amount": 2000
        },
        {
          "id": 6,
          "amount": 300
        },
        {
          "id": 7,
          "amount": 300
        },
        {
          "id": 8,
          "amount": 300
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 54,
          "amount": 20000
        },
        {
          "star": 2,
          "attributeId": 54,
          "amount": 40000
        },
        {
          "star": 3,
          "attributeId": 54,
          "amount": 60000
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 120
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 240
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 480
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ]
    },
    {
      "id": 44,
      "dbId": 80044,
      "names": {
        "male": "风露中宵",
        "female": "婵娟挽月"
      },
      "quality": 7,
      "score": 24,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-44.png",
          "big": "assets/fashion-gallery/male-big-44.png",
          "hero": "assets/fashion-gallery/male-hero-44.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-44.png",
          "big": "assets/fashion-gallery/female-big-44.png",
          "hero": "assets/fashion-gallery/female-hero-44.png"
        }
      },
      "synthesis": {
        "id": 1800176,
        "names": {
          "male": "风露中宵碎片",
          "female": "婵娟挽月碎片"
        },
        "name": "风露中宵碎片",
        "amount": 100
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 20000
        },
        {
          "id": 4,
          "amount": 2000
        },
        {
          "id": 5,
          "amount": 2000
        },
        {
          "id": 9,
          "amount": 2000
        },
        {
          "id": 6,
          "amount": 300
        },
        {
          "id": 7,
          "amount": 300
        },
        {
          "id": 8,
          "amount": 300
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 54,
          "amount": 20000
        },
        {
          "star": 2,
          "attributeId": 54,
          "amount": 40000
        },
        {
          "star": 3,
          "attributeId": 54,
          "amount": 60000
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 120
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 240
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 480
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ]
    },
    {
      "id": 45,
      "dbId": 80045,
      "names": {
        "male": "冥火沧澜",
        "female": "曙后星孤"
      },
      "quality": 9,
      "score": 32,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-45.png",
          "big": "assets/fashion-gallery/male-big-45.png",
          "hero": "assets/fashion-gallery/male-hero-45.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-45.png",
          "big": "assets/fashion-gallery/female-big-45.png",
          "hero": "assets/fashion-gallery/female-hero-45.png"
        }
      },
      "synthesis": {
        "id": 1800177,
        "names": {
          "male": "冥火沧澜碎片",
          "female": "曙后星孤碎片"
        },
        "name": "冥火沧澜碎片",
        "amount": 180
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 40000
        },
        {
          "id": 4,
          "amount": 4000
        },
        {
          "id": 5,
          "amount": 4000
        },
        {
          "id": 9,
          "amount": 4000
        },
        {
          "id": 6,
          "amount": 400
        },
        {
          "id": 7,
          "amount": 400
        },
        {
          "id": 8,
          "amount": 400
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 70,
          "amount": 400
        },
        {
          "star": 2,
          "attributeId": 70,
          "amount": 800
        },
        {
          "star": 3,
          "attributeId": 70,
          "amount": 1200
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 130
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 260
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 520
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ],
      "talent": {
        "id": 90488,
        "name": "暗金时装天赋4",
        "description": "全体上阵武将物防+5000，法防+5000；被攻击时40%的概率给攻击者附加封印【治疗】效果，持续1回合"
      }
    },
    {
      "id": 46,
      "dbId": 80046,
      "names": {
        "male": "神光鬼火",
        "female": "谪仙鬼神"
      },
      "quality": 7,
      "score": 24,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-46.png",
          "big": "assets/fashion-gallery/male-big-46.png",
          "hero": "assets/fashion-gallery/male-hero-46.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-46.png",
          "big": "assets/fashion-gallery/female-big-46.png",
          "hero": "assets/fashion-gallery/female-hero-46.png"
        }
      },
      "synthesis": {
        "id": 1800178,
        "names": {
          "male": "神光鬼火碎片",
          "female": "谪仙鬼神碎片"
        },
        "name": "神光鬼火碎片",
        "amount": 100
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 20000
        },
        {
          "id": 4,
          "amount": 2000
        },
        {
          "id": 5,
          "amount": 2000
        },
        {
          "id": 9,
          "amount": 2000
        },
        {
          "id": 6,
          "amount": 300
        },
        {
          "id": 7,
          "amount": 300
        },
        {
          "id": 8,
          "amount": 300
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 54,
          "amount": 20000
        },
        {
          "star": 2,
          "attributeId": 54,
          "amount": 40000
        },
        {
          "star": 3,
          "attributeId": 54,
          "amount": 60000
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 120
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 240
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 480
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ]
    },
    {
      "id": 47,
      "dbId": 80047,
      "names": {
        "male": "恩辉盛典",
        "female": "恩辉晚宴"
      },
      "quality": 9,
      "score": 32,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-47.png",
          "big": "assets/fashion-gallery/male-big-47.png",
          "hero": "assets/fashion-gallery/male-hero-47.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-47.png",
          "big": "assets/fashion-gallery/female-big-47.png",
          "hero": "assets/fashion-gallery/female-hero-47.png"
        }
      },
      "synthesis": {
        "id": 1800179,
        "names": {
          "male": "恩辉盛典碎片",
          "female": "恩辉晚宴碎片"
        },
        "name": "恩辉盛典碎片",
        "amount": 180
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 40000
        },
        {
          "id": 4,
          "amount": 4000
        },
        {
          "id": 5,
          "amount": 4000
        },
        {
          "id": 9,
          "amount": 4000
        },
        {
          "id": 6,
          "amount": 400
        },
        {
          "id": 7,
          "amount": 400
        },
        {
          "id": 8,
          "amount": 400
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 71,
          "amount": 400
        },
        {
          "star": 2,
          "attributeId": 71,
          "amount": 800
        },
        {
          "star": 3,
          "attributeId": 71,
          "amount": 1200
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 130
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 260
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 520
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ],
      "talent": {
        "id": 90513,
        "name": "暗金时装天赋5",
        "description": "全体上阵武将物防+5000，法防+5000；死亡时对敌方攻击最高的目标造成50%伤害，且有60%概率附加【禁怒】效果，持续1回合"
      }
    },
    {
      "id": 48,
      "dbId": 80048,
      "names": {
        "male": "六载同游",
        "female": "匠心追梦"
      },
      "quality": 7,
      "score": 24,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-48.png",
          "big": "assets/fashion-gallery/male-big-48.png",
          "hero": "assets/fashion-gallery/male-hero-48.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-48.png",
          "big": "assets/fashion-gallery/female-big-48.png",
          "hero": "assets/fashion-gallery/female-hero-48.png"
        }
      },
      "synthesis": {
        "id": 1800180,
        "names": {
          "male": "六载同游碎片",
          "female": "匠心追梦碎片"
        },
        "name": "六载同游碎片",
        "amount": 100
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 20000
        },
        {
          "id": 4,
          "amount": 2000
        },
        {
          "id": 5,
          "amount": 2000
        },
        {
          "id": 9,
          "amount": 2000
        },
        {
          "id": 6,
          "amount": 300
        },
        {
          "id": 7,
          "amount": 300
        },
        {
          "id": 8,
          "amount": 300
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 54,
          "amount": 20000
        },
        {
          "star": 2,
          "attributeId": 54,
          "amount": 40000
        },
        {
          "star": 3,
          "attributeId": 54,
          "amount": 60000
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 120
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 240
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 480
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ]
    },
    {
      "id": 49,
      "dbId": 80049,
      "names": {
        "male": "炽情梦语",
        "female": "缘情寄意"
      },
      "quality": 9,
      "score": 32,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-49.png",
          "big": "assets/fashion-gallery/male-big-49.png",
          "hero": "assets/fashion-gallery/male-hero-49.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-49.png",
          "big": "assets/fashion-gallery/female-big-49.png",
          "hero": "assets/fashion-gallery/female-hero-49.png"
        }
      },
      "synthesis": {
        "id": 1800181,
        "names": {
          "male": "炽情梦语碎片",
          "female": "缘情寄意碎片"
        },
        "name": "炽情梦语碎片",
        "amount": 180
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 40000
        },
        {
          "id": 4,
          "amount": 4000
        },
        {
          "id": 5,
          "amount": 4000
        },
        {
          "id": 9,
          "amount": 4000
        },
        {
          "id": 6,
          "amount": 400
        },
        {
          "id": 7,
          "amount": 400
        },
        {
          "id": 8,
          "amount": 400
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 72,
          "amount": 400
        },
        {
          "star": 2,
          "attributeId": 72,
          "amount": 800
        },
        {
          "star": 3,
          "attributeId": 72,
          "amount": 1200
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 130
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 260
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 520
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ],
      "talent": {
        "id": 90723,
        "name": "暗金时装天赋6",
        "description": "全体上阵武将物防+5000，法防+5000；【光环效果】在场上时，已方全体免伤增加10%"
      }
    },
    {
      "id": 50,
      "dbId": 80050,
      "names": {
        "male": "万愚生乐",
        "female": "嬉乐翻天"
      },
      "quality": 7,
      "score": 24,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-50.png",
          "big": "assets/fashion-gallery/male-big-50.png",
          "hero": "assets/fashion-gallery/male-hero-50.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-50.png",
          "big": "assets/fashion-gallery/female-big-50.png",
          "hero": "assets/fashion-gallery/female-hero-50.png"
        }
      },
      "synthesis": {
        "id": 1800182,
        "names": {
          "male": "万愚生乐碎片",
          "female": "嬉乐翻天碎片"
        },
        "name": "万愚生乐碎片",
        "amount": 100
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 20000
        },
        {
          "id": 4,
          "amount": 2000
        },
        {
          "id": 5,
          "amount": 2000
        },
        {
          "id": 9,
          "amount": 2000
        },
        {
          "id": 6,
          "amount": 300
        },
        {
          "id": 7,
          "amount": 300
        },
        {
          "id": 8,
          "amount": 300
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 54,
          "amount": 20000
        },
        {
          "star": 2,
          "attributeId": 54,
          "amount": 40000
        },
        {
          "star": 3,
          "attributeId": 54,
          "amount": 60000
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 120
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 240
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 480
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ]
    },
    {
      "id": 51,
      "dbId": 80051,
      "names": {
        "male": "莺啼春早",
        "female": "春日闹暖"
      },
      "quality": 9,
      "score": 32,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-51.png",
          "big": "assets/fashion-gallery/male-big-51.png",
          "hero": "assets/fashion-gallery/male-hero-51.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-51.png",
          "big": "assets/fashion-gallery/female-big-51.png",
          "hero": "assets/fashion-gallery/female-hero-51.png"
        }
      },
      "synthesis": {
        "id": 1800183,
        "names": {
          "male": "莺啼春早碎片",
          "female": "春日闹暖碎片"
        },
        "name": "莺啼春早碎片",
        "amount": 180
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 40000
        },
        {
          "id": 4,
          "amount": 4000
        },
        {
          "id": 5,
          "amount": 4000
        },
        {
          "id": 9,
          "amount": 4000
        },
        {
          "id": 6,
          "amount": 400
        },
        {
          "id": 7,
          "amount": 400
        },
        {
          "id": 8,
          "amount": 400
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 73,
          "amount": 400
        },
        {
          "star": 2,
          "attributeId": 73,
          "amount": 800
        },
        {
          "star": 3,
          "attributeId": 73,
          "amount": 1200
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 130
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 260
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 520
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ],
      "talent": {
        "id": 90751,
        "name": "暗金时装天赋7",
        "description": "全体上阵武将物防+5000，法防+5000；【光环效果】在场上时，已方全体伤害增加10%"
      }
    },
    {
      "id": 52,
      "dbId": 80052,
      "names": {
        "male": "就是爱你",
        "female": "爱在我心"
      },
      "quality": 7,
      "score": 24,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-52.png",
          "big": "assets/fashion-gallery/male-big-52.png",
          "hero": "assets/fashion-gallery/male-hero-52.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-52.png",
          "big": "assets/fashion-gallery/female-big-52.png",
          "hero": "assets/fashion-gallery/female-hero-52.png"
        }
      },
      "synthesis": {
        "id": 1800184,
        "names": {
          "male": "就是爱你碎片",
          "female": "爱在我心碎片"
        },
        "name": "就是爱你碎片",
        "amount": 100
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 20000
        },
        {
          "id": 4,
          "amount": 2000
        },
        {
          "id": 5,
          "amount": 2000
        },
        {
          "id": 9,
          "amount": 2000
        },
        {
          "id": 6,
          "amount": 300
        },
        {
          "id": 7,
          "amount": 300
        },
        {
          "id": 8,
          "amount": 300
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 55,
          "amount": 20000
        },
        {
          "star": 2,
          "attributeId": 55,
          "amount": 40000
        },
        {
          "star": 3,
          "attributeId": 55,
          "amount": 60000
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 120
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 240
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 480
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ]
    },
    {
      "id": 53,
      "dbId": 80053,
      "names": {
        "male": "海之倩影",
        "female": "乐享海滩"
      },
      "quality": 7,
      "score": 24,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-53.png",
          "big": "assets/fashion-gallery/male-big-53.png",
          "hero": "assets/fashion-gallery/male-hero-53.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-53.png",
          "big": "assets/fashion-gallery/female-big-53.png",
          "hero": "assets/fashion-gallery/female-hero-53.png"
        }
      },
      "synthesis": {
        "id": 1800185,
        "names": {
          "male": "海之倩影碎片",
          "female": "乐享海滩碎片"
        },
        "name": "海之倩影碎片",
        "amount": 100
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 20000
        },
        {
          "id": 4,
          "amount": 2000
        },
        {
          "id": 5,
          "amount": 2000
        },
        {
          "id": 9,
          "amount": 2000
        },
        {
          "id": 6,
          "amount": 300
        },
        {
          "id": 7,
          "amount": 300
        },
        {
          "id": 8,
          "amount": 300
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 55,
          "amount": 20000
        },
        {
          "star": 2,
          "attributeId": 55,
          "amount": 40000
        },
        {
          "star": 3,
          "attributeId": 55,
          "amount": 60000
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 120
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 240
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 480
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ]
    },
    {
      "id": 54,
      "dbId": 80054,
      "names": {
        "male": "苍曦问穹",
        "female": "永凰飞羽"
      },
      "quality": 9,
      "score": 32,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-54.png",
          "big": "assets/fashion-gallery/male-big-54.png",
          "hero": "assets/fashion-gallery/male-hero-54.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-54.png",
          "big": "assets/fashion-gallery/female-big-54.png",
          "hero": "assets/fashion-gallery/female-hero-54.png"
        }
      },
      "synthesis": {
        "id": 1800186,
        "names": {
          "male": "苍曦问穹碎片",
          "female": "永凰飞羽碎片"
        },
        "name": "苍曦问穹碎片",
        "amount": 180
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 40000
        },
        {
          "id": 4,
          "amount": 4000
        },
        {
          "id": 5,
          "amount": 4000
        },
        {
          "id": 9,
          "amount": 4000
        },
        {
          "id": 6,
          "amount": 400
        },
        {
          "id": 7,
          "amount": 400
        },
        {
          "id": 8,
          "amount": 400
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 74,
          "amount": 400
        },
        {
          "star": 2,
          "attributeId": 74,
          "amount": 800
        },
        {
          "star": 3,
          "attributeId": 74,
          "amount": 1200
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 130
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 260
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 520
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ],
      "talent": {
        "id": 90776,
        "name": "暗金时装天赋8",
        "description": "全体上阵武将物防+5000，法防+5000；全体上阵武将伤害+5%"
      }
    },
    {
      "id": 55,
      "dbId": 80055,
      "names": {
        "male": "学无止境",
        "female": "好学不倦"
      },
      "quality": 7,
      "score": 24,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-55.png",
          "big": "assets/fashion-gallery/male-big-55.png",
          "hero": "assets/fashion-gallery/male-hero-55.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-55.png",
          "big": "assets/fashion-gallery/female-big-55.png",
          "hero": "assets/fashion-gallery/female-hero-55.png"
        }
      },
      "synthesis": {
        "id": 1800187,
        "names": {
          "male": "学无止境碎片",
          "female": "好学不倦碎片"
        },
        "name": "学无止境碎片",
        "amount": 100
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 20000
        },
        {
          "id": 4,
          "amount": 2000
        },
        {
          "id": 5,
          "amount": 2000
        },
        {
          "id": 9,
          "amount": 2000
        },
        {
          "id": 6,
          "amount": 300
        },
        {
          "id": 7,
          "amount": 300
        },
        {
          "id": 8,
          "amount": 300
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 55,
          "amount": 20000
        },
        {
          "star": 2,
          "attributeId": 55,
          "amount": 40000
        },
        {
          "star": 3,
          "attributeId": 55,
          "amount": 60000
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 120
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 240
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 480
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ]
    },
    {
      "id": 56,
      "dbId": 80056,
      "names": {
        "male": "红枫知秋",
        "female": "枫叶似火"
      },
      "quality": 9,
      "score": 32,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-56.png",
          "big": "assets/fashion-gallery/male-big-56.png",
          "hero": "assets/fashion-gallery/male-hero-56.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-56.png",
          "big": "assets/fashion-gallery/female-big-56.png",
          "hero": "assets/fashion-gallery/female-hero-56.png"
        }
      },
      "synthesis": {
        "id": 1800188,
        "names": {
          "male": "红枫知秋碎片",
          "female": "枫叶似火碎片"
        },
        "name": "红枫知秋碎片",
        "amount": 180
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 40000
        },
        {
          "id": 4,
          "amount": 4000
        },
        {
          "id": 5,
          "amount": 4000
        },
        {
          "id": 9,
          "amount": 4000
        },
        {
          "id": 6,
          "amount": 400
        },
        {
          "id": 7,
          "amount": 400
        },
        {
          "id": 8,
          "amount": 400
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 71,
          "amount": 400
        },
        {
          "star": 2,
          "attributeId": 71,
          "amount": 800
        },
        {
          "star": 3,
          "attributeId": 71,
          "amount": 1200
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 130
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 260
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 520
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ],
      "talent": {
        "id": 90850,
        "name": "暗金时装天赋9",
        "description": "全体上阵武将物防+5000，法防+5000；全体上阵武将免伤+5%"
      }
    },
    {
      "id": 57,
      "dbId": 80057,
      "names": {
        "male": "感恩有你",
        "female": "爱在浓汤"
      },
      "quality": 7,
      "score": 24,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-57.png",
          "big": "assets/fashion-gallery/male-big-57.png",
          "hero": "assets/fashion-gallery/male-hero-57.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-57.png",
          "big": "assets/fashion-gallery/female-big-57.png",
          "hero": "assets/fashion-gallery/female-hero-57.png"
        }
      },
      "synthesis": {
        "id": 1800189,
        "names": {
          "male": "感恩有你碎片",
          "female": "爱在浓汤碎片"
        },
        "name": "感恩有你碎片",
        "amount": 100
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 20000
        },
        {
          "id": 4,
          "amount": 2000
        },
        {
          "id": 5,
          "amount": 2000
        },
        {
          "id": 9,
          "amount": 2000
        },
        {
          "id": 6,
          "amount": 300
        },
        {
          "id": 7,
          "amount": 300
        },
        {
          "id": 8,
          "amount": 300
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 55,
          "amount": 20000
        },
        {
          "star": 2,
          "attributeId": 55,
          "amount": 40000
        },
        {
          "star": 3,
          "attributeId": 55,
          "amount": 60000
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 120
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 240
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 480
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ]
    },
    {
      "id": 58,
      "dbId": 80058,
      "names": {
        "male": "金牛闹春",
        "female": "盛华之筵"
      },
      "quality": 9,
      "score": 32,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-58.png",
          "big": "assets/fashion-gallery/male-big-58.png",
          "hero": "assets/fashion-gallery/male-hero-58.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-58.png",
          "big": "assets/fashion-gallery/female-big-58.png",
          "hero": "assets/fashion-gallery/female-hero-58.png"
        }
      },
      "synthesis": {
        "id": 1800190,
        "names": {
          "male": "金牛闹春碎片",
          "female": "盛华之筵碎片"
        },
        "name": "金牛闹春碎片",
        "amount": 180
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 40000
        },
        {
          "id": 4,
          "amount": 4000
        },
        {
          "id": 5,
          "amount": 4000
        },
        {
          "id": 9,
          "amount": 4000
        },
        {
          "id": 6,
          "amount": 400
        },
        {
          "id": 7,
          "amount": 400
        },
        {
          "id": 8,
          "amount": 400
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 72,
          "amount": 400
        },
        {
          "star": 2,
          "attributeId": 72,
          "amount": 800
        },
        {
          "star": 3,
          "attributeId": 72,
          "amount": 1200
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 130
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 260
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 520
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ],
      "talent": {
        "id": 90881,
        "name": "暗金时装天赋9",
        "description": "全体上阵武将物防+5000，法防+5000；怒气攻击后为己方全体武将增加10%伤害和20%命中，持续1回合"
      }
    },
    {
      "id": 59,
      "dbId": 80059,
      "names": {
        "male": "鸢入春心",
        "female": "芳景如屏"
      },
      "quality": 7,
      "score": 24,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-59.png",
          "big": "assets/fashion-gallery/male-big-59.png",
          "hero": "assets/fashion-gallery/male-hero-59.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-59.png",
          "big": "assets/fashion-gallery/female-big-59.png",
          "hero": "assets/fashion-gallery/female-hero-59.png"
        }
      },
      "synthesis": {
        "id": 1800191,
        "names": {
          "male": "鸢入春心碎片",
          "female": "芳景如屏碎片"
        },
        "name": "鸢入春心碎片",
        "amount": 100
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 20000
        },
        {
          "id": 4,
          "amount": 2000
        },
        {
          "id": 5,
          "amount": 2000
        },
        {
          "id": 9,
          "amount": 2000
        },
        {
          "id": 6,
          "amount": 300
        },
        {
          "id": 7,
          "amount": 300
        },
        {
          "id": 8,
          "amount": 300
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 55,
          "amount": 20000
        },
        {
          "star": 2,
          "attributeId": 55,
          "amount": 40000
        },
        {
          "star": 3,
          "attributeId": 55,
          "amount": 60000
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 120
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 240
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 480
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ]
    },
    {
      "id": 60,
      "dbId": 80060,
      "names": {
        "male": "快乐耕种",
        "female": "辛勤耕梦"
      },
      "quality": 7,
      "score": 24,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-60.png",
          "big": "assets/fashion-gallery/male-big-60.png",
          "hero": "assets/fashion-gallery/male-hero-60.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-60.png",
          "big": "assets/fashion-gallery/female-big-60.png",
          "hero": "assets/fashion-gallery/female-hero-60.png"
        }
      },
      "synthesis": {
        "id": 1800192,
        "names": {
          "male": "快乐耕种碎片",
          "female": "辛勤耕梦碎片"
        },
        "name": "快乐耕种碎片",
        "amount": 100
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 20000
        },
        {
          "id": 4,
          "amount": 2000
        },
        {
          "id": 5,
          "amount": 2000
        },
        {
          "id": 9,
          "amount": 2000
        },
        {
          "id": 6,
          "amount": 300
        },
        {
          "id": 7,
          "amount": 300
        },
        {
          "id": 8,
          "amount": 300
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 55,
          "amount": 20000
        },
        {
          "star": 2,
          "attributeId": 55,
          "amount": 40000
        },
        {
          "star": 3,
          "attributeId": 55,
          "amount": 60000
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 120
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 240
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 480
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ]
    },
    {
      "id": 61,
      "dbId": 80061,
      "names": {
        "male": "喜赛龙舟",
        "female": "粽香端阳"
      },
      "quality": 9,
      "score": 32,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-61.png",
          "big": "assets/fashion-gallery/male-big-61.png",
          "hero": "assets/fashion-gallery/male-hero-61.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-61.png",
          "big": "assets/fashion-gallery/female-big-61.png",
          "hero": "assets/fashion-gallery/female-hero-61.png"
        }
      },
      "synthesis": {
        "id": 1800193,
        "names": {
          "male": "喜赛龙舟碎片",
          "female": "粽香端阳碎片"
        },
        "name": "喜赛龙舟碎片",
        "amount": 180
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 40000
        },
        {
          "id": 4,
          "amount": 4000
        },
        {
          "id": 5,
          "amount": 4000
        },
        {
          "id": 9,
          "amount": 4000
        },
        {
          "id": 6,
          "amount": 400
        },
        {
          "id": 7,
          "amount": 400
        },
        {
          "id": 8,
          "amount": 400
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 73,
          "amount": 400
        },
        {
          "star": 2,
          "attributeId": 73,
          "amount": 800
        },
        {
          "star": 3,
          "attributeId": 73,
          "amount": 1200
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 130
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 260
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 520
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ],
      "talent": {
        "id": 90902,
        "name": "暗金时装天赋11",
        "description": "全体上阵武将物防+5000，法防+5000；普通攻击后为己方全体武将增加10%免伤和20%抗暴，持续1回合"
      }
    },
    {
      "id": 62,
      "dbId": 80062,
      "names": {
        "male": "赛则必胜",
        "female": "快乐奥运"
      },
      "quality": 7,
      "score": 24,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-62.png",
          "big": "assets/fashion-gallery/male-big-62.png",
          "hero": "assets/fashion-gallery/male-hero-62.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-62.png",
          "big": "assets/fashion-gallery/female-big-62.png",
          "hero": "assets/fashion-gallery/female-hero-62.png"
        }
      },
      "synthesis": {
        "id": 1800194,
        "names": {
          "male": "赛则必胜碎片",
          "female": "快乐奥运碎片"
        },
        "name": "赛则必胜碎片",
        "amount": 100
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 20000
        },
        {
          "id": 4,
          "amount": 2000
        },
        {
          "id": 5,
          "amount": 2000
        },
        {
          "id": 9,
          "amount": 2000
        },
        {
          "id": 6,
          "amount": 300
        },
        {
          "id": 7,
          "amount": 300
        },
        {
          "id": 8,
          "amount": 300
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 55,
          "amount": 20000
        },
        {
          "star": 2,
          "attributeId": 55,
          "amount": 40000
        },
        {
          "star": 3,
          "attributeId": 55,
          "amount": 60000
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 120
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 240
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 480
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ]
    },
    {
      "id": 63,
      "dbId": 80063,
      "names": {
        "male": "朝朝暮暮",
        "female": "年年岁岁"
      },
      "quality": 9,
      "score": 32,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-63.png",
          "big": "assets/fashion-gallery/male-big-63.png",
          "hero": "assets/fashion-gallery/male-hero-63.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-63.png",
          "big": "assets/fashion-gallery/female-big-63.png",
          "hero": "assets/fashion-gallery/female-hero-63.png"
        }
      },
      "synthesis": {
        "id": 1800195,
        "names": {
          "male": "朝朝暮暮碎片",
          "female": "年年岁岁碎片"
        },
        "name": "朝朝暮暮碎片",
        "amount": 180
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 40000
        },
        {
          "id": 4,
          "amount": 4000
        },
        {
          "id": 5,
          "amount": 4000
        },
        {
          "id": 9,
          "amount": 4000
        },
        {
          "id": 6,
          "amount": 400
        },
        {
          "id": 7,
          "amount": 400
        },
        {
          "id": 8,
          "amount": 400
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 74,
          "amount": 400
        },
        {
          "star": 2,
          "attributeId": 74,
          "amount": 800
        },
        {
          "star": 3,
          "attributeId": 74,
          "amount": 1200
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 130
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 260
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 520
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ],
      "talent": {
        "id": 90931,
        "name": "暗金时装天赋12",
        "description": "全体上阵武将物防+5000，法防+5000；【光环效果】在场上时，已方全体怒伤和怒免各增加5%"
      }
    },
    {
      "id": 64,
      "dbId": 80064,
      "names": {
        "male": "国粹献礼",
        "female": "倾世之唱"
      },
      "quality": 7,
      "score": 24,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-64.png",
          "big": "assets/fashion-gallery/male-big-64.png",
          "hero": "assets/fashion-gallery/male-hero-64.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-64.png",
          "big": "assets/fashion-gallery/female-big-64.png",
          "hero": "assets/fashion-gallery/female-hero-64.png"
        }
      },
      "synthesis": {
        "id": 1800196,
        "names": {
          "male": "国粹献礼碎片",
          "female": "倾世之唱碎片"
        },
        "name": "国粹献礼碎片",
        "amount": 100
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 20000
        },
        {
          "id": 4,
          "amount": 2000
        },
        {
          "id": 5,
          "amount": 2000
        },
        {
          "id": 9,
          "amount": 2000
        },
        {
          "id": 6,
          "amount": 300
        },
        {
          "id": 7,
          "amount": 300
        },
        {
          "id": 8,
          "amount": 300
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 55,
          "amount": 20000
        },
        {
          "star": 2,
          "attributeId": 55,
          "amount": 40000
        },
        {
          "star": 3,
          "attributeId": 55,
          "amount": 60000
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 120
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 240
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 480
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ]
    },
    {
      "id": 65,
      "dbId": 80065,
      "names": {
        "male": "欢聚一堂",
        "female": "锦衣玉食"
      },
      "quality": 7,
      "score": 24,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-65.png",
          "big": "assets/fashion-gallery/male-big-65.png",
          "hero": "assets/fashion-gallery/male-hero-65.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-65.png",
          "big": "assets/fashion-gallery/female-big-65.png",
          "hero": "assets/fashion-gallery/female-hero-65.png"
        }
      },
      "synthesis": {
        "id": 1800197,
        "names": {
          "male": "欢聚一堂碎片",
          "female": "锦衣玉食碎片"
        },
        "name": "欢聚一堂碎片",
        "amount": 100
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 20000
        },
        {
          "id": 4,
          "amount": 2000
        },
        {
          "id": 5,
          "amount": 2000
        },
        {
          "id": 9,
          "amount": 2000
        },
        {
          "id": 6,
          "amount": 300
        },
        {
          "id": 7,
          "amount": 300
        },
        {
          "id": 8,
          "amount": 300
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 55,
          "amount": 20000
        },
        {
          "star": 2,
          "attributeId": 55,
          "amount": 40000
        },
        {
          "star": 3,
          "attributeId": 55,
          "amount": 60000
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 120
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 240
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 480
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ]
    },
    {
      "id": 66,
      "dbId": 80066,
      "names": {
        "male": "岁旦贺新",
        "female": "福满岁旦"
      },
      "quality": 10,
      "score": 32,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-66.png",
          "big": "assets/fashion-gallery/male-big-66.png",
          "hero": "assets/fashion-gallery/male-hero-66.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-66.png",
          "big": "assets/fashion-gallery/female-big-66.png",
          "hero": "assets/fashion-gallery/female-hero-66.png"
        }
      },
      "synthesis": {
        "id": 1800198,
        "names": {
          "male": "岁旦贺新碎片",
          "female": "福满岁旦碎片"
        },
        "name": "岁旦贺新碎片",
        "amount": 200
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 40000
        },
        {
          "id": 4,
          "amount": 4000
        },
        {
          "id": 5,
          "amount": 4000
        },
        {
          "id": 9,
          "amount": 4000
        },
        {
          "id": 6,
          "amount": 400
        },
        {
          "id": 7,
          "amount": 400
        },
        {
          "id": 8,
          "amount": 400
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [
        {
          "id": 104,
          "amount": 500
        }
      ],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 56,
          "amount": 400
        },
        {
          "star": 2,
          "attributeId": 56,
          "amount": 800
        },
        {
          "star": 3,
          "attributeId": 56,
          "amount": 1200
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 120
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 240
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 480
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ],
      "talent": {
        "id": 90988,
        "name": "白金时装天赋1",
        "description": "全体上阵武将物防+7500，法防+7500；全体上阵武将物理免伤+5%"
      }
    },
    {
      "id": 67,
      "dbId": 80067,
      "names": {
        "male": "守护爱神",
        "female": "恋人絮语"
      },
      "quality": 7,
      "score": 24,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-67.png",
          "big": "assets/fashion-gallery/male-big-67.png",
          "hero": "assets/fashion-gallery/male-hero-67.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-67.png",
          "big": "assets/fashion-gallery/female-big-67.png",
          "hero": "assets/fashion-gallery/female-hero-67.png"
        }
      },
      "synthesis": {
        "id": 1800199,
        "names": {
          "male": "守护爱神碎片",
          "female": "恋人絮语碎片"
        },
        "name": "守护爱神碎片",
        "amount": 100
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 20000
        },
        {
          "id": 4,
          "amount": 2000
        },
        {
          "id": 5,
          "amount": 2000
        },
        {
          "id": 9,
          "amount": 2000
        },
        {
          "id": 6,
          "amount": 300
        },
        {
          "id": 7,
          "amount": 300
        },
        {
          "id": 8,
          "amount": 300
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 55,
          "amount": 20000
        },
        {
          "star": 2,
          "attributeId": 55,
          "amount": 40000
        },
        {
          "star": 3,
          "attributeId": 55,
          "amount": 60000
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 120
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 240
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 480
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ]
    },
    {
      "id": 68,
      "dbId": 80068,
      "names": {
        "male": "燕衔春归",
        "female": "燕报春来"
      },
      "quality": 10,
      "score": 32,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-68.png",
          "big": "assets/fashion-gallery/male-big-68.png",
          "hero": "assets/fashion-gallery/male-hero-68.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-68.png",
          "big": "assets/fashion-gallery/female-big-68.png",
          "hero": "assets/fashion-gallery/female-hero-68.png"
        }
      },
      "synthesis": {
        "id": 1800200,
        "names": {
          "male": "燕衔春归碎片",
          "female": "燕报春来碎片"
        },
        "name": "燕衔春归碎片",
        "amount": 200
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 40000
        },
        {
          "id": 4,
          "amount": 4000
        },
        {
          "id": 5,
          "amount": 4000
        },
        {
          "id": 9,
          "amount": 4000
        },
        {
          "id": 6,
          "amount": 400
        },
        {
          "id": 7,
          "amount": 400
        },
        {
          "id": 8,
          "amount": 400
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [
        {
          "id": 110,
          "amount": 500
        }
      ],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 56,
          "amount": 400
        },
        {
          "star": 2,
          "attributeId": 56,
          "amount": 800
        },
        {
          "star": 3,
          "attributeId": 56,
          "amount": 1200
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 120
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 240
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 480
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ],
      "talent": {
        "id": 91073,
        "name": "白金时装天赋2",
        "description": "全体上阵武将物防+7500，法防+7500；全体上阵武将法术免伤+5%"
      }
    },
    {
      "id": 69,
      "dbId": 80069,
      "names": {
        "male": "缤纷热浪",
        "female": "梦幻激夏"
      },
      "quality": 7,
      "score": 24,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-69.png",
          "big": "assets/fashion-gallery/male-big-69.png",
          "hero": "assets/fashion-gallery/male-hero-69.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-69.png",
          "big": "assets/fashion-gallery/female-big-69.png",
          "hero": "assets/fashion-gallery/female-hero-69.png"
        }
      },
      "synthesis": {
        "id": 1800201,
        "names": {
          "male": "缤纷热浪碎片",
          "female": "梦幻激夏碎片"
        },
        "name": "缤纷热浪碎片",
        "amount": 100
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 20000
        },
        {
          "id": 4,
          "amount": 2000
        },
        {
          "id": 5,
          "amount": 2000
        },
        {
          "id": 9,
          "amount": 2000
        },
        {
          "id": 6,
          "amount": 300
        },
        {
          "id": 7,
          "amount": 300
        },
        {
          "id": 8,
          "amount": 300
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 55,
          "amount": 20000
        },
        {
          "star": 2,
          "attributeId": 55,
          "amount": 40000
        },
        {
          "star": 3,
          "attributeId": 55,
          "amount": 60000
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 120
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 240
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 480
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ]
    },
    {
      "id": 70,
      "dbId": 80070,
      "names": {
        "male": "盛世风华",
        "female": "国色倾城"
      },
      "quality": 10,
      "score": 32,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-70.png",
          "big": "assets/fashion-gallery/male-big-70.png",
          "hero": "assets/fashion-gallery/male-hero-70.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-70.png",
          "big": "assets/fashion-gallery/female-big-70.png",
          "hero": "assets/fashion-gallery/female-hero-70.png"
        }
      },
      "synthesis": {
        "id": 1800202,
        "names": {
          "male": "盛世风华碎片",
          "female": "国色倾城碎片"
        },
        "name": "盛世风华碎片",
        "amount": 200
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 40000
        },
        {
          "id": 4,
          "amount": 4000
        },
        {
          "id": 5,
          "amount": 4000
        },
        {
          "id": 9,
          "amount": 4000
        },
        {
          "id": 6,
          "amount": 400
        },
        {
          "id": 7,
          "amount": 400
        },
        {
          "id": 8,
          "amount": 400
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [
        {
          "id": 138,
          "amount": 350
        }
      ],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 56,
          "amount": 400
        },
        {
          "star": 2,
          "attributeId": 56,
          "amount": 800
        },
        {
          "star": 3,
          "attributeId": 56,
          "amount": 1200
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 120
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 240
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 480
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ],
      "talent": {
        "id": 91433,
        "name": "白金时装天赋3",
        "description": "全体上阵武将物防+7500，法防+7500；怒气攻击后为己方攻击最高武将增加20%怒伤和40%暴击，持续2回合"
      }
    },
    {
      "id": 71,
      "dbId": 80071,
      "names": {
        "male": "绿茵冲锋",
        "female": "热舞足球"
      },
      "quality": 7,
      "score": 24,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-71.png",
          "big": "assets/fashion-gallery/male-big-71.png",
          "hero": "assets/fashion-gallery/male-hero-71.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-71.png",
          "big": "assets/fashion-gallery/female-big-71.png",
          "hero": "assets/fashion-gallery/female-hero-71.png"
        }
      },
      "synthesis": {
        "id": 1800203,
        "names": {
          "male": "绿茵冲锋碎片",
          "female": "热舞足球碎片"
        },
        "name": "绿茵冲锋碎片",
        "amount": 100
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 20000
        },
        {
          "id": 4,
          "amount": 2000
        },
        {
          "id": 5,
          "amount": 2000
        },
        {
          "id": 9,
          "amount": 2000
        },
        {
          "id": 6,
          "amount": 300
        },
        {
          "id": 7,
          "amount": 300
        },
        {
          "id": 8,
          "amount": 300
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 55,
          "amount": 20000
        },
        {
          "star": 2,
          "attributeId": 55,
          "amount": 40000
        },
        {
          "star": 3,
          "attributeId": 55,
          "amount": 60000
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 120
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 240
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 480
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ]
    },
    {
      "id": 72,
      "dbId": 80072,
      "names": {
        "male": "冰魂雪魄",
        "female": "落雪兰心"
      },
      "quality": 10,
      "score": 32,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-72.png",
          "big": "assets/fashion-gallery/male-big-72.png",
          "hero": "assets/fashion-gallery/male-hero-72.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-72.png",
          "big": "assets/fashion-gallery/female-big-72.png",
          "hero": "assets/fashion-gallery/female-hero-72.png"
        }
      },
      "synthesis": {
        "id": 1800204,
        "names": {
          "male": "冰魂雪魄碎片",
          "female": "落雪兰心碎片"
        },
        "name": "冰魂雪魄碎片",
        "amount": 200
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 40000
        },
        {
          "id": 4,
          "amount": 4000
        },
        {
          "id": 5,
          "amount": 4000
        },
        {
          "id": 9,
          "amount": 4000
        },
        {
          "id": 6,
          "amount": 400
        },
        {
          "id": 7,
          "amount": 400
        },
        {
          "id": 8,
          "amount": 400
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [
        {
          "id": 138,
          "amount": 350
        }
      ],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 57,
          "amount": 400
        },
        {
          "star": 2,
          "attributeId": 57,
          "amount": 800
        },
        {
          "star": 3,
          "attributeId": 57,
          "amount": 1200
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 120
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 240
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 480
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ],
      "talent": {
        "id": 91484,
        "name": "白金时装天赋4",
        "description": "全体上阵武将物防+7500，法防+7500；【光环效果】在场上时，已方全体物理伤害和法术伤害各增加5%"
      }
    },
    {
      "id": 73,
      "dbId": 80073,
      "names": {
        "male": "护花之使",
        "female": "花舞女神"
      },
      "quality": 7,
      "score": 24,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-73.png",
          "big": "assets/fashion-gallery/male-big-73.png",
          "hero": "assets/fashion-gallery/male-hero-73.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-73.png",
          "big": "assets/fashion-gallery/female-big-73.png",
          "hero": "assets/fashion-gallery/female-hero-73.png"
        }
      },
      "synthesis": {
        "id": 1800205,
        "names": {
          "male": "护花之使碎片",
          "female": "花舞女神碎片"
        },
        "name": "护花之使碎片",
        "amount": 100
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 20000
        },
        {
          "id": 4,
          "amount": 2000
        },
        {
          "id": 5,
          "amount": 2000
        },
        {
          "id": 9,
          "amount": 2000
        },
        {
          "id": 6,
          "amount": 300
        },
        {
          "id": 7,
          "amount": 300
        },
        {
          "id": 8,
          "amount": 300
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 55,
          "amount": 20000
        },
        {
          "star": 2,
          "attributeId": 55,
          "amount": 40000
        },
        {
          "star": 3,
          "attributeId": 55,
          "amount": 60000
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 120
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 240
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 480
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ]
    },
    {
      "id": 74,
      "dbId": 80074,
      "names": {
        "male": "深海夏梦",
        "female": "逐浪之夏"
      },
      "quality": 10,
      "score": 32,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-74.png",
          "big": "assets/fashion-gallery/male-big-74.png",
          "hero": "assets/fashion-gallery/male-hero-74.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-74.png",
          "big": "assets/fashion-gallery/female-big-74.png",
          "hero": "assets/fashion-gallery/female-hero-74.png"
        }
      },
      "synthesis": {
        "id": 1800206,
        "names": {
          "male": "深海夏梦碎片",
          "female": "逐浪之夏碎片"
        },
        "name": "深海夏梦碎片",
        "amount": 200
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 40000
        },
        {
          "id": 4,
          "amount": 4000
        },
        {
          "id": 5,
          "amount": 4000
        },
        {
          "id": 9,
          "amount": 4000
        },
        {
          "id": 6,
          "amount": 400
        },
        {
          "id": 7,
          "amount": 400
        },
        {
          "id": 8,
          "amount": 400
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [
        {
          "id": 24,
          "amount": 350
        }
      ],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 57,
          "amount": 400
        },
        {
          "star": 2,
          "attributeId": 57,
          "amount": 800
        },
        {
          "star": 3,
          "attributeId": 57,
          "amount": 1200
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 120
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 240
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 480
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ],
      "talent": {
        "id": 91550,
        "name": "白金时装天赋5",
        "description": "全体上阵武将物防+7500，法防+7500；【光环效果】在场上时，已方全体物理免伤和法术免伤各增加5%"
      }
    },
    {
      "id": 75,
      "dbId": 80075,
      "names": {
        "male": "绿茵梦想",
        "female": "传奇女将"
      },
      "quality": 7,
      "score": 24,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-75.png",
          "big": "assets/fashion-gallery/male-big-75.png",
          "hero": "assets/fashion-gallery/male-hero-75.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-75.png",
          "big": "assets/fashion-gallery/female-big-75.png",
          "hero": "assets/fashion-gallery/female-hero-75.png"
        }
      },
      "synthesis": {
        "id": 1800207,
        "names": {
          "male": "绿茵梦想碎片",
          "female": "传奇女将碎片"
        },
        "name": "绿茵梦想碎片",
        "amount": 100
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 20000
        },
        {
          "id": 4,
          "amount": 2000
        },
        {
          "id": 5,
          "amount": 2000
        },
        {
          "id": 9,
          "amount": 2000
        },
        {
          "id": 6,
          "amount": 300
        },
        {
          "id": 7,
          "amount": 300
        },
        {
          "id": 8,
          "amount": 300
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 55,
          "amount": 20000
        },
        {
          "star": 2,
          "attributeId": 55,
          "amount": 40000
        },
        {
          "star": 3,
          "attributeId": 55,
          "amount": 60000
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 120
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 240
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 480
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ]
    },
    {
      "id": 76,
      "dbId": 80076,
      "names": {
        "male": "平安之夜",
        "female": "雪人梦幻"
      },
      "quality": 10,
      "score": 32,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-76.png",
          "big": "assets/fashion-gallery/male-big-76.png",
          "hero": "assets/fashion-gallery/male-hero-76.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-76.png",
          "big": "assets/fashion-gallery/female-big-76.png",
          "hero": "assets/fashion-gallery/female-hero-76.png"
        }
      },
      "synthesis": {
        "id": 1800208,
        "names": {
          "male": "平安之夜碎片",
          "female": "雪人梦幻碎片"
        },
        "name": "平安之夜碎片",
        "amount": 200
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 40000
        },
        {
          "id": 4,
          "amount": 4000
        },
        {
          "id": 5,
          "amount": 4000
        },
        {
          "id": 9,
          "amount": 4000
        },
        {
          "id": 6,
          "amount": 400
        },
        {
          "id": 7,
          "amount": 400
        },
        {
          "id": 8,
          "amount": 400
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [
        {
          "id": 25,
          "amount": 350
        }
      ],
      "advanceStages": [],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 57,
          "amount": 400
        },
        {
          "star": 2,
          "attributeId": 57,
          "amount": 800
        },
        {
          "star": 3,
          "attributeId": 57,
          "amount": 1200
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 120
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 240
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 480
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ],
      "talent": {
        "id": 91647,
        "name": "白金时装天赋6",
        "description": "全体上阵武将物防+7500，法防+7500；全体上阵武将怒气加伤+5%，攻击+50000"
      }
    },
    {
      "id": 77,
      "dbId": 80077,
      "names": {
        "male": "碧落辉腾",
        "female": "上元盛夜"
      },
      "quality": 11,
      "score": 32,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-77.png",
          "big": "assets/fashion-gallery/male-big-77.png",
          "hero": "assets/fashion-gallery/male-hero-77.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-77.png",
          "big": "assets/fashion-gallery/female-big-77.png",
          "hero": "assets/fashion-gallery/female-hero-77.png"
        }
      },
      "synthesis": {
        "id": 1800209,
        "names": {
          "male": "碧落辉腾碎片",
          "female": "上元盛夜碎片"
        },
        "name": "碧落辉腾碎片",
        "amount": 240
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 40000
        },
        {
          "id": 4,
          "amount": 4000
        },
        {
          "id": 5,
          "amount": 4000
        },
        {
          "id": 9,
          "amount": 4000
        },
        {
          "id": 6,
          "amount": 400
        },
        {
          "id": 7,
          "amount": 400
        },
        {
          "id": 8,
          "amount": 400
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [
        {
          "id": 22,
          "amount": 500
        }
      ],
      "advanceStages": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 24,
          "amount": 400
        },
        {
          "star": 2,
          "attributeId": 24,
          "amount": 800
        },
        {
          "star": 3,
          "attributeId": 24,
          "amount": 1200
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 165
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 330
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 660
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ],
      "talent": {
        "id": 91673,
        "name": "琉金时装天赋1",
        "description": "全体上阵武将攻击+10000，生命+50000；【光环效果】在场上时，已方全体怒气加伤增加20%"
      },
      "advanceRows": [
        {
          "stage": 1,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 50000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 100
            }
          ],
          "attributes": [
            {
              "id": 57,
              "amount": 1500
            }
          ]
        },
        {
          "stage": 2,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 60000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 200
            }
          ],
          "attributes": [
            {
              "id": 61,
              "amount": 1500
            }
          ]
        },
        {
          "stage": 3,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 70000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 300
            }
          ],
          "attributes": [
            {
              "id": 56,
              "amount": 2500
            }
          ]
        },
        {
          "stage": 4,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 80000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 400
            }
          ],
          "attributes": [
            {
              "id": 60,
              "amount": 2500
            }
          ]
        },
        {
          "stage": 5,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 90000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 500
            }
          ],
          "attributes": [
            {
              "id": 25,
              "amount": 3500
            }
          ]
        },
        {
          "stage": 6,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 100000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 600
            }
          ],
          "attributes": [
            {
              "id": 24,
              "amount": 3500
            }
          ]
        },
        {
          "stage": 7,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 110000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 700
            }
          ],
          "attributes": [
            {
              "id": 101,
              "amount": 4000
            }
          ]
        },
        {
          "stage": 8,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 120000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 800
            }
          ],
          "attributes": [
            {
              "id": 102,
              "amount": 4000
            }
          ]
        },
        {
          "stage": 9,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 130000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 900
            }
          ],
          "attributes": [
            {
              "id": 179,
              "amount": 4500
            }
          ]
        },
        {
          "stage": 10,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 140000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 1000
            }
          ],
          "attributes": [
            {
              "id": 180,
              "amount": 4500
            }
          ]
        }
      ]
    },
    {
      "id": 78,
      "dbId": 80078,
      "names": {
        "male": "高头大马",
        "female": "十里红妆"
      },
      "quality": 11,
      "score": 32,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-78.png",
          "big": "assets/fashion-gallery/male-big-78.png",
          "hero": "assets/fashion-gallery/male-hero-78.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-78.png",
          "big": "assets/fashion-gallery/female-big-78.png",
          "hero": "assets/fashion-gallery/female-hero-78.png"
        }
      },
      "synthesis": {
        "id": 1800210,
        "names": {
          "male": "高头大马碎片",
          "female": "十里红妆碎片"
        },
        "name": "高头大马碎片",
        "amount": 240
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 40000
        },
        {
          "id": 4,
          "amount": 4000
        },
        {
          "id": 5,
          "amount": 4000
        },
        {
          "id": 9,
          "amount": 4000
        },
        {
          "id": 6,
          "amount": 400
        },
        {
          "id": 7,
          "amount": 400
        },
        {
          "id": 8,
          "amount": 400
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [
        {
          "id": 23,
          "amount": 500
        }
      ],
      "advanceStages": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 24,
          "amount": 400
        },
        {
          "star": 2,
          "attributeId": 24,
          "amount": 800
        },
        {
          "star": 3,
          "attributeId": 24,
          "amount": 1200
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 165
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 330
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 660
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ],
      "talent": {
        "id": 91776,
        "name": "琉金时装天赋1",
        "description": "全体上阵武将攻击+10000，生命+50000；【光环效果】在场上时，已方全体怒气减伤增加20%"
      },
      "advanceRows": [
        {
          "stage": 1,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 50000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 100
            }
          ],
          "attributes": [
            {
              "id": 57,
              "amount": 1500
            }
          ]
        },
        {
          "stage": 2,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 60000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 200
            }
          ],
          "attributes": [
            {
              "id": 61,
              "amount": 1500
            }
          ]
        },
        {
          "stage": 3,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 70000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 300
            }
          ],
          "attributes": [
            {
              "id": 56,
              "amount": 2500
            }
          ]
        },
        {
          "stage": 4,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 80000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 400
            }
          ],
          "attributes": [
            {
              "id": 60,
              "amount": 2500
            }
          ]
        },
        {
          "stage": 5,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 90000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 500
            }
          ],
          "attributes": [
            {
              "id": 25,
              "amount": 3500
            }
          ]
        },
        {
          "stage": 6,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 100000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 600
            }
          ],
          "attributes": [
            {
              "id": 24,
              "amount": 3500
            }
          ]
        },
        {
          "stage": 7,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 110000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 700
            }
          ],
          "attributes": [
            {
              "id": 101,
              "amount": 4000
            }
          ]
        },
        {
          "stage": 8,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 120000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 800
            }
          ],
          "attributes": [
            {
              "id": 102,
              "amount": 4000
            }
          ]
        },
        {
          "stage": 9,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 130000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 900
            }
          ],
          "attributes": [
            {
              "id": 179,
              "amount": 4500
            }
          ]
        },
        {
          "stage": 10,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 140000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 1000
            }
          ],
          "attributes": [
            {
              "id": 180,
              "amount": 4500
            }
          ]
        }
      ]
    },
    {
      "id": 79,
      "dbId": 80079,
      "names": {
        "male": "挚爱一生",
        "female": "心心相印"
      },
      "quality": 11,
      "score": 32,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-79.png",
          "big": "assets/fashion-gallery/male-big-79.png",
          "hero": "assets/fashion-gallery/male-hero-79.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-79.png",
          "big": "assets/fashion-gallery/female-big-79.png",
          "hero": "assets/fashion-gallery/female-hero-79.png"
        }
      },
      "synthesis": {
        "id": 1800211,
        "names": {
          "male": "挚爱一生碎片",
          "female": "心心相印碎片"
        },
        "name": "挚爱一生碎片",
        "amount": 240
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 40000
        },
        {
          "id": 4,
          "amount": 4000
        },
        {
          "id": 5,
          "amount": 4000
        },
        {
          "id": 9,
          "amount": 4000
        },
        {
          "id": 6,
          "amount": 400
        },
        {
          "id": 7,
          "amount": 400
        },
        {
          "id": 8,
          "amount": 400
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [
        {
          "id": 24,
          "amount": 500
        }
      ],
      "advanceStages": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 24,
          "amount": 400
        },
        {
          "star": 2,
          "attributeId": 24,
          "amount": 800
        },
        {
          "star": 3,
          "attributeId": 24,
          "amount": 1200
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 165
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 330
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 660
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ],
      "talent": {
        "id": 92043,
        "name": "琉金时装天赋3",
        "description": "全体上阵武将攻击+10000，生命+50000；全体上阵武将怒气减伤+10%，攻击+50000"
      },
      "advanceRows": [
        {
          "stage": 1,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 50000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 100
            }
          ],
          "attributes": [
            {
              "id": 57,
              "amount": 1500
            }
          ]
        },
        {
          "stage": 2,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 60000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 200
            }
          ],
          "attributes": [
            {
              "id": 61,
              "amount": 1500
            }
          ]
        },
        {
          "stage": 3,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 70000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 300
            }
          ],
          "attributes": [
            {
              "id": 56,
              "amount": 2500
            }
          ]
        },
        {
          "stage": 4,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 80000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 400
            }
          ],
          "attributes": [
            {
              "id": 60,
              "amount": 2500
            }
          ]
        },
        {
          "stage": 5,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 90000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 500
            }
          ],
          "attributes": [
            {
              "id": 25,
              "amount": 3500
            }
          ]
        },
        {
          "stage": 6,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 100000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 600
            }
          ],
          "attributes": [
            {
              "id": 24,
              "amount": 3500
            }
          ]
        },
        {
          "stage": 7,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 110000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 700
            }
          ],
          "attributes": [
            {
              "id": 101,
              "amount": 4000
            }
          ]
        },
        {
          "stage": 8,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 120000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 800
            }
          ],
          "attributes": [
            {
              "id": 102,
              "amount": 4000
            }
          ]
        },
        {
          "stage": 9,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 130000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 900
            }
          ],
          "attributes": [
            {
              "id": 179,
              "amount": 4500
            }
          ]
        },
        {
          "stage": 10,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 140000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 1000
            }
          ],
          "attributes": [
            {
              "id": 180,
              "amount": 4500
            }
          ]
        }
      ]
    },
    {
      "id": 80,
      "dbId": 80080,
      "names": {
        "male": "浪涌星河",
        "female": "海语如诗"
      },
      "quality": 11,
      "score": 32,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-80.png",
          "big": "assets/fashion-gallery/male-big-80.png",
          "hero": "assets/fashion-gallery/male-hero-80.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-80.png",
          "big": "assets/fashion-gallery/female-big-80.png",
          "hero": "assets/fashion-gallery/female-hero-80.png"
        }
      },
      "synthesis": {
        "id": 1800212,
        "names": {
          "male": "浪涌星河碎片",
          "female": "海语如诗碎片"
        },
        "name": "浪涌星河碎片",
        "amount": 240
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 40000
        },
        {
          "id": 4,
          "amount": 4000
        },
        {
          "id": 5,
          "amount": 4000
        },
        {
          "id": 9,
          "amount": 4000
        },
        {
          "id": 6,
          "amount": 400
        },
        {
          "id": 7,
          "amount": 400
        },
        {
          "id": 8,
          "amount": 400
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [
        {
          "id": 25,
          "amount": 500
        }
      ],
      "advanceStages": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 25,
          "amount": 400
        },
        {
          "star": 2,
          "attributeId": 25,
          "amount": 800
        },
        {
          "star": 3,
          "attributeId": 25,
          "amount": 1200
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 165
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 330
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 660
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ],
      "talent": {
        "id": 92172,
        "name": "琉金时装天赋4",
        "description": "全体上阵武将攻击+10000，生命+50000；全体上阵武将怒气加伤+10%，攻击+50000"
      },
      "advanceRows": [
        {
          "stage": 1,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 50000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 100
            }
          ],
          "attributes": [
            {
              "id": 57,
              "amount": 1500
            }
          ]
        },
        {
          "stage": 2,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 60000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 200
            }
          ],
          "attributes": [
            {
              "id": 61,
              "amount": 1500
            }
          ]
        },
        {
          "stage": 3,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 70000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 300
            }
          ],
          "attributes": [
            {
              "id": 56,
              "amount": 2500
            }
          ]
        },
        {
          "stage": 4,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 80000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 400
            }
          ],
          "attributes": [
            {
              "id": 60,
              "amount": 2500
            }
          ]
        },
        {
          "stage": 5,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 90000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 500
            }
          ],
          "attributes": [
            {
              "id": 25,
              "amount": 3500
            }
          ]
        },
        {
          "stage": 6,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 100000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 600
            }
          ],
          "attributes": [
            {
              "id": 24,
              "amount": 3500
            }
          ]
        },
        {
          "stage": 7,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 110000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 700
            }
          ],
          "attributes": [
            {
              "id": 101,
              "amount": 4000
            }
          ]
        },
        {
          "stage": 8,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 120000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 800
            }
          ],
          "attributes": [
            {
              "id": 102,
              "amount": 4000
            }
          ]
        },
        {
          "stage": 9,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 130000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 900
            }
          ],
          "attributes": [
            {
              "id": 179,
              "amount": 4500
            }
          ]
        },
        {
          "stage": 10,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 140000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 1000
            }
          ],
          "attributes": [
            {
              "id": 180,
              "amount": 4500
            }
          ]
        }
      ]
    },
    {
      "id": 81,
      "dbId": 80081,
      "names": {
        "male": "初雪沾衣",
        "female": "寒阳映阶"
      },
      "quality": 11,
      "score": 32,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-81.png",
          "big": "assets/fashion-gallery/male-big-81.png",
          "hero": "assets/fashion-gallery/male-hero-81.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-81.png",
          "big": "assets/fashion-gallery/female-big-81.png",
          "hero": "assets/fashion-gallery/female-hero-81.png"
        }
      },
      "synthesis": {
        "id": 1800213,
        "names": {
          "male": "初雪沾衣碎片",
          "female": "寒阳映阶碎片"
        },
        "name": "初雪沾衣碎片",
        "amount": 240
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 40000
        },
        {
          "id": 4,
          "amount": 4000
        },
        {
          "id": 5,
          "amount": 4000
        },
        {
          "id": 9,
          "amount": 4000
        },
        {
          "id": 6,
          "amount": 400
        },
        {
          "id": 7,
          "amount": 400
        },
        {
          "id": 8,
          "amount": 400
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [
        {
          "id": 22,
          "amount": 500
        }
      ],
      "advanceStages": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 25,
          "amount": 400
        },
        {
          "star": 2,
          "attributeId": 25,
          "amount": 800
        },
        {
          "star": 3,
          "attributeId": 25,
          "amount": 1200
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 165
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 330
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 660
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ],
      "talent": {
        "id": 92362,
        "name": "琉金时装天赋5",
        "description": "全体上阵武将攻击+10000，生命+50000；全体上阵武将伤害+10%，攻击+50000"
      },
      "advanceRows": [
        {
          "stage": 1,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 50000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 100
            }
          ],
          "attributes": [
            {
              "id": 57,
              "amount": 1500
            }
          ]
        },
        {
          "stage": 2,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 60000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 200
            }
          ],
          "attributes": [
            {
              "id": 61,
              "amount": 1500
            }
          ]
        },
        {
          "stage": 3,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 70000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 300
            }
          ],
          "attributes": [
            {
              "id": 56,
              "amount": 2500
            }
          ]
        },
        {
          "stage": 4,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 80000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 400
            }
          ],
          "attributes": [
            {
              "id": 60,
              "amount": 2500
            }
          ]
        },
        {
          "stage": 5,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 90000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 500
            }
          ],
          "attributes": [
            {
              "id": 25,
              "amount": 3500
            }
          ]
        },
        {
          "stage": 6,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 100000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 600
            }
          ],
          "attributes": [
            {
              "id": 24,
              "amount": 3500
            }
          ]
        },
        {
          "stage": 7,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 110000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 700
            }
          ],
          "attributes": [
            {
              "id": 101,
              "amount": 4000
            }
          ]
        },
        {
          "stage": 8,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 120000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 800
            }
          ],
          "attributes": [
            {
              "id": 102,
              "amount": 4000
            }
          ]
        },
        {
          "stage": 9,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 130000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 900
            }
          ],
          "attributes": [
            {
              "id": 179,
              "amount": 4500
            }
          ]
        },
        {
          "stage": 10,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 140000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 1000
            }
          ],
          "attributes": [
            {
              "id": 180,
              "amount": 4500
            }
          ]
        }
      ]
    },
    {
      "id": 82,
      "dbId": 80082,
      "names": {
        "male": "迎新华裳",
        "female": "辞旧红妆"
      },
      "quality": 11,
      "score": 32,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-82.png",
          "big": "assets/fashion-gallery/male-big-82.png",
          "hero": "assets/fashion-gallery/male-hero-82.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-82.png",
          "big": "assets/fashion-gallery/female-big-82.png",
          "hero": "assets/fashion-gallery/female-hero-82.png"
        }
      },
      "synthesis": {
        "id": 1800214,
        "names": {
          "male": "迎新华裳碎片",
          "female": "辞旧红妆碎片"
        },
        "name": "迎新华裳碎片",
        "amount": 240
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 40000
        },
        {
          "id": 4,
          "amount": 4000
        },
        {
          "id": 5,
          "amount": 4000
        },
        {
          "id": 9,
          "amount": 4000
        },
        {
          "id": 6,
          "amount": 400
        },
        {
          "id": 7,
          "amount": 400
        },
        {
          "id": 8,
          "amount": 400
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [
        {
          "id": 23,
          "amount": 500
        }
      ],
      "advanceStages": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 25,
          "amount": 400
        },
        {
          "star": 2,
          "attributeId": 25,
          "amount": 800
        },
        {
          "star": 3,
          "attributeId": 25,
          "amount": 1200
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 165
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 330
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 660
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ],
      "talent": {
        "id": 92395,
        "name": "琉金时装天赋6",
        "description": "全体上阵武将攻击+20000；全体上阵武将免伤+10%，攻击+50000"
      },
      "advanceRows": [
        {
          "stage": 1,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 50000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 100
            }
          ],
          "attributes": [
            {
              "id": 57,
              "amount": 1500
            }
          ]
        },
        {
          "stage": 2,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 60000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 200
            }
          ],
          "attributes": [
            {
              "id": 61,
              "amount": 1500
            }
          ]
        },
        {
          "stage": 3,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 70000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 300
            }
          ],
          "attributes": [
            {
              "id": 56,
              "amount": 2500
            }
          ]
        },
        {
          "stage": 4,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 80000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 400
            }
          ],
          "attributes": [
            {
              "id": 60,
              "amount": 2500
            }
          ]
        },
        {
          "stage": 5,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 90000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 500
            }
          ],
          "attributes": [
            {
              "id": 25,
              "amount": 3500
            }
          ]
        },
        {
          "stage": 6,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 100000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 600
            }
          ],
          "attributes": [
            {
              "id": 24,
              "amount": 3500
            }
          ]
        },
        {
          "stage": 7,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 110000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 700
            }
          ],
          "attributes": [
            {
              "id": 101,
              "amount": 4000
            }
          ]
        },
        {
          "stage": 8,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 120000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 800
            }
          ],
          "attributes": [
            {
              "id": 102,
              "amount": 4000
            }
          ]
        },
        {
          "stage": 9,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 130000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 900
            }
          ],
          "attributes": [
            {
              "id": 179,
              "amount": 4500
            }
          ]
        },
        {
          "stage": 10,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 140000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 1000
            }
          ],
          "attributes": [
            {
              "id": 180,
              "amount": 4500
            }
          ]
        }
      ]
    },
    {
      "id": 83,
      "dbId": 80083,
      "names": {
        "male": "沧浪星沉",
        "female": "洛水惊鸿"
      },
      "quality": 12,
      "score": 32,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-83.png",
          "big": "assets/fashion-gallery/male-big-83.png",
          "hero": "assets/fashion-gallery/male-hero-83.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-83.png",
          "big": "assets/fashion-gallery/female-big-83.png",
          "hero": "assets/fashion-gallery/female-hero-83.png"
        }
      },
      "synthesis": {
        "id": 1800215,
        "names": {
          "male": "沧浪星沉碎片",
          "female": "洛水惊鸿碎片"
        },
        "name": "沧浪星沉碎片",
        "amount": 280
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 40000
        },
        {
          "id": 4,
          "amount": 4000
        },
        {
          "id": 5,
          "amount": 4000
        },
        {
          "id": 9,
          "amount": 4000
        },
        {
          "id": 6,
          "amount": 400
        },
        {
          "id": 7,
          "amount": 400
        },
        {
          "id": 8,
          "amount": 400
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [
        {
          "id": 233,
          "amount": 500
        }
      ],
      "advanceStages": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 22,
          "amount": 400
        },
        {
          "star": 2,
          "attributeId": 22,
          "amount": 800
        },
        {
          "star": 3,
          "attributeId": 22,
          "amount": 1200
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 165
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 330
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 660
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ],
      "talent": {
        "id": 92439,
        "name": "澜金时装天赋1",
        "description": "全体上阵武将物防+15000，法防+15000；【光环效果】在场上时，已方全体追击增伤增加15%"
      },
      "advanceRows": [
        {
          "stage": 1,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 50000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 100
            }
          ],
          "attributes": [
            {
              "id": 57,
              "amount": 1500
            }
          ]
        },
        {
          "stage": 2,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 60000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 200
            }
          ],
          "attributes": [
            {
              "id": 61,
              "amount": 1500
            }
          ]
        },
        {
          "stage": 3,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 70000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 300
            }
          ],
          "attributes": [
            {
              "id": 56,
              "amount": 2500
            }
          ]
        },
        {
          "stage": 4,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 80000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 400
            }
          ],
          "attributes": [
            {
              "id": 60,
              "amount": 2500
            }
          ]
        },
        {
          "stage": 5,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 90000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 500
            }
          ],
          "attributes": [
            {
              "id": 25,
              "amount": 3500
            }
          ]
        },
        {
          "stage": 6,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 100000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 600
            }
          ],
          "attributes": [
            {
              "id": 24,
              "amount": 3500
            }
          ]
        },
        {
          "stage": 7,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 110000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 700
            }
          ],
          "attributes": [
            {
              "id": 101,
              "amount": 4000
            }
          ]
        },
        {
          "stage": 8,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 120000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 800
            }
          ],
          "attributes": [
            {
              "id": 102,
              "amount": 4000
            }
          ]
        },
        {
          "stage": 9,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 130000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 900
            }
          ],
          "attributes": [
            {
              "id": 179,
              "amount": 4500
            }
          ]
        },
        {
          "stage": 10,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 140000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 1000
            }
          ],
          "attributes": [
            {
              "id": 180,
              "amount": 4500
            }
          ]
        }
      ]
    },
    {
      "id": 84,
      "dbId": 80084,
      "names": {
        "male": "九五至尊",
        "female": "凤火王座"
      },
      "quality": 12,
      "score": 32,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-84.png",
          "big": "assets/fashion-gallery/male-big-84.png",
          "hero": "assets/fashion-gallery/male-hero-84.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-84.png",
          "big": "assets/fashion-gallery/female-big-84.png",
          "hero": "assets/fashion-gallery/female-hero-84.png"
        }
      },
      "synthesis": {
        "id": 1800216,
        "names": {
          "male": "九五至尊碎片",
          "female": "凤火王座碎片"
        },
        "name": "九五至尊碎片",
        "amount": 280
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 40000
        },
        {
          "id": 4,
          "amount": 4000
        },
        {
          "id": 5,
          "amount": 4000
        },
        {
          "id": 9,
          "amount": 4000
        },
        {
          "id": 6,
          "amount": 400
        },
        {
          "id": 7,
          "amount": 400
        },
        {
          "id": 8,
          "amount": 400
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [
        {
          "id": 233,
          "amount": 500
        }
      ],
      "advanceStages": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 23,
          "amount": 400
        },
        {
          "star": 2,
          "attributeId": 23,
          "amount": 800
        },
        {
          "star": 3,
          "attributeId": 23,
          "amount": 1200
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 165
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 330
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 660
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ],
      "talent": {
        "id": 92440,
        "name": "澜金时装天赋2",
        "description": "全体上阵武将物防+15000，法防+15000；【光环效果】在场上时，已方全体追击减伤增加15%"
      },
      "advanceRows": [
        {
          "stage": 1,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 50000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 100
            }
          ],
          "attributes": [
            {
              "id": 57,
              "amount": 1500
            }
          ]
        },
        {
          "stage": 2,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 60000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 200
            }
          ],
          "attributes": [
            {
              "id": 61,
              "amount": 1500
            }
          ]
        },
        {
          "stage": 3,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 70000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 300
            }
          ],
          "attributes": [
            {
              "id": 56,
              "amount": 2500
            }
          ]
        },
        {
          "stage": 4,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 80000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 400
            }
          ],
          "attributes": [
            {
              "id": 60,
              "amount": 2500
            }
          ]
        },
        {
          "stage": 5,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 90000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 500
            }
          ],
          "attributes": [
            {
              "id": 25,
              "amount": 3500
            }
          ]
        },
        {
          "stage": 6,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 100000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 600
            }
          ],
          "attributes": [
            {
              "id": 24,
              "amount": 3500
            }
          ]
        },
        {
          "stage": 7,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 110000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 700
            }
          ],
          "attributes": [
            {
              "id": 101,
              "amount": 4000
            }
          ]
        },
        {
          "stage": 8,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 120000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 800
            }
          ],
          "attributes": [
            {
              "id": 102,
              "amount": 4000
            }
          ]
        },
        {
          "stage": 9,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 130000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 900
            }
          ],
          "attributes": [
            {
              "id": 179,
              "amount": 4500
            }
          ]
        },
        {
          "stage": 10,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 140000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 1000
            }
          ],
          "attributes": [
            {
              "id": 180,
              "amount": 4500
            }
          ]
        }
      ]
    },
    {
      "id": 85,
      "dbId": 80085,
      "names": {
        "male": "金杯猎影",
        "female": "黄衫舞裙"
      },
      "quality": 12,
      "score": 32,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-85.png",
          "big": "assets/fashion-gallery/male-big-85.png",
          "hero": "assets/fashion-gallery/male-hero-85.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-85.png",
          "big": "assets/fashion-gallery/female-big-85.png",
          "hero": "assets/fashion-gallery/female-hero-85.png"
        }
      },
      "synthesis": {
        "id": 1800217,
        "names": {
          "male": "金杯猎影碎片",
          "female": "黄衫舞裙碎片"
        },
        "name": "金杯猎影碎片",
        "amount": 280
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 40000
        },
        {
          "id": 4,
          "amount": 4000
        },
        {
          "id": 5,
          "amount": 4000
        },
        {
          "id": 9,
          "amount": 4000
        },
        {
          "id": 6,
          "amount": 400
        },
        {
          "id": 7,
          "amount": 400
        },
        {
          "id": 8,
          "amount": 400
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [
        {
          "id": 233,
          "amount": 500
        }
      ],
      "advanceStages": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 23,
          "amount": 400
        },
        {
          "star": 2,
          "attributeId": 23,
          "amount": 800
        },
        {
          "star": 3,
          "attributeId": 23,
          "amount": 1200
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 165
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 330
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 660
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ],
      "talent": {
        "id": 92469,
        "name": "澜金时装天赋3",
        "description": "全体上阵武将物防+15000，法防+15000；怒气攻击后为己方全体武将增加20%追击增伤，持续1回合"
      },
      "advanceRows": [
        {
          "stage": 1,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 50000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 100
            }
          ],
          "attributes": [
            {
              "id": 57,
              "amount": 1500
            }
          ]
        },
        {
          "stage": 2,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 60000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 200
            }
          ],
          "attributes": [
            {
              "id": 61,
              "amount": 1500
            }
          ]
        },
        {
          "stage": 3,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 70000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 300
            }
          ],
          "attributes": [
            {
              "id": 56,
              "amount": 2500
            }
          ]
        },
        {
          "stage": 4,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 80000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 400
            }
          ],
          "attributes": [
            {
              "id": 60,
              "amount": 2500
            }
          ]
        },
        {
          "stage": 5,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 90000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 500
            }
          ],
          "attributes": [
            {
              "id": 25,
              "amount": 3500
            }
          ]
        },
        {
          "stage": 6,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 100000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 600
            }
          ],
          "attributes": [
            {
              "id": 24,
              "amount": 3500
            }
          ]
        },
        {
          "stage": 7,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 110000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 700
            }
          ],
          "attributes": [
            {
              "id": 101,
              "amount": 4000
            }
          ]
        },
        {
          "stage": 8,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 120000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 800
            }
          ],
          "attributes": [
            {
              "id": 102,
              "amount": 4000
            }
          ]
        },
        {
          "stage": 9,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 130000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 900
            }
          ],
          "attributes": [
            {
              "id": 179,
              "amount": 4500
            }
          ]
        },
        {
          "stage": 10,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 140000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 1000
            }
          ],
          "attributes": [
            {
              "id": 180,
              "amount": 4500
            }
          ]
        }
      ]
    },
    {
      "id": 86,
      "dbId": 80086,
      "names": {
        "male": "清宵葫君",
        "female": "荷月莲心"
      },
      "quality": 12,
      "score": 32,
      "assets": {
        "male": {
          "small": "assets/fashion-gallery/male-small-86.png",
          "big": "assets/fashion-gallery/male-big-86.png",
          "hero": "assets/fashion-gallery/male-hero-86.png"
        },
        "female": {
          "small": "assets/fashion-gallery/female-small-86.png",
          "big": "assets/fashion-gallery/female-big-86.png",
          "hero": "assets/fashion-gallery/female-hero-86.png"
        }
      },
      "synthesis": {
        "id": 1800218,
        "names": {
          "male": "清宵葫君碎片",
          "female": "荷月莲心碎片"
        },
        "name": "清宵葫君碎片",
        "amount": 280
      },
      "baseAttributes": [
        {
          "id": 1,
          "amount": 40000
        },
        {
          "id": 4,
          "amount": 4000
        },
        {
          "id": 5,
          "amount": 4000
        },
        {
          "id": 9,
          "amount": 4000
        },
        {
          "id": 6,
          "amount": 400
        },
        {
          "id": 7,
          "amount": 400
        },
        {
          "id": 8,
          "amount": 400
        }
      ],
      "growthAttributes": [
        {
          "id": 1,
          "amount": 4000
        },
        {
          "id": 4,
          "amount": 400
        },
        {
          "id": 5,
          "amount": 400
        },
        {
          "id": 9,
          "amount": 400
        },
        {
          "id": 6,
          "amount": 60
        },
        {
          "id": 7,
          "amount": 60
        },
        {
          "id": 8,
          "amount": 60
        }
      ],
      "strengthenPlan": 4,
      "maxLevel": 280,
      "advanceAttribute": [
        {
          "id": 233,
          "amount": 500
        }
      ],
      "advanceStages": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
      ],
      "starAttributes": [
        {
          "star": 1,
          "attributeId": 23,
          "amount": 400
        },
        {
          "star": 2,
          "attributeId": 23,
          "amount": 800
        },
        {
          "star": 3,
          "attributeId": 23,
          "amount": 1200
        }
      ],
      "starCosts": [
        {
          "star": 1,
          "type": 7,
          "materialId": 69060,
          "amount": 165
        },
        {
          "star": 2,
          "type": 7,
          "materialId": 69060,
          "amount": 330
        },
        {
          "star": 3,
          "type": 7,
          "materialId": 69060,
          "amount": 660
        }
      ],
      "strengthenAttributes": [
        {
          "level": 1,
          "attributeId": 51,
          "amount": 2500
        },
        {
          "level": 3,
          "attributeId": 100,
          "amount": 500
        },
        {
          "level": 5,
          "attributeId": 51,
          "amount": 5000
        },
        {
          "level": 7,
          "attributeId": 100,
          "amount": 1000
        },
        {
          "level": 9,
          "attributeId": 51,
          "amount": 7500
        },
        {
          "level": 11,
          "attributeId": 100,
          "amount": 1500
        },
        {
          "level": 13,
          "attributeId": 51,
          "amount": 10000
        },
        {
          "level": 15,
          "attributeId": 100,
          "amount": 2500
        },
        {
          "level": 17,
          "attributeId": 51,
          "amount": 12500
        },
        {
          "level": 19,
          "attributeId": 100,
          "amount": 3000
        },
        {
          "level": 21,
          "attributeId": 51,
          "amount": 17500
        },
        {
          "level": 23,
          "attributeId": 100,
          "amount": 4000
        },
        {
          "level": 25,
          "attributeId": 51,
          "amount": 22500
        },
        {
          "level": 27,
          "attributeId": 100,
          "amount": 5000
        },
        {
          "level": 29,
          "attributeId": 51,
          "amount": 27500
        },
        {
          "level": 31,
          "attributeId": 100,
          "amount": 6000
        },
        {
          "level": 33,
          "attributeId": 51,
          "amount": 32500
        },
        {
          "level": 35,
          "attributeId": 100,
          "amount": 7000
        },
        {
          "level": 37,
          "attributeId": 51,
          "amount": 37500
        },
        {
          "level": 39,
          "attributeId": 100,
          "amount": 8000
        },
        {
          "level": 41,
          "attributeId": 51,
          "amount": 42500
        },
        {
          "level": 43,
          "attributeId": 100,
          "amount": 9000
        },
        {
          "level": 45,
          "attributeId": 51,
          "amount": 47500
        },
        {
          "level": 47,
          "attributeId": 100,
          "amount": 10000
        },
        {
          "level": 49,
          "attributeId": 51,
          "amount": 52500
        },
        {
          "level": 51,
          "attributeId": 100,
          "amount": 11000
        },
        {
          "level": 53,
          "attributeId": 51,
          "amount": 57500
        },
        {
          "level": 55,
          "attributeId": 100,
          "amount": 12000
        },
        {
          "level": 57,
          "attributeId": 51,
          "amount": 62500
        },
        {
          "level": 59,
          "attributeId": 100,
          "amount": 13000
        },
        {
          "level": 61,
          "attributeId": 51,
          "amount": 67500
        },
        {
          "level": 63,
          "attributeId": 100,
          "amount": 14000
        },
        {
          "level": 65,
          "attributeId": 51,
          "amount": 72500
        },
        {
          "level": 67,
          "attributeId": 100,
          "amount": 15000
        },
        {
          "level": 69,
          "attributeId": 51,
          "amount": 77500
        }
      ],
      "talent": {
        "id": 92511,
        "name": "澜金时装天赋4",
        "description": "全体上阵武将物防+15000，法防+15000；怒气攻击后为己方全体武将增加20%追击减伤，持续1回合"
      },
      "advanceRows": [
        {
          "stage": 1,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 50000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 100
            }
          ],
          "attributes": [
            {
              "id": 57,
              "amount": 1500
            }
          ]
        },
        {
          "stage": 2,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 60000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 200
            }
          ],
          "attributes": [
            {
              "id": 61,
              "amount": 1500
            }
          ]
        },
        {
          "stage": 3,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 70000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 300
            }
          ],
          "attributes": [
            {
              "id": 56,
              "amount": 2500
            }
          ]
        },
        {
          "stage": 4,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 80000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 400
            }
          ],
          "attributes": [
            {
              "id": 60,
              "amount": 2500
            }
          ]
        },
        {
          "stage": 5,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 90000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 500
            }
          ],
          "attributes": [
            {
              "id": 25,
              "amount": 3500
            }
          ]
        },
        {
          "stage": 6,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 100000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 600
            }
          ],
          "attributes": [
            {
              "id": 24,
              "amount": 3500
            }
          ]
        },
        {
          "stage": 7,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 110000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 700
            }
          ],
          "attributes": [
            {
              "id": 101,
              "amount": 4000
            }
          ]
        },
        {
          "stage": 8,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 120000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 800
            }
          ],
          "attributes": [
            {
              "id": 102,
              "amount": 4000
            }
          ]
        },
        {
          "stage": 9,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 130000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 900
            }
          ],
          "attributes": [
            {
              "id": 179,
              "amount": 4500
            }
          ]
        },
        {
          "stage": 10,
          "costs": [
            {
              "type": 1,
              "materialId": 0,
              "amount": 140000000
            },
            {
              "type": 7,
              "materialId": 69043,
              "amount": 1000
            }
          ],
          "attributes": [
            {
              "id": 180,
              "amount": 4500
            }
          ]
        }
      ]
    }
  ]
};
