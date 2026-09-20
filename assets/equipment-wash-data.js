// 装备固定洗炼上限：来源于 DB_Item_arm.lua、DB_Potentiality.lua、DB_Affix.lua，
// 由客户端 EquipFixedData.getPotentialityMax 的源码公式计算，不是实测值。
// potentialityValue 的顺序与 DB_Potentiality 中的 type/value 对应。
window.equipmentWashData = {
  profiles: {
    weapon: {
      potentialityId: 61,
      baseWorth: 4800,
      levelRatio: 20,
      growWorth: 9600,
      potentialityValue: {
        "攻击": 80,
        "最终伤害": 100,
        "最终免伤": 125,
        "生命": 25
      }
    },
    armor: {
      potentialityId: 62,
      baseWorth: 3600,
      levelRatio: 20,
      growWorth: 7200,
      potentialityValue: {
        "物防": 80,
        "最终伤害": 125,
        "最终免伤": 100,
        "生命": 20
      }
    },
    helmet: {
      potentialityId: 63,
      baseWorth: 3600,
      levelRatio: 20,
      growWorth: 7200,
      potentialityValue: {
        "法防": 80,
        "最终伤害": 125,
        "最终免伤": 100,
        "生命": 20
      }
    },
    accessory: {
      potentialityId: 64,
      baseWorth: 4800,
      levelRatio: 20,
      growWorth: 9600,
      potentialityValue: {
        "攻击": 100,
        "物防": 100,
        "法防": 125,
        "生命": 16
      }
    }
  }
};
