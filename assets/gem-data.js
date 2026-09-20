// 宝石数据维护区：由 DB_Item_gem.lua 整理生成。
// 更新解包数据后重新运行 .tmp-generate-gem-data.js。
window.gemData = {
  "maxLevel": 10,
  "composeQuantity": 3,
  "typeNames": {
    "1": "攻击",
    "2": "生命",
    "3": "物防",
    "4": "法防",
    "5": "抗魏",
    "6": "抗蜀",
    "7": "抗吴",
    "8": "抗群",
    "9": "破魏",
    "10": "破蜀",
    "11": "破吴",
    "12": "破群",
    "13": "加伤",
    "14": "减伤",
    "15": "怒减",
    "16": "怒加"
  },
  "attributeNames": {
    "51": "生命",
    "54": "物防",
    "55": "法防",
    "60": "怒气增加",
    "61": "怒气减少",
    "67": "破魏",
    "68": "破蜀",
    "69": "破吴",
    "70": "破群",
    "71": "抗魏",
    "72": "抗蜀",
    "73": "抗吴",
    "74": "抗群",
    "100": "攻击",
    "101": "加伤",
    "102": "减伤"
  },
  "qualityNames": {
    "2": "绿色",
    "3": "蓝色",
    "4": "紫色",
    "5": "橙色",
    "6": "红色",
    "7": "金色",
    "8": "暗金色",
    "9": "白金色",
    "10": "琉金色",
    "11": "幻彩色"
  },
  "materials": {
    "63005": {
      "name": "宝石合成符",
      "icon": "assets/gem-items/hechengquan.png"
    }
  },
  "gems": [
    {
      "id": 90001,
      "name": "1级攻击宝石",
      "type": 1,
      "typeName": "攻击",
      "level": 1,
      "quality": 2,
      "qualityName": "绿色",
      "smallIcon": "assets/gem-icons/small_gongji1.png",
      "bigIcon": "assets/gem-icons/big_gongji1.png",
      "attributes": [
        {
          "id": 100,
          "amount": 500
        }
      ],
      "composeCost": {
        "silver": 0,
        "materials": []
      },
      "composeId": null,
      "position": "绚丽夺目，更加充满活力,可以镶嵌于武器上。"
    },
    {
      "id": 90002,
      "name": "2级攻击宝石",
      "type": 1,
      "typeName": "攻击",
      "level": 2,
      "quality": 3,
      "qualityName": "蓝色",
      "smallIcon": "assets/gem-icons/small_gongji2.png",
      "bigIcon": "assets/gem-icons/big_gongji2.png",
      "attributes": [
        {
          "id": 100,
          "amount": 1500
        }
      ],
      "composeCost": {
        "silver": 500000,
        "materials": [
          {
            "id": 63005,
            "amount": 1
          }
        ]
      },
      "composeId": 90001,
      "position": "绚丽夺目，更加充满活力,可以镶嵌于武器上。"
    },
    {
      "id": 90003,
      "name": "3级攻击宝石",
      "type": 1,
      "typeName": "攻击",
      "level": 3,
      "quality": 4,
      "qualityName": "紫色",
      "smallIcon": "assets/gem-icons/small_gongji3.png",
      "bigIcon": "assets/gem-icons/big_gongji3.png",
      "attributes": [
        {
          "id": 100,
          "amount": 4500
        }
      ],
      "composeCost": {
        "silver": 1000000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90002,
      "position": "绚丽夺目，更加充满活力,可以镶嵌于武器上。"
    },
    {
      "id": 90004,
      "name": "4级攻击宝石",
      "type": 1,
      "typeName": "攻击",
      "level": 4,
      "quality": 5,
      "qualityName": "橙色",
      "smallIcon": "assets/gem-icons/small_gongji4.png",
      "bigIcon": "assets/gem-icons/big_gongji4.png",
      "attributes": [
        {
          "id": 100,
          "amount": 12000
        }
      ],
      "composeCost": {
        "silver": 1500000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90003,
      "position": "绚丽夺目，更加充满活力,可以镶嵌于武器上。"
    },
    {
      "id": 90005,
      "name": "5级攻击宝石",
      "type": 1,
      "typeName": "攻击",
      "level": 5,
      "quality": 6,
      "qualityName": "红色",
      "smallIcon": "assets/gem-icons/small_gongji5.png",
      "bigIcon": "assets/gem-icons/big_gongji5.png",
      "attributes": [
        {
          "id": 100,
          "amount": 32500
        }
      ],
      "composeCost": {
        "silver": 2000000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90004,
      "position": "绚丽夺目，更加充满活力,可以镶嵌于武器上。"
    },
    {
      "id": 90006,
      "name": "6级攻击宝石",
      "type": 1,
      "typeName": "攻击",
      "level": 6,
      "quality": 7,
      "qualityName": "金色",
      "smallIcon": "assets/gem-icons/small_gongji6.png",
      "bigIcon": "assets/gem-icons/big_gongji6.png",
      "attributes": [
        {
          "id": 100,
          "amount": 84500
        }
      ],
      "composeCost": {
        "silver": 2500000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90005,
      "position": "绚丽夺目，更加充满活力,可以镶嵌于武器上。"
    },
    {
      "id": 90007,
      "name": "7级攻击宝石",
      "type": 1,
      "typeName": "攻击",
      "level": 7,
      "quality": 8,
      "qualityName": "暗金色",
      "smallIcon": "assets/gem-icons/small_gongji7.png",
      "bigIcon": "assets/gem-icons/big_gongji7.png",
      "attributes": [
        {
          "id": 100,
          "amount": 210000
        }
      ],
      "composeCost": {
        "silver": 3000000,
        "materials": [
          {
            "id": 63005,
            "amount": 3
          }
        ]
      },
      "composeId": 90006,
      "position": "绚丽夺目，更加充满活力,可以镶嵌于武器上。"
    },
    {
      "id": 90008,
      "name": "8级攻击宝石",
      "type": 1,
      "typeName": "攻击",
      "level": 8,
      "quality": 9,
      "qualityName": "白金色",
      "smallIcon": "assets/gem-icons/small_gongji8.png",
      "bigIcon": "assets/gem-icons/big_gongji8.png",
      "attributes": [
        {
          "id": 100,
          "amount": 480000
        }
      ],
      "composeCost": {
        "silver": 3500000,
        "materials": [
          {
            "id": 63005,
            "amount": 4
          }
        ]
      },
      "composeId": 90007,
      "position": "绚丽夺目，更加充满活力,可以镶嵌于武器上。"
    },
    {
      "id": 90009,
      "name": "9级攻击宝石",
      "type": 1,
      "typeName": "攻击",
      "level": 9,
      "quality": 10,
      "qualityName": "琉金色",
      "smallIcon": "assets/gem-icons/small_gongji9.png",
      "bigIcon": "assets/gem-icons/big_gongji9.png",
      "attributes": [
        {
          "id": 100,
          "amount": 1000000
        }
      ],
      "composeCost": {
        "silver": 4000000,
        "materials": [
          {
            "id": 63005,
            "amount": 5
          }
        ]
      },
      "composeId": 90008,
      "position": "绚丽夺目，更加充满活力,可以镶嵌于武器上。"
    },
    {
      "id": 90145,
      "name": "10级攻击宝石",
      "type": 1,
      "typeName": "攻击",
      "level": 10,
      "quality": 11,
      "qualityName": "幻彩色",
      "smallIcon": "assets/gem-icons/small_gongji9.png",
      "bigIcon": "assets/gem-icons/big_gongji9.png",
      "attributes": [
        {
          "id": 100,
          "amount": 1800000
        }
      ],
      "composeCost": {
        "silver": 5000000,
        "materials": [
          {
            "id": 63005,
            "amount": 6
          }
        ]
      },
      "composeId": 90009,
      "position": "绚丽夺目，更加充满活力,可以镶嵌于武器上。"
    },
    {
      "id": 90010,
      "name": "1级生命宝石",
      "type": 2,
      "typeName": "生命",
      "level": 1,
      "quality": 2,
      "qualityName": "绿色",
      "smallIcon": "assets/gem-icons/small_shengming1.png",
      "bigIcon": "assets/gem-icons/big_shengming1.png",
      "attributes": [
        {
          "id": 51,
          "amount": 2500
        }
      ],
      "composeCost": {
        "silver": 0,
        "materials": []
      },
      "composeId": null,
      "position": "明翠鲜亮,给生命注入生机,此宝石可镶嵌于项链上"
    },
    {
      "id": 90011,
      "name": "2级生命宝石",
      "type": 2,
      "typeName": "生命",
      "level": 2,
      "quality": 3,
      "qualityName": "蓝色",
      "smallIcon": "assets/gem-icons/small_shengming2.png",
      "bigIcon": "assets/gem-icons/big_shengming2.png",
      "attributes": [
        {
          "id": 51,
          "amount": 7500
        }
      ],
      "composeCost": {
        "silver": 500000,
        "materials": [
          {
            "id": 63005,
            "amount": 1
          }
        ]
      },
      "composeId": 90010,
      "position": "明翠鲜亮,给生命注入生机,此宝石可镶嵌于项链上"
    },
    {
      "id": 90012,
      "name": "3级生命宝石",
      "type": 2,
      "typeName": "生命",
      "level": 3,
      "quality": 4,
      "qualityName": "紫色",
      "smallIcon": "assets/gem-icons/small_shengming3.png",
      "bigIcon": "assets/gem-icons/big_shengming3.png",
      "attributes": [
        {
          "id": 51,
          "amount": 22500
        }
      ],
      "composeCost": {
        "silver": 1000000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90011,
      "position": "明翠鲜亮,给生命注入生机,此宝石可镶嵌于项链上"
    },
    {
      "id": 90013,
      "name": "4级生命宝石",
      "type": 2,
      "typeName": "生命",
      "level": 4,
      "quality": 5,
      "qualityName": "橙色",
      "smallIcon": "assets/gem-icons/small_shengming4.png",
      "bigIcon": "assets/gem-icons/big_shengming4.png",
      "attributes": [
        {
          "id": 51,
          "amount": 60000
        }
      ],
      "composeCost": {
        "silver": 1500000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90012,
      "position": "明翠鲜亮,给生命注入生机,此宝石可镶嵌于项链上"
    },
    {
      "id": 90014,
      "name": "5级生命宝石",
      "type": 2,
      "typeName": "生命",
      "level": 5,
      "quality": 6,
      "qualityName": "红色",
      "smallIcon": "assets/gem-icons/small_shengming5.png",
      "bigIcon": "assets/gem-icons/big_shengming5.png",
      "attributes": [
        {
          "id": 51,
          "amount": 162500
        }
      ],
      "composeCost": {
        "silver": 2000000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90013,
      "position": "明翠鲜亮,给生命注入生机,此宝石可镶嵌于项链上"
    },
    {
      "id": 90015,
      "name": "6级生命宝石",
      "type": 2,
      "typeName": "生命",
      "level": 6,
      "quality": 7,
      "qualityName": "金色",
      "smallIcon": "assets/gem-icons/small_shengming6.png",
      "bigIcon": "assets/gem-icons/big_shengming6.png",
      "attributes": [
        {
          "id": 51,
          "amount": 422500
        }
      ],
      "composeCost": {
        "silver": 2500000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90014,
      "position": "明翠鲜亮,给生命注入生机,此宝石可镶嵌于项链上"
    },
    {
      "id": 90016,
      "name": "7级生命宝石",
      "type": 2,
      "typeName": "生命",
      "level": 7,
      "quality": 8,
      "qualityName": "暗金色",
      "smallIcon": "assets/gem-icons/small_shengming7.png",
      "bigIcon": "assets/gem-icons/big_shengming7.png",
      "attributes": [
        {
          "id": 51,
          "amount": 1050000
        }
      ],
      "composeCost": {
        "silver": 3000000,
        "materials": [
          {
            "id": 63005,
            "amount": 3
          }
        ]
      },
      "composeId": 90015,
      "position": "明翠鲜亮,给生命注入生机,此宝石可镶嵌于项链上"
    },
    {
      "id": 90017,
      "name": "8级生命宝石",
      "type": 2,
      "typeName": "生命",
      "level": 8,
      "quality": 9,
      "qualityName": "白金色",
      "smallIcon": "assets/gem-icons/small_shengming8.png",
      "bigIcon": "assets/gem-icons/big_shengming8.png",
      "attributes": [
        {
          "id": 51,
          "amount": 2400000
        }
      ],
      "composeCost": {
        "silver": 3500000,
        "materials": [
          {
            "id": 63005,
            "amount": 4
          }
        ]
      },
      "composeId": 90016,
      "position": "明翠鲜亮,给生命注入生机,此宝石可镶嵌于项链上"
    },
    {
      "id": 90018,
      "name": "9级生命宝石",
      "type": 2,
      "typeName": "生命",
      "level": 9,
      "quality": 10,
      "qualityName": "琉金色",
      "smallIcon": "assets/gem-icons/small_shengming9.png",
      "bigIcon": "assets/gem-icons/big_shengming9.png",
      "attributes": [
        {
          "id": 51,
          "amount": 5000000
        }
      ],
      "composeCost": {
        "silver": 4000000,
        "materials": [
          {
            "id": 63005,
            "amount": 5
          }
        ]
      },
      "composeId": 90017,
      "position": "明翠鲜亮,给生命注入生机,此宝石可镶嵌于项链上"
    },
    {
      "id": 90146,
      "name": "10级生命宝石",
      "type": 2,
      "typeName": "生命",
      "level": 10,
      "quality": 11,
      "qualityName": "幻彩色",
      "smallIcon": "assets/gem-icons/small_shengming9.png",
      "bigIcon": "assets/gem-icons/big_shengming9.png",
      "attributes": [
        {
          "id": 51,
          "amount": 9000000
        }
      ],
      "composeCost": {
        "silver": 5000000,
        "materials": [
          {
            "id": 63005,
            "amount": 6
          }
        ]
      },
      "composeId": 90018,
      "position": "明翠鲜亮,给生命注入生机,此宝石可镶嵌于项链上"
    },
    {
      "id": 90019,
      "name": "1级物防宝石",
      "type": 3,
      "typeName": "物防",
      "level": 1,
      "quality": 2,
      "qualityName": "绿色",
      "smallIcon": "assets/gem-icons/small_wufang1.png",
      "bigIcon": "assets/gem-icons/big_wufang1.png",
      "attributes": [
        {
          "id": 54,
          "amount": 500
        }
      ],
      "composeCost": {
        "silver": 0,
        "materials": []
      },
      "composeId": null,
      "position": "星光蓝宝,能保佑佩戴者平安,此宝石可镶嵌于盔甲上"
    },
    {
      "id": 90020,
      "name": "2级物防宝石",
      "type": 3,
      "typeName": "物防",
      "level": 2,
      "quality": 3,
      "qualityName": "蓝色",
      "smallIcon": "assets/gem-icons/small_wufang2.png",
      "bigIcon": "assets/gem-icons/big_wufang2.png",
      "attributes": [
        {
          "id": 54,
          "amount": 1500
        }
      ],
      "composeCost": {
        "silver": 500000,
        "materials": [
          {
            "id": 63005,
            "amount": 1
          }
        ]
      },
      "composeId": 90019,
      "position": "星光蓝宝,能保佑佩戴者平安,此宝石可镶嵌于盔甲上"
    },
    {
      "id": 90021,
      "name": "3级物防宝石",
      "type": 3,
      "typeName": "物防",
      "level": 3,
      "quality": 4,
      "qualityName": "紫色",
      "smallIcon": "assets/gem-icons/small_wufang3.png",
      "bigIcon": "assets/gem-icons/big_wufang3.png",
      "attributes": [
        {
          "id": 54,
          "amount": 4500
        }
      ],
      "composeCost": {
        "silver": 1000000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90020,
      "position": "星光蓝宝,能保佑佩戴者平安,此宝石可镶嵌于盔甲上"
    },
    {
      "id": 90022,
      "name": "4级物防宝石",
      "type": 3,
      "typeName": "物防",
      "level": 4,
      "quality": 5,
      "qualityName": "橙色",
      "smallIcon": "assets/gem-icons/small_wufang4.png",
      "bigIcon": "assets/gem-icons/big_wufang4.png",
      "attributes": [
        {
          "id": 54,
          "amount": 12000
        }
      ],
      "composeCost": {
        "silver": 1500000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90021,
      "position": "星光蓝宝,能保佑佩戴者平安,此宝石可镶嵌于盔甲上"
    },
    {
      "id": 90023,
      "name": "5级物防宝石",
      "type": 3,
      "typeName": "物防",
      "level": 5,
      "quality": 6,
      "qualityName": "红色",
      "smallIcon": "assets/gem-icons/small_wufang5.png",
      "bigIcon": "assets/gem-icons/big_wufang5.png",
      "attributes": [
        {
          "id": 54,
          "amount": 32500
        }
      ],
      "composeCost": {
        "silver": 2000000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90022,
      "position": "星光蓝宝,能保佑佩戴者平安,此宝石可镶嵌于盔甲上"
    },
    {
      "id": 90024,
      "name": "6级物防宝石",
      "type": 3,
      "typeName": "物防",
      "level": 6,
      "quality": 7,
      "qualityName": "金色",
      "smallIcon": "assets/gem-icons/small_wufang6.png",
      "bigIcon": "assets/gem-icons/big_wufang6.png",
      "attributes": [
        {
          "id": 54,
          "amount": 84500
        }
      ],
      "composeCost": {
        "silver": 2500000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90023,
      "position": "星光蓝宝,能保佑佩戴者平安,此宝石可镶嵌于盔甲上"
    },
    {
      "id": 90025,
      "name": "7级物防宝石",
      "type": 3,
      "typeName": "物防",
      "level": 7,
      "quality": 8,
      "qualityName": "暗金色",
      "smallIcon": "assets/gem-icons/small_wufang7.png",
      "bigIcon": "assets/gem-icons/big_wufang7.png",
      "attributes": [
        {
          "id": 54,
          "amount": 210000
        }
      ],
      "composeCost": {
        "silver": 3000000,
        "materials": [
          {
            "id": 63005,
            "amount": 3
          }
        ]
      },
      "composeId": 90024,
      "position": "星光蓝宝,能保佑佩戴者平安,此宝石可镶嵌于盔甲上"
    },
    {
      "id": 90026,
      "name": "8级物防宝石",
      "type": 3,
      "typeName": "物防",
      "level": 8,
      "quality": 9,
      "qualityName": "白金色",
      "smallIcon": "assets/gem-icons/small_wufang8.png",
      "bigIcon": "assets/gem-icons/big_wufang8.png",
      "attributes": [
        {
          "id": 54,
          "amount": 480000
        }
      ],
      "composeCost": {
        "silver": 3500000,
        "materials": [
          {
            "id": 63005,
            "amount": 4
          }
        ]
      },
      "composeId": 90025,
      "position": "星光蓝宝,能保佑佩戴者平安,此宝石可镶嵌于盔甲上"
    },
    {
      "id": 90027,
      "name": "9级物防宝石",
      "type": 3,
      "typeName": "物防",
      "level": 9,
      "quality": 10,
      "qualityName": "琉金色",
      "smallIcon": "assets/gem-icons/small_wufang9.png",
      "bigIcon": "assets/gem-icons/big_wufang9.png",
      "attributes": [
        {
          "id": 54,
          "amount": 1000000
        }
      ],
      "composeCost": {
        "silver": 4000000,
        "materials": [
          {
            "id": 63005,
            "amount": 5
          }
        ]
      },
      "composeId": 90026,
      "position": "星光蓝宝,能保佑佩戴者平安,此宝石可镶嵌于盔甲上"
    },
    {
      "id": 90147,
      "name": "10级物防宝石",
      "type": 3,
      "typeName": "物防",
      "level": 10,
      "quality": 11,
      "qualityName": "幻彩色",
      "smallIcon": "assets/gem-icons/small_wufang9.png",
      "bigIcon": "assets/gem-icons/big_wufang9.png",
      "attributes": [
        {
          "id": 54,
          "amount": 1800000
        }
      ],
      "composeCost": {
        "silver": 5000000,
        "materials": [
          {
            "id": 63005,
            "amount": 6
          }
        ]
      },
      "composeId": 90027,
      "position": "星光蓝宝,能保佑佩戴者平安,此宝石可镶嵌于盔甲上"
    },
    {
      "id": 90028,
      "name": "1级法防宝石",
      "type": 4,
      "typeName": "法防",
      "level": 1,
      "quality": 2,
      "qualityName": "绿色",
      "smallIcon": "assets/gem-icons/small_fafang1.png",
      "bigIcon": "assets/gem-icons/big_fafang1.png",
      "attributes": [
        {
          "id": 55,
          "amount": 500
        }
      ],
      "composeCost": {
        "silver": 0,
        "materials": []
      },
      "composeId": null,
      "position": "水晶之源,象征着坚定与永恒,此宝石可镶嵌于头盔上"
    },
    {
      "id": 90029,
      "name": "2级法防宝石",
      "type": 4,
      "typeName": "法防",
      "level": 2,
      "quality": 3,
      "qualityName": "蓝色",
      "smallIcon": "assets/gem-icons/small_fafang2.png",
      "bigIcon": "assets/gem-icons/big_fafang2.png",
      "attributes": [
        {
          "id": 55,
          "amount": 1500
        }
      ],
      "composeCost": {
        "silver": 500000,
        "materials": [
          {
            "id": 63005,
            "amount": 1
          }
        ]
      },
      "composeId": 90028,
      "position": "水晶之源,象征着坚定与永恒,此宝石可镶嵌于头盔上"
    },
    {
      "id": 90030,
      "name": "3级法防宝石",
      "type": 4,
      "typeName": "法防",
      "level": 3,
      "quality": 4,
      "qualityName": "紫色",
      "smallIcon": "assets/gem-icons/small_fafang3.png",
      "bigIcon": "assets/gem-icons/big_fafang3.png",
      "attributes": [
        {
          "id": 55,
          "amount": 4500
        }
      ],
      "composeCost": {
        "silver": 1000000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90029,
      "position": "水晶之源,象征着坚定与永恒,此宝石可镶嵌于头盔上"
    },
    {
      "id": 90031,
      "name": "4级法防宝石",
      "type": 4,
      "typeName": "法防",
      "level": 4,
      "quality": 5,
      "qualityName": "橙色",
      "smallIcon": "assets/gem-icons/small_fafang4.png",
      "bigIcon": "assets/gem-icons/big_fafang4.png",
      "attributes": [
        {
          "id": 55,
          "amount": 12000
        }
      ],
      "composeCost": {
        "silver": 1500000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90030,
      "position": "水晶之源,象征着坚定与永恒,此宝石可镶嵌于头盔上"
    },
    {
      "id": 90032,
      "name": "5级法防宝石",
      "type": 4,
      "typeName": "法防",
      "level": 5,
      "quality": 6,
      "qualityName": "红色",
      "smallIcon": "assets/gem-icons/small_fafang5.png",
      "bigIcon": "assets/gem-icons/big_fafang5.png",
      "attributes": [
        {
          "id": 55,
          "amount": 32500
        }
      ],
      "composeCost": {
        "silver": 2000000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90031,
      "position": "水晶之源,象征着坚定与永恒,此宝石可镶嵌于头盔上"
    },
    {
      "id": 90033,
      "name": "6级法防宝石",
      "type": 4,
      "typeName": "法防",
      "level": 6,
      "quality": 7,
      "qualityName": "金色",
      "smallIcon": "assets/gem-icons/small_fafang6.png",
      "bigIcon": "assets/gem-icons/big_fafang6.png",
      "attributes": [
        {
          "id": 55,
          "amount": 84500
        }
      ],
      "composeCost": {
        "silver": 2500000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90032,
      "position": "水晶之源,象征着坚定与永恒,此宝石可镶嵌于头盔上"
    },
    {
      "id": 90034,
      "name": "7级法防宝石",
      "type": 4,
      "typeName": "法防",
      "level": 7,
      "quality": 8,
      "qualityName": "暗金色",
      "smallIcon": "assets/gem-icons/small_fafang7.png",
      "bigIcon": "assets/gem-icons/big_fafang7.png",
      "attributes": [
        {
          "id": 55,
          "amount": 210000
        }
      ],
      "composeCost": {
        "silver": 3000000,
        "materials": [
          {
            "id": 63005,
            "amount": 3
          }
        ]
      },
      "composeId": 90033,
      "position": "水晶之源,象征着坚定与永恒,此宝石可镶嵌于头盔上"
    },
    {
      "id": 90035,
      "name": "8级法防宝石",
      "type": 4,
      "typeName": "法防",
      "level": 8,
      "quality": 9,
      "qualityName": "白金色",
      "smallIcon": "assets/gem-icons/small_fafang8.png",
      "bigIcon": "assets/gem-icons/big_fafang8.png",
      "attributes": [
        {
          "id": 55,
          "amount": 480000
        }
      ],
      "composeCost": {
        "silver": 3500000,
        "materials": [
          {
            "id": 63005,
            "amount": 4
          }
        ]
      },
      "composeId": 90034,
      "position": "水晶之源,象征着坚定与永恒,此宝石可镶嵌于头盔上"
    },
    {
      "id": 90036,
      "name": "9级法防宝石",
      "type": 4,
      "typeName": "法防",
      "level": 9,
      "quality": 10,
      "qualityName": "琉金色",
      "smallIcon": "assets/gem-icons/small_fafang9.png",
      "bigIcon": "assets/gem-icons/big_fafang9.png",
      "attributes": [
        {
          "id": 55,
          "amount": 1000000
        }
      ],
      "composeCost": {
        "silver": 4000000,
        "materials": [
          {
            "id": 63005,
            "amount": 5
          }
        ]
      },
      "composeId": 90035,
      "position": "水晶之源,象征着坚定与永恒,此宝石可镶嵌于头盔上"
    },
    {
      "id": 90148,
      "name": "10级法防宝石",
      "type": 4,
      "typeName": "法防",
      "level": 10,
      "quality": 11,
      "qualityName": "幻彩色",
      "smallIcon": "assets/gem-icons/small_fafang9.png",
      "bigIcon": "assets/gem-icons/big_fafang9.png",
      "attributes": [
        {
          "id": 55,
          "amount": 1800000
        }
      ],
      "composeCost": {
        "silver": 5000000,
        "materials": [
          {
            "id": 63005,
            "amount": 6
          }
        ]
      },
      "composeId": 90036,
      "position": "水晶之源,象征着坚定与永恒,此宝石可镶嵌于头盔上"
    },
    {
      "id": 90055,
      "name": "1级抗魏宝石",
      "type": 5,
      "typeName": "抗魏",
      "level": 1,
      "quality": 2,
      "qualityName": "绿色",
      "smallIcon": "assets/gem-icons/small_weiguo1.png",
      "bigIcon": "assets/gem-icons/big_weiguo1.png",
      "attributes": [
        {
          "id": 71,
          "amount": 30
        }
      ],
      "composeCost": {
        "silver": 0,
        "materials": []
      },
      "composeId": null,
      "position": "此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90056,
      "name": "2级抗魏宝石",
      "type": 5,
      "typeName": "抗魏",
      "level": 2,
      "quality": 3,
      "qualityName": "蓝色",
      "smallIcon": "assets/gem-icons/small_weiguo2.png",
      "bigIcon": "assets/gem-icons/big_weiguo2.png",
      "attributes": [
        {
          "id": 71,
          "amount": 81
        }
      ],
      "composeCost": {
        "silver": 500000,
        "materials": [
          {
            "id": 63005,
            "amount": 1
          }
        ]
      },
      "composeId": 90055,
      "position": "此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90057,
      "name": "3级抗魏宝石",
      "type": 5,
      "typeName": "抗魏",
      "level": 3,
      "quality": 4,
      "qualityName": "紫色",
      "smallIcon": "assets/gem-icons/small_weiguo3.png",
      "bigIcon": "assets/gem-icons/big_weiguo3.png",
      "attributes": [
        {
          "id": 71,
          "amount": 195
        }
      ],
      "composeCost": {
        "silver": 1000000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90056,
      "position": "此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90058,
      "name": "4级抗魏宝石",
      "type": 5,
      "typeName": "抗魏",
      "level": 4,
      "quality": 5,
      "qualityName": "橙色",
      "smallIcon": "assets/gem-icons/small_weiguo4.png",
      "bigIcon": "assets/gem-icons/big_weiguo4.png",
      "attributes": [
        {
          "id": 71,
          "amount": 400
        }
      ],
      "composeCost": {
        "silver": 1500000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90057,
      "position": "此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90059,
      "name": "5级抗魏宝石",
      "type": 5,
      "typeName": "抗魏",
      "level": 5,
      "quality": 6,
      "qualityName": "红色",
      "smallIcon": "assets/gem-icons/small_weiguo5.png",
      "bigIcon": "assets/gem-icons/big_weiguo5.png",
      "attributes": [
        {
          "id": 71,
          "amount": 850
        }
      ],
      "composeCost": {
        "silver": 2000000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90058,
      "position": "此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90060,
      "name": "6级抗魏宝石",
      "type": 5,
      "typeName": "抗魏",
      "level": 6,
      "quality": 7,
      "qualityName": "金色",
      "smallIcon": "assets/gem-icons/small_weiguo6.png",
      "bigIcon": "assets/gem-icons/big_weiguo6.png",
      "attributes": [
        {
          "id": 71,
          "amount": 1680
        }
      ],
      "composeCost": {
        "silver": 2500000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90059,
      "position": "此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90061,
      "name": "7级抗魏宝石",
      "type": 5,
      "typeName": "抗魏",
      "level": 7,
      "quality": 8,
      "qualityName": "暗金色",
      "smallIcon": "assets/gem-icons/small_weiguo7.png",
      "bigIcon": "assets/gem-icons/big_weiguo7.png",
      "attributes": [
        {
          "id": 71,
          "amount": 2250
        }
      ],
      "composeCost": {
        "silver": 3000000,
        "materials": [
          {
            "id": 63005,
            "amount": 3
          }
        ]
      },
      "composeId": 90060,
      "position": "此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90062,
      "name": "8级抗魏宝石",
      "type": 5,
      "typeName": "抗魏",
      "level": 8,
      "quality": 9,
      "qualityName": "白金色",
      "smallIcon": "assets/gem-icons/small_weiguo8.png",
      "bigIcon": "assets/gem-icons/big_weiguo8.png",
      "attributes": [
        {
          "id": 71,
          "amount": 3050
        }
      ],
      "composeCost": {
        "silver": 3500000,
        "materials": [
          {
            "id": 63005,
            "amount": 4
          }
        ]
      },
      "composeId": 90061,
      "position": "此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90063,
      "name": "9级抗魏宝石",
      "type": 5,
      "typeName": "抗魏",
      "level": 9,
      "quality": 10,
      "qualityName": "琉金色",
      "smallIcon": "assets/gem-icons/small_weiguo9.png",
      "bigIcon": "assets/gem-icons/big_weiguo9.png",
      "attributes": [
        {
          "id": 71,
          "amount": 4000
        }
      ],
      "composeCost": {
        "silver": 4000000,
        "materials": [
          {
            "id": 63005,
            "amount": 5
          }
        ]
      },
      "composeId": 90062,
      "position": "此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90151,
      "name": "10级抗魏宝石",
      "type": 5,
      "typeName": "抗魏",
      "level": 10,
      "quality": 11,
      "qualityName": "幻彩色",
      "smallIcon": "assets/gem-icons/small_weiguo9.png",
      "bigIcon": "assets/gem-icons/big_weiguo9.png",
      "attributes": [
        {
          "id": 71,
          "amount": 5000
        }
      ],
      "composeCost": {
        "silver": 5000000,
        "materials": [
          {
            "id": 63005,
            "amount": 6
          }
        ]
      },
      "composeId": 90063,
      "position": "此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90073,
      "name": "1级抗蜀宝石",
      "type": 6,
      "typeName": "抗蜀",
      "level": 1,
      "quality": 2,
      "qualityName": "绿色",
      "smallIcon": "assets/gem-icons/small_shuguo1.png",
      "bigIcon": "assets/gem-icons/big_shuguo1.png",
      "attributes": [
        {
          "id": 72,
          "amount": 30
        }
      ],
      "composeCost": {
        "silver": 0,
        "materials": []
      },
      "composeId": null,
      "position": "此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90074,
      "name": "2级抗蜀宝石",
      "type": 6,
      "typeName": "抗蜀",
      "level": 2,
      "quality": 3,
      "qualityName": "蓝色",
      "smallIcon": "assets/gem-icons/small_shuguo2.png",
      "bigIcon": "assets/gem-icons/big_shuguo2.png",
      "attributes": [
        {
          "id": 72,
          "amount": 81
        }
      ],
      "composeCost": {
        "silver": 500000,
        "materials": [
          {
            "id": 63005,
            "amount": 1
          }
        ]
      },
      "composeId": 90073,
      "position": "此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90075,
      "name": "3级抗蜀宝石",
      "type": 6,
      "typeName": "抗蜀",
      "level": 3,
      "quality": 4,
      "qualityName": "紫色",
      "smallIcon": "assets/gem-icons/small_shuguo3.png",
      "bigIcon": "assets/gem-icons/big_shuguo3.png",
      "attributes": [
        {
          "id": 72,
          "amount": 195
        }
      ],
      "composeCost": {
        "silver": 1000000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90074,
      "position": "此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90076,
      "name": "4级抗蜀宝石",
      "type": 6,
      "typeName": "抗蜀",
      "level": 4,
      "quality": 5,
      "qualityName": "橙色",
      "smallIcon": "assets/gem-icons/small_shuguo4.png",
      "bigIcon": "assets/gem-icons/big_shuguo4.png",
      "attributes": [
        {
          "id": 72,
          "amount": 400
        }
      ],
      "composeCost": {
        "silver": 1500000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90075,
      "position": "此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90077,
      "name": "5级抗蜀宝石",
      "type": 6,
      "typeName": "抗蜀",
      "level": 5,
      "quality": 6,
      "qualityName": "红色",
      "smallIcon": "assets/gem-icons/small_shuguo5.png",
      "bigIcon": "assets/gem-icons/big_shuguo5.png",
      "attributes": [
        {
          "id": 72,
          "amount": 850
        }
      ],
      "composeCost": {
        "silver": 2000000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90076,
      "position": "此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90078,
      "name": "6级抗蜀宝石",
      "type": 6,
      "typeName": "抗蜀",
      "level": 6,
      "quality": 7,
      "qualityName": "金色",
      "smallIcon": "assets/gem-icons/small_shuguo6.png",
      "bigIcon": "assets/gem-icons/big_shuguo6.png",
      "attributes": [
        {
          "id": 72,
          "amount": 1680
        }
      ],
      "composeCost": {
        "silver": 2500000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90077,
      "position": "此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90079,
      "name": "7级抗蜀宝石",
      "type": 6,
      "typeName": "抗蜀",
      "level": 7,
      "quality": 8,
      "qualityName": "暗金色",
      "smallIcon": "assets/gem-icons/small_shuguo7.png",
      "bigIcon": "assets/gem-icons/big_shuguo7.png",
      "attributes": [
        {
          "id": 72,
          "amount": 2250
        }
      ],
      "composeCost": {
        "silver": 3000000,
        "materials": [
          {
            "id": 63005,
            "amount": 3
          }
        ]
      },
      "composeId": 90078,
      "position": "此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90080,
      "name": "8级抗蜀宝石",
      "type": 6,
      "typeName": "抗蜀",
      "level": 8,
      "quality": 9,
      "qualityName": "白金色",
      "smallIcon": "assets/gem-icons/small_shuguo8.png",
      "bigIcon": "assets/gem-icons/big_shuguo8.png",
      "attributes": [
        {
          "id": 72,
          "amount": 3050
        }
      ],
      "composeCost": {
        "silver": 3500000,
        "materials": [
          {
            "id": 63005,
            "amount": 4
          }
        ]
      },
      "composeId": 90079,
      "position": "此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90081,
      "name": "9级抗蜀宝石",
      "type": 6,
      "typeName": "抗蜀",
      "level": 9,
      "quality": 10,
      "qualityName": "琉金色",
      "smallIcon": "assets/gem-icons/small_shuguo9.png",
      "bigIcon": "assets/gem-icons/big_shuguo9.png",
      "attributes": [
        {
          "id": 72,
          "amount": 4000
        }
      ],
      "composeCost": {
        "silver": 4000000,
        "materials": [
          {
            "id": 63005,
            "amount": 5
          }
        ]
      },
      "composeId": 90080,
      "position": "此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90153,
      "name": "10级抗蜀宝石",
      "type": 6,
      "typeName": "抗蜀",
      "level": 10,
      "quality": 11,
      "qualityName": "幻彩色",
      "smallIcon": "assets/gem-icons/small_shuguo9.png",
      "bigIcon": "assets/gem-icons/big_shuguo9.png",
      "attributes": [
        {
          "id": 72,
          "amount": 5000
        }
      ],
      "composeCost": {
        "silver": 5000000,
        "materials": [
          {
            "id": 63005,
            "amount": 6
          }
        ]
      },
      "composeId": 90081,
      "position": "此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90091,
      "name": "1级抗吴宝石",
      "type": 7,
      "typeName": "抗吴",
      "level": 1,
      "quality": 2,
      "qualityName": "绿色",
      "smallIcon": "assets/gem-icons/small_wuguo1.png",
      "bigIcon": "assets/gem-icons/big_wuguo1.png",
      "attributes": [
        {
          "id": 73,
          "amount": 30
        }
      ],
      "composeCost": {
        "silver": 0,
        "materials": []
      },
      "composeId": null,
      "position": "此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90092,
      "name": "2级抗吴宝石",
      "type": 7,
      "typeName": "抗吴",
      "level": 2,
      "quality": 3,
      "qualityName": "蓝色",
      "smallIcon": "assets/gem-icons/small_wuguo2.png",
      "bigIcon": "assets/gem-icons/big_wuguo2.png",
      "attributes": [
        {
          "id": 73,
          "amount": 81
        }
      ],
      "composeCost": {
        "silver": 500000,
        "materials": [
          {
            "id": 63005,
            "amount": 1
          }
        ]
      },
      "composeId": 90091,
      "position": "此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90093,
      "name": "3级抗吴宝石",
      "type": 7,
      "typeName": "抗吴",
      "level": 3,
      "quality": 4,
      "qualityName": "紫色",
      "smallIcon": "assets/gem-icons/small_wuguo3.png",
      "bigIcon": "assets/gem-icons/big_wuguo3.png",
      "attributes": [
        {
          "id": 73,
          "amount": 195
        }
      ],
      "composeCost": {
        "silver": 1000000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90092,
      "position": "此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90094,
      "name": "4级抗吴宝石",
      "type": 7,
      "typeName": "抗吴",
      "level": 4,
      "quality": 5,
      "qualityName": "橙色",
      "smallIcon": "assets/gem-icons/small_wuguo4.png",
      "bigIcon": "assets/gem-icons/big_wuguo4.png",
      "attributes": [
        {
          "id": 73,
          "amount": 400
        }
      ],
      "composeCost": {
        "silver": 1500000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90093,
      "position": "此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90095,
      "name": "5级抗吴宝石",
      "type": 7,
      "typeName": "抗吴",
      "level": 5,
      "quality": 6,
      "qualityName": "红色",
      "smallIcon": "assets/gem-icons/small_wuguo5.png",
      "bigIcon": "assets/gem-icons/big_wuguo5.png",
      "attributes": [
        {
          "id": 73,
          "amount": 850
        }
      ],
      "composeCost": {
        "silver": 2000000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90094,
      "position": "此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90096,
      "name": "6级抗吴宝石",
      "type": 7,
      "typeName": "抗吴",
      "level": 6,
      "quality": 7,
      "qualityName": "金色",
      "smallIcon": "assets/gem-icons/small_wuguo6.png",
      "bigIcon": "assets/gem-icons/big_wuguo6.png",
      "attributes": [
        {
          "id": 73,
          "amount": 1680
        }
      ],
      "composeCost": {
        "silver": 2500000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90095,
      "position": "此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90097,
      "name": "7级抗吴宝石",
      "type": 7,
      "typeName": "抗吴",
      "level": 7,
      "quality": 8,
      "qualityName": "暗金色",
      "smallIcon": "assets/gem-icons/small_wuguo7.png",
      "bigIcon": "assets/gem-icons/big_wuguo7.png",
      "attributes": [
        {
          "id": 73,
          "amount": 2250
        }
      ],
      "composeCost": {
        "silver": 3000000,
        "materials": [
          {
            "id": 63005,
            "amount": 3
          }
        ]
      },
      "composeId": 90096,
      "position": "此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90098,
      "name": "8级抗吴宝石",
      "type": 7,
      "typeName": "抗吴",
      "level": 8,
      "quality": 9,
      "qualityName": "白金色",
      "smallIcon": "assets/gem-icons/small_wuguo8.png",
      "bigIcon": "assets/gem-icons/big_wuguo8.png",
      "attributes": [
        {
          "id": 73,
          "amount": 3050
        }
      ],
      "composeCost": {
        "silver": 3500000,
        "materials": [
          {
            "id": 63005,
            "amount": 4
          }
        ]
      },
      "composeId": 90097,
      "position": "此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90099,
      "name": "9级抗吴宝石",
      "type": 7,
      "typeName": "抗吴",
      "level": 9,
      "quality": 10,
      "qualityName": "琉金色",
      "smallIcon": "assets/gem-icons/small_wuguo9.png",
      "bigIcon": "assets/gem-icons/big_wuguo9.png",
      "attributes": [
        {
          "id": 73,
          "amount": 4000
        }
      ],
      "composeCost": {
        "silver": 4000000,
        "materials": [
          {
            "id": 63005,
            "amount": 5
          }
        ]
      },
      "composeId": 90098,
      "position": "此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90155,
      "name": "10级抗吴宝石",
      "type": 7,
      "typeName": "抗吴",
      "level": 10,
      "quality": 11,
      "qualityName": "幻彩色",
      "smallIcon": "assets/gem-icons/small_wuguo9.png",
      "bigIcon": "assets/gem-icons/big_wuguo9.png",
      "attributes": [
        {
          "id": 73,
          "amount": 5000
        }
      ],
      "composeCost": {
        "silver": 5000000,
        "materials": [
          {
            "id": 63005,
            "amount": 6
          }
        ]
      },
      "composeId": 90099,
      "position": "此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90109,
      "name": "1级抗群宝石",
      "type": 8,
      "typeName": "抗群",
      "level": 1,
      "quality": 2,
      "qualityName": "绿色",
      "smallIcon": "assets/gem-icons/small_qunxiong1.png",
      "bigIcon": "assets/gem-icons/big_qunxiong1.png",
      "attributes": [
        {
          "id": 74,
          "amount": 30
        }
      ],
      "composeCost": {
        "silver": 0,
        "materials": []
      },
      "composeId": null,
      "position": "此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90110,
      "name": "2级抗群宝石",
      "type": 8,
      "typeName": "抗群",
      "level": 2,
      "quality": 3,
      "qualityName": "蓝色",
      "smallIcon": "assets/gem-icons/small_qunxiong2.png",
      "bigIcon": "assets/gem-icons/big_qunxiong2.png",
      "attributes": [
        {
          "id": 74,
          "amount": 81
        }
      ],
      "composeCost": {
        "silver": 500000,
        "materials": [
          {
            "id": 63005,
            "amount": 1
          }
        ]
      },
      "composeId": 90109,
      "position": "此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90111,
      "name": "3级抗群宝石",
      "type": 8,
      "typeName": "抗群",
      "level": 3,
      "quality": 4,
      "qualityName": "紫色",
      "smallIcon": "assets/gem-icons/small_qunxiong3.png",
      "bigIcon": "assets/gem-icons/big_qunxiong3.png",
      "attributes": [
        {
          "id": 74,
          "amount": 195
        }
      ],
      "composeCost": {
        "silver": 1000000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90110,
      "position": "此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90112,
      "name": "4级抗群宝石",
      "type": 8,
      "typeName": "抗群",
      "level": 4,
      "quality": 5,
      "qualityName": "橙色",
      "smallIcon": "assets/gem-icons/small_qunxiong4.png",
      "bigIcon": "assets/gem-icons/big_qunxiong4.png",
      "attributes": [
        {
          "id": 74,
          "amount": 400
        }
      ],
      "composeCost": {
        "silver": 1500000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90111,
      "position": "此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90113,
      "name": "5级抗群宝石",
      "type": 8,
      "typeName": "抗群",
      "level": 5,
      "quality": 6,
      "qualityName": "红色",
      "smallIcon": "assets/gem-icons/small_qunxiong5.png",
      "bigIcon": "assets/gem-icons/big_qunxiong5.png",
      "attributes": [
        {
          "id": 74,
          "amount": 850
        }
      ],
      "composeCost": {
        "silver": 2000000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90112,
      "position": "此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90114,
      "name": "6级抗群宝石",
      "type": 8,
      "typeName": "抗群",
      "level": 6,
      "quality": 7,
      "qualityName": "金色",
      "smallIcon": "assets/gem-icons/small_qunxiong6.png",
      "bigIcon": "assets/gem-icons/big_qunxiong6.png",
      "attributes": [
        {
          "id": 74,
          "amount": 1680
        }
      ],
      "composeCost": {
        "silver": 2500000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90113,
      "position": "此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90115,
      "name": "7级抗群宝石",
      "type": 8,
      "typeName": "抗群",
      "level": 7,
      "quality": 8,
      "qualityName": "暗金色",
      "smallIcon": "assets/gem-icons/small_qunxiong7.png",
      "bigIcon": "assets/gem-icons/big_qunxiong7.png",
      "attributes": [
        {
          "id": 74,
          "amount": 2250
        }
      ],
      "composeCost": {
        "silver": 3000000,
        "materials": [
          {
            "id": 63005,
            "amount": 3
          }
        ]
      },
      "composeId": 90114,
      "position": "此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90116,
      "name": "8级抗群宝石",
      "type": 8,
      "typeName": "抗群",
      "level": 8,
      "quality": 9,
      "qualityName": "白金色",
      "smallIcon": "assets/gem-icons/small_qunxiong8.png",
      "bigIcon": "assets/gem-icons/big_qunxiong8.png",
      "attributes": [
        {
          "id": 74,
          "amount": 3050
        }
      ],
      "composeCost": {
        "silver": 3500000,
        "materials": [
          {
            "id": 63005,
            "amount": 4
          }
        ]
      },
      "composeId": 90115,
      "position": "此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90117,
      "name": "9级抗群宝石",
      "type": 8,
      "typeName": "抗群",
      "level": 9,
      "quality": 10,
      "qualityName": "琉金色",
      "smallIcon": "assets/gem-icons/small_qunxiong9.png",
      "bigIcon": "assets/gem-icons/big_qunxiong9.png",
      "attributes": [
        {
          "id": 74,
          "amount": 4000
        }
      ],
      "composeCost": {
        "silver": 4000000,
        "materials": [
          {
            "id": 63005,
            "amount": 5
          }
        ]
      },
      "composeId": 90116,
      "position": "此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90157,
      "name": "10级抗群宝石",
      "type": 8,
      "typeName": "抗群",
      "level": 10,
      "quality": 11,
      "qualityName": "幻彩色",
      "smallIcon": "assets/gem-icons/small_qunxiong9.png",
      "bigIcon": "assets/gem-icons/big_qunxiong9.png",
      "attributes": [
        {
          "id": 74,
          "amount": 5000
        }
      ],
      "composeCost": {
        "silver": 5000000,
        "materials": [
          {
            "id": 63005,
            "amount": 6
          }
        ]
      },
      "composeId": 90117,
      "position": "此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90064,
      "name": "1级破魏宝石",
      "type": 9,
      "typeName": "破魏",
      "level": 1,
      "quality": 2,
      "qualityName": "绿色",
      "smallIcon": "assets/gem-icons/small_weiguo1.png",
      "bigIcon": "assets/gem-icons/big_weiguo1.png",
      "attributes": [
        {
          "id": 67,
          "amount": 30
        }
      ],
      "composeCost": {
        "silver": 0,
        "materials": []
      },
      "composeId": null,
      "position": "此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90065,
      "name": "2级破魏宝石",
      "type": 9,
      "typeName": "破魏",
      "level": 2,
      "quality": 3,
      "qualityName": "蓝色",
      "smallIcon": "assets/gem-icons/small_weiguo2.png",
      "bigIcon": "assets/gem-icons/big_weiguo2.png",
      "attributes": [
        {
          "id": 67,
          "amount": 81
        }
      ],
      "composeCost": {
        "silver": 500000,
        "materials": [
          {
            "id": 63005,
            "amount": 1
          }
        ]
      },
      "composeId": 90064,
      "position": "此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90066,
      "name": "3级破魏宝石",
      "type": 9,
      "typeName": "破魏",
      "level": 3,
      "quality": 4,
      "qualityName": "紫色",
      "smallIcon": "assets/gem-icons/small_weiguo3.png",
      "bigIcon": "assets/gem-icons/big_weiguo3.png",
      "attributes": [
        {
          "id": 67,
          "amount": 195
        }
      ],
      "composeCost": {
        "silver": 1000000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90065,
      "position": "此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90067,
      "name": "4级破魏宝石",
      "type": 9,
      "typeName": "破魏",
      "level": 4,
      "quality": 5,
      "qualityName": "橙色",
      "smallIcon": "assets/gem-icons/small_weiguo4.png",
      "bigIcon": "assets/gem-icons/big_weiguo4.png",
      "attributes": [
        {
          "id": 67,
          "amount": 400
        }
      ],
      "composeCost": {
        "silver": 1500000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90066,
      "position": "此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90068,
      "name": "5级破魏宝石",
      "type": 9,
      "typeName": "破魏",
      "level": 5,
      "quality": 6,
      "qualityName": "红色",
      "smallIcon": "assets/gem-icons/small_weiguo5.png",
      "bigIcon": "assets/gem-icons/big_weiguo5.png",
      "attributes": [
        {
          "id": 67,
          "amount": 850
        }
      ],
      "composeCost": {
        "silver": 2000000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90067,
      "position": "此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90069,
      "name": "6级破魏宝石",
      "type": 9,
      "typeName": "破魏",
      "level": 6,
      "quality": 7,
      "qualityName": "金色",
      "smallIcon": "assets/gem-icons/small_weiguo6.png",
      "bigIcon": "assets/gem-icons/big_weiguo6.png",
      "attributes": [
        {
          "id": 67,
          "amount": 1680
        }
      ],
      "composeCost": {
        "silver": 2500000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90068,
      "position": "此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90070,
      "name": "7级破魏宝石",
      "type": 9,
      "typeName": "破魏",
      "level": 7,
      "quality": 8,
      "qualityName": "暗金色",
      "smallIcon": "assets/gem-icons/small_weiguo7.png",
      "bigIcon": "assets/gem-icons/big_weiguo7.png",
      "attributes": [
        {
          "id": 67,
          "amount": 2250
        }
      ],
      "composeCost": {
        "silver": 3000000,
        "materials": [
          {
            "id": 63005,
            "amount": 3
          }
        ]
      },
      "composeId": 90069,
      "position": "此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90071,
      "name": "8级破魏宝石",
      "type": 9,
      "typeName": "破魏",
      "level": 8,
      "quality": 9,
      "qualityName": "白金色",
      "smallIcon": "assets/gem-icons/small_weiguo8.png",
      "bigIcon": "assets/gem-icons/big_weiguo8.png",
      "attributes": [
        {
          "id": 67,
          "amount": 3050
        }
      ],
      "composeCost": {
        "silver": 3500000,
        "materials": [
          {
            "id": 63005,
            "amount": 4
          }
        ]
      },
      "composeId": 90070,
      "position": "此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90072,
      "name": "9级破魏宝石",
      "type": 9,
      "typeName": "破魏",
      "level": 9,
      "quality": 10,
      "qualityName": "琉金色",
      "smallIcon": "assets/gem-icons/small_weiguo9.png",
      "bigIcon": "assets/gem-icons/big_weiguo9.png",
      "attributes": [
        {
          "id": 67,
          "amount": 4000
        }
      ],
      "composeCost": {
        "silver": 4000000,
        "materials": [
          {
            "id": 63005,
            "amount": 5
          }
        ]
      },
      "composeId": 90071,
      "position": "此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90152,
      "name": "10级破魏宝石",
      "type": 9,
      "typeName": "破魏",
      "level": 10,
      "quality": 11,
      "qualityName": "幻彩色",
      "smallIcon": "assets/gem-icons/small_weiguo9.png",
      "bigIcon": "assets/gem-icons/big_weiguo9.png",
      "attributes": [
        {
          "id": 67,
          "amount": 5000
        }
      ],
      "composeCost": {
        "silver": 5000000,
        "materials": [
          {
            "id": 63005,
            "amount": 6
          }
        ]
      },
      "composeId": 90072,
      "position": "此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90082,
      "name": "1级破蜀宝石",
      "type": 10,
      "typeName": "破蜀",
      "level": 1,
      "quality": 2,
      "qualityName": "绿色",
      "smallIcon": "assets/gem-icons/small_shuguo1.png",
      "bigIcon": "assets/gem-icons/big_shuguo1.png",
      "attributes": [
        {
          "id": 68,
          "amount": 30
        }
      ],
      "composeCost": {
        "silver": 0,
        "materials": []
      },
      "composeId": null,
      "position": "此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90083,
      "name": "2级破蜀宝石",
      "type": 10,
      "typeName": "破蜀",
      "level": 2,
      "quality": 3,
      "qualityName": "蓝色",
      "smallIcon": "assets/gem-icons/small_shuguo2.png",
      "bigIcon": "assets/gem-icons/big_shuguo2.png",
      "attributes": [
        {
          "id": 68,
          "amount": 81
        }
      ],
      "composeCost": {
        "silver": 500000,
        "materials": [
          {
            "id": 63005,
            "amount": 1
          }
        ]
      },
      "composeId": 90082,
      "position": "此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90084,
      "name": "3级破蜀宝石",
      "type": 10,
      "typeName": "破蜀",
      "level": 3,
      "quality": 4,
      "qualityName": "紫色",
      "smallIcon": "assets/gem-icons/small_shuguo3.png",
      "bigIcon": "assets/gem-icons/big_shuguo3.png",
      "attributes": [
        {
          "id": 68,
          "amount": 195
        }
      ],
      "composeCost": {
        "silver": 1000000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90083,
      "position": "此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90085,
      "name": "4级破蜀宝石",
      "type": 10,
      "typeName": "破蜀",
      "level": 4,
      "quality": 5,
      "qualityName": "橙色",
      "smallIcon": "assets/gem-icons/small_shuguo4.png",
      "bigIcon": "assets/gem-icons/big_shuguo4.png",
      "attributes": [
        {
          "id": 68,
          "amount": 400
        }
      ],
      "composeCost": {
        "silver": 1500000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90084,
      "position": "此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90086,
      "name": "5级破蜀宝石",
      "type": 10,
      "typeName": "破蜀",
      "level": 5,
      "quality": 6,
      "qualityName": "红色",
      "smallIcon": "assets/gem-icons/small_shuguo5.png",
      "bigIcon": "assets/gem-icons/big_shuguo5.png",
      "attributes": [
        {
          "id": 68,
          "amount": 850
        }
      ],
      "composeCost": {
        "silver": 2000000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90085,
      "position": "此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90087,
      "name": "6级破蜀宝石",
      "type": 10,
      "typeName": "破蜀",
      "level": 6,
      "quality": 7,
      "qualityName": "金色",
      "smallIcon": "assets/gem-icons/small_shuguo6.png",
      "bigIcon": "assets/gem-icons/big_shuguo6.png",
      "attributes": [
        {
          "id": 68,
          "amount": 1680
        }
      ],
      "composeCost": {
        "silver": 2500000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90086,
      "position": "此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90088,
      "name": "7级破蜀宝石",
      "type": 10,
      "typeName": "破蜀",
      "level": 7,
      "quality": 8,
      "qualityName": "暗金色",
      "smallIcon": "assets/gem-icons/small_shuguo7.png",
      "bigIcon": "assets/gem-icons/big_shuguo7.png",
      "attributes": [
        {
          "id": 68,
          "amount": 2250
        }
      ],
      "composeCost": {
        "silver": 3000000,
        "materials": [
          {
            "id": 63005,
            "amount": 3
          }
        ]
      },
      "composeId": 90087,
      "position": "此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90089,
      "name": "8级破蜀宝石",
      "type": 10,
      "typeName": "破蜀",
      "level": 8,
      "quality": 9,
      "qualityName": "白金色",
      "smallIcon": "assets/gem-icons/small_shuguo8.png",
      "bigIcon": "assets/gem-icons/big_shuguo8.png",
      "attributes": [
        {
          "id": 68,
          "amount": 3050
        }
      ],
      "composeCost": {
        "silver": 3500000,
        "materials": [
          {
            "id": 63005,
            "amount": 4
          }
        ]
      },
      "composeId": 90088,
      "position": "此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90090,
      "name": "9级破蜀宝石",
      "type": 10,
      "typeName": "破蜀",
      "level": 9,
      "quality": 10,
      "qualityName": "琉金色",
      "smallIcon": "assets/gem-icons/small_shuguo9.png",
      "bigIcon": "assets/gem-icons/big_shuguo9.png",
      "attributes": [
        {
          "id": 68,
          "amount": 4000
        }
      ],
      "composeCost": {
        "silver": 4000000,
        "materials": [
          {
            "id": 63005,
            "amount": 5
          }
        ]
      },
      "composeId": 90089,
      "position": "此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90154,
      "name": "10级破蜀宝石",
      "type": 10,
      "typeName": "破蜀",
      "level": 10,
      "quality": 11,
      "qualityName": "幻彩色",
      "smallIcon": "assets/gem-icons/small_shuguo9.png",
      "bigIcon": "assets/gem-icons/big_shuguo9.png",
      "attributes": [
        {
          "id": 68,
          "amount": 5000
        }
      ],
      "composeCost": {
        "silver": 5000000,
        "materials": [
          {
            "id": 63005,
            "amount": 6
          }
        ]
      },
      "composeId": 90090,
      "position": "此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90100,
      "name": "1级破吴宝石",
      "type": 11,
      "typeName": "破吴",
      "level": 1,
      "quality": 2,
      "qualityName": "绿色",
      "smallIcon": "assets/gem-icons/small_wuguo1.png",
      "bigIcon": "assets/gem-icons/big_wuguo1.png",
      "attributes": [
        {
          "id": 69,
          "amount": 30
        }
      ],
      "composeCost": {
        "silver": 0,
        "materials": []
      },
      "composeId": null,
      "position": "此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90101,
      "name": "2级破吴宝石",
      "type": 11,
      "typeName": "破吴",
      "level": 2,
      "quality": 3,
      "qualityName": "蓝色",
      "smallIcon": "assets/gem-icons/small_wuguo2.png",
      "bigIcon": "assets/gem-icons/big_wuguo2.png",
      "attributes": [
        {
          "id": 69,
          "amount": 81
        }
      ],
      "composeCost": {
        "silver": 500000,
        "materials": [
          {
            "id": 63005,
            "amount": 1
          }
        ]
      },
      "composeId": 90100,
      "position": "此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90102,
      "name": "3级破吴宝石",
      "type": 11,
      "typeName": "破吴",
      "level": 3,
      "quality": 4,
      "qualityName": "紫色",
      "smallIcon": "assets/gem-icons/small_wuguo3.png",
      "bigIcon": "assets/gem-icons/big_wuguo3.png",
      "attributes": [
        {
          "id": 69,
          "amount": 195
        }
      ],
      "composeCost": {
        "silver": 1000000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90101,
      "position": "此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90103,
      "name": "4级破吴宝石",
      "type": 11,
      "typeName": "破吴",
      "level": 4,
      "quality": 5,
      "qualityName": "橙色",
      "smallIcon": "assets/gem-icons/small_wuguo4.png",
      "bigIcon": "assets/gem-icons/big_wuguo4.png",
      "attributes": [
        {
          "id": 69,
          "amount": 400
        }
      ],
      "composeCost": {
        "silver": 1500000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90102,
      "position": "此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90104,
      "name": "5级破吴宝石",
      "type": 11,
      "typeName": "破吴",
      "level": 5,
      "quality": 6,
      "qualityName": "红色",
      "smallIcon": "assets/gem-icons/small_wuguo5.png",
      "bigIcon": "assets/gem-icons/big_wuguo5.png",
      "attributes": [
        {
          "id": 69,
          "amount": 850
        }
      ],
      "composeCost": {
        "silver": 2000000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90103,
      "position": "此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90105,
      "name": "6级破吴宝石",
      "type": 11,
      "typeName": "破吴",
      "level": 6,
      "quality": 7,
      "qualityName": "金色",
      "smallIcon": "assets/gem-icons/small_wuguo6.png",
      "bigIcon": "assets/gem-icons/big_wuguo6.png",
      "attributes": [
        {
          "id": 69,
          "amount": 1680
        }
      ],
      "composeCost": {
        "silver": 2500000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90104,
      "position": "此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90106,
      "name": "7级破吴宝石",
      "type": 11,
      "typeName": "破吴",
      "level": 7,
      "quality": 8,
      "qualityName": "暗金色",
      "smallIcon": "assets/gem-icons/small_wuguo7.png",
      "bigIcon": "assets/gem-icons/big_wuguo7.png",
      "attributes": [
        {
          "id": 69,
          "amount": 2250
        }
      ],
      "composeCost": {
        "silver": 3000000,
        "materials": [
          {
            "id": 63005,
            "amount": 3
          }
        ]
      },
      "composeId": 90105,
      "position": "此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90107,
      "name": "8级破吴宝石",
      "type": 11,
      "typeName": "破吴",
      "level": 8,
      "quality": 9,
      "qualityName": "白金色",
      "smallIcon": "assets/gem-icons/small_wuguo8.png",
      "bigIcon": "assets/gem-icons/big_wuguo8.png",
      "attributes": [
        {
          "id": 69,
          "amount": 3050
        }
      ],
      "composeCost": {
        "silver": 3500000,
        "materials": [
          {
            "id": 63005,
            "amount": 4
          }
        ]
      },
      "composeId": 90106,
      "position": "此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90108,
      "name": "9级破吴宝石",
      "type": 11,
      "typeName": "破吴",
      "level": 9,
      "quality": 10,
      "qualityName": "琉金色",
      "smallIcon": "assets/gem-icons/small_wuguo9.png",
      "bigIcon": "assets/gem-icons/big_wuguo9.png",
      "attributes": [
        {
          "id": 69,
          "amount": 4000
        }
      ],
      "composeCost": {
        "silver": 4000000,
        "materials": [
          {
            "id": 63005,
            "amount": 5
          }
        ]
      },
      "composeId": 90107,
      "position": "此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90156,
      "name": "10级破吴宝石",
      "type": 11,
      "typeName": "破吴",
      "level": 10,
      "quality": 11,
      "qualityName": "幻彩色",
      "smallIcon": "assets/gem-icons/small_wuguo9.png",
      "bigIcon": "assets/gem-icons/big_wuguo9.png",
      "attributes": [
        {
          "id": 69,
          "amount": 5000
        }
      ],
      "composeCost": {
        "silver": 5000000,
        "materials": [
          {
            "id": 63005,
            "amount": 6
          }
        ]
      },
      "composeId": 90108,
      "position": "此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90118,
      "name": "1级破群宝石",
      "type": 12,
      "typeName": "破群",
      "level": 1,
      "quality": 2,
      "qualityName": "绿色",
      "smallIcon": "assets/gem-icons/small_qunxiong1.png",
      "bigIcon": "assets/gem-icons/big_qunxiong1.png",
      "attributes": [
        {
          "id": 70,
          "amount": 30
        }
      ],
      "composeCost": {
        "silver": 0,
        "materials": []
      },
      "composeId": null,
      "position": "此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90119,
      "name": "2级破群宝石",
      "type": 12,
      "typeName": "破群",
      "level": 2,
      "quality": 3,
      "qualityName": "蓝色",
      "smallIcon": "assets/gem-icons/small_qunxiong2.png",
      "bigIcon": "assets/gem-icons/big_qunxiong2.png",
      "attributes": [
        {
          "id": 70,
          "amount": 81
        }
      ],
      "composeCost": {
        "silver": 500000,
        "materials": [
          {
            "id": 63005,
            "amount": 1
          }
        ]
      },
      "composeId": 90118,
      "position": "此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90120,
      "name": "3级破群宝石",
      "type": 12,
      "typeName": "破群",
      "level": 3,
      "quality": 4,
      "qualityName": "紫色",
      "smallIcon": "assets/gem-icons/small_qunxiong3.png",
      "bigIcon": "assets/gem-icons/big_qunxiong3.png",
      "attributes": [
        {
          "id": 70,
          "amount": 195
        }
      ],
      "composeCost": {
        "silver": 1000000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90119,
      "position": "此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90121,
      "name": "4级破群宝石",
      "type": 12,
      "typeName": "破群",
      "level": 4,
      "quality": 5,
      "qualityName": "橙色",
      "smallIcon": "assets/gem-icons/small_qunxiong4.png",
      "bigIcon": "assets/gem-icons/big_qunxiong4.png",
      "attributes": [
        {
          "id": 70,
          "amount": 400
        }
      ],
      "composeCost": {
        "silver": 1500000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90120,
      "position": "此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90122,
      "name": "5级破群宝石",
      "type": 12,
      "typeName": "破群",
      "level": 5,
      "quality": 6,
      "qualityName": "红色",
      "smallIcon": "assets/gem-icons/small_qunxiong5.png",
      "bigIcon": "assets/gem-icons/big_qunxiong5.png",
      "attributes": [
        {
          "id": 70,
          "amount": 850
        }
      ],
      "composeCost": {
        "silver": 2000000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90121,
      "position": "此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90123,
      "name": "6级破群宝石",
      "type": 12,
      "typeName": "破群",
      "level": 6,
      "quality": 7,
      "qualityName": "金色",
      "smallIcon": "assets/gem-icons/small_qunxiong6.png",
      "bigIcon": "assets/gem-icons/big_qunxiong6.png",
      "attributes": [
        {
          "id": 70,
          "amount": 1680
        }
      ],
      "composeCost": {
        "silver": 2500000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90122,
      "position": "此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90124,
      "name": "7级破群宝石",
      "type": 12,
      "typeName": "破群",
      "level": 7,
      "quality": 8,
      "qualityName": "暗金色",
      "smallIcon": "assets/gem-icons/small_qunxiong7.png",
      "bigIcon": "assets/gem-icons/big_qunxiong7.png",
      "attributes": [
        {
          "id": 70,
          "amount": 2250
        }
      ],
      "composeCost": {
        "silver": 3000000,
        "materials": [
          {
            "id": 63005,
            "amount": 3
          }
        ]
      },
      "composeId": 90123,
      "position": "此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90125,
      "name": "8级破群宝石",
      "type": 12,
      "typeName": "破群",
      "level": 8,
      "quality": 9,
      "qualityName": "白金色",
      "smallIcon": "assets/gem-icons/small_qunxiong8.png",
      "bigIcon": "assets/gem-icons/big_qunxiong8.png",
      "attributes": [
        {
          "id": 70,
          "amount": 3050
        }
      ],
      "composeCost": {
        "silver": 3500000,
        "materials": [
          {
            "id": 63005,
            "amount": 4
          }
        ]
      },
      "composeId": 90124,
      "position": "此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90126,
      "name": "9级破群宝石",
      "type": 12,
      "typeName": "破群",
      "level": 9,
      "quality": 10,
      "qualityName": "琉金色",
      "smallIcon": "assets/gem-icons/small_qunxiong9.png",
      "bigIcon": "assets/gem-icons/big_qunxiong9.png",
      "attributes": [
        {
          "id": 70,
          "amount": 4000
        }
      ],
      "composeCost": {
        "silver": 4000000,
        "materials": [
          {
            "id": 63005,
            "amount": 5
          }
        ]
      },
      "composeId": 90125,
      "position": "此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90158,
      "name": "10级破群宝石",
      "type": 12,
      "typeName": "破群",
      "level": 10,
      "quality": 11,
      "qualityName": "幻彩色",
      "smallIcon": "assets/gem-icons/small_qunxiong9.png",
      "bigIcon": "assets/gem-icons/big_qunxiong9.png",
      "attributes": [
        {
          "id": 70,
          "amount": 5000
        }
      ],
      "composeCost": {
        "silver": 5000000,
        "materials": [
          {
            "id": 63005,
            "amount": 6
          }
        ]
      },
      "composeId": 90126,
      "position": "此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90037,
      "name": "1级加伤宝石",
      "type": 13,
      "typeName": "加伤",
      "level": 1,
      "quality": 2,
      "qualityName": "绿色",
      "smallIcon": "assets/gem-icons/small_pvp1.png",
      "bigIcon": "assets/gem-icons/big_pvp1.png",
      "attributes": [
        {
          "id": 101,
          "amount": 20
        }
      ],
      "composeCost": {
        "silver": 0,
        "materials": []
      },
      "composeId": null,
      "position": "细腻而坚实,使其具有凝聚力，此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90038,
      "name": "2级加伤宝石",
      "type": 13,
      "typeName": "加伤",
      "level": 2,
      "quality": 3,
      "qualityName": "蓝色",
      "smallIcon": "assets/gem-icons/small_pvp2.png",
      "bigIcon": "assets/gem-icons/big_pvp2.png",
      "attributes": [
        {
          "id": 101,
          "amount": 54
        }
      ],
      "composeCost": {
        "silver": 500000,
        "materials": [
          {
            "id": 63005,
            "amount": 1
          }
        ]
      },
      "composeId": 90037,
      "position": "细腻而坚实,使其具有凝聚力，此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90039,
      "name": "3级加伤宝石",
      "type": 13,
      "typeName": "加伤",
      "level": 3,
      "quality": 4,
      "qualityName": "紫色",
      "smallIcon": "assets/gem-icons/small_pvp3.png",
      "bigIcon": "assets/gem-icons/big_pvp3.png",
      "attributes": [
        {
          "id": 101,
          "amount": 130
        }
      ],
      "composeCost": {
        "silver": 1000000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90038,
      "position": "细腻而坚实,使其具有凝聚力，此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90040,
      "name": "4级加伤宝石",
      "type": 13,
      "typeName": "加伤",
      "level": 4,
      "quality": 5,
      "qualityName": "橙色",
      "smallIcon": "assets/gem-icons/small_pvp4.png",
      "bigIcon": "assets/gem-icons/big_pvp4.png",
      "attributes": [
        {
          "id": 101,
          "amount": 270
        }
      ],
      "composeCost": {
        "silver": 1500000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90039,
      "position": "细腻而坚实,使其具有凝聚力，此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90041,
      "name": "5级加伤宝石",
      "type": 13,
      "typeName": "加伤",
      "level": 5,
      "quality": 6,
      "qualityName": "红色",
      "smallIcon": "assets/gem-icons/small_pvp5.png",
      "bigIcon": "assets/gem-icons/big_pvp5.png",
      "attributes": [
        {
          "id": 101,
          "amount": 570
        }
      ],
      "composeCost": {
        "silver": 2000000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90040,
      "position": "细腻而坚实,使其具有凝聚力，此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90042,
      "name": "6级加伤宝石",
      "type": 13,
      "typeName": "加伤",
      "level": 6,
      "quality": 7,
      "qualityName": "金色",
      "smallIcon": "assets/gem-icons/small_pvp6.png",
      "bigIcon": "assets/gem-icons/big_pvp6.png",
      "attributes": [
        {
          "id": 101,
          "amount": 1100
        }
      ],
      "composeCost": {
        "silver": 2500000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90041,
      "position": "细腻而坚实,使其具有凝聚力，此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90043,
      "name": "7级加伤宝石",
      "type": 13,
      "typeName": "加伤",
      "level": 7,
      "quality": 8,
      "qualityName": "暗金色",
      "smallIcon": "assets/gem-icons/small_pvp7.png",
      "bigIcon": "assets/gem-icons/big_pvp7.png",
      "attributes": [
        {
          "id": 101,
          "amount": 1500
        }
      ],
      "composeCost": {
        "silver": 3000000,
        "materials": [
          {
            "id": 63005,
            "amount": 3
          }
        ]
      },
      "composeId": 90042,
      "position": "细腻而坚实,使其具有凝聚力，此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90044,
      "name": "8级加伤宝石",
      "type": 13,
      "typeName": "加伤",
      "level": 8,
      "quality": 9,
      "qualityName": "白金色",
      "smallIcon": "assets/gem-icons/small_pvp8.png",
      "bigIcon": "assets/gem-icons/big_pvp8.png",
      "attributes": [
        {
          "id": 101,
          "amount": 2000
        }
      ],
      "composeCost": {
        "silver": 3500000,
        "materials": [
          {
            "id": 63005,
            "amount": 4
          }
        ]
      },
      "composeId": 90043,
      "position": "细腻而坚实,使其具有凝聚力，此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90045,
      "name": "9级加伤宝石",
      "type": 13,
      "typeName": "加伤",
      "level": 9,
      "quality": 10,
      "qualityName": "琉金色",
      "smallIcon": "assets/gem-icons/small_pvp9.png",
      "bigIcon": "assets/gem-icons/big_pvp9.png",
      "attributes": [
        {
          "id": 101,
          "amount": 2500
        }
      ],
      "composeCost": {
        "silver": 4000000,
        "materials": [
          {
            "id": 63005,
            "amount": 5
          }
        ]
      },
      "composeId": 90044,
      "position": "细腻而坚实,使其具有凝聚力，此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90149,
      "name": "10级加伤宝石",
      "type": 13,
      "typeName": "加伤",
      "level": 10,
      "quality": 11,
      "qualityName": "幻彩色",
      "smallIcon": "assets/gem-icons/small_pvp9.png",
      "bigIcon": "assets/gem-icons/big_pvp9.png",
      "attributes": [
        {
          "id": 101,
          "amount": 3000
        }
      ],
      "composeCost": {
        "silver": 5000000,
        "materials": [
          {
            "id": 63005,
            "amount": 6
          }
        ]
      },
      "composeId": 90045,
      "position": "细腻而坚实,使其具有凝聚力，此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90046,
      "name": "1级减伤宝石",
      "type": 14,
      "typeName": "减伤",
      "level": 1,
      "quality": 2,
      "qualityName": "绿色",
      "smallIcon": "assets/gem-icons/small_pvp1.png",
      "bigIcon": "assets/gem-icons/big_pvp1.png",
      "attributes": [
        {
          "id": 102,
          "amount": 20
        }
      ],
      "composeCost": {
        "silver": 0,
        "materials": []
      },
      "composeId": null,
      "position": "细腻而坚实,使其具有凝聚力，此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90047,
      "name": "2级减伤宝石",
      "type": 14,
      "typeName": "减伤",
      "level": 2,
      "quality": 3,
      "qualityName": "蓝色",
      "smallIcon": "assets/gem-icons/small_pvp2.png",
      "bigIcon": "assets/gem-icons/big_pvp2.png",
      "attributes": [
        {
          "id": 102,
          "amount": 54
        }
      ],
      "composeCost": {
        "silver": 500000,
        "materials": [
          {
            "id": 63005,
            "amount": 1
          }
        ]
      },
      "composeId": 90046,
      "position": "细腻而坚实,使其具有凝聚力，此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90048,
      "name": "3级减伤宝石",
      "type": 14,
      "typeName": "减伤",
      "level": 3,
      "quality": 4,
      "qualityName": "紫色",
      "smallIcon": "assets/gem-icons/small_pvp3.png",
      "bigIcon": "assets/gem-icons/big_pvp3.png",
      "attributes": [
        {
          "id": 102,
          "amount": 130
        }
      ],
      "composeCost": {
        "silver": 1000000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90047,
      "position": "细腻而坚实,使其具有凝聚力，此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90049,
      "name": "4级减伤宝石",
      "type": 14,
      "typeName": "减伤",
      "level": 4,
      "quality": 5,
      "qualityName": "橙色",
      "smallIcon": "assets/gem-icons/small_pvp4.png",
      "bigIcon": "assets/gem-icons/big_pvp4.png",
      "attributes": [
        {
          "id": 102,
          "amount": 270
        }
      ],
      "composeCost": {
        "silver": 1500000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90048,
      "position": "细腻而坚实,使其具有凝聚力，此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90050,
      "name": "5级减伤宝石",
      "type": 14,
      "typeName": "减伤",
      "level": 5,
      "quality": 6,
      "qualityName": "红色",
      "smallIcon": "assets/gem-icons/small_pvp5.png",
      "bigIcon": "assets/gem-icons/big_pvp5.png",
      "attributes": [
        {
          "id": 102,
          "amount": 570
        }
      ],
      "composeCost": {
        "silver": 2000000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90049,
      "position": "细腻而坚实,使其具有凝聚力，此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90051,
      "name": "6级减伤宝石",
      "type": 14,
      "typeName": "减伤",
      "level": 6,
      "quality": 7,
      "qualityName": "金色",
      "smallIcon": "assets/gem-icons/small_pvp6.png",
      "bigIcon": "assets/gem-icons/big_pvp6.png",
      "attributes": [
        {
          "id": 102,
          "amount": 1100
        }
      ],
      "composeCost": {
        "silver": 2500000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90050,
      "position": "细腻而坚实,使其具有凝聚力，此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90052,
      "name": "7级减伤宝石",
      "type": 14,
      "typeName": "减伤",
      "level": 7,
      "quality": 8,
      "qualityName": "暗金色",
      "smallIcon": "assets/gem-icons/small_pvp7.png",
      "bigIcon": "assets/gem-icons/big_pvp7.png",
      "attributes": [
        {
          "id": 102,
          "amount": 1500
        }
      ],
      "composeCost": {
        "silver": 3000000,
        "materials": [
          {
            "id": 63005,
            "amount": 3
          }
        ]
      },
      "composeId": 90051,
      "position": "细腻而坚实,使其具有凝聚力，此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90053,
      "name": "8级减伤宝石",
      "type": 14,
      "typeName": "减伤",
      "level": 8,
      "quality": 9,
      "qualityName": "白金色",
      "smallIcon": "assets/gem-icons/small_pvp8.png",
      "bigIcon": "assets/gem-icons/big_pvp8.png",
      "attributes": [
        {
          "id": 102,
          "amount": 2000
        }
      ],
      "composeCost": {
        "silver": 3500000,
        "materials": [
          {
            "id": 63005,
            "amount": 4
          }
        ]
      },
      "composeId": 90052,
      "position": "细腻而坚实,使其具有凝聚力，此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90054,
      "name": "9级减伤宝石",
      "type": 14,
      "typeName": "减伤",
      "level": 9,
      "quality": 10,
      "qualityName": "琉金色",
      "smallIcon": "assets/gem-icons/small_pvp9.png",
      "bigIcon": "assets/gem-icons/big_pvp9.png",
      "attributes": [
        {
          "id": 102,
          "amount": 2500
        }
      ],
      "composeCost": {
        "silver": 4000000,
        "materials": [
          {
            "id": 63005,
            "amount": 5
          }
        ]
      },
      "composeId": 90053,
      "position": "细腻而坚实,使其具有凝聚力，此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90150,
      "name": "10级减伤宝石",
      "type": 14,
      "typeName": "减伤",
      "level": 10,
      "quality": 11,
      "qualityName": "幻彩色",
      "smallIcon": "assets/gem-icons/small_pvp9.png",
      "bigIcon": "assets/gem-icons/big_pvp9.png",
      "attributes": [
        {
          "id": 102,
          "amount": 3000
        }
      ],
      "composeCost": {
        "silver": 5000000,
        "materials": [
          {
            "id": 63005,
            "amount": 6
          }
        ]
      },
      "composeId": 90054,
      "position": "细腻而坚实,使其具有凝聚力，此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90127,
      "name": "1级怒减宝石",
      "type": 15,
      "typeName": "怒减",
      "level": 1,
      "quality": 2,
      "qualityName": "绿色",
      "smallIcon": "assets/gem-icons/small_nujiajian1.png",
      "bigIcon": "assets/gem-icons/big_nujiajian1.png",
      "attributes": [
        {
          "id": 61,
          "amount": 30
        }
      ],
      "composeCost": {
        "silver": 0,
        "materials": []
      },
      "composeId": null,
      "position": "此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90128,
      "name": "2级怒减宝石",
      "type": 15,
      "typeName": "怒减",
      "level": 2,
      "quality": 3,
      "qualityName": "蓝色",
      "smallIcon": "assets/gem-icons/small_nujiajian2.png",
      "bigIcon": "assets/gem-icons/big_nujiajian2.png",
      "attributes": [
        {
          "id": 61,
          "amount": 81
        }
      ],
      "composeCost": {
        "silver": 500000,
        "materials": [
          {
            "id": 63005,
            "amount": 1
          }
        ]
      },
      "composeId": 90127,
      "position": "此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90129,
      "name": "3级怒减宝石",
      "type": 15,
      "typeName": "怒减",
      "level": 3,
      "quality": 4,
      "qualityName": "紫色",
      "smallIcon": "assets/gem-icons/small_nujiajian3.png",
      "bigIcon": "assets/gem-icons/big_nujiajian3.png",
      "attributes": [
        {
          "id": 61,
          "amount": 195
        }
      ],
      "composeCost": {
        "silver": 1000000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90128,
      "position": "此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90130,
      "name": "4级怒减宝石",
      "type": 15,
      "typeName": "怒减",
      "level": 4,
      "quality": 5,
      "qualityName": "橙色",
      "smallIcon": "assets/gem-icons/small_nujiajian4.png",
      "bigIcon": "assets/gem-icons/big_nujiajian4.png",
      "attributes": [
        {
          "id": 61,
          "amount": 400
        }
      ],
      "composeCost": {
        "silver": 1500000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90129,
      "position": "此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90131,
      "name": "5级怒减宝石",
      "type": 15,
      "typeName": "怒减",
      "level": 5,
      "quality": 6,
      "qualityName": "红色",
      "smallIcon": "assets/gem-icons/small_nujiajian5.png",
      "bigIcon": "assets/gem-icons/big_nujiajian5.png",
      "attributes": [
        {
          "id": 61,
          "amount": 850
        }
      ],
      "composeCost": {
        "silver": 2000000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90130,
      "position": "此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90132,
      "name": "6级怒减宝石",
      "type": 15,
      "typeName": "怒减",
      "level": 6,
      "quality": 7,
      "qualityName": "金色",
      "smallIcon": "assets/gem-icons/small_nujiajian6.png",
      "bigIcon": "assets/gem-icons/big_nujiajian6.png",
      "attributes": [
        {
          "id": 61,
          "amount": 1680
        }
      ],
      "composeCost": {
        "silver": 2500000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90131,
      "position": "此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90133,
      "name": "7级怒减宝石",
      "type": 15,
      "typeName": "怒减",
      "level": 7,
      "quality": 8,
      "qualityName": "暗金色",
      "smallIcon": "assets/gem-icons/small_nujiajian7.png",
      "bigIcon": "assets/gem-icons/big_nujiajian7.png",
      "attributes": [
        {
          "id": 61,
          "amount": 2250
        }
      ],
      "composeCost": {
        "silver": 3000000,
        "materials": [
          {
            "id": 63005,
            "amount": 3
          }
        ]
      },
      "composeId": 90132,
      "position": "此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90134,
      "name": "8级怒减宝石",
      "type": 15,
      "typeName": "怒减",
      "level": 8,
      "quality": 9,
      "qualityName": "白金色",
      "smallIcon": "assets/gem-icons/small_nujiajian8.png",
      "bigIcon": "assets/gem-icons/big_nujiajian8.png",
      "attributes": [
        {
          "id": 61,
          "amount": 3050
        }
      ],
      "composeCost": {
        "silver": 3500000,
        "materials": [
          {
            "id": 63005,
            "amount": 4
          }
        ]
      },
      "composeId": 90133,
      "position": "此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90135,
      "name": "9级怒减宝石",
      "type": 15,
      "typeName": "怒减",
      "level": 9,
      "quality": 10,
      "qualityName": "琉金色",
      "smallIcon": "assets/gem-icons/small_nujiajian9.png",
      "bigIcon": "assets/gem-icons/big_nujiajian9.png",
      "attributes": [
        {
          "id": 61,
          "amount": 4000
        }
      ],
      "composeCost": {
        "silver": 4000000,
        "materials": [
          {
            "id": 63005,
            "amount": 5
          }
        ]
      },
      "composeId": 90134,
      "position": "此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90159,
      "name": "10级怒减宝石",
      "type": 15,
      "typeName": "怒减",
      "level": 10,
      "quality": 11,
      "qualityName": "幻彩色",
      "smallIcon": "assets/gem-icons/small_nujiajian9.png",
      "bigIcon": "assets/gem-icons/big_nujiajian9.png",
      "attributes": [
        {
          "id": 61,
          "amount": 5000
        }
      ],
      "composeCost": {
        "silver": 5000000,
        "materials": [
          {
            "id": 63005,
            "amount": 6
          }
        ]
      },
      "composeId": 90135,
      "position": "此宝石可以镶嵌于头盔及盔甲上"
    },
    {
      "id": 90136,
      "name": "1级怒加宝石",
      "type": 16,
      "typeName": "怒加",
      "level": 1,
      "quality": 2,
      "qualityName": "绿色",
      "smallIcon": "assets/gem-icons/small_nujiajian1.png",
      "bigIcon": "assets/gem-icons/big_nujiajian1.png",
      "attributes": [
        {
          "id": 60,
          "amount": 30
        }
      ],
      "composeCost": {
        "silver": 0,
        "materials": []
      },
      "composeId": null,
      "position": "此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90137,
      "name": "2级怒加宝石",
      "type": 16,
      "typeName": "怒加",
      "level": 2,
      "quality": 3,
      "qualityName": "蓝色",
      "smallIcon": "assets/gem-icons/small_nujiajian2.png",
      "bigIcon": "assets/gem-icons/big_nujiajian2.png",
      "attributes": [
        {
          "id": 60,
          "amount": 81
        }
      ],
      "composeCost": {
        "silver": 500000,
        "materials": [
          {
            "id": 63005,
            "amount": 1
          }
        ]
      },
      "composeId": 90136,
      "position": "此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90138,
      "name": "3级怒加宝石",
      "type": 16,
      "typeName": "怒加",
      "level": 3,
      "quality": 4,
      "qualityName": "紫色",
      "smallIcon": "assets/gem-icons/small_nujiajian3.png",
      "bigIcon": "assets/gem-icons/big_nujiajian3.png",
      "attributes": [
        {
          "id": 60,
          "amount": 195
        }
      ],
      "composeCost": {
        "silver": 1000000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90137,
      "position": "此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90139,
      "name": "4级怒加宝石",
      "type": 16,
      "typeName": "怒加",
      "level": 4,
      "quality": 5,
      "qualityName": "橙色",
      "smallIcon": "assets/gem-icons/small_nujiajian4.png",
      "bigIcon": "assets/gem-icons/big_nujiajian4.png",
      "attributes": [
        {
          "id": 60,
          "amount": 400
        }
      ],
      "composeCost": {
        "silver": 1500000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90138,
      "position": "此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90140,
      "name": "5级怒加宝石",
      "type": 16,
      "typeName": "怒加",
      "level": 5,
      "quality": 6,
      "qualityName": "红色",
      "smallIcon": "assets/gem-icons/small_nujiajian5.png",
      "bigIcon": "assets/gem-icons/big_nujiajian5.png",
      "attributes": [
        {
          "id": 60,
          "amount": 850
        }
      ],
      "composeCost": {
        "silver": 2000000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90139,
      "position": "此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90141,
      "name": "6级怒加宝石",
      "type": 16,
      "typeName": "怒加",
      "level": 6,
      "quality": 7,
      "qualityName": "金色",
      "smallIcon": "assets/gem-icons/small_nujiajian6.png",
      "bigIcon": "assets/gem-icons/big_nujiajian6.png",
      "attributes": [
        {
          "id": 60,
          "amount": 1680
        }
      ],
      "composeCost": {
        "silver": 2500000,
        "materials": [
          {
            "id": 63005,
            "amount": 2
          }
        ]
      },
      "composeId": 90140,
      "position": "此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90142,
      "name": "7级怒加宝石",
      "type": 16,
      "typeName": "怒加",
      "level": 7,
      "quality": 8,
      "qualityName": "暗金色",
      "smallIcon": "assets/gem-icons/small_nujiajian7.png",
      "bigIcon": "assets/gem-icons/big_nujiajian7.png",
      "attributes": [
        {
          "id": 60,
          "amount": 2250
        }
      ],
      "composeCost": {
        "silver": 3000000,
        "materials": [
          {
            "id": 63005,
            "amount": 3
          }
        ]
      },
      "composeId": 90141,
      "position": "此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90143,
      "name": "8级怒加宝石",
      "type": 16,
      "typeName": "怒加",
      "level": 8,
      "quality": 9,
      "qualityName": "白金色",
      "smallIcon": "assets/gem-icons/small_nujiajian8.png",
      "bigIcon": "assets/gem-icons/big_nujiajian8.png",
      "attributes": [
        {
          "id": 60,
          "amount": 3050
        }
      ],
      "composeCost": {
        "silver": 3500000,
        "materials": [
          {
            "id": 63005,
            "amount": 4
          }
        ]
      },
      "composeId": 90142,
      "position": "此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90144,
      "name": "9级怒加宝石",
      "type": 16,
      "typeName": "怒加",
      "level": 9,
      "quality": 10,
      "qualityName": "琉金色",
      "smallIcon": "assets/gem-icons/small_nujiajian9.png",
      "bigIcon": "assets/gem-icons/big_nujiajian9.png",
      "attributes": [
        {
          "id": 60,
          "amount": 4000
        }
      ],
      "composeCost": {
        "silver": 4000000,
        "materials": [
          {
            "id": 63005,
            "amount": 5
          }
        ]
      },
      "composeId": 90143,
      "position": "此宝石可以镶嵌于武器及项链上"
    },
    {
      "id": 90160,
      "name": "10级怒加宝石",
      "type": 16,
      "typeName": "怒加",
      "level": 10,
      "quality": 11,
      "qualityName": "幻彩色",
      "smallIcon": "assets/gem-icons/small_nujiajian9.png",
      "bigIcon": "assets/gem-icons/big_nujiajian9.png",
      "attributes": [
        {
          "id": 60,
          "amount": 5000
        }
      ],
      "composeCost": {
        "silver": 5000000,
        "materials": [
          {
            "id": 63005,
            "amount": 6
          }
        ]
      },
      "composeId": 90144,
      "position": "此宝石可以镶嵌于武器及项链上"
    }
  ]
};
