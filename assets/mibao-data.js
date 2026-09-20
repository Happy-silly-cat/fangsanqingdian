/*
 * 秘宝数据维护：来源于解包后的 DB_Item_mibao.lua 和 DB_Affix.lua。
 * 每件秘宝的 baseAtt、growAtt、upgrade_att、Advance_Att 和消耗档位均保留在此处。
 * 秘宝本体与对应碎片图标统一按秘宝 ID 放在 assets/mibao-items/ 下，新增秘宝时同步更新两处 icon。
 * 后续补充秘宝时，优先更新 items；页面会自动读取列表、属性和材料配置。
 */
(() => {
  const data = {
  "unlockLevel": 158,
  "icon": "assets/lingdi-items/mbqianghuashi.png",
  "maxLevel": 500,
  "attributeMeta": {
    "1": {
      "name": "生命",
      "percent": false
    },
    "2": {
      "name": "物攻",
      "percent": false
    },
    "3": {
      "name": "法攻",
      "percent": false
    },
    "4": {
      "name": "物防",
      "percent": false
    },
    "5": {
      "name": "法防",
      "percent": false
    },
    "6": {
      "name": "统帅",
      "percent": false
    },
    "7": {
      "name": "武力",
      "percent": false
    },
    "8": {
      "name": "智力",
      "percent": false
    },
    "9": {
      "name": "攻击",
      "percent": false
    },
    "10": {
      "name": "必防",
      "percent": false
    },
    "11": {
      "name": "生命",
      "percent": true
    },
    "12": {
      "name": "物攻",
      "percent": true
    },
    "13": {
      "name": "法攻",
      "percent": true
    },
    "14": {
      "name": "物防",
      "percent": true
    },
    "15": {
      "name": "法防",
      "percent": true
    },
    "16": {
      "name": "统帅",
      "percent": true
    },
    "17": {
      "name": "武力",
      "percent": true
    },
    "18": {
      "name": "智力",
      "percent": true
    },
    "19": {
      "name": "攻击",
      "percent": true
    },
    "20": {
      "name": "必防",
      "percent": true
    },
    "21": {
      "name": "命中率",
      "percent": true
    },
    "22": {
      "name": "物理伤害",
      "percent": true
    },
    "23": {
      "name": "法术伤害",
      "percent": true
    },
    "24": {
      "name": "物理免伤",
      "percent": true
    },
    "25": {
      "name": "法术免伤",
      "percent": true
    },
    "26": {
      "name": "暴击率",
      "percent": true
    },
    "27": {
      "name": "格挡率",
      "percent": true
    },
    "28": {
      "name": "闪避率",
      "percent": true
    },
    "29": {
      "name": "最终伤害",
      "percent": false
    },
    "30": {
      "name": "最终免伤",
      "percent": false
    },
    "31": {
      "name": "属性1",
      "percent": false
    },
    "32": {
      "name": "属性1",
      "percent": false
    },
    "33": {
      "name": "属性1",
      "percent": false
    },
    "34": {
      "name": "属性1",
      "percent": false
    },
    "35": {
      "name": "属性1",
      "percent": false
    },
    "36": {
      "name": "属性1",
      "percent": false
    },
    "37": {
      "name": "属性1",
      "percent": false
    },
    "38": {
      "name": "属性1",
      "percent": false
    },
    "39": {
      "name": "属性1",
      "percent": false
    },
    "40": {
      "name": "属性1",
      "percent": false
    },
    "41": {
      "name": "属性1",
      "percent": false
    },
    "42": {
      "name": "属性1",
      "percent": false
    },
    "43": {
      "name": "属性1",
      "percent": false
    },
    "44": {
      "name": "属性1",
      "percent": false
    },
    "45": {
      "name": "属性1",
      "percent": false
    },
    "46": {
      "name": "属性1",
      "percent": false
    },
    "47": {
      "name": "属性1",
      "percent": false
    },
    "48": {
      "name": "属性1",
      "percent": false
    },
    "49": {
      "name": "初始怒气",
      "percent": false
    },
    "50": {
      "name": "属性1",
      "percent": false
    },
    "51": {
      "name": "生命",
      "percent": false
    },
    "52": {
      "name": "属性1",
      "percent": false
    },
    "53": {
      "name": "属性1",
      "percent": false
    },
    "54": {
      "name": "物防",
      "percent": false
    },
    "55": {
      "name": "法防",
      "percent": false
    },
    "56": {
      "name": "伤害",
      "percent": true
    },
    "57": {
      "name": "免伤",
      "percent": true
    },
    "58": {
      "name": "普攻加伤",
      "percent": true
    },
    "59": {
      "name": "普攻减伤",
      "percent": true
    },
    "60": {
      "name": "怒气加伤",
      "percent": true
    },
    "61": {
      "name": "怒气减伤",
      "percent": true
    },
    "62": {
      "name": "治疗率",
      "percent": true
    },
    "63": {
      "name": "被治疗率",
      "percent": true
    },
    "64": {
      "name": "属性1",
      "percent": false
    },
    "65": {
      "name": "属性1",
      "percent": false
    },
    "66": {
      "name": "属性1",
      "percent": false
    },
    "67": {
      "name": "破魏",
      "percent": true
    },
    "68": {
      "name": "破蜀",
      "percent": true
    },
    "69": {
      "name": "破吴",
      "percent": true
    },
    "70": {
      "name": "破群",
      "percent": true
    },
    "71": {
      "name": "抗魏",
      "percent": true
    },
    "72": {
      "name": "抗蜀",
      "percent": true
    },
    "73": {
      "name": "抗吴",
      "percent": true
    },
    "74": {
      "name": "抗群",
      "percent": true
    },
    "75": {
      "name": "暴击倍数",
      "percent": true
    },
    "76": {
      "name": "抗暴",
      "percent": true
    },
    "77": {
      "name": "破挡",
      "percent": true
    },
    "78": {
      "name": "系统调整攻击倍率",
      "percent": true
    },
    "79": {
      "name": "系统调整防御倍率",
      "percent": true
    },
    "80": {
      "name": "物理穿透",
      "percent": false
    },
    "81": {
      "name": "法术穿透",
      "percent": false
    },
    "82": {
      "name": "物理抗性",
      "percent": false
    },
    "83": {
      "name": "法术抗性",
      "percent": false
    },
    "84": {
      "name": "治疗值",
      "percent": false
    },
    "85": {
      "name": "被治疗值",
      "percent": false
    },
    "86": {
      "name": "灼烧伤害",
      "percent": false
    },
    "87": {
      "name": "中毒伤害",
      "percent": false
    },
    "88": {
      "name": "灼烧免伤",
      "percent": false
    },
    "89": {
      "name": "中毒免伤",
      "percent": false
    },
    "90": {
      "name": "眩晕抗性",
      "percent": true
    },
    "91": {
      "name": "封技抗性",
      "percent": true
    },
    "92": {
      "name": "禁怒抗性",
      "percent": true
    },
    "93": {
      "name": "降怒抗性",
      "percent": true
    },
    "94": {
      "name": "麻痹抗性",
      "percent": true
    },
    "95": {
      "name": "封疗抗性",
      "percent": true
    },
    "96": {
      "name": "灼烧伤害",
      "percent": true
    },
    "97": {
      "name": "中毒伤害",
      "percent": true
    },
    "98": {
      "name": "灼烧免伤",
      "percent": true
    },
    "99": {
      "name": "中毒免伤",
      "percent": true
    },
    "100": {
      "name": "攻击",
      "percent": false
    },
    "101": {
      "name": "PvP增伤",
      "percent": true
    },
    "102": {
      "name": "PvP减伤",
      "percent": true
    },
    "103": {
      "name": "混乱抗性",
      "percent": true
    },
    "104": {
      "name": "魅惑抗性",
      "percent": true
    },
    "105": {
      "name": "石化抗性",
      "percent": true
    },
    "106": {
      "name": "冻结抗性",
      "percent": true
    },
    "107": {
      "name": "撕裂抗性",
      "percent": true
    },
    "108": {
      "name": "穿透",
      "percent": true
    },
    "109": {
      "name": "士气",
      "percent": false
    },
    "110": {
      "name": "恐惧抗性",
      "percent": true
    },
    "111": {
      "name": "挑衅抗性",
      "percent": true
    },
    "112": {
      "name": "忽视抗眩晕",
      "percent": true
    },
    "113": {
      "name": "忽视抗封技",
      "percent": true
    },
    "114": {
      "name": "忽视抗禁怒",
      "percent": true
    },
    "115": {
      "name": "忽视抗降怒",
      "percent": true
    },
    "116": {
      "name": "忽视抗麻痹",
      "percent": true
    },
    "117": {
      "name": "忽视抗封疗",
      "percent": true
    },
    "118": {
      "name": "忽视抗混乱",
      "percent": true
    },
    "119": {
      "name": "忽视抗魅惑",
      "percent": true
    },
    "120": {
      "name": "忽视抗石化",
      "percent": true
    },
    "121": {
      "name": "忽视抗冻结",
      "percent": true
    },
    "122": {
      "name": "忽视抗撕裂",
      "percent": true
    },
    "123": {
      "name": "忽视抗恐惧",
      "percent": true
    },
    "124": {
      "name": "忽视抗挑衅",
      "percent": true
    },
    "125": {
      "name": "强化眩晕概率",
      "percent": true
    },
    "126": {
      "name": "强化封技概率",
      "percent": true
    },
    "127": {
      "name": "强化禁怒概率",
      "percent": true
    },
    "128": {
      "name": "强化降怒概率",
      "percent": true
    },
    "129": {
      "name": "强化麻痹概率",
      "percent": true
    },
    "130": {
      "name": "强化封疗概率",
      "percent": true
    },
    "131": {
      "name": "强化混乱概率",
      "percent": true
    },
    "132": {
      "name": "强化魅惑概率",
      "percent": true
    },
    "133": {
      "name": "强化石化概率",
      "percent": true
    },
    "134": {
      "name": "强化冻结概率",
      "percent": true
    },
    "135": {
      "name": "强化撕裂概率",
      "percent": true
    },
    "136": {
      "name": "强化恐惧概率",
      "percent": true
    },
    "137": {
      "name": "强化挑衅概率",
      "percent": true
    },
    "138": {
      "name": "封魂抗性",
      "percent": true
    },
    "139": {
      "name": "业火抗性",
      "percent": true
    },
    "140": {
      "name": "封印抗性",
      "percent": true
    },
    "141": {
      "name": "仙毒抗性",
      "percent": true
    },
    "142": {
      "name": "诅咒抗性",
      "percent": true
    },
    "143": {
      "name": "压抑抗性",
      "percent": true
    },
    "144": {
      "name": "火遁抗性",
      "percent": true
    },
    "145": {
      "name": "解甲抗性",
      "percent": true
    },
    "146": {
      "name": "忽视抗封魂",
      "percent": true
    },
    "147": {
      "name": "忽视抗业火",
      "percent": true
    },
    "148": {
      "name": "忽视抗封印",
      "percent": true
    },
    "149": {
      "name": "忽视抗仙毒",
      "percent": true
    },
    "150": {
      "name": "忽视抗诅咒",
      "percent": true
    },
    "151": {
      "name": "忽视抗压抑",
      "percent": true
    },
    "152": {
      "name": "忽视抗火遁",
      "percent": true
    },
    "153": {
      "name": "忽视抗解甲",
      "percent": true
    },
    "154": {
      "name": "强化封魂概率",
      "percent": true
    },
    "155": {
      "name": "强化业火概率",
      "percent": true
    },
    "156": {
      "name": "强化封印概率",
      "percent": true
    },
    "157": {
      "name": "强化仙毒概率",
      "percent": true
    },
    "158": {
      "name": "强化诅咒概率",
      "percent": true
    },
    "159": {
      "name": "强化压抑概率",
      "percent": true
    },
    "160": {
      "name": "强化火遁概率",
      "percent": true
    },
    "161": {
      "name": "强化解甲概率",
      "percent": true
    },
    "162": {
      "name": "残废抗性",
      "percent": true
    },
    "163": {
      "name": "忽视抗残废",
      "percent": true
    },
    "164": {
      "name": "强化残废概率",
      "percent": true
    },
    "165": {
      "name": "沮丧抗性",
      "percent": true
    },
    "166": {
      "name": "忽视抗沮丧",
      "percent": true
    },
    "167": {
      "name": "强化沮丧概率",
      "percent": true
    },
    "168": {
      "name": "神器增伤",
      "percent": true
    },
    "169": {
      "name": "神器减伤",
      "percent": true
    },
    "170": {
      "name": "威慑抗性",
      "percent": true
    },
    "171": {
      "name": "忽视抗威慑",
      "percent": true
    },
    "172": {
      "name": "强化威慑概率",
      "percent": true
    },
    "173": {
      "name": "神迷抗性",
      "percent": true
    },
    "174": {
      "name": "忽视抗神迷",
      "percent": true
    },
    "175": {
      "name": "强化神迷概率",
      "percent": true
    },
    "176": {
      "name": "崩溃抗性",
      "percent": true
    },
    "177": {
      "name": "忽视抗崩溃",
      "percent": true
    },
    "178": {
      "name": "强化崩溃概率",
      "percent": true
    },
    "179": {
      "name": "竞技增伤",
      "percent": true
    },
    "180": {
      "name": "竞技减伤",
      "percent": true
    },
    "181": {
      "name": "战意增伤",
      "percent": true
    },
    "182": {
      "name": "战意减伤",
      "percent": true
    },
    "183": {
      "name": "惊魂抗性",
      "percent": true
    },
    "184": {
      "name": "忽视抗惊魂",
      "percent": true
    },
    "185": {
      "name": "强化惊魂概率",
      "percent": true
    },
    "186": {
      "name": "破胆抗性",
      "percent": true
    },
    "187": {
      "name": "忽视抗破胆",
      "percent": true
    },
    "188": {
      "name": "强化破胆概率",
      "percent": true
    },
    "189": {
      "name": "惊惧抗性",
      "percent": true
    },
    "190": {
      "name": "忽视抗惊惧",
      "percent": true
    },
    "191": {
      "name": "强化惊惧概率",
      "percent": true
    },
    "192": {
      "name": "品质加伤",
      "percent": true
    },
    "193": {
      "name": "品质减伤",
      "percent": true
    },
    "194": {
      "name": "魅力增伤",
      "percent": true
    },
    "195": {
      "name": "魅力减伤",
      "percent": true
    },
    "196": {
      "name": "破武",
      "percent": true
    },
    "197": {
      "name": "抗武",
      "percent": true
    },
    "198": {
      "name": "战力增伤",
      "percent": true
    },
    "199": {
      "name": "战力减伤",
      "percent": true
    },
    "200": {
      "name": "品质怒气加伤",
      "percent": true
    },
    "201": {
      "name": "品质怒气减伤",
      "percent": true
    },
    "202": {
      "name": "破主",
      "percent": true
    },
    "203": {
      "name": "抗主",
      "percent": true
    },
    "204": {
      "name": "破水",
      "percent": true
    },
    "205": {
      "name": "破火",
      "percent": true
    },
    "206": {
      "name": "破木",
      "percent": true
    },
    "207": {
      "name": "抗水",
      "percent": true
    },
    "208": {
      "name": "抗火",
      "percent": true
    },
    "209": {
      "name": "抗木",
      "percent": true
    },
    "210": {
      "name": "流放抗性",
      "percent": true
    },
    "211": {
      "name": "忽视抗流放",
      "percent": true
    },
    "212": {
      "name": "强化流放概率",
      "percent": true
    },
    "213": {
      "name": "军师增伤",
      "percent": true
    },
    "214": {
      "name": "军师减伤",
      "percent": true
    },
    "215": {
      "name": "暗伤抗性",
      "percent": true
    },
    "216": {
      "name": "忽视抗暗伤",
      "percent": true
    },
    "217": {
      "name": "强化暗伤概率",
      "percent": true
    },
    "218": {
      "name": "倒戈抗性",
      "percent": true
    },
    "219": {
      "name": "忽视抗倒戈",
      "percent": true
    },
    "220": {
      "name": "强化倒戈概率",
      "percent": true
    },
    "221": {
      "name": "致盲抗性",
      "percent": true
    },
    "222": {
      "name": "忽视抗致盲",
      "percent": true
    },
    "223": {
      "name": "强化致盲概率",
      "percent": true
    },
    "224": {
      "name": "冰封抗性",
      "percent": true
    },
    "225": {
      "name": "忽视抗冰封",
      "percent": true
    },
    "226": {
      "name": "强化冰封概率",
      "percent": true
    },
    "227": {
      "name": "禁足抗性",
      "percent": true
    },
    "228": {
      "name": "忽视抗禁足",
      "percent": true
    },
    "229": {
      "name": "强化禁足概率",
      "percent": true
    },
    "230": {
      "name": "赤焰抗性",
      "percent": true
    },
    "231": {
      "name": "忽视抗赤焰",
      "percent": true
    },
    "232": {
      "name": "强化赤焰概率",
      "percent": true
    },
    "233": {
      "name": "追击增伤",
      "percent": true
    },
    "234": {
      "name": "追击减伤",
      "percent": true
    },
    "235": {
      "name": "宠物增伤",
      "percent": true
    },
    "236": {
      "name": "宠物减伤",
      "percent": true
    },
    "237": {
      "name": "抵御穿透",
      "percent": true
    },
    "238": {
      "name": "血咒抗性",
      "percent": true
    },
    "239": {
      "name": "忽视抗血咒",
      "percent": true
    },
    "240": {
      "name": "强化血咒概率",
      "percent": true
    },
    "241": {
      "name": "缠绕抗性",
      "percent": true
    },
    "242": {
      "name": "忽视抗缠绕",
      "percent": true
    },
    "243": {
      "name": "强化缠绕概率",
      "percent": true
    },
    "244": {
      "name": "抵御免疫眩晕",
      "percent": true
    },
    "245": {
      "name": "抵御免疫封技",
      "percent": true
    },
    "246": {
      "name": "抵御免疫禁怒",
      "percent": true
    },
    "247": {
      "name": "抵御免疫降怒",
      "percent": true
    },
    "248": {
      "name": "抵御免疫麻痹",
      "percent": true
    },
    "249": {
      "name": "抵御免疫封疗",
      "percent": true
    },
    "250": {
      "name": "抵御免疫致盲",
      "percent": true
    },
    "251": {
      "name": "抵御免疫沮丧",
      "percent": true
    },
    "252": {
      "name": "抵御免疫冻结",
      "percent": true
    },
    "253": {
      "name": "抵御免疫石化",
      "percent": true
    },
    "254": {
      "name": "抵御免疫混乱",
      "percent": true
    },
    "255": {
      "name": "抵御免疫残废",
      "percent": true
    },
    "256": {
      "name": "抵御免疫撕裂",
      "percent": true
    },
    "257": {
      "name": "抵御免疫挑衅",
      "percent": true
    },
    "258": {
      "name": "抵御免疫魅惑",
      "percent": true
    },
    "259": {
      "name": "抵御免疫恐惧",
      "percent": true
    },
    "260": {
      "name": "抵御免疫压抑",
      "percent": true
    },
    "261": {
      "name": "抵御免疫诅咒",
      "percent": true
    },
    "262": {
      "name": "抵御免疫解甲",
      "percent": true
    },
    "263": {
      "name": "抵御免疫封魂",
      "percent": true
    },
    "264": {
      "name": "抵御免疫封印",
      "percent": true
    },
    "265": {
      "name": "抵御免疫业火",
      "percent": true
    },
    "266": {
      "name": "抵御免疫仙毒",
      "percent": true
    },
    "267": {
      "name": "抵御免疫神迷",
      "percent": true
    },
    "268": {
      "name": "抵御免疫惊魂",
      "percent": true
    },
    "269": {
      "name": "抵御免疫威慑",
      "percent": true
    },
    "270": {
      "name": "抵御免疫崩溃",
      "percent": true
    },
    "271": {
      "name": "抵御免疫破胆",
      "percent": true
    },
    "272": {
      "name": "抵御免疫冰封",
      "percent": true
    },
    "273": {
      "name": "抵御免疫禁足",
      "percent": true
    },
    "274": {
      "name": "抵御免疫惊惧",
      "percent": true
    },
    "275": {
      "name": "抵御免疫流放",
      "percent": true
    },
    "276": {
      "name": "抵御免疫暗伤",
      "percent": true
    },
    "277": {
      "name": "抵御免疫倒戈",
      "percent": true
    },
    "278": {
      "name": "抵御免疫赤焰",
      "percent": true
    },
    "279": {
      "name": "抵御免疫血咒",
      "percent": true
    },
    "280": {
      "name": "抵御免疫缠绕",
      "percent": true
    },
    "281": {
      "name": "破雷",
      "percent": true
    },
    "282": {
      "name": "抗雷",
      "percent": true
    },
    "283": {
      "name": "破金",
      "percent": true
    },
    "284": {
      "name": "抗金",
      "percent": true
    },
    "285": {
      "name": "破土",
      "percent": true
    },
    "286": {
      "name": "抗土",
      "percent": true
    }
  },
  "materials": {
    "0": {
      "name": "银币",
      "icon": "assets/lingdi-items/yinbi.png"
    },
    "60085": {
      "name": "秘宝强化石",
      "icon": "assets/lingdi-items/mbqianghuashi.png"
    },
    "60086": {
      "name": "秘宝进阶石",
      "icon": "assets/lingdi-items/mbjinjieshi.png"
    },
    "60087": {
      "name": "秘宝升星石",
      "icon": "assets/lingdi-items/mbshengxing.png"
    },
    "940001": {
      "name": "幽狼佩玉碎片",
      "icon": "assets/mibao-items/940001.png"
    },
    "940002": {
      "name": "七星灯碎片",
      "icon": "assets/mibao-items/940002.png"
    },
    "940003": {
      "name": "霸王冠碎片",
      "icon": "assets/mibao-items/940003.png"
    },
    "940004": {
      "name": "酆都符碎片",
      "icon": "assets/mibao-items/940004.png"
    },
    "940005": {
      "name": "夔牛臂环碎片",
      "icon": "assets/mibao-items/940005.png"
    },
    "940006": {
      "name": "天青玉龙印碎片",
      "icon": "assets/mibao-items/940006.png"
    },
    "940007": {
      "name": "祸海珠碎片",
      "icon": "assets/mibao-items/940007.png"
    },
    "940008": {
      "name": "金缕叶碎片",
      "icon": "assets/mibao-items/940008.png"
    },
    "940009": {
      "name": "玉凤佩碎片",
      "icon": "assets/mibao-items/940009.png"
    },
    "940010": {
      "name": "麒麟臂碎片",
      "icon": "assets/mibao-items/940010.png"
    },
    "940011": {
      "name": "螭龙护臂碎片",
      "icon": "assets/mibao-items/940011.png"
    },
    "940012": {
      "name": "凤灵冠碎片",
      "icon": "assets/mibao-items/940012.png"
    },
    "940013": {
      "name": "无双宝玉碎片",
      "icon": "assets/mibao-items/940013.png"
    },
    "940014": {
      "name": "邪王瞳碎片",
      "icon": "assets/mibao-items/940014.png"
    },
    "940015": {
      "name": "龙胆护腕碎片",
      "icon": "assets/mibao-items/940015.png"
    },
    "940016": {
      "name": "天火琴碎片",
      "icon": "assets/mibao-items/940016.png"
    },
    "940017": {
      "name": "蚩尤珠碎片",
      "icon": "assets/mibao-items/940017.png"
    },
    "940018": {
      "name": "新月冕碎片",
      "icon": "assets/mibao-items/940018.png"
    },
    "940019": {
      "name": "狮王酒坛碎片",
      "icon": "assets/mibao-items/940019.png"
    },
    "940020": {
      "name": "新月铃铛碎片",
      "icon": "assets/mibao-items/940020.png"
    },
    "940021": {
      "name": "万蛊瓶碎片",
      "icon": "assets/mibao-items/940021.png"
    },
    "940022": {
      "name": "鬼面令碎片",
      "icon": "assets/mibao-items/940022.png"
    },
    "940023": {
      "name": "梵天锁碎片",
      "icon": "assets/mibao-items/940023.png"
    },
    "940024": {
      "name": "樱火凤羽碎片",
      "icon": "assets/mibao-items/940024.png"
    },
    "940025": {
      "name": "仙灵葫芦碎片",
      "icon": "assets/mibao-items/940025.png"
    },
    "940026": {
      "name": "鹏王羽翎碎片",
      "icon": "assets/mibao-items/940026.png"
    },
    "940027": {
      "name": "穿云箭袋碎片",
      "icon": "assets/mibao-items/940027.png"
    },
    "940028": {
      "name": "灵剑玉佩碎片",
      "icon": "assets/mibao-items/940028.png"
    },
    "940029": {
      "name": "黄天角碎片",
      "icon": "assets/mibao-items/940029.png"
    },
    "940030": {
      "name": "魔天铜雀台碎片",
      "icon": "assets/mibao-items/940030.png"
    },
    "940031": {
      "name": "天地英雄令碎片",
      "icon": "assets/mibao-items/940031.png"
    },
    "940032": {
      "name": "命运骰碎片",
      "icon": "assets/mibao-items/940032.png"
    },
    "940033": {
      "name": "酒池肉林杯碎片",
      "icon": "assets/mibao-items/940033.png"
    },
    "940034": {
      "name": "深宫琴谱碎片",
      "icon": "assets/mibao-items/940034.png"
    },
    "940035": {
      "name": "金翅蝶碎片",
      "icon": "assets/mibao-items/940035.png"
    },
    "940036": {
      "name": "青狐妖尾碎片",
      "icon": "assets/mibao-items/940036.png"
    },
    "940037": {
      "name": "百草药篓碎片",
      "icon": "assets/mibao-items/940037.png"
    },
    "940038": {
      "name": "无字天书碎片",
      "icon": "assets/mibao-items/940038.png"
    },
    "940039": {
      "name": "水月笛碎片",
      "icon": "assets/mibao-items/940039.png"
    },
    "940040": {
      "name": "犀角护臂碎片",
      "icon": "assets/mibao-items/940040.png"
    },
    "940041": {
      "name": "深渊娃娃碎片",
      "icon": "assets/mibao-items/940041.png"
    }
  },
  "items": [
    {
      "id": 940001,
      "name": "幽狼佩玉",
      "hero": "张辽",
      "icon": "assets/mibao-items/940001.png",
      "maxLevel": 500,
      "baseAttributes": [
        {
          "id": 100,
          "amount": 500
        },
        {
          "id": 54,
          "amount": 500
        },
        {
          "id": 55,
          "amount": 500
        },
        {
          "id": 51,
          "amount": 2500
        }
      ],
      "growthAttributes": [
        {
          "id": 100,
          "amount": 250
        },
        {
          "id": 54,
          "amount": 250
        },
        {
          "id": 55,
          "amount": 250
        },
        {
          "id": 51,
          "amount": 1250
        }
      ],
      "strengthen": {
        "fromLevel": 1,
        "toLevel": 500,
        "costRule": {
          "silverPerLevel": 50000,
          "stoneStart": 10,
          "stoneStep": 5,
          "costItemId": 60085
        },
        "levelsConfigured": 998,
        "upgradeAttributes": [
          {
            "id": 100,
            "amount": 2500
          },
          {
            "id": 54,
            "amount": 2500
          },
          {
            "id": 55,
            "amount": 2500
          },
          {
            "id": 51,
            "amount": 12500
          }
        ],
        "thresholds": [
          {
            "level": 20,
            "costs": [
              {
                "itemId": 60087,
                "amount": 50
              },
              {
                "itemId": 940001,
                "amount": 2
              }
            ]
          },
          {
            "level": 40,
            "costs": [
              {
                "itemId": 60087,
                "amount": 100
              },
              {
                "itemId": 940001,
                "amount": 4
              }
            ]
          },
          {
            "level": 60,
            "costs": [
              {
                "itemId": 60087,
                "amount": 150
              },
              {
                "itemId": 940001,
                "amount": 6
              }
            ]
          },
          {
            "level": 80,
            "costs": [
              {
                "itemId": 60087,
                "amount": 200
              },
              {
                "itemId": 940001,
                "amount": 8
              }
            ]
          },
          {
            "level": 100,
            "costs": [
              {
                "itemId": 60087,
                "amount": 250
              },
              {
                "itemId": 940001,
                "amount": 10
              }
            ]
          },
          {
            "level": 120,
            "costs": [
              {
                "itemId": 60087,
                "amount": 300
              },
              {
                "itemId": 940001,
                "amount": 12
              }
            ]
          },
          {
            "level": 140,
            "costs": [
              {
                "itemId": 60087,
                "amount": 350
              },
              {
                "itemId": 940001,
                "amount": 16
              }
            ]
          },
          {
            "level": 160,
            "costs": [
              {
                "itemId": 60087,
                "amount": 400
              },
              {
                "itemId": 940001,
                "amount": 20
              }
            ]
          },
          {
            "level": 180,
            "costs": [
              {
                "itemId": 60087,
                "amount": 450
              },
              {
                "itemId": 940001,
                "amount": 25
              }
            ]
          },
          {
            "level": 200,
            "costs": [
              {
                "itemId": 60087,
                "amount": 500
              },
              {
                "itemId": 940001,
                "amount": 30
              }
            ]
          },
          {
            "level": 220,
            "costs": [
              {
                "itemId": 60087,
                "amount": 550
              },
              {
                "itemId": 940001,
                "amount": 35
              }
            ]
          },
          {
            "level": 240,
            "costs": [
              {
                "itemId": 60087,
                "amount": 600
              },
              {
                "itemId": 940001,
                "amount": 40
              }
            ]
          },
          {
            "level": 260,
            "costs": [
              {
                "itemId": 60087,
                "amount": 650
              },
              {
                "itemId": 940001,
                "amount": 45
              }
            ]
          },
          {
            "level": 280,
            "costs": [
              {
                "itemId": 60087,
                "amount": 700
              },
              {
                "itemId": 940001,
                "amount": 50
              }
            ]
          },
          {
            "level": 300,
            "costs": [
              {
                "itemId": 60087,
                "amount": 750
              },
              {
                "itemId": 940001,
                "amount": 50
              }
            ]
          },
          {
            "level": 320,
            "costs": [
              {
                "itemId": 60087,
                "amount": 800
              },
              {
                "itemId": 940001,
                "amount": 50
              }
            ]
          },
          {
            "level": 340,
            "costs": [
              {
                "itemId": 60087,
                "amount": 850
              },
              {
                "itemId": 940001,
                "amount": 50
              }
            ]
          },
          {
            "level": 360,
            "costs": [
              {
                "itemId": 60087,
                "amount": 900
              },
              {
                "itemId": 940001,
                "amount": 50
              }
            ]
          },
          {
            "level": 380,
            "costs": [
              {
                "itemId": 60087,
                "amount": 950
              },
              {
                "itemId": 940001,
                "amount": 50
              }
            ]
          },
          {
            "level": 400,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1000
              },
              {
                "itemId": 940001,
                "amount": 50
              }
            ]
          },
          {
            "level": 420,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1050
              },
              {
                "itemId": 940001,
                "amount": 50
              }
            ]
          },
          {
            "level": 440,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1100
              },
              {
                "itemId": 940001,
                "amount": 50
              }
            ]
          },
          {
            "level": 460,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1150
              },
              {
                "itemId": 940001,
                "amount": 50
              }
            ]
          },
          {
            "level": 480,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1200
              },
              {
                "itemId": 940001,
                "amount": 50
              }
            ]
          },
          {
            "level": 500,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1250
              },
              {
                "itemId": 940001,
                "amount": 50
              }
            ]
          }
        ]
      },
      "advance": {
        "thresholds": [
          {
            "level": 10,
            "costs": [
              {
                "itemId": 60086,
                "amount": 150
              },
              {
                "itemId": 940001,
                "amount": 2
              }
            ]
          },
          {
            "level": 30,
            "costs": [
              {
                "itemId": 60086,
                "amount": 300
              },
              {
                "itemId": 940001,
                "amount": 4
              }
            ]
          },
          {
            "level": 50,
            "costs": [
              {
                "itemId": 60086,
                "amount": 450
              },
              {
                "itemId": 940001,
                "amount": 6
              }
            ]
          },
          {
            "level": 70,
            "costs": [
              {
                "itemId": 60086,
                "amount": 600
              },
              {
                "itemId": 940001,
                "amount": 8
              }
            ]
          },
          {
            "level": 90,
            "costs": [
              {
                "itemId": 60086,
                "amount": 750
              },
              {
                "itemId": 940001,
                "amount": 10
              }
            ]
          },
          {
            "level": 110,
            "costs": [
              {
                "itemId": 60086,
                "amount": 900
              },
              {
                "itemId": 940001,
                "amount": 12
              }
            ]
          },
          {
            "level": 130,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1050
              },
              {
                "itemId": 940001,
                "amount": 16
              }
            ]
          },
          {
            "level": 150,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1200
              },
              {
                "itemId": 940001,
                "amount": 20
              }
            ]
          },
          {
            "level": 170,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1350
              },
              {
                "itemId": 940001,
                "amount": 25
              }
            ]
          },
          {
            "level": 190,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1500
              },
              {
                "itemId": 940001,
                "amount": 30
              }
            ]
          },
          {
            "level": 210,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1650
              },
              {
                "itemId": 940001,
                "amount": 35
              }
            ]
          },
          {
            "level": 230,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1800
              },
              {
                "itemId": 940001,
                "amount": 40
              }
            ]
          },
          {
            "level": 250,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1950
              },
              {
                "itemId": 940001,
                "amount": 45
              }
            ]
          },
          {
            "level": 270,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2100
              },
              {
                "itemId": 940001,
                "amount": 50
              }
            ]
          },
          {
            "level": 290,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2250
              },
              {
                "itemId": 940001,
                "amount": 50
              }
            ]
          },
          {
            "level": 310,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2400
              },
              {
                "itemId": 940001,
                "amount": 50
              }
            ]
          },
          {
            "level": 330,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2550
              },
              {
                "itemId": 940001,
                "amount": 50
              }
            ]
          },
          {
            "level": 350,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2700
              },
              {
                "itemId": 940001,
                "amount": 50
              }
            ]
          },
          {
            "level": 370,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2850
              },
              {
                "itemId": 940001,
                "amount": 50
              }
            ]
          },
          {
            "level": 390,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3000
              },
              {
                "itemId": 940001,
                "amount": 50
              }
            ]
          },
          {
            "level": 410,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3150
              },
              {
                "itemId": 940001,
                "amount": 50
              }
            ]
          },
          {
            "level": 430,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3300
              },
              {
                "itemId": 940001,
                "amount": 50
              }
            ]
          },
          {
            "level": 450,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3450
              },
              {
                "itemId": 940001,
                "amount": 50
              }
            ]
          },
          {
            "level": 470,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3600
              },
              {
                "itemId": 940001,
                "amount": 50
              }
            ]
          },
          {
            "level": 490,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3750
              },
              {
                "itemId": 940001,
                "amount": 50
              }
            ]
          }
        ],
        "attributes": {
          "1": [
            {
              "id": 54,
              "amount": 5000
            }
          ],
          "2": [
            {
              "id": 56,
              "amount": 200
            }
          ],
          "3": [
            {
              "id": 55,
              "amount": 10000
            }
          ],
          "4": [
            {
              "id": 57,
              "amount": 300
            }
          ],
          "5": [
            {
              "id": 51,
              "amount": 100000
            }
          ],
          "6": [
            {
              "id": 60,
              "amount": 400
            }
          ],
          "7": [
            {
              "id": 100,
              "amount": 30000
            }
          ],
          "8": [
            {
              "id": 61,
              "amount": 500
            }
          ],
          "9": [
            {
              "id": 25,
              "amount": 600
            }
          ],
          "10": [
            {
              "id": 24,
              "amount": 700
            }
          ],
          "11": [
            {
              "id": 54,
              "amount": 40000
            }
          ],
          "12": [
            {
              "id": 22,
              "amount": 600
            }
          ],
          "13": [
            {
              "id": 55,
              "amount": 50000
            }
          ],
          "14": [
            {
              "id": 23,
              "amount": 700
            }
          ],
          "15": [
            {
              "id": 51,
              "amount": 300000
            }
          ],
          "16": [
            {
              "id": 100,
              "amount": 70000
            }
          ],
          "17": [
            {
              "id": 23,
              "amount": 600
            }
          ],
          "18": [
            {
              "id": 22,
              "amount": 700
            }
          ],
          "19": [
            {
              "id": 102,
              "amount": 600
            }
          ],
          "20": [
            {
              "id": 101,
              "amount": 700
            }
          ],
          "21": [
            {
              "id": 54,
              "amount": 80000
            }
          ],
          "22": [
            {
              "id": 101,
              "amount": 700
            }
          ],
          "23": [
            {
              "id": 102,
              "amount": 800
            }
          ],
          "24": [
            {
              "id": 180,
              "amount": 700
            }
          ],
          "25": [
            {
              "id": 179,
              "amount": 800
            }
          ]
        },
        "requirements": [
          {
            "advance": 1,
            "requirement": 1
          },
          {
            "advance": 3,
            "requirement": 2
          },
          {
            "advance": 6,
            "requirement": 3
          },
          {
            "advance": 10,
            "requirement": 4
          },
          {
            "advance": 15,
            "requirement": 5
          },
          {
            "advance": 20,
            "requirement": 6
          },
          {
            "advance": 25,
            "requirement": 7
          }
        ]
      }
    },
    {
      "id": 940002,
      "name": "七星灯",
      "hero": "诸葛亮",
      "icon": "assets/mibao-items/940002.png",
      "maxLevel": 500,
      "baseAttributes": [
        {
          "id": 100,
          "amount": 500
        },
        {
          "id": 54,
          "amount": 500
        },
        {
          "id": 55,
          "amount": 500
        },
        {
          "id": 51,
          "amount": 2500
        }
      ],
      "growthAttributes": [
        {
          "id": 100,
          "amount": 250
        },
        {
          "id": 54,
          "amount": 250
        },
        {
          "id": 55,
          "amount": 250
        },
        {
          "id": 51,
          "amount": 1250
        }
      ],
      "strengthen": {
        "fromLevel": 1,
        "toLevel": 500,
        "costRule": {
          "silverPerLevel": 50000,
          "stoneStart": 10,
          "stoneStep": 5,
          "costItemId": 60085
        },
        "levelsConfigured": 998,
        "upgradeAttributes": [
          {
            "id": 100,
            "amount": 2500
          },
          {
            "id": 54,
            "amount": 2500
          },
          {
            "id": 55,
            "amount": 2500
          },
          {
            "id": 51,
            "amount": 12500
          }
        ],
        "thresholds": [
          {
            "level": 20,
            "costs": [
              {
                "itemId": 60087,
                "amount": 50
              },
              {
                "itemId": 940002,
                "amount": 2
              }
            ]
          },
          {
            "level": 40,
            "costs": [
              {
                "itemId": 60087,
                "amount": 100
              },
              {
                "itemId": 940002,
                "amount": 4
              }
            ]
          },
          {
            "level": 60,
            "costs": [
              {
                "itemId": 60087,
                "amount": 150
              },
              {
                "itemId": 940002,
                "amount": 6
              }
            ]
          },
          {
            "level": 80,
            "costs": [
              {
                "itemId": 60087,
                "amount": 200
              },
              {
                "itemId": 940002,
                "amount": 8
              }
            ]
          },
          {
            "level": 100,
            "costs": [
              {
                "itemId": 60087,
                "amount": 250
              },
              {
                "itemId": 940002,
                "amount": 10
              }
            ]
          },
          {
            "level": 120,
            "costs": [
              {
                "itemId": 60087,
                "amount": 300
              },
              {
                "itemId": 940002,
                "amount": 12
              }
            ]
          },
          {
            "level": 140,
            "costs": [
              {
                "itemId": 60087,
                "amount": 350
              },
              {
                "itemId": 940002,
                "amount": 16
              }
            ]
          },
          {
            "level": 160,
            "costs": [
              {
                "itemId": 60087,
                "amount": 400
              },
              {
                "itemId": 940002,
                "amount": 20
              }
            ]
          },
          {
            "level": 180,
            "costs": [
              {
                "itemId": 60087,
                "amount": 450
              },
              {
                "itemId": 940002,
                "amount": 25
              }
            ]
          },
          {
            "level": 200,
            "costs": [
              {
                "itemId": 60087,
                "amount": 500
              },
              {
                "itemId": 940002,
                "amount": 30
              }
            ]
          },
          {
            "level": 220,
            "costs": [
              {
                "itemId": 60087,
                "amount": 550
              },
              {
                "itemId": 940002,
                "amount": 35
              }
            ]
          },
          {
            "level": 240,
            "costs": [
              {
                "itemId": 60087,
                "amount": 600
              },
              {
                "itemId": 940002,
                "amount": 40
              }
            ]
          },
          {
            "level": 260,
            "costs": [
              {
                "itemId": 60087,
                "amount": 650
              },
              {
                "itemId": 940002,
                "amount": 45
              }
            ]
          },
          {
            "level": 280,
            "costs": [
              {
                "itemId": 60087,
                "amount": 700
              },
              {
                "itemId": 940002,
                "amount": 50
              }
            ]
          },
          {
            "level": 300,
            "costs": [
              {
                "itemId": 60087,
                "amount": 750
              },
              {
                "itemId": 940002,
                "amount": 50
              }
            ]
          },
          {
            "level": 320,
            "costs": [
              {
                "itemId": 60087,
                "amount": 800
              },
              {
                "itemId": 940002,
                "amount": 50
              }
            ]
          },
          {
            "level": 340,
            "costs": [
              {
                "itemId": 60087,
                "amount": 850
              },
              {
                "itemId": 940002,
                "amount": 50
              }
            ]
          },
          {
            "level": 360,
            "costs": [
              {
                "itemId": 60087,
                "amount": 900
              },
              {
                "itemId": 940002,
                "amount": 50
              }
            ]
          },
          {
            "level": 380,
            "costs": [
              {
                "itemId": 60087,
                "amount": 950
              },
              {
                "itemId": 940002,
                "amount": 50
              }
            ]
          },
          {
            "level": 400,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1000
              },
              {
                "itemId": 940002,
                "amount": 50
              }
            ]
          },
          {
            "level": 420,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1050
              },
              {
                "itemId": 940002,
                "amount": 50
              }
            ]
          },
          {
            "level": 440,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1100
              },
              {
                "itemId": 940002,
                "amount": 50
              }
            ]
          },
          {
            "level": 460,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1150
              },
              {
                "itemId": 940002,
                "amount": 50
              }
            ]
          },
          {
            "level": 480,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1200
              },
              {
                "itemId": 940002,
                "amount": 50
              }
            ]
          },
          {
            "level": 500,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1250
              },
              {
                "itemId": 940002,
                "amount": 50
              }
            ]
          }
        ]
      },
      "advance": {
        "thresholds": [
          {
            "level": 10,
            "costs": [
              {
                "itemId": 60086,
                "amount": 150
              },
              {
                "itemId": 940002,
                "amount": 2
              }
            ]
          },
          {
            "level": 30,
            "costs": [
              {
                "itemId": 60086,
                "amount": 300
              },
              {
                "itemId": 940002,
                "amount": 4
              }
            ]
          },
          {
            "level": 50,
            "costs": [
              {
                "itemId": 60086,
                "amount": 450
              },
              {
                "itemId": 940002,
                "amount": 6
              }
            ]
          },
          {
            "level": 70,
            "costs": [
              {
                "itemId": 60086,
                "amount": 600
              },
              {
                "itemId": 940002,
                "amount": 8
              }
            ]
          },
          {
            "level": 90,
            "costs": [
              {
                "itemId": 60086,
                "amount": 750
              },
              {
                "itemId": 940002,
                "amount": 10
              }
            ]
          },
          {
            "level": 110,
            "costs": [
              {
                "itemId": 60086,
                "amount": 900
              },
              {
                "itemId": 940002,
                "amount": 12
              }
            ]
          },
          {
            "level": 130,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1050
              },
              {
                "itemId": 940002,
                "amount": 16
              }
            ]
          },
          {
            "level": 150,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1200
              },
              {
                "itemId": 940002,
                "amount": 20
              }
            ]
          },
          {
            "level": 170,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1350
              },
              {
                "itemId": 940002,
                "amount": 25
              }
            ]
          },
          {
            "level": 190,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1500
              },
              {
                "itemId": 940002,
                "amount": 30
              }
            ]
          },
          {
            "level": 210,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1650
              },
              {
                "itemId": 940002,
                "amount": 35
              }
            ]
          },
          {
            "level": 230,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1800
              },
              {
                "itemId": 940002,
                "amount": 40
              }
            ]
          },
          {
            "level": 250,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1950
              },
              {
                "itemId": 940002,
                "amount": 45
              }
            ]
          },
          {
            "level": 270,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2100
              },
              {
                "itemId": 940002,
                "amount": 50
              }
            ]
          },
          {
            "level": 290,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2250
              },
              {
                "itemId": 940002,
                "amount": 50
              }
            ]
          },
          {
            "level": 310,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2400
              },
              {
                "itemId": 940002,
                "amount": 50
              }
            ]
          },
          {
            "level": 330,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2550
              },
              {
                "itemId": 940002,
                "amount": 50
              }
            ]
          },
          {
            "level": 350,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2700
              },
              {
                "itemId": 940002,
                "amount": 50
              }
            ]
          },
          {
            "level": 370,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2850
              },
              {
                "itemId": 940002,
                "amount": 50
              }
            ]
          },
          {
            "level": 390,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3000
              },
              {
                "itemId": 940002,
                "amount": 50
              }
            ]
          },
          {
            "level": 410,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3150
              },
              {
                "itemId": 940002,
                "amount": 50
              }
            ]
          },
          {
            "level": 430,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3300
              },
              {
                "itemId": 940002,
                "amount": 50
              }
            ]
          },
          {
            "level": 450,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3450
              },
              {
                "itemId": 940002,
                "amount": 50
              }
            ]
          },
          {
            "level": 470,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3600
              },
              {
                "itemId": 940002,
                "amount": 50
              }
            ]
          },
          {
            "level": 490,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3750
              },
              {
                "itemId": 940002,
                "amount": 50
              }
            ]
          }
        ],
        "attributes": {
          "1": [
            {
              "id": 54,
              "amount": 5000
            }
          ],
          "2": [
            {
              "id": 56,
              "amount": 200
            }
          ],
          "3": [
            {
              "id": 55,
              "amount": 10000
            }
          ],
          "4": [
            {
              "id": 57,
              "amount": 300
            }
          ],
          "5": [
            {
              "id": 51,
              "amount": 100000
            }
          ],
          "6": [
            {
              "id": 60,
              "amount": 400
            }
          ],
          "7": [
            {
              "id": 100,
              "amount": 30000
            }
          ],
          "8": [
            {
              "id": 61,
              "amount": 500
            }
          ],
          "9": [
            {
              "id": 25,
              "amount": 600
            }
          ],
          "10": [
            {
              "id": 24,
              "amount": 700
            }
          ],
          "11": [
            {
              "id": 54,
              "amount": 40000
            }
          ],
          "12": [
            {
              "id": 22,
              "amount": 600
            }
          ],
          "13": [
            {
              "id": 55,
              "amount": 50000
            }
          ],
          "14": [
            {
              "id": 23,
              "amount": 700
            }
          ],
          "15": [
            {
              "id": 51,
              "amount": 300000
            }
          ],
          "16": [
            {
              "id": 100,
              "amount": 70000
            }
          ],
          "17": [
            {
              "id": 23,
              "amount": 600
            }
          ],
          "18": [
            {
              "id": 22,
              "amount": 700
            }
          ],
          "19": [
            {
              "id": 102,
              "amount": 600
            }
          ],
          "20": [
            {
              "id": 101,
              "amount": 700
            }
          ],
          "21": [
            {
              "id": 54,
              "amount": 80000
            }
          ],
          "22": [
            {
              "id": 101,
              "amount": 700
            }
          ],
          "23": [
            {
              "id": 102,
              "amount": 800
            }
          ],
          "24": [
            {
              "id": 180,
              "amount": 700
            }
          ],
          "25": [
            {
              "id": 179,
              "amount": 800
            }
          ]
        },
        "requirements": [
          {
            "advance": 1,
            "requirement": 1
          },
          {
            "advance": 3,
            "requirement": 2
          },
          {
            "advance": 6,
            "requirement": 3
          },
          {
            "advance": 10,
            "requirement": 4
          },
          {
            "advance": 15,
            "requirement": 5
          },
          {
            "advance": 20,
            "requirement": 6
          },
          {
            "advance": 25,
            "requirement": 7
          }
        ]
      }
    },
    {
      "id": 940003,
      "name": "霸王冠",
      "hero": "孙策",
      "icon": "assets/mibao-items/940003.png",
      "maxLevel": 500,
      "baseAttributes": [
        {
          "id": 100,
          "amount": 500
        },
        {
          "id": 54,
          "amount": 500
        },
        {
          "id": 55,
          "amount": 500
        },
        {
          "id": 51,
          "amount": 2500
        }
      ],
      "growthAttributes": [
        {
          "id": 100,
          "amount": 250
        },
        {
          "id": 54,
          "amount": 250
        },
        {
          "id": 55,
          "amount": 250
        },
        {
          "id": 51,
          "amount": 1250
        }
      ],
      "strengthen": {
        "fromLevel": 1,
        "toLevel": 500,
        "costRule": {
          "silverPerLevel": 50000,
          "stoneStart": 10,
          "stoneStep": 5,
          "costItemId": 60085
        },
        "levelsConfigured": 998,
        "upgradeAttributes": [
          {
            "id": 100,
            "amount": 2500
          },
          {
            "id": 54,
            "amount": 2500
          },
          {
            "id": 55,
            "amount": 2500
          },
          {
            "id": 51,
            "amount": 12500
          }
        ],
        "thresholds": [
          {
            "level": 20,
            "costs": [
              {
                "itemId": 60087,
                "amount": 50
              },
              {
                "itemId": 940003,
                "amount": 2
              }
            ]
          },
          {
            "level": 40,
            "costs": [
              {
                "itemId": 60087,
                "amount": 100
              },
              {
                "itemId": 940003,
                "amount": 4
              }
            ]
          },
          {
            "level": 60,
            "costs": [
              {
                "itemId": 60087,
                "amount": 150
              },
              {
                "itemId": 940003,
                "amount": 6
              }
            ]
          },
          {
            "level": 80,
            "costs": [
              {
                "itemId": 60087,
                "amount": 200
              },
              {
                "itemId": 940003,
                "amount": 8
              }
            ]
          },
          {
            "level": 100,
            "costs": [
              {
                "itemId": 60087,
                "amount": 250
              },
              {
                "itemId": 940003,
                "amount": 10
              }
            ]
          },
          {
            "level": 120,
            "costs": [
              {
                "itemId": 60087,
                "amount": 300
              },
              {
                "itemId": 940003,
                "amount": 12
              }
            ]
          },
          {
            "level": 140,
            "costs": [
              {
                "itemId": 60087,
                "amount": 350
              },
              {
                "itemId": 940003,
                "amount": 16
              }
            ]
          },
          {
            "level": 160,
            "costs": [
              {
                "itemId": 60087,
                "amount": 400
              },
              {
                "itemId": 940003,
                "amount": 20
              }
            ]
          },
          {
            "level": 180,
            "costs": [
              {
                "itemId": 60087,
                "amount": 450
              },
              {
                "itemId": 940003,
                "amount": 25
              }
            ]
          },
          {
            "level": 200,
            "costs": [
              {
                "itemId": 60087,
                "amount": 500
              },
              {
                "itemId": 940003,
                "amount": 30
              }
            ]
          },
          {
            "level": 220,
            "costs": [
              {
                "itemId": 60087,
                "amount": 550
              },
              {
                "itemId": 940003,
                "amount": 35
              }
            ]
          },
          {
            "level": 240,
            "costs": [
              {
                "itemId": 60087,
                "amount": 600
              },
              {
                "itemId": 940003,
                "amount": 40
              }
            ]
          },
          {
            "level": 260,
            "costs": [
              {
                "itemId": 60087,
                "amount": 650
              },
              {
                "itemId": 940003,
                "amount": 45
              }
            ]
          },
          {
            "level": 280,
            "costs": [
              {
                "itemId": 60087,
                "amount": 700
              },
              {
                "itemId": 940003,
                "amount": 50
              }
            ]
          },
          {
            "level": 300,
            "costs": [
              {
                "itemId": 60087,
                "amount": 750
              },
              {
                "itemId": 940003,
                "amount": 50
              }
            ]
          },
          {
            "level": 320,
            "costs": [
              {
                "itemId": 60087,
                "amount": 800
              },
              {
                "itemId": 940003,
                "amount": 50
              }
            ]
          },
          {
            "level": 340,
            "costs": [
              {
                "itemId": 60087,
                "amount": 850
              },
              {
                "itemId": 940003,
                "amount": 50
              }
            ]
          },
          {
            "level": 360,
            "costs": [
              {
                "itemId": 60087,
                "amount": 900
              },
              {
                "itemId": 940003,
                "amount": 50
              }
            ]
          },
          {
            "level": 380,
            "costs": [
              {
                "itemId": 60087,
                "amount": 950
              },
              {
                "itemId": 940003,
                "amount": 50
              }
            ]
          },
          {
            "level": 400,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1000
              },
              {
                "itemId": 940003,
                "amount": 50
              }
            ]
          },
          {
            "level": 420,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1050
              },
              {
                "itemId": 940003,
                "amount": 50
              }
            ]
          },
          {
            "level": 440,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1100
              },
              {
                "itemId": 940003,
                "amount": 50
              }
            ]
          },
          {
            "level": 460,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1150
              },
              {
                "itemId": 940003,
                "amount": 50
              }
            ]
          },
          {
            "level": 480,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1200
              },
              {
                "itemId": 940003,
                "amount": 50
              }
            ]
          },
          {
            "level": 500,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1250
              },
              {
                "itemId": 940003,
                "amount": 50
              }
            ]
          }
        ]
      },
      "advance": {
        "thresholds": [
          {
            "level": 10,
            "costs": [
              {
                "itemId": 60086,
                "amount": 150
              },
              {
                "itemId": 940003,
                "amount": 2
              }
            ]
          },
          {
            "level": 30,
            "costs": [
              {
                "itemId": 60086,
                "amount": 300
              },
              {
                "itemId": 940003,
                "amount": 4
              }
            ]
          },
          {
            "level": 50,
            "costs": [
              {
                "itemId": 60086,
                "amount": 450
              },
              {
                "itemId": 940003,
                "amount": 6
              }
            ]
          },
          {
            "level": 70,
            "costs": [
              {
                "itemId": 60086,
                "amount": 600
              },
              {
                "itemId": 940003,
                "amount": 8
              }
            ]
          },
          {
            "level": 90,
            "costs": [
              {
                "itemId": 60086,
                "amount": 750
              },
              {
                "itemId": 940003,
                "amount": 10
              }
            ]
          },
          {
            "level": 110,
            "costs": [
              {
                "itemId": 60086,
                "amount": 900
              },
              {
                "itemId": 940003,
                "amount": 12
              }
            ]
          },
          {
            "level": 130,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1050
              },
              {
                "itemId": 940003,
                "amount": 16
              }
            ]
          },
          {
            "level": 150,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1200
              },
              {
                "itemId": 940003,
                "amount": 20
              }
            ]
          },
          {
            "level": 170,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1350
              },
              {
                "itemId": 940003,
                "amount": 25
              }
            ]
          },
          {
            "level": 190,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1500
              },
              {
                "itemId": 940003,
                "amount": 30
              }
            ]
          },
          {
            "level": 210,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1650
              },
              {
                "itemId": 940003,
                "amount": 35
              }
            ]
          },
          {
            "level": 230,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1800
              },
              {
                "itemId": 940003,
                "amount": 40
              }
            ]
          },
          {
            "level": 250,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1950
              },
              {
                "itemId": 940003,
                "amount": 45
              }
            ]
          },
          {
            "level": 270,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2100
              },
              {
                "itemId": 940003,
                "amount": 50
              }
            ]
          },
          {
            "level": 290,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2250
              },
              {
                "itemId": 940003,
                "amount": 50
              }
            ]
          },
          {
            "level": 310,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2400
              },
              {
                "itemId": 940003,
                "amount": 50
              }
            ]
          },
          {
            "level": 330,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2550
              },
              {
                "itemId": 940003,
                "amount": 50
              }
            ]
          },
          {
            "level": 350,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2700
              },
              {
                "itemId": 940003,
                "amount": 50
              }
            ]
          },
          {
            "level": 370,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2850
              },
              {
                "itemId": 940003,
                "amount": 50
              }
            ]
          },
          {
            "level": 390,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3000
              },
              {
                "itemId": 940003,
                "amount": 50
              }
            ]
          },
          {
            "level": 410,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3150
              },
              {
                "itemId": 940003,
                "amount": 50
              }
            ]
          },
          {
            "level": 430,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3300
              },
              {
                "itemId": 940003,
                "amount": 50
              }
            ]
          },
          {
            "level": 450,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3450
              },
              {
                "itemId": 940003,
                "amount": 50
              }
            ]
          },
          {
            "level": 470,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3600
              },
              {
                "itemId": 940003,
                "amount": 50
              }
            ]
          },
          {
            "level": 490,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3750
              },
              {
                "itemId": 940003,
                "amount": 50
              }
            ]
          }
        ],
        "attributes": {
          "1": [
            {
              "id": 54,
              "amount": 5000
            }
          ],
          "2": [
            {
              "id": 56,
              "amount": 200
            }
          ],
          "3": [
            {
              "id": 55,
              "amount": 10000
            }
          ],
          "4": [
            {
              "id": 57,
              "amount": 300
            }
          ],
          "5": [
            {
              "id": 51,
              "amount": 100000
            }
          ],
          "6": [
            {
              "id": 60,
              "amount": 400
            }
          ],
          "7": [
            {
              "id": 100,
              "amount": 30000
            }
          ],
          "8": [
            {
              "id": 61,
              "amount": 500
            }
          ],
          "9": [
            {
              "id": 25,
              "amount": 600
            }
          ],
          "10": [
            {
              "id": 24,
              "amount": 700
            }
          ],
          "11": [
            {
              "id": 54,
              "amount": 40000
            }
          ],
          "12": [
            {
              "id": 22,
              "amount": 600
            }
          ],
          "13": [
            {
              "id": 55,
              "amount": 50000
            }
          ],
          "14": [
            {
              "id": 23,
              "amount": 700
            }
          ],
          "15": [
            {
              "id": 51,
              "amount": 300000
            }
          ],
          "16": [
            {
              "id": 100,
              "amount": 70000
            }
          ],
          "17": [
            {
              "id": 23,
              "amount": 600
            }
          ],
          "18": [
            {
              "id": 22,
              "amount": 700
            }
          ],
          "19": [
            {
              "id": 102,
              "amount": 600
            }
          ],
          "20": [
            {
              "id": 101,
              "amount": 700
            }
          ],
          "21": [
            {
              "id": 54,
              "amount": 80000
            }
          ],
          "22": [
            {
              "id": 101,
              "amount": 700
            }
          ],
          "23": [
            {
              "id": 102,
              "amount": 800
            }
          ],
          "24": [
            {
              "id": 180,
              "amount": 700
            }
          ],
          "25": [
            {
              "id": 179,
              "amount": 800
            }
          ]
        },
        "requirements": [
          {
            "advance": 1,
            "requirement": 1
          },
          {
            "advance": 3,
            "requirement": 2
          },
          {
            "advance": 6,
            "requirement": 3
          },
          {
            "advance": 10,
            "requirement": 4
          },
          {
            "advance": 15,
            "requirement": 5
          },
          {
            "advance": 20,
            "requirement": 6
          },
          {
            "advance": 25,
            "requirement": 7
          }
        ]
      }
    },
    {
      "id": 940004,
      "name": "酆都符",
      "hero": "左慈",
      "icon": "assets/mibao-items/940004.png",
      "maxLevel": 500,
      "baseAttributes": [
        {
          "id": 100,
          "amount": 500
        },
        {
          "id": 54,
          "amount": 500
        },
        {
          "id": 55,
          "amount": 500
        },
        {
          "id": 51,
          "amount": 2500
        }
      ],
      "growthAttributes": [
        {
          "id": 100,
          "amount": 250
        },
        {
          "id": 54,
          "amount": 250
        },
        {
          "id": 55,
          "amount": 250
        },
        {
          "id": 51,
          "amount": 1250
        }
      ],
      "strengthen": {
        "fromLevel": 1,
        "toLevel": 500,
        "costRule": {
          "silverPerLevel": 50000,
          "stoneStart": 10,
          "stoneStep": 5,
          "costItemId": 60085
        },
        "levelsConfigured": 998,
        "upgradeAttributes": [
          {
            "id": 100,
            "amount": 2500
          },
          {
            "id": 54,
            "amount": 2500
          },
          {
            "id": 55,
            "amount": 2500
          },
          {
            "id": 51,
            "amount": 12500
          }
        ],
        "thresholds": [
          {
            "level": 20,
            "costs": [
              {
                "itemId": 60087,
                "amount": 50
              },
              {
                "itemId": 940004,
                "amount": 2
              }
            ]
          },
          {
            "level": 40,
            "costs": [
              {
                "itemId": 60087,
                "amount": 100
              },
              {
                "itemId": 940004,
                "amount": 4
              }
            ]
          },
          {
            "level": 60,
            "costs": [
              {
                "itemId": 60087,
                "amount": 150
              },
              {
                "itemId": 940004,
                "amount": 6
              }
            ]
          },
          {
            "level": 80,
            "costs": [
              {
                "itemId": 60087,
                "amount": 200
              },
              {
                "itemId": 940004,
                "amount": 8
              }
            ]
          },
          {
            "level": 100,
            "costs": [
              {
                "itemId": 60087,
                "amount": 250
              },
              {
                "itemId": 940004,
                "amount": 10
              }
            ]
          },
          {
            "level": 120,
            "costs": [
              {
                "itemId": 60087,
                "amount": 300
              },
              {
                "itemId": 940004,
                "amount": 12
              }
            ]
          },
          {
            "level": 140,
            "costs": [
              {
                "itemId": 60087,
                "amount": 350
              },
              {
                "itemId": 940004,
                "amount": 16
              }
            ]
          },
          {
            "level": 160,
            "costs": [
              {
                "itemId": 60087,
                "amount": 400
              },
              {
                "itemId": 940004,
                "amount": 20
              }
            ]
          },
          {
            "level": 180,
            "costs": [
              {
                "itemId": 60087,
                "amount": 450
              },
              {
                "itemId": 940004,
                "amount": 25
              }
            ]
          },
          {
            "level": 200,
            "costs": [
              {
                "itemId": 60087,
                "amount": 500
              },
              {
                "itemId": 940004,
                "amount": 30
              }
            ]
          },
          {
            "level": 220,
            "costs": [
              {
                "itemId": 60087,
                "amount": 550
              },
              {
                "itemId": 940004,
                "amount": 35
              }
            ]
          },
          {
            "level": 240,
            "costs": [
              {
                "itemId": 60087,
                "amount": 600
              },
              {
                "itemId": 940004,
                "amount": 40
              }
            ]
          },
          {
            "level": 260,
            "costs": [
              {
                "itemId": 60087,
                "amount": 650
              },
              {
                "itemId": 940004,
                "amount": 45
              }
            ]
          },
          {
            "level": 280,
            "costs": [
              {
                "itemId": 60087,
                "amount": 700
              },
              {
                "itemId": 940004,
                "amount": 50
              }
            ]
          },
          {
            "level": 300,
            "costs": [
              {
                "itemId": 60087,
                "amount": 750
              },
              {
                "itemId": 940004,
                "amount": 50
              }
            ]
          },
          {
            "level": 320,
            "costs": [
              {
                "itemId": 60087,
                "amount": 800
              },
              {
                "itemId": 940004,
                "amount": 50
              }
            ]
          },
          {
            "level": 340,
            "costs": [
              {
                "itemId": 60087,
                "amount": 850
              },
              {
                "itemId": 940004,
                "amount": 50
              }
            ]
          },
          {
            "level": 360,
            "costs": [
              {
                "itemId": 60087,
                "amount": 900
              },
              {
                "itemId": 940004,
                "amount": 50
              }
            ]
          },
          {
            "level": 380,
            "costs": [
              {
                "itemId": 60087,
                "amount": 950
              },
              {
                "itemId": 940004,
                "amount": 50
              }
            ]
          },
          {
            "level": 400,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1000
              },
              {
                "itemId": 940004,
                "amount": 50
              }
            ]
          },
          {
            "level": 420,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1050
              },
              {
                "itemId": 940004,
                "amount": 50
              }
            ]
          },
          {
            "level": 440,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1100
              },
              {
                "itemId": 940004,
                "amount": 50
              }
            ]
          },
          {
            "level": 460,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1150
              },
              {
                "itemId": 940004,
                "amount": 50
              }
            ]
          },
          {
            "level": 480,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1200
              },
              {
                "itemId": 940004,
                "amount": 50
              }
            ]
          },
          {
            "level": 500,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1250
              },
              {
                "itemId": 940004,
                "amount": 50
              }
            ]
          }
        ]
      },
      "advance": {
        "thresholds": [
          {
            "level": 10,
            "costs": [
              {
                "itemId": 60086,
                "amount": 150
              },
              {
                "itemId": 940004,
                "amount": 2
              }
            ]
          },
          {
            "level": 30,
            "costs": [
              {
                "itemId": 60086,
                "amount": 300
              },
              {
                "itemId": 940004,
                "amount": 4
              }
            ]
          },
          {
            "level": 50,
            "costs": [
              {
                "itemId": 60086,
                "amount": 450
              },
              {
                "itemId": 940004,
                "amount": 6
              }
            ]
          },
          {
            "level": 70,
            "costs": [
              {
                "itemId": 60086,
                "amount": 600
              },
              {
                "itemId": 940004,
                "amount": 8
              }
            ]
          },
          {
            "level": 90,
            "costs": [
              {
                "itemId": 60086,
                "amount": 750
              },
              {
                "itemId": 940004,
                "amount": 10
              }
            ]
          },
          {
            "level": 110,
            "costs": [
              {
                "itemId": 60086,
                "amount": 900
              },
              {
                "itemId": 940004,
                "amount": 12
              }
            ]
          },
          {
            "level": 130,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1050
              },
              {
                "itemId": 940004,
                "amount": 16
              }
            ]
          },
          {
            "level": 150,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1200
              },
              {
                "itemId": 940004,
                "amount": 20
              }
            ]
          },
          {
            "level": 170,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1350
              },
              {
                "itemId": 940004,
                "amount": 25
              }
            ]
          },
          {
            "level": 190,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1500
              },
              {
                "itemId": 940004,
                "amount": 30
              }
            ]
          },
          {
            "level": 210,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1650
              },
              {
                "itemId": 940004,
                "amount": 35
              }
            ]
          },
          {
            "level": 230,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1800
              },
              {
                "itemId": 940004,
                "amount": 40
              }
            ]
          },
          {
            "level": 250,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1950
              },
              {
                "itemId": 940004,
                "amount": 45
              }
            ]
          },
          {
            "level": 270,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2100
              },
              {
                "itemId": 940004,
                "amount": 50
              }
            ]
          },
          {
            "level": 290,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2250
              },
              {
                "itemId": 940004,
                "amount": 50
              }
            ]
          },
          {
            "level": 310,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2400
              },
              {
                "itemId": 940004,
                "amount": 50
              }
            ]
          },
          {
            "level": 330,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2550
              },
              {
                "itemId": 940004,
                "amount": 50
              }
            ]
          },
          {
            "level": 350,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2700
              },
              {
                "itemId": 940004,
                "amount": 50
              }
            ]
          },
          {
            "level": 370,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2850
              },
              {
                "itemId": 940004,
                "amount": 50
              }
            ]
          },
          {
            "level": 390,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3000
              },
              {
                "itemId": 940004,
                "amount": 50
              }
            ]
          },
          {
            "level": 410,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3150
              },
              {
                "itemId": 940004,
                "amount": 50
              }
            ]
          },
          {
            "level": 430,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3300
              },
              {
                "itemId": 940004,
                "amount": 50
              }
            ]
          },
          {
            "level": 450,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3450
              },
              {
                "itemId": 940004,
                "amount": 50
              }
            ]
          },
          {
            "level": 470,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3600
              },
              {
                "itemId": 940004,
                "amount": 50
              }
            ]
          },
          {
            "level": 490,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3750
              },
              {
                "itemId": 940004,
                "amount": 50
              }
            ]
          }
        ],
        "attributes": {
          "1": [
            {
              "id": 54,
              "amount": 5000
            }
          ],
          "2": [
            {
              "id": 56,
              "amount": 200
            }
          ],
          "3": [
            {
              "id": 55,
              "amount": 10000
            }
          ],
          "4": [
            {
              "id": 57,
              "amount": 300
            }
          ],
          "5": [
            {
              "id": 51,
              "amount": 100000
            }
          ],
          "6": [
            {
              "id": 60,
              "amount": 400
            }
          ],
          "7": [
            {
              "id": 100,
              "amount": 30000
            }
          ],
          "8": [
            {
              "id": 61,
              "amount": 500
            }
          ],
          "9": [
            {
              "id": 25,
              "amount": 600
            }
          ],
          "10": [
            {
              "id": 24,
              "amount": 700
            }
          ],
          "11": [
            {
              "id": 54,
              "amount": 40000
            }
          ],
          "12": [
            {
              "id": 22,
              "amount": 600
            }
          ],
          "13": [
            {
              "id": 55,
              "amount": 50000
            }
          ],
          "14": [
            {
              "id": 23,
              "amount": 700
            }
          ],
          "15": [
            {
              "id": 51,
              "amount": 300000
            }
          ],
          "16": [
            {
              "id": 100,
              "amount": 70000
            }
          ],
          "17": [
            {
              "id": 23,
              "amount": 600
            }
          ],
          "18": [
            {
              "id": 22,
              "amount": 700
            }
          ],
          "19": [
            {
              "id": 102,
              "amount": 600
            }
          ],
          "20": [
            {
              "id": 101,
              "amount": 700
            }
          ],
          "21": [
            {
              "id": 54,
              "amount": 80000
            }
          ],
          "22": [
            {
              "id": 101,
              "amount": 700
            }
          ],
          "23": [
            {
              "id": 102,
              "amount": 800
            }
          ],
          "24": [
            {
              "id": 180,
              "amount": 700
            }
          ],
          "25": [
            {
              "id": 179,
              "amount": 800
            }
          ]
        },
        "requirements": [
          {
            "advance": 1,
            "requirement": 1
          },
          {
            "advance": 3,
            "requirement": 2
          },
          {
            "advance": 6,
            "requirement": 3
          },
          {
            "advance": 10,
            "requirement": 4
          },
          {
            "advance": 15,
            "requirement": 5
          },
          {
            "advance": 20,
            "requirement": 6
          },
          {
            "advance": 25,
            "requirement": 7
          }
        ]
      }
    },
    {
      "id": 940005,
      "name": "夔牛臂环",
      "hero": "夏侯渊",
      "icon": "assets/mibao-items/940005.png",
      "maxLevel": 500,
      "baseAttributes": [
        {
          "id": 100,
          "amount": 500
        },
        {
          "id": 54,
          "amount": 500
        },
        {
          "id": 55,
          "amount": 500
        },
        {
          "id": 51,
          "amount": 2500
        }
      ],
      "growthAttributes": [
        {
          "id": 100,
          "amount": 250
        },
        {
          "id": 54,
          "amount": 250
        },
        {
          "id": 55,
          "amount": 250
        },
        {
          "id": 51,
          "amount": 1250
        }
      ],
      "strengthen": {
        "fromLevel": 1,
        "toLevel": 500,
        "costRule": {
          "silverPerLevel": 50000,
          "stoneStart": 10,
          "stoneStep": 5,
          "costItemId": 60085
        },
        "levelsConfigured": 998,
        "upgradeAttributes": [
          {
            "id": 100,
            "amount": 2500
          },
          {
            "id": 54,
            "amount": 2500
          },
          {
            "id": 55,
            "amount": 2500
          },
          {
            "id": 51,
            "amount": 12500
          }
        ],
        "thresholds": [
          {
            "level": 20,
            "costs": [
              {
                "itemId": 60087,
                "amount": 40
              },
              {
                "itemId": 940005,
                "amount": 2
              }
            ]
          },
          {
            "level": 40,
            "costs": [
              {
                "itemId": 60087,
                "amount": 80
              },
              {
                "itemId": 940005,
                "amount": 4
              }
            ]
          },
          {
            "level": 60,
            "costs": [
              {
                "itemId": 60087,
                "amount": 120
              },
              {
                "itemId": 940005,
                "amount": 6
              }
            ]
          },
          {
            "level": 80,
            "costs": [
              {
                "itemId": 60087,
                "amount": 160
              },
              {
                "itemId": 940005,
                "amount": 8
              }
            ]
          },
          {
            "level": 100,
            "costs": [
              {
                "itemId": 60087,
                "amount": 200
              },
              {
                "itemId": 940005,
                "amount": 10
              }
            ]
          },
          {
            "level": 120,
            "costs": [
              {
                "itemId": 60087,
                "amount": 240
              },
              {
                "itemId": 940005,
                "amount": 12
              }
            ]
          },
          {
            "level": 140,
            "costs": [
              {
                "itemId": 60087,
                "amount": 280
              },
              {
                "itemId": 940005,
                "amount": 16
              }
            ]
          },
          {
            "level": 160,
            "costs": [
              {
                "itemId": 60087,
                "amount": 320
              },
              {
                "itemId": 940005,
                "amount": 20
              }
            ]
          },
          {
            "level": 180,
            "costs": [
              {
                "itemId": 60087,
                "amount": 360
              },
              {
                "itemId": 940005,
                "amount": 25
              }
            ]
          },
          {
            "level": 200,
            "costs": [
              {
                "itemId": 60087,
                "amount": 400
              },
              {
                "itemId": 940005,
                "amount": 30
              }
            ]
          },
          {
            "level": 220,
            "costs": [
              {
                "itemId": 60087,
                "amount": 440
              },
              {
                "itemId": 940005,
                "amount": 35
              }
            ]
          },
          {
            "level": 240,
            "costs": [
              {
                "itemId": 60087,
                "amount": 480
              },
              {
                "itemId": 940005,
                "amount": 40
              }
            ]
          },
          {
            "level": 260,
            "costs": [
              {
                "itemId": 60087,
                "amount": 520
              },
              {
                "itemId": 940005,
                "amount": 45
              }
            ]
          },
          {
            "level": 280,
            "costs": [
              {
                "itemId": 60087,
                "amount": 560
              },
              {
                "itemId": 940005,
                "amount": 50
              }
            ]
          },
          {
            "level": 300,
            "costs": [
              {
                "itemId": 60087,
                "amount": 600
              },
              {
                "itemId": 940005,
                "amount": 50
              }
            ]
          },
          {
            "level": 320,
            "costs": [
              {
                "itemId": 60087,
                "amount": 640
              },
              {
                "itemId": 940005,
                "amount": 50
              }
            ]
          },
          {
            "level": 340,
            "costs": [
              {
                "itemId": 60087,
                "amount": 680
              },
              {
                "itemId": 940005,
                "amount": 50
              }
            ]
          },
          {
            "level": 360,
            "costs": [
              {
                "itemId": 60087,
                "amount": 720
              },
              {
                "itemId": 940005,
                "amount": 50
              }
            ]
          },
          {
            "level": 380,
            "costs": [
              {
                "itemId": 60087,
                "amount": 760
              },
              {
                "itemId": 940005,
                "amount": 50
              }
            ]
          },
          {
            "level": 400,
            "costs": [
              {
                "itemId": 60087,
                "amount": 800
              },
              {
                "itemId": 940005,
                "amount": 50
              }
            ]
          },
          {
            "level": 420,
            "costs": [
              {
                "itemId": 60087,
                "amount": 840
              },
              {
                "itemId": 940005,
                "amount": 50
              }
            ]
          },
          {
            "level": 440,
            "costs": [
              {
                "itemId": 60087,
                "amount": 880
              },
              {
                "itemId": 940005,
                "amount": 50
              }
            ]
          },
          {
            "level": 460,
            "costs": [
              {
                "itemId": 60087,
                "amount": 920
              },
              {
                "itemId": 940005,
                "amount": 50
              }
            ]
          },
          {
            "level": 480,
            "costs": [
              {
                "itemId": 60087,
                "amount": 960
              },
              {
                "itemId": 940005,
                "amount": 50
              }
            ]
          },
          {
            "level": 500,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1000
              },
              {
                "itemId": 940005,
                "amount": 50
              }
            ]
          }
        ]
      },
      "advance": {
        "thresholds": [
          {
            "level": 10,
            "costs": [
              {
                "itemId": 60086,
                "amount": 150
              },
              {
                "itemId": 940005,
                "amount": 2
              }
            ]
          },
          {
            "level": 30,
            "costs": [
              {
                "itemId": 60086,
                "amount": 300
              },
              {
                "itemId": 940005,
                "amount": 4
              }
            ]
          },
          {
            "level": 50,
            "costs": [
              {
                "itemId": 60086,
                "amount": 450
              },
              {
                "itemId": 940005,
                "amount": 6
              }
            ]
          },
          {
            "level": 70,
            "costs": [
              {
                "itemId": 60086,
                "amount": 600
              },
              {
                "itemId": 940005,
                "amount": 8
              }
            ]
          },
          {
            "level": 90,
            "costs": [
              {
                "itemId": 60086,
                "amount": 750
              },
              {
                "itemId": 940005,
                "amount": 10
              }
            ]
          },
          {
            "level": 110,
            "costs": [
              {
                "itemId": 60086,
                "amount": 900
              },
              {
                "itemId": 940005,
                "amount": 12
              }
            ]
          },
          {
            "level": 130,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1050
              },
              {
                "itemId": 940005,
                "amount": 16
              }
            ]
          },
          {
            "level": 150,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1200
              },
              {
                "itemId": 940005,
                "amount": 20
              }
            ]
          },
          {
            "level": 170,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1350
              },
              {
                "itemId": 940005,
                "amount": 25
              }
            ]
          },
          {
            "level": 190,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1500
              },
              {
                "itemId": 940005,
                "amount": 30
              }
            ]
          },
          {
            "level": 210,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1650
              },
              {
                "itemId": 940005,
                "amount": 35
              }
            ]
          },
          {
            "level": 230,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1800
              },
              {
                "itemId": 940005,
                "amount": 40
              }
            ]
          },
          {
            "level": 250,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1950
              },
              {
                "itemId": 940005,
                "amount": 45
              }
            ]
          },
          {
            "level": 270,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2100
              },
              {
                "itemId": 940005,
                "amount": 50
              }
            ]
          },
          {
            "level": 290,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2250
              },
              {
                "itemId": 940005,
                "amount": 50
              }
            ]
          },
          {
            "level": 310,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2400
              },
              {
                "itemId": 940005,
                "amount": 50
              }
            ]
          },
          {
            "level": 330,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2550
              },
              {
                "itemId": 940005,
                "amount": 50
              }
            ]
          },
          {
            "level": 350,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2700
              },
              {
                "itemId": 940005,
                "amount": 50
              }
            ]
          },
          {
            "level": 370,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2850
              },
              {
                "itemId": 940005,
                "amount": 50
              }
            ]
          },
          {
            "level": 390,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3000
              },
              {
                "itemId": 940005,
                "amount": 50
              }
            ]
          },
          {
            "level": 410,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3150
              },
              {
                "itemId": 940005,
                "amount": 50
              }
            ]
          },
          {
            "level": 430,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3300
              },
              {
                "itemId": 940005,
                "amount": 50
              }
            ]
          },
          {
            "level": 450,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3450
              },
              {
                "itemId": 940005,
                "amount": 50
              }
            ]
          },
          {
            "level": 470,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3600
              },
              {
                "itemId": 940005,
                "amount": 50
              }
            ]
          },
          {
            "level": 490,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3750
              },
              {
                "itemId": 940005,
                "amount": 50
              }
            ]
          }
        ],
        "attributes": {
          "1": [
            {
              "id": 54,
              "amount": 5000
            }
          ],
          "2": [
            {
              "id": 56,
              "amount": 200
            }
          ],
          "3": [
            {
              "id": 55,
              "amount": 10000
            }
          ],
          "4": [
            {
              "id": 57,
              "amount": 300
            }
          ],
          "5": [
            {
              "id": 51,
              "amount": 100000
            }
          ],
          "6": [
            {
              "id": 60,
              "amount": 400
            }
          ],
          "7": [
            {
              "id": 100,
              "amount": 30000
            }
          ],
          "8": [
            {
              "id": 61,
              "amount": 500
            }
          ],
          "9": [
            {
              "id": 25,
              "amount": 600
            }
          ],
          "10": [
            {
              "id": 24,
              "amount": 700
            }
          ],
          "11": [
            {
              "id": 54,
              "amount": 40000
            }
          ],
          "12": [
            {
              "id": 22,
              "amount": 600
            }
          ],
          "13": [
            {
              "id": 55,
              "amount": 50000
            }
          ],
          "14": [
            {
              "id": 23,
              "amount": 700
            }
          ],
          "15": [
            {
              "id": 51,
              "amount": 300000
            }
          ],
          "16": [
            {
              "id": 100,
              "amount": 70000
            }
          ],
          "17": [
            {
              "id": 23,
              "amount": 600
            }
          ],
          "18": [
            {
              "id": 22,
              "amount": 700
            }
          ],
          "19": [
            {
              "id": 102,
              "amount": 600
            }
          ],
          "20": [
            {
              "id": 101,
              "amount": 700
            }
          ],
          "21": [
            {
              "id": 54,
              "amount": 80000
            }
          ],
          "22": [
            {
              "id": 101,
              "amount": 700
            }
          ],
          "23": [
            {
              "id": 102,
              "amount": 800
            }
          ],
          "24": [
            {
              "id": 180,
              "amount": 700
            }
          ],
          "25": [
            {
              "id": 179,
              "amount": 800
            }
          ]
        },
        "requirements": [
          {
            "advance": 1,
            "requirement": 1
          },
          {
            "advance": 3,
            "requirement": 2
          },
          {
            "advance": 6,
            "requirement": 3
          },
          {
            "advance": 10,
            "requirement": 4
          },
          {
            "advance": 15,
            "requirement": 5
          },
          {
            "advance": 20,
            "requirement": 6
          },
          {
            "advance": 25,
            "requirement": 7
          }
        ]
      }
    },
    {
      "id": 940006,
      "name": "天青玉龙印",
      "hero": "关羽",
      "icon": "assets/mibao-items/940006.png",
      "maxLevel": 500,
      "baseAttributes": [
        {
          "id": 100,
          "amount": 500
        },
        {
          "id": 54,
          "amount": 500
        },
        {
          "id": 55,
          "amount": 500
        },
        {
          "id": 51,
          "amount": 2500
        }
      ],
      "growthAttributes": [
        {
          "id": 100,
          "amount": 250
        },
        {
          "id": 54,
          "amount": 250
        },
        {
          "id": 55,
          "amount": 250
        },
        {
          "id": 51,
          "amount": 1250
        }
      ],
      "strengthen": {
        "fromLevel": 1,
        "toLevel": 500,
        "costRule": {
          "silverPerLevel": 50000,
          "stoneStart": 10,
          "stoneStep": 5,
          "costItemId": 60085
        },
        "levelsConfigured": 998,
        "upgradeAttributes": [
          {
            "id": 100,
            "amount": 2500
          },
          {
            "id": 54,
            "amount": 2500
          },
          {
            "id": 55,
            "amount": 2500
          },
          {
            "id": 51,
            "amount": 12500
          }
        ],
        "thresholds": [
          {
            "level": 20,
            "costs": [
              {
                "itemId": 60087,
                "amount": 40
              },
              {
                "itemId": 940006,
                "amount": 2
              }
            ]
          },
          {
            "level": 40,
            "costs": [
              {
                "itemId": 60087,
                "amount": 80
              },
              {
                "itemId": 940006,
                "amount": 4
              }
            ]
          },
          {
            "level": 60,
            "costs": [
              {
                "itemId": 60087,
                "amount": 120
              },
              {
                "itemId": 940006,
                "amount": 6
              }
            ]
          },
          {
            "level": 80,
            "costs": [
              {
                "itemId": 60087,
                "amount": 160
              },
              {
                "itemId": 940006,
                "amount": 8
              }
            ]
          },
          {
            "level": 100,
            "costs": [
              {
                "itemId": 60087,
                "amount": 200
              },
              {
                "itemId": 940006,
                "amount": 10
              }
            ]
          },
          {
            "level": 120,
            "costs": [
              {
                "itemId": 60087,
                "amount": 240
              },
              {
                "itemId": 940006,
                "amount": 12
              }
            ]
          },
          {
            "level": 140,
            "costs": [
              {
                "itemId": 60087,
                "amount": 280
              },
              {
                "itemId": 940006,
                "amount": 16
              }
            ]
          },
          {
            "level": 160,
            "costs": [
              {
                "itemId": 60087,
                "amount": 320
              },
              {
                "itemId": 940006,
                "amount": 20
              }
            ]
          },
          {
            "level": 180,
            "costs": [
              {
                "itemId": 60087,
                "amount": 360
              },
              {
                "itemId": 940006,
                "amount": 25
              }
            ]
          },
          {
            "level": 200,
            "costs": [
              {
                "itemId": 60087,
                "amount": 400
              },
              {
                "itemId": 940006,
                "amount": 30
              }
            ]
          },
          {
            "level": 220,
            "costs": [
              {
                "itemId": 60087,
                "amount": 440
              },
              {
                "itemId": 940006,
                "amount": 35
              }
            ]
          },
          {
            "level": 240,
            "costs": [
              {
                "itemId": 60087,
                "amount": 480
              },
              {
                "itemId": 940006,
                "amount": 40
              }
            ]
          },
          {
            "level": 260,
            "costs": [
              {
                "itemId": 60087,
                "amount": 520
              },
              {
                "itemId": 940006,
                "amount": 45
              }
            ]
          },
          {
            "level": 280,
            "costs": [
              {
                "itemId": 60087,
                "amount": 560
              },
              {
                "itemId": 940006,
                "amount": 50
              }
            ]
          },
          {
            "level": 300,
            "costs": [
              {
                "itemId": 60087,
                "amount": 600
              },
              {
                "itemId": 940006,
                "amount": 50
              }
            ]
          },
          {
            "level": 320,
            "costs": [
              {
                "itemId": 60087,
                "amount": 640
              },
              {
                "itemId": 940006,
                "amount": 50
              }
            ]
          },
          {
            "level": 340,
            "costs": [
              {
                "itemId": 60087,
                "amount": 680
              },
              {
                "itemId": 940006,
                "amount": 50
              }
            ]
          },
          {
            "level": 360,
            "costs": [
              {
                "itemId": 60087,
                "amount": 720
              },
              {
                "itemId": 940006,
                "amount": 50
              }
            ]
          },
          {
            "level": 380,
            "costs": [
              {
                "itemId": 60087,
                "amount": 760
              },
              {
                "itemId": 940006,
                "amount": 50
              }
            ]
          },
          {
            "level": 400,
            "costs": [
              {
                "itemId": 60087,
                "amount": 800
              },
              {
                "itemId": 940006,
                "amount": 50
              }
            ]
          },
          {
            "level": 420,
            "costs": [
              {
                "itemId": 60087,
                "amount": 840
              },
              {
                "itemId": 940006,
                "amount": 50
              }
            ]
          },
          {
            "level": 440,
            "costs": [
              {
                "itemId": 60087,
                "amount": 880
              },
              {
                "itemId": 940006,
                "amount": 50
              }
            ]
          },
          {
            "level": 460,
            "costs": [
              {
                "itemId": 60087,
                "amount": 920
              },
              {
                "itemId": 940006,
                "amount": 50
              }
            ]
          },
          {
            "level": 480,
            "costs": [
              {
                "itemId": 60087,
                "amount": 960
              },
              {
                "itemId": 940006,
                "amount": 50
              }
            ]
          },
          {
            "level": 500,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1000
              },
              {
                "itemId": 940006,
                "amount": 50
              }
            ]
          }
        ]
      },
      "advance": {
        "thresholds": [
          {
            "level": 10,
            "costs": [
              {
                "itemId": 60086,
                "amount": 150
              },
              {
                "itemId": 940006,
                "amount": 2
              }
            ]
          },
          {
            "level": 30,
            "costs": [
              {
                "itemId": 60086,
                "amount": 300
              },
              {
                "itemId": 940006,
                "amount": 4
              }
            ]
          },
          {
            "level": 50,
            "costs": [
              {
                "itemId": 60086,
                "amount": 450
              },
              {
                "itemId": 940006,
                "amount": 6
              }
            ]
          },
          {
            "level": 70,
            "costs": [
              {
                "itemId": 60086,
                "amount": 600
              },
              {
                "itemId": 940006,
                "amount": 8
              }
            ]
          },
          {
            "level": 90,
            "costs": [
              {
                "itemId": 60086,
                "amount": 750
              },
              {
                "itemId": 940006,
                "amount": 10
              }
            ]
          },
          {
            "level": 110,
            "costs": [
              {
                "itemId": 60086,
                "amount": 900
              },
              {
                "itemId": 940006,
                "amount": 12
              }
            ]
          },
          {
            "level": 130,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1050
              },
              {
                "itemId": 940006,
                "amount": 16
              }
            ]
          },
          {
            "level": 150,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1200
              },
              {
                "itemId": 940006,
                "amount": 20
              }
            ]
          },
          {
            "level": 170,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1350
              },
              {
                "itemId": 940006,
                "amount": 25
              }
            ]
          },
          {
            "level": 190,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1500
              },
              {
                "itemId": 940006,
                "amount": 30
              }
            ]
          },
          {
            "level": 210,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1650
              },
              {
                "itemId": 940006,
                "amount": 35
              }
            ]
          },
          {
            "level": 230,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1800
              },
              {
                "itemId": 940006,
                "amount": 40
              }
            ]
          },
          {
            "level": 250,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1950
              },
              {
                "itemId": 940006,
                "amount": 45
              }
            ]
          },
          {
            "level": 270,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2100
              },
              {
                "itemId": 940006,
                "amount": 50
              }
            ]
          },
          {
            "level": 290,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2250
              },
              {
                "itemId": 940006,
                "amount": 50
              }
            ]
          },
          {
            "level": 310,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2400
              },
              {
                "itemId": 940006,
                "amount": 50
              }
            ]
          },
          {
            "level": 330,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2550
              },
              {
                "itemId": 940006,
                "amount": 50
              }
            ]
          },
          {
            "level": 350,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2700
              },
              {
                "itemId": 940006,
                "amount": 50
              }
            ]
          },
          {
            "level": 370,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2850
              },
              {
                "itemId": 940006,
                "amount": 50
              }
            ]
          },
          {
            "level": 390,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3000
              },
              {
                "itemId": 940006,
                "amount": 50
              }
            ]
          },
          {
            "level": 410,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3150
              },
              {
                "itemId": 940006,
                "amount": 50
              }
            ]
          },
          {
            "level": 430,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3300
              },
              {
                "itemId": 940006,
                "amount": 50
              }
            ]
          },
          {
            "level": 450,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3450
              },
              {
                "itemId": 940006,
                "amount": 50
              }
            ]
          },
          {
            "level": 470,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3600
              },
              {
                "itemId": 940006,
                "amount": 50
              }
            ]
          },
          {
            "level": 490,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3750
              },
              {
                "itemId": 940006,
                "amount": 50
              }
            ]
          }
        ],
        "attributes": {
          "1": [
            {
              "id": 54,
              "amount": 5000
            }
          ],
          "2": [
            {
              "id": 56,
              "amount": 200
            }
          ],
          "3": [
            {
              "id": 55,
              "amount": 10000
            }
          ],
          "4": [
            {
              "id": 57,
              "amount": 300
            }
          ],
          "5": [
            {
              "id": 51,
              "amount": 100000
            }
          ],
          "6": [
            {
              "id": 60,
              "amount": 400
            }
          ],
          "7": [
            {
              "id": 100,
              "amount": 30000
            }
          ],
          "8": [
            {
              "id": 61,
              "amount": 500
            }
          ],
          "9": [
            {
              "id": 25,
              "amount": 600
            }
          ],
          "10": [
            {
              "id": 24,
              "amount": 700
            }
          ],
          "11": [
            {
              "id": 54,
              "amount": 40000
            }
          ],
          "12": [
            {
              "id": 22,
              "amount": 600
            }
          ],
          "13": [
            {
              "id": 55,
              "amount": 50000
            }
          ],
          "14": [
            {
              "id": 23,
              "amount": 700
            }
          ],
          "15": [
            {
              "id": 51,
              "amount": 300000
            }
          ],
          "16": [
            {
              "id": 100,
              "amount": 70000
            }
          ],
          "17": [
            {
              "id": 23,
              "amount": 600
            }
          ],
          "18": [
            {
              "id": 22,
              "amount": 700
            }
          ],
          "19": [
            {
              "id": 102,
              "amount": 600
            }
          ],
          "20": [
            {
              "id": 101,
              "amount": 700
            }
          ],
          "21": [
            {
              "id": 54,
              "amount": 80000
            }
          ],
          "22": [
            {
              "id": 101,
              "amount": 700
            }
          ],
          "23": [
            {
              "id": 102,
              "amount": 800
            }
          ],
          "24": [
            {
              "id": 180,
              "amount": 700
            }
          ],
          "25": [
            {
              "id": 179,
              "amount": 800
            }
          ]
        },
        "requirements": [
          {
            "advance": 1,
            "requirement": 1
          },
          {
            "advance": 3,
            "requirement": 2
          },
          {
            "advance": 6,
            "requirement": 3
          },
          {
            "advance": 10,
            "requirement": 4
          },
          {
            "advance": 15,
            "requirement": 5
          },
          {
            "advance": 20,
            "requirement": 6
          },
          {
            "advance": 25,
            "requirement": 7
          }
        ]
      }
    },
    {
      "id": 940007,
      "name": "祸海珠",
      "hero": "文鸯",
      "icon": "assets/mibao-items/940007.png",
      "maxLevel": 500,
      "baseAttributes": [
        {
          "id": 100,
          "amount": 500
        },
        {
          "id": 54,
          "amount": 500
        },
        {
          "id": 55,
          "amount": 500
        },
        {
          "id": 51,
          "amount": 2500
        }
      ],
      "growthAttributes": [
        {
          "id": 100,
          "amount": 250
        },
        {
          "id": 54,
          "amount": 250
        },
        {
          "id": 55,
          "amount": 250
        },
        {
          "id": 51,
          "amount": 1250
        }
      ],
      "strengthen": {
        "fromLevel": 1,
        "toLevel": 500,
        "costRule": {
          "silverPerLevel": 50000,
          "stoneStart": 10,
          "stoneStep": 5,
          "costItemId": 60085
        },
        "levelsConfigured": 998,
        "upgradeAttributes": [
          {
            "id": 100,
            "amount": 2500
          },
          {
            "id": 54,
            "amount": 2500
          },
          {
            "id": 55,
            "amount": 2500
          },
          {
            "id": 51,
            "amount": 12500
          }
        ],
        "thresholds": [
          {
            "level": 20,
            "costs": [
              {
                "itemId": 60087,
                "amount": 40
              },
              {
                "itemId": 940007,
                "amount": 2
              }
            ]
          },
          {
            "level": 40,
            "costs": [
              {
                "itemId": 60087,
                "amount": 80
              },
              {
                "itemId": 940007,
                "amount": 4
              }
            ]
          },
          {
            "level": 60,
            "costs": [
              {
                "itemId": 60087,
                "amount": 120
              },
              {
                "itemId": 940007,
                "amount": 6
              }
            ]
          },
          {
            "level": 80,
            "costs": [
              {
                "itemId": 60087,
                "amount": 160
              },
              {
                "itemId": 940007,
                "amount": 8
              }
            ]
          },
          {
            "level": 100,
            "costs": [
              {
                "itemId": 60087,
                "amount": 200
              },
              {
                "itemId": 940007,
                "amount": 10
              }
            ]
          },
          {
            "level": 120,
            "costs": [
              {
                "itemId": 60087,
                "amount": 240
              },
              {
                "itemId": 940007,
                "amount": 12
              }
            ]
          },
          {
            "level": 140,
            "costs": [
              {
                "itemId": 60087,
                "amount": 280
              },
              {
                "itemId": 940007,
                "amount": 16
              }
            ]
          },
          {
            "level": 160,
            "costs": [
              {
                "itemId": 60087,
                "amount": 320
              },
              {
                "itemId": 940007,
                "amount": 20
              }
            ]
          },
          {
            "level": 180,
            "costs": [
              {
                "itemId": 60087,
                "amount": 360
              },
              {
                "itemId": 940007,
                "amount": 25
              }
            ]
          },
          {
            "level": 200,
            "costs": [
              {
                "itemId": 60087,
                "amount": 400
              },
              {
                "itemId": 940007,
                "amount": 30
              }
            ]
          },
          {
            "level": 220,
            "costs": [
              {
                "itemId": 60087,
                "amount": 440
              },
              {
                "itemId": 940007,
                "amount": 35
              }
            ]
          },
          {
            "level": 240,
            "costs": [
              {
                "itemId": 60087,
                "amount": 480
              },
              {
                "itemId": 940007,
                "amount": 40
              }
            ]
          },
          {
            "level": 260,
            "costs": [
              {
                "itemId": 60087,
                "amount": 520
              },
              {
                "itemId": 940007,
                "amount": 45
              }
            ]
          },
          {
            "level": 280,
            "costs": [
              {
                "itemId": 60087,
                "amount": 560
              },
              {
                "itemId": 940007,
                "amount": 50
              }
            ]
          },
          {
            "level": 300,
            "costs": [
              {
                "itemId": 60087,
                "amount": 600
              },
              {
                "itemId": 940007,
                "amount": 50
              }
            ]
          },
          {
            "level": 320,
            "costs": [
              {
                "itemId": 60087,
                "amount": 640
              },
              {
                "itemId": 940007,
                "amount": 50
              }
            ]
          },
          {
            "level": 340,
            "costs": [
              {
                "itemId": 60087,
                "amount": 680
              },
              {
                "itemId": 940007,
                "amount": 50
              }
            ]
          },
          {
            "level": 360,
            "costs": [
              {
                "itemId": 60087,
                "amount": 720
              },
              {
                "itemId": 940007,
                "amount": 50
              }
            ]
          },
          {
            "level": 380,
            "costs": [
              {
                "itemId": 60087,
                "amount": 760
              },
              {
                "itemId": 940007,
                "amount": 50
              }
            ]
          },
          {
            "level": 400,
            "costs": [
              {
                "itemId": 60087,
                "amount": 800
              },
              {
                "itemId": 940007,
                "amount": 50
              }
            ]
          },
          {
            "level": 420,
            "costs": [
              {
                "itemId": 60087,
                "amount": 840
              },
              {
                "itemId": 940007,
                "amount": 50
              }
            ]
          },
          {
            "level": 440,
            "costs": [
              {
                "itemId": 60087,
                "amount": 880
              },
              {
                "itemId": 940007,
                "amount": 50
              }
            ]
          },
          {
            "level": 460,
            "costs": [
              {
                "itemId": 60087,
                "amount": 920
              },
              {
                "itemId": 940007,
                "amount": 50
              }
            ]
          },
          {
            "level": 480,
            "costs": [
              {
                "itemId": 60087,
                "amount": 960
              },
              {
                "itemId": 940007,
                "amount": 50
              }
            ]
          },
          {
            "level": 500,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1000
              },
              {
                "itemId": 940007,
                "amount": 50
              }
            ]
          }
        ]
      },
      "advance": {
        "thresholds": [
          {
            "level": 10,
            "costs": [
              {
                "itemId": 60086,
                "amount": 150
              },
              {
                "itemId": 940007,
                "amount": 2
              }
            ]
          },
          {
            "level": 30,
            "costs": [
              {
                "itemId": 60086,
                "amount": 300
              },
              {
                "itemId": 940007,
                "amount": 4
              }
            ]
          },
          {
            "level": 50,
            "costs": [
              {
                "itemId": 60086,
                "amount": 450
              },
              {
                "itemId": 940007,
                "amount": 6
              }
            ]
          },
          {
            "level": 70,
            "costs": [
              {
                "itemId": 60086,
                "amount": 600
              },
              {
                "itemId": 940007,
                "amount": 8
              }
            ]
          },
          {
            "level": 90,
            "costs": [
              {
                "itemId": 60086,
                "amount": 750
              },
              {
                "itemId": 940007,
                "amount": 10
              }
            ]
          },
          {
            "level": 110,
            "costs": [
              {
                "itemId": 60086,
                "amount": 900
              },
              {
                "itemId": 940007,
                "amount": 12
              }
            ]
          },
          {
            "level": 130,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1050
              },
              {
                "itemId": 940007,
                "amount": 16
              }
            ]
          },
          {
            "level": 150,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1200
              },
              {
                "itemId": 940007,
                "amount": 20
              }
            ]
          },
          {
            "level": 170,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1350
              },
              {
                "itemId": 940007,
                "amount": 25
              }
            ]
          },
          {
            "level": 190,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1500
              },
              {
                "itemId": 940007,
                "amount": 30
              }
            ]
          },
          {
            "level": 210,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1650
              },
              {
                "itemId": 940007,
                "amount": 35
              }
            ]
          },
          {
            "level": 230,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1800
              },
              {
                "itemId": 940007,
                "amount": 40
              }
            ]
          },
          {
            "level": 250,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1950
              },
              {
                "itemId": 940007,
                "amount": 45
              }
            ]
          },
          {
            "level": 270,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2100
              },
              {
                "itemId": 940007,
                "amount": 50
              }
            ]
          },
          {
            "level": 290,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2250
              },
              {
                "itemId": 940007,
                "amount": 50
              }
            ]
          },
          {
            "level": 310,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2400
              },
              {
                "itemId": 940007,
                "amount": 50
              }
            ]
          },
          {
            "level": 330,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2550
              },
              {
                "itemId": 940007,
                "amount": 50
              }
            ]
          },
          {
            "level": 350,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2700
              },
              {
                "itemId": 940007,
                "amount": 50
              }
            ]
          },
          {
            "level": 370,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2850
              },
              {
                "itemId": 940007,
                "amount": 50
              }
            ]
          },
          {
            "level": 390,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3000
              },
              {
                "itemId": 940007,
                "amount": 50
              }
            ]
          },
          {
            "level": 410,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3150
              },
              {
                "itemId": 940007,
                "amount": 50
              }
            ]
          },
          {
            "level": 430,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3300
              },
              {
                "itemId": 940007,
                "amount": 50
              }
            ]
          },
          {
            "level": 450,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3450
              },
              {
                "itemId": 940007,
                "amount": 50
              }
            ]
          },
          {
            "level": 470,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3600
              },
              {
                "itemId": 940007,
                "amount": 50
              }
            ]
          },
          {
            "level": 490,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3750
              },
              {
                "itemId": 940007,
                "amount": 50
              }
            ]
          }
        ],
        "attributes": {
          "1": [
            {
              "id": 54,
              "amount": 5000
            }
          ],
          "2": [
            {
              "id": 56,
              "amount": 200
            }
          ],
          "3": [
            {
              "id": 55,
              "amount": 10000
            }
          ],
          "4": [
            {
              "id": 57,
              "amount": 300
            }
          ],
          "5": [
            {
              "id": 51,
              "amount": 100000
            }
          ],
          "6": [
            {
              "id": 60,
              "amount": 400
            }
          ],
          "7": [
            {
              "id": 100,
              "amount": 30000
            }
          ],
          "8": [
            {
              "id": 61,
              "amount": 500
            }
          ],
          "9": [
            {
              "id": 25,
              "amount": 600
            }
          ],
          "10": [
            {
              "id": 24,
              "amount": 700
            }
          ],
          "11": [
            {
              "id": 54,
              "amount": 40000
            }
          ],
          "12": [
            {
              "id": 22,
              "amount": 600
            }
          ],
          "13": [
            {
              "id": 55,
              "amount": 50000
            }
          ],
          "14": [
            {
              "id": 23,
              "amount": 700
            }
          ],
          "15": [
            {
              "id": 51,
              "amount": 300000
            }
          ],
          "16": [
            {
              "id": 100,
              "amount": 70000
            }
          ],
          "17": [
            {
              "id": 23,
              "amount": 600
            }
          ],
          "18": [
            {
              "id": 22,
              "amount": 700
            }
          ],
          "19": [
            {
              "id": 102,
              "amount": 600
            }
          ],
          "20": [
            {
              "id": 101,
              "amount": 700
            }
          ],
          "21": [
            {
              "id": 54,
              "amount": 80000
            }
          ],
          "22": [
            {
              "id": 101,
              "amount": 700
            }
          ],
          "23": [
            {
              "id": 102,
              "amount": 800
            }
          ],
          "24": [
            {
              "id": 180,
              "amount": 700
            }
          ],
          "25": [
            {
              "id": 179,
              "amount": 800
            }
          ]
        },
        "requirements": [
          {
            "advance": 1,
            "requirement": 1
          },
          {
            "advance": 3,
            "requirement": 2
          },
          {
            "advance": 6,
            "requirement": 3
          },
          {
            "advance": 10,
            "requirement": 4
          },
          {
            "advance": 15,
            "requirement": 5
          },
          {
            "advance": 20,
            "requirement": 6
          },
          {
            "advance": 25,
            "requirement": 7
          }
        ]
      }
    },
    {
      "id": 940008,
      "name": "金缕叶",
      "hero": "张仲景",
      "icon": "assets/mibao-items/940008.png",
      "maxLevel": 500,
      "baseAttributes": [
        {
          "id": 100,
          "amount": 500
        },
        {
          "id": 54,
          "amount": 500
        },
        {
          "id": 55,
          "amount": 500
        },
        {
          "id": 51,
          "amount": 2500
        }
      ],
      "growthAttributes": [
        {
          "id": 100,
          "amount": 250
        },
        {
          "id": 54,
          "amount": 250
        },
        {
          "id": 55,
          "amount": 250
        },
        {
          "id": 51,
          "amount": 1250
        }
      ],
      "strengthen": {
        "fromLevel": 1,
        "toLevel": 500,
        "costRule": {
          "silverPerLevel": 50000,
          "stoneStart": 10,
          "stoneStep": 5,
          "costItemId": 60085
        },
        "levelsConfigured": 998,
        "upgradeAttributes": [
          {
            "id": 100,
            "amount": 2500
          },
          {
            "id": 54,
            "amount": 2500
          },
          {
            "id": 55,
            "amount": 2500
          },
          {
            "id": 51,
            "amount": 12500
          }
        ],
        "thresholds": [
          {
            "level": 20,
            "costs": [
              {
                "itemId": 60087,
                "amount": 40
              },
              {
                "itemId": 940008,
                "amount": 2
              }
            ]
          },
          {
            "level": 40,
            "costs": [
              {
                "itemId": 60087,
                "amount": 80
              },
              {
                "itemId": 940008,
                "amount": 4
              }
            ]
          },
          {
            "level": 60,
            "costs": [
              {
                "itemId": 60087,
                "amount": 120
              },
              {
                "itemId": 940008,
                "amount": 6
              }
            ]
          },
          {
            "level": 80,
            "costs": [
              {
                "itemId": 60087,
                "amount": 160
              },
              {
                "itemId": 940008,
                "amount": 8
              }
            ]
          },
          {
            "level": 100,
            "costs": [
              {
                "itemId": 60087,
                "amount": 200
              },
              {
                "itemId": 940008,
                "amount": 10
              }
            ]
          },
          {
            "level": 120,
            "costs": [
              {
                "itemId": 60087,
                "amount": 240
              },
              {
                "itemId": 940008,
                "amount": 12
              }
            ]
          },
          {
            "level": 140,
            "costs": [
              {
                "itemId": 60087,
                "amount": 280
              },
              {
                "itemId": 940008,
                "amount": 16
              }
            ]
          },
          {
            "level": 160,
            "costs": [
              {
                "itemId": 60087,
                "amount": 320
              },
              {
                "itemId": 940008,
                "amount": 20
              }
            ]
          },
          {
            "level": 180,
            "costs": [
              {
                "itemId": 60087,
                "amount": 360
              },
              {
                "itemId": 940008,
                "amount": 25
              }
            ]
          },
          {
            "level": 200,
            "costs": [
              {
                "itemId": 60087,
                "amount": 400
              },
              {
                "itemId": 940008,
                "amount": 30
              }
            ]
          },
          {
            "level": 220,
            "costs": [
              {
                "itemId": 60087,
                "amount": 440
              },
              {
                "itemId": 940008,
                "amount": 35
              }
            ]
          },
          {
            "level": 240,
            "costs": [
              {
                "itemId": 60087,
                "amount": 480
              },
              {
                "itemId": 940008,
                "amount": 40
              }
            ]
          },
          {
            "level": 260,
            "costs": [
              {
                "itemId": 60087,
                "amount": 520
              },
              {
                "itemId": 940008,
                "amount": 45
              }
            ]
          },
          {
            "level": 280,
            "costs": [
              {
                "itemId": 60087,
                "amount": 560
              },
              {
                "itemId": 940008,
                "amount": 50
              }
            ]
          },
          {
            "level": 300,
            "costs": [
              {
                "itemId": 60087,
                "amount": 600
              },
              {
                "itemId": 940008,
                "amount": 50
              }
            ]
          },
          {
            "level": 320,
            "costs": [
              {
                "itemId": 60087,
                "amount": 640
              },
              {
                "itemId": 940008,
                "amount": 50
              }
            ]
          },
          {
            "level": 340,
            "costs": [
              {
                "itemId": 60087,
                "amount": 680
              },
              {
                "itemId": 940008,
                "amount": 50
              }
            ]
          },
          {
            "level": 360,
            "costs": [
              {
                "itemId": 60087,
                "amount": 720
              },
              {
                "itemId": 940008,
                "amount": 50
              }
            ]
          },
          {
            "level": 380,
            "costs": [
              {
                "itemId": 60087,
                "amount": 760
              },
              {
                "itemId": 940008,
                "amount": 50
              }
            ]
          },
          {
            "level": 400,
            "costs": [
              {
                "itemId": 60087,
                "amount": 800
              },
              {
                "itemId": 940008,
                "amount": 50
              }
            ]
          },
          {
            "level": 420,
            "costs": [
              {
                "itemId": 60087,
                "amount": 840
              },
              {
                "itemId": 940008,
                "amount": 50
              }
            ]
          },
          {
            "level": 440,
            "costs": [
              {
                "itemId": 60087,
                "amount": 880
              },
              {
                "itemId": 940008,
                "amount": 50
              }
            ]
          },
          {
            "level": 460,
            "costs": [
              {
                "itemId": 60087,
                "amount": 920
              },
              {
                "itemId": 940008,
                "amount": 50
              }
            ]
          },
          {
            "level": 480,
            "costs": [
              {
                "itemId": 60087,
                "amount": 960
              },
              {
                "itemId": 940008,
                "amount": 50
              }
            ]
          },
          {
            "level": 500,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1000
              },
              {
                "itemId": 940008,
                "amount": 50
              }
            ]
          }
        ]
      },
      "advance": {
        "thresholds": [
          {
            "level": 10,
            "costs": [
              {
                "itemId": 60086,
                "amount": 150
              },
              {
                "itemId": 940008,
                "amount": 2
              }
            ]
          },
          {
            "level": 30,
            "costs": [
              {
                "itemId": 60086,
                "amount": 300
              },
              {
                "itemId": 940008,
                "amount": 4
              }
            ]
          },
          {
            "level": 50,
            "costs": [
              {
                "itemId": 60086,
                "amount": 450
              },
              {
                "itemId": 940008,
                "amount": 6
              }
            ]
          },
          {
            "level": 70,
            "costs": [
              {
                "itemId": 60086,
                "amount": 600
              },
              {
                "itemId": 940008,
                "amount": 8
              }
            ]
          },
          {
            "level": 90,
            "costs": [
              {
                "itemId": 60086,
                "amount": 750
              },
              {
                "itemId": 940008,
                "amount": 10
              }
            ]
          },
          {
            "level": 110,
            "costs": [
              {
                "itemId": 60086,
                "amount": 900
              },
              {
                "itemId": 940008,
                "amount": 12
              }
            ]
          },
          {
            "level": 130,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1050
              },
              {
                "itemId": 940008,
                "amount": 16
              }
            ]
          },
          {
            "level": 150,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1200
              },
              {
                "itemId": 940008,
                "amount": 20
              }
            ]
          },
          {
            "level": 170,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1350
              },
              {
                "itemId": 940008,
                "amount": 25
              }
            ]
          },
          {
            "level": 190,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1500
              },
              {
                "itemId": 940008,
                "amount": 30
              }
            ]
          },
          {
            "level": 210,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1650
              },
              {
                "itemId": 940008,
                "amount": 35
              }
            ]
          },
          {
            "level": 230,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1800
              },
              {
                "itemId": 940008,
                "amount": 40
              }
            ]
          },
          {
            "level": 250,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1950
              },
              {
                "itemId": 940008,
                "amount": 45
              }
            ]
          },
          {
            "level": 270,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2100
              },
              {
                "itemId": 940008,
                "amount": 50
              }
            ]
          },
          {
            "level": 290,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2250
              },
              {
                "itemId": 940008,
                "amount": 50
              }
            ]
          },
          {
            "level": 310,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2400
              },
              {
                "itemId": 940008,
                "amount": 50
              }
            ]
          },
          {
            "level": 330,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2550
              },
              {
                "itemId": 940008,
                "amount": 50
              }
            ]
          },
          {
            "level": 350,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2700
              },
              {
                "itemId": 940008,
                "amount": 50
              }
            ]
          },
          {
            "level": 370,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2850
              },
              {
                "itemId": 940008,
                "amount": 50
              }
            ]
          },
          {
            "level": 390,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3000
              },
              {
                "itemId": 940008,
                "amount": 50
              }
            ]
          },
          {
            "level": 410,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3150
              },
              {
                "itemId": 940008,
                "amount": 50
              }
            ]
          },
          {
            "level": 430,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3300
              },
              {
                "itemId": 940008,
                "amount": 50
              }
            ]
          },
          {
            "level": 450,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3450
              },
              {
                "itemId": 940008,
                "amount": 50
              }
            ]
          },
          {
            "level": 470,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3600
              },
              {
                "itemId": 940008,
                "amount": 50
              }
            ]
          },
          {
            "level": 490,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3750
              },
              {
                "itemId": 940008,
                "amount": 50
              }
            ]
          }
        ],
        "attributes": {
          "1": [
            {
              "id": 54,
              "amount": 5000
            }
          ],
          "2": [
            {
              "id": 56,
              "amount": 200
            }
          ],
          "3": [
            {
              "id": 55,
              "amount": 10000
            }
          ],
          "4": [
            {
              "id": 57,
              "amount": 300
            }
          ],
          "5": [
            {
              "id": 51,
              "amount": 100000
            }
          ],
          "6": [
            {
              "id": 60,
              "amount": 400
            }
          ],
          "7": [
            {
              "id": 100,
              "amount": 30000
            }
          ],
          "8": [
            {
              "id": 61,
              "amount": 500
            }
          ],
          "9": [
            {
              "id": 25,
              "amount": 600
            }
          ],
          "10": [
            {
              "id": 24,
              "amount": 700
            }
          ],
          "11": [
            {
              "id": 54,
              "amount": 40000
            }
          ],
          "12": [
            {
              "id": 22,
              "amount": 600
            }
          ],
          "13": [
            {
              "id": 55,
              "amount": 50000
            }
          ],
          "14": [
            {
              "id": 23,
              "amount": 700
            }
          ],
          "15": [
            {
              "id": 51,
              "amount": 300000
            }
          ],
          "16": [
            {
              "id": 100,
              "amount": 70000
            }
          ],
          "17": [
            {
              "id": 23,
              "amount": 600
            }
          ],
          "18": [
            {
              "id": 22,
              "amount": 700
            }
          ],
          "19": [
            {
              "id": 102,
              "amount": 600
            }
          ],
          "20": [
            {
              "id": 101,
              "amount": 700
            }
          ],
          "21": [
            {
              "id": 54,
              "amount": 80000
            }
          ],
          "22": [
            {
              "id": 101,
              "amount": 700
            }
          ],
          "23": [
            {
              "id": 102,
              "amount": 800
            }
          ],
          "24": [
            {
              "id": 180,
              "amount": 700
            }
          ],
          "25": [
            {
              "id": 179,
              "amount": 800
            }
          ]
        },
        "requirements": [
          {
            "advance": 1,
            "requirement": 1
          },
          {
            "advance": 3,
            "requirement": 2
          },
          {
            "advance": 6,
            "requirement": 3
          },
          {
            "advance": 10,
            "requirement": 4
          },
          {
            "advance": 15,
            "requirement": 5
          },
          {
            "advance": 20,
            "requirement": 6
          },
          {
            "advance": 25,
            "requirement": 7
          }
        ]
      }
    },
    {
      "id": 940009,
      "name": "玉凤佩",
      "hero": "郭嘉",
      "icon": "assets/mibao-items/940009.png",
      "maxLevel": 500,
      "baseAttributes": [
        {
          "id": 100,
          "amount": 500
        },
        {
          "id": 54,
          "amount": 500
        },
        {
          "id": 55,
          "amount": 500
        },
        {
          "id": 51,
          "amount": 2500
        }
      ],
      "growthAttributes": [
        {
          "id": 100,
          "amount": 250
        },
        {
          "id": 54,
          "amount": 250
        },
        {
          "id": 55,
          "amount": 250
        },
        {
          "id": 51,
          "amount": 1250
        }
      ],
      "strengthen": {
        "fromLevel": 1,
        "toLevel": 500,
        "costRule": {
          "silverPerLevel": 50000,
          "stoneStart": 10,
          "stoneStep": 5,
          "costItemId": 60085
        },
        "levelsConfigured": 998,
        "upgradeAttributes": [
          {
            "id": 100,
            "amount": 2500
          },
          {
            "id": 54,
            "amount": 2500
          },
          {
            "id": 55,
            "amount": 2500
          },
          {
            "id": 51,
            "amount": 12500
          }
        ],
        "thresholds": [
          {
            "level": 20,
            "costs": [
              {
                "itemId": 60087,
                "amount": 30
              },
              {
                "itemId": 940009,
                "amount": 2
              }
            ]
          },
          {
            "level": 40,
            "costs": [
              {
                "itemId": 60087,
                "amount": 60
              },
              {
                "itemId": 940009,
                "amount": 4
              }
            ]
          },
          {
            "level": 60,
            "costs": [
              {
                "itemId": 60087,
                "amount": 90
              },
              {
                "itemId": 940009,
                "amount": 6
              }
            ]
          },
          {
            "level": 80,
            "costs": [
              {
                "itemId": 60087,
                "amount": 120
              },
              {
                "itemId": 940009,
                "amount": 8
              }
            ]
          },
          {
            "level": 100,
            "costs": [
              {
                "itemId": 60087,
                "amount": 150
              },
              {
                "itemId": 940009,
                "amount": 10
              }
            ]
          },
          {
            "level": 120,
            "costs": [
              {
                "itemId": 60087,
                "amount": 180
              },
              {
                "itemId": 940009,
                "amount": 12
              }
            ]
          },
          {
            "level": 140,
            "costs": [
              {
                "itemId": 60087,
                "amount": 210
              },
              {
                "itemId": 940009,
                "amount": 16
              }
            ]
          },
          {
            "level": 160,
            "costs": [
              {
                "itemId": 60087,
                "amount": 240
              },
              {
                "itemId": 940009,
                "amount": 20
              }
            ]
          },
          {
            "level": 180,
            "costs": [
              {
                "itemId": 60087,
                "amount": 270
              },
              {
                "itemId": 940009,
                "amount": 25
              }
            ]
          },
          {
            "level": 200,
            "costs": [
              {
                "itemId": 60087,
                "amount": 300
              },
              {
                "itemId": 940009,
                "amount": 30
              }
            ]
          },
          {
            "level": 220,
            "costs": [
              {
                "itemId": 60087,
                "amount": 330
              },
              {
                "itemId": 940009,
                "amount": 35
              }
            ]
          },
          {
            "level": 240,
            "costs": [
              {
                "itemId": 60087,
                "amount": 360
              },
              {
                "itemId": 940009,
                "amount": 40
              }
            ]
          },
          {
            "level": 260,
            "costs": [
              {
                "itemId": 60087,
                "amount": 390
              },
              {
                "itemId": 940009,
                "amount": 45
              }
            ]
          },
          {
            "level": 280,
            "costs": [
              {
                "itemId": 60087,
                "amount": 420
              },
              {
                "itemId": 940009,
                "amount": 50
              }
            ]
          },
          {
            "level": 300,
            "costs": [
              {
                "itemId": 60087,
                "amount": 450
              },
              {
                "itemId": 940009,
                "amount": 50
              }
            ]
          },
          {
            "level": 320,
            "costs": [
              {
                "itemId": 60087,
                "amount": 480
              },
              {
                "itemId": 940009,
                "amount": 50
              }
            ]
          },
          {
            "level": 340,
            "costs": [
              {
                "itemId": 60087,
                "amount": 510
              },
              {
                "itemId": 940009,
                "amount": 50
              }
            ]
          },
          {
            "level": 360,
            "costs": [
              {
                "itemId": 60087,
                "amount": 540
              },
              {
                "itemId": 940009,
                "amount": 50
              }
            ]
          },
          {
            "level": 380,
            "costs": [
              {
                "itemId": 60087,
                "amount": 570
              },
              {
                "itemId": 940009,
                "amount": 50
              }
            ]
          },
          {
            "level": 400,
            "costs": [
              {
                "itemId": 60087,
                "amount": 600
              },
              {
                "itemId": 940009,
                "amount": 50
              }
            ]
          },
          {
            "level": 420,
            "costs": [
              {
                "itemId": 60087,
                "amount": 630
              },
              {
                "itemId": 940009,
                "amount": 50
              }
            ]
          },
          {
            "level": 440,
            "costs": [
              {
                "itemId": 60087,
                "amount": 660
              },
              {
                "itemId": 940009,
                "amount": 50
              }
            ]
          },
          {
            "level": 460,
            "costs": [
              {
                "itemId": 60087,
                "amount": 690
              },
              {
                "itemId": 940009,
                "amount": 50
              }
            ]
          },
          {
            "level": 480,
            "costs": [
              {
                "itemId": 60087,
                "amount": 720
              },
              {
                "itemId": 940009,
                "amount": 50
              }
            ]
          },
          {
            "level": 500,
            "costs": [
              {
                "itemId": 60087,
                "amount": 750
              },
              {
                "itemId": 940009,
                "amount": 50
              }
            ]
          }
        ]
      },
      "advance": {
        "thresholds": [
          {
            "level": 10,
            "costs": [
              {
                "itemId": 60086,
                "amount": 150
              },
              {
                "itemId": 940009,
                "amount": 2
              }
            ]
          },
          {
            "level": 30,
            "costs": [
              {
                "itemId": 60086,
                "amount": 300
              },
              {
                "itemId": 940009,
                "amount": 4
              }
            ]
          },
          {
            "level": 50,
            "costs": [
              {
                "itemId": 60086,
                "amount": 450
              },
              {
                "itemId": 940009,
                "amount": 6
              }
            ]
          },
          {
            "level": 70,
            "costs": [
              {
                "itemId": 60086,
                "amount": 600
              },
              {
                "itemId": 940009,
                "amount": 8
              }
            ]
          },
          {
            "level": 90,
            "costs": [
              {
                "itemId": 60086,
                "amount": 750
              },
              {
                "itemId": 940009,
                "amount": 10
              }
            ]
          },
          {
            "level": 110,
            "costs": [
              {
                "itemId": 60086,
                "amount": 900
              },
              {
                "itemId": 940009,
                "amount": 12
              }
            ]
          },
          {
            "level": 130,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1050
              },
              {
                "itemId": 940009,
                "amount": 16
              }
            ]
          },
          {
            "level": 150,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1200
              },
              {
                "itemId": 940009,
                "amount": 20
              }
            ]
          },
          {
            "level": 170,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1350
              },
              {
                "itemId": 940009,
                "amount": 25
              }
            ]
          },
          {
            "level": 190,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1500
              },
              {
                "itemId": 940009,
                "amount": 30
              }
            ]
          },
          {
            "level": 210,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1650
              },
              {
                "itemId": 940009,
                "amount": 35
              }
            ]
          },
          {
            "level": 230,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1800
              },
              {
                "itemId": 940009,
                "amount": 40
              }
            ]
          },
          {
            "level": 250,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1950
              },
              {
                "itemId": 940009,
                "amount": 45
              }
            ]
          },
          {
            "level": 270,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2100
              },
              {
                "itemId": 940009,
                "amount": 50
              }
            ]
          },
          {
            "level": 290,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2250
              },
              {
                "itemId": 940009,
                "amount": 50
              }
            ]
          },
          {
            "level": 310,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2400
              },
              {
                "itemId": 940009,
                "amount": 50
              }
            ]
          },
          {
            "level": 330,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2550
              },
              {
                "itemId": 940009,
                "amount": 50
              }
            ]
          },
          {
            "level": 350,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2700
              },
              {
                "itemId": 940009,
                "amount": 50
              }
            ]
          },
          {
            "level": 370,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2850
              },
              {
                "itemId": 940009,
                "amount": 50
              }
            ]
          },
          {
            "level": 390,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3000
              },
              {
                "itemId": 940009,
                "amount": 50
              }
            ]
          },
          {
            "level": 410,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3150
              },
              {
                "itemId": 940009,
                "amount": 50
              }
            ]
          },
          {
            "level": 430,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3300
              },
              {
                "itemId": 940009,
                "amount": 50
              }
            ]
          },
          {
            "level": 450,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3450
              },
              {
                "itemId": 940009,
                "amount": 50
              }
            ]
          },
          {
            "level": 470,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3600
              },
              {
                "itemId": 940009,
                "amount": 50
              }
            ]
          },
          {
            "level": 490,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3750
              },
              {
                "itemId": 940009,
                "amount": 50
              }
            ]
          }
        ],
        "attributes": {
          "1": [
            {
              "id": 54,
              "amount": 5000
            }
          ],
          "2": [
            {
              "id": 56,
              "amount": 100
            }
          ],
          "3": [
            {
              "id": 55,
              "amount": 10000
            }
          ],
          "4": [
            {
              "id": 57,
              "amount": 200
            }
          ],
          "5": [
            {
              "id": 51,
              "amount": 100000
            }
          ],
          "6": [
            {
              "id": 60,
              "amount": 300
            }
          ],
          "7": [
            {
              "id": 100,
              "amount": 30000
            }
          ],
          "8": [
            {
              "id": 61,
              "amount": 400
            }
          ],
          "9": [
            {
              "id": 25,
              "amount": 500
            }
          ],
          "10": [
            {
              "id": 24,
              "amount": 600
            }
          ],
          "11": [
            {
              "id": 54,
              "amount": 40000
            }
          ],
          "12": [
            {
              "id": 22,
              "amount": 500
            }
          ],
          "13": [
            {
              "id": 55,
              "amount": 50000
            }
          ],
          "14": [
            {
              "id": 23,
              "amount": 600
            }
          ],
          "15": [
            {
              "id": 51,
              "amount": 300000
            }
          ],
          "16": [
            {
              "id": 100,
              "amount": 70000
            }
          ],
          "17": [
            {
              "id": 23,
              "amount": 500
            }
          ],
          "18": [
            {
              "id": 22,
              "amount": 600
            }
          ],
          "19": [
            {
              "id": 102,
              "amount": 500
            }
          ],
          "20": [
            {
              "id": 101,
              "amount": 600
            }
          ],
          "21": [
            {
              "id": 54,
              "amount": 80000
            }
          ],
          "22": [
            {
              "id": 101,
              "amount": 600
            }
          ],
          "23": [
            {
              "id": 102,
              "amount": 700
            }
          ],
          "24": [
            {
              "id": 180,
              "amount": 600
            }
          ],
          "25": [
            {
              "id": 179,
              "amount": 700
            }
          ]
        },
        "requirements": [
          {
            "advance": 1,
            "requirement": 1
          },
          {
            "advance": 3,
            "requirement": 2
          },
          {
            "advance": 6,
            "requirement": 3
          },
          {
            "advance": 10,
            "requirement": 4
          },
          {
            "advance": 15,
            "requirement": 5
          },
          {
            "advance": 20,
            "requirement": 6
          },
          {
            "advance": 25,
            "requirement": 7
          }
        ]
      }
    },
    {
      "id": 940010,
      "name": "麒麟臂",
      "hero": "马超",
      "icon": "assets/mibao-items/940010.png",
      "maxLevel": 500,
      "baseAttributes": [
        {
          "id": 100,
          "amount": 500
        },
        {
          "id": 54,
          "amount": 500
        },
        {
          "id": 55,
          "amount": 500
        },
        {
          "id": 51,
          "amount": 2500
        }
      ],
      "growthAttributes": [
        {
          "id": 100,
          "amount": 250
        },
        {
          "id": 54,
          "amount": 250
        },
        {
          "id": 55,
          "amount": 250
        },
        {
          "id": 51,
          "amount": 1250
        }
      ],
      "strengthen": {
        "fromLevel": 1,
        "toLevel": 500,
        "costRule": {
          "silverPerLevel": 50000,
          "stoneStart": 10,
          "stoneStep": 5,
          "costItemId": 60085
        },
        "levelsConfigured": 998,
        "upgradeAttributes": [
          {
            "id": 100,
            "amount": 2500
          },
          {
            "id": 54,
            "amount": 2500
          },
          {
            "id": 55,
            "amount": 2500
          },
          {
            "id": 51,
            "amount": 12500
          }
        ],
        "thresholds": [
          {
            "level": 20,
            "costs": [
              {
                "itemId": 60087,
                "amount": 30
              },
              {
                "itemId": 940010,
                "amount": 2
              }
            ]
          },
          {
            "level": 40,
            "costs": [
              {
                "itemId": 60087,
                "amount": 60
              },
              {
                "itemId": 940010,
                "amount": 4
              }
            ]
          },
          {
            "level": 60,
            "costs": [
              {
                "itemId": 60087,
                "amount": 90
              },
              {
                "itemId": 940010,
                "amount": 6
              }
            ]
          },
          {
            "level": 80,
            "costs": [
              {
                "itemId": 60087,
                "amount": 120
              },
              {
                "itemId": 940010,
                "amount": 8
              }
            ]
          },
          {
            "level": 100,
            "costs": [
              {
                "itemId": 60087,
                "amount": 150
              },
              {
                "itemId": 940010,
                "amount": 10
              }
            ]
          },
          {
            "level": 120,
            "costs": [
              {
                "itemId": 60087,
                "amount": 180
              },
              {
                "itemId": 940010,
                "amount": 12
              }
            ]
          },
          {
            "level": 140,
            "costs": [
              {
                "itemId": 60087,
                "amount": 210
              },
              {
                "itemId": 940010,
                "amount": 16
              }
            ]
          },
          {
            "level": 160,
            "costs": [
              {
                "itemId": 60087,
                "amount": 240
              },
              {
                "itemId": 940010,
                "amount": 20
              }
            ]
          },
          {
            "level": 180,
            "costs": [
              {
                "itemId": 60087,
                "amount": 270
              },
              {
                "itemId": 940010,
                "amount": 25
              }
            ]
          },
          {
            "level": 200,
            "costs": [
              {
                "itemId": 60087,
                "amount": 300
              },
              {
                "itemId": 940010,
                "amount": 30
              }
            ]
          },
          {
            "level": 220,
            "costs": [
              {
                "itemId": 60087,
                "amount": 330
              },
              {
                "itemId": 940010,
                "amount": 35
              }
            ]
          },
          {
            "level": 240,
            "costs": [
              {
                "itemId": 60087,
                "amount": 360
              },
              {
                "itemId": 940010,
                "amount": 40
              }
            ]
          },
          {
            "level": 260,
            "costs": [
              {
                "itemId": 60087,
                "amount": 390
              },
              {
                "itemId": 940010,
                "amount": 45
              }
            ]
          },
          {
            "level": 280,
            "costs": [
              {
                "itemId": 60087,
                "amount": 420
              },
              {
                "itemId": 940010,
                "amount": 50
              }
            ]
          },
          {
            "level": 300,
            "costs": [
              {
                "itemId": 60087,
                "amount": 450
              },
              {
                "itemId": 940010,
                "amount": 50
              }
            ]
          },
          {
            "level": 320,
            "costs": [
              {
                "itemId": 60087,
                "amount": 480
              },
              {
                "itemId": 940010,
                "amount": 50
              }
            ]
          },
          {
            "level": 340,
            "costs": [
              {
                "itemId": 60087,
                "amount": 510
              },
              {
                "itemId": 940010,
                "amount": 50
              }
            ]
          },
          {
            "level": 360,
            "costs": [
              {
                "itemId": 60087,
                "amount": 540
              },
              {
                "itemId": 940010,
                "amount": 50
              }
            ]
          },
          {
            "level": 380,
            "costs": [
              {
                "itemId": 60087,
                "amount": 570
              },
              {
                "itemId": 940010,
                "amount": 50
              }
            ]
          },
          {
            "level": 400,
            "costs": [
              {
                "itemId": 60087,
                "amount": 600
              },
              {
                "itemId": 940010,
                "amount": 50
              }
            ]
          },
          {
            "level": 420,
            "costs": [
              {
                "itemId": 60087,
                "amount": 630
              },
              {
                "itemId": 940010,
                "amount": 50
              }
            ]
          },
          {
            "level": 440,
            "costs": [
              {
                "itemId": 60087,
                "amount": 660
              },
              {
                "itemId": 940010,
                "amount": 50
              }
            ]
          },
          {
            "level": 460,
            "costs": [
              {
                "itemId": 60087,
                "amount": 690
              },
              {
                "itemId": 940010,
                "amount": 50
              }
            ]
          },
          {
            "level": 480,
            "costs": [
              {
                "itemId": 60087,
                "amount": 720
              },
              {
                "itemId": 940010,
                "amount": 50
              }
            ]
          },
          {
            "level": 500,
            "costs": [
              {
                "itemId": 60087,
                "amount": 750
              },
              {
                "itemId": 940010,
                "amount": 50
              }
            ]
          }
        ]
      },
      "advance": {
        "thresholds": [
          {
            "level": 10,
            "costs": [
              {
                "itemId": 60086,
                "amount": 150
              },
              {
                "itemId": 940010,
                "amount": 2
              }
            ]
          },
          {
            "level": 30,
            "costs": [
              {
                "itemId": 60086,
                "amount": 300
              },
              {
                "itemId": 940010,
                "amount": 4
              }
            ]
          },
          {
            "level": 50,
            "costs": [
              {
                "itemId": 60086,
                "amount": 450
              },
              {
                "itemId": 940010,
                "amount": 6
              }
            ]
          },
          {
            "level": 70,
            "costs": [
              {
                "itemId": 60086,
                "amount": 600
              },
              {
                "itemId": 940010,
                "amount": 8
              }
            ]
          },
          {
            "level": 90,
            "costs": [
              {
                "itemId": 60086,
                "amount": 750
              },
              {
                "itemId": 940010,
                "amount": 10
              }
            ]
          },
          {
            "level": 110,
            "costs": [
              {
                "itemId": 60086,
                "amount": 900
              },
              {
                "itemId": 940010,
                "amount": 12
              }
            ]
          },
          {
            "level": 130,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1050
              },
              {
                "itemId": 940010,
                "amount": 16
              }
            ]
          },
          {
            "level": 150,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1200
              },
              {
                "itemId": 940010,
                "amount": 20
              }
            ]
          },
          {
            "level": 170,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1350
              },
              {
                "itemId": 940010,
                "amount": 25
              }
            ]
          },
          {
            "level": 190,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1500
              },
              {
                "itemId": 940010,
                "amount": 30
              }
            ]
          },
          {
            "level": 210,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1650
              },
              {
                "itemId": 940010,
                "amount": 35
              }
            ]
          },
          {
            "level": 230,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1800
              },
              {
                "itemId": 940010,
                "amount": 40
              }
            ]
          },
          {
            "level": 250,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1950
              },
              {
                "itemId": 940010,
                "amount": 45
              }
            ]
          },
          {
            "level": 270,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2100
              },
              {
                "itemId": 940010,
                "amount": 50
              }
            ]
          },
          {
            "level": 290,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2250
              },
              {
                "itemId": 940010,
                "amount": 50
              }
            ]
          },
          {
            "level": 310,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2400
              },
              {
                "itemId": 940010,
                "amount": 50
              }
            ]
          },
          {
            "level": 330,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2550
              },
              {
                "itemId": 940010,
                "amount": 50
              }
            ]
          },
          {
            "level": 350,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2700
              },
              {
                "itemId": 940010,
                "amount": 50
              }
            ]
          },
          {
            "level": 370,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2850
              },
              {
                "itemId": 940010,
                "amount": 50
              }
            ]
          },
          {
            "level": 390,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3000
              },
              {
                "itemId": 940010,
                "amount": 50
              }
            ]
          },
          {
            "level": 410,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3150
              },
              {
                "itemId": 940010,
                "amount": 50
              }
            ]
          },
          {
            "level": 430,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3300
              },
              {
                "itemId": 940010,
                "amount": 50
              }
            ]
          },
          {
            "level": 450,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3450
              },
              {
                "itemId": 940010,
                "amount": 50
              }
            ]
          },
          {
            "level": 470,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3600
              },
              {
                "itemId": 940010,
                "amount": 50
              }
            ]
          },
          {
            "level": 490,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3750
              },
              {
                "itemId": 940010,
                "amount": 50
              }
            ]
          }
        ],
        "attributes": {
          "1": [
            {
              "id": 54,
              "amount": 5000
            }
          ],
          "2": [
            {
              "id": 56,
              "amount": 100
            }
          ],
          "3": [
            {
              "id": 55,
              "amount": 10000
            }
          ],
          "4": [
            {
              "id": 57,
              "amount": 200
            }
          ],
          "5": [
            {
              "id": 51,
              "amount": 100000
            }
          ],
          "6": [
            {
              "id": 60,
              "amount": 300
            }
          ],
          "7": [
            {
              "id": 100,
              "amount": 30000
            }
          ],
          "8": [
            {
              "id": 61,
              "amount": 400
            }
          ],
          "9": [
            {
              "id": 25,
              "amount": 500
            }
          ],
          "10": [
            {
              "id": 24,
              "amount": 600
            }
          ],
          "11": [
            {
              "id": 54,
              "amount": 40000
            }
          ],
          "12": [
            {
              "id": 22,
              "amount": 500
            }
          ],
          "13": [
            {
              "id": 55,
              "amount": 50000
            }
          ],
          "14": [
            {
              "id": 23,
              "amount": 600
            }
          ],
          "15": [
            {
              "id": 51,
              "amount": 300000
            }
          ],
          "16": [
            {
              "id": 100,
              "amount": 70000
            }
          ],
          "17": [
            {
              "id": 23,
              "amount": 500
            }
          ],
          "18": [
            {
              "id": 22,
              "amount": 600
            }
          ],
          "19": [
            {
              "id": 102,
              "amount": 500
            }
          ],
          "20": [
            {
              "id": 101,
              "amount": 600
            }
          ],
          "21": [
            {
              "id": 54,
              "amount": 80000
            }
          ],
          "22": [
            {
              "id": 101,
              "amount": 600
            }
          ],
          "23": [
            {
              "id": 102,
              "amount": 700
            }
          ],
          "24": [
            {
              "id": 180,
              "amount": 600
            }
          ],
          "25": [
            {
              "id": 179,
              "amount": 700
            }
          ]
        },
        "requirements": [
          {
            "advance": 1,
            "requirement": 1
          },
          {
            "advance": 3,
            "requirement": 2
          },
          {
            "advance": 6,
            "requirement": 3
          },
          {
            "advance": 10,
            "requirement": 4
          },
          {
            "advance": 15,
            "requirement": 5
          },
          {
            "advance": 20,
            "requirement": 6
          },
          {
            "advance": 25,
            "requirement": 7
          }
        ]
      }
    },
    {
      "id": 940011,
      "name": "螭龙护臂",
      "hero": "太史慈",
      "icon": "assets/mibao-items/940011.png",
      "maxLevel": 500,
      "baseAttributes": [
        {
          "id": 100,
          "amount": 500
        },
        {
          "id": 54,
          "amount": 500
        },
        {
          "id": 55,
          "amount": 500
        },
        {
          "id": 51,
          "amount": 2500
        }
      ],
      "growthAttributes": [
        {
          "id": 100,
          "amount": 250
        },
        {
          "id": 54,
          "amount": 250
        },
        {
          "id": 55,
          "amount": 250
        },
        {
          "id": 51,
          "amount": 1250
        }
      ],
      "strengthen": {
        "fromLevel": 1,
        "toLevel": 500,
        "costRule": {
          "silverPerLevel": 50000,
          "stoneStart": 10,
          "stoneStep": 5,
          "costItemId": 60085
        },
        "levelsConfigured": 998,
        "upgradeAttributes": [
          {
            "id": 100,
            "amount": 2500
          },
          {
            "id": 54,
            "amount": 2500
          },
          {
            "id": 55,
            "amount": 2500
          },
          {
            "id": 51,
            "amount": 12500
          }
        ],
        "thresholds": [
          {
            "level": 20,
            "costs": [
              {
                "itemId": 60087,
                "amount": 30
              },
              {
                "itemId": 940011,
                "amount": 2
              }
            ]
          },
          {
            "level": 40,
            "costs": [
              {
                "itemId": 60087,
                "amount": 60
              },
              {
                "itemId": 940011,
                "amount": 4
              }
            ]
          },
          {
            "level": 60,
            "costs": [
              {
                "itemId": 60087,
                "amount": 90
              },
              {
                "itemId": 940011,
                "amount": 6
              }
            ]
          },
          {
            "level": 80,
            "costs": [
              {
                "itemId": 60087,
                "amount": 120
              },
              {
                "itemId": 940011,
                "amount": 8
              }
            ]
          },
          {
            "level": 100,
            "costs": [
              {
                "itemId": 60087,
                "amount": 150
              },
              {
                "itemId": 940011,
                "amount": 10
              }
            ]
          },
          {
            "level": 120,
            "costs": [
              {
                "itemId": 60087,
                "amount": 180
              },
              {
                "itemId": 940011,
                "amount": 12
              }
            ]
          },
          {
            "level": 140,
            "costs": [
              {
                "itemId": 60087,
                "amount": 210
              },
              {
                "itemId": 940011,
                "amount": 16
              }
            ]
          },
          {
            "level": 160,
            "costs": [
              {
                "itemId": 60087,
                "amount": 240
              },
              {
                "itemId": 940011,
                "amount": 20
              }
            ]
          },
          {
            "level": 180,
            "costs": [
              {
                "itemId": 60087,
                "amount": 270
              },
              {
                "itemId": 940011,
                "amount": 25
              }
            ]
          },
          {
            "level": 200,
            "costs": [
              {
                "itemId": 60087,
                "amount": 300
              },
              {
                "itemId": 940011,
                "amount": 30
              }
            ]
          },
          {
            "level": 220,
            "costs": [
              {
                "itemId": 60087,
                "amount": 330
              },
              {
                "itemId": 940011,
                "amount": 35
              }
            ]
          },
          {
            "level": 240,
            "costs": [
              {
                "itemId": 60087,
                "amount": 360
              },
              {
                "itemId": 940011,
                "amount": 40
              }
            ]
          },
          {
            "level": 260,
            "costs": [
              {
                "itemId": 60087,
                "amount": 390
              },
              {
                "itemId": 940011,
                "amount": 45
              }
            ]
          },
          {
            "level": 280,
            "costs": [
              {
                "itemId": 60087,
                "amount": 420
              },
              {
                "itemId": 940011,
                "amount": 50
              }
            ]
          },
          {
            "level": 300,
            "costs": [
              {
                "itemId": 60087,
                "amount": 450
              },
              {
                "itemId": 940011,
                "amount": 50
              }
            ]
          },
          {
            "level": 320,
            "costs": [
              {
                "itemId": 60087,
                "amount": 480
              },
              {
                "itemId": 940011,
                "amount": 50
              }
            ]
          },
          {
            "level": 340,
            "costs": [
              {
                "itemId": 60087,
                "amount": 510
              },
              {
                "itemId": 940011,
                "amount": 50
              }
            ]
          },
          {
            "level": 360,
            "costs": [
              {
                "itemId": 60087,
                "amount": 540
              },
              {
                "itemId": 940011,
                "amount": 50
              }
            ]
          },
          {
            "level": 380,
            "costs": [
              {
                "itemId": 60087,
                "amount": 570
              },
              {
                "itemId": 940011,
                "amount": 50
              }
            ]
          },
          {
            "level": 400,
            "costs": [
              {
                "itemId": 60087,
                "amount": 600
              },
              {
                "itemId": 940011,
                "amount": 50
              }
            ]
          },
          {
            "level": 420,
            "costs": [
              {
                "itemId": 60087,
                "amount": 630
              },
              {
                "itemId": 940011,
                "amount": 50
              }
            ]
          },
          {
            "level": 440,
            "costs": [
              {
                "itemId": 60087,
                "amount": 660
              },
              {
                "itemId": 940011,
                "amount": 50
              }
            ]
          },
          {
            "level": 460,
            "costs": [
              {
                "itemId": 60087,
                "amount": 690
              },
              {
                "itemId": 940011,
                "amount": 50
              }
            ]
          },
          {
            "level": 480,
            "costs": [
              {
                "itemId": 60087,
                "amount": 720
              },
              {
                "itemId": 940011,
                "amount": 50
              }
            ]
          },
          {
            "level": 500,
            "costs": [
              {
                "itemId": 60087,
                "amount": 750
              },
              {
                "itemId": 940011,
                "amount": 50
              }
            ]
          }
        ]
      },
      "advance": {
        "thresholds": [
          {
            "level": 10,
            "costs": [
              {
                "itemId": 60086,
                "amount": 150
              },
              {
                "itemId": 940011,
                "amount": 2
              }
            ]
          },
          {
            "level": 30,
            "costs": [
              {
                "itemId": 60086,
                "amount": 300
              },
              {
                "itemId": 940011,
                "amount": 4
              }
            ]
          },
          {
            "level": 50,
            "costs": [
              {
                "itemId": 60086,
                "amount": 450
              },
              {
                "itemId": 940011,
                "amount": 6
              }
            ]
          },
          {
            "level": 70,
            "costs": [
              {
                "itemId": 60086,
                "amount": 600
              },
              {
                "itemId": 940011,
                "amount": 8
              }
            ]
          },
          {
            "level": 90,
            "costs": [
              {
                "itemId": 60086,
                "amount": 750
              },
              {
                "itemId": 940011,
                "amount": 10
              }
            ]
          },
          {
            "level": 110,
            "costs": [
              {
                "itemId": 60086,
                "amount": 900
              },
              {
                "itemId": 940011,
                "amount": 12
              }
            ]
          },
          {
            "level": 130,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1050
              },
              {
                "itemId": 940011,
                "amount": 16
              }
            ]
          },
          {
            "level": 150,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1200
              },
              {
                "itemId": 940011,
                "amount": 20
              }
            ]
          },
          {
            "level": 170,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1350
              },
              {
                "itemId": 940011,
                "amount": 25
              }
            ]
          },
          {
            "level": 190,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1500
              },
              {
                "itemId": 940011,
                "amount": 30
              }
            ]
          },
          {
            "level": 210,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1650
              },
              {
                "itemId": 940011,
                "amount": 35
              }
            ]
          },
          {
            "level": 230,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1800
              },
              {
                "itemId": 940011,
                "amount": 40
              }
            ]
          },
          {
            "level": 250,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1950
              },
              {
                "itemId": 940011,
                "amount": 45
              }
            ]
          },
          {
            "level": 270,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2100
              },
              {
                "itemId": 940011,
                "amount": 50
              }
            ]
          },
          {
            "level": 290,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2250
              },
              {
                "itemId": 940011,
                "amount": 50
              }
            ]
          },
          {
            "level": 310,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2400
              },
              {
                "itemId": 940011,
                "amount": 50
              }
            ]
          },
          {
            "level": 330,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2550
              },
              {
                "itemId": 940011,
                "amount": 50
              }
            ]
          },
          {
            "level": 350,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2700
              },
              {
                "itemId": 940011,
                "amount": 50
              }
            ]
          },
          {
            "level": 370,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2850
              },
              {
                "itemId": 940011,
                "amount": 50
              }
            ]
          },
          {
            "level": 390,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3000
              },
              {
                "itemId": 940011,
                "amount": 50
              }
            ]
          },
          {
            "level": 410,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3150
              },
              {
                "itemId": 940011,
                "amount": 50
              }
            ]
          },
          {
            "level": 430,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3300
              },
              {
                "itemId": 940011,
                "amount": 50
              }
            ]
          },
          {
            "level": 450,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3450
              },
              {
                "itemId": 940011,
                "amount": 50
              }
            ]
          },
          {
            "level": 470,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3600
              },
              {
                "itemId": 940011,
                "amount": 50
              }
            ]
          },
          {
            "level": 490,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3750
              },
              {
                "itemId": 940011,
                "amount": 50
              }
            ]
          }
        ],
        "attributes": {
          "1": [
            {
              "id": 54,
              "amount": 5000
            }
          ],
          "2": [
            {
              "id": 56,
              "amount": 100
            }
          ],
          "3": [
            {
              "id": 55,
              "amount": 10000
            }
          ],
          "4": [
            {
              "id": 57,
              "amount": 200
            }
          ],
          "5": [
            {
              "id": 51,
              "amount": 100000
            }
          ],
          "6": [
            {
              "id": 60,
              "amount": 300
            }
          ],
          "7": [
            {
              "id": 100,
              "amount": 30000
            }
          ],
          "8": [
            {
              "id": 61,
              "amount": 400
            }
          ],
          "9": [
            {
              "id": 25,
              "amount": 500
            }
          ],
          "10": [
            {
              "id": 24,
              "amount": 600
            }
          ],
          "11": [
            {
              "id": 54,
              "amount": 40000
            }
          ],
          "12": [
            {
              "id": 22,
              "amount": 500
            }
          ],
          "13": [
            {
              "id": 55,
              "amount": 50000
            }
          ],
          "14": [
            {
              "id": 23,
              "amount": 600
            }
          ],
          "15": [
            {
              "id": 51,
              "amount": 300000
            }
          ],
          "16": [
            {
              "id": 100,
              "amount": 70000
            }
          ],
          "17": [
            {
              "id": 23,
              "amount": 500
            }
          ],
          "18": [
            {
              "id": 22,
              "amount": 600
            }
          ],
          "19": [
            {
              "id": 102,
              "amount": 500
            }
          ],
          "20": [
            {
              "id": 101,
              "amount": 600
            }
          ],
          "21": [
            {
              "id": 54,
              "amount": 80000
            }
          ],
          "22": [
            {
              "id": 101,
              "amount": 600
            }
          ],
          "23": [
            {
              "id": 102,
              "amount": 700
            }
          ],
          "24": [
            {
              "id": 180,
              "amount": 600
            }
          ],
          "25": [
            {
              "id": 179,
              "amount": 700
            }
          ]
        },
        "requirements": [
          {
            "advance": 1,
            "requirement": 1
          },
          {
            "advance": 3,
            "requirement": 2
          },
          {
            "advance": 6,
            "requirement": 3
          },
          {
            "advance": 10,
            "requirement": 4
          },
          {
            "advance": 15,
            "requirement": 5
          },
          {
            "advance": 20,
            "requirement": 6
          },
          {
            "advance": 25,
            "requirement": 7
          }
        ]
      }
    },
    {
      "id": 940012,
      "name": "凤灵冠",
      "hero": "貂蝉",
      "icon": "assets/mibao-items/940012.png",
      "maxLevel": 500,
      "baseAttributes": [
        {
          "id": 100,
          "amount": 500
        },
        {
          "id": 54,
          "amount": 500
        },
        {
          "id": 55,
          "amount": 500
        },
        {
          "id": 51,
          "amount": 2500
        }
      ],
      "growthAttributes": [
        {
          "id": 100,
          "amount": 250
        },
        {
          "id": 54,
          "amount": 250
        },
        {
          "id": 55,
          "amount": 250
        },
        {
          "id": 51,
          "amount": 1250
        }
      ],
      "strengthen": {
        "fromLevel": 1,
        "toLevel": 500,
        "costRule": {
          "silverPerLevel": 50000,
          "stoneStart": 10,
          "stoneStep": 5,
          "costItemId": 60085
        },
        "levelsConfigured": 998,
        "upgradeAttributes": [
          {
            "id": 100,
            "amount": 2500
          },
          {
            "id": 54,
            "amount": 2500
          },
          {
            "id": 55,
            "amount": 2500
          },
          {
            "id": 51,
            "amount": 12500
          }
        ],
        "thresholds": [
          {
            "level": 20,
            "costs": [
              {
                "itemId": 60087,
                "amount": 30
              },
              {
                "itemId": 940012,
                "amount": 2
              }
            ]
          },
          {
            "level": 40,
            "costs": [
              {
                "itemId": 60087,
                "amount": 60
              },
              {
                "itemId": 940012,
                "amount": 4
              }
            ]
          },
          {
            "level": 60,
            "costs": [
              {
                "itemId": 60087,
                "amount": 90
              },
              {
                "itemId": 940012,
                "amount": 6
              }
            ]
          },
          {
            "level": 80,
            "costs": [
              {
                "itemId": 60087,
                "amount": 120
              },
              {
                "itemId": 940012,
                "amount": 8
              }
            ]
          },
          {
            "level": 100,
            "costs": [
              {
                "itemId": 60087,
                "amount": 150
              },
              {
                "itemId": 940012,
                "amount": 10
              }
            ]
          },
          {
            "level": 120,
            "costs": [
              {
                "itemId": 60087,
                "amount": 180
              },
              {
                "itemId": 940012,
                "amount": 12
              }
            ]
          },
          {
            "level": 140,
            "costs": [
              {
                "itemId": 60087,
                "amount": 210
              },
              {
                "itemId": 940012,
                "amount": 16
              }
            ]
          },
          {
            "level": 160,
            "costs": [
              {
                "itemId": 60087,
                "amount": 240
              },
              {
                "itemId": 940012,
                "amount": 20
              }
            ]
          },
          {
            "level": 180,
            "costs": [
              {
                "itemId": 60087,
                "amount": 270
              },
              {
                "itemId": 940012,
                "amount": 25
              }
            ]
          },
          {
            "level": 200,
            "costs": [
              {
                "itemId": 60087,
                "amount": 300
              },
              {
                "itemId": 940012,
                "amount": 30
              }
            ]
          },
          {
            "level": 220,
            "costs": [
              {
                "itemId": 60087,
                "amount": 330
              },
              {
                "itemId": 940012,
                "amount": 35
              }
            ]
          },
          {
            "level": 240,
            "costs": [
              {
                "itemId": 60087,
                "amount": 360
              },
              {
                "itemId": 940012,
                "amount": 40
              }
            ]
          },
          {
            "level": 260,
            "costs": [
              {
                "itemId": 60087,
                "amount": 390
              },
              {
                "itemId": 940012,
                "amount": 45
              }
            ]
          },
          {
            "level": 280,
            "costs": [
              {
                "itemId": 60087,
                "amount": 420
              },
              {
                "itemId": 940012,
                "amount": 50
              }
            ]
          },
          {
            "level": 300,
            "costs": [
              {
                "itemId": 60087,
                "amount": 450
              },
              {
                "itemId": 940012,
                "amount": 50
              }
            ]
          },
          {
            "level": 320,
            "costs": [
              {
                "itemId": 60087,
                "amount": 480
              },
              {
                "itemId": 940012,
                "amount": 50
              }
            ]
          },
          {
            "level": 340,
            "costs": [
              {
                "itemId": 60087,
                "amount": 510
              },
              {
                "itemId": 940012,
                "amount": 50
              }
            ]
          },
          {
            "level": 360,
            "costs": [
              {
                "itemId": 60087,
                "amount": 540
              },
              {
                "itemId": 940012,
                "amount": 50
              }
            ]
          },
          {
            "level": 380,
            "costs": [
              {
                "itemId": 60087,
                "amount": 570
              },
              {
                "itemId": 940012,
                "amount": 50
              }
            ]
          },
          {
            "level": 400,
            "costs": [
              {
                "itemId": 60087,
                "amount": 600
              },
              {
                "itemId": 940012,
                "amount": 50
              }
            ]
          },
          {
            "level": 420,
            "costs": [
              {
                "itemId": 60087,
                "amount": 630
              },
              {
                "itemId": 940012,
                "amount": 50
              }
            ]
          },
          {
            "level": 440,
            "costs": [
              {
                "itemId": 60087,
                "amount": 660
              },
              {
                "itemId": 940012,
                "amount": 50
              }
            ]
          },
          {
            "level": 460,
            "costs": [
              {
                "itemId": 60087,
                "amount": 690
              },
              {
                "itemId": 940012,
                "amount": 50
              }
            ]
          },
          {
            "level": 480,
            "costs": [
              {
                "itemId": 60087,
                "amount": 720
              },
              {
                "itemId": 940012,
                "amount": 50
              }
            ]
          },
          {
            "level": 500,
            "costs": [
              {
                "itemId": 60087,
                "amount": 750
              },
              {
                "itemId": 940012,
                "amount": 50
              }
            ]
          }
        ]
      },
      "advance": {
        "thresholds": [
          {
            "level": 10,
            "costs": [
              {
                "itemId": 60086,
                "amount": 150
              },
              {
                "itemId": 940012,
                "amount": 2
              }
            ]
          },
          {
            "level": 30,
            "costs": [
              {
                "itemId": 60086,
                "amount": 300
              },
              {
                "itemId": 940012,
                "amount": 4
              }
            ]
          },
          {
            "level": 50,
            "costs": [
              {
                "itemId": 60086,
                "amount": 450
              },
              {
                "itemId": 940012,
                "amount": 6
              }
            ]
          },
          {
            "level": 70,
            "costs": [
              {
                "itemId": 60086,
                "amount": 600
              },
              {
                "itemId": 940012,
                "amount": 8
              }
            ]
          },
          {
            "level": 90,
            "costs": [
              {
                "itemId": 60086,
                "amount": 750
              },
              {
                "itemId": 940012,
                "amount": 10
              }
            ]
          },
          {
            "level": 110,
            "costs": [
              {
                "itemId": 60086,
                "amount": 900
              },
              {
                "itemId": 940012,
                "amount": 12
              }
            ]
          },
          {
            "level": 130,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1050
              },
              {
                "itemId": 940012,
                "amount": 16
              }
            ]
          },
          {
            "level": 150,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1200
              },
              {
                "itemId": 940012,
                "amount": 20
              }
            ]
          },
          {
            "level": 170,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1350
              },
              {
                "itemId": 940012,
                "amount": 25
              }
            ]
          },
          {
            "level": 190,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1500
              },
              {
                "itemId": 940012,
                "amount": 30
              }
            ]
          },
          {
            "level": 210,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1650
              },
              {
                "itemId": 940012,
                "amount": 35
              }
            ]
          },
          {
            "level": 230,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1800
              },
              {
                "itemId": 940012,
                "amount": 40
              }
            ]
          },
          {
            "level": 250,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1950
              },
              {
                "itemId": 940012,
                "amount": 45
              }
            ]
          },
          {
            "level": 270,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2100
              },
              {
                "itemId": 940012,
                "amount": 50
              }
            ]
          },
          {
            "level": 290,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2250
              },
              {
                "itemId": 940012,
                "amount": 50
              }
            ]
          },
          {
            "level": 310,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2400
              },
              {
                "itemId": 940012,
                "amount": 50
              }
            ]
          },
          {
            "level": 330,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2550
              },
              {
                "itemId": 940012,
                "amount": 50
              }
            ]
          },
          {
            "level": 350,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2700
              },
              {
                "itemId": 940012,
                "amount": 50
              }
            ]
          },
          {
            "level": 370,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2850
              },
              {
                "itemId": 940012,
                "amount": 50
              }
            ]
          },
          {
            "level": 390,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3000
              },
              {
                "itemId": 940012,
                "amount": 50
              }
            ]
          },
          {
            "level": 410,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3150
              },
              {
                "itemId": 940012,
                "amount": 50
              }
            ]
          },
          {
            "level": 430,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3300
              },
              {
                "itemId": 940012,
                "amount": 50
              }
            ]
          },
          {
            "level": 450,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3450
              },
              {
                "itemId": 940012,
                "amount": 50
              }
            ]
          },
          {
            "level": 470,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3600
              },
              {
                "itemId": 940012,
                "amount": 50
              }
            ]
          },
          {
            "level": 490,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3750
              },
              {
                "itemId": 940012,
                "amount": 50
              }
            ]
          }
        ],
        "attributes": {
          "1": [
            {
              "id": 54,
              "amount": 5000
            }
          ],
          "2": [
            {
              "id": 56,
              "amount": 100
            }
          ],
          "3": [
            {
              "id": 55,
              "amount": 10000
            }
          ],
          "4": [
            {
              "id": 57,
              "amount": 200
            }
          ],
          "5": [
            {
              "id": 51,
              "amount": 100000
            }
          ],
          "6": [
            {
              "id": 60,
              "amount": 300
            }
          ],
          "7": [
            {
              "id": 100,
              "amount": 30000
            }
          ],
          "8": [
            {
              "id": 61,
              "amount": 400
            }
          ],
          "9": [
            {
              "id": 25,
              "amount": 500
            }
          ],
          "10": [
            {
              "id": 24,
              "amount": 600
            }
          ],
          "11": [
            {
              "id": 54,
              "amount": 40000
            }
          ],
          "12": [
            {
              "id": 22,
              "amount": 500
            }
          ],
          "13": [
            {
              "id": 55,
              "amount": 50000
            }
          ],
          "14": [
            {
              "id": 23,
              "amount": 600
            }
          ],
          "15": [
            {
              "id": 51,
              "amount": 300000
            }
          ],
          "16": [
            {
              "id": 100,
              "amount": 70000
            }
          ],
          "17": [
            {
              "id": 23,
              "amount": 500
            }
          ],
          "18": [
            {
              "id": 22,
              "amount": 600
            }
          ],
          "19": [
            {
              "id": 102,
              "amount": 500
            }
          ],
          "20": [
            {
              "id": 101,
              "amount": 600
            }
          ],
          "21": [
            {
              "id": 54,
              "amount": 80000
            }
          ],
          "22": [
            {
              "id": 101,
              "amount": 600
            }
          ],
          "23": [
            {
              "id": 102,
              "amount": 700
            }
          ],
          "24": [
            {
              "id": 180,
              "amount": 600
            }
          ],
          "25": [
            {
              "id": 179,
              "amount": 700
            }
          ]
        },
        "requirements": [
          {
            "advance": 1,
            "requirement": 1
          },
          {
            "advance": 3,
            "requirement": 2
          },
          {
            "advance": 6,
            "requirement": 3
          },
          {
            "advance": 10,
            "requirement": 4
          },
          {
            "advance": 15,
            "requirement": 5
          },
          {
            "advance": 20,
            "requirement": 6
          },
          {
            "advance": 25,
            "requirement": 7
          }
        ]
      }
    },
    {
      "id": 940013,
      "name": "无双宝玉",
      "hero": "男主 / 女主",
      "icon": "assets/mibao-items/940013.png",
      "maxLevel": 500,
      "baseAttributes": [
        {
          "id": 100,
          "amount": 500
        },
        {
          "id": 54,
          "amount": 500
        },
        {
          "id": 55,
          "amount": 500
        },
        {
          "id": 51,
          "amount": 2500
        }
      ],
      "growthAttributes": [
        {
          "id": 100,
          "amount": 250
        },
        {
          "id": 54,
          "amount": 250
        },
        {
          "id": 55,
          "amount": 250
        },
        {
          "id": 51,
          "amount": 1250
        }
      ],
      "strengthen": {
        "fromLevel": 1,
        "toLevel": 500,
        "costRule": {
          "silverPerLevel": 50000,
          "stoneStart": 10,
          "stoneStep": 5,
          "costItemId": 60085
        },
        "levelsConfigured": 998,
        "upgradeAttributes": [
          {
            "id": 100,
            "amount": 2500
          },
          {
            "id": 54,
            "amount": 2500
          },
          {
            "id": 55,
            "amount": 2500
          },
          {
            "id": 51,
            "amount": 12500
          }
        ],
        "thresholds": [
          {
            "level": 20,
            "costs": [
              {
                "itemId": 60087,
                "amount": 40
              },
              {
                "itemId": 940013,
                "amount": 2
              }
            ]
          },
          {
            "level": 40,
            "costs": [
              {
                "itemId": 60087,
                "amount": 80
              },
              {
                "itemId": 940013,
                "amount": 4
              }
            ]
          },
          {
            "level": 60,
            "costs": [
              {
                "itemId": 60087,
                "amount": 120
              },
              {
                "itemId": 940013,
                "amount": 6
              }
            ]
          },
          {
            "level": 80,
            "costs": [
              {
                "itemId": 60087,
                "amount": 160
              },
              {
                "itemId": 940013,
                "amount": 8
              }
            ]
          },
          {
            "level": 100,
            "costs": [
              {
                "itemId": 60087,
                "amount": 200
              },
              {
                "itemId": 940013,
                "amount": 10
              }
            ]
          },
          {
            "level": 120,
            "costs": [
              {
                "itemId": 60087,
                "amount": 240
              },
              {
                "itemId": 940013,
                "amount": 12
              }
            ]
          },
          {
            "level": 140,
            "costs": [
              {
                "itemId": 60087,
                "amount": 280
              },
              {
                "itemId": 940013,
                "amount": 16
              }
            ]
          },
          {
            "level": 160,
            "costs": [
              {
                "itemId": 60087,
                "amount": 320
              },
              {
                "itemId": 940013,
                "amount": 20
              }
            ]
          },
          {
            "level": 180,
            "costs": [
              {
                "itemId": 60087,
                "amount": 360
              },
              {
                "itemId": 940013,
                "amount": 25
              }
            ]
          },
          {
            "level": 200,
            "costs": [
              {
                "itemId": 60087,
                "amount": 400
              },
              {
                "itemId": 940013,
                "amount": 30
              }
            ]
          },
          {
            "level": 220,
            "costs": [
              {
                "itemId": 60087,
                "amount": 440
              },
              {
                "itemId": 940013,
                "amount": 35
              }
            ]
          },
          {
            "level": 240,
            "costs": [
              {
                "itemId": 60087,
                "amount": 480
              },
              {
                "itemId": 940013,
                "amount": 40
              }
            ]
          },
          {
            "level": 260,
            "costs": [
              {
                "itemId": 60087,
                "amount": 520
              },
              {
                "itemId": 940013,
                "amount": 45
              }
            ]
          },
          {
            "level": 280,
            "costs": [
              {
                "itemId": 60087,
                "amount": 560
              },
              {
                "itemId": 940013,
                "amount": 50
              }
            ]
          },
          {
            "level": 300,
            "costs": [
              {
                "itemId": 60087,
                "amount": 600
              },
              {
                "itemId": 940013,
                "amount": 50
              }
            ]
          },
          {
            "level": 320,
            "costs": [
              {
                "itemId": 60087,
                "amount": 640
              },
              {
                "itemId": 940013,
                "amount": 50
              }
            ]
          },
          {
            "level": 340,
            "costs": [
              {
                "itemId": 60087,
                "amount": 680
              },
              {
                "itemId": 940013,
                "amount": 50
              }
            ]
          },
          {
            "level": 360,
            "costs": [
              {
                "itemId": 60087,
                "amount": 720
              },
              {
                "itemId": 940013,
                "amount": 50
              }
            ]
          },
          {
            "level": 380,
            "costs": [
              {
                "itemId": 60087,
                "amount": 760
              },
              {
                "itemId": 940013,
                "amount": 50
              }
            ]
          },
          {
            "level": 400,
            "costs": [
              {
                "itemId": 60087,
                "amount": 800
              },
              {
                "itemId": 940013,
                "amount": 50
              }
            ]
          },
          {
            "level": 420,
            "costs": [
              {
                "itemId": 60087,
                "amount": 840
              },
              {
                "itemId": 940013,
                "amount": 50
              }
            ]
          },
          {
            "level": 440,
            "costs": [
              {
                "itemId": 60087,
                "amount": 880
              },
              {
                "itemId": 940013,
                "amount": 50
              }
            ]
          },
          {
            "level": 460,
            "costs": [
              {
                "itemId": 60087,
                "amount": 920
              },
              {
                "itemId": 940013,
                "amount": 50
              }
            ]
          },
          {
            "level": 480,
            "costs": [
              {
                "itemId": 60087,
                "amount": 960
              },
              {
                "itemId": 940013,
                "amount": 50
              }
            ]
          },
          {
            "level": 500,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1000
              },
              {
                "itemId": 940013,
                "amount": 50
              }
            ]
          }
        ]
      },
      "advance": {
        "thresholds": [
          {
            "level": 10,
            "costs": [
              {
                "itemId": 60086,
                "amount": 150
              },
              {
                "itemId": 940013,
                "amount": 2
              }
            ]
          },
          {
            "level": 30,
            "costs": [
              {
                "itemId": 60086,
                "amount": 300
              },
              {
                "itemId": 940013,
                "amount": 4
              }
            ]
          },
          {
            "level": 50,
            "costs": [
              {
                "itemId": 60086,
                "amount": 450
              },
              {
                "itemId": 940013,
                "amount": 6
              }
            ]
          },
          {
            "level": 70,
            "costs": [
              {
                "itemId": 60086,
                "amount": 600
              },
              {
                "itemId": 940013,
                "amount": 8
              }
            ]
          },
          {
            "level": 90,
            "costs": [
              {
                "itemId": 60086,
                "amount": 750
              },
              {
                "itemId": 940013,
                "amount": 10
              }
            ]
          },
          {
            "level": 110,
            "costs": [
              {
                "itemId": 60086,
                "amount": 900
              },
              {
                "itemId": 940013,
                "amount": 12
              }
            ]
          },
          {
            "level": 130,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1050
              },
              {
                "itemId": 940013,
                "amount": 16
              }
            ]
          },
          {
            "level": 150,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1200
              },
              {
                "itemId": 940013,
                "amount": 20
              }
            ]
          },
          {
            "level": 170,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1350
              },
              {
                "itemId": 940013,
                "amount": 25
              }
            ]
          },
          {
            "level": 190,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1500
              },
              {
                "itemId": 940013,
                "amount": 30
              }
            ]
          },
          {
            "level": 210,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1650
              },
              {
                "itemId": 940013,
                "amount": 35
              }
            ]
          },
          {
            "level": 230,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1800
              },
              {
                "itemId": 940013,
                "amount": 40
              }
            ]
          },
          {
            "level": 250,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1950
              },
              {
                "itemId": 940013,
                "amount": 45
              }
            ]
          },
          {
            "level": 270,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2100
              },
              {
                "itemId": 940013,
                "amount": 50
              }
            ]
          },
          {
            "level": 290,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2250
              },
              {
                "itemId": 940013,
                "amount": 50
              }
            ]
          },
          {
            "level": 310,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2400
              },
              {
                "itemId": 940013,
                "amount": 50
              }
            ]
          },
          {
            "level": 330,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2550
              },
              {
                "itemId": 940013,
                "amount": 50
              }
            ]
          },
          {
            "level": 350,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2700
              },
              {
                "itemId": 940013,
                "amount": 50
              }
            ]
          },
          {
            "level": 370,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2850
              },
              {
                "itemId": 940013,
                "amount": 50
              }
            ]
          },
          {
            "level": 390,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3000
              },
              {
                "itemId": 940013,
                "amount": 50
              }
            ]
          },
          {
            "level": 410,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3150
              },
              {
                "itemId": 940013,
                "amount": 50
              }
            ]
          },
          {
            "level": 430,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3300
              },
              {
                "itemId": 940013,
                "amount": 50
              }
            ]
          },
          {
            "level": 450,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3450
              },
              {
                "itemId": 940013,
                "amount": 50
              }
            ]
          },
          {
            "level": 470,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3600
              },
              {
                "itemId": 940013,
                "amount": 50
              }
            ]
          },
          {
            "level": 490,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3750
              },
              {
                "itemId": 940013,
                "amount": 50
              }
            ]
          }
        ],
        "attributes": {
          "1": [
            {
              "id": 54,
              "amount": 5000
            }
          ],
          "2": [
            {
              "id": 56,
              "amount": 200
            }
          ],
          "3": [
            {
              "id": 55,
              "amount": 10000
            }
          ],
          "4": [
            {
              "id": 57,
              "amount": 300
            }
          ],
          "5": [
            {
              "id": 51,
              "amount": 100000
            }
          ],
          "6": [
            {
              "id": 60,
              "amount": 400
            }
          ],
          "7": [
            {
              "id": 100,
              "amount": 30000
            }
          ],
          "8": [
            {
              "id": 61,
              "amount": 500
            }
          ],
          "9": [
            {
              "id": 25,
              "amount": 600
            }
          ],
          "10": [
            {
              "id": 24,
              "amount": 700
            }
          ],
          "11": [
            {
              "id": 54,
              "amount": 40000
            }
          ],
          "12": [
            {
              "id": 22,
              "amount": 600
            }
          ],
          "13": [
            {
              "id": 55,
              "amount": 50000
            }
          ],
          "14": [
            {
              "id": 23,
              "amount": 700
            }
          ],
          "15": [
            {
              "id": 51,
              "amount": 300000
            }
          ],
          "16": [
            {
              "id": 100,
              "amount": 70000
            }
          ],
          "17": [
            {
              "id": 23,
              "amount": 600
            }
          ],
          "18": [
            {
              "id": 22,
              "amount": 700
            }
          ],
          "19": [
            {
              "id": 102,
              "amount": 600
            }
          ],
          "20": [
            {
              "id": 101,
              "amount": 700
            }
          ],
          "21": [
            {
              "id": 54,
              "amount": 80000
            }
          ],
          "22": [
            {
              "id": 101,
              "amount": 700
            }
          ],
          "23": [
            {
              "id": 102,
              "amount": 800
            }
          ],
          "24": [
            {
              "id": 180,
              "amount": 700
            }
          ],
          "25": [
            {
              "id": 179,
              "amount": 800
            }
          ]
        },
        "requirements": [
          {
            "advance": 1,
            "requirement": 1
          },
          {
            "advance": 3,
            "requirement": 2
          },
          {
            "advance": 6,
            "requirement": 3
          },
          {
            "advance": 10,
            "requirement": 4
          },
          {
            "advance": 15,
            "requirement": 5
          },
          {
            "advance": 20,
            "requirement": 6
          },
          {
            "advance": 25,
            "requirement": 7
          }
        ]
      }
    },
    {
      "id": 940014,
      "name": "邪王瞳",
      "hero": "司马懿",
      "icon": "assets/mibao-items/940014.png",
      "maxLevel": 500,
      "baseAttributes": [
        {
          "id": 100,
          "amount": 500
        },
        {
          "id": 54,
          "amount": 500
        },
        {
          "id": 55,
          "amount": 500
        },
        {
          "id": 51,
          "amount": 2500
        }
      ],
      "growthAttributes": [
        {
          "id": 100,
          "amount": 250
        },
        {
          "id": 54,
          "amount": 250
        },
        {
          "id": 55,
          "amount": 250
        },
        {
          "id": 51,
          "amount": 1250
        }
      ],
      "strengthen": {
        "fromLevel": 1,
        "toLevel": 500,
        "costRule": {
          "silverPerLevel": 50000,
          "stoneStart": 10,
          "stoneStep": 5,
          "costItemId": 60085
        },
        "levelsConfigured": 998,
        "upgradeAttributes": [
          {
            "id": 100,
            "amount": 2500
          },
          {
            "id": 54,
            "amount": 2500
          },
          {
            "id": 55,
            "amount": 2500
          },
          {
            "id": 51,
            "amount": 12500
          }
        ],
        "thresholds": [
          {
            "level": 20,
            "costs": [
              {
                "itemId": 60087,
                "amount": 50
              },
              {
                "itemId": 940014,
                "amount": 2
              }
            ]
          },
          {
            "level": 40,
            "costs": [
              {
                "itemId": 60087,
                "amount": 100
              },
              {
                "itemId": 940014,
                "amount": 4
              }
            ]
          },
          {
            "level": 60,
            "costs": [
              {
                "itemId": 60087,
                "amount": 150
              },
              {
                "itemId": 940014,
                "amount": 6
              }
            ]
          },
          {
            "level": 80,
            "costs": [
              {
                "itemId": 60087,
                "amount": 200
              },
              {
                "itemId": 940014,
                "amount": 8
              }
            ]
          },
          {
            "level": 100,
            "costs": [
              {
                "itemId": 60087,
                "amount": 250
              },
              {
                "itemId": 940014,
                "amount": 10
              }
            ]
          },
          {
            "level": 120,
            "costs": [
              {
                "itemId": 60087,
                "amount": 300
              },
              {
                "itemId": 940014,
                "amount": 12
              }
            ]
          },
          {
            "level": 140,
            "costs": [
              {
                "itemId": 60087,
                "amount": 350
              },
              {
                "itemId": 940014,
                "amount": 16
              }
            ]
          },
          {
            "level": 160,
            "costs": [
              {
                "itemId": 60087,
                "amount": 400
              },
              {
                "itemId": 940014,
                "amount": 20
              }
            ]
          },
          {
            "level": 180,
            "costs": [
              {
                "itemId": 60087,
                "amount": 450
              },
              {
                "itemId": 940014,
                "amount": 25
              }
            ]
          },
          {
            "level": 200,
            "costs": [
              {
                "itemId": 60087,
                "amount": 500
              },
              {
                "itemId": 940014,
                "amount": 30
              }
            ]
          },
          {
            "level": 220,
            "costs": [
              {
                "itemId": 60087,
                "amount": 550
              },
              {
                "itemId": 940014,
                "amount": 35
              }
            ]
          },
          {
            "level": 240,
            "costs": [
              {
                "itemId": 60087,
                "amount": 600
              },
              {
                "itemId": 940014,
                "amount": 40
              }
            ]
          },
          {
            "level": 260,
            "costs": [
              {
                "itemId": 60087,
                "amount": 650
              },
              {
                "itemId": 940014,
                "amount": 45
              }
            ]
          },
          {
            "level": 280,
            "costs": [
              {
                "itemId": 60087,
                "amount": 700
              },
              {
                "itemId": 940014,
                "amount": 50
              }
            ]
          },
          {
            "level": 300,
            "costs": [
              {
                "itemId": 60087,
                "amount": 750
              },
              {
                "itemId": 940014,
                "amount": 50
              }
            ]
          },
          {
            "level": 320,
            "costs": [
              {
                "itemId": 60087,
                "amount": 800
              },
              {
                "itemId": 940014,
                "amount": 50
              }
            ]
          },
          {
            "level": 340,
            "costs": [
              {
                "itemId": 60087,
                "amount": 850
              },
              {
                "itemId": 940014,
                "amount": 50
              }
            ]
          },
          {
            "level": 360,
            "costs": [
              {
                "itemId": 60087,
                "amount": 900
              },
              {
                "itemId": 940014,
                "amount": 50
              }
            ]
          },
          {
            "level": 380,
            "costs": [
              {
                "itemId": 60087,
                "amount": 950
              },
              {
                "itemId": 940014,
                "amount": 50
              }
            ]
          },
          {
            "level": 400,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1000
              },
              {
                "itemId": 940014,
                "amount": 50
              }
            ]
          },
          {
            "level": 420,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1050
              },
              {
                "itemId": 940014,
                "amount": 50
              }
            ]
          },
          {
            "level": 440,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1100
              },
              {
                "itemId": 940014,
                "amount": 50
              }
            ]
          },
          {
            "level": 460,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1150
              },
              {
                "itemId": 940014,
                "amount": 50
              }
            ]
          },
          {
            "level": 480,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1200
              },
              {
                "itemId": 940014,
                "amount": 50
              }
            ]
          },
          {
            "level": 500,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1250
              },
              {
                "itemId": 940014,
                "amount": 50
              }
            ]
          }
        ]
      },
      "advance": {
        "thresholds": [
          {
            "level": 10,
            "costs": [
              {
                "itemId": 60086,
                "amount": 150
              },
              {
                "itemId": 940014,
                "amount": 2
              }
            ]
          },
          {
            "level": 30,
            "costs": [
              {
                "itemId": 60086,
                "amount": 300
              },
              {
                "itemId": 940014,
                "amount": 4
              }
            ]
          },
          {
            "level": 50,
            "costs": [
              {
                "itemId": 60086,
                "amount": 450
              },
              {
                "itemId": 940014,
                "amount": 6
              }
            ]
          },
          {
            "level": 70,
            "costs": [
              {
                "itemId": 60086,
                "amount": 600
              },
              {
                "itemId": 940014,
                "amount": 8
              }
            ]
          },
          {
            "level": 90,
            "costs": [
              {
                "itemId": 60086,
                "amount": 750
              },
              {
                "itemId": 940014,
                "amount": 10
              }
            ]
          },
          {
            "level": 110,
            "costs": [
              {
                "itemId": 60086,
                "amount": 900
              },
              {
                "itemId": 940014,
                "amount": 12
              }
            ]
          },
          {
            "level": 130,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1050
              },
              {
                "itemId": 940014,
                "amount": 16
              }
            ]
          },
          {
            "level": 150,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1200
              },
              {
                "itemId": 940014,
                "amount": 20
              }
            ]
          },
          {
            "level": 170,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1350
              },
              {
                "itemId": 940014,
                "amount": 25
              }
            ]
          },
          {
            "level": 190,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1500
              },
              {
                "itemId": 940014,
                "amount": 30
              }
            ]
          },
          {
            "level": 210,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1650
              },
              {
                "itemId": 940014,
                "amount": 35
              }
            ]
          },
          {
            "level": 230,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1800
              },
              {
                "itemId": 940014,
                "amount": 40
              }
            ]
          },
          {
            "level": 250,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1950
              },
              {
                "itemId": 940014,
                "amount": 45
              }
            ]
          },
          {
            "level": 270,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2100
              },
              {
                "itemId": 940014,
                "amount": 50
              }
            ]
          },
          {
            "level": 290,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2250
              },
              {
                "itemId": 940014,
                "amount": 50
              }
            ]
          },
          {
            "level": 310,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2400
              },
              {
                "itemId": 940014,
                "amount": 50
              }
            ]
          },
          {
            "level": 330,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2550
              },
              {
                "itemId": 940014,
                "amount": 50
              }
            ]
          },
          {
            "level": 350,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2700
              },
              {
                "itemId": 940014,
                "amount": 50
              }
            ]
          },
          {
            "level": 370,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2850
              },
              {
                "itemId": 940014,
                "amount": 50
              }
            ]
          },
          {
            "level": 390,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3000
              },
              {
                "itemId": 940014,
                "amount": 50
              }
            ]
          },
          {
            "level": 410,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3150
              },
              {
                "itemId": 940014,
                "amount": 50
              }
            ]
          },
          {
            "level": 430,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3300
              },
              {
                "itemId": 940014,
                "amount": 50
              }
            ]
          },
          {
            "level": 450,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3450
              },
              {
                "itemId": 940014,
                "amount": 50
              }
            ]
          },
          {
            "level": 470,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3600
              },
              {
                "itemId": 940014,
                "amount": 50
              }
            ]
          },
          {
            "level": 490,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3750
              },
              {
                "itemId": 940014,
                "amount": 50
              }
            ]
          }
        ],
        "attributes": {
          "1": [
            {
              "id": 54,
              "amount": 5000
            }
          ],
          "2": [
            {
              "id": 56,
              "amount": 200
            }
          ],
          "3": [
            {
              "id": 55,
              "amount": 10000
            }
          ],
          "4": [
            {
              "id": 57,
              "amount": 300
            }
          ],
          "5": [
            {
              "id": 51,
              "amount": 100000
            }
          ],
          "6": [
            {
              "id": 60,
              "amount": 400
            }
          ],
          "7": [
            {
              "id": 100,
              "amount": 30000
            }
          ],
          "8": [
            {
              "id": 61,
              "amount": 500
            }
          ],
          "9": [
            {
              "id": 25,
              "amount": 600
            }
          ],
          "10": [
            {
              "id": 24,
              "amount": 700
            }
          ],
          "11": [
            {
              "id": 54,
              "amount": 40000
            }
          ],
          "12": [
            {
              "id": 22,
              "amount": 600
            }
          ],
          "13": [
            {
              "id": 55,
              "amount": 50000
            }
          ],
          "14": [
            {
              "id": 23,
              "amount": 700
            }
          ],
          "15": [
            {
              "id": 51,
              "amount": 300000
            }
          ],
          "16": [
            {
              "id": 100,
              "amount": 70000
            }
          ],
          "17": [
            {
              "id": 23,
              "amount": 600
            }
          ],
          "18": [
            {
              "id": 22,
              "amount": 700
            }
          ],
          "19": [
            {
              "id": 102,
              "amount": 600
            }
          ],
          "20": [
            {
              "id": 101,
              "amount": 700
            }
          ],
          "21": [
            {
              "id": 54,
              "amount": 80000
            }
          ],
          "22": [
            {
              "id": 101,
              "amount": 700
            }
          ],
          "23": [
            {
              "id": 102,
              "amount": 800
            }
          ],
          "24": [
            {
              "id": 180,
              "amount": 700
            }
          ],
          "25": [
            {
              "id": 179,
              "amount": 800
            }
          ]
        },
        "requirements": [
          {
            "advance": 1,
            "requirement": 1
          },
          {
            "advance": 3,
            "requirement": 2
          },
          {
            "advance": 6,
            "requirement": 3
          },
          {
            "advance": 10,
            "requirement": 4
          },
          {
            "advance": 15,
            "requirement": 5
          },
          {
            "advance": 20,
            "requirement": 6
          },
          {
            "advance": 25,
            "requirement": 7
          }
        ]
      }
    },
    {
      "id": 940015,
      "name": "龙胆护腕",
      "hero": "赵云",
      "icon": "assets/mibao-items/940015.png",
      "maxLevel": 500,
      "baseAttributes": [
        {
          "id": 100,
          "amount": 500
        },
        {
          "id": 54,
          "amount": 500
        },
        {
          "id": 55,
          "amount": 500
        },
        {
          "id": 51,
          "amount": 2500
        }
      ],
      "growthAttributes": [
        {
          "id": 100,
          "amount": 250
        },
        {
          "id": 54,
          "amount": 250
        },
        {
          "id": 55,
          "amount": 250
        },
        {
          "id": 51,
          "amount": 1250
        }
      ],
      "strengthen": {
        "fromLevel": 1,
        "toLevel": 500,
        "costRule": {
          "silverPerLevel": 50000,
          "stoneStart": 10,
          "stoneStep": 5,
          "costItemId": 60085
        },
        "levelsConfigured": 998,
        "upgradeAttributes": [
          {
            "id": 100,
            "amount": 2500
          },
          {
            "id": 54,
            "amount": 2500
          },
          {
            "id": 55,
            "amount": 2500
          },
          {
            "id": 51,
            "amount": 12500
          }
        ],
        "thresholds": [
          {
            "level": 20,
            "costs": [
              {
                "itemId": 60087,
                "amount": 50
              },
              {
                "itemId": 940015,
                "amount": 2
              }
            ]
          },
          {
            "level": 40,
            "costs": [
              {
                "itemId": 60087,
                "amount": 100
              },
              {
                "itemId": 940015,
                "amount": 4
              }
            ]
          },
          {
            "level": 60,
            "costs": [
              {
                "itemId": 60087,
                "amount": 150
              },
              {
                "itemId": 940015,
                "amount": 6
              }
            ]
          },
          {
            "level": 80,
            "costs": [
              {
                "itemId": 60087,
                "amount": 200
              },
              {
                "itemId": 940015,
                "amount": 8
              }
            ]
          },
          {
            "level": 100,
            "costs": [
              {
                "itemId": 60087,
                "amount": 250
              },
              {
                "itemId": 940015,
                "amount": 10
              }
            ]
          },
          {
            "level": 120,
            "costs": [
              {
                "itemId": 60087,
                "amount": 300
              },
              {
                "itemId": 940015,
                "amount": 12
              }
            ]
          },
          {
            "level": 140,
            "costs": [
              {
                "itemId": 60087,
                "amount": 350
              },
              {
                "itemId": 940015,
                "amount": 16
              }
            ]
          },
          {
            "level": 160,
            "costs": [
              {
                "itemId": 60087,
                "amount": 400
              },
              {
                "itemId": 940015,
                "amount": 20
              }
            ]
          },
          {
            "level": 180,
            "costs": [
              {
                "itemId": 60087,
                "amount": 450
              },
              {
                "itemId": 940015,
                "amount": 25
              }
            ]
          },
          {
            "level": 200,
            "costs": [
              {
                "itemId": 60087,
                "amount": 500
              },
              {
                "itemId": 940015,
                "amount": 30
              }
            ]
          },
          {
            "level": 220,
            "costs": [
              {
                "itemId": 60087,
                "amount": 550
              },
              {
                "itemId": 940015,
                "amount": 35
              }
            ]
          },
          {
            "level": 240,
            "costs": [
              {
                "itemId": 60087,
                "amount": 600
              },
              {
                "itemId": 940015,
                "amount": 40
              }
            ]
          },
          {
            "level": 260,
            "costs": [
              {
                "itemId": 60087,
                "amount": 650
              },
              {
                "itemId": 940015,
                "amount": 45
              }
            ]
          },
          {
            "level": 280,
            "costs": [
              {
                "itemId": 60087,
                "amount": 700
              },
              {
                "itemId": 940015,
                "amount": 50
              }
            ]
          },
          {
            "level": 300,
            "costs": [
              {
                "itemId": 60087,
                "amount": 750
              },
              {
                "itemId": 940015,
                "amount": 50
              }
            ]
          },
          {
            "level": 320,
            "costs": [
              {
                "itemId": 60087,
                "amount": 800
              },
              {
                "itemId": 940015,
                "amount": 50
              }
            ]
          },
          {
            "level": 340,
            "costs": [
              {
                "itemId": 60087,
                "amount": 850
              },
              {
                "itemId": 940015,
                "amount": 50
              }
            ]
          },
          {
            "level": 360,
            "costs": [
              {
                "itemId": 60087,
                "amount": 900
              },
              {
                "itemId": 940015,
                "amount": 50
              }
            ]
          },
          {
            "level": 380,
            "costs": [
              {
                "itemId": 60087,
                "amount": 950
              },
              {
                "itemId": 940015,
                "amount": 50
              }
            ]
          },
          {
            "level": 400,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1000
              },
              {
                "itemId": 940015,
                "amount": 50
              }
            ]
          },
          {
            "level": 420,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1050
              },
              {
                "itemId": 940015,
                "amount": 50
              }
            ]
          },
          {
            "level": 440,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1100
              },
              {
                "itemId": 940015,
                "amount": 50
              }
            ]
          },
          {
            "level": 460,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1150
              },
              {
                "itemId": 940015,
                "amount": 50
              }
            ]
          },
          {
            "level": 480,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1200
              },
              {
                "itemId": 940015,
                "amount": 50
              }
            ]
          },
          {
            "level": 500,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1250
              },
              {
                "itemId": 940015,
                "amount": 50
              }
            ]
          }
        ]
      },
      "advance": {
        "thresholds": [
          {
            "level": 10,
            "costs": [
              {
                "itemId": 60086,
                "amount": 150
              },
              {
                "itemId": 940015,
                "amount": 2
              }
            ]
          },
          {
            "level": 30,
            "costs": [
              {
                "itemId": 60086,
                "amount": 300
              },
              {
                "itemId": 940015,
                "amount": 4
              }
            ]
          },
          {
            "level": 50,
            "costs": [
              {
                "itemId": 60086,
                "amount": 450
              },
              {
                "itemId": 940015,
                "amount": 6
              }
            ]
          },
          {
            "level": 70,
            "costs": [
              {
                "itemId": 60086,
                "amount": 600
              },
              {
                "itemId": 940015,
                "amount": 8
              }
            ]
          },
          {
            "level": 90,
            "costs": [
              {
                "itemId": 60086,
                "amount": 750
              },
              {
                "itemId": 940015,
                "amount": 10
              }
            ]
          },
          {
            "level": 110,
            "costs": [
              {
                "itemId": 60086,
                "amount": 900
              },
              {
                "itemId": 940015,
                "amount": 12
              }
            ]
          },
          {
            "level": 130,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1050
              },
              {
                "itemId": 940015,
                "amount": 16
              }
            ]
          },
          {
            "level": 150,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1200
              },
              {
                "itemId": 940015,
                "amount": 20
              }
            ]
          },
          {
            "level": 170,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1350
              },
              {
                "itemId": 940015,
                "amount": 25
              }
            ]
          },
          {
            "level": 190,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1500
              },
              {
                "itemId": 940015,
                "amount": 30
              }
            ]
          },
          {
            "level": 210,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1650
              },
              {
                "itemId": 940015,
                "amount": 35
              }
            ]
          },
          {
            "level": 230,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1800
              },
              {
                "itemId": 940015,
                "amount": 40
              }
            ]
          },
          {
            "level": 250,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1950
              },
              {
                "itemId": 940015,
                "amount": 45
              }
            ]
          },
          {
            "level": 270,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2100
              },
              {
                "itemId": 940015,
                "amount": 50
              }
            ]
          },
          {
            "level": 290,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2250
              },
              {
                "itemId": 940015,
                "amount": 50
              }
            ]
          },
          {
            "level": 310,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2400
              },
              {
                "itemId": 940015,
                "amount": 50
              }
            ]
          },
          {
            "level": 330,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2550
              },
              {
                "itemId": 940015,
                "amount": 50
              }
            ]
          },
          {
            "level": 350,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2700
              },
              {
                "itemId": 940015,
                "amount": 50
              }
            ]
          },
          {
            "level": 370,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2850
              },
              {
                "itemId": 940015,
                "amount": 50
              }
            ]
          },
          {
            "level": 390,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3000
              },
              {
                "itemId": 940015,
                "amount": 50
              }
            ]
          },
          {
            "level": 410,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3150
              },
              {
                "itemId": 940015,
                "amount": 50
              }
            ]
          },
          {
            "level": 430,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3300
              },
              {
                "itemId": 940015,
                "amount": 50
              }
            ]
          },
          {
            "level": 450,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3450
              },
              {
                "itemId": 940015,
                "amount": 50
              }
            ]
          },
          {
            "level": 470,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3600
              },
              {
                "itemId": 940015,
                "amount": 50
              }
            ]
          },
          {
            "level": 490,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3750
              },
              {
                "itemId": 940015,
                "amount": 50
              }
            ]
          }
        ],
        "attributes": {
          "1": [
            {
              "id": 54,
              "amount": 5000
            }
          ],
          "2": [
            {
              "id": 56,
              "amount": 200
            }
          ],
          "3": [
            {
              "id": 55,
              "amount": 10000
            }
          ],
          "4": [
            {
              "id": 57,
              "amount": 300
            }
          ],
          "5": [
            {
              "id": 51,
              "amount": 100000
            }
          ],
          "6": [
            {
              "id": 60,
              "amount": 400
            }
          ],
          "7": [
            {
              "id": 100,
              "amount": 30000
            }
          ],
          "8": [
            {
              "id": 61,
              "amount": 500
            }
          ],
          "9": [
            {
              "id": 25,
              "amount": 600
            }
          ],
          "10": [
            {
              "id": 24,
              "amount": 700
            }
          ],
          "11": [
            {
              "id": 54,
              "amount": 40000
            }
          ],
          "12": [
            {
              "id": 22,
              "amount": 600
            }
          ],
          "13": [
            {
              "id": 55,
              "amount": 50000
            }
          ],
          "14": [
            {
              "id": 23,
              "amount": 700
            }
          ],
          "15": [
            {
              "id": 51,
              "amount": 300000
            }
          ],
          "16": [
            {
              "id": 100,
              "amount": 70000
            }
          ],
          "17": [
            {
              "id": 23,
              "amount": 600
            }
          ],
          "18": [
            {
              "id": 22,
              "amount": 700
            }
          ],
          "19": [
            {
              "id": 102,
              "amount": 600
            }
          ],
          "20": [
            {
              "id": 101,
              "amount": 700
            }
          ],
          "21": [
            {
              "id": 54,
              "amount": 80000
            }
          ],
          "22": [
            {
              "id": 101,
              "amount": 700
            }
          ],
          "23": [
            {
              "id": 102,
              "amount": 800
            }
          ],
          "24": [
            {
              "id": 180,
              "amount": 700
            }
          ],
          "25": [
            {
              "id": 179,
              "amount": 800
            }
          ]
        },
        "requirements": [
          {
            "advance": 1,
            "requirement": 1
          },
          {
            "advance": 3,
            "requirement": 2
          },
          {
            "advance": 6,
            "requirement": 3
          },
          {
            "advance": 10,
            "requirement": 4
          },
          {
            "advance": 15,
            "requirement": 5
          },
          {
            "advance": 20,
            "requirement": 6
          },
          {
            "advance": 25,
            "requirement": 7
          }
        ]
      }
    },
    {
      "id": 940016,
      "name": "天火琴",
      "hero": "周瑜",
      "icon": "assets/mibao-items/940016.png",
      "maxLevel": 500,
      "baseAttributes": [
        {
          "id": 100,
          "amount": 500
        },
        {
          "id": 54,
          "amount": 500
        },
        {
          "id": 55,
          "amount": 500
        },
        {
          "id": 51,
          "amount": 2500
        }
      ],
      "growthAttributes": [
        {
          "id": 100,
          "amount": 250
        },
        {
          "id": 54,
          "amount": 250
        },
        {
          "id": 55,
          "amount": 250
        },
        {
          "id": 51,
          "amount": 1250
        }
      ],
      "strengthen": {
        "fromLevel": 1,
        "toLevel": 500,
        "costRule": {
          "silverPerLevel": 50000,
          "stoneStart": 10,
          "stoneStep": 5,
          "costItemId": 60085
        },
        "levelsConfigured": 998,
        "upgradeAttributes": [
          {
            "id": 100,
            "amount": 2500
          },
          {
            "id": 54,
            "amount": 2500
          },
          {
            "id": 55,
            "amount": 2500
          },
          {
            "id": 51,
            "amount": 12500
          }
        ],
        "thresholds": [
          {
            "level": 20,
            "costs": [
              {
                "itemId": 60087,
                "amount": 50
              },
              {
                "itemId": 940016,
                "amount": 2
              }
            ]
          },
          {
            "level": 40,
            "costs": [
              {
                "itemId": 60087,
                "amount": 100
              },
              {
                "itemId": 940016,
                "amount": 4
              }
            ]
          },
          {
            "level": 60,
            "costs": [
              {
                "itemId": 60087,
                "amount": 150
              },
              {
                "itemId": 940016,
                "amount": 6
              }
            ]
          },
          {
            "level": 80,
            "costs": [
              {
                "itemId": 60087,
                "amount": 200
              },
              {
                "itemId": 940016,
                "amount": 8
              }
            ]
          },
          {
            "level": 100,
            "costs": [
              {
                "itemId": 60087,
                "amount": 250
              },
              {
                "itemId": 940016,
                "amount": 10
              }
            ]
          },
          {
            "level": 120,
            "costs": [
              {
                "itemId": 60087,
                "amount": 300
              },
              {
                "itemId": 940016,
                "amount": 12
              }
            ]
          },
          {
            "level": 140,
            "costs": [
              {
                "itemId": 60087,
                "amount": 350
              },
              {
                "itemId": 940016,
                "amount": 16
              }
            ]
          },
          {
            "level": 160,
            "costs": [
              {
                "itemId": 60087,
                "amount": 400
              },
              {
                "itemId": 940016,
                "amount": 20
              }
            ]
          },
          {
            "level": 180,
            "costs": [
              {
                "itemId": 60087,
                "amount": 450
              },
              {
                "itemId": 940016,
                "amount": 25
              }
            ]
          },
          {
            "level": 200,
            "costs": [
              {
                "itemId": 60087,
                "amount": 500
              },
              {
                "itemId": 940016,
                "amount": 30
              }
            ]
          },
          {
            "level": 220,
            "costs": [
              {
                "itemId": 60087,
                "amount": 550
              },
              {
                "itemId": 940016,
                "amount": 35
              }
            ]
          },
          {
            "level": 240,
            "costs": [
              {
                "itemId": 60087,
                "amount": 600
              },
              {
                "itemId": 940016,
                "amount": 40
              }
            ]
          },
          {
            "level": 260,
            "costs": [
              {
                "itemId": 60087,
                "amount": 650
              },
              {
                "itemId": 940016,
                "amount": 45
              }
            ]
          },
          {
            "level": 280,
            "costs": [
              {
                "itemId": 60087,
                "amount": 700
              },
              {
                "itemId": 940016,
                "amount": 50
              }
            ]
          },
          {
            "level": 300,
            "costs": [
              {
                "itemId": 60087,
                "amount": 750
              },
              {
                "itemId": 940016,
                "amount": 50
              }
            ]
          },
          {
            "level": 320,
            "costs": [
              {
                "itemId": 60087,
                "amount": 800
              },
              {
                "itemId": 940016,
                "amount": 50
              }
            ]
          },
          {
            "level": 340,
            "costs": [
              {
                "itemId": 60087,
                "amount": 850
              },
              {
                "itemId": 940016,
                "amount": 50
              }
            ]
          },
          {
            "level": 360,
            "costs": [
              {
                "itemId": 60087,
                "amount": 900
              },
              {
                "itemId": 940016,
                "amount": 50
              }
            ]
          },
          {
            "level": 380,
            "costs": [
              {
                "itemId": 60087,
                "amount": 950
              },
              {
                "itemId": 940016,
                "amount": 50
              }
            ]
          },
          {
            "level": 400,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1000
              },
              {
                "itemId": 940016,
                "amount": 50
              }
            ]
          },
          {
            "level": 420,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1050
              },
              {
                "itemId": 940016,
                "amount": 50
              }
            ]
          },
          {
            "level": 440,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1100
              },
              {
                "itemId": 940016,
                "amount": 50
              }
            ]
          },
          {
            "level": 460,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1150
              },
              {
                "itemId": 940016,
                "amount": 50
              }
            ]
          },
          {
            "level": 480,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1200
              },
              {
                "itemId": 940016,
                "amount": 50
              }
            ]
          },
          {
            "level": 500,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1250
              },
              {
                "itemId": 940016,
                "amount": 50
              }
            ]
          }
        ]
      },
      "advance": {
        "thresholds": [
          {
            "level": 10,
            "costs": [
              {
                "itemId": 60086,
                "amount": 150
              },
              {
                "itemId": 940016,
                "amount": 2
              }
            ]
          },
          {
            "level": 30,
            "costs": [
              {
                "itemId": 60086,
                "amount": 300
              },
              {
                "itemId": 940016,
                "amount": 4
              }
            ]
          },
          {
            "level": 50,
            "costs": [
              {
                "itemId": 60086,
                "amount": 450
              },
              {
                "itemId": 940016,
                "amount": 6
              }
            ]
          },
          {
            "level": 70,
            "costs": [
              {
                "itemId": 60086,
                "amount": 600
              },
              {
                "itemId": 940016,
                "amount": 8
              }
            ]
          },
          {
            "level": 90,
            "costs": [
              {
                "itemId": 60086,
                "amount": 750
              },
              {
                "itemId": 940016,
                "amount": 10
              }
            ]
          },
          {
            "level": 110,
            "costs": [
              {
                "itemId": 60086,
                "amount": 900
              },
              {
                "itemId": 940016,
                "amount": 12
              }
            ]
          },
          {
            "level": 130,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1050
              },
              {
                "itemId": 940016,
                "amount": 16
              }
            ]
          },
          {
            "level": 150,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1200
              },
              {
                "itemId": 940016,
                "amount": 20
              }
            ]
          },
          {
            "level": 170,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1350
              },
              {
                "itemId": 940016,
                "amount": 25
              }
            ]
          },
          {
            "level": 190,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1500
              },
              {
                "itemId": 940016,
                "amount": 30
              }
            ]
          },
          {
            "level": 210,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1650
              },
              {
                "itemId": 940016,
                "amount": 35
              }
            ]
          },
          {
            "level": 230,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1800
              },
              {
                "itemId": 940016,
                "amount": 40
              }
            ]
          },
          {
            "level": 250,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1950
              },
              {
                "itemId": 940016,
                "amount": 45
              }
            ]
          },
          {
            "level": 270,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2100
              },
              {
                "itemId": 940016,
                "amount": 50
              }
            ]
          },
          {
            "level": 290,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2250
              },
              {
                "itemId": 940016,
                "amount": 50
              }
            ]
          },
          {
            "level": 310,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2400
              },
              {
                "itemId": 940016,
                "amount": 50
              }
            ]
          },
          {
            "level": 330,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2550
              },
              {
                "itemId": 940016,
                "amount": 50
              }
            ]
          },
          {
            "level": 350,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2700
              },
              {
                "itemId": 940016,
                "amount": 50
              }
            ]
          },
          {
            "level": 370,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2850
              },
              {
                "itemId": 940016,
                "amount": 50
              }
            ]
          },
          {
            "level": 390,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3000
              },
              {
                "itemId": 940016,
                "amount": 50
              }
            ]
          },
          {
            "level": 410,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3150
              },
              {
                "itemId": 940016,
                "amount": 50
              }
            ]
          },
          {
            "level": 430,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3300
              },
              {
                "itemId": 940016,
                "amount": 50
              }
            ]
          },
          {
            "level": 450,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3450
              },
              {
                "itemId": 940016,
                "amount": 50
              }
            ]
          },
          {
            "level": 470,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3600
              },
              {
                "itemId": 940016,
                "amount": 50
              }
            ]
          },
          {
            "level": 490,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3750
              },
              {
                "itemId": 940016,
                "amount": 50
              }
            ]
          }
        ],
        "attributes": {
          "1": [
            {
              "id": 54,
              "amount": 5000
            }
          ],
          "2": [
            {
              "id": 56,
              "amount": 200
            }
          ],
          "3": [
            {
              "id": 55,
              "amount": 10000
            }
          ],
          "4": [
            {
              "id": 57,
              "amount": 300
            }
          ],
          "5": [
            {
              "id": 51,
              "amount": 100000
            }
          ],
          "6": [
            {
              "id": 60,
              "amount": 400
            }
          ],
          "7": [
            {
              "id": 100,
              "amount": 30000
            }
          ],
          "8": [
            {
              "id": 61,
              "amount": 500
            }
          ],
          "9": [
            {
              "id": 25,
              "amount": 600
            }
          ],
          "10": [
            {
              "id": 24,
              "amount": 700
            }
          ],
          "11": [
            {
              "id": 54,
              "amount": 40000
            }
          ],
          "12": [
            {
              "id": 22,
              "amount": 600
            }
          ],
          "13": [
            {
              "id": 55,
              "amount": 50000
            }
          ],
          "14": [
            {
              "id": 23,
              "amount": 700
            }
          ],
          "15": [
            {
              "id": 51,
              "amount": 300000
            }
          ],
          "16": [
            {
              "id": 100,
              "amount": 70000
            }
          ],
          "17": [
            {
              "id": 23,
              "amount": 600
            }
          ],
          "18": [
            {
              "id": 22,
              "amount": 700
            }
          ],
          "19": [
            {
              "id": 102,
              "amount": 600
            }
          ],
          "20": [
            {
              "id": 101,
              "amount": 700
            }
          ],
          "21": [
            {
              "id": 54,
              "amount": 80000
            }
          ],
          "22": [
            {
              "id": 101,
              "amount": 700
            }
          ],
          "23": [
            {
              "id": 102,
              "amount": 800
            }
          ],
          "24": [
            {
              "id": 180,
              "amount": 700
            }
          ],
          "25": [
            {
              "id": 179,
              "amount": 800
            }
          ]
        },
        "requirements": [
          {
            "advance": 1,
            "requirement": 1
          },
          {
            "advance": 3,
            "requirement": 2
          },
          {
            "advance": 6,
            "requirement": 3
          },
          {
            "advance": 10,
            "requirement": 4
          },
          {
            "advance": 15,
            "requirement": 5
          },
          {
            "advance": 20,
            "requirement": 6
          },
          {
            "advance": 25,
            "requirement": 7
          }
        ]
      }
    },
    {
      "id": 940017,
      "name": "蚩尤珠",
      "hero": "吕布",
      "icon": "assets/mibao-items/940017.png",
      "maxLevel": 500,
      "baseAttributes": [
        {
          "id": 100,
          "amount": 500
        },
        {
          "id": 54,
          "amount": 500
        },
        {
          "id": 55,
          "amount": 500
        },
        {
          "id": 51,
          "amount": 2500
        }
      ],
      "growthAttributes": [
        {
          "id": 100,
          "amount": 250
        },
        {
          "id": 54,
          "amount": 250
        },
        {
          "id": 55,
          "amount": 250
        },
        {
          "id": 51,
          "amount": 1250
        }
      ],
      "strengthen": {
        "fromLevel": 1,
        "toLevel": 500,
        "costRule": {
          "silverPerLevel": 50000,
          "stoneStart": 10,
          "stoneStep": 5,
          "costItemId": 60085
        },
        "levelsConfigured": 998,
        "upgradeAttributes": [
          {
            "id": 100,
            "amount": 2500
          },
          {
            "id": 54,
            "amount": 2500
          },
          {
            "id": 55,
            "amount": 2500
          },
          {
            "id": 51,
            "amount": 12500
          }
        ],
        "thresholds": [
          {
            "level": 20,
            "costs": [
              {
                "itemId": 60087,
                "amount": 50
              },
              {
                "itemId": 940017,
                "amount": 2
              }
            ]
          },
          {
            "level": 40,
            "costs": [
              {
                "itemId": 60087,
                "amount": 100
              },
              {
                "itemId": 940017,
                "amount": 4
              }
            ]
          },
          {
            "level": 60,
            "costs": [
              {
                "itemId": 60087,
                "amount": 150
              },
              {
                "itemId": 940017,
                "amount": 6
              }
            ]
          },
          {
            "level": 80,
            "costs": [
              {
                "itemId": 60087,
                "amount": 200
              },
              {
                "itemId": 940017,
                "amount": 8
              }
            ]
          },
          {
            "level": 100,
            "costs": [
              {
                "itemId": 60087,
                "amount": 250
              },
              {
                "itemId": 940017,
                "amount": 10
              }
            ]
          },
          {
            "level": 120,
            "costs": [
              {
                "itemId": 60087,
                "amount": 300
              },
              {
                "itemId": 940017,
                "amount": 12
              }
            ]
          },
          {
            "level": 140,
            "costs": [
              {
                "itemId": 60087,
                "amount": 350
              },
              {
                "itemId": 940017,
                "amount": 16
              }
            ]
          },
          {
            "level": 160,
            "costs": [
              {
                "itemId": 60087,
                "amount": 400
              },
              {
                "itemId": 940017,
                "amount": 20
              }
            ]
          },
          {
            "level": 180,
            "costs": [
              {
                "itemId": 60087,
                "amount": 450
              },
              {
                "itemId": 940017,
                "amount": 25
              }
            ]
          },
          {
            "level": 200,
            "costs": [
              {
                "itemId": 60087,
                "amount": 500
              },
              {
                "itemId": 940017,
                "amount": 30
              }
            ]
          },
          {
            "level": 220,
            "costs": [
              {
                "itemId": 60087,
                "amount": 550
              },
              {
                "itemId": 940017,
                "amount": 35
              }
            ]
          },
          {
            "level": 240,
            "costs": [
              {
                "itemId": 60087,
                "amount": 600
              },
              {
                "itemId": 940017,
                "amount": 40
              }
            ]
          },
          {
            "level": 260,
            "costs": [
              {
                "itemId": 60087,
                "amount": 650
              },
              {
                "itemId": 940017,
                "amount": 45
              }
            ]
          },
          {
            "level": 280,
            "costs": [
              {
                "itemId": 60087,
                "amount": 700
              },
              {
                "itemId": 940017,
                "amount": 50
              }
            ]
          },
          {
            "level": 300,
            "costs": [
              {
                "itemId": 60087,
                "amount": 750
              },
              {
                "itemId": 940017,
                "amount": 50
              }
            ]
          },
          {
            "level": 320,
            "costs": [
              {
                "itemId": 60087,
                "amount": 800
              },
              {
                "itemId": 940017,
                "amount": 50
              }
            ]
          },
          {
            "level": 340,
            "costs": [
              {
                "itemId": 60087,
                "amount": 850
              },
              {
                "itemId": 940017,
                "amount": 50
              }
            ]
          },
          {
            "level": 360,
            "costs": [
              {
                "itemId": 60087,
                "amount": 900
              },
              {
                "itemId": 940017,
                "amount": 50
              }
            ]
          },
          {
            "level": 380,
            "costs": [
              {
                "itemId": 60087,
                "amount": 950
              },
              {
                "itemId": 940017,
                "amount": 50
              }
            ]
          },
          {
            "level": 400,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1000
              },
              {
                "itemId": 940017,
                "amount": 50
              }
            ]
          },
          {
            "level": 420,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1050
              },
              {
                "itemId": 940017,
                "amount": 50
              }
            ]
          },
          {
            "level": 440,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1100
              },
              {
                "itemId": 940017,
                "amount": 50
              }
            ]
          },
          {
            "level": 460,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1150
              },
              {
                "itemId": 940017,
                "amount": 50
              }
            ]
          },
          {
            "level": 480,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1200
              },
              {
                "itemId": 940017,
                "amount": 50
              }
            ]
          },
          {
            "level": 500,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1250
              },
              {
                "itemId": 940017,
                "amount": 50
              }
            ]
          }
        ]
      },
      "advance": {
        "thresholds": [
          {
            "level": 10,
            "costs": [
              {
                "itemId": 60086,
                "amount": 150
              },
              {
                "itemId": 940017,
                "amount": 2
              }
            ]
          },
          {
            "level": 30,
            "costs": [
              {
                "itemId": 60086,
                "amount": 300
              },
              {
                "itemId": 940017,
                "amount": 4
              }
            ]
          },
          {
            "level": 50,
            "costs": [
              {
                "itemId": 60086,
                "amount": 450
              },
              {
                "itemId": 940017,
                "amount": 6
              }
            ]
          },
          {
            "level": 70,
            "costs": [
              {
                "itemId": 60086,
                "amount": 600
              },
              {
                "itemId": 940017,
                "amount": 8
              }
            ]
          },
          {
            "level": 90,
            "costs": [
              {
                "itemId": 60086,
                "amount": 750
              },
              {
                "itemId": 940017,
                "amount": 10
              }
            ]
          },
          {
            "level": 110,
            "costs": [
              {
                "itemId": 60086,
                "amount": 900
              },
              {
                "itemId": 940017,
                "amount": 12
              }
            ]
          },
          {
            "level": 130,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1050
              },
              {
                "itemId": 940017,
                "amount": 16
              }
            ]
          },
          {
            "level": 150,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1200
              },
              {
                "itemId": 940017,
                "amount": 20
              }
            ]
          },
          {
            "level": 170,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1350
              },
              {
                "itemId": 940017,
                "amount": 25
              }
            ]
          },
          {
            "level": 190,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1500
              },
              {
                "itemId": 940017,
                "amount": 30
              }
            ]
          },
          {
            "level": 210,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1650
              },
              {
                "itemId": 940017,
                "amount": 35
              }
            ]
          },
          {
            "level": 230,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1800
              },
              {
                "itemId": 940017,
                "amount": 40
              }
            ]
          },
          {
            "level": 250,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1950
              },
              {
                "itemId": 940017,
                "amount": 45
              }
            ]
          },
          {
            "level": 270,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2100
              },
              {
                "itemId": 940017,
                "amount": 50
              }
            ]
          },
          {
            "level": 290,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2250
              },
              {
                "itemId": 940017,
                "amount": 50
              }
            ]
          },
          {
            "level": 310,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2400
              },
              {
                "itemId": 940017,
                "amount": 50
              }
            ]
          },
          {
            "level": 330,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2550
              },
              {
                "itemId": 940017,
                "amount": 50
              }
            ]
          },
          {
            "level": 350,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2700
              },
              {
                "itemId": 940017,
                "amount": 50
              }
            ]
          },
          {
            "level": 370,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2850
              },
              {
                "itemId": 940017,
                "amount": 50
              }
            ]
          },
          {
            "level": 390,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3000
              },
              {
                "itemId": 940017,
                "amount": 50
              }
            ]
          },
          {
            "level": 410,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3150
              },
              {
                "itemId": 940017,
                "amount": 50
              }
            ]
          },
          {
            "level": 430,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3300
              },
              {
                "itemId": 940017,
                "amount": 50
              }
            ]
          },
          {
            "level": 450,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3450
              },
              {
                "itemId": 940017,
                "amount": 50
              }
            ]
          },
          {
            "level": 470,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3600
              },
              {
                "itemId": 940017,
                "amount": 50
              }
            ]
          },
          {
            "level": 490,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3750
              },
              {
                "itemId": 940017,
                "amount": 50
              }
            ]
          }
        ],
        "attributes": {
          "1": [
            {
              "id": 54,
              "amount": 5000
            }
          ],
          "2": [
            {
              "id": 56,
              "amount": 200
            }
          ],
          "3": [
            {
              "id": 55,
              "amount": 10000
            }
          ],
          "4": [
            {
              "id": 57,
              "amount": 300
            }
          ],
          "5": [
            {
              "id": 51,
              "amount": 100000
            }
          ],
          "6": [
            {
              "id": 60,
              "amount": 400
            }
          ],
          "7": [
            {
              "id": 100,
              "amount": 30000
            }
          ],
          "8": [
            {
              "id": 61,
              "amount": 500
            }
          ],
          "9": [
            {
              "id": 25,
              "amount": 600
            }
          ],
          "10": [
            {
              "id": 24,
              "amount": 700
            }
          ],
          "11": [
            {
              "id": 54,
              "amount": 40000
            }
          ],
          "12": [
            {
              "id": 22,
              "amount": 600
            }
          ],
          "13": [
            {
              "id": 55,
              "amount": 50000
            }
          ],
          "14": [
            {
              "id": 23,
              "amount": 700
            }
          ],
          "15": [
            {
              "id": 51,
              "amount": 300000
            }
          ],
          "16": [
            {
              "id": 100,
              "amount": 70000
            }
          ],
          "17": [
            {
              "id": 23,
              "amount": 600
            }
          ],
          "18": [
            {
              "id": 22,
              "amount": 700
            }
          ],
          "19": [
            {
              "id": 102,
              "amount": 600
            }
          ],
          "20": [
            {
              "id": 101,
              "amount": 700
            }
          ],
          "21": [
            {
              "id": 54,
              "amount": 80000
            }
          ],
          "22": [
            {
              "id": 101,
              "amount": 700
            }
          ],
          "23": [
            {
              "id": 102,
              "amount": 800
            }
          ],
          "24": [
            {
              "id": 180,
              "amount": 700
            }
          ],
          "25": [
            {
              "id": 179,
              "amount": 800
            }
          ]
        },
        "requirements": [
          {
            "advance": 1,
            "requirement": 1
          },
          {
            "advance": 3,
            "requirement": 2
          },
          {
            "advance": 6,
            "requirement": 3
          },
          {
            "advance": 10,
            "requirement": 4
          },
          {
            "advance": 15,
            "requirement": 5
          },
          {
            "advance": 20,
            "requirement": 6
          },
          {
            "advance": 25,
            "requirement": 7
          }
        ]
      }
    },
    {
      "id": 940018,
      "name": "新月冕",
      "hero": "甄姬",
      "icon": "assets/mibao-items/940018.png",
      "maxLevel": 500,
      "baseAttributes": [
        {
          "id": 100,
          "amount": 500
        },
        {
          "id": 54,
          "amount": 500
        },
        {
          "id": 55,
          "amount": 500
        },
        {
          "id": 51,
          "amount": 2500
        }
      ],
      "growthAttributes": [
        {
          "id": 100,
          "amount": 250
        },
        {
          "id": 54,
          "amount": 250
        },
        {
          "id": 55,
          "amount": 250
        },
        {
          "id": 51,
          "amount": 1250
        }
      ],
      "strengthen": {
        "fromLevel": 1,
        "toLevel": 500,
        "costRule": {
          "silverPerLevel": 50000,
          "stoneStart": 10,
          "stoneStep": 5,
          "costItemId": 60085
        },
        "levelsConfigured": 998,
        "upgradeAttributes": [
          {
            "id": 100,
            "amount": 2500
          },
          {
            "id": 54,
            "amount": 2500
          },
          {
            "id": 55,
            "amount": 2500
          },
          {
            "id": 51,
            "amount": 12500
          }
        ],
        "thresholds": [
          {
            "level": 20,
            "costs": [
              {
                "itemId": 60087,
                "amount": 30
              },
              {
                "itemId": 940018,
                "amount": 2
              }
            ]
          },
          {
            "level": 40,
            "costs": [
              {
                "itemId": 60087,
                "amount": 60
              },
              {
                "itemId": 940018,
                "amount": 4
              }
            ]
          },
          {
            "level": 60,
            "costs": [
              {
                "itemId": 60087,
                "amount": 90
              },
              {
                "itemId": 940018,
                "amount": 6
              }
            ]
          },
          {
            "level": 80,
            "costs": [
              {
                "itemId": 60087,
                "amount": 120
              },
              {
                "itemId": 940018,
                "amount": 8
              }
            ]
          },
          {
            "level": 100,
            "costs": [
              {
                "itemId": 60087,
                "amount": 150
              },
              {
                "itemId": 940018,
                "amount": 10
              }
            ]
          },
          {
            "level": 120,
            "costs": [
              {
                "itemId": 60087,
                "amount": 180
              },
              {
                "itemId": 940018,
                "amount": 12
              }
            ]
          },
          {
            "level": 140,
            "costs": [
              {
                "itemId": 60087,
                "amount": 210
              },
              {
                "itemId": 940018,
                "amount": 16
              }
            ]
          },
          {
            "level": 160,
            "costs": [
              {
                "itemId": 60087,
                "amount": 240
              },
              {
                "itemId": 940018,
                "amount": 20
              }
            ]
          },
          {
            "level": 180,
            "costs": [
              {
                "itemId": 60087,
                "amount": 270
              },
              {
                "itemId": 940018,
                "amount": 25
              }
            ]
          },
          {
            "level": 200,
            "costs": [
              {
                "itemId": 60087,
                "amount": 300
              },
              {
                "itemId": 940018,
                "amount": 30
              }
            ]
          },
          {
            "level": 220,
            "costs": [
              {
                "itemId": 60087,
                "amount": 330
              },
              {
                "itemId": 940018,
                "amount": 35
              }
            ]
          },
          {
            "level": 240,
            "costs": [
              {
                "itemId": 60087,
                "amount": 360
              },
              {
                "itemId": 940018,
                "amount": 40
              }
            ]
          },
          {
            "level": 260,
            "costs": [
              {
                "itemId": 60087,
                "amount": 390
              },
              {
                "itemId": 940018,
                "amount": 45
              }
            ]
          },
          {
            "level": 280,
            "costs": [
              {
                "itemId": 60087,
                "amount": 420
              },
              {
                "itemId": 940018,
                "amount": 50
              }
            ]
          },
          {
            "level": 300,
            "costs": [
              {
                "itemId": 60087,
                "amount": 450
              },
              {
                "itemId": 940018,
                "amount": 50
              }
            ]
          },
          {
            "level": 320,
            "costs": [
              {
                "itemId": 60087,
                "amount": 480
              },
              {
                "itemId": 940018,
                "amount": 50
              }
            ]
          },
          {
            "level": 340,
            "costs": [
              {
                "itemId": 60087,
                "amount": 510
              },
              {
                "itemId": 940018,
                "amount": 50
              }
            ]
          },
          {
            "level": 360,
            "costs": [
              {
                "itemId": 60087,
                "amount": 540
              },
              {
                "itemId": 940018,
                "amount": 50
              }
            ]
          },
          {
            "level": 380,
            "costs": [
              {
                "itemId": 60087,
                "amount": 570
              },
              {
                "itemId": 940018,
                "amount": 50
              }
            ]
          },
          {
            "level": 400,
            "costs": [
              {
                "itemId": 60087,
                "amount": 600
              },
              {
                "itemId": 940018,
                "amount": 50
              }
            ]
          },
          {
            "level": 420,
            "costs": [
              {
                "itemId": 60087,
                "amount": 630
              },
              {
                "itemId": 940018,
                "amount": 50
              }
            ]
          },
          {
            "level": 440,
            "costs": [
              {
                "itemId": 60087,
                "amount": 660
              },
              {
                "itemId": 940018,
                "amount": 50
              }
            ]
          },
          {
            "level": 460,
            "costs": [
              {
                "itemId": 60087,
                "amount": 690
              },
              {
                "itemId": 940018,
                "amount": 50
              }
            ]
          },
          {
            "level": 480,
            "costs": [
              {
                "itemId": 60087,
                "amount": 720
              },
              {
                "itemId": 940018,
                "amount": 50
              }
            ]
          },
          {
            "level": 500,
            "costs": [
              {
                "itemId": 60087,
                "amount": 750
              },
              {
                "itemId": 940018,
                "amount": 50
              }
            ]
          }
        ]
      },
      "advance": {
        "thresholds": [
          {
            "level": 10,
            "costs": [
              {
                "itemId": 60086,
                "amount": 150
              },
              {
                "itemId": 940018,
                "amount": 2
              }
            ]
          },
          {
            "level": 30,
            "costs": [
              {
                "itemId": 60086,
                "amount": 300
              },
              {
                "itemId": 940018,
                "amount": 4
              }
            ]
          },
          {
            "level": 50,
            "costs": [
              {
                "itemId": 60086,
                "amount": 450
              },
              {
                "itemId": 940018,
                "amount": 6
              }
            ]
          },
          {
            "level": 70,
            "costs": [
              {
                "itemId": 60086,
                "amount": 600
              },
              {
                "itemId": 940018,
                "amount": 8
              }
            ]
          },
          {
            "level": 90,
            "costs": [
              {
                "itemId": 60086,
                "amount": 750
              },
              {
                "itemId": 940018,
                "amount": 10
              }
            ]
          },
          {
            "level": 110,
            "costs": [
              {
                "itemId": 60086,
                "amount": 900
              },
              {
                "itemId": 940018,
                "amount": 12
              }
            ]
          },
          {
            "level": 130,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1050
              },
              {
                "itemId": 940018,
                "amount": 16
              }
            ]
          },
          {
            "level": 150,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1200
              },
              {
                "itemId": 940018,
                "amount": 20
              }
            ]
          },
          {
            "level": 170,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1350
              },
              {
                "itemId": 940018,
                "amount": 25
              }
            ]
          },
          {
            "level": 190,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1500
              },
              {
                "itemId": 940018,
                "amount": 30
              }
            ]
          },
          {
            "level": 210,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1650
              },
              {
                "itemId": 940018,
                "amount": 35
              }
            ]
          },
          {
            "level": 230,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1800
              },
              {
                "itemId": 940018,
                "amount": 40
              }
            ]
          },
          {
            "level": 250,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1950
              },
              {
                "itemId": 940018,
                "amount": 45
              }
            ]
          },
          {
            "level": 270,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2100
              },
              {
                "itemId": 940018,
                "amount": 50
              }
            ]
          },
          {
            "level": 290,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2250
              },
              {
                "itemId": 940018,
                "amount": 50
              }
            ]
          },
          {
            "level": 310,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2400
              },
              {
                "itemId": 940018,
                "amount": 50
              }
            ]
          },
          {
            "level": 330,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2550
              },
              {
                "itemId": 940018,
                "amount": 50
              }
            ]
          },
          {
            "level": 350,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2700
              },
              {
                "itemId": 940018,
                "amount": 50
              }
            ]
          },
          {
            "level": 370,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2850
              },
              {
                "itemId": 940018,
                "amount": 50
              }
            ]
          },
          {
            "level": 390,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3000
              },
              {
                "itemId": 940018,
                "amount": 50
              }
            ]
          },
          {
            "level": 410,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3150
              },
              {
                "itemId": 940018,
                "amount": 50
              }
            ]
          },
          {
            "level": 430,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3300
              },
              {
                "itemId": 940018,
                "amount": 50
              }
            ]
          },
          {
            "level": 450,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3450
              },
              {
                "itemId": 940018,
                "amount": 50
              }
            ]
          },
          {
            "level": 470,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3600
              },
              {
                "itemId": 940018,
                "amount": 50
              }
            ]
          },
          {
            "level": 490,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3750
              },
              {
                "itemId": 940018,
                "amount": 50
              }
            ]
          }
        ],
        "attributes": {
          "1": [
            {
              "id": 54,
              "amount": 5000
            }
          ],
          "2": [
            {
              "id": 56,
              "amount": 100
            }
          ],
          "3": [
            {
              "id": 55,
              "amount": 10000
            }
          ],
          "4": [
            {
              "id": 57,
              "amount": 200
            }
          ],
          "5": [
            {
              "id": 51,
              "amount": 100000
            }
          ],
          "6": [
            {
              "id": 60,
              "amount": 300
            }
          ],
          "7": [
            {
              "id": 100,
              "amount": 30000
            }
          ],
          "8": [
            {
              "id": 61,
              "amount": 400
            }
          ],
          "9": [
            {
              "id": 25,
              "amount": 500
            }
          ],
          "10": [
            {
              "id": 24,
              "amount": 600
            }
          ],
          "11": [
            {
              "id": 54,
              "amount": 40000
            }
          ],
          "12": [
            {
              "id": 22,
              "amount": 500
            }
          ],
          "13": [
            {
              "id": 55,
              "amount": 50000
            }
          ],
          "14": [
            {
              "id": 23,
              "amount": 600
            }
          ],
          "15": [
            {
              "id": 51,
              "amount": 300000
            }
          ],
          "16": [
            {
              "id": 100,
              "amount": 70000
            }
          ],
          "17": [
            {
              "id": 23,
              "amount": 500
            }
          ],
          "18": [
            {
              "id": 22,
              "amount": 600
            }
          ],
          "19": [
            {
              "id": 102,
              "amount": 500
            }
          ],
          "20": [
            {
              "id": 101,
              "amount": 600
            }
          ],
          "21": [
            {
              "id": 54,
              "amount": 80000
            }
          ],
          "22": [
            {
              "id": 101,
              "amount": 600
            }
          ],
          "23": [
            {
              "id": 102,
              "amount": 700
            }
          ],
          "24": [
            {
              "id": 180,
              "amount": 600
            }
          ],
          "25": [
            {
              "id": 179,
              "amount": 700
            }
          ]
        },
        "requirements": [
          {
            "advance": 1,
            "requirement": 1
          },
          {
            "advance": 3,
            "requirement": 2
          },
          {
            "advance": 6,
            "requirement": 3
          },
          {
            "advance": 10,
            "requirement": 4
          },
          {
            "advance": 15,
            "requirement": 5
          },
          {
            "advance": 20,
            "requirement": 6
          },
          {
            "advance": 25,
            "requirement": 7
          }
        ]
      }
    },
    {
      "id": 940019,
      "name": "狮王酒坛",
      "hero": "张飞",
      "icon": "assets/mibao-items/940019.png",
      "maxLevel": 500,
      "baseAttributes": [
        {
          "id": 100,
          "amount": 500
        },
        {
          "id": 54,
          "amount": 500
        },
        {
          "id": 55,
          "amount": 500
        },
        {
          "id": 51,
          "amount": 2500
        }
      ],
      "growthAttributes": [
        {
          "id": 100,
          "amount": 250
        },
        {
          "id": 54,
          "amount": 250
        },
        {
          "id": 55,
          "amount": 250
        },
        {
          "id": 51,
          "amount": 1250
        }
      ],
      "strengthen": {
        "fromLevel": 1,
        "toLevel": 500,
        "costRule": {
          "silverPerLevel": 50000,
          "stoneStart": 10,
          "stoneStep": 5,
          "costItemId": 60085
        },
        "levelsConfigured": 998,
        "upgradeAttributes": [
          {
            "id": 100,
            "amount": 2500
          },
          {
            "id": 54,
            "amount": 2500
          },
          {
            "id": 55,
            "amount": 2500
          },
          {
            "id": 51,
            "amount": 12500
          }
        ],
        "thresholds": [
          {
            "level": 20,
            "costs": [
              {
                "itemId": 60087,
                "amount": 30
              },
              {
                "itemId": 940019,
                "amount": 2
              }
            ]
          },
          {
            "level": 40,
            "costs": [
              {
                "itemId": 60087,
                "amount": 60
              },
              {
                "itemId": 940019,
                "amount": 4
              }
            ]
          },
          {
            "level": 60,
            "costs": [
              {
                "itemId": 60087,
                "amount": 90
              },
              {
                "itemId": 940019,
                "amount": 6
              }
            ]
          },
          {
            "level": 80,
            "costs": [
              {
                "itemId": 60087,
                "amount": 120
              },
              {
                "itemId": 940019,
                "amount": 8
              }
            ]
          },
          {
            "level": 100,
            "costs": [
              {
                "itemId": 60087,
                "amount": 150
              },
              {
                "itemId": 940019,
                "amount": 10
              }
            ]
          },
          {
            "level": 120,
            "costs": [
              {
                "itemId": 60087,
                "amount": 180
              },
              {
                "itemId": 940019,
                "amount": 12
              }
            ]
          },
          {
            "level": 140,
            "costs": [
              {
                "itemId": 60087,
                "amount": 210
              },
              {
                "itemId": 940019,
                "amount": 16
              }
            ]
          },
          {
            "level": 160,
            "costs": [
              {
                "itemId": 60087,
                "amount": 240
              },
              {
                "itemId": 940019,
                "amount": 20
              }
            ]
          },
          {
            "level": 180,
            "costs": [
              {
                "itemId": 60087,
                "amount": 270
              },
              {
                "itemId": 940019,
                "amount": 25
              }
            ]
          },
          {
            "level": 200,
            "costs": [
              {
                "itemId": 60087,
                "amount": 300
              },
              {
                "itemId": 940019,
                "amount": 30
              }
            ]
          },
          {
            "level": 220,
            "costs": [
              {
                "itemId": 60087,
                "amount": 330
              },
              {
                "itemId": 940019,
                "amount": 35
              }
            ]
          },
          {
            "level": 240,
            "costs": [
              {
                "itemId": 60087,
                "amount": 360
              },
              {
                "itemId": 940019,
                "amount": 40
              }
            ]
          },
          {
            "level": 260,
            "costs": [
              {
                "itemId": 60087,
                "amount": 390
              },
              {
                "itemId": 940019,
                "amount": 45
              }
            ]
          },
          {
            "level": 280,
            "costs": [
              {
                "itemId": 60087,
                "amount": 420
              },
              {
                "itemId": 940019,
                "amount": 50
              }
            ]
          },
          {
            "level": 300,
            "costs": [
              {
                "itemId": 60087,
                "amount": 450
              },
              {
                "itemId": 940019,
                "amount": 50
              }
            ]
          },
          {
            "level": 320,
            "costs": [
              {
                "itemId": 60087,
                "amount": 480
              },
              {
                "itemId": 940019,
                "amount": 50
              }
            ]
          },
          {
            "level": 340,
            "costs": [
              {
                "itemId": 60087,
                "amount": 510
              },
              {
                "itemId": 940019,
                "amount": 50
              }
            ]
          },
          {
            "level": 360,
            "costs": [
              {
                "itemId": 60087,
                "amount": 540
              },
              {
                "itemId": 940019,
                "amount": 50
              }
            ]
          },
          {
            "level": 380,
            "costs": [
              {
                "itemId": 60087,
                "amount": 570
              },
              {
                "itemId": 940019,
                "amount": 50
              }
            ]
          },
          {
            "level": 400,
            "costs": [
              {
                "itemId": 60087,
                "amount": 600
              },
              {
                "itemId": 940019,
                "amount": 50
              }
            ]
          },
          {
            "level": 420,
            "costs": [
              {
                "itemId": 60087,
                "amount": 630
              },
              {
                "itemId": 940019,
                "amount": 50
              }
            ]
          },
          {
            "level": 440,
            "costs": [
              {
                "itemId": 60087,
                "amount": 660
              },
              {
                "itemId": 940019,
                "amount": 50
              }
            ]
          },
          {
            "level": 460,
            "costs": [
              {
                "itemId": 60087,
                "amount": 690
              },
              {
                "itemId": 940019,
                "amount": 50
              }
            ]
          },
          {
            "level": 480,
            "costs": [
              {
                "itemId": 60087,
                "amount": 720
              },
              {
                "itemId": 940019,
                "amount": 50
              }
            ]
          },
          {
            "level": 500,
            "costs": [
              {
                "itemId": 60087,
                "amount": 750
              },
              {
                "itemId": 940019,
                "amount": 50
              }
            ]
          }
        ]
      },
      "advance": {
        "thresholds": [
          {
            "level": 10,
            "costs": [
              {
                "itemId": 60086,
                "amount": 150
              },
              {
                "itemId": 940019,
                "amount": 2
              }
            ]
          },
          {
            "level": 30,
            "costs": [
              {
                "itemId": 60086,
                "amount": 300
              },
              {
                "itemId": 940019,
                "amount": 4
              }
            ]
          },
          {
            "level": 50,
            "costs": [
              {
                "itemId": 60086,
                "amount": 450
              },
              {
                "itemId": 940019,
                "amount": 6
              }
            ]
          },
          {
            "level": 70,
            "costs": [
              {
                "itemId": 60086,
                "amount": 600
              },
              {
                "itemId": 940019,
                "amount": 8
              }
            ]
          },
          {
            "level": 90,
            "costs": [
              {
                "itemId": 60086,
                "amount": 750
              },
              {
                "itemId": 940019,
                "amount": 10
              }
            ]
          },
          {
            "level": 110,
            "costs": [
              {
                "itemId": 60086,
                "amount": 900
              },
              {
                "itemId": 940019,
                "amount": 12
              }
            ]
          },
          {
            "level": 130,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1050
              },
              {
                "itemId": 940019,
                "amount": 16
              }
            ]
          },
          {
            "level": 150,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1200
              },
              {
                "itemId": 940019,
                "amount": 20
              }
            ]
          },
          {
            "level": 170,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1350
              },
              {
                "itemId": 940019,
                "amount": 25
              }
            ]
          },
          {
            "level": 190,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1500
              },
              {
                "itemId": 940019,
                "amount": 30
              }
            ]
          },
          {
            "level": 210,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1650
              },
              {
                "itemId": 940019,
                "amount": 35
              }
            ]
          },
          {
            "level": 230,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1800
              },
              {
                "itemId": 940019,
                "amount": 40
              }
            ]
          },
          {
            "level": 250,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1950
              },
              {
                "itemId": 940019,
                "amount": 45
              }
            ]
          },
          {
            "level": 270,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2100
              },
              {
                "itemId": 940019,
                "amount": 50
              }
            ]
          },
          {
            "level": 290,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2250
              },
              {
                "itemId": 940019,
                "amount": 50
              }
            ]
          },
          {
            "level": 310,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2400
              },
              {
                "itemId": 940019,
                "amount": 50
              }
            ]
          },
          {
            "level": 330,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2550
              },
              {
                "itemId": 940019,
                "amount": 50
              }
            ]
          },
          {
            "level": 350,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2700
              },
              {
                "itemId": 940019,
                "amount": 50
              }
            ]
          },
          {
            "level": 370,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2850
              },
              {
                "itemId": 940019,
                "amount": 50
              }
            ]
          },
          {
            "level": 390,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3000
              },
              {
                "itemId": 940019,
                "amount": 50
              }
            ]
          },
          {
            "level": 410,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3150
              },
              {
                "itemId": 940019,
                "amount": 50
              }
            ]
          },
          {
            "level": 430,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3300
              },
              {
                "itemId": 940019,
                "amount": 50
              }
            ]
          },
          {
            "level": 450,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3450
              },
              {
                "itemId": 940019,
                "amount": 50
              }
            ]
          },
          {
            "level": 470,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3600
              },
              {
                "itemId": 940019,
                "amount": 50
              }
            ]
          },
          {
            "level": 490,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3750
              },
              {
                "itemId": 940019,
                "amount": 50
              }
            ]
          }
        ],
        "attributes": {
          "1": [
            {
              "id": 54,
              "amount": 5000
            }
          ],
          "2": [
            {
              "id": 56,
              "amount": 100
            }
          ],
          "3": [
            {
              "id": 55,
              "amount": 10000
            }
          ],
          "4": [
            {
              "id": 57,
              "amount": 200
            }
          ],
          "5": [
            {
              "id": 51,
              "amount": 100000
            }
          ],
          "6": [
            {
              "id": 60,
              "amount": 300
            }
          ],
          "7": [
            {
              "id": 100,
              "amount": 30000
            }
          ],
          "8": [
            {
              "id": 61,
              "amount": 400
            }
          ],
          "9": [
            {
              "id": 25,
              "amount": 500
            }
          ],
          "10": [
            {
              "id": 24,
              "amount": 600
            }
          ],
          "11": [
            {
              "id": 54,
              "amount": 40000
            }
          ],
          "12": [
            {
              "id": 22,
              "amount": 500
            }
          ],
          "13": [
            {
              "id": 55,
              "amount": 50000
            }
          ],
          "14": [
            {
              "id": 23,
              "amount": 600
            }
          ],
          "15": [
            {
              "id": 51,
              "amount": 300000
            }
          ],
          "16": [
            {
              "id": 100,
              "amount": 70000
            }
          ],
          "17": [
            {
              "id": 23,
              "amount": 500
            }
          ],
          "18": [
            {
              "id": 22,
              "amount": 600
            }
          ],
          "19": [
            {
              "id": 102,
              "amount": 500
            }
          ],
          "20": [
            {
              "id": 101,
              "amount": 600
            }
          ],
          "21": [
            {
              "id": 54,
              "amount": 80000
            }
          ],
          "22": [
            {
              "id": 101,
              "amount": 600
            }
          ],
          "23": [
            {
              "id": 102,
              "amount": 700
            }
          ],
          "24": [
            {
              "id": 180,
              "amount": 600
            }
          ],
          "25": [
            {
              "id": 179,
              "amount": 700
            }
          ]
        },
        "requirements": [
          {
            "advance": 1,
            "requirement": 1
          },
          {
            "advance": 3,
            "requirement": 2
          },
          {
            "advance": 6,
            "requirement": 3
          },
          {
            "advance": 10,
            "requirement": 4
          },
          {
            "advance": 15,
            "requirement": 5
          },
          {
            "advance": 20,
            "requirement": 6
          },
          {
            "advance": 25,
            "requirement": 7
          }
        ]
      }
    },
    {
      "id": 940020,
      "name": "新月铃铛",
      "hero": "孙尚香",
      "icon": "assets/mibao-items/940020.png",
      "maxLevel": 500,
      "baseAttributes": [
        {
          "id": 100,
          "amount": 500
        },
        {
          "id": 54,
          "amount": 500
        },
        {
          "id": 55,
          "amount": 500
        },
        {
          "id": 51,
          "amount": 2500
        }
      ],
      "growthAttributes": [
        {
          "id": 100,
          "amount": 250
        },
        {
          "id": 54,
          "amount": 250
        },
        {
          "id": 55,
          "amount": 250
        },
        {
          "id": 51,
          "amount": 1250
        }
      ],
      "strengthen": {
        "fromLevel": 1,
        "toLevel": 500,
        "costRule": {
          "silverPerLevel": 50000,
          "stoneStart": 10,
          "stoneStep": 5,
          "costItemId": 60085
        },
        "levelsConfigured": 998,
        "upgradeAttributes": [
          {
            "id": 100,
            "amount": 2500
          },
          {
            "id": 54,
            "amount": 2500
          },
          {
            "id": 55,
            "amount": 2500
          },
          {
            "id": 51,
            "amount": 12500
          }
        ],
        "thresholds": [
          {
            "level": 20,
            "costs": [
              {
                "itemId": 60087,
                "amount": 30
              },
              {
                "itemId": 940020,
                "amount": 2
              }
            ]
          },
          {
            "level": 40,
            "costs": [
              {
                "itemId": 60087,
                "amount": 60
              },
              {
                "itemId": 940020,
                "amount": 4
              }
            ]
          },
          {
            "level": 60,
            "costs": [
              {
                "itemId": 60087,
                "amount": 90
              },
              {
                "itemId": 940020,
                "amount": 6
              }
            ]
          },
          {
            "level": 80,
            "costs": [
              {
                "itemId": 60087,
                "amount": 120
              },
              {
                "itemId": 940020,
                "amount": 8
              }
            ]
          },
          {
            "level": 100,
            "costs": [
              {
                "itemId": 60087,
                "amount": 150
              },
              {
                "itemId": 940020,
                "amount": 10
              }
            ]
          },
          {
            "level": 120,
            "costs": [
              {
                "itemId": 60087,
                "amount": 180
              },
              {
                "itemId": 940020,
                "amount": 12
              }
            ]
          },
          {
            "level": 140,
            "costs": [
              {
                "itemId": 60087,
                "amount": 210
              },
              {
                "itemId": 940020,
                "amount": 16
              }
            ]
          },
          {
            "level": 160,
            "costs": [
              {
                "itemId": 60087,
                "amount": 240
              },
              {
                "itemId": 940020,
                "amount": 20
              }
            ]
          },
          {
            "level": 180,
            "costs": [
              {
                "itemId": 60087,
                "amount": 270
              },
              {
                "itemId": 940020,
                "amount": 25
              }
            ]
          },
          {
            "level": 200,
            "costs": [
              {
                "itemId": 60087,
                "amount": 300
              },
              {
                "itemId": 940020,
                "amount": 30
              }
            ]
          },
          {
            "level": 220,
            "costs": [
              {
                "itemId": 60087,
                "amount": 330
              },
              {
                "itemId": 940020,
                "amount": 35
              }
            ]
          },
          {
            "level": 240,
            "costs": [
              {
                "itemId": 60087,
                "amount": 360
              },
              {
                "itemId": 940020,
                "amount": 40
              }
            ]
          },
          {
            "level": 260,
            "costs": [
              {
                "itemId": 60087,
                "amount": 390
              },
              {
                "itemId": 940020,
                "amount": 45
              }
            ]
          },
          {
            "level": 280,
            "costs": [
              {
                "itemId": 60087,
                "amount": 420
              },
              {
                "itemId": 940020,
                "amount": 50
              }
            ]
          },
          {
            "level": 300,
            "costs": [
              {
                "itemId": 60087,
                "amount": 450
              },
              {
                "itemId": 940020,
                "amount": 50
              }
            ]
          },
          {
            "level": 320,
            "costs": [
              {
                "itemId": 60087,
                "amount": 480
              },
              {
                "itemId": 940020,
                "amount": 50
              }
            ]
          },
          {
            "level": 340,
            "costs": [
              {
                "itemId": 60087,
                "amount": 510
              },
              {
                "itemId": 940020,
                "amount": 50
              }
            ]
          },
          {
            "level": 360,
            "costs": [
              {
                "itemId": 60087,
                "amount": 540
              },
              {
                "itemId": 940020,
                "amount": 50
              }
            ]
          },
          {
            "level": 380,
            "costs": [
              {
                "itemId": 60087,
                "amount": 570
              },
              {
                "itemId": 940020,
                "amount": 50
              }
            ]
          },
          {
            "level": 400,
            "costs": [
              {
                "itemId": 60087,
                "amount": 600
              },
              {
                "itemId": 940020,
                "amount": 50
              }
            ]
          },
          {
            "level": 420,
            "costs": [
              {
                "itemId": 60087,
                "amount": 630
              },
              {
                "itemId": 940020,
                "amount": 50
              }
            ]
          },
          {
            "level": 440,
            "costs": [
              {
                "itemId": 60087,
                "amount": 660
              },
              {
                "itemId": 940020,
                "amount": 50
              }
            ]
          },
          {
            "level": 460,
            "costs": [
              {
                "itemId": 60087,
                "amount": 690
              },
              {
                "itemId": 940020,
                "amount": 50
              }
            ]
          },
          {
            "level": 480,
            "costs": [
              {
                "itemId": 60087,
                "amount": 720
              },
              {
                "itemId": 940020,
                "amount": 50
              }
            ]
          },
          {
            "level": 500,
            "costs": [
              {
                "itemId": 60087,
                "amount": 750
              },
              {
                "itemId": 940020,
                "amount": 50
              }
            ]
          }
        ]
      },
      "advance": {
        "thresholds": [
          {
            "level": 10,
            "costs": [
              {
                "itemId": 60086,
                "amount": 150
              },
              {
                "itemId": 940020,
                "amount": 2
              }
            ]
          },
          {
            "level": 30,
            "costs": [
              {
                "itemId": 60086,
                "amount": 300
              },
              {
                "itemId": 940020,
                "amount": 4
              }
            ]
          },
          {
            "level": 50,
            "costs": [
              {
                "itemId": 60086,
                "amount": 450
              },
              {
                "itemId": 940020,
                "amount": 6
              }
            ]
          },
          {
            "level": 70,
            "costs": [
              {
                "itemId": 60086,
                "amount": 600
              },
              {
                "itemId": 940020,
                "amount": 8
              }
            ]
          },
          {
            "level": 90,
            "costs": [
              {
                "itemId": 60086,
                "amount": 750
              },
              {
                "itemId": 940020,
                "amount": 10
              }
            ]
          },
          {
            "level": 110,
            "costs": [
              {
                "itemId": 60086,
                "amount": 900
              },
              {
                "itemId": 940020,
                "amount": 12
              }
            ]
          },
          {
            "level": 130,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1050
              },
              {
                "itemId": 940020,
                "amount": 16
              }
            ]
          },
          {
            "level": 150,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1200
              },
              {
                "itemId": 940020,
                "amount": 20
              }
            ]
          },
          {
            "level": 170,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1350
              },
              {
                "itemId": 940020,
                "amount": 25
              }
            ]
          },
          {
            "level": 190,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1500
              },
              {
                "itemId": 940020,
                "amount": 30
              }
            ]
          },
          {
            "level": 210,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1650
              },
              {
                "itemId": 940020,
                "amount": 35
              }
            ]
          },
          {
            "level": 230,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1800
              },
              {
                "itemId": 940020,
                "amount": 40
              }
            ]
          },
          {
            "level": 250,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1950
              },
              {
                "itemId": 940020,
                "amount": 45
              }
            ]
          },
          {
            "level": 270,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2100
              },
              {
                "itemId": 940020,
                "amount": 50
              }
            ]
          },
          {
            "level": 290,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2250
              },
              {
                "itemId": 940020,
                "amount": 50
              }
            ]
          },
          {
            "level": 310,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2400
              },
              {
                "itemId": 940020,
                "amount": 50
              }
            ]
          },
          {
            "level": 330,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2550
              },
              {
                "itemId": 940020,
                "amount": 50
              }
            ]
          },
          {
            "level": 350,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2700
              },
              {
                "itemId": 940020,
                "amount": 50
              }
            ]
          },
          {
            "level": 370,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2850
              },
              {
                "itemId": 940020,
                "amount": 50
              }
            ]
          },
          {
            "level": 390,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3000
              },
              {
                "itemId": 940020,
                "amount": 50
              }
            ]
          },
          {
            "level": 410,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3150
              },
              {
                "itemId": 940020,
                "amount": 50
              }
            ]
          },
          {
            "level": 430,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3300
              },
              {
                "itemId": 940020,
                "amount": 50
              }
            ]
          },
          {
            "level": 450,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3450
              },
              {
                "itemId": 940020,
                "amount": 50
              }
            ]
          },
          {
            "level": 470,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3600
              },
              {
                "itemId": 940020,
                "amount": 50
              }
            ]
          },
          {
            "level": 490,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3750
              },
              {
                "itemId": 940020,
                "amount": 50
              }
            ]
          }
        ],
        "attributes": {
          "1": [
            {
              "id": 54,
              "amount": 5000
            }
          ],
          "2": [
            {
              "id": 56,
              "amount": 100
            }
          ],
          "3": [
            {
              "id": 55,
              "amount": 10000
            }
          ],
          "4": [
            {
              "id": 57,
              "amount": 200
            }
          ],
          "5": [
            {
              "id": 51,
              "amount": 100000
            }
          ],
          "6": [
            {
              "id": 60,
              "amount": 300
            }
          ],
          "7": [
            {
              "id": 100,
              "amount": 30000
            }
          ],
          "8": [
            {
              "id": 61,
              "amount": 400
            }
          ],
          "9": [
            {
              "id": 25,
              "amount": 500
            }
          ],
          "10": [
            {
              "id": 24,
              "amount": 600
            }
          ],
          "11": [
            {
              "id": 54,
              "amount": 40000
            }
          ],
          "12": [
            {
              "id": 22,
              "amount": 500
            }
          ],
          "13": [
            {
              "id": 55,
              "amount": 50000
            }
          ],
          "14": [
            {
              "id": 23,
              "amount": 600
            }
          ],
          "15": [
            {
              "id": 51,
              "amount": 300000
            }
          ],
          "16": [
            {
              "id": 100,
              "amount": 70000
            }
          ],
          "17": [
            {
              "id": 23,
              "amount": 500
            }
          ],
          "18": [
            {
              "id": 22,
              "amount": 600
            }
          ],
          "19": [
            {
              "id": 102,
              "amount": 500
            }
          ],
          "20": [
            {
              "id": 101,
              "amount": 600
            }
          ],
          "21": [
            {
              "id": 54,
              "amount": 80000
            }
          ],
          "22": [
            {
              "id": 101,
              "amount": 600
            }
          ],
          "23": [
            {
              "id": 102,
              "amount": 700
            }
          ],
          "24": [
            {
              "id": 180,
              "amount": 600
            }
          ],
          "25": [
            {
              "id": 179,
              "amount": 700
            }
          ]
        },
        "requirements": [
          {
            "advance": 1,
            "requirement": 1
          },
          {
            "advance": 3,
            "requirement": 2
          },
          {
            "advance": 6,
            "requirement": 3
          },
          {
            "advance": 10,
            "requirement": 4
          },
          {
            "advance": 15,
            "requirement": 5
          },
          {
            "advance": 20,
            "requirement": 6
          },
          {
            "advance": 25,
            "requirement": 7
          }
        ]
      }
    },
    {
      "id": 940021,
      "name": "万蛊瓶",
      "hero": "贾诩",
      "icon": "assets/mibao-items/940021.png",
      "maxLevel": 500,
      "baseAttributes": [
        {
          "id": 100,
          "amount": 500
        },
        {
          "id": 54,
          "amount": 500
        },
        {
          "id": 55,
          "amount": 500
        },
        {
          "id": 51,
          "amount": 2500
        }
      ],
      "growthAttributes": [
        {
          "id": 100,
          "amount": 250
        },
        {
          "id": 54,
          "amount": 250
        },
        {
          "id": 55,
          "amount": 250
        },
        {
          "id": 51,
          "amount": 1250
        }
      ],
      "strengthen": {
        "fromLevel": 1,
        "toLevel": 500,
        "costRule": {
          "silverPerLevel": 50000,
          "stoneStart": 10,
          "stoneStep": 5,
          "costItemId": 60085
        },
        "levelsConfigured": 998,
        "upgradeAttributes": [
          {
            "id": 100,
            "amount": 2500
          },
          {
            "id": 54,
            "amount": 2500
          },
          {
            "id": 55,
            "amount": 2500
          },
          {
            "id": 51,
            "amount": 12500
          }
        ],
        "thresholds": [
          {
            "level": 20,
            "costs": [
              {
                "itemId": 60087,
                "amount": 30
              },
              {
                "itemId": 940021,
                "amount": 2
              }
            ]
          },
          {
            "level": 40,
            "costs": [
              {
                "itemId": 60087,
                "amount": 60
              },
              {
                "itemId": 940021,
                "amount": 4
              }
            ]
          },
          {
            "level": 60,
            "costs": [
              {
                "itemId": 60087,
                "amount": 90
              },
              {
                "itemId": 940021,
                "amount": 6
              }
            ]
          },
          {
            "level": 80,
            "costs": [
              {
                "itemId": 60087,
                "amount": 120
              },
              {
                "itemId": 940021,
                "amount": 8
              }
            ]
          },
          {
            "level": 100,
            "costs": [
              {
                "itemId": 60087,
                "amount": 150
              },
              {
                "itemId": 940021,
                "amount": 10
              }
            ]
          },
          {
            "level": 120,
            "costs": [
              {
                "itemId": 60087,
                "amount": 180
              },
              {
                "itemId": 940021,
                "amount": 12
              }
            ]
          },
          {
            "level": 140,
            "costs": [
              {
                "itemId": 60087,
                "amount": 210
              },
              {
                "itemId": 940021,
                "amount": 16
              }
            ]
          },
          {
            "level": 160,
            "costs": [
              {
                "itemId": 60087,
                "amount": 240
              },
              {
                "itemId": 940021,
                "amount": 20
              }
            ]
          },
          {
            "level": 180,
            "costs": [
              {
                "itemId": 60087,
                "amount": 270
              },
              {
                "itemId": 940021,
                "amount": 25
              }
            ]
          },
          {
            "level": 200,
            "costs": [
              {
                "itemId": 60087,
                "amount": 300
              },
              {
                "itemId": 940021,
                "amount": 30
              }
            ]
          },
          {
            "level": 220,
            "costs": [
              {
                "itemId": 60087,
                "amount": 330
              },
              {
                "itemId": 940021,
                "amount": 35
              }
            ]
          },
          {
            "level": 240,
            "costs": [
              {
                "itemId": 60087,
                "amount": 360
              },
              {
                "itemId": 940021,
                "amount": 40
              }
            ]
          },
          {
            "level": 260,
            "costs": [
              {
                "itemId": 60087,
                "amount": 390
              },
              {
                "itemId": 940021,
                "amount": 45
              }
            ]
          },
          {
            "level": 280,
            "costs": [
              {
                "itemId": 60087,
                "amount": 420
              },
              {
                "itemId": 940021,
                "amount": 50
              }
            ]
          },
          {
            "level": 300,
            "costs": [
              {
                "itemId": 60087,
                "amount": 450
              },
              {
                "itemId": 940021,
                "amount": 50
              }
            ]
          },
          {
            "level": 320,
            "costs": [
              {
                "itemId": 60087,
                "amount": 480
              },
              {
                "itemId": 940021,
                "amount": 50
              }
            ]
          },
          {
            "level": 340,
            "costs": [
              {
                "itemId": 60087,
                "amount": 510
              },
              {
                "itemId": 940021,
                "amount": 50
              }
            ]
          },
          {
            "level": 360,
            "costs": [
              {
                "itemId": 60087,
                "amount": 540
              },
              {
                "itemId": 940021,
                "amount": 50
              }
            ]
          },
          {
            "level": 380,
            "costs": [
              {
                "itemId": 60087,
                "amount": 570
              },
              {
                "itemId": 940021,
                "amount": 50
              }
            ]
          },
          {
            "level": 400,
            "costs": [
              {
                "itemId": 60087,
                "amount": 600
              },
              {
                "itemId": 940021,
                "amount": 50
              }
            ]
          },
          {
            "level": 420,
            "costs": [
              {
                "itemId": 60087,
                "amount": 630
              },
              {
                "itemId": 940021,
                "amount": 50
              }
            ]
          },
          {
            "level": 440,
            "costs": [
              {
                "itemId": 60087,
                "amount": 660
              },
              {
                "itemId": 940021,
                "amount": 50
              }
            ]
          },
          {
            "level": 460,
            "costs": [
              {
                "itemId": 60087,
                "amount": 690
              },
              {
                "itemId": 940021,
                "amount": 50
              }
            ]
          },
          {
            "level": 480,
            "costs": [
              {
                "itemId": 60087,
                "amount": 720
              },
              {
                "itemId": 940021,
                "amount": 50
              }
            ]
          },
          {
            "level": 500,
            "costs": [
              {
                "itemId": 60087,
                "amount": 750
              },
              {
                "itemId": 940021,
                "amount": 50
              }
            ]
          }
        ]
      },
      "advance": {
        "thresholds": [
          {
            "level": 10,
            "costs": [
              {
                "itemId": 60086,
                "amount": 150
              },
              {
                "itemId": 940021,
                "amount": 2
              }
            ]
          },
          {
            "level": 30,
            "costs": [
              {
                "itemId": 60086,
                "amount": 300
              },
              {
                "itemId": 940021,
                "amount": 4
              }
            ]
          },
          {
            "level": 50,
            "costs": [
              {
                "itemId": 60086,
                "amount": 450
              },
              {
                "itemId": 940021,
                "amount": 6
              }
            ]
          },
          {
            "level": 70,
            "costs": [
              {
                "itemId": 60086,
                "amount": 600
              },
              {
                "itemId": 940021,
                "amount": 8
              }
            ]
          },
          {
            "level": 90,
            "costs": [
              {
                "itemId": 60086,
                "amount": 750
              },
              {
                "itemId": 940021,
                "amount": 10
              }
            ]
          },
          {
            "level": 110,
            "costs": [
              {
                "itemId": 60086,
                "amount": 900
              },
              {
                "itemId": 940021,
                "amount": 12
              }
            ]
          },
          {
            "level": 130,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1050
              },
              {
                "itemId": 940021,
                "amount": 16
              }
            ]
          },
          {
            "level": 150,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1200
              },
              {
                "itemId": 940021,
                "amount": 20
              }
            ]
          },
          {
            "level": 170,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1350
              },
              {
                "itemId": 940021,
                "amount": 25
              }
            ]
          },
          {
            "level": 190,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1500
              },
              {
                "itemId": 940021,
                "amount": 30
              }
            ]
          },
          {
            "level": 210,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1650
              },
              {
                "itemId": 940021,
                "amount": 35
              }
            ]
          },
          {
            "level": 230,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1800
              },
              {
                "itemId": 940021,
                "amount": 40
              }
            ]
          },
          {
            "level": 250,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1950
              },
              {
                "itemId": 940021,
                "amount": 45
              }
            ]
          },
          {
            "level": 270,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2100
              },
              {
                "itemId": 940021,
                "amount": 50
              }
            ]
          },
          {
            "level": 290,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2250
              },
              {
                "itemId": 940021,
                "amount": 50
              }
            ]
          },
          {
            "level": 310,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2400
              },
              {
                "itemId": 940021,
                "amount": 50
              }
            ]
          },
          {
            "level": 330,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2550
              },
              {
                "itemId": 940021,
                "amount": 50
              }
            ]
          },
          {
            "level": 350,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2700
              },
              {
                "itemId": 940021,
                "amount": 50
              }
            ]
          },
          {
            "level": 370,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2850
              },
              {
                "itemId": 940021,
                "amount": 50
              }
            ]
          },
          {
            "level": 390,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3000
              },
              {
                "itemId": 940021,
                "amount": 50
              }
            ]
          },
          {
            "level": 410,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3150
              },
              {
                "itemId": 940021,
                "amount": 50
              }
            ]
          },
          {
            "level": 430,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3300
              },
              {
                "itemId": 940021,
                "amount": 50
              }
            ]
          },
          {
            "level": 450,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3450
              },
              {
                "itemId": 940021,
                "amount": 50
              }
            ]
          },
          {
            "level": 470,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3600
              },
              {
                "itemId": 940021,
                "amount": 50
              }
            ]
          },
          {
            "level": 490,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3750
              },
              {
                "itemId": 940021,
                "amount": 50
              }
            ]
          }
        ],
        "attributes": {
          "1": [
            {
              "id": 54,
              "amount": 5000
            }
          ],
          "2": [
            {
              "id": 56,
              "amount": 100
            }
          ],
          "3": [
            {
              "id": 55,
              "amount": 10000
            }
          ],
          "4": [
            {
              "id": 57,
              "amount": 200
            }
          ],
          "5": [
            {
              "id": 51,
              "amount": 100000
            }
          ],
          "6": [
            {
              "id": 60,
              "amount": 300
            }
          ],
          "7": [
            {
              "id": 100,
              "amount": 30000
            }
          ],
          "8": [
            {
              "id": 61,
              "amount": 400
            }
          ],
          "9": [
            {
              "id": 25,
              "amount": 500
            }
          ],
          "10": [
            {
              "id": 24,
              "amount": 600
            }
          ],
          "11": [
            {
              "id": 54,
              "amount": 40000
            }
          ],
          "12": [
            {
              "id": 22,
              "amount": 500
            }
          ],
          "13": [
            {
              "id": 55,
              "amount": 50000
            }
          ],
          "14": [
            {
              "id": 23,
              "amount": 600
            }
          ],
          "15": [
            {
              "id": 51,
              "amount": 300000
            }
          ],
          "16": [
            {
              "id": 100,
              "amount": 70000
            }
          ],
          "17": [
            {
              "id": 23,
              "amount": 500
            }
          ],
          "18": [
            {
              "id": 22,
              "amount": 600
            }
          ],
          "19": [
            {
              "id": 102,
              "amount": 500
            }
          ],
          "20": [
            {
              "id": 101,
              "amount": 600
            }
          ],
          "21": [
            {
              "id": 54,
              "amount": 80000
            }
          ],
          "22": [
            {
              "id": 101,
              "amount": 600
            }
          ],
          "23": [
            {
              "id": 102,
              "amount": 700
            }
          ],
          "24": [
            {
              "id": 180,
              "amount": 600
            }
          ],
          "25": [
            {
              "id": 179,
              "amount": 700
            }
          ]
        },
        "requirements": [
          {
            "advance": 1,
            "requirement": 1
          },
          {
            "advance": 3,
            "requirement": 2
          },
          {
            "advance": 6,
            "requirement": 3
          },
          {
            "advance": 10,
            "requirement": 4
          },
          {
            "advance": 15,
            "requirement": 5
          },
          {
            "advance": 20,
            "requirement": 6
          },
          {
            "advance": 25,
            "requirement": 7
          }
        ]
      }
    },
    {
      "id": 940022,
      "name": "鬼面令",
      "hero": "庞德",
      "icon": "assets/mibao-items/940022.png",
      "maxLevel": 500,
      "baseAttributes": [
        {
          "id": 100,
          "amount": 500
        },
        {
          "id": 54,
          "amount": 500
        },
        {
          "id": 55,
          "amount": 500
        },
        {
          "id": 51,
          "amount": 2500
        }
      ],
      "growthAttributes": [
        {
          "id": 100,
          "amount": 250
        },
        {
          "id": 54,
          "amount": 250
        },
        {
          "id": 55,
          "amount": 250
        },
        {
          "id": 51,
          "amount": 1250
        }
      ],
      "strengthen": {
        "fromLevel": 1,
        "toLevel": 500,
        "costRule": {
          "silverPerLevel": 50000,
          "stoneStart": 10,
          "stoneStep": 5,
          "costItemId": 60085
        },
        "levelsConfigured": 998,
        "upgradeAttributes": [
          {
            "id": 100,
            "amount": 2500
          },
          {
            "id": 54,
            "amount": 2500
          },
          {
            "id": 55,
            "amount": 2500
          },
          {
            "id": 51,
            "amount": 12500
          }
        ],
        "thresholds": [
          {
            "level": 20,
            "costs": [
              {
                "itemId": 60087,
                "amount": 50
              },
              {
                "itemId": 940022,
                "amount": 2
              }
            ]
          },
          {
            "level": 40,
            "costs": [
              {
                "itemId": 60087,
                "amount": 100
              },
              {
                "itemId": 940022,
                "amount": 4
              }
            ]
          },
          {
            "level": 60,
            "costs": [
              {
                "itemId": 60087,
                "amount": 150
              },
              {
                "itemId": 940022,
                "amount": 6
              }
            ]
          },
          {
            "level": 80,
            "costs": [
              {
                "itemId": 60087,
                "amount": 200
              },
              {
                "itemId": 940022,
                "amount": 8
              }
            ]
          },
          {
            "level": 100,
            "costs": [
              {
                "itemId": 60087,
                "amount": 250
              },
              {
                "itemId": 940022,
                "amount": 10
              }
            ]
          },
          {
            "level": 120,
            "costs": [
              {
                "itemId": 60087,
                "amount": 300
              },
              {
                "itemId": 940022,
                "amount": 12
              }
            ]
          },
          {
            "level": 140,
            "costs": [
              {
                "itemId": 60087,
                "amount": 350
              },
              {
                "itemId": 940022,
                "amount": 16
              }
            ]
          },
          {
            "level": 160,
            "costs": [
              {
                "itemId": 60087,
                "amount": 400
              },
              {
                "itemId": 940022,
                "amount": 20
              }
            ]
          },
          {
            "level": 180,
            "costs": [
              {
                "itemId": 60087,
                "amount": 450
              },
              {
                "itemId": 940022,
                "amount": 25
              }
            ]
          },
          {
            "level": 200,
            "costs": [
              {
                "itemId": 60087,
                "amount": 500
              },
              {
                "itemId": 940022,
                "amount": 30
              }
            ]
          },
          {
            "level": 220,
            "costs": [
              {
                "itemId": 60087,
                "amount": 550
              },
              {
                "itemId": 940022,
                "amount": 35
              }
            ]
          },
          {
            "level": 240,
            "costs": [
              {
                "itemId": 60087,
                "amount": 600
              },
              {
                "itemId": 940022,
                "amount": 40
              }
            ]
          },
          {
            "level": 260,
            "costs": [
              {
                "itemId": 60087,
                "amount": 650
              },
              {
                "itemId": 940022,
                "amount": 45
              }
            ]
          },
          {
            "level": 280,
            "costs": [
              {
                "itemId": 60087,
                "amount": 700
              },
              {
                "itemId": 940022,
                "amount": 50
              }
            ]
          },
          {
            "level": 300,
            "costs": [
              {
                "itemId": 60087,
                "amount": 750
              },
              {
                "itemId": 940022,
                "amount": 50
              }
            ]
          },
          {
            "level": 320,
            "costs": [
              {
                "itemId": 60087,
                "amount": 800
              },
              {
                "itemId": 940022,
                "amount": 50
              }
            ]
          },
          {
            "level": 340,
            "costs": [
              {
                "itemId": 60087,
                "amount": 850
              },
              {
                "itemId": 940022,
                "amount": 50
              }
            ]
          },
          {
            "level": 360,
            "costs": [
              {
                "itemId": 60087,
                "amount": 900
              },
              {
                "itemId": 940022,
                "amount": 50
              }
            ]
          },
          {
            "level": 380,
            "costs": [
              {
                "itemId": 60087,
                "amount": 950
              },
              {
                "itemId": 940022,
                "amount": 50
              }
            ]
          },
          {
            "level": 400,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1000
              },
              {
                "itemId": 940022,
                "amount": 50
              }
            ]
          },
          {
            "level": 420,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1050
              },
              {
                "itemId": 940022,
                "amount": 50
              }
            ]
          },
          {
            "level": 440,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1100
              },
              {
                "itemId": 940022,
                "amount": 50
              }
            ]
          },
          {
            "level": 460,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1150
              },
              {
                "itemId": 940022,
                "amount": 50
              }
            ]
          },
          {
            "level": 480,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1200
              },
              {
                "itemId": 940022,
                "amount": 50
              }
            ]
          },
          {
            "level": 500,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1250
              },
              {
                "itemId": 940022,
                "amount": 50
              }
            ]
          }
        ]
      },
      "advance": {
        "thresholds": [
          {
            "level": 10,
            "costs": [
              {
                "itemId": 60086,
                "amount": 150
              },
              {
                "itemId": 940022,
                "amount": 2
              }
            ]
          },
          {
            "level": 30,
            "costs": [
              {
                "itemId": 60086,
                "amount": 300
              },
              {
                "itemId": 940022,
                "amount": 4
              }
            ]
          },
          {
            "level": 50,
            "costs": [
              {
                "itemId": 60086,
                "amount": 450
              },
              {
                "itemId": 940022,
                "amount": 6
              }
            ]
          },
          {
            "level": 70,
            "costs": [
              {
                "itemId": 60086,
                "amount": 600
              },
              {
                "itemId": 940022,
                "amount": 8
              }
            ]
          },
          {
            "level": 90,
            "costs": [
              {
                "itemId": 60086,
                "amount": 750
              },
              {
                "itemId": 940022,
                "amount": 10
              }
            ]
          },
          {
            "level": 110,
            "costs": [
              {
                "itemId": 60086,
                "amount": 900
              },
              {
                "itemId": 940022,
                "amount": 12
              }
            ]
          },
          {
            "level": 130,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1050
              },
              {
                "itemId": 940022,
                "amount": 16
              }
            ]
          },
          {
            "level": 150,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1200
              },
              {
                "itemId": 940022,
                "amount": 20
              }
            ]
          },
          {
            "level": 170,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1350
              },
              {
                "itemId": 940022,
                "amount": 25
              }
            ]
          },
          {
            "level": 190,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1500
              },
              {
                "itemId": 940022,
                "amount": 30
              }
            ]
          },
          {
            "level": 210,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1650
              },
              {
                "itemId": 940022,
                "amount": 35
              }
            ]
          },
          {
            "level": 230,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1800
              },
              {
                "itemId": 940022,
                "amount": 40
              }
            ]
          },
          {
            "level": 250,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1950
              },
              {
                "itemId": 940022,
                "amount": 45
              }
            ]
          },
          {
            "level": 270,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2100
              },
              {
                "itemId": 940022,
                "amount": 50
              }
            ]
          },
          {
            "level": 290,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2250
              },
              {
                "itemId": 940022,
                "amount": 50
              }
            ]
          },
          {
            "level": 310,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2400
              },
              {
                "itemId": 940022,
                "amount": 50
              }
            ]
          },
          {
            "level": 330,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2550
              },
              {
                "itemId": 940022,
                "amount": 50
              }
            ]
          },
          {
            "level": 350,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2700
              },
              {
                "itemId": 940022,
                "amount": 50
              }
            ]
          },
          {
            "level": 370,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2850
              },
              {
                "itemId": 940022,
                "amount": 50
              }
            ]
          },
          {
            "level": 390,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3000
              },
              {
                "itemId": 940022,
                "amount": 50
              }
            ]
          },
          {
            "level": 410,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3150
              },
              {
                "itemId": 940022,
                "amount": 50
              }
            ]
          },
          {
            "level": 430,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3300
              },
              {
                "itemId": 940022,
                "amount": 50
              }
            ]
          },
          {
            "level": 450,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3450
              },
              {
                "itemId": 940022,
                "amount": 50
              }
            ]
          },
          {
            "level": 470,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3600
              },
              {
                "itemId": 940022,
                "amount": 50
              }
            ]
          },
          {
            "level": 490,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3750
              },
              {
                "itemId": 940022,
                "amount": 50
              }
            ]
          }
        ],
        "attributes": {
          "1": [
            {
              "id": 54,
              "amount": 5000
            }
          ],
          "2": [
            {
              "id": 56,
              "amount": 200
            }
          ],
          "3": [
            {
              "id": 55,
              "amount": 10000
            }
          ],
          "4": [
            {
              "id": 57,
              "amount": 300
            }
          ],
          "5": [
            {
              "id": 51,
              "amount": 100000
            }
          ],
          "6": [
            {
              "id": 60,
              "amount": 400
            }
          ],
          "7": [
            {
              "id": 100,
              "amount": 30000
            }
          ],
          "8": [
            {
              "id": 61,
              "amount": 500
            }
          ],
          "9": [
            {
              "id": 25,
              "amount": 600
            }
          ],
          "10": [
            {
              "id": 24,
              "amount": 700
            }
          ],
          "11": [
            {
              "id": 54,
              "amount": 40000
            }
          ],
          "12": [
            {
              "id": 22,
              "amount": 600
            }
          ],
          "13": [
            {
              "id": 55,
              "amount": 50000
            }
          ],
          "14": [
            {
              "id": 23,
              "amount": 700
            }
          ],
          "15": [
            {
              "id": 51,
              "amount": 300000
            }
          ],
          "16": [
            {
              "id": 100,
              "amount": 70000
            }
          ],
          "17": [
            {
              "id": 23,
              "amount": 600
            }
          ],
          "18": [
            {
              "id": 22,
              "amount": 700
            }
          ],
          "19": [
            {
              "id": 102,
              "amount": 600
            }
          ],
          "20": [
            {
              "id": 101,
              "amount": 700
            }
          ],
          "21": [
            {
              "id": 54,
              "amount": 80000
            }
          ],
          "22": [
            {
              "id": 101,
              "amount": 700
            }
          ],
          "23": [
            {
              "id": 102,
              "amount": 800
            }
          ],
          "24": [
            {
              "id": 180,
              "amount": 700
            }
          ],
          "25": [
            {
              "id": 179,
              "amount": 800
            }
          ]
        },
        "requirements": [
          {
            "advance": 1,
            "requirement": 1
          },
          {
            "advance": 3,
            "requirement": 2
          },
          {
            "advance": 6,
            "requirement": 3
          },
          {
            "advance": 10,
            "requirement": 4
          },
          {
            "advance": 15,
            "requirement": 5
          },
          {
            "advance": 20,
            "requirement": 6
          },
          {
            "advance": 25,
            "requirement": 7
          }
        ]
      }
    },
    {
      "id": 940023,
      "name": "梵天锁",
      "hero": "庞统",
      "icon": "assets/mibao-items/940023.png",
      "maxLevel": 500,
      "baseAttributes": [
        {
          "id": 100,
          "amount": 500
        },
        {
          "id": 54,
          "amount": 500
        },
        {
          "id": 55,
          "amount": 500
        },
        {
          "id": 51,
          "amount": 2500
        }
      ],
      "growthAttributes": [
        {
          "id": 100,
          "amount": 250
        },
        {
          "id": 54,
          "amount": 250
        },
        {
          "id": 55,
          "amount": 250
        },
        {
          "id": 51,
          "amount": 1250
        }
      ],
      "strengthen": {
        "fromLevel": 1,
        "toLevel": 500,
        "costRule": {
          "silverPerLevel": 50000,
          "stoneStart": 10,
          "stoneStep": 5,
          "costItemId": 60085
        },
        "levelsConfigured": 998,
        "upgradeAttributes": [
          {
            "id": 100,
            "amount": 2500
          },
          {
            "id": 54,
            "amount": 2500
          },
          {
            "id": 55,
            "amount": 2500
          },
          {
            "id": 51,
            "amount": 12500
          }
        ],
        "thresholds": [
          {
            "level": 20,
            "costs": [
              {
                "itemId": 60087,
                "amount": 50
              },
              {
                "itemId": 940023,
                "amount": 2
              }
            ]
          },
          {
            "level": 40,
            "costs": [
              {
                "itemId": 60087,
                "amount": 100
              },
              {
                "itemId": 940023,
                "amount": 4
              }
            ]
          },
          {
            "level": 60,
            "costs": [
              {
                "itemId": 60087,
                "amount": 150
              },
              {
                "itemId": 940023,
                "amount": 6
              }
            ]
          },
          {
            "level": 80,
            "costs": [
              {
                "itemId": 60087,
                "amount": 200
              },
              {
                "itemId": 940023,
                "amount": 8
              }
            ]
          },
          {
            "level": 100,
            "costs": [
              {
                "itemId": 60087,
                "amount": 250
              },
              {
                "itemId": 940023,
                "amount": 10
              }
            ]
          },
          {
            "level": 120,
            "costs": [
              {
                "itemId": 60087,
                "amount": 300
              },
              {
                "itemId": 940023,
                "amount": 12
              }
            ]
          },
          {
            "level": 140,
            "costs": [
              {
                "itemId": 60087,
                "amount": 350
              },
              {
                "itemId": 940023,
                "amount": 16
              }
            ]
          },
          {
            "level": 160,
            "costs": [
              {
                "itemId": 60087,
                "amount": 400
              },
              {
                "itemId": 940023,
                "amount": 20
              }
            ]
          },
          {
            "level": 180,
            "costs": [
              {
                "itemId": 60087,
                "amount": 450
              },
              {
                "itemId": 940023,
                "amount": 25
              }
            ]
          },
          {
            "level": 200,
            "costs": [
              {
                "itemId": 60087,
                "amount": 500
              },
              {
                "itemId": 940023,
                "amount": 30
              }
            ]
          },
          {
            "level": 220,
            "costs": [
              {
                "itemId": 60087,
                "amount": 550
              },
              {
                "itemId": 940023,
                "amount": 35
              }
            ]
          },
          {
            "level": 240,
            "costs": [
              {
                "itemId": 60087,
                "amount": 600
              },
              {
                "itemId": 940023,
                "amount": 40
              }
            ]
          },
          {
            "level": 260,
            "costs": [
              {
                "itemId": 60087,
                "amount": 650
              },
              {
                "itemId": 940023,
                "amount": 45
              }
            ]
          },
          {
            "level": 280,
            "costs": [
              {
                "itemId": 60087,
                "amount": 700
              },
              {
                "itemId": 940023,
                "amount": 50
              }
            ]
          },
          {
            "level": 300,
            "costs": [
              {
                "itemId": 60087,
                "amount": 750
              },
              {
                "itemId": 940023,
                "amount": 50
              }
            ]
          },
          {
            "level": 320,
            "costs": [
              {
                "itemId": 60087,
                "amount": 800
              },
              {
                "itemId": 940023,
                "amount": 50
              }
            ]
          },
          {
            "level": 340,
            "costs": [
              {
                "itemId": 60087,
                "amount": 850
              },
              {
                "itemId": 940023,
                "amount": 50
              }
            ]
          },
          {
            "level": 360,
            "costs": [
              {
                "itemId": 60087,
                "amount": 900
              },
              {
                "itemId": 940023,
                "amount": 50
              }
            ]
          },
          {
            "level": 380,
            "costs": [
              {
                "itemId": 60087,
                "amount": 950
              },
              {
                "itemId": 940023,
                "amount": 50
              }
            ]
          },
          {
            "level": 400,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1000
              },
              {
                "itemId": 940023,
                "amount": 50
              }
            ]
          },
          {
            "level": 420,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1050
              },
              {
                "itemId": 940023,
                "amount": 50
              }
            ]
          },
          {
            "level": 440,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1100
              },
              {
                "itemId": 940023,
                "amount": 50
              }
            ]
          },
          {
            "level": 460,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1150
              },
              {
                "itemId": 940023,
                "amount": 50
              }
            ]
          },
          {
            "level": 480,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1200
              },
              {
                "itemId": 940023,
                "amount": 50
              }
            ]
          },
          {
            "level": 500,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1250
              },
              {
                "itemId": 940023,
                "amount": 50
              }
            ]
          }
        ]
      },
      "advance": {
        "thresholds": [
          {
            "level": 10,
            "costs": [
              {
                "itemId": 60086,
                "amount": 150
              },
              {
                "itemId": 940023,
                "amount": 2
              }
            ]
          },
          {
            "level": 30,
            "costs": [
              {
                "itemId": 60086,
                "amount": 300
              },
              {
                "itemId": 940023,
                "amount": 4
              }
            ]
          },
          {
            "level": 50,
            "costs": [
              {
                "itemId": 60086,
                "amount": 450
              },
              {
                "itemId": 940023,
                "amount": 6
              }
            ]
          },
          {
            "level": 70,
            "costs": [
              {
                "itemId": 60086,
                "amount": 600
              },
              {
                "itemId": 940023,
                "amount": 8
              }
            ]
          },
          {
            "level": 90,
            "costs": [
              {
                "itemId": 60086,
                "amount": 750
              },
              {
                "itemId": 940023,
                "amount": 10
              }
            ]
          },
          {
            "level": 110,
            "costs": [
              {
                "itemId": 60086,
                "amount": 900
              },
              {
                "itemId": 940023,
                "amount": 12
              }
            ]
          },
          {
            "level": 130,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1050
              },
              {
                "itemId": 940023,
                "amount": 16
              }
            ]
          },
          {
            "level": 150,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1200
              },
              {
                "itemId": 940023,
                "amount": 20
              }
            ]
          },
          {
            "level": 170,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1350
              },
              {
                "itemId": 940023,
                "amount": 25
              }
            ]
          },
          {
            "level": 190,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1500
              },
              {
                "itemId": 940023,
                "amount": 30
              }
            ]
          },
          {
            "level": 210,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1650
              },
              {
                "itemId": 940023,
                "amount": 35
              }
            ]
          },
          {
            "level": 230,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1800
              },
              {
                "itemId": 940023,
                "amount": 40
              }
            ]
          },
          {
            "level": 250,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1950
              },
              {
                "itemId": 940023,
                "amount": 45
              }
            ]
          },
          {
            "level": 270,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2100
              },
              {
                "itemId": 940023,
                "amount": 50
              }
            ]
          },
          {
            "level": 290,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2250
              },
              {
                "itemId": 940023,
                "amount": 50
              }
            ]
          },
          {
            "level": 310,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2400
              },
              {
                "itemId": 940023,
                "amount": 50
              }
            ]
          },
          {
            "level": 330,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2550
              },
              {
                "itemId": 940023,
                "amount": 50
              }
            ]
          },
          {
            "level": 350,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2700
              },
              {
                "itemId": 940023,
                "amount": 50
              }
            ]
          },
          {
            "level": 370,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2850
              },
              {
                "itemId": 940023,
                "amount": 50
              }
            ]
          },
          {
            "level": 390,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3000
              },
              {
                "itemId": 940023,
                "amount": 50
              }
            ]
          },
          {
            "level": 410,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3150
              },
              {
                "itemId": 940023,
                "amount": 50
              }
            ]
          },
          {
            "level": 430,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3300
              },
              {
                "itemId": 940023,
                "amount": 50
              }
            ]
          },
          {
            "level": 450,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3450
              },
              {
                "itemId": 940023,
                "amount": 50
              }
            ]
          },
          {
            "level": 470,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3600
              },
              {
                "itemId": 940023,
                "amount": 50
              }
            ]
          },
          {
            "level": 490,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3750
              },
              {
                "itemId": 940023,
                "amount": 50
              }
            ]
          }
        ],
        "attributes": {
          "1": [
            {
              "id": 54,
              "amount": 5000
            }
          ],
          "2": [
            {
              "id": 56,
              "amount": 200
            }
          ],
          "3": [
            {
              "id": 55,
              "amount": 10000
            }
          ],
          "4": [
            {
              "id": 57,
              "amount": 300
            }
          ],
          "5": [
            {
              "id": 51,
              "amount": 100000
            }
          ],
          "6": [
            {
              "id": 60,
              "amount": 400
            }
          ],
          "7": [
            {
              "id": 100,
              "amount": 30000
            }
          ],
          "8": [
            {
              "id": 61,
              "amount": 500
            }
          ],
          "9": [
            {
              "id": 25,
              "amount": 600
            }
          ],
          "10": [
            {
              "id": 24,
              "amount": 700
            }
          ],
          "11": [
            {
              "id": 54,
              "amount": 40000
            }
          ],
          "12": [
            {
              "id": 22,
              "amount": 600
            }
          ],
          "13": [
            {
              "id": 55,
              "amount": 50000
            }
          ],
          "14": [
            {
              "id": 23,
              "amount": 700
            }
          ],
          "15": [
            {
              "id": 51,
              "amount": 300000
            }
          ],
          "16": [
            {
              "id": 100,
              "amount": 70000
            }
          ],
          "17": [
            {
              "id": 23,
              "amount": 600
            }
          ],
          "18": [
            {
              "id": 22,
              "amount": 700
            }
          ],
          "19": [
            {
              "id": 102,
              "amount": 600
            }
          ],
          "20": [
            {
              "id": 101,
              "amount": 700
            }
          ],
          "21": [
            {
              "id": 54,
              "amount": 80000
            }
          ],
          "22": [
            {
              "id": 101,
              "amount": 700
            }
          ],
          "23": [
            {
              "id": 102,
              "amount": 800
            }
          ],
          "24": [
            {
              "id": 180,
              "amount": 700
            }
          ],
          "25": [
            {
              "id": 179,
              "amount": 800
            }
          ]
        },
        "requirements": [
          {
            "advance": 1,
            "requirement": 1
          },
          {
            "advance": 3,
            "requirement": 2
          },
          {
            "advance": 6,
            "requirement": 3
          },
          {
            "advance": 10,
            "requirement": 4
          },
          {
            "advance": 15,
            "requirement": 5
          },
          {
            "advance": 20,
            "requirement": 6
          },
          {
            "advance": 25,
            "requirement": 7
          }
        ]
      }
    },
    {
      "id": 940024,
      "name": "樱火凤羽",
      "hero": "水镜先生",
      "icon": "assets/mibao-items/940024.png",
      "maxLevel": 500,
      "baseAttributes": [
        {
          "id": 100,
          "amount": 500
        },
        {
          "id": 54,
          "amount": 500
        },
        {
          "id": 55,
          "amount": 500
        },
        {
          "id": 51,
          "amount": 2500
        }
      ],
      "growthAttributes": [
        {
          "id": 100,
          "amount": 250
        },
        {
          "id": 54,
          "amount": 250
        },
        {
          "id": 55,
          "amount": 250
        },
        {
          "id": 51,
          "amount": 1250
        }
      ],
      "strengthen": {
        "fromLevel": 1,
        "toLevel": 500,
        "costRule": {
          "silverPerLevel": 50000,
          "stoneStart": 10,
          "stoneStep": 5,
          "costItemId": 60085
        },
        "levelsConfigured": 998,
        "upgradeAttributes": [
          {
            "id": 100,
            "amount": 2500
          },
          {
            "id": 54,
            "amount": 2500
          },
          {
            "id": 55,
            "amount": 2500
          },
          {
            "id": 51,
            "amount": 12500
          }
        ],
        "thresholds": [
          {
            "level": 20,
            "costs": [
              {
                "itemId": 60087,
                "amount": 50
              },
              {
                "itemId": 940024,
                "amount": 2
              }
            ]
          },
          {
            "level": 40,
            "costs": [
              {
                "itemId": 60087,
                "amount": 100
              },
              {
                "itemId": 940024,
                "amount": 4
              }
            ]
          },
          {
            "level": 60,
            "costs": [
              {
                "itemId": 60087,
                "amount": 150
              },
              {
                "itemId": 940024,
                "amount": 6
              }
            ]
          },
          {
            "level": 80,
            "costs": [
              {
                "itemId": 60087,
                "amount": 200
              },
              {
                "itemId": 940024,
                "amount": 8
              }
            ]
          },
          {
            "level": 100,
            "costs": [
              {
                "itemId": 60087,
                "amount": 250
              },
              {
                "itemId": 940024,
                "amount": 10
              }
            ]
          },
          {
            "level": 120,
            "costs": [
              {
                "itemId": 60087,
                "amount": 300
              },
              {
                "itemId": 940024,
                "amount": 12
              }
            ]
          },
          {
            "level": 140,
            "costs": [
              {
                "itemId": 60087,
                "amount": 350
              },
              {
                "itemId": 940024,
                "amount": 16
              }
            ]
          },
          {
            "level": 160,
            "costs": [
              {
                "itemId": 60087,
                "amount": 400
              },
              {
                "itemId": 940024,
                "amount": 20
              }
            ]
          },
          {
            "level": 180,
            "costs": [
              {
                "itemId": 60087,
                "amount": 450
              },
              {
                "itemId": 940024,
                "amount": 25
              }
            ]
          },
          {
            "level": 200,
            "costs": [
              {
                "itemId": 60087,
                "amount": 500
              },
              {
                "itemId": 940024,
                "amount": 30
              }
            ]
          },
          {
            "level": 220,
            "costs": [
              {
                "itemId": 60087,
                "amount": 550
              },
              {
                "itemId": 940024,
                "amount": 35
              }
            ]
          },
          {
            "level": 240,
            "costs": [
              {
                "itemId": 60087,
                "amount": 600
              },
              {
                "itemId": 940024,
                "amount": 40
              }
            ]
          },
          {
            "level": 260,
            "costs": [
              {
                "itemId": 60087,
                "amount": 650
              },
              {
                "itemId": 940024,
                "amount": 45
              }
            ]
          },
          {
            "level": 280,
            "costs": [
              {
                "itemId": 60087,
                "amount": 700
              },
              {
                "itemId": 940024,
                "amount": 50
              }
            ]
          },
          {
            "level": 300,
            "costs": [
              {
                "itemId": 60087,
                "amount": 750
              },
              {
                "itemId": 940024,
                "amount": 50
              }
            ]
          },
          {
            "level": 320,
            "costs": [
              {
                "itemId": 60087,
                "amount": 800
              },
              {
                "itemId": 940024,
                "amount": 50
              }
            ]
          },
          {
            "level": 340,
            "costs": [
              {
                "itemId": 60087,
                "amount": 850
              },
              {
                "itemId": 940024,
                "amount": 50
              }
            ]
          },
          {
            "level": 360,
            "costs": [
              {
                "itemId": 60087,
                "amount": 900
              },
              {
                "itemId": 940024,
                "amount": 50
              }
            ]
          },
          {
            "level": 380,
            "costs": [
              {
                "itemId": 60087,
                "amount": 950
              },
              {
                "itemId": 940024,
                "amount": 50
              }
            ]
          },
          {
            "level": 400,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1000
              },
              {
                "itemId": 940024,
                "amount": 50
              }
            ]
          },
          {
            "level": 420,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1050
              },
              {
                "itemId": 940024,
                "amount": 50
              }
            ]
          },
          {
            "level": 440,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1100
              },
              {
                "itemId": 940024,
                "amount": 50
              }
            ]
          },
          {
            "level": 460,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1150
              },
              {
                "itemId": 940024,
                "amount": 50
              }
            ]
          },
          {
            "level": 480,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1200
              },
              {
                "itemId": 940024,
                "amount": 50
              }
            ]
          },
          {
            "level": 500,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1250
              },
              {
                "itemId": 940024,
                "amount": 50
              }
            ]
          }
        ]
      },
      "advance": {
        "thresholds": [
          {
            "level": 10,
            "costs": [
              {
                "itemId": 60086,
                "amount": 150
              },
              {
                "itemId": 940024,
                "amount": 2
              }
            ]
          },
          {
            "level": 30,
            "costs": [
              {
                "itemId": 60086,
                "amount": 300
              },
              {
                "itemId": 940024,
                "amount": 4
              }
            ]
          },
          {
            "level": 50,
            "costs": [
              {
                "itemId": 60086,
                "amount": 450
              },
              {
                "itemId": 940024,
                "amount": 6
              }
            ]
          },
          {
            "level": 70,
            "costs": [
              {
                "itemId": 60086,
                "amount": 600
              },
              {
                "itemId": 940024,
                "amount": 8
              }
            ]
          },
          {
            "level": 90,
            "costs": [
              {
                "itemId": 60086,
                "amount": 750
              },
              {
                "itemId": 940024,
                "amount": 10
              }
            ]
          },
          {
            "level": 110,
            "costs": [
              {
                "itemId": 60086,
                "amount": 900
              },
              {
                "itemId": 940024,
                "amount": 12
              }
            ]
          },
          {
            "level": 130,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1050
              },
              {
                "itemId": 940024,
                "amount": 16
              }
            ]
          },
          {
            "level": 150,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1200
              },
              {
                "itemId": 940024,
                "amount": 20
              }
            ]
          },
          {
            "level": 170,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1350
              },
              {
                "itemId": 940024,
                "amount": 25
              }
            ]
          },
          {
            "level": 190,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1500
              },
              {
                "itemId": 940024,
                "amount": 30
              }
            ]
          },
          {
            "level": 210,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1650
              },
              {
                "itemId": 940024,
                "amount": 35
              }
            ]
          },
          {
            "level": 230,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1800
              },
              {
                "itemId": 940024,
                "amount": 40
              }
            ]
          },
          {
            "level": 250,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1950
              },
              {
                "itemId": 940024,
                "amount": 45
              }
            ]
          },
          {
            "level": 270,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2100
              },
              {
                "itemId": 940024,
                "amount": 50
              }
            ]
          },
          {
            "level": 290,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2250
              },
              {
                "itemId": 940024,
                "amount": 50
              }
            ]
          },
          {
            "level": 310,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2400
              },
              {
                "itemId": 940024,
                "amount": 50
              }
            ]
          },
          {
            "level": 330,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2550
              },
              {
                "itemId": 940024,
                "amount": 50
              }
            ]
          },
          {
            "level": 350,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2700
              },
              {
                "itemId": 940024,
                "amount": 50
              }
            ]
          },
          {
            "level": 370,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2850
              },
              {
                "itemId": 940024,
                "amount": 50
              }
            ]
          },
          {
            "level": 390,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3000
              },
              {
                "itemId": 940024,
                "amount": 50
              }
            ]
          },
          {
            "level": 410,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3150
              },
              {
                "itemId": 940024,
                "amount": 50
              }
            ]
          },
          {
            "level": 430,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3300
              },
              {
                "itemId": 940024,
                "amount": 50
              }
            ]
          },
          {
            "level": 450,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3450
              },
              {
                "itemId": 940024,
                "amount": 50
              }
            ]
          },
          {
            "level": 470,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3600
              },
              {
                "itemId": 940024,
                "amount": 50
              }
            ]
          },
          {
            "level": 490,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3750
              },
              {
                "itemId": 940024,
                "amount": 50
              }
            ]
          }
        ],
        "attributes": {
          "1": [
            {
              "id": 54,
              "amount": 5000
            }
          ],
          "2": [
            {
              "id": 56,
              "amount": 200
            }
          ],
          "3": [
            {
              "id": 55,
              "amount": 10000
            }
          ],
          "4": [
            {
              "id": 57,
              "amount": 300
            }
          ],
          "5": [
            {
              "id": 51,
              "amount": 100000
            }
          ],
          "6": [
            {
              "id": 60,
              "amount": 400
            }
          ],
          "7": [
            {
              "id": 100,
              "amount": 30000
            }
          ],
          "8": [
            {
              "id": 61,
              "amount": 500
            }
          ],
          "9": [
            {
              "id": 25,
              "amount": 600
            }
          ],
          "10": [
            {
              "id": 24,
              "amount": 700
            }
          ],
          "11": [
            {
              "id": 54,
              "amount": 40000
            }
          ],
          "12": [
            {
              "id": 22,
              "amount": 600
            }
          ],
          "13": [
            {
              "id": 55,
              "amount": 50000
            }
          ],
          "14": [
            {
              "id": 23,
              "amount": 700
            }
          ],
          "15": [
            {
              "id": 51,
              "amount": 300000
            }
          ],
          "16": [
            {
              "id": 100,
              "amount": 70000
            }
          ],
          "17": [
            {
              "id": 23,
              "amount": 600
            }
          ],
          "18": [
            {
              "id": 22,
              "amount": 700
            }
          ],
          "19": [
            {
              "id": 102,
              "amount": 600
            }
          ],
          "20": [
            {
              "id": 101,
              "amount": 700
            }
          ],
          "21": [
            {
              "id": 54,
              "amount": 80000
            }
          ],
          "22": [
            {
              "id": 101,
              "amount": 700
            }
          ],
          "23": [
            {
              "id": 102,
              "amount": 800
            }
          ],
          "24": [
            {
              "id": 180,
              "amount": 700
            }
          ],
          "25": [
            {
              "id": 179,
              "amount": 800
            }
          ]
        },
        "requirements": [
          {
            "advance": 1,
            "requirement": 1
          },
          {
            "advance": 3,
            "requirement": 2
          },
          {
            "advance": 6,
            "requirement": 3
          },
          {
            "advance": 10,
            "requirement": 4
          },
          {
            "advance": 15,
            "requirement": 5
          },
          {
            "advance": 20,
            "requirement": 6
          },
          {
            "advance": 25,
            "requirement": 7
          }
        ]
      }
    },
    {
      "id": 940025,
      "name": "仙灵葫芦",
      "hero": "南华老仙",
      "icon": "assets/mibao-items/940025.png",
      "maxLevel": 500,
      "baseAttributes": [
        {
          "id": 100,
          "amount": 500
        },
        {
          "id": 54,
          "amount": 500
        },
        {
          "id": 55,
          "amount": 500
        },
        {
          "id": 51,
          "amount": 2500
        }
      ],
      "growthAttributes": [
        {
          "id": 100,
          "amount": 250
        },
        {
          "id": 54,
          "amount": 250
        },
        {
          "id": 55,
          "amount": 250
        },
        {
          "id": 51,
          "amount": 1250
        }
      ],
      "strengthen": {
        "fromLevel": 1,
        "toLevel": 500,
        "costRule": {
          "silverPerLevel": 50000,
          "stoneStart": 10,
          "stoneStep": 5,
          "costItemId": 60085
        },
        "levelsConfigured": 998,
        "upgradeAttributes": [
          {
            "id": 100,
            "amount": 2500
          },
          {
            "id": 54,
            "amount": 2500
          },
          {
            "id": 55,
            "amount": 2500
          },
          {
            "id": 51,
            "amount": 12500
          }
        ],
        "thresholds": [
          {
            "level": 20,
            "costs": [
              {
                "itemId": 60087,
                "amount": 50
              },
              {
                "itemId": 940025,
                "amount": 2
              }
            ]
          },
          {
            "level": 40,
            "costs": [
              {
                "itemId": 60087,
                "amount": 100
              },
              {
                "itemId": 940025,
                "amount": 4
              }
            ]
          },
          {
            "level": 60,
            "costs": [
              {
                "itemId": 60087,
                "amount": 150
              },
              {
                "itemId": 940025,
                "amount": 6
              }
            ]
          },
          {
            "level": 80,
            "costs": [
              {
                "itemId": 60087,
                "amount": 200
              },
              {
                "itemId": 940025,
                "amount": 8
              }
            ]
          },
          {
            "level": 100,
            "costs": [
              {
                "itemId": 60087,
                "amount": 250
              },
              {
                "itemId": 940025,
                "amount": 10
              }
            ]
          },
          {
            "level": 120,
            "costs": [
              {
                "itemId": 60087,
                "amount": 300
              },
              {
                "itemId": 940025,
                "amount": 12
              }
            ]
          },
          {
            "level": 140,
            "costs": [
              {
                "itemId": 60087,
                "amount": 350
              },
              {
                "itemId": 940025,
                "amount": 16
              }
            ]
          },
          {
            "level": 160,
            "costs": [
              {
                "itemId": 60087,
                "amount": 400
              },
              {
                "itemId": 940025,
                "amount": 20
              }
            ]
          },
          {
            "level": 180,
            "costs": [
              {
                "itemId": 60087,
                "amount": 450
              },
              {
                "itemId": 940025,
                "amount": 25
              }
            ]
          },
          {
            "level": 200,
            "costs": [
              {
                "itemId": 60087,
                "amount": 500
              },
              {
                "itemId": 940025,
                "amount": 30
              }
            ]
          },
          {
            "level": 220,
            "costs": [
              {
                "itemId": 60087,
                "amount": 550
              },
              {
                "itemId": 940025,
                "amount": 35
              }
            ]
          },
          {
            "level": 240,
            "costs": [
              {
                "itemId": 60087,
                "amount": 600
              },
              {
                "itemId": 940025,
                "amount": 40
              }
            ]
          },
          {
            "level": 260,
            "costs": [
              {
                "itemId": 60087,
                "amount": 650
              },
              {
                "itemId": 940025,
                "amount": 45
              }
            ]
          },
          {
            "level": 280,
            "costs": [
              {
                "itemId": 60087,
                "amount": 700
              },
              {
                "itemId": 940025,
                "amount": 50
              }
            ]
          },
          {
            "level": 300,
            "costs": [
              {
                "itemId": 60087,
                "amount": 750
              },
              {
                "itemId": 940025,
                "amount": 50
              }
            ]
          },
          {
            "level": 320,
            "costs": [
              {
                "itemId": 60087,
                "amount": 800
              },
              {
                "itemId": 940025,
                "amount": 50
              }
            ]
          },
          {
            "level": 340,
            "costs": [
              {
                "itemId": 60087,
                "amount": 850
              },
              {
                "itemId": 940025,
                "amount": 50
              }
            ]
          },
          {
            "level": 360,
            "costs": [
              {
                "itemId": 60087,
                "amount": 900
              },
              {
                "itemId": 940025,
                "amount": 50
              }
            ]
          },
          {
            "level": 380,
            "costs": [
              {
                "itemId": 60087,
                "amount": 950
              },
              {
                "itemId": 940025,
                "amount": 50
              }
            ]
          },
          {
            "level": 400,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1000
              },
              {
                "itemId": 940025,
                "amount": 50
              }
            ]
          },
          {
            "level": 420,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1050
              },
              {
                "itemId": 940025,
                "amount": 50
              }
            ]
          },
          {
            "level": 440,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1100
              },
              {
                "itemId": 940025,
                "amount": 50
              }
            ]
          },
          {
            "level": 460,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1150
              },
              {
                "itemId": 940025,
                "amount": 50
              }
            ]
          },
          {
            "level": 480,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1200
              },
              {
                "itemId": 940025,
                "amount": 50
              }
            ]
          },
          {
            "level": 500,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1250
              },
              {
                "itemId": 940025,
                "amount": 50
              }
            ]
          }
        ]
      },
      "advance": {
        "thresholds": [
          {
            "level": 10,
            "costs": [
              {
                "itemId": 60086,
                "amount": 150
              },
              {
                "itemId": 940025,
                "amount": 2
              }
            ]
          },
          {
            "level": 30,
            "costs": [
              {
                "itemId": 60086,
                "amount": 300
              },
              {
                "itemId": 940025,
                "amount": 4
              }
            ]
          },
          {
            "level": 50,
            "costs": [
              {
                "itemId": 60086,
                "amount": 450
              },
              {
                "itemId": 940025,
                "amount": 6
              }
            ]
          },
          {
            "level": 70,
            "costs": [
              {
                "itemId": 60086,
                "amount": 600
              },
              {
                "itemId": 940025,
                "amount": 8
              }
            ]
          },
          {
            "level": 90,
            "costs": [
              {
                "itemId": 60086,
                "amount": 750
              },
              {
                "itemId": 940025,
                "amount": 10
              }
            ]
          },
          {
            "level": 110,
            "costs": [
              {
                "itemId": 60086,
                "amount": 900
              },
              {
                "itemId": 940025,
                "amount": 12
              }
            ]
          },
          {
            "level": 130,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1050
              },
              {
                "itemId": 940025,
                "amount": 16
              }
            ]
          },
          {
            "level": 150,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1200
              },
              {
                "itemId": 940025,
                "amount": 20
              }
            ]
          },
          {
            "level": 170,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1350
              },
              {
                "itemId": 940025,
                "amount": 25
              }
            ]
          },
          {
            "level": 190,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1500
              },
              {
                "itemId": 940025,
                "amount": 30
              }
            ]
          },
          {
            "level": 210,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1650
              },
              {
                "itemId": 940025,
                "amount": 35
              }
            ]
          },
          {
            "level": 230,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1800
              },
              {
                "itemId": 940025,
                "amount": 40
              }
            ]
          },
          {
            "level": 250,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1950
              },
              {
                "itemId": 940025,
                "amount": 45
              }
            ]
          },
          {
            "level": 270,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2100
              },
              {
                "itemId": 940025,
                "amount": 50
              }
            ]
          },
          {
            "level": 290,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2250
              },
              {
                "itemId": 940025,
                "amount": 50
              }
            ]
          },
          {
            "level": 310,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2400
              },
              {
                "itemId": 940025,
                "amount": 50
              }
            ]
          },
          {
            "level": 330,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2550
              },
              {
                "itemId": 940025,
                "amount": 50
              }
            ]
          },
          {
            "level": 350,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2700
              },
              {
                "itemId": 940025,
                "amount": 50
              }
            ]
          },
          {
            "level": 370,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2850
              },
              {
                "itemId": 940025,
                "amount": 50
              }
            ]
          },
          {
            "level": 390,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3000
              },
              {
                "itemId": 940025,
                "amount": 50
              }
            ]
          },
          {
            "level": 410,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3150
              },
              {
                "itemId": 940025,
                "amount": 50
              }
            ]
          },
          {
            "level": 430,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3300
              },
              {
                "itemId": 940025,
                "amount": 50
              }
            ]
          },
          {
            "level": 450,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3450
              },
              {
                "itemId": 940025,
                "amount": 50
              }
            ]
          },
          {
            "level": 470,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3600
              },
              {
                "itemId": 940025,
                "amount": 50
              }
            ]
          },
          {
            "level": 490,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3750
              },
              {
                "itemId": 940025,
                "amount": 50
              }
            ]
          }
        ],
        "attributes": {
          "1": [
            {
              "id": 54,
              "amount": 5000
            }
          ],
          "2": [
            {
              "id": 56,
              "amount": 200
            }
          ],
          "3": [
            {
              "id": 55,
              "amount": 10000
            }
          ],
          "4": [
            {
              "id": 57,
              "amount": 300
            }
          ],
          "5": [
            {
              "id": 51,
              "amount": 100000
            }
          ],
          "6": [
            {
              "id": 60,
              "amount": 400
            }
          ],
          "7": [
            {
              "id": 100,
              "amount": 30000
            }
          ],
          "8": [
            {
              "id": 61,
              "amount": 500
            }
          ],
          "9": [
            {
              "id": 25,
              "amount": 600
            }
          ],
          "10": [
            {
              "id": 24,
              "amount": 700
            }
          ],
          "11": [
            {
              "id": 54,
              "amount": 40000
            }
          ],
          "12": [
            {
              "id": 22,
              "amount": 600
            }
          ],
          "13": [
            {
              "id": 55,
              "amount": 50000
            }
          ],
          "14": [
            {
              "id": 23,
              "amount": 700
            }
          ],
          "15": [
            {
              "id": 51,
              "amount": 300000
            }
          ],
          "16": [
            {
              "id": 100,
              "amount": 70000
            }
          ],
          "17": [
            {
              "id": 23,
              "amount": 600
            }
          ],
          "18": [
            {
              "id": 22,
              "amount": 700
            }
          ],
          "19": [
            {
              "id": 102,
              "amount": 600
            }
          ],
          "20": [
            {
              "id": 101,
              "amount": 700
            }
          ],
          "21": [
            {
              "id": 54,
              "amount": 80000
            }
          ],
          "22": [
            {
              "id": 101,
              "amount": 700
            }
          ],
          "23": [
            {
              "id": 102,
              "amount": 800
            }
          ],
          "24": [
            {
              "id": 180,
              "amount": 700
            }
          ],
          "25": [
            {
              "id": 179,
              "amount": 800
            }
          ]
        },
        "requirements": [
          {
            "advance": 1,
            "requirement": 1
          },
          {
            "advance": 3,
            "requirement": 2
          },
          {
            "advance": 6,
            "requirement": 3
          },
          {
            "advance": 10,
            "requirement": 4
          },
          {
            "advance": 15,
            "requirement": 5
          },
          {
            "advance": 20,
            "requirement": 6
          },
          {
            "advance": 25,
            "requirement": 7
          }
        ]
      }
    },
    {
      "id": 940026,
      "name": "鹏王羽翎",
      "hero": "张郃",
      "icon": "assets/mibao-items/940026.png",
      "maxLevel": 500,
      "baseAttributes": [
        {
          "id": 100,
          "amount": 500
        },
        {
          "id": 54,
          "amount": 500
        },
        {
          "id": 55,
          "amount": 500
        },
        {
          "id": 51,
          "amount": 2500
        }
      ],
      "growthAttributes": [
        {
          "id": 100,
          "amount": 250
        },
        {
          "id": 54,
          "amount": 250
        },
        {
          "id": 55,
          "amount": 250
        },
        {
          "id": 51,
          "amount": 1250
        }
      ],
      "strengthen": {
        "fromLevel": 1,
        "toLevel": 500,
        "costRule": {
          "silverPerLevel": 50000,
          "stoneStart": 10,
          "stoneStep": 5,
          "costItemId": 60085
        },
        "levelsConfigured": 998,
        "upgradeAttributes": [
          {
            "id": 100,
            "amount": 2500
          },
          {
            "id": 54,
            "amount": 2500
          },
          {
            "id": 55,
            "amount": 2500
          },
          {
            "id": 51,
            "amount": 12500
          }
        ],
        "thresholds": [
          {
            "level": 20,
            "costs": [
              {
                "itemId": 60087,
                "amount": 30
              },
              {
                "itemId": 940026,
                "amount": 2
              }
            ]
          },
          {
            "level": 40,
            "costs": [
              {
                "itemId": 60087,
                "amount": 60
              },
              {
                "itemId": 940026,
                "amount": 4
              }
            ]
          },
          {
            "level": 60,
            "costs": [
              {
                "itemId": 60087,
                "amount": 90
              },
              {
                "itemId": 940026,
                "amount": 6
              }
            ]
          },
          {
            "level": 80,
            "costs": [
              {
                "itemId": 60087,
                "amount": 120
              },
              {
                "itemId": 940026,
                "amount": 8
              }
            ]
          },
          {
            "level": 100,
            "costs": [
              {
                "itemId": 60087,
                "amount": 150
              },
              {
                "itemId": 940026,
                "amount": 10
              }
            ]
          },
          {
            "level": 120,
            "costs": [
              {
                "itemId": 60087,
                "amount": 180
              },
              {
                "itemId": 940026,
                "amount": 12
              }
            ]
          },
          {
            "level": 140,
            "costs": [
              {
                "itemId": 60087,
                "amount": 210
              },
              {
                "itemId": 940026,
                "amount": 16
              }
            ]
          },
          {
            "level": 160,
            "costs": [
              {
                "itemId": 60087,
                "amount": 240
              },
              {
                "itemId": 940026,
                "amount": 20
              }
            ]
          },
          {
            "level": 180,
            "costs": [
              {
                "itemId": 60087,
                "amount": 270
              },
              {
                "itemId": 940026,
                "amount": 25
              }
            ]
          },
          {
            "level": 200,
            "costs": [
              {
                "itemId": 60087,
                "amount": 300
              },
              {
                "itemId": 940026,
                "amount": 30
              }
            ]
          },
          {
            "level": 220,
            "costs": [
              {
                "itemId": 60087,
                "amount": 330
              },
              {
                "itemId": 940026,
                "amount": 35
              }
            ]
          },
          {
            "level": 240,
            "costs": [
              {
                "itemId": 60087,
                "amount": 360
              },
              {
                "itemId": 940026,
                "amount": 40
              }
            ]
          },
          {
            "level": 260,
            "costs": [
              {
                "itemId": 60087,
                "amount": 390
              },
              {
                "itemId": 940026,
                "amount": 45
              }
            ]
          },
          {
            "level": 280,
            "costs": [
              {
                "itemId": 60087,
                "amount": 420
              },
              {
                "itemId": 940026,
                "amount": 50
              }
            ]
          },
          {
            "level": 300,
            "costs": [
              {
                "itemId": 60087,
                "amount": 450
              },
              {
                "itemId": 940026,
                "amount": 50
              }
            ]
          },
          {
            "level": 320,
            "costs": [
              {
                "itemId": 60087,
                "amount": 480
              },
              {
                "itemId": 940026,
                "amount": 50
              }
            ]
          },
          {
            "level": 340,
            "costs": [
              {
                "itemId": 60087,
                "amount": 510
              },
              {
                "itemId": 940026,
                "amount": 50
              }
            ]
          },
          {
            "level": 360,
            "costs": [
              {
                "itemId": 60087,
                "amount": 540
              },
              {
                "itemId": 940026,
                "amount": 50
              }
            ]
          },
          {
            "level": 380,
            "costs": [
              {
                "itemId": 60087,
                "amount": 570
              },
              {
                "itemId": 940026,
                "amount": 50
              }
            ]
          },
          {
            "level": 400,
            "costs": [
              {
                "itemId": 60087,
                "amount": 600
              },
              {
                "itemId": 940026,
                "amount": 50
              }
            ]
          },
          {
            "level": 420,
            "costs": [
              {
                "itemId": 60087,
                "amount": 630
              },
              {
                "itemId": 940026,
                "amount": 50
              }
            ]
          },
          {
            "level": 440,
            "costs": [
              {
                "itemId": 60087,
                "amount": 660
              },
              {
                "itemId": 940026,
                "amount": 50
              }
            ]
          },
          {
            "level": 460,
            "costs": [
              {
                "itemId": 60087,
                "amount": 690
              },
              {
                "itemId": 940026,
                "amount": 50
              }
            ]
          },
          {
            "level": 480,
            "costs": [
              {
                "itemId": 60087,
                "amount": 720
              },
              {
                "itemId": 940026,
                "amount": 50
              }
            ]
          },
          {
            "level": 500,
            "costs": [
              {
                "itemId": 60087,
                "amount": 750
              },
              {
                "itemId": 940026,
                "amount": 50
              }
            ]
          }
        ]
      },
      "advance": {
        "thresholds": [
          {
            "level": 10,
            "costs": [
              {
                "itemId": 60086,
                "amount": 150
              },
              {
                "itemId": 940026,
                "amount": 2
              }
            ]
          },
          {
            "level": 30,
            "costs": [
              {
                "itemId": 60086,
                "amount": 300
              },
              {
                "itemId": 940026,
                "amount": 4
              }
            ]
          },
          {
            "level": 50,
            "costs": [
              {
                "itemId": 60086,
                "amount": 450
              },
              {
                "itemId": 940026,
                "amount": 6
              }
            ]
          },
          {
            "level": 70,
            "costs": [
              {
                "itemId": 60086,
                "amount": 600
              },
              {
                "itemId": 940026,
                "amount": 8
              }
            ]
          },
          {
            "level": 90,
            "costs": [
              {
                "itemId": 60086,
                "amount": 750
              },
              {
                "itemId": 940026,
                "amount": 10
              }
            ]
          },
          {
            "level": 110,
            "costs": [
              {
                "itemId": 60086,
                "amount": 900
              },
              {
                "itemId": 940026,
                "amount": 12
              }
            ]
          },
          {
            "level": 130,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1050
              },
              {
                "itemId": 940026,
                "amount": 16
              }
            ]
          },
          {
            "level": 150,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1200
              },
              {
                "itemId": 940026,
                "amount": 20
              }
            ]
          },
          {
            "level": 170,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1350
              },
              {
                "itemId": 940026,
                "amount": 25
              }
            ]
          },
          {
            "level": 190,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1500
              },
              {
                "itemId": 940026,
                "amount": 30
              }
            ]
          },
          {
            "level": 210,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1650
              },
              {
                "itemId": 940026,
                "amount": 35
              }
            ]
          },
          {
            "level": 230,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1800
              },
              {
                "itemId": 940026,
                "amount": 40
              }
            ]
          },
          {
            "level": 250,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1950
              },
              {
                "itemId": 940026,
                "amount": 45
              }
            ]
          },
          {
            "level": 270,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2100
              },
              {
                "itemId": 940026,
                "amount": 50
              }
            ]
          },
          {
            "level": 290,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2250
              },
              {
                "itemId": 940026,
                "amount": 50
              }
            ]
          },
          {
            "level": 310,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2400
              },
              {
                "itemId": 940026,
                "amount": 50
              }
            ]
          },
          {
            "level": 330,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2550
              },
              {
                "itemId": 940026,
                "amount": 50
              }
            ]
          },
          {
            "level": 350,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2700
              },
              {
                "itemId": 940026,
                "amount": 50
              }
            ]
          },
          {
            "level": 370,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2850
              },
              {
                "itemId": 940026,
                "amount": 50
              }
            ]
          },
          {
            "level": 390,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3000
              },
              {
                "itemId": 940026,
                "amount": 50
              }
            ]
          },
          {
            "level": 410,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3150
              },
              {
                "itemId": 940026,
                "amount": 50
              }
            ]
          },
          {
            "level": 430,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3300
              },
              {
                "itemId": 940026,
                "amount": 50
              }
            ]
          },
          {
            "level": 450,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3450
              },
              {
                "itemId": 940026,
                "amount": 50
              }
            ]
          },
          {
            "level": 470,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3600
              },
              {
                "itemId": 940026,
                "amount": 50
              }
            ]
          },
          {
            "level": 490,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3750
              },
              {
                "itemId": 940026,
                "amount": 50
              }
            ]
          }
        ],
        "attributes": {
          "1": [
            {
              "id": 54,
              "amount": 5000
            }
          ],
          "2": [
            {
              "id": 56,
              "amount": 100
            }
          ],
          "3": [
            {
              "id": 55,
              "amount": 10000
            }
          ],
          "4": [
            {
              "id": 57,
              "amount": 200
            }
          ],
          "5": [
            {
              "id": 51,
              "amount": 100000
            }
          ],
          "6": [
            {
              "id": 60,
              "amount": 300
            }
          ],
          "7": [
            {
              "id": 100,
              "amount": 30000
            }
          ],
          "8": [
            {
              "id": 61,
              "amount": 400
            }
          ],
          "9": [
            {
              "id": 25,
              "amount": 500
            }
          ],
          "10": [
            {
              "id": 24,
              "amount": 600
            }
          ],
          "11": [
            {
              "id": 54,
              "amount": 40000
            }
          ],
          "12": [
            {
              "id": 22,
              "amount": 500
            }
          ],
          "13": [
            {
              "id": 55,
              "amount": 50000
            }
          ],
          "14": [
            {
              "id": 23,
              "amount": 600
            }
          ],
          "15": [
            {
              "id": 51,
              "amount": 300000
            }
          ],
          "16": [
            {
              "id": 100,
              "amount": 70000
            }
          ],
          "17": [
            {
              "id": 23,
              "amount": 500
            }
          ],
          "18": [
            {
              "id": 22,
              "amount": 600
            }
          ],
          "19": [
            {
              "id": 102,
              "amount": 500
            }
          ],
          "20": [
            {
              "id": 101,
              "amount": 600
            }
          ],
          "21": [
            {
              "id": 54,
              "amount": 80000
            }
          ],
          "22": [
            {
              "id": 101,
              "amount": 600
            }
          ],
          "23": [
            {
              "id": 102,
              "amount": 700
            }
          ],
          "24": [
            {
              "id": 180,
              "amount": 600
            }
          ],
          "25": [
            {
              "id": 179,
              "amount": 700
            }
          ]
        },
        "requirements": [
          {
            "advance": 1,
            "requirement": 1
          },
          {
            "advance": 3,
            "requirement": 2
          },
          {
            "advance": 6,
            "requirement": 3
          },
          {
            "advance": 10,
            "requirement": 4
          },
          {
            "advance": 15,
            "requirement": 5
          },
          {
            "advance": 20,
            "requirement": 6
          },
          {
            "advance": 25,
            "requirement": 7
          }
        ]
      }
    },
    {
      "id": 940027,
      "name": "穿云箭袋",
      "hero": "黄忠",
      "icon": "assets/mibao-items/940027.png",
      "maxLevel": 500,
      "baseAttributes": [
        {
          "id": 100,
          "amount": 500
        },
        {
          "id": 54,
          "amount": 500
        },
        {
          "id": 55,
          "amount": 500
        },
        {
          "id": 51,
          "amount": 2500
        }
      ],
      "growthAttributes": [
        {
          "id": 100,
          "amount": 250
        },
        {
          "id": 54,
          "amount": 250
        },
        {
          "id": 55,
          "amount": 250
        },
        {
          "id": 51,
          "amount": 1250
        }
      ],
      "strengthen": {
        "fromLevel": 1,
        "toLevel": 500,
        "costRule": {
          "silverPerLevel": 50000,
          "stoneStart": 10,
          "stoneStep": 5,
          "costItemId": 60085
        },
        "levelsConfigured": 998,
        "upgradeAttributes": [
          {
            "id": 100,
            "amount": 2500
          },
          {
            "id": 54,
            "amount": 2500
          },
          {
            "id": 55,
            "amount": 2500
          },
          {
            "id": 51,
            "amount": 12500
          }
        ],
        "thresholds": [
          {
            "level": 20,
            "costs": [
              {
                "itemId": 60087,
                "amount": 30
              },
              {
                "itemId": 940027,
                "amount": 2
              }
            ]
          },
          {
            "level": 40,
            "costs": [
              {
                "itemId": 60087,
                "amount": 60
              },
              {
                "itemId": 940027,
                "amount": 4
              }
            ]
          },
          {
            "level": 60,
            "costs": [
              {
                "itemId": 60087,
                "amount": 90
              },
              {
                "itemId": 940027,
                "amount": 6
              }
            ]
          },
          {
            "level": 80,
            "costs": [
              {
                "itemId": 60087,
                "amount": 120
              },
              {
                "itemId": 940027,
                "amount": 8
              }
            ]
          },
          {
            "level": 100,
            "costs": [
              {
                "itemId": 60087,
                "amount": 150
              },
              {
                "itemId": 940027,
                "amount": 10
              }
            ]
          },
          {
            "level": 120,
            "costs": [
              {
                "itemId": 60087,
                "amount": 180
              },
              {
                "itemId": 940027,
                "amount": 12
              }
            ]
          },
          {
            "level": 140,
            "costs": [
              {
                "itemId": 60087,
                "amount": 210
              },
              {
                "itemId": 940027,
                "amount": 16
              }
            ]
          },
          {
            "level": 160,
            "costs": [
              {
                "itemId": 60087,
                "amount": 240
              },
              {
                "itemId": 940027,
                "amount": 20
              }
            ]
          },
          {
            "level": 180,
            "costs": [
              {
                "itemId": 60087,
                "amount": 270
              },
              {
                "itemId": 940027,
                "amount": 25
              }
            ]
          },
          {
            "level": 200,
            "costs": [
              {
                "itemId": 60087,
                "amount": 300
              },
              {
                "itemId": 940027,
                "amount": 30
              }
            ]
          },
          {
            "level": 220,
            "costs": [
              {
                "itemId": 60087,
                "amount": 330
              },
              {
                "itemId": 940027,
                "amount": 35
              }
            ]
          },
          {
            "level": 240,
            "costs": [
              {
                "itemId": 60087,
                "amount": 360
              },
              {
                "itemId": 940027,
                "amount": 40
              }
            ]
          },
          {
            "level": 260,
            "costs": [
              {
                "itemId": 60087,
                "amount": 390
              },
              {
                "itemId": 940027,
                "amount": 45
              }
            ]
          },
          {
            "level": 280,
            "costs": [
              {
                "itemId": 60087,
                "amount": 420
              },
              {
                "itemId": 940027,
                "amount": 50
              }
            ]
          },
          {
            "level": 300,
            "costs": [
              {
                "itemId": 60087,
                "amount": 450
              },
              {
                "itemId": 940027,
                "amount": 50
              }
            ]
          },
          {
            "level": 320,
            "costs": [
              {
                "itemId": 60087,
                "amount": 480
              },
              {
                "itemId": 940027,
                "amount": 50
              }
            ]
          },
          {
            "level": 340,
            "costs": [
              {
                "itemId": 60087,
                "amount": 510
              },
              {
                "itemId": 940027,
                "amount": 50
              }
            ]
          },
          {
            "level": 360,
            "costs": [
              {
                "itemId": 60087,
                "amount": 540
              },
              {
                "itemId": 940027,
                "amount": 50
              }
            ]
          },
          {
            "level": 380,
            "costs": [
              {
                "itemId": 60087,
                "amount": 570
              },
              {
                "itemId": 940027,
                "amount": 50
              }
            ]
          },
          {
            "level": 400,
            "costs": [
              {
                "itemId": 60087,
                "amount": 600
              },
              {
                "itemId": 940027,
                "amount": 50
              }
            ]
          },
          {
            "level": 420,
            "costs": [
              {
                "itemId": 60087,
                "amount": 630
              },
              {
                "itemId": 940027,
                "amount": 50
              }
            ]
          },
          {
            "level": 440,
            "costs": [
              {
                "itemId": 60087,
                "amount": 660
              },
              {
                "itemId": 940027,
                "amount": 50
              }
            ]
          },
          {
            "level": 460,
            "costs": [
              {
                "itemId": 60087,
                "amount": 690
              },
              {
                "itemId": 940027,
                "amount": 50
              }
            ]
          },
          {
            "level": 480,
            "costs": [
              {
                "itemId": 60087,
                "amount": 720
              },
              {
                "itemId": 940027,
                "amount": 50
              }
            ]
          },
          {
            "level": 500,
            "costs": [
              {
                "itemId": 60087,
                "amount": 750
              },
              {
                "itemId": 940027,
                "amount": 50
              }
            ]
          }
        ]
      },
      "advance": {
        "thresholds": [
          {
            "level": 10,
            "costs": [
              {
                "itemId": 60086,
                "amount": 150
              },
              {
                "itemId": 940027,
                "amount": 2
              }
            ]
          },
          {
            "level": 30,
            "costs": [
              {
                "itemId": 60086,
                "amount": 300
              },
              {
                "itemId": 940027,
                "amount": 4
              }
            ]
          },
          {
            "level": 50,
            "costs": [
              {
                "itemId": 60086,
                "amount": 450
              },
              {
                "itemId": 940027,
                "amount": 6
              }
            ]
          },
          {
            "level": 70,
            "costs": [
              {
                "itemId": 60086,
                "amount": 600
              },
              {
                "itemId": 940027,
                "amount": 8
              }
            ]
          },
          {
            "level": 90,
            "costs": [
              {
                "itemId": 60086,
                "amount": 750
              },
              {
                "itemId": 940027,
                "amount": 10
              }
            ]
          },
          {
            "level": 110,
            "costs": [
              {
                "itemId": 60086,
                "amount": 900
              },
              {
                "itemId": 940027,
                "amount": 12
              }
            ]
          },
          {
            "level": 130,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1050
              },
              {
                "itemId": 940027,
                "amount": 16
              }
            ]
          },
          {
            "level": 150,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1200
              },
              {
                "itemId": 940027,
                "amount": 20
              }
            ]
          },
          {
            "level": 170,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1350
              },
              {
                "itemId": 940027,
                "amount": 25
              }
            ]
          },
          {
            "level": 190,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1500
              },
              {
                "itemId": 940027,
                "amount": 30
              }
            ]
          },
          {
            "level": 210,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1650
              },
              {
                "itemId": 940027,
                "amount": 35
              }
            ]
          },
          {
            "level": 230,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1800
              },
              {
                "itemId": 940027,
                "amount": 40
              }
            ]
          },
          {
            "level": 250,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1950
              },
              {
                "itemId": 940027,
                "amount": 45
              }
            ]
          },
          {
            "level": 270,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2100
              },
              {
                "itemId": 940027,
                "amount": 50
              }
            ]
          },
          {
            "level": 290,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2250
              },
              {
                "itemId": 940027,
                "amount": 50
              }
            ]
          },
          {
            "level": 310,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2400
              },
              {
                "itemId": 940027,
                "amount": 50
              }
            ]
          },
          {
            "level": 330,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2550
              },
              {
                "itemId": 940027,
                "amount": 50
              }
            ]
          },
          {
            "level": 350,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2700
              },
              {
                "itemId": 940027,
                "amount": 50
              }
            ]
          },
          {
            "level": 370,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2850
              },
              {
                "itemId": 940027,
                "amount": 50
              }
            ]
          },
          {
            "level": 390,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3000
              },
              {
                "itemId": 940027,
                "amount": 50
              }
            ]
          },
          {
            "level": 410,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3150
              },
              {
                "itemId": 940027,
                "amount": 50
              }
            ]
          },
          {
            "level": 430,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3300
              },
              {
                "itemId": 940027,
                "amount": 50
              }
            ]
          },
          {
            "level": 450,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3450
              },
              {
                "itemId": 940027,
                "amount": 50
              }
            ]
          },
          {
            "level": 470,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3600
              },
              {
                "itemId": 940027,
                "amount": 50
              }
            ]
          },
          {
            "level": 490,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3750
              },
              {
                "itemId": 940027,
                "amount": 50
              }
            ]
          }
        ],
        "attributes": {
          "1": [
            {
              "id": 54,
              "amount": 5000
            }
          ],
          "2": [
            {
              "id": 56,
              "amount": 100
            }
          ],
          "3": [
            {
              "id": 55,
              "amount": 10000
            }
          ],
          "4": [
            {
              "id": 57,
              "amount": 200
            }
          ],
          "5": [
            {
              "id": 51,
              "amount": 100000
            }
          ],
          "6": [
            {
              "id": 60,
              "amount": 300
            }
          ],
          "7": [
            {
              "id": 100,
              "amount": 30000
            }
          ],
          "8": [
            {
              "id": 61,
              "amount": 400
            }
          ],
          "9": [
            {
              "id": 25,
              "amount": 500
            }
          ],
          "10": [
            {
              "id": 24,
              "amount": 600
            }
          ],
          "11": [
            {
              "id": 54,
              "amount": 40000
            }
          ],
          "12": [
            {
              "id": 22,
              "amount": 500
            }
          ],
          "13": [
            {
              "id": 55,
              "amount": 50000
            }
          ],
          "14": [
            {
              "id": 23,
              "amount": 600
            }
          ],
          "15": [
            {
              "id": 51,
              "amount": 300000
            }
          ],
          "16": [
            {
              "id": 100,
              "amount": 70000
            }
          ],
          "17": [
            {
              "id": 23,
              "amount": 500
            }
          ],
          "18": [
            {
              "id": 22,
              "amount": 600
            }
          ],
          "19": [
            {
              "id": 102,
              "amount": 500
            }
          ],
          "20": [
            {
              "id": 101,
              "amount": 600
            }
          ],
          "21": [
            {
              "id": 54,
              "amount": 80000
            }
          ],
          "22": [
            {
              "id": 101,
              "amount": 600
            }
          ],
          "23": [
            {
              "id": 102,
              "amount": 700
            }
          ],
          "24": [
            {
              "id": 180,
              "amount": 600
            }
          ],
          "25": [
            {
              "id": 179,
              "amount": 700
            }
          ]
        },
        "requirements": [
          {
            "advance": 1,
            "requirement": 1
          },
          {
            "advance": 3,
            "requirement": 2
          },
          {
            "advance": 6,
            "requirement": 3
          },
          {
            "advance": 10,
            "requirement": 4
          },
          {
            "advance": 15,
            "requirement": 5
          },
          {
            "advance": 20,
            "requirement": 6
          },
          {
            "advance": 25,
            "requirement": 7
          }
        ]
      }
    },
    {
      "id": 940028,
      "name": "灵剑玉佩",
      "hero": "陆逊",
      "icon": "assets/mibao-items/940028.png",
      "maxLevel": 500,
      "baseAttributes": [
        {
          "id": 100,
          "amount": 500
        },
        {
          "id": 54,
          "amount": 500
        },
        {
          "id": 55,
          "amount": 500
        },
        {
          "id": 51,
          "amount": 2500
        }
      ],
      "growthAttributes": [
        {
          "id": 100,
          "amount": 250
        },
        {
          "id": 54,
          "amount": 250
        },
        {
          "id": 55,
          "amount": 250
        },
        {
          "id": 51,
          "amount": 1250
        }
      ],
      "strengthen": {
        "fromLevel": 1,
        "toLevel": 500,
        "costRule": {
          "silverPerLevel": 50000,
          "stoneStart": 10,
          "stoneStep": 5,
          "costItemId": 60085
        },
        "levelsConfigured": 998,
        "upgradeAttributes": [
          {
            "id": 100,
            "amount": 2500
          },
          {
            "id": 54,
            "amount": 2500
          },
          {
            "id": 55,
            "amount": 2500
          },
          {
            "id": 51,
            "amount": 12500
          }
        ],
        "thresholds": [
          {
            "level": 20,
            "costs": [
              {
                "itemId": 60087,
                "amount": 30
              },
              {
                "itemId": 940028,
                "amount": 2
              }
            ]
          },
          {
            "level": 40,
            "costs": [
              {
                "itemId": 60087,
                "amount": 60
              },
              {
                "itemId": 940028,
                "amount": 4
              }
            ]
          },
          {
            "level": 60,
            "costs": [
              {
                "itemId": 60087,
                "amount": 90
              },
              {
                "itemId": 940028,
                "amount": 6
              }
            ]
          },
          {
            "level": 80,
            "costs": [
              {
                "itemId": 60087,
                "amount": 120
              },
              {
                "itemId": 940028,
                "amount": 8
              }
            ]
          },
          {
            "level": 100,
            "costs": [
              {
                "itemId": 60087,
                "amount": 150
              },
              {
                "itemId": 940028,
                "amount": 10
              }
            ]
          },
          {
            "level": 120,
            "costs": [
              {
                "itemId": 60087,
                "amount": 180
              },
              {
                "itemId": 940028,
                "amount": 12
              }
            ]
          },
          {
            "level": 140,
            "costs": [
              {
                "itemId": 60087,
                "amount": 210
              },
              {
                "itemId": 940028,
                "amount": 16
              }
            ]
          },
          {
            "level": 160,
            "costs": [
              {
                "itemId": 60087,
                "amount": 240
              },
              {
                "itemId": 940028,
                "amount": 20
              }
            ]
          },
          {
            "level": 180,
            "costs": [
              {
                "itemId": 60087,
                "amount": 270
              },
              {
                "itemId": 940028,
                "amount": 25
              }
            ]
          },
          {
            "level": 200,
            "costs": [
              {
                "itemId": 60087,
                "amount": 300
              },
              {
                "itemId": 940028,
                "amount": 30
              }
            ]
          },
          {
            "level": 220,
            "costs": [
              {
                "itemId": 60087,
                "amount": 330
              },
              {
                "itemId": 940028,
                "amount": 35
              }
            ]
          },
          {
            "level": 240,
            "costs": [
              {
                "itemId": 60087,
                "amount": 360
              },
              {
                "itemId": 940028,
                "amount": 40
              }
            ]
          },
          {
            "level": 260,
            "costs": [
              {
                "itemId": 60087,
                "amount": 390
              },
              {
                "itemId": 940028,
                "amount": 45
              }
            ]
          },
          {
            "level": 280,
            "costs": [
              {
                "itemId": 60087,
                "amount": 420
              },
              {
                "itemId": 940028,
                "amount": 50
              }
            ]
          },
          {
            "level": 300,
            "costs": [
              {
                "itemId": 60087,
                "amount": 450
              },
              {
                "itemId": 940028,
                "amount": 50
              }
            ]
          },
          {
            "level": 320,
            "costs": [
              {
                "itemId": 60087,
                "amount": 480
              },
              {
                "itemId": 940028,
                "amount": 50
              }
            ]
          },
          {
            "level": 340,
            "costs": [
              {
                "itemId": 60087,
                "amount": 510
              },
              {
                "itemId": 940028,
                "amount": 50
              }
            ]
          },
          {
            "level": 360,
            "costs": [
              {
                "itemId": 60087,
                "amount": 540
              },
              {
                "itemId": 940028,
                "amount": 50
              }
            ]
          },
          {
            "level": 380,
            "costs": [
              {
                "itemId": 60087,
                "amount": 570
              },
              {
                "itemId": 940028,
                "amount": 50
              }
            ]
          },
          {
            "level": 400,
            "costs": [
              {
                "itemId": 60087,
                "amount": 600
              },
              {
                "itemId": 940028,
                "amount": 50
              }
            ]
          },
          {
            "level": 420,
            "costs": [
              {
                "itemId": 60087,
                "amount": 630
              },
              {
                "itemId": 940028,
                "amount": 50
              }
            ]
          },
          {
            "level": 440,
            "costs": [
              {
                "itemId": 60087,
                "amount": 660
              },
              {
                "itemId": 940028,
                "amount": 50
              }
            ]
          },
          {
            "level": 460,
            "costs": [
              {
                "itemId": 60087,
                "amount": 690
              },
              {
                "itemId": 940028,
                "amount": 50
              }
            ]
          },
          {
            "level": 480,
            "costs": [
              {
                "itemId": 60087,
                "amount": 720
              },
              {
                "itemId": 940028,
                "amount": 50
              }
            ]
          },
          {
            "level": 500,
            "costs": [
              {
                "itemId": 60087,
                "amount": 750
              },
              {
                "itemId": 940028,
                "amount": 50
              }
            ]
          }
        ]
      },
      "advance": {
        "thresholds": [
          {
            "level": 10,
            "costs": [
              {
                "itemId": 60086,
                "amount": 150
              },
              {
                "itemId": 940028,
                "amount": 2
              }
            ]
          },
          {
            "level": 30,
            "costs": [
              {
                "itemId": 60086,
                "amount": 300
              },
              {
                "itemId": 940028,
                "amount": 4
              }
            ]
          },
          {
            "level": 50,
            "costs": [
              {
                "itemId": 60086,
                "amount": 450
              },
              {
                "itemId": 940028,
                "amount": 6
              }
            ]
          },
          {
            "level": 70,
            "costs": [
              {
                "itemId": 60086,
                "amount": 600
              },
              {
                "itemId": 940028,
                "amount": 8
              }
            ]
          },
          {
            "level": 90,
            "costs": [
              {
                "itemId": 60086,
                "amount": 750
              },
              {
                "itemId": 940028,
                "amount": 10
              }
            ]
          },
          {
            "level": 110,
            "costs": [
              {
                "itemId": 60086,
                "amount": 900
              },
              {
                "itemId": 940028,
                "amount": 12
              }
            ]
          },
          {
            "level": 130,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1050
              },
              {
                "itemId": 940028,
                "amount": 16
              }
            ]
          },
          {
            "level": 150,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1200
              },
              {
                "itemId": 940028,
                "amount": 20
              }
            ]
          },
          {
            "level": 170,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1350
              },
              {
                "itemId": 940028,
                "amount": 25
              }
            ]
          },
          {
            "level": 190,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1500
              },
              {
                "itemId": 940028,
                "amount": 30
              }
            ]
          },
          {
            "level": 210,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1650
              },
              {
                "itemId": 940028,
                "amount": 35
              }
            ]
          },
          {
            "level": 230,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1800
              },
              {
                "itemId": 940028,
                "amount": 40
              }
            ]
          },
          {
            "level": 250,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1950
              },
              {
                "itemId": 940028,
                "amount": 45
              }
            ]
          },
          {
            "level": 270,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2100
              },
              {
                "itemId": 940028,
                "amount": 50
              }
            ]
          },
          {
            "level": 290,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2250
              },
              {
                "itemId": 940028,
                "amount": 50
              }
            ]
          },
          {
            "level": 310,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2400
              },
              {
                "itemId": 940028,
                "amount": 50
              }
            ]
          },
          {
            "level": 330,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2550
              },
              {
                "itemId": 940028,
                "amount": 50
              }
            ]
          },
          {
            "level": 350,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2700
              },
              {
                "itemId": 940028,
                "amount": 50
              }
            ]
          },
          {
            "level": 370,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2850
              },
              {
                "itemId": 940028,
                "amount": 50
              }
            ]
          },
          {
            "level": 390,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3000
              },
              {
                "itemId": 940028,
                "amount": 50
              }
            ]
          },
          {
            "level": 410,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3150
              },
              {
                "itemId": 940028,
                "amount": 50
              }
            ]
          },
          {
            "level": 430,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3300
              },
              {
                "itemId": 940028,
                "amount": 50
              }
            ]
          },
          {
            "level": 450,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3450
              },
              {
                "itemId": 940028,
                "amount": 50
              }
            ]
          },
          {
            "level": 470,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3600
              },
              {
                "itemId": 940028,
                "amount": 50
              }
            ]
          },
          {
            "level": 490,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3750
              },
              {
                "itemId": 940028,
                "amount": 50
              }
            ]
          }
        ],
        "attributes": {
          "1": [
            {
              "id": 54,
              "amount": 5000
            }
          ],
          "2": [
            {
              "id": 56,
              "amount": 100
            }
          ],
          "3": [
            {
              "id": 55,
              "amount": 10000
            }
          ],
          "4": [
            {
              "id": 57,
              "amount": 200
            }
          ],
          "5": [
            {
              "id": 51,
              "amount": 100000
            }
          ],
          "6": [
            {
              "id": 60,
              "amount": 300
            }
          ],
          "7": [
            {
              "id": 100,
              "amount": 30000
            }
          ],
          "8": [
            {
              "id": 61,
              "amount": 400
            }
          ],
          "9": [
            {
              "id": 25,
              "amount": 500
            }
          ],
          "10": [
            {
              "id": 24,
              "amount": 600
            }
          ],
          "11": [
            {
              "id": 54,
              "amount": 40000
            }
          ],
          "12": [
            {
              "id": 22,
              "amount": 500
            }
          ],
          "13": [
            {
              "id": 55,
              "amount": 50000
            }
          ],
          "14": [
            {
              "id": 23,
              "amount": 600
            }
          ],
          "15": [
            {
              "id": 51,
              "amount": 300000
            }
          ],
          "16": [
            {
              "id": 100,
              "amount": 70000
            }
          ],
          "17": [
            {
              "id": 23,
              "amount": 500
            }
          ],
          "18": [
            {
              "id": 22,
              "amount": 600
            }
          ],
          "19": [
            {
              "id": 102,
              "amount": 500
            }
          ],
          "20": [
            {
              "id": 101,
              "amount": 600
            }
          ],
          "21": [
            {
              "id": 54,
              "amount": 80000
            }
          ],
          "22": [
            {
              "id": 101,
              "amount": 600
            }
          ],
          "23": [
            {
              "id": 102,
              "amount": 700
            }
          ],
          "24": [
            {
              "id": 180,
              "amount": 600
            }
          ],
          "25": [
            {
              "id": 179,
              "amount": 700
            }
          ]
        },
        "requirements": [
          {
            "advance": 1,
            "requirement": 1
          },
          {
            "advance": 3,
            "requirement": 2
          },
          {
            "advance": 6,
            "requirement": 3
          },
          {
            "advance": 10,
            "requirement": 4
          },
          {
            "advance": 15,
            "requirement": 5
          },
          {
            "advance": 20,
            "requirement": 6
          },
          {
            "advance": 25,
            "requirement": 7
          }
        ]
      }
    },
    {
      "id": 940029,
      "name": "黄天角",
      "hero": "张角",
      "icon": "assets/mibao-items/940029.png",
      "maxLevel": 500,
      "baseAttributes": [
        {
          "id": 100,
          "amount": 500
        },
        {
          "id": 54,
          "amount": 500
        },
        {
          "id": 55,
          "amount": 500
        },
        {
          "id": 51,
          "amount": 2500
        }
      ],
      "growthAttributes": [
        {
          "id": 100,
          "amount": 250
        },
        {
          "id": 54,
          "amount": 250
        },
        {
          "id": 55,
          "amount": 250
        },
        {
          "id": 51,
          "amount": 1250
        }
      ],
      "strengthen": {
        "fromLevel": 1,
        "toLevel": 500,
        "costRule": {
          "silverPerLevel": 50000,
          "stoneStart": 10,
          "stoneStep": 5,
          "costItemId": 60085
        },
        "levelsConfigured": 998,
        "upgradeAttributes": [
          {
            "id": 100,
            "amount": 2500
          },
          {
            "id": 54,
            "amount": 2500
          },
          {
            "id": 55,
            "amount": 2500
          },
          {
            "id": 51,
            "amount": 12500
          }
        ],
        "thresholds": [
          {
            "level": 20,
            "costs": [
              {
                "itemId": 60087,
                "amount": 30
              },
              {
                "itemId": 940029,
                "amount": 2
              }
            ]
          },
          {
            "level": 40,
            "costs": [
              {
                "itemId": 60087,
                "amount": 60
              },
              {
                "itemId": 940029,
                "amount": 4
              }
            ]
          },
          {
            "level": 60,
            "costs": [
              {
                "itemId": 60087,
                "amount": 90
              },
              {
                "itemId": 940029,
                "amount": 6
              }
            ]
          },
          {
            "level": 80,
            "costs": [
              {
                "itemId": 60087,
                "amount": 120
              },
              {
                "itemId": 940029,
                "amount": 8
              }
            ]
          },
          {
            "level": 100,
            "costs": [
              {
                "itemId": 60087,
                "amount": 150
              },
              {
                "itemId": 940029,
                "amount": 10
              }
            ]
          },
          {
            "level": 120,
            "costs": [
              {
                "itemId": 60087,
                "amount": 180
              },
              {
                "itemId": 940029,
                "amount": 12
              }
            ]
          },
          {
            "level": 140,
            "costs": [
              {
                "itemId": 60087,
                "amount": 210
              },
              {
                "itemId": 940029,
                "amount": 16
              }
            ]
          },
          {
            "level": 160,
            "costs": [
              {
                "itemId": 60087,
                "amount": 240
              },
              {
                "itemId": 940029,
                "amount": 20
              }
            ]
          },
          {
            "level": 180,
            "costs": [
              {
                "itemId": 60087,
                "amount": 270
              },
              {
                "itemId": 940029,
                "amount": 25
              }
            ]
          },
          {
            "level": 200,
            "costs": [
              {
                "itemId": 60087,
                "amount": 300
              },
              {
                "itemId": 940029,
                "amount": 30
              }
            ]
          },
          {
            "level": 220,
            "costs": [
              {
                "itemId": 60087,
                "amount": 330
              },
              {
                "itemId": 940029,
                "amount": 35
              }
            ]
          },
          {
            "level": 240,
            "costs": [
              {
                "itemId": 60087,
                "amount": 360
              },
              {
                "itemId": 940029,
                "amount": 40
              }
            ]
          },
          {
            "level": 260,
            "costs": [
              {
                "itemId": 60087,
                "amount": 390
              },
              {
                "itemId": 940029,
                "amount": 45
              }
            ]
          },
          {
            "level": 280,
            "costs": [
              {
                "itemId": 60087,
                "amount": 420
              },
              {
                "itemId": 940029,
                "amount": 50
              }
            ]
          },
          {
            "level": 300,
            "costs": [
              {
                "itemId": 60087,
                "amount": 450
              },
              {
                "itemId": 940029,
                "amount": 50
              }
            ]
          },
          {
            "level": 320,
            "costs": [
              {
                "itemId": 60087,
                "amount": 480
              },
              {
                "itemId": 940029,
                "amount": 50
              }
            ]
          },
          {
            "level": 340,
            "costs": [
              {
                "itemId": 60087,
                "amount": 510
              },
              {
                "itemId": 940029,
                "amount": 50
              }
            ]
          },
          {
            "level": 360,
            "costs": [
              {
                "itemId": 60087,
                "amount": 540
              },
              {
                "itemId": 940029,
                "amount": 50
              }
            ]
          },
          {
            "level": 380,
            "costs": [
              {
                "itemId": 60087,
                "amount": 570
              },
              {
                "itemId": 940029,
                "amount": 50
              }
            ]
          },
          {
            "level": 400,
            "costs": [
              {
                "itemId": 60087,
                "amount": 600
              },
              {
                "itemId": 940029,
                "amount": 50
              }
            ]
          },
          {
            "level": 420,
            "costs": [
              {
                "itemId": 60087,
                "amount": 630
              },
              {
                "itemId": 940029,
                "amount": 50
              }
            ]
          },
          {
            "level": 440,
            "costs": [
              {
                "itemId": 60087,
                "amount": 660
              },
              {
                "itemId": 940029,
                "amount": 50
              }
            ]
          },
          {
            "level": 460,
            "costs": [
              {
                "itemId": 60087,
                "amount": 690
              },
              {
                "itemId": 940029,
                "amount": 50
              }
            ]
          },
          {
            "level": 480,
            "costs": [
              {
                "itemId": 60087,
                "amount": 720
              },
              {
                "itemId": 940029,
                "amount": 50
              }
            ]
          },
          {
            "level": 500,
            "costs": [
              {
                "itemId": 60087,
                "amount": 750
              },
              {
                "itemId": 940029,
                "amount": 50
              }
            ]
          }
        ]
      },
      "advance": {
        "thresholds": [
          {
            "level": 10,
            "costs": [
              {
                "itemId": 60086,
                "amount": 150
              },
              {
                "itemId": 940029,
                "amount": 2
              }
            ]
          },
          {
            "level": 30,
            "costs": [
              {
                "itemId": 60086,
                "amount": 300
              },
              {
                "itemId": 940029,
                "amount": 4
              }
            ]
          },
          {
            "level": 50,
            "costs": [
              {
                "itemId": 60086,
                "amount": 450
              },
              {
                "itemId": 940029,
                "amount": 6
              }
            ]
          },
          {
            "level": 70,
            "costs": [
              {
                "itemId": 60086,
                "amount": 600
              },
              {
                "itemId": 940029,
                "amount": 8
              }
            ]
          },
          {
            "level": 90,
            "costs": [
              {
                "itemId": 60086,
                "amount": 750
              },
              {
                "itemId": 940029,
                "amount": 10
              }
            ]
          },
          {
            "level": 110,
            "costs": [
              {
                "itemId": 60086,
                "amount": 900
              },
              {
                "itemId": 940029,
                "amount": 12
              }
            ]
          },
          {
            "level": 130,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1050
              },
              {
                "itemId": 940029,
                "amount": 16
              }
            ]
          },
          {
            "level": 150,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1200
              },
              {
                "itemId": 940029,
                "amount": 20
              }
            ]
          },
          {
            "level": 170,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1350
              },
              {
                "itemId": 940029,
                "amount": 25
              }
            ]
          },
          {
            "level": 190,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1500
              },
              {
                "itemId": 940029,
                "amount": 30
              }
            ]
          },
          {
            "level": 210,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1650
              },
              {
                "itemId": 940029,
                "amount": 35
              }
            ]
          },
          {
            "level": 230,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1800
              },
              {
                "itemId": 940029,
                "amount": 40
              }
            ]
          },
          {
            "level": 250,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1950
              },
              {
                "itemId": 940029,
                "amount": 45
              }
            ]
          },
          {
            "level": 270,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2100
              },
              {
                "itemId": 940029,
                "amount": 50
              }
            ]
          },
          {
            "level": 290,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2250
              },
              {
                "itemId": 940029,
                "amount": 50
              }
            ]
          },
          {
            "level": 310,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2400
              },
              {
                "itemId": 940029,
                "amount": 50
              }
            ]
          },
          {
            "level": 330,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2550
              },
              {
                "itemId": 940029,
                "amount": 50
              }
            ]
          },
          {
            "level": 350,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2700
              },
              {
                "itemId": 940029,
                "amount": 50
              }
            ]
          },
          {
            "level": 370,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2850
              },
              {
                "itemId": 940029,
                "amount": 50
              }
            ]
          },
          {
            "level": 390,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3000
              },
              {
                "itemId": 940029,
                "amount": 50
              }
            ]
          },
          {
            "level": 410,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3150
              },
              {
                "itemId": 940029,
                "amount": 50
              }
            ]
          },
          {
            "level": 430,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3300
              },
              {
                "itemId": 940029,
                "amount": 50
              }
            ]
          },
          {
            "level": 450,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3450
              },
              {
                "itemId": 940029,
                "amount": 50
              }
            ]
          },
          {
            "level": 470,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3600
              },
              {
                "itemId": 940029,
                "amount": 50
              }
            ]
          },
          {
            "level": 490,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3750
              },
              {
                "itemId": 940029,
                "amount": 50
              }
            ]
          }
        ],
        "attributes": {
          "1": [
            {
              "id": 54,
              "amount": 5000
            }
          ],
          "2": [
            {
              "id": 56,
              "amount": 100
            }
          ],
          "3": [
            {
              "id": 55,
              "amount": 10000
            }
          ],
          "4": [
            {
              "id": 57,
              "amount": 200
            }
          ],
          "5": [
            {
              "id": 51,
              "amount": 100000
            }
          ],
          "6": [
            {
              "id": 60,
              "amount": 300
            }
          ],
          "7": [
            {
              "id": 100,
              "amount": 30000
            }
          ],
          "8": [
            {
              "id": 61,
              "amount": 400
            }
          ],
          "9": [
            {
              "id": 25,
              "amount": 500
            }
          ],
          "10": [
            {
              "id": 24,
              "amount": 600
            }
          ],
          "11": [
            {
              "id": 54,
              "amount": 40000
            }
          ],
          "12": [
            {
              "id": 22,
              "amount": 500
            }
          ],
          "13": [
            {
              "id": 55,
              "amount": 50000
            }
          ],
          "14": [
            {
              "id": 23,
              "amount": 600
            }
          ],
          "15": [
            {
              "id": 51,
              "amount": 300000
            }
          ],
          "16": [
            {
              "id": 100,
              "amount": 70000
            }
          ],
          "17": [
            {
              "id": 23,
              "amount": 500
            }
          ],
          "18": [
            {
              "id": 22,
              "amount": 600
            }
          ],
          "19": [
            {
              "id": 102,
              "amount": 500
            }
          ],
          "20": [
            {
              "id": 101,
              "amount": 600
            }
          ],
          "21": [
            {
              "id": 54,
              "amount": 80000
            }
          ],
          "22": [
            {
              "id": 101,
              "amount": 600
            }
          ],
          "23": [
            {
              "id": 102,
              "amount": 700
            }
          ],
          "24": [
            {
              "id": 180,
              "amount": 600
            }
          ],
          "25": [
            {
              "id": 179,
              "amount": 700
            }
          ]
        },
        "requirements": [
          {
            "advance": 1,
            "requirement": 1
          },
          {
            "advance": 3,
            "requirement": 2
          },
          {
            "advance": 6,
            "requirement": 3
          },
          {
            "advance": 10,
            "requirement": 4
          },
          {
            "advance": 15,
            "requirement": 5
          },
          {
            "advance": 20,
            "requirement": 6
          },
          {
            "advance": 25,
            "requirement": 7
          }
        ]
      }
    },
    {
      "id": 940030,
      "name": "魔天铜雀台",
      "hero": "曹操",
      "icon": "assets/mibao-items/940030.png",
      "maxLevel": 500,
      "baseAttributes": [
        {
          "id": 100,
          "amount": 500
        },
        {
          "id": 54,
          "amount": 500
        },
        {
          "id": 55,
          "amount": 500
        },
        {
          "id": 51,
          "amount": 2500
        }
      ],
      "growthAttributes": [
        {
          "id": 100,
          "amount": 250
        },
        {
          "id": 54,
          "amount": 250
        },
        {
          "id": 55,
          "amount": 250
        },
        {
          "id": 51,
          "amount": 1250
        }
      ],
      "strengthen": {
        "fromLevel": 1,
        "toLevel": 500,
        "costRule": {
          "silverPerLevel": 50000,
          "stoneStart": 10,
          "stoneStep": 5,
          "costItemId": 60085
        },
        "levelsConfigured": 998,
        "upgradeAttributes": [
          {
            "id": 100,
            "amount": 2500
          },
          {
            "id": 54,
            "amount": 2500
          },
          {
            "id": 55,
            "amount": 2500
          },
          {
            "id": 51,
            "amount": 12500
          }
        ],
        "thresholds": [
          {
            "level": 20,
            "costs": [
              {
                "itemId": 60087,
                "amount": 30
              },
              {
                "itemId": 940030,
                "amount": 2
              }
            ]
          },
          {
            "level": 40,
            "costs": [
              {
                "itemId": 60087,
                "amount": 60
              },
              {
                "itemId": 940030,
                "amount": 4
              }
            ]
          },
          {
            "level": 60,
            "costs": [
              {
                "itemId": 60087,
                "amount": 90
              },
              {
                "itemId": 940030,
                "amount": 6
              }
            ]
          },
          {
            "level": 80,
            "costs": [
              {
                "itemId": 60087,
                "amount": 120
              },
              {
                "itemId": 940030,
                "amount": 8
              }
            ]
          },
          {
            "level": 100,
            "costs": [
              {
                "itemId": 60087,
                "amount": 150
              },
              {
                "itemId": 940030,
                "amount": 10
              }
            ]
          },
          {
            "level": 120,
            "costs": [
              {
                "itemId": 60087,
                "amount": 180
              },
              {
                "itemId": 940030,
                "amount": 12
              }
            ]
          },
          {
            "level": 140,
            "costs": [
              {
                "itemId": 60087,
                "amount": 210
              },
              {
                "itemId": 940030,
                "amount": 16
              }
            ]
          },
          {
            "level": 160,
            "costs": [
              {
                "itemId": 60087,
                "amount": 240
              },
              {
                "itemId": 940030,
                "amount": 20
              }
            ]
          },
          {
            "level": 180,
            "costs": [
              {
                "itemId": 60087,
                "amount": 270
              },
              {
                "itemId": 940030,
                "amount": 25
              }
            ]
          },
          {
            "level": 200,
            "costs": [
              {
                "itemId": 60087,
                "amount": 300
              },
              {
                "itemId": 940030,
                "amount": 30
              }
            ]
          },
          {
            "level": 220,
            "costs": [
              {
                "itemId": 60087,
                "amount": 330
              },
              {
                "itemId": 940030,
                "amount": 35
              }
            ]
          },
          {
            "level": 240,
            "costs": [
              {
                "itemId": 60087,
                "amount": 360
              },
              {
                "itemId": 940030,
                "amount": 40
              }
            ]
          },
          {
            "level": 260,
            "costs": [
              {
                "itemId": 60087,
                "amount": 390
              },
              {
                "itemId": 940030,
                "amount": 45
              }
            ]
          },
          {
            "level": 280,
            "costs": [
              {
                "itemId": 60087,
                "amount": 420
              },
              {
                "itemId": 940030,
                "amount": 50
              }
            ]
          },
          {
            "level": 300,
            "costs": [
              {
                "itemId": 60087,
                "amount": 450
              },
              {
                "itemId": 940030,
                "amount": 50
              }
            ]
          },
          {
            "level": 320,
            "costs": [
              {
                "itemId": 60087,
                "amount": 480
              },
              {
                "itemId": 940030,
                "amount": 50
              }
            ]
          },
          {
            "level": 340,
            "costs": [
              {
                "itemId": 60087,
                "amount": 510
              },
              {
                "itemId": 940030,
                "amount": 50
              }
            ]
          },
          {
            "level": 360,
            "costs": [
              {
                "itemId": 60087,
                "amount": 540
              },
              {
                "itemId": 940030,
                "amount": 50
              }
            ]
          },
          {
            "level": 380,
            "costs": [
              {
                "itemId": 60087,
                "amount": 570
              },
              {
                "itemId": 940030,
                "amount": 50
              }
            ]
          },
          {
            "level": 400,
            "costs": [
              {
                "itemId": 60087,
                "amount": 600
              },
              {
                "itemId": 940030,
                "amount": 50
              }
            ]
          },
          {
            "level": 420,
            "costs": [
              {
                "itemId": 60087,
                "amount": 630
              },
              {
                "itemId": 940030,
                "amount": 50
              }
            ]
          },
          {
            "level": 440,
            "costs": [
              {
                "itemId": 60087,
                "amount": 660
              },
              {
                "itemId": 940030,
                "amount": 50
              }
            ]
          },
          {
            "level": 460,
            "costs": [
              {
                "itemId": 60087,
                "amount": 690
              },
              {
                "itemId": 940030,
                "amount": 50
              }
            ]
          },
          {
            "level": 480,
            "costs": [
              {
                "itemId": 60087,
                "amount": 720
              },
              {
                "itemId": 940030,
                "amount": 50
              }
            ]
          },
          {
            "level": 500,
            "costs": [
              {
                "itemId": 60087,
                "amount": 750
              },
              {
                "itemId": 940030,
                "amount": 50
              }
            ]
          }
        ]
      },
      "advance": {
        "thresholds": [
          {
            "level": 10,
            "costs": [
              {
                "itemId": 60086,
                "amount": 150
              },
              {
                "itemId": 940030,
                "amount": 2
              }
            ]
          },
          {
            "level": 30,
            "costs": [
              {
                "itemId": 60086,
                "amount": 300
              },
              {
                "itemId": 940030,
                "amount": 4
              }
            ]
          },
          {
            "level": 50,
            "costs": [
              {
                "itemId": 60086,
                "amount": 450
              },
              {
                "itemId": 940030,
                "amount": 6
              }
            ]
          },
          {
            "level": 70,
            "costs": [
              {
                "itemId": 60086,
                "amount": 600
              },
              {
                "itemId": 940030,
                "amount": 8
              }
            ]
          },
          {
            "level": 90,
            "costs": [
              {
                "itemId": 60086,
                "amount": 750
              },
              {
                "itemId": 940030,
                "amount": 10
              }
            ]
          },
          {
            "level": 110,
            "costs": [
              {
                "itemId": 60086,
                "amount": 900
              },
              {
                "itemId": 940030,
                "amount": 12
              }
            ]
          },
          {
            "level": 130,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1050
              },
              {
                "itemId": 940030,
                "amount": 16
              }
            ]
          },
          {
            "level": 150,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1200
              },
              {
                "itemId": 940030,
                "amount": 20
              }
            ]
          },
          {
            "level": 170,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1350
              },
              {
                "itemId": 940030,
                "amount": 25
              }
            ]
          },
          {
            "level": 190,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1500
              },
              {
                "itemId": 940030,
                "amount": 30
              }
            ]
          },
          {
            "level": 210,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1650
              },
              {
                "itemId": 940030,
                "amount": 35
              }
            ]
          },
          {
            "level": 230,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1800
              },
              {
                "itemId": 940030,
                "amount": 40
              }
            ]
          },
          {
            "level": 250,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1950
              },
              {
                "itemId": 940030,
                "amount": 45
              }
            ]
          },
          {
            "level": 270,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2100
              },
              {
                "itemId": 940030,
                "amount": 50
              }
            ]
          },
          {
            "level": 290,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2250
              },
              {
                "itemId": 940030,
                "amount": 50
              }
            ]
          },
          {
            "level": 310,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2400
              },
              {
                "itemId": 940030,
                "amount": 50
              }
            ]
          },
          {
            "level": 330,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2550
              },
              {
                "itemId": 940030,
                "amount": 50
              }
            ]
          },
          {
            "level": 350,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2700
              },
              {
                "itemId": 940030,
                "amount": 50
              }
            ]
          },
          {
            "level": 370,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2850
              },
              {
                "itemId": 940030,
                "amount": 50
              }
            ]
          },
          {
            "level": 390,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3000
              },
              {
                "itemId": 940030,
                "amount": 50
              }
            ]
          },
          {
            "level": 410,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3150
              },
              {
                "itemId": 940030,
                "amount": 50
              }
            ]
          },
          {
            "level": 430,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3300
              },
              {
                "itemId": 940030,
                "amount": 50
              }
            ]
          },
          {
            "level": 450,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3450
              },
              {
                "itemId": 940030,
                "amount": 50
              }
            ]
          },
          {
            "level": 470,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3600
              },
              {
                "itemId": 940030,
                "amount": 50
              }
            ]
          },
          {
            "level": 490,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3750
              },
              {
                "itemId": 940030,
                "amount": 50
              }
            ]
          }
        ],
        "attributes": {
          "1": [
            {
              "id": 54,
              "amount": 5000
            }
          ],
          "2": [
            {
              "id": 56,
              "amount": 100
            }
          ],
          "3": [
            {
              "id": 55,
              "amount": 10000
            }
          ],
          "4": [
            {
              "id": 57,
              "amount": 200
            }
          ],
          "5": [
            {
              "id": 51,
              "amount": 100000
            }
          ],
          "6": [
            {
              "id": 60,
              "amount": 300
            }
          ],
          "7": [
            {
              "id": 100,
              "amount": 30000
            }
          ],
          "8": [
            {
              "id": 61,
              "amount": 400
            }
          ],
          "9": [
            {
              "id": 25,
              "amount": 500
            }
          ],
          "10": [
            {
              "id": 24,
              "amount": 600
            }
          ],
          "11": [
            {
              "id": 54,
              "amount": 40000
            }
          ],
          "12": [
            {
              "id": 22,
              "amount": 500
            }
          ],
          "13": [
            {
              "id": 55,
              "amount": 50000
            }
          ],
          "14": [
            {
              "id": 23,
              "amount": 600
            }
          ],
          "15": [
            {
              "id": 51,
              "amount": 300000
            }
          ],
          "16": [
            {
              "id": 100,
              "amount": 70000
            }
          ],
          "17": [
            {
              "id": 23,
              "amount": 500
            }
          ],
          "18": [
            {
              "id": 22,
              "amount": 600
            }
          ],
          "19": [
            {
              "id": 102,
              "amount": 500
            }
          ],
          "20": [
            {
              "id": 101,
              "amount": 600
            }
          ],
          "21": [
            {
              "id": 54,
              "amount": 80000
            }
          ],
          "22": [
            {
              "id": 101,
              "amount": 600
            }
          ],
          "23": [
            {
              "id": 102,
              "amount": 700
            }
          ],
          "24": [
            {
              "id": 180,
              "amount": 600
            }
          ],
          "25": [
            {
              "id": 179,
              "amount": 700
            }
          ]
        },
        "requirements": [
          {
            "advance": 1,
            "requirement": 1
          },
          {
            "advance": 3,
            "requirement": 2
          },
          {
            "advance": 6,
            "requirement": 3
          },
          {
            "advance": 10,
            "requirement": 4
          },
          {
            "advance": 15,
            "requirement": 5
          },
          {
            "advance": 20,
            "requirement": 6
          },
          {
            "advance": 25,
            "requirement": 7
          }
        ]
      }
    },
    {
      "id": 940031,
      "name": "天地英雄令",
      "hero": "刘备",
      "icon": "assets/mibao-items/940031.png",
      "maxLevel": 500,
      "baseAttributes": [
        {
          "id": 100,
          "amount": 500
        },
        {
          "id": 54,
          "amount": 500
        },
        {
          "id": 55,
          "amount": 500
        },
        {
          "id": 51,
          "amount": 2500
        }
      ],
      "growthAttributes": [
        {
          "id": 100,
          "amount": 250
        },
        {
          "id": 54,
          "amount": 250
        },
        {
          "id": 55,
          "amount": 250
        },
        {
          "id": 51,
          "amount": 1250
        }
      ],
      "strengthen": {
        "fromLevel": 1,
        "toLevel": 500,
        "costRule": {
          "silverPerLevel": 50000,
          "stoneStart": 10,
          "stoneStep": 5,
          "costItemId": 60085
        },
        "levelsConfigured": 998,
        "upgradeAttributes": [
          {
            "id": 100,
            "amount": 2500
          },
          {
            "id": 54,
            "amount": 2500
          },
          {
            "id": 55,
            "amount": 2500
          },
          {
            "id": 51,
            "amount": 12500
          }
        ],
        "thresholds": [
          {
            "level": 20,
            "costs": [
              {
                "itemId": 60087,
                "amount": 30
              },
              {
                "itemId": 940031,
                "amount": 2
              }
            ]
          },
          {
            "level": 40,
            "costs": [
              {
                "itemId": 60087,
                "amount": 60
              },
              {
                "itemId": 940031,
                "amount": 4
              }
            ]
          },
          {
            "level": 60,
            "costs": [
              {
                "itemId": 60087,
                "amount": 90
              },
              {
                "itemId": 940031,
                "amount": 6
              }
            ]
          },
          {
            "level": 80,
            "costs": [
              {
                "itemId": 60087,
                "amount": 120
              },
              {
                "itemId": 940031,
                "amount": 8
              }
            ]
          },
          {
            "level": 100,
            "costs": [
              {
                "itemId": 60087,
                "amount": 150
              },
              {
                "itemId": 940031,
                "amount": 10
              }
            ]
          },
          {
            "level": 120,
            "costs": [
              {
                "itemId": 60087,
                "amount": 180
              },
              {
                "itemId": 940031,
                "amount": 12
              }
            ]
          },
          {
            "level": 140,
            "costs": [
              {
                "itemId": 60087,
                "amount": 210
              },
              {
                "itemId": 940031,
                "amount": 16
              }
            ]
          },
          {
            "level": 160,
            "costs": [
              {
                "itemId": 60087,
                "amount": 240
              },
              {
                "itemId": 940031,
                "amount": 20
              }
            ]
          },
          {
            "level": 180,
            "costs": [
              {
                "itemId": 60087,
                "amount": 270
              },
              {
                "itemId": 940031,
                "amount": 25
              }
            ]
          },
          {
            "level": 200,
            "costs": [
              {
                "itemId": 60087,
                "amount": 300
              },
              {
                "itemId": 940031,
                "amount": 30
              }
            ]
          },
          {
            "level": 220,
            "costs": [
              {
                "itemId": 60087,
                "amount": 330
              },
              {
                "itemId": 940031,
                "amount": 35
              }
            ]
          },
          {
            "level": 240,
            "costs": [
              {
                "itemId": 60087,
                "amount": 360
              },
              {
                "itemId": 940031,
                "amount": 40
              }
            ]
          },
          {
            "level": 260,
            "costs": [
              {
                "itemId": 60087,
                "amount": 390
              },
              {
                "itemId": 940031,
                "amount": 45
              }
            ]
          },
          {
            "level": 280,
            "costs": [
              {
                "itemId": 60087,
                "amount": 420
              },
              {
                "itemId": 940031,
                "amount": 50
              }
            ]
          },
          {
            "level": 300,
            "costs": [
              {
                "itemId": 60087,
                "amount": 450
              },
              {
                "itemId": 940031,
                "amount": 50
              }
            ]
          },
          {
            "level": 320,
            "costs": [
              {
                "itemId": 60087,
                "amount": 480
              },
              {
                "itemId": 940031,
                "amount": 50
              }
            ]
          },
          {
            "level": 340,
            "costs": [
              {
                "itemId": 60087,
                "amount": 510
              },
              {
                "itemId": 940031,
                "amount": 50
              }
            ]
          },
          {
            "level": 360,
            "costs": [
              {
                "itemId": 60087,
                "amount": 540
              },
              {
                "itemId": 940031,
                "amount": 50
              }
            ]
          },
          {
            "level": 380,
            "costs": [
              {
                "itemId": 60087,
                "amount": 570
              },
              {
                "itemId": 940031,
                "amount": 50
              }
            ]
          },
          {
            "level": 400,
            "costs": [
              {
                "itemId": 60087,
                "amount": 600
              },
              {
                "itemId": 940031,
                "amount": 50
              }
            ]
          },
          {
            "level": 420,
            "costs": [
              {
                "itemId": 60087,
                "amount": 630
              },
              {
                "itemId": 940031,
                "amount": 50
              }
            ]
          },
          {
            "level": 440,
            "costs": [
              {
                "itemId": 60087,
                "amount": 660
              },
              {
                "itemId": 940031,
                "amount": 50
              }
            ]
          },
          {
            "level": 460,
            "costs": [
              {
                "itemId": 60087,
                "amount": 690
              },
              {
                "itemId": 940031,
                "amount": 50
              }
            ]
          },
          {
            "level": 480,
            "costs": [
              {
                "itemId": 60087,
                "amount": 720
              },
              {
                "itemId": 940031,
                "amount": 50
              }
            ]
          },
          {
            "level": 500,
            "costs": [
              {
                "itemId": 60087,
                "amount": 750
              },
              {
                "itemId": 940031,
                "amount": 50
              }
            ]
          }
        ]
      },
      "advance": {
        "thresholds": [
          {
            "level": 10,
            "costs": [
              {
                "itemId": 60086,
                "amount": 150
              },
              {
                "itemId": 940031,
                "amount": 2
              }
            ]
          },
          {
            "level": 30,
            "costs": [
              {
                "itemId": 60086,
                "amount": 300
              },
              {
                "itemId": 940031,
                "amount": 4
              }
            ]
          },
          {
            "level": 50,
            "costs": [
              {
                "itemId": 60086,
                "amount": 450
              },
              {
                "itemId": 940031,
                "amount": 6
              }
            ]
          },
          {
            "level": 70,
            "costs": [
              {
                "itemId": 60086,
                "amount": 600
              },
              {
                "itemId": 940031,
                "amount": 8
              }
            ]
          },
          {
            "level": 90,
            "costs": [
              {
                "itemId": 60086,
                "amount": 750
              },
              {
                "itemId": 940031,
                "amount": 10
              }
            ]
          },
          {
            "level": 110,
            "costs": [
              {
                "itemId": 60086,
                "amount": 900
              },
              {
                "itemId": 940031,
                "amount": 12
              }
            ]
          },
          {
            "level": 130,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1050
              },
              {
                "itemId": 940031,
                "amount": 16
              }
            ]
          },
          {
            "level": 150,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1200
              },
              {
                "itemId": 940031,
                "amount": 20
              }
            ]
          },
          {
            "level": 170,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1350
              },
              {
                "itemId": 940031,
                "amount": 25
              }
            ]
          },
          {
            "level": 190,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1500
              },
              {
                "itemId": 940031,
                "amount": 30
              }
            ]
          },
          {
            "level": 210,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1650
              },
              {
                "itemId": 940031,
                "amount": 35
              }
            ]
          },
          {
            "level": 230,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1800
              },
              {
                "itemId": 940031,
                "amount": 40
              }
            ]
          },
          {
            "level": 250,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1950
              },
              {
                "itemId": 940031,
                "amount": 45
              }
            ]
          },
          {
            "level": 270,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2100
              },
              {
                "itemId": 940031,
                "amount": 50
              }
            ]
          },
          {
            "level": 290,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2250
              },
              {
                "itemId": 940031,
                "amount": 50
              }
            ]
          },
          {
            "level": 310,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2400
              },
              {
                "itemId": 940031,
                "amount": 50
              }
            ]
          },
          {
            "level": 330,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2550
              },
              {
                "itemId": 940031,
                "amount": 50
              }
            ]
          },
          {
            "level": 350,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2700
              },
              {
                "itemId": 940031,
                "amount": 50
              }
            ]
          },
          {
            "level": 370,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2850
              },
              {
                "itemId": 940031,
                "amount": 50
              }
            ]
          },
          {
            "level": 390,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3000
              },
              {
                "itemId": 940031,
                "amount": 50
              }
            ]
          },
          {
            "level": 410,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3150
              },
              {
                "itemId": 940031,
                "amount": 50
              }
            ]
          },
          {
            "level": 430,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3300
              },
              {
                "itemId": 940031,
                "amount": 50
              }
            ]
          },
          {
            "level": 450,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3450
              },
              {
                "itemId": 940031,
                "amount": 50
              }
            ]
          },
          {
            "level": 470,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3600
              },
              {
                "itemId": 940031,
                "amount": 50
              }
            ]
          },
          {
            "level": 490,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3750
              },
              {
                "itemId": 940031,
                "amount": 50
              }
            ]
          }
        ],
        "attributes": {
          "1": [
            {
              "id": 54,
              "amount": 5000
            }
          ],
          "2": [
            {
              "id": 56,
              "amount": 100
            }
          ],
          "3": [
            {
              "id": 55,
              "amount": 10000
            }
          ],
          "4": [
            {
              "id": 57,
              "amount": 200
            }
          ],
          "5": [
            {
              "id": 51,
              "amount": 100000
            }
          ],
          "6": [
            {
              "id": 60,
              "amount": 300
            }
          ],
          "7": [
            {
              "id": 100,
              "amount": 30000
            }
          ],
          "8": [
            {
              "id": 61,
              "amount": 400
            }
          ],
          "9": [
            {
              "id": 25,
              "amount": 500
            }
          ],
          "10": [
            {
              "id": 24,
              "amount": 600
            }
          ],
          "11": [
            {
              "id": 54,
              "amount": 40000
            }
          ],
          "12": [
            {
              "id": 22,
              "amount": 500
            }
          ],
          "13": [
            {
              "id": 55,
              "amount": 50000
            }
          ],
          "14": [
            {
              "id": 23,
              "amount": 600
            }
          ],
          "15": [
            {
              "id": 51,
              "amount": 300000
            }
          ],
          "16": [
            {
              "id": 100,
              "amount": 70000
            }
          ],
          "17": [
            {
              "id": 23,
              "amount": 500
            }
          ],
          "18": [
            {
              "id": 22,
              "amount": 600
            }
          ],
          "19": [
            {
              "id": 102,
              "amount": 500
            }
          ],
          "20": [
            {
              "id": 101,
              "amount": 600
            }
          ],
          "21": [
            {
              "id": 54,
              "amount": 80000
            }
          ],
          "22": [
            {
              "id": 101,
              "amount": 600
            }
          ],
          "23": [
            {
              "id": 102,
              "amount": 700
            }
          ],
          "24": [
            {
              "id": 180,
              "amount": 600
            }
          ],
          "25": [
            {
              "id": 179,
              "amount": 700
            }
          ]
        },
        "requirements": [
          {
            "advance": 1,
            "requirement": 1
          },
          {
            "advance": 3,
            "requirement": 2
          },
          {
            "advance": 6,
            "requirement": 3
          },
          {
            "advance": 10,
            "requirement": 4
          },
          {
            "advance": 15,
            "requirement": 5
          },
          {
            "advance": 20,
            "requirement": 6
          },
          {
            "advance": 25,
            "requirement": 7
          }
        ]
      }
    },
    {
      "id": 940032,
      "name": "命运骰",
      "hero": "孙权",
      "icon": "assets/mibao-items/940032.png",
      "maxLevel": 500,
      "baseAttributes": [
        {
          "id": 100,
          "amount": 500
        },
        {
          "id": 54,
          "amount": 500
        },
        {
          "id": 55,
          "amount": 500
        },
        {
          "id": 51,
          "amount": 2500
        }
      ],
      "growthAttributes": [
        {
          "id": 100,
          "amount": 250
        },
        {
          "id": 54,
          "amount": 250
        },
        {
          "id": 55,
          "amount": 250
        },
        {
          "id": 51,
          "amount": 1250
        }
      ],
      "strengthen": {
        "fromLevel": 1,
        "toLevel": 500,
        "costRule": {
          "silverPerLevel": 50000,
          "stoneStart": 10,
          "stoneStep": 5,
          "costItemId": 60085
        },
        "levelsConfigured": 998,
        "upgradeAttributes": [
          {
            "id": 100,
            "amount": 2500
          },
          {
            "id": 54,
            "amount": 2500
          },
          {
            "id": 55,
            "amount": 2500
          },
          {
            "id": 51,
            "amount": 12500
          }
        ],
        "thresholds": [
          {
            "level": 20,
            "costs": [
              {
                "itemId": 60087,
                "amount": 30
              },
              {
                "itemId": 940032,
                "amount": 2
              }
            ]
          },
          {
            "level": 40,
            "costs": [
              {
                "itemId": 60087,
                "amount": 60
              },
              {
                "itemId": 940032,
                "amount": 4
              }
            ]
          },
          {
            "level": 60,
            "costs": [
              {
                "itemId": 60087,
                "amount": 90
              },
              {
                "itemId": 940032,
                "amount": 6
              }
            ]
          },
          {
            "level": 80,
            "costs": [
              {
                "itemId": 60087,
                "amount": 120
              },
              {
                "itemId": 940032,
                "amount": 8
              }
            ]
          },
          {
            "level": 100,
            "costs": [
              {
                "itemId": 60087,
                "amount": 150
              },
              {
                "itemId": 940032,
                "amount": 10
              }
            ]
          },
          {
            "level": 120,
            "costs": [
              {
                "itemId": 60087,
                "amount": 180
              },
              {
                "itemId": 940032,
                "amount": 12
              }
            ]
          },
          {
            "level": 140,
            "costs": [
              {
                "itemId": 60087,
                "amount": 210
              },
              {
                "itemId": 940032,
                "amount": 16
              }
            ]
          },
          {
            "level": 160,
            "costs": [
              {
                "itemId": 60087,
                "amount": 240
              },
              {
                "itemId": 940032,
                "amount": 20
              }
            ]
          },
          {
            "level": 180,
            "costs": [
              {
                "itemId": 60087,
                "amount": 270
              },
              {
                "itemId": 940032,
                "amount": 25
              }
            ]
          },
          {
            "level": 200,
            "costs": [
              {
                "itemId": 60087,
                "amount": 300
              },
              {
                "itemId": 940032,
                "amount": 30
              }
            ]
          },
          {
            "level": 220,
            "costs": [
              {
                "itemId": 60087,
                "amount": 330
              },
              {
                "itemId": 940032,
                "amount": 35
              }
            ]
          },
          {
            "level": 240,
            "costs": [
              {
                "itemId": 60087,
                "amount": 360
              },
              {
                "itemId": 940032,
                "amount": 40
              }
            ]
          },
          {
            "level": 260,
            "costs": [
              {
                "itemId": 60087,
                "amount": 390
              },
              {
                "itemId": 940032,
                "amount": 45
              }
            ]
          },
          {
            "level": 280,
            "costs": [
              {
                "itemId": 60087,
                "amount": 420
              },
              {
                "itemId": 940032,
                "amount": 50
              }
            ]
          },
          {
            "level": 300,
            "costs": [
              {
                "itemId": 60087,
                "amount": 450
              },
              {
                "itemId": 940032,
                "amount": 50
              }
            ]
          },
          {
            "level": 320,
            "costs": [
              {
                "itemId": 60087,
                "amount": 480
              },
              {
                "itemId": 940032,
                "amount": 50
              }
            ]
          },
          {
            "level": 340,
            "costs": [
              {
                "itemId": 60087,
                "amount": 510
              },
              {
                "itemId": 940032,
                "amount": 50
              }
            ]
          },
          {
            "level": 360,
            "costs": [
              {
                "itemId": 60087,
                "amount": 540
              },
              {
                "itemId": 940032,
                "amount": 50
              }
            ]
          },
          {
            "level": 380,
            "costs": [
              {
                "itemId": 60087,
                "amount": 570
              },
              {
                "itemId": 940032,
                "amount": 50
              }
            ]
          },
          {
            "level": 400,
            "costs": [
              {
                "itemId": 60087,
                "amount": 600
              },
              {
                "itemId": 940032,
                "amount": 50
              }
            ]
          },
          {
            "level": 420,
            "costs": [
              {
                "itemId": 60087,
                "amount": 630
              },
              {
                "itemId": 940032,
                "amount": 50
              }
            ]
          },
          {
            "level": 440,
            "costs": [
              {
                "itemId": 60087,
                "amount": 660
              },
              {
                "itemId": 940032,
                "amount": 50
              }
            ]
          },
          {
            "level": 460,
            "costs": [
              {
                "itemId": 60087,
                "amount": 690
              },
              {
                "itemId": 940032,
                "amount": 50
              }
            ]
          },
          {
            "level": 480,
            "costs": [
              {
                "itemId": 60087,
                "amount": 720
              },
              {
                "itemId": 940032,
                "amount": 50
              }
            ]
          },
          {
            "level": 500,
            "costs": [
              {
                "itemId": 60087,
                "amount": 750
              },
              {
                "itemId": 940032,
                "amount": 50
              }
            ]
          }
        ]
      },
      "advance": {
        "thresholds": [
          {
            "level": 10,
            "costs": [
              {
                "itemId": 60086,
                "amount": 150
              },
              {
                "itemId": 940032,
                "amount": 2
              }
            ]
          },
          {
            "level": 30,
            "costs": [
              {
                "itemId": 60086,
                "amount": 300
              },
              {
                "itemId": 940032,
                "amount": 4
              }
            ]
          },
          {
            "level": 50,
            "costs": [
              {
                "itemId": 60086,
                "amount": 450
              },
              {
                "itemId": 940032,
                "amount": 6
              }
            ]
          },
          {
            "level": 70,
            "costs": [
              {
                "itemId": 60086,
                "amount": 600
              },
              {
                "itemId": 940032,
                "amount": 8
              }
            ]
          },
          {
            "level": 90,
            "costs": [
              {
                "itemId": 60086,
                "amount": 750
              },
              {
                "itemId": 940032,
                "amount": 10
              }
            ]
          },
          {
            "level": 110,
            "costs": [
              {
                "itemId": 60086,
                "amount": 900
              },
              {
                "itemId": 940032,
                "amount": 12
              }
            ]
          },
          {
            "level": 130,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1050
              },
              {
                "itemId": 940032,
                "amount": 16
              }
            ]
          },
          {
            "level": 150,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1200
              },
              {
                "itemId": 940032,
                "amount": 20
              }
            ]
          },
          {
            "level": 170,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1350
              },
              {
                "itemId": 940032,
                "amount": 25
              }
            ]
          },
          {
            "level": 190,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1500
              },
              {
                "itemId": 940032,
                "amount": 30
              }
            ]
          },
          {
            "level": 210,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1650
              },
              {
                "itemId": 940032,
                "amount": 35
              }
            ]
          },
          {
            "level": 230,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1800
              },
              {
                "itemId": 940032,
                "amount": 40
              }
            ]
          },
          {
            "level": 250,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1950
              },
              {
                "itemId": 940032,
                "amount": 45
              }
            ]
          },
          {
            "level": 270,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2100
              },
              {
                "itemId": 940032,
                "amount": 50
              }
            ]
          },
          {
            "level": 290,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2250
              },
              {
                "itemId": 940032,
                "amount": 50
              }
            ]
          },
          {
            "level": 310,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2400
              },
              {
                "itemId": 940032,
                "amount": 50
              }
            ]
          },
          {
            "level": 330,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2550
              },
              {
                "itemId": 940032,
                "amount": 50
              }
            ]
          },
          {
            "level": 350,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2700
              },
              {
                "itemId": 940032,
                "amount": 50
              }
            ]
          },
          {
            "level": 370,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2850
              },
              {
                "itemId": 940032,
                "amount": 50
              }
            ]
          },
          {
            "level": 390,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3000
              },
              {
                "itemId": 940032,
                "amount": 50
              }
            ]
          },
          {
            "level": 410,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3150
              },
              {
                "itemId": 940032,
                "amount": 50
              }
            ]
          },
          {
            "level": 430,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3300
              },
              {
                "itemId": 940032,
                "amount": 50
              }
            ]
          },
          {
            "level": 450,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3450
              },
              {
                "itemId": 940032,
                "amount": 50
              }
            ]
          },
          {
            "level": 470,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3600
              },
              {
                "itemId": 940032,
                "amount": 50
              }
            ]
          },
          {
            "level": 490,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3750
              },
              {
                "itemId": 940032,
                "amount": 50
              }
            ]
          }
        ],
        "attributes": {
          "1": [
            {
              "id": 54,
              "amount": 5000
            }
          ],
          "2": [
            {
              "id": 56,
              "amount": 100
            }
          ],
          "3": [
            {
              "id": 55,
              "amount": 10000
            }
          ],
          "4": [
            {
              "id": 57,
              "amount": 200
            }
          ],
          "5": [
            {
              "id": 51,
              "amount": 100000
            }
          ],
          "6": [
            {
              "id": 60,
              "amount": 300
            }
          ],
          "7": [
            {
              "id": 100,
              "amount": 30000
            }
          ],
          "8": [
            {
              "id": 61,
              "amount": 400
            }
          ],
          "9": [
            {
              "id": 25,
              "amount": 500
            }
          ],
          "10": [
            {
              "id": 24,
              "amount": 600
            }
          ],
          "11": [
            {
              "id": 54,
              "amount": 40000
            }
          ],
          "12": [
            {
              "id": 22,
              "amount": 500
            }
          ],
          "13": [
            {
              "id": 55,
              "amount": 50000
            }
          ],
          "14": [
            {
              "id": 23,
              "amount": 600
            }
          ],
          "15": [
            {
              "id": 51,
              "amount": 300000
            }
          ],
          "16": [
            {
              "id": 100,
              "amount": 70000
            }
          ],
          "17": [
            {
              "id": 23,
              "amount": 500
            }
          ],
          "18": [
            {
              "id": 22,
              "amount": 600
            }
          ],
          "19": [
            {
              "id": 102,
              "amount": 500
            }
          ],
          "20": [
            {
              "id": 101,
              "amount": 600
            }
          ],
          "21": [
            {
              "id": 54,
              "amount": 80000
            }
          ],
          "22": [
            {
              "id": 101,
              "amount": 600
            }
          ],
          "23": [
            {
              "id": 102,
              "amount": 700
            }
          ],
          "24": [
            {
              "id": 180,
              "amount": 600
            }
          ],
          "25": [
            {
              "id": 179,
              "amount": 700
            }
          ]
        },
        "requirements": [
          {
            "advance": 1,
            "requirement": 1
          },
          {
            "advance": 3,
            "requirement": 2
          },
          {
            "advance": 6,
            "requirement": 3
          },
          {
            "advance": 10,
            "requirement": 4
          },
          {
            "advance": 15,
            "requirement": 5
          },
          {
            "advance": 20,
            "requirement": 6
          },
          {
            "advance": 25,
            "requirement": 7
          }
        ]
      }
    },
    {
      "id": 940033,
      "name": "酒池肉林杯",
      "hero": "董卓",
      "icon": "assets/mibao-items/940033.png",
      "maxLevel": 500,
      "baseAttributes": [
        {
          "id": 100,
          "amount": 500
        },
        {
          "id": 54,
          "amount": 500
        },
        {
          "id": 55,
          "amount": 500
        },
        {
          "id": 51,
          "amount": 2500
        }
      ],
      "growthAttributes": [
        {
          "id": 100,
          "amount": 250
        },
        {
          "id": 54,
          "amount": 250
        },
        {
          "id": 55,
          "amount": 250
        },
        {
          "id": 51,
          "amount": 1250
        }
      ],
      "strengthen": {
        "fromLevel": 1,
        "toLevel": 500,
        "costRule": {
          "silverPerLevel": 50000,
          "stoneStart": 10,
          "stoneStep": 5,
          "costItemId": 60085
        },
        "levelsConfigured": 998,
        "upgradeAttributes": [
          {
            "id": 100,
            "amount": 2500
          },
          {
            "id": 54,
            "amount": 2500
          },
          {
            "id": 55,
            "amount": 2500
          },
          {
            "id": 51,
            "amount": 12500
          }
        ],
        "thresholds": [
          {
            "level": 20,
            "costs": [
              {
                "itemId": 60087,
                "amount": 30
              },
              {
                "itemId": 940033,
                "amount": 2
              }
            ]
          },
          {
            "level": 40,
            "costs": [
              {
                "itemId": 60087,
                "amount": 60
              },
              {
                "itemId": 940033,
                "amount": 4
              }
            ]
          },
          {
            "level": 60,
            "costs": [
              {
                "itemId": 60087,
                "amount": 90
              },
              {
                "itemId": 940033,
                "amount": 6
              }
            ]
          },
          {
            "level": 80,
            "costs": [
              {
                "itemId": 60087,
                "amount": 120
              },
              {
                "itemId": 940033,
                "amount": 8
              }
            ]
          },
          {
            "level": 100,
            "costs": [
              {
                "itemId": 60087,
                "amount": 150
              },
              {
                "itemId": 940033,
                "amount": 10
              }
            ]
          },
          {
            "level": 120,
            "costs": [
              {
                "itemId": 60087,
                "amount": 180
              },
              {
                "itemId": 940033,
                "amount": 12
              }
            ]
          },
          {
            "level": 140,
            "costs": [
              {
                "itemId": 60087,
                "amount": 210
              },
              {
                "itemId": 940033,
                "amount": 16
              }
            ]
          },
          {
            "level": 160,
            "costs": [
              {
                "itemId": 60087,
                "amount": 240
              },
              {
                "itemId": 940033,
                "amount": 20
              }
            ]
          },
          {
            "level": 180,
            "costs": [
              {
                "itemId": 60087,
                "amount": 270
              },
              {
                "itemId": 940033,
                "amount": 25
              }
            ]
          },
          {
            "level": 200,
            "costs": [
              {
                "itemId": 60087,
                "amount": 300
              },
              {
                "itemId": 940033,
                "amount": 30
              }
            ]
          },
          {
            "level": 220,
            "costs": [
              {
                "itemId": 60087,
                "amount": 330
              },
              {
                "itemId": 940033,
                "amount": 35
              }
            ]
          },
          {
            "level": 240,
            "costs": [
              {
                "itemId": 60087,
                "amount": 360
              },
              {
                "itemId": 940033,
                "amount": 40
              }
            ]
          },
          {
            "level": 260,
            "costs": [
              {
                "itemId": 60087,
                "amount": 390
              },
              {
                "itemId": 940033,
                "amount": 45
              }
            ]
          },
          {
            "level": 280,
            "costs": [
              {
                "itemId": 60087,
                "amount": 420
              },
              {
                "itemId": 940033,
                "amount": 50
              }
            ]
          },
          {
            "level": 300,
            "costs": [
              {
                "itemId": 60087,
                "amount": 450
              },
              {
                "itemId": 940033,
                "amount": 50
              }
            ]
          },
          {
            "level": 320,
            "costs": [
              {
                "itemId": 60087,
                "amount": 480
              },
              {
                "itemId": 940033,
                "amount": 50
              }
            ]
          },
          {
            "level": 340,
            "costs": [
              {
                "itemId": 60087,
                "amount": 510
              },
              {
                "itemId": 940033,
                "amount": 50
              }
            ]
          },
          {
            "level": 360,
            "costs": [
              {
                "itemId": 60087,
                "amount": 540
              },
              {
                "itemId": 940033,
                "amount": 50
              }
            ]
          },
          {
            "level": 380,
            "costs": [
              {
                "itemId": 60087,
                "amount": 570
              },
              {
                "itemId": 940033,
                "amount": 50
              }
            ]
          },
          {
            "level": 400,
            "costs": [
              {
                "itemId": 60087,
                "amount": 600
              },
              {
                "itemId": 940033,
                "amount": 50
              }
            ]
          },
          {
            "level": 420,
            "costs": [
              {
                "itemId": 60087,
                "amount": 630
              },
              {
                "itemId": 940033,
                "amount": 50
              }
            ]
          },
          {
            "level": 440,
            "costs": [
              {
                "itemId": 60087,
                "amount": 660
              },
              {
                "itemId": 940033,
                "amount": 50
              }
            ]
          },
          {
            "level": 460,
            "costs": [
              {
                "itemId": 60087,
                "amount": 690
              },
              {
                "itemId": 940033,
                "amount": 50
              }
            ]
          },
          {
            "level": 480,
            "costs": [
              {
                "itemId": 60087,
                "amount": 720
              },
              {
                "itemId": 940033,
                "amount": 50
              }
            ]
          },
          {
            "level": 500,
            "costs": [
              {
                "itemId": 60087,
                "amount": 750
              },
              {
                "itemId": 940033,
                "amount": 50
              }
            ]
          }
        ]
      },
      "advance": {
        "thresholds": [
          {
            "level": 10,
            "costs": [
              {
                "itemId": 60086,
                "amount": 150
              },
              {
                "itemId": 940033,
                "amount": 2
              }
            ]
          },
          {
            "level": 30,
            "costs": [
              {
                "itemId": 60086,
                "amount": 300
              },
              {
                "itemId": 940033,
                "amount": 4
              }
            ]
          },
          {
            "level": 50,
            "costs": [
              {
                "itemId": 60086,
                "amount": 450
              },
              {
                "itemId": 940033,
                "amount": 6
              }
            ]
          },
          {
            "level": 70,
            "costs": [
              {
                "itemId": 60086,
                "amount": 600
              },
              {
                "itemId": 940033,
                "amount": 8
              }
            ]
          },
          {
            "level": 90,
            "costs": [
              {
                "itemId": 60086,
                "amount": 750
              },
              {
                "itemId": 940033,
                "amount": 10
              }
            ]
          },
          {
            "level": 110,
            "costs": [
              {
                "itemId": 60086,
                "amount": 900
              },
              {
                "itemId": 940033,
                "amount": 12
              }
            ]
          },
          {
            "level": 130,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1050
              },
              {
                "itemId": 940033,
                "amount": 16
              }
            ]
          },
          {
            "level": 150,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1200
              },
              {
                "itemId": 940033,
                "amount": 20
              }
            ]
          },
          {
            "level": 170,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1350
              },
              {
                "itemId": 940033,
                "amount": 25
              }
            ]
          },
          {
            "level": 190,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1500
              },
              {
                "itemId": 940033,
                "amount": 30
              }
            ]
          },
          {
            "level": 210,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1650
              },
              {
                "itemId": 940033,
                "amount": 35
              }
            ]
          },
          {
            "level": 230,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1800
              },
              {
                "itemId": 940033,
                "amount": 40
              }
            ]
          },
          {
            "level": 250,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1950
              },
              {
                "itemId": 940033,
                "amount": 45
              }
            ]
          },
          {
            "level": 270,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2100
              },
              {
                "itemId": 940033,
                "amount": 50
              }
            ]
          },
          {
            "level": 290,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2250
              },
              {
                "itemId": 940033,
                "amount": 50
              }
            ]
          },
          {
            "level": 310,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2400
              },
              {
                "itemId": 940033,
                "amount": 50
              }
            ]
          },
          {
            "level": 330,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2550
              },
              {
                "itemId": 940033,
                "amount": 50
              }
            ]
          },
          {
            "level": 350,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2700
              },
              {
                "itemId": 940033,
                "amount": 50
              }
            ]
          },
          {
            "level": 370,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2850
              },
              {
                "itemId": 940033,
                "amount": 50
              }
            ]
          },
          {
            "level": 390,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3000
              },
              {
                "itemId": 940033,
                "amount": 50
              }
            ]
          },
          {
            "level": 410,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3150
              },
              {
                "itemId": 940033,
                "amount": 50
              }
            ]
          },
          {
            "level": 430,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3300
              },
              {
                "itemId": 940033,
                "amount": 50
              }
            ]
          },
          {
            "level": 450,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3450
              },
              {
                "itemId": 940033,
                "amount": 50
              }
            ]
          },
          {
            "level": 470,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3600
              },
              {
                "itemId": 940033,
                "amount": 50
              }
            ]
          },
          {
            "level": 490,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3750
              },
              {
                "itemId": 940033,
                "amount": 50
              }
            ]
          }
        ],
        "attributes": {
          "1": [
            {
              "id": 54,
              "amount": 5000
            }
          ],
          "2": [
            {
              "id": 56,
              "amount": 100
            }
          ],
          "3": [
            {
              "id": 55,
              "amount": 10000
            }
          ],
          "4": [
            {
              "id": 57,
              "amount": 200
            }
          ],
          "5": [
            {
              "id": 51,
              "amount": 100000
            }
          ],
          "6": [
            {
              "id": 60,
              "amount": 300
            }
          ],
          "7": [
            {
              "id": 100,
              "amount": 30000
            }
          ],
          "8": [
            {
              "id": 61,
              "amount": 400
            }
          ],
          "9": [
            {
              "id": 25,
              "amount": 500
            }
          ],
          "10": [
            {
              "id": 24,
              "amount": 600
            }
          ],
          "11": [
            {
              "id": 54,
              "amount": 40000
            }
          ],
          "12": [
            {
              "id": 22,
              "amount": 500
            }
          ],
          "13": [
            {
              "id": 55,
              "amount": 50000
            }
          ],
          "14": [
            {
              "id": 23,
              "amount": 600
            }
          ],
          "15": [
            {
              "id": 51,
              "amount": 300000
            }
          ],
          "16": [
            {
              "id": 100,
              "amount": 70000
            }
          ],
          "17": [
            {
              "id": 23,
              "amount": 500
            }
          ],
          "18": [
            {
              "id": 22,
              "amount": 600
            }
          ],
          "19": [
            {
              "id": 102,
              "amount": 500
            }
          ],
          "20": [
            {
              "id": 101,
              "amount": 600
            }
          ],
          "21": [
            {
              "id": 54,
              "amount": 80000
            }
          ],
          "22": [
            {
              "id": 101,
              "amount": 600
            }
          ],
          "23": [
            {
              "id": 102,
              "amount": 700
            }
          ],
          "24": [
            {
              "id": 180,
              "amount": 600
            }
          ],
          "25": [
            {
              "id": 179,
              "amount": 700
            }
          ]
        },
        "requirements": [
          {
            "advance": 1,
            "requirement": 1
          },
          {
            "advance": 3,
            "requirement": 2
          },
          {
            "advance": 6,
            "requirement": 3
          },
          {
            "advance": 10,
            "requirement": 4
          },
          {
            "advance": 15,
            "requirement": 5
          },
          {
            "advance": 20,
            "requirement": 6
          },
          {
            "advance": 25,
            "requirement": 7
          }
        ]
      }
    },
    {
      "id": 940034,
      "name": "深宫琴谱",
      "hero": "蔡文姬",
      "icon": "assets/mibao-items/940034.png",
      "maxLevel": 500,
      "baseAttributes": [
        {
          "id": 100,
          "amount": 500
        },
        {
          "id": 54,
          "amount": 500
        },
        {
          "id": 55,
          "amount": 500
        },
        {
          "id": 51,
          "amount": 2500
        }
      ],
      "growthAttributes": [
        {
          "id": 100,
          "amount": 250
        },
        {
          "id": 54,
          "amount": 250
        },
        {
          "id": 55,
          "amount": 250
        },
        {
          "id": 51,
          "amount": 1250
        }
      ],
      "strengthen": {
        "fromLevel": 1,
        "toLevel": 500,
        "costRule": {
          "silverPerLevel": 50000,
          "stoneStart": 10,
          "stoneStep": 5,
          "costItemId": 60085
        },
        "levelsConfigured": 998,
        "upgradeAttributes": [
          {
            "id": 100,
            "amount": 2500
          },
          {
            "id": 54,
            "amount": 2500
          },
          {
            "id": 55,
            "amount": 2500
          },
          {
            "id": 51,
            "amount": 12500
          }
        ],
        "thresholds": [
          {
            "level": 20,
            "costs": [
              {
                "itemId": 60087,
                "amount": 30
              },
              {
                "itemId": 940034,
                "amount": 2
              }
            ]
          },
          {
            "level": 40,
            "costs": [
              {
                "itemId": 60087,
                "amount": 60
              },
              {
                "itemId": 940034,
                "amount": 4
              }
            ]
          },
          {
            "level": 60,
            "costs": [
              {
                "itemId": 60087,
                "amount": 90
              },
              {
                "itemId": 940034,
                "amount": 6
              }
            ]
          },
          {
            "level": 80,
            "costs": [
              {
                "itemId": 60087,
                "amount": 120
              },
              {
                "itemId": 940034,
                "amount": 8
              }
            ]
          },
          {
            "level": 100,
            "costs": [
              {
                "itemId": 60087,
                "amount": 150
              },
              {
                "itemId": 940034,
                "amount": 10
              }
            ]
          },
          {
            "level": 120,
            "costs": [
              {
                "itemId": 60087,
                "amount": 180
              },
              {
                "itemId": 940034,
                "amount": 12
              }
            ]
          },
          {
            "level": 140,
            "costs": [
              {
                "itemId": 60087,
                "amount": 210
              },
              {
                "itemId": 940034,
                "amount": 16
              }
            ]
          },
          {
            "level": 160,
            "costs": [
              {
                "itemId": 60087,
                "amount": 240
              },
              {
                "itemId": 940034,
                "amount": 20
              }
            ]
          },
          {
            "level": 180,
            "costs": [
              {
                "itemId": 60087,
                "amount": 270
              },
              {
                "itemId": 940034,
                "amount": 25
              }
            ]
          },
          {
            "level": 200,
            "costs": [
              {
                "itemId": 60087,
                "amount": 300
              },
              {
                "itemId": 940034,
                "amount": 30
              }
            ]
          },
          {
            "level": 220,
            "costs": [
              {
                "itemId": 60087,
                "amount": 330
              },
              {
                "itemId": 940034,
                "amount": 35
              }
            ]
          },
          {
            "level": 240,
            "costs": [
              {
                "itemId": 60087,
                "amount": 360
              },
              {
                "itemId": 940034,
                "amount": 40
              }
            ]
          },
          {
            "level": 260,
            "costs": [
              {
                "itemId": 60087,
                "amount": 390
              },
              {
                "itemId": 940034,
                "amount": 45
              }
            ]
          },
          {
            "level": 280,
            "costs": [
              {
                "itemId": 60087,
                "amount": 420
              },
              {
                "itemId": 940034,
                "amount": 50
              }
            ]
          },
          {
            "level": 300,
            "costs": [
              {
                "itemId": 60087,
                "amount": 450
              },
              {
                "itemId": 940034,
                "amount": 50
              }
            ]
          },
          {
            "level": 320,
            "costs": [
              {
                "itemId": 60087,
                "amount": 480
              },
              {
                "itemId": 940034,
                "amount": 50
              }
            ]
          },
          {
            "level": 340,
            "costs": [
              {
                "itemId": 60087,
                "amount": 510
              },
              {
                "itemId": 940034,
                "amount": 50
              }
            ]
          },
          {
            "level": 360,
            "costs": [
              {
                "itemId": 60087,
                "amount": 540
              },
              {
                "itemId": 940034,
                "amount": 50
              }
            ]
          },
          {
            "level": 380,
            "costs": [
              {
                "itemId": 60087,
                "amount": 570
              },
              {
                "itemId": 940034,
                "amount": 50
              }
            ]
          },
          {
            "level": 400,
            "costs": [
              {
                "itemId": 60087,
                "amount": 600
              },
              {
                "itemId": 940034,
                "amount": 50
              }
            ]
          },
          {
            "level": 420,
            "costs": [
              {
                "itemId": 60087,
                "amount": 630
              },
              {
                "itemId": 940034,
                "amount": 50
              }
            ]
          },
          {
            "level": 440,
            "costs": [
              {
                "itemId": 60087,
                "amount": 660
              },
              {
                "itemId": 940034,
                "amount": 50
              }
            ]
          },
          {
            "level": 460,
            "costs": [
              {
                "itemId": 60087,
                "amount": 690
              },
              {
                "itemId": 940034,
                "amount": 50
              }
            ]
          },
          {
            "level": 480,
            "costs": [
              {
                "itemId": 60087,
                "amount": 720
              },
              {
                "itemId": 940034,
                "amount": 50
              }
            ]
          },
          {
            "level": 500,
            "costs": [
              {
                "itemId": 60087,
                "amount": 750
              },
              {
                "itemId": 940034,
                "amount": 50
              }
            ]
          }
        ]
      },
      "advance": {
        "thresholds": [
          {
            "level": 10,
            "costs": [
              {
                "itemId": 60086,
                "amount": 150
              },
              {
                "itemId": 940034,
                "amount": 2
              }
            ]
          },
          {
            "level": 30,
            "costs": [
              {
                "itemId": 60086,
                "amount": 300
              },
              {
                "itemId": 940034,
                "amount": 4
              }
            ]
          },
          {
            "level": 50,
            "costs": [
              {
                "itemId": 60086,
                "amount": 450
              },
              {
                "itemId": 940034,
                "amount": 6
              }
            ]
          },
          {
            "level": 70,
            "costs": [
              {
                "itemId": 60086,
                "amount": 600
              },
              {
                "itemId": 940034,
                "amount": 8
              }
            ]
          },
          {
            "level": 90,
            "costs": [
              {
                "itemId": 60086,
                "amount": 750
              },
              {
                "itemId": 940034,
                "amount": 10
              }
            ]
          },
          {
            "level": 110,
            "costs": [
              {
                "itemId": 60086,
                "amount": 900
              },
              {
                "itemId": 940034,
                "amount": 12
              }
            ]
          },
          {
            "level": 130,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1050
              },
              {
                "itemId": 940034,
                "amount": 16
              }
            ]
          },
          {
            "level": 150,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1200
              },
              {
                "itemId": 940034,
                "amount": 20
              }
            ]
          },
          {
            "level": 170,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1350
              },
              {
                "itemId": 940034,
                "amount": 25
              }
            ]
          },
          {
            "level": 190,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1500
              },
              {
                "itemId": 940034,
                "amount": 30
              }
            ]
          },
          {
            "level": 210,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1650
              },
              {
                "itemId": 940034,
                "amount": 35
              }
            ]
          },
          {
            "level": 230,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1800
              },
              {
                "itemId": 940034,
                "amount": 40
              }
            ]
          },
          {
            "level": 250,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1950
              },
              {
                "itemId": 940034,
                "amount": 45
              }
            ]
          },
          {
            "level": 270,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2100
              },
              {
                "itemId": 940034,
                "amount": 50
              }
            ]
          },
          {
            "level": 290,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2250
              },
              {
                "itemId": 940034,
                "amount": 50
              }
            ]
          },
          {
            "level": 310,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2400
              },
              {
                "itemId": 940034,
                "amount": 50
              }
            ]
          },
          {
            "level": 330,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2550
              },
              {
                "itemId": 940034,
                "amount": 50
              }
            ]
          },
          {
            "level": 350,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2700
              },
              {
                "itemId": 940034,
                "amount": 50
              }
            ]
          },
          {
            "level": 370,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2850
              },
              {
                "itemId": 940034,
                "amount": 50
              }
            ]
          },
          {
            "level": 390,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3000
              },
              {
                "itemId": 940034,
                "amount": 50
              }
            ]
          },
          {
            "level": 410,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3150
              },
              {
                "itemId": 940034,
                "amount": 50
              }
            ]
          },
          {
            "level": 430,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3300
              },
              {
                "itemId": 940034,
                "amount": 50
              }
            ]
          },
          {
            "level": 450,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3450
              },
              {
                "itemId": 940034,
                "amount": 50
              }
            ]
          },
          {
            "level": 470,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3600
              },
              {
                "itemId": 940034,
                "amount": 50
              }
            ]
          },
          {
            "level": 490,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3750
              },
              {
                "itemId": 940034,
                "amount": 50
              }
            ]
          }
        ],
        "attributes": {
          "1": [
            {
              "id": 54,
              "amount": 5000
            }
          ],
          "2": [
            {
              "id": 56,
              "amount": 100
            }
          ],
          "3": [
            {
              "id": 55,
              "amount": 10000
            }
          ],
          "4": [
            {
              "id": 57,
              "amount": 200
            }
          ],
          "5": [
            {
              "id": 51,
              "amount": 100000
            }
          ],
          "6": [
            {
              "id": 60,
              "amount": 300
            }
          ],
          "7": [
            {
              "id": 100,
              "amount": 30000
            }
          ],
          "8": [
            {
              "id": 61,
              "amount": 400
            }
          ],
          "9": [
            {
              "id": 25,
              "amount": 500
            }
          ],
          "10": [
            {
              "id": 24,
              "amount": 600
            }
          ],
          "11": [
            {
              "id": 54,
              "amount": 40000
            }
          ],
          "12": [
            {
              "id": 22,
              "amount": 500
            }
          ],
          "13": [
            {
              "id": 55,
              "amount": 50000
            }
          ],
          "14": [
            {
              "id": 23,
              "amount": 600
            }
          ],
          "15": [
            {
              "id": 51,
              "amount": 300000
            }
          ],
          "16": [
            {
              "id": 100,
              "amount": 70000
            }
          ],
          "17": [
            {
              "id": 23,
              "amount": 500
            }
          ],
          "18": [
            {
              "id": 22,
              "amount": 600
            }
          ],
          "19": [
            {
              "id": 102,
              "amount": 500
            }
          ],
          "20": [
            {
              "id": 101,
              "amount": 600
            }
          ],
          "21": [
            {
              "id": 54,
              "amount": 80000
            }
          ],
          "22": [
            {
              "id": 101,
              "amount": 600
            }
          ],
          "23": [
            {
              "id": 102,
              "amount": 700
            }
          ],
          "24": [
            {
              "id": 180,
              "amount": 600
            }
          ],
          "25": [
            {
              "id": 179,
              "amount": 700
            }
          ]
        },
        "requirements": [
          {
            "advance": 1,
            "requirement": 1
          },
          {
            "advance": 3,
            "requirement": 2
          },
          {
            "advance": 6,
            "requirement": 3
          },
          {
            "advance": 10,
            "requirement": 4
          },
          {
            "advance": 15,
            "requirement": 5
          },
          {
            "advance": 20,
            "requirement": 6
          },
          {
            "advance": 25,
            "requirement": 7
          }
        ]
      }
    },
    {
      "id": 940035,
      "name": "金翅蝶",
      "hero": "黄月英",
      "icon": "assets/mibao-items/940035.png",
      "maxLevel": 500,
      "baseAttributes": [
        {
          "id": 100,
          "amount": 500
        },
        {
          "id": 54,
          "amount": 500
        },
        {
          "id": 55,
          "amount": 500
        },
        {
          "id": 51,
          "amount": 2500
        }
      ],
      "growthAttributes": [
        {
          "id": 100,
          "amount": 250
        },
        {
          "id": 54,
          "amount": 250
        },
        {
          "id": 55,
          "amount": 250
        },
        {
          "id": 51,
          "amount": 1250
        }
      ],
      "strengthen": {
        "fromLevel": 1,
        "toLevel": 500,
        "costRule": {
          "silverPerLevel": 50000,
          "stoneStart": 10,
          "stoneStep": 5,
          "costItemId": 60085
        },
        "levelsConfigured": 998,
        "upgradeAttributes": [
          {
            "id": 100,
            "amount": 2500
          },
          {
            "id": 54,
            "amount": 2500
          },
          {
            "id": 55,
            "amount": 2500
          },
          {
            "id": 51,
            "amount": 12500
          }
        ],
        "thresholds": [
          {
            "level": 20,
            "costs": [
              {
                "itemId": 60087,
                "amount": 30
              },
              {
                "itemId": 940035,
                "amount": 2
              }
            ]
          },
          {
            "level": 40,
            "costs": [
              {
                "itemId": 60087,
                "amount": 60
              },
              {
                "itemId": 940035,
                "amount": 4
              }
            ]
          },
          {
            "level": 60,
            "costs": [
              {
                "itemId": 60087,
                "amount": 90
              },
              {
                "itemId": 940035,
                "amount": 6
              }
            ]
          },
          {
            "level": 80,
            "costs": [
              {
                "itemId": 60087,
                "amount": 120
              },
              {
                "itemId": 940035,
                "amount": 8
              }
            ]
          },
          {
            "level": 100,
            "costs": [
              {
                "itemId": 60087,
                "amount": 150
              },
              {
                "itemId": 940035,
                "amount": 10
              }
            ]
          },
          {
            "level": 120,
            "costs": [
              {
                "itemId": 60087,
                "amount": 180
              },
              {
                "itemId": 940035,
                "amount": 12
              }
            ]
          },
          {
            "level": 140,
            "costs": [
              {
                "itemId": 60087,
                "amount": 210
              },
              {
                "itemId": 940035,
                "amount": 16
              }
            ]
          },
          {
            "level": 160,
            "costs": [
              {
                "itemId": 60087,
                "amount": 240
              },
              {
                "itemId": 940035,
                "amount": 20
              }
            ]
          },
          {
            "level": 180,
            "costs": [
              {
                "itemId": 60087,
                "amount": 270
              },
              {
                "itemId": 940035,
                "amount": 25
              }
            ]
          },
          {
            "level": 200,
            "costs": [
              {
                "itemId": 60087,
                "amount": 300
              },
              {
                "itemId": 940035,
                "amount": 30
              }
            ]
          },
          {
            "level": 220,
            "costs": [
              {
                "itemId": 60087,
                "amount": 330
              },
              {
                "itemId": 940035,
                "amount": 35
              }
            ]
          },
          {
            "level": 240,
            "costs": [
              {
                "itemId": 60087,
                "amount": 360
              },
              {
                "itemId": 940035,
                "amount": 40
              }
            ]
          },
          {
            "level": 260,
            "costs": [
              {
                "itemId": 60087,
                "amount": 390
              },
              {
                "itemId": 940035,
                "amount": 45
              }
            ]
          },
          {
            "level": 280,
            "costs": [
              {
                "itemId": 60087,
                "amount": 420
              },
              {
                "itemId": 940035,
                "amount": 50
              }
            ]
          },
          {
            "level": 300,
            "costs": [
              {
                "itemId": 60087,
                "amount": 450
              },
              {
                "itemId": 940035,
                "amount": 50
              }
            ]
          },
          {
            "level": 320,
            "costs": [
              {
                "itemId": 60087,
                "amount": 480
              },
              {
                "itemId": 940035,
                "amount": 50
              }
            ]
          },
          {
            "level": 340,
            "costs": [
              {
                "itemId": 60087,
                "amount": 510
              },
              {
                "itemId": 940035,
                "amount": 50
              }
            ]
          },
          {
            "level": 360,
            "costs": [
              {
                "itemId": 60087,
                "amount": 540
              },
              {
                "itemId": 940035,
                "amount": 50
              }
            ]
          },
          {
            "level": 380,
            "costs": [
              {
                "itemId": 60087,
                "amount": 570
              },
              {
                "itemId": 940035,
                "amount": 50
              }
            ]
          },
          {
            "level": 400,
            "costs": [
              {
                "itemId": 60087,
                "amount": 600
              },
              {
                "itemId": 940035,
                "amount": 50
              }
            ]
          },
          {
            "level": 420,
            "costs": [
              {
                "itemId": 60087,
                "amount": 630
              },
              {
                "itemId": 940035,
                "amount": 50
              }
            ]
          },
          {
            "level": 440,
            "costs": [
              {
                "itemId": 60087,
                "amount": 660
              },
              {
                "itemId": 940035,
                "amount": 50
              }
            ]
          },
          {
            "level": 460,
            "costs": [
              {
                "itemId": 60087,
                "amount": 690
              },
              {
                "itemId": 940035,
                "amount": 50
              }
            ]
          },
          {
            "level": 480,
            "costs": [
              {
                "itemId": 60087,
                "amount": 720
              },
              {
                "itemId": 940035,
                "amount": 50
              }
            ]
          },
          {
            "level": 500,
            "costs": [
              {
                "itemId": 60087,
                "amount": 750
              },
              {
                "itemId": 940035,
                "amount": 50
              }
            ]
          }
        ]
      },
      "advance": {
        "thresholds": [
          {
            "level": 10,
            "costs": [
              {
                "itemId": 60086,
                "amount": 150
              },
              {
                "itemId": 940035,
                "amount": 2
              }
            ]
          },
          {
            "level": 30,
            "costs": [
              {
                "itemId": 60086,
                "amount": 300
              },
              {
                "itemId": 940035,
                "amount": 4
              }
            ]
          },
          {
            "level": 50,
            "costs": [
              {
                "itemId": 60086,
                "amount": 450
              },
              {
                "itemId": 940035,
                "amount": 6
              }
            ]
          },
          {
            "level": 70,
            "costs": [
              {
                "itemId": 60086,
                "amount": 600
              },
              {
                "itemId": 940035,
                "amount": 8
              }
            ]
          },
          {
            "level": 90,
            "costs": [
              {
                "itemId": 60086,
                "amount": 750
              },
              {
                "itemId": 940035,
                "amount": 10
              }
            ]
          },
          {
            "level": 110,
            "costs": [
              {
                "itemId": 60086,
                "amount": 900
              },
              {
                "itemId": 940035,
                "amount": 12
              }
            ]
          },
          {
            "level": 130,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1050
              },
              {
                "itemId": 940035,
                "amount": 16
              }
            ]
          },
          {
            "level": 150,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1200
              },
              {
                "itemId": 940035,
                "amount": 20
              }
            ]
          },
          {
            "level": 170,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1350
              },
              {
                "itemId": 940035,
                "amount": 25
              }
            ]
          },
          {
            "level": 190,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1500
              },
              {
                "itemId": 940035,
                "amount": 30
              }
            ]
          },
          {
            "level": 210,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1650
              },
              {
                "itemId": 940035,
                "amount": 35
              }
            ]
          },
          {
            "level": 230,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1800
              },
              {
                "itemId": 940035,
                "amount": 40
              }
            ]
          },
          {
            "level": 250,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1950
              },
              {
                "itemId": 940035,
                "amount": 45
              }
            ]
          },
          {
            "level": 270,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2100
              },
              {
                "itemId": 940035,
                "amount": 50
              }
            ]
          },
          {
            "level": 290,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2250
              },
              {
                "itemId": 940035,
                "amount": 50
              }
            ]
          },
          {
            "level": 310,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2400
              },
              {
                "itemId": 940035,
                "amount": 50
              }
            ]
          },
          {
            "level": 330,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2550
              },
              {
                "itemId": 940035,
                "amount": 50
              }
            ]
          },
          {
            "level": 350,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2700
              },
              {
                "itemId": 940035,
                "amount": 50
              }
            ]
          },
          {
            "level": 370,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2850
              },
              {
                "itemId": 940035,
                "amount": 50
              }
            ]
          },
          {
            "level": 390,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3000
              },
              {
                "itemId": 940035,
                "amount": 50
              }
            ]
          },
          {
            "level": 410,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3150
              },
              {
                "itemId": 940035,
                "amount": 50
              }
            ]
          },
          {
            "level": 430,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3300
              },
              {
                "itemId": 940035,
                "amount": 50
              }
            ]
          },
          {
            "level": 450,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3450
              },
              {
                "itemId": 940035,
                "amount": 50
              }
            ]
          },
          {
            "level": 470,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3600
              },
              {
                "itemId": 940035,
                "amount": 50
              }
            ]
          },
          {
            "level": 490,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3750
              },
              {
                "itemId": 940035,
                "amount": 50
              }
            ]
          }
        ],
        "attributes": {
          "1": [
            {
              "id": 54,
              "amount": 5000
            }
          ],
          "2": [
            {
              "id": 56,
              "amount": 100
            }
          ],
          "3": [
            {
              "id": 55,
              "amount": 10000
            }
          ],
          "4": [
            {
              "id": 57,
              "amount": 200
            }
          ],
          "5": [
            {
              "id": 51,
              "amount": 100000
            }
          ],
          "6": [
            {
              "id": 60,
              "amount": 300
            }
          ],
          "7": [
            {
              "id": 100,
              "amount": 30000
            }
          ],
          "8": [
            {
              "id": 61,
              "amount": 400
            }
          ],
          "9": [
            {
              "id": 25,
              "amount": 500
            }
          ],
          "10": [
            {
              "id": 24,
              "amount": 600
            }
          ],
          "11": [
            {
              "id": 54,
              "amount": 40000
            }
          ],
          "12": [
            {
              "id": 22,
              "amount": 500
            }
          ],
          "13": [
            {
              "id": 55,
              "amount": 50000
            }
          ],
          "14": [
            {
              "id": 23,
              "amount": 600
            }
          ],
          "15": [
            {
              "id": 51,
              "amount": 300000
            }
          ],
          "16": [
            {
              "id": 100,
              "amount": 70000
            }
          ],
          "17": [
            {
              "id": 23,
              "amount": 500
            }
          ],
          "18": [
            {
              "id": 22,
              "amount": 600
            }
          ],
          "19": [
            {
              "id": 102,
              "amount": 500
            }
          ],
          "20": [
            {
              "id": 101,
              "amount": 600
            }
          ],
          "21": [
            {
              "id": 54,
              "amount": 80000
            }
          ],
          "22": [
            {
              "id": 101,
              "amount": 600
            }
          ],
          "23": [
            {
              "id": 102,
              "amount": 700
            }
          ],
          "24": [
            {
              "id": 180,
              "amount": 600
            }
          ],
          "25": [
            {
              "id": 179,
              "amount": 700
            }
          ]
        },
        "requirements": [
          {
            "advance": 1,
            "requirement": 1
          },
          {
            "advance": 3,
            "requirement": 2
          },
          {
            "advance": 6,
            "requirement": 3
          },
          {
            "advance": 10,
            "requirement": 4
          },
          {
            "advance": 15,
            "requirement": 5
          },
          {
            "advance": 20,
            "requirement": 6
          },
          {
            "advance": 25,
            "requirement": 7
          }
        ]
      }
    },
    {
      "id": 940036,
      "name": "青狐妖尾",
      "hero": "小乔",
      "icon": "assets/mibao-items/940036.png",
      "maxLevel": 500,
      "baseAttributes": [
        {
          "id": 100,
          "amount": 500
        },
        {
          "id": 54,
          "amount": 500
        },
        {
          "id": 55,
          "amount": 500
        },
        {
          "id": 51,
          "amount": 2500
        }
      ],
      "growthAttributes": [
        {
          "id": 100,
          "amount": 250
        },
        {
          "id": 54,
          "amount": 250
        },
        {
          "id": 55,
          "amount": 250
        },
        {
          "id": 51,
          "amount": 1250
        }
      ],
      "strengthen": {
        "fromLevel": 1,
        "toLevel": 500,
        "costRule": {
          "silverPerLevel": 50000,
          "stoneStart": 10,
          "stoneStep": 5,
          "costItemId": 60085
        },
        "levelsConfigured": 998,
        "upgradeAttributes": [
          {
            "id": 100,
            "amount": 2500
          },
          {
            "id": 54,
            "amount": 2500
          },
          {
            "id": 55,
            "amount": 2500
          },
          {
            "id": 51,
            "amount": 12500
          }
        ],
        "thresholds": [
          {
            "level": 20,
            "costs": [
              {
                "itemId": 60087,
                "amount": 30
              },
              {
                "itemId": 940036,
                "amount": 2
              }
            ]
          },
          {
            "level": 40,
            "costs": [
              {
                "itemId": 60087,
                "amount": 60
              },
              {
                "itemId": 940036,
                "amount": 4
              }
            ]
          },
          {
            "level": 60,
            "costs": [
              {
                "itemId": 60087,
                "amount": 90
              },
              {
                "itemId": 940036,
                "amount": 6
              }
            ]
          },
          {
            "level": 80,
            "costs": [
              {
                "itemId": 60087,
                "amount": 120
              },
              {
                "itemId": 940036,
                "amount": 8
              }
            ]
          },
          {
            "level": 100,
            "costs": [
              {
                "itemId": 60087,
                "amount": 150
              },
              {
                "itemId": 940036,
                "amount": 10
              }
            ]
          },
          {
            "level": 120,
            "costs": [
              {
                "itemId": 60087,
                "amount": 180
              },
              {
                "itemId": 940036,
                "amount": 12
              }
            ]
          },
          {
            "level": 140,
            "costs": [
              {
                "itemId": 60087,
                "amount": 210
              },
              {
                "itemId": 940036,
                "amount": 16
              }
            ]
          },
          {
            "level": 160,
            "costs": [
              {
                "itemId": 60087,
                "amount": 240
              },
              {
                "itemId": 940036,
                "amount": 20
              }
            ]
          },
          {
            "level": 180,
            "costs": [
              {
                "itemId": 60087,
                "amount": 270
              },
              {
                "itemId": 940036,
                "amount": 25
              }
            ]
          },
          {
            "level": 200,
            "costs": [
              {
                "itemId": 60087,
                "amount": 300
              },
              {
                "itemId": 940036,
                "amount": 30
              }
            ]
          },
          {
            "level": 220,
            "costs": [
              {
                "itemId": 60087,
                "amount": 330
              },
              {
                "itemId": 940036,
                "amount": 35
              }
            ]
          },
          {
            "level": 240,
            "costs": [
              {
                "itemId": 60087,
                "amount": 360
              },
              {
                "itemId": 940036,
                "amount": 40
              }
            ]
          },
          {
            "level": 260,
            "costs": [
              {
                "itemId": 60087,
                "amount": 390
              },
              {
                "itemId": 940036,
                "amount": 45
              }
            ]
          },
          {
            "level": 280,
            "costs": [
              {
                "itemId": 60087,
                "amount": 420
              },
              {
                "itemId": 940036,
                "amount": 50
              }
            ]
          },
          {
            "level": 300,
            "costs": [
              {
                "itemId": 60087,
                "amount": 450
              },
              {
                "itemId": 940036,
                "amount": 50
              }
            ]
          },
          {
            "level": 320,
            "costs": [
              {
                "itemId": 60087,
                "amount": 480
              },
              {
                "itemId": 940036,
                "amount": 50
              }
            ]
          },
          {
            "level": 340,
            "costs": [
              {
                "itemId": 60087,
                "amount": 510
              },
              {
                "itemId": 940036,
                "amount": 50
              }
            ]
          },
          {
            "level": 360,
            "costs": [
              {
                "itemId": 60087,
                "amount": 540
              },
              {
                "itemId": 940036,
                "amount": 50
              }
            ]
          },
          {
            "level": 380,
            "costs": [
              {
                "itemId": 60087,
                "amount": 570
              },
              {
                "itemId": 940036,
                "amount": 50
              }
            ]
          },
          {
            "level": 400,
            "costs": [
              {
                "itemId": 60087,
                "amount": 600
              },
              {
                "itemId": 940036,
                "amount": 50
              }
            ]
          },
          {
            "level": 420,
            "costs": [
              {
                "itemId": 60087,
                "amount": 630
              },
              {
                "itemId": 940036,
                "amount": 50
              }
            ]
          },
          {
            "level": 440,
            "costs": [
              {
                "itemId": 60087,
                "amount": 660
              },
              {
                "itemId": 940036,
                "amount": 50
              }
            ]
          },
          {
            "level": 460,
            "costs": [
              {
                "itemId": 60087,
                "amount": 690
              },
              {
                "itemId": 940036,
                "amount": 50
              }
            ]
          },
          {
            "level": 480,
            "costs": [
              {
                "itemId": 60087,
                "amount": 720
              },
              {
                "itemId": 940036,
                "amount": 50
              }
            ]
          },
          {
            "level": 500,
            "costs": [
              {
                "itemId": 60087,
                "amount": 750
              },
              {
                "itemId": 940036,
                "amount": 50
              }
            ]
          }
        ]
      },
      "advance": {
        "thresholds": [
          {
            "level": 10,
            "costs": [
              {
                "itemId": 60086,
                "amount": 150
              },
              {
                "itemId": 940036,
                "amount": 2
              }
            ]
          },
          {
            "level": 30,
            "costs": [
              {
                "itemId": 60086,
                "amount": 300
              },
              {
                "itemId": 940036,
                "amount": 4
              }
            ]
          },
          {
            "level": 50,
            "costs": [
              {
                "itemId": 60086,
                "amount": 450
              },
              {
                "itemId": 940036,
                "amount": 6
              }
            ]
          },
          {
            "level": 70,
            "costs": [
              {
                "itemId": 60086,
                "amount": 600
              },
              {
                "itemId": 940036,
                "amount": 8
              }
            ]
          },
          {
            "level": 90,
            "costs": [
              {
                "itemId": 60086,
                "amount": 750
              },
              {
                "itemId": 940036,
                "amount": 10
              }
            ]
          },
          {
            "level": 110,
            "costs": [
              {
                "itemId": 60086,
                "amount": 900
              },
              {
                "itemId": 940036,
                "amount": 12
              }
            ]
          },
          {
            "level": 130,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1050
              },
              {
                "itemId": 940036,
                "amount": 16
              }
            ]
          },
          {
            "level": 150,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1200
              },
              {
                "itemId": 940036,
                "amount": 20
              }
            ]
          },
          {
            "level": 170,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1350
              },
              {
                "itemId": 940036,
                "amount": 25
              }
            ]
          },
          {
            "level": 190,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1500
              },
              {
                "itemId": 940036,
                "amount": 30
              }
            ]
          },
          {
            "level": 210,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1650
              },
              {
                "itemId": 940036,
                "amount": 35
              }
            ]
          },
          {
            "level": 230,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1800
              },
              {
                "itemId": 940036,
                "amount": 40
              }
            ]
          },
          {
            "level": 250,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1950
              },
              {
                "itemId": 940036,
                "amount": 45
              }
            ]
          },
          {
            "level": 270,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2100
              },
              {
                "itemId": 940036,
                "amount": 50
              }
            ]
          },
          {
            "level": 290,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2250
              },
              {
                "itemId": 940036,
                "amount": 50
              }
            ]
          },
          {
            "level": 310,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2400
              },
              {
                "itemId": 940036,
                "amount": 50
              }
            ]
          },
          {
            "level": 330,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2550
              },
              {
                "itemId": 940036,
                "amount": 50
              }
            ]
          },
          {
            "level": 350,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2700
              },
              {
                "itemId": 940036,
                "amount": 50
              }
            ]
          },
          {
            "level": 370,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2850
              },
              {
                "itemId": 940036,
                "amount": 50
              }
            ]
          },
          {
            "level": 390,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3000
              },
              {
                "itemId": 940036,
                "amount": 50
              }
            ]
          },
          {
            "level": 410,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3150
              },
              {
                "itemId": 940036,
                "amount": 50
              }
            ]
          },
          {
            "level": 430,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3300
              },
              {
                "itemId": 940036,
                "amount": 50
              }
            ]
          },
          {
            "level": 450,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3450
              },
              {
                "itemId": 940036,
                "amount": 50
              }
            ]
          },
          {
            "level": 470,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3600
              },
              {
                "itemId": 940036,
                "amount": 50
              }
            ]
          },
          {
            "level": 490,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3750
              },
              {
                "itemId": 940036,
                "amount": 50
              }
            ]
          }
        ],
        "attributes": {
          "1": [
            {
              "id": 54,
              "amount": 5000
            }
          ],
          "2": [
            {
              "id": 56,
              "amount": 100
            }
          ],
          "3": [
            {
              "id": 55,
              "amount": 10000
            }
          ],
          "4": [
            {
              "id": 57,
              "amount": 200
            }
          ],
          "5": [
            {
              "id": 51,
              "amount": 100000
            }
          ],
          "6": [
            {
              "id": 60,
              "amount": 300
            }
          ],
          "7": [
            {
              "id": 100,
              "amount": 30000
            }
          ],
          "8": [
            {
              "id": 61,
              "amount": 400
            }
          ],
          "9": [
            {
              "id": 25,
              "amount": 500
            }
          ],
          "10": [
            {
              "id": 24,
              "amount": 600
            }
          ],
          "11": [
            {
              "id": 54,
              "amount": 40000
            }
          ],
          "12": [
            {
              "id": 22,
              "amount": 500
            }
          ],
          "13": [
            {
              "id": 55,
              "amount": 50000
            }
          ],
          "14": [
            {
              "id": 23,
              "amount": 600
            }
          ],
          "15": [
            {
              "id": 51,
              "amount": 300000
            }
          ],
          "16": [
            {
              "id": 100,
              "amount": 70000
            }
          ],
          "17": [
            {
              "id": 23,
              "amount": 500
            }
          ],
          "18": [
            {
              "id": 22,
              "amount": 600
            }
          ],
          "19": [
            {
              "id": 102,
              "amount": 500
            }
          ],
          "20": [
            {
              "id": 101,
              "amount": 600
            }
          ],
          "21": [
            {
              "id": 54,
              "amount": 80000
            }
          ],
          "22": [
            {
              "id": 101,
              "amount": 600
            }
          ],
          "23": [
            {
              "id": 102,
              "amount": 700
            }
          ],
          "24": [
            {
              "id": 180,
              "amount": 600
            }
          ],
          "25": [
            {
              "id": 179,
              "amount": 700
            }
          ]
        },
        "requirements": [
          {
            "advance": 1,
            "requirement": 1
          },
          {
            "advance": 3,
            "requirement": 2
          },
          {
            "advance": 6,
            "requirement": 3
          },
          {
            "advance": 10,
            "requirement": 4
          },
          {
            "advance": 15,
            "requirement": 5
          },
          {
            "advance": 20,
            "requirement": 6
          },
          {
            "advance": 25,
            "requirement": 7
          }
        ]
      }
    },
    {
      "id": 940037,
      "name": "百草药篓",
      "hero": "华佗",
      "icon": "assets/mibao-items/940037.png",
      "maxLevel": 500,
      "baseAttributes": [
        {
          "id": 100,
          "amount": 500
        },
        {
          "id": 54,
          "amount": 500
        },
        {
          "id": 55,
          "amount": 500
        },
        {
          "id": 51,
          "amount": 2500
        }
      ],
      "growthAttributes": [
        {
          "id": 100,
          "amount": 250
        },
        {
          "id": 54,
          "amount": 250
        },
        {
          "id": 55,
          "amount": 250
        },
        {
          "id": 51,
          "amount": 1250
        }
      ],
      "strengthen": {
        "fromLevel": 1,
        "toLevel": 500,
        "costRule": {
          "silverPerLevel": 50000,
          "stoneStart": 10,
          "stoneStep": 5,
          "costItemId": 60085
        },
        "levelsConfigured": 998,
        "upgradeAttributes": [
          {
            "id": 100,
            "amount": 2500
          },
          {
            "id": 54,
            "amount": 2500
          },
          {
            "id": 55,
            "amount": 2500
          },
          {
            "id": 51,
            "amount": 12500
          }
        ],
        "thresholds": [
          {
            "level": 20,
            "costs": [
              {
                "itemId": 60087,
                "amount": 30
              },
              {
                "itemId": 940037,
                "amount": 2
              }
            ]
          },
          {
            "level": 40,
            "costs": [
              {
                "itemId": 60087,
                "amount": 60
              },
              {
                "itemId": 940037,
                "amount": 4
              }
            ]
          },
          {
            "level": 60,
            "costs": [
              {
                "itemId": 60087,
                "amount": 90
              },
              {
                "itemId": 940037,
                "amount": 6
              }
            ]
          },
          {
            "level": 80,
            "costs": [
              {
                "itemId": 60087,
                "amount": 120
              },
              {
                "itemId": 940037,
                "amount": 8
              }
            ]
          },
          {
            "level": 100,
            "costs": [
              {
                "itemId": 60087,
                "amount": 150
              },
              {
                "itemId": 940037,
                "amount": 10
              }
            ]
          },
          {
            "level": 120,
            "costs": [
              {
                "itemId": 60087,
                "amount": 180
              },
              {
                "itemId": 940037,
                "amount": 12
              }
            ]
          },
          {
            "level": 140,
            "costs": [
              {
                "itemId": 60087,
                "amount": 210
              },
              {
                "itemId": 940037,
                "amount": 16
              }
            ]
          },
          {
            "level": 160,
            "costs": [
              {
                "itemId": 60087,
                "amount": 240
              },
              {
                "itemId": 940037,
                "amount": 20
              }
            ]
          },
          {
            "level": 180,
            "costs": [
              {
                "itemId": 60087,
                "amount": 270
              },
              {
                "itemId": 940037,
                "amount": 25
              }
            ]
          },
          {
            "level": 200,
            "costs": [
              {
                "itemId": 60087,
                "amount": 300
              },
              {
                "itemId": 940037,
                "amount": 30
              }
            ]
          },
          {
            "level": 220,
            "costs": [
              {
                "itemId": 60087,
                "amount": 330
              },
              {
                "itemId": 940037,
                "amount": 35
              }
            ]
          },
          {
            "level": 240,
            "costs": [
              {
                "itemId": 60087,
                "amount": 360
              },
              {
                "itemId": 940037,
                "amount": 40
              }
            ]
          },
          {
            "level": 260,
            "costs": [
              {
                "itemId": 60087,
                "amount": 390
              },
              {
                "itemId": 940037,
                "amount": 45
              }
            ]
          },
          {
            "level": 280,
            "costs": [
              {
                "itemId": 60087,
                "amount": 420
              },
              {
                "itemId": 940037,
                "amount": 50
              }
            ]
          },
          {
            "level": 300,
            "costs": [
              {
                "itemId": 60087,
                "amount": 450
              },
              {
                "itemId": 940037,
                "amount": 50
              }
            ]
          },
          {
            "level": 320,
            "costs": [
              {
                "itemId": 60087,
                "amount": 480
              },
              {
                "itemId": 940037,
                "amount": 50
              }
            ]
          },
          {
            "level": 340,
            "costs": [
              {
                "itemId": 60087,
                "amount": 510
              },
              {
                "itemId": 940037,
                "amount": 50
              }
            ]
          },
          {
            "level": 360,
            "costs": [
              {
                "itemId": 60087,
                "amount": 540
              },
              {
                "itemId": 940037,
                "amount": 50
              }
            ]
          },
          {
            "level": 380,
            "costs": [
              {
                "itemId": 60087,
                "amount": 570
              },
              {
                "itemId": 940037,
                "amount": 50
              }
            ]
          },
          {
            "level": 400,
            "costs": [
              {
                "itemId": 60087,
                "amount": 600
              },
              {
                "itemId": 940037,
                "amount": 50
              }
            ]
          },
          {
            "level": 420,
            "costs": [
              {
                "itemId": 60087,
                "amount": 630
              },
              {
                "itemId": 940037,
                "amount": 50
              }
            ]
          },
          {
            "level": 440,
            "costs": [
              {
                "itemId": 60087,
                "amount": 660
              },
              {
                "itemId": 940037,
                "amount": 50
              }
            ]
          },
          {
            "level": 460,
            "costs": [
              {
                "itemId": 60087,
                "amount": 690
              },
              {
                "itemId": 940037,
                "amount": 50
              }
            ]
          },
          {
            "level": 480,
            "costs": [
              {
                "itemId": 60087,
                "amount": 720
              },
              {
                "itemId": 940037,
                "amount": 50
              }
            ]
          },
          {
            "level": 500,
            "costs": [
              {
                "itemId": 60087,
                "amount": 750
              },
              {
                "itemId": 940037,
                "amount": 50
              }
            ]
          }
        ]
      },
      "advance": {
        "thresholds": [
          {
            "level": 10,
            "costs": [
              {
                "itemId": 60086,
                "amount": 150
              },
              {
                "itemId": 940037,
                "amount": 2
              }
            ]
          },
          {
            "level": 30,
            "costs": [
              {
                "itemId": 60086,
                "amount": 300
              },
              {
                "itemId": 940037,
                "amount": 4
              }
            ]
          },
          {
            "level": 50,
            "costs": [
              {
                "itemId": 60086,
                "amount": 450
              },
              {
                "itemId": 940037,
                "amount": 6
              }
            ]
          },
          {
            "level": 70,
            "costs": [
              {
                "itemId": 60086,
                "amount": 600
              },
              {
                "itemId": 940037,
                "amount": 8
              }
            ]
          },
          {
            "level": 90,
            "costs": [
              {
                "itemId": 60086,
                "amount": 750
              },
              {
                "itemId": 940037,
                "amount": 10
              }
            ]
          },
          {
            "level": 110,
            "costs": [
              {
                "itemId": 60086,
                "amount": 900
              },
              {
                "itemId": 940037,
                "amount": 12
              }
            ]
          },
          {
            "level": 130,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1050
              },
              {
                "itemId": 940037,
                "amount": 16
              }
            ]
          },
          {
            "level": 150,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1200
              },
              {
                "itemId": 940037,
                "amount": 20
              }
            ]
          },
          {
            "level": 170,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1350
              },
              {
                "itemId": 940037,
                "amount": 25
              }
            ]
          },
          {
            "level": 190,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1500
              },
              {
                "itemId": 940037,
                "amount": 30
              }
            ]
          },
          {
            "level": 210,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1650
              },
              {
                "itemId": 940037,
                "amount": 35
              }
            ]
          },
          {
            "level": 230,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1800
              },
              {
                "itemId": 940037,
                "amount": 40
              }
            ]
          },
          {
            "level": 250,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1950
              },
              {
                "itemId": 940037,
                "amount": 45
              }
            ]
          },
          {
            "level": 270,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2100
              },
              {
                "itemId": 940037,
                "amount": 50
              }
            ]
          },
          {
            "level": 290,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2250
              },
              {
                "itemId": 940037,
                "amount": 50
              }
            ]
          },
          {
            "level": 310,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2400
              },
              {
                "itemId": 940037,
                "amount": 50
              }
            ]
          },
          {
            "level": 330,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2550
              },
              {
                "itemId": 940037,
                "amount": 50
              }
            ]
          },
          {
            "level": 350,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2700
              },
              {
                "itemId": 940037,
                "amount": 50
              }
            ]
          },
          {
            "level": 370,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2850
              },
              {
                "itemId": 940037,
                "amount": 50
              }
            ]
          },
          {
            "level": 390,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3000
              },
              {
                "itemId": 940037,
                "amount": 50
              }
            ]
          },
          {
            "level": 410,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3150
              },
              {
                "itemId": 940037,
                "amount": 50
              }
            ]
          },
          {
            "level": 430,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3300
              },
              {
                "itemId": 940037,
                "amount": 50
              }
            ]
          },
          {
            "level": 450,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3450
              },
              {
                "itemId": 940037,
                "amount": 50
              }
            ]
          },
          {
            "level": 470,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3600
              },
              {
                "itemId": 940037,
                "amount": 50
              }
            ]
          },
          {
            "level": 490,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3750
              },
              {
                "itemId": 940037,
                "amount": 50
              }
            ]
          }
        ],
        "attributes": {
          "1": [
            {
              "id": 54,
              "amount": 5000
            }
          ],
          "2": [
            {
              "id": 56,
              "amount": 100
            }
          ],
          "3": [
            {
              "id": 55,
              "amount": 10000
            }
          ],
          "4": [
            {
              "id": 57,
              "amount": 200
            }
          ],
          "5": [
            {
              "id": 51,
              "amount": 100000
            }
          ],
          "6": [
            {
              "id": 60,
              "amount": 300
            }
          ],
          "7": [
            {
              "id": 100,
              "amount": 30000
            }
          ],
          "8": [
            {
              "id": 61,
              "amount": 400
            }
          ],
          "9": [
            {
              "id": 25,
              "amount": 500
            }
          ],
          "10": [
            {
              "id": 24,
              "amount": 600
            }
          ],
          "11": [
            {
              "id": 54,
              "amount": 40000
            }
          ],
          "12": [
            {
              "id": 22,
              "amount": 500
            }
          ],
          "13": [
            {
              "id": 55,
              "amount": 50000
            }
          ],
          "14": [
            {
              "id": 23,
              "amount": 600
            }
          ],
          "15": [
            {
              "id": 51,
              "amount": 300000
            }
          ],
          "16": [
            {
              "id": 100,
              "amount": 70000
            }
          ],
          "17": [
            {
              "id": 23,
              "amount": 500
            }
          ],
          "18": [
            {
              "id": 22,
              "amount": 600
            }
          ],
          "19": [
            {
              "id": 102,
              "amount": 500
            }
          ],
          "20": [
            {
              "id": 101,
              "amount": 600
            }
          ],
          "21": [
            {
              "id": 54,
              "amount": 80000
            }
          ],
          "22": [
            {
              "id": 101,
              "amount": 600
            }
          ],
          "23": [
            {
              "id": 102,
              "amount": 700
            }
          ],
          "24": [
            {
              "id": 180,
              "amount": 600
            }
          ],
          "25": [
            {
              "id": 179,
              "amount": 700
            }
          ]
        },
        "requirements": [
          {
            "advance": 1,
            "requirement": 1
          },
          {
            "advance": 3,
            "requirement": 2
          },
          {
            "advance": 6,
            "requirement": 3
          },
          {
            "advance": 10,
            "requirement": 4
          },
          {
            "advance": 15,
            "requirement": 5
          },
          {
            "advance": 20,
            "requirement": 6
          },
          {
            "advance": 25,
            "requirement": 7
          }
        ]
      }
    },
    {
      "id": 940038,
      "name": "无字天书",
      "hero": "荀彧",
      "icon": "assets/mibao-items/940038.png",
      "maxLevel": 500,
      "baseAttributes": [
        {
          "id": 100,
          "amount": 500
        },
        {
          "id": 54,
          "amount": 500
        },
        {
          "id": 55,
          "amount": 500
        },
        {
          "id": 51,
          "amount": 2500
        }
      ],
      "growthAttributes": [
        {
          "id": 100,
          "amount": 250
        },
        {
          "id": 54,
          "amount": 250
        },
        {
          "id": 55,
          "amount": 250
        },
        {
          "id": 51,
          "amount": 1250
        }
      ],
      "strengthen": {
        "fromLevel": 1,
        "toLevel": 500,
        "costRule": {
          "silverPerLevel": 50000,
          "stoneStart": 10,
          "stoneStep": 5,
          "costItemId": 60085
        },
        "levelsConfigured": 998,
        "upgradeAttributes": [
          {
            "id": 100,
            "amount": 2500
          },
          {
            "id": 54,
            "amount": 2500
          },
          {
            "id": 55,
            "amount": 2500
          },
          {
            "id": 51,
            "amount": 12500
          }
        ],
        "thresholds": [
          {
            "level": 20,
            "costs": [
              {
                "itemId": 60087,
                "amount": 40
              },
              {
                "itemId": 940038,
                "amount": 2
              }
            ]
          },
          {
            "level": 40,
            "costs": [
              {
                "itemId": 60087,
                "amount": 80
              },
              {
                "itemId": 940038,
                "amount": 4
              }
            ]
          },
          {
            "level": 60,
            "costs": [
              {
                "itemId": 60087,
                "amount": 120
              },
              {
                "itemId": 940038,
                "amount": 6
              }
            ]
          },
          {
            "level": 80,
            "costs": [
              {
                "itemId": 60087,
                "amount": 160
              },
              {
                "itemId": 940038,
                "amount": 8
              }
            ]
          },
          {
            "level": 100,
            "costs": [
              {
                "itemId": 60087,
                "amount": 200
              },
              {
                "itemId": 940038,
                "amount": 10
              }
            ]
          },
          {
            "level": 120,
            "costs": [
              {
                "itemId": 60087,
                "amount": 240
              },
              {
                "itemId": 940038,
                "amount": 12
              }
            ]
          },
          {
            "level": 140,
            "costs": [
              {
                "itemId": 60087,
                "amount": 280
              },
              {
                "itemId": 940038,
                "amount": 16
              }
            ]
          },
          {
            "level": 160,
            "costs": [
              {
                "itemId": 60087,
                "amount": 320
              },
              {
                "itemId": 940038,
                "amount": 20
              }
            ]
          },
          {
            "level": 180,
            "costs": [
              {
                "itemId": 60087,
                "amount": 360
              },
              {
                "itemId": 940038,
                "amount": 25
              }
            ]
          },
          {
            "level": 200,
            "costs": [
              {
                "itemId": 60087,
                "amount": 400
              },
              {
                "itemId": 940038,
                "amount": 30
              }
            ]
          },
          {
            "level": 220,
            "costs": [
              {
                "itemId": 60087,
                "amount": 440
              },
              {
                "itemId": 940038,
                "amount": 35
              }
            ]
          },
          {
            "level": 240,
            "costs": [
              {
                "itemId": 60087,
                "amount": 480
              },
              {
                "itemId": 940038,
                "amount": 40
              }
            ]
          },
          {
            "level": 260,
            "costs": [
              {
                "itemId": 60087,
                "amount": 520
              },
              {
                "itemId": 940038,
                "amount": 45
              }
            ]
          },
          {
            "level": 280,
            "costs": [
              {
                "itemId": 60087,
                "amount": 560
              },
              {
                "itemId": 940038,
                "amount": 50
              }
            ]
          },
          {
            "level": 300,
            "costs": [
              {
                "itemId": 60087,
                "amount": 600
              },
              {
                "itemId": 940038,
                "amount": 50
              }
            ]
          },
          {
            "level": 320,
            "costs": [
              {
                "itemId": 60087,
                "amount": 640
              },
              {
                "itemId": 940038,
                "amount": 50
              }
            ]
          },
          {
            "level": 340,
            "costs": [
              {
                "itemId": 60087,
                "amount": 680
              },
              {
                "itemId": 940038,
                "amount": 50
              }
            ]
          },
          {
            "level": 360,
            "costs": [
              {
                "itemId": 60087,
                "amount": 720
              },
              {
                "itemId": 940038,
                "amount": 50
              }
            ]
          },
          {
            "level": 380,
            "costs": [
              {
                "itemId": 60087,
                "amount": 760
              },
              {
                "itemId": 940038,
                "amount": 50
              }
            ]
          },
          {
            "level": 400,
            "costs": [
              {
                "itemId": 60087,
                "amount": 800
              },
              {
                "itemId": 940038,
                "amount": 50
              }
            ]
          },
          {
            "level": 420,
            "costs": [
              {
                "itemId": 60087,
                "amount": 840
              },
              {
                "itemId": 940038,
                "amount": 50
              }
            ]
          },
          {
            "level": 440,
            "costs": [
              {
                "itemId": 60087,
                "amount": 880
              },
              {
                "itemId": 940038,
                "amount": 50
              }
            ]
          },
          {
            "level": 460,
            "costs": [
              {
                "itemId": 60087,
                "amount": 920
              },
              {
                "itemId": 940038,
                "amount": 50
              }
            ]
          },
          {
            "level": 480,
            "costs": [
              {
                "itemId": 60087,
                "amount": 960
              },
              {
                "itemId": 940038,
                "amount": 50
              }
            ]
          },
          {
            "level": 500,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1000
              },
              {
                "itemId": 940038,
                "amount": 50
              }
            ]
          }
        ]
      },
      "advance": {
        "thresholds": [
          {
            "level": 10,
            "costs": [
              {
                "itemId": 60086,
                "amount": 150
              },
              {
                "itemId": 940038,
                "amount": 2
              }
            ]
          },
          {
            "level": 30,
            "costs": [
              {
                "itemId": 60086,
                "amount": 300
              },
              {
                "itemId": 940038,
                "amount": 4
              }
            ]
          },
          {
            "level": 50,
            "costs": [
              {
                "itemId": 60086,
                "amount": 450
              },
              {
                "itemId": 940038,
                "amount": 6
              }
            ]
          },
          {
            "level": 70,
            "costs": [
              {
                "itemId": 60086,
                "amount": 600
              },
              {
                "itemId": 940038,
                "amount": 8
              }
            ]
          },
          {
            "level": 90,
            "costs": [
              {
                "itemId": 60086,
                "amount": 750
              },
              {
                "itemId": 940038,
                "amount": 10
              }
            ]
          },
          {
            "level": 110,
            "costs": [
              {
                "itemId": 60086,
                "amount": 900
              },
              {
                "itemId": 940038,
                "amount": 12
              }
            ]
          },
          {
            "level": 130,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1050
              },
              {
                "itemId": 940038,
                "amount": 16
              }
            ]
          },
          {
            "level": 150,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1200
              },
              {
                "itemId": 940038,
                "amount": 20
              }
            ]
          },
          {
            "level": 170,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1350
              },
              {
                "itemId": 940038,
                "amount": 25
              }
            ]
          },
          {
            "level": 190,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1500
              },
              {
                "itemId": 940038,
                "amount": 30
              }
            ]
          },
          {
            "level": 210,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1650
              },
              {
                "itemId": 940038,
                "amount": 35
              }
            ]
          },
          {
            "level": 230,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1800
              },
              {
                "itemId": 940038,
                "amount": 40
              }
            ]
          },
          {
            "level": 250,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1950
              },
              {
                "itemId": 940038,
                "amount": 45
              }
            ]
          },
          {
            "level": 270,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2100
              },
              {
                "itemId": 940038,
                "amount": 50
              }
            ]
          },
          {
            "level": 290,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2250
              },
              {
                "itemId": 940038,
                "amount": 50
              }
            ]
          },
          {
            "level": 310,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2400
              },
              {
                "itemId": 940038,
                "amount": 50
              }
            ]
          },
          {
            "level": 330,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2550
              },
              {
                "itemId": 940038,
                "amount": 50
              }
            ]
          },
          {
            "level": 350,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2700
              },
              {
                "itemId": 940038,
                "amount": 50
              }
            ]
          },
          {
            "level": 370,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2850
              },
              {
                "itemId": 940038,
                "amount": 50
              }
            ]
          },
          {
            "level": 390,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3000
              },
              {
                "itemId": 940038,
                "amount": 50
              }
            ]
          },
          {
            "level": 410,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3150
              },
              {
                "itemId": 940038,
                "amount": 50
              }
            ]
          },
          {
            "level": 430,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3300
              },
              {
                "itemId": 940038,
                "amount": 50
              }
            ]
          },
          {
            "level": 450,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3450
              },
              {
                "itemId": 940038,
                "amount": 50
              }
            ]
          },
          {
            "level": 470,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3600
              },
              {
                "itemId": 940038,
                "amount": 50
              }
            ]
          },
          {
            "level": 490,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3750
              },
              {
                "itemId": 940038,
                "amount": 50
              }
            ]
          }
        ],
        "attributes": {
          "1": [
            {
              "id": 54,
              "amount": 5000
            }
          ],
          "2": [
            {
              "id": 56,
              "amount": 200
            }
          ],
          "3": [
            {
              "id": 55,
              "amount": 10000
            }
          ],
          "4": [
            {
              "id": 57,
              "amount": 300
            }
          ],
          "5": [
            {
              "id": 51,
              "amount": 100000
            }
          ],
          "6": [
            {
              "id": 60,
              "amount": 400
            }
          ],
          "7": [
            {
              "id": 100,
              "amount": 30000
            }
          ],
          "8": [
            {
              "id": 61,
              "amount": 500
            }
          ],
          "9": [
            {
              "id": 25,
              "amount": 600
            }
          ],
          "10": [
            {
              "id": 24,
              "amount": 700
            }
          ],
          "11": [
            {
              "id": 54,
              "amount": 40000
            }
          ],
          "12": [
            {
              "id": 22,
              "amount": 600
            }
          ],
          "13": [
            {
              "id": 55,
              "amount": 50000
            }
          ],
          "14": [
            {
              "id": 23,
              "amount": 700
            }
          ],
          "15": [
            {
              "id": 51,
              "amount": 300000
            }
          ],
          "16": [
            {
              "id": 100,
              "amount": 70000
            }
          ],
          "17": [
            {
              "id": 23,
              "amount": 600
            }
          ],
          "18": [
            {
              "id": 22,
              "amount": 700
            }
          ],
          "19": [
            {
              "id": 102,
              "amount": 600
            }
          ],
          "20": [
            {
              "id": 101,
              "amount": 700
            }
          ],
          "21": [
            {
              "id": 54,
              "amount": 80000
            }
          ],
          "22": [
            {
              "id": 101,
              "amount": 700
            }
          ],
          "23": [
            {
              "id": 102,
              "amount": 800
            }
          ],
          "24": [
            {
              "id": 180,
              "amount": 700
            }
          ],
          "25": [
            {
              "id": 179,
              "amount": 800
            }
          ]
        },
        "requirements": [
          {
            "advance": 1,
            "requirement": 1
          },
          {
            "advance": 3,
            "requirement": 2
          },
          {
            "advance": 6,
            "requirement": 3
          },
          {
            "advance": 10,
            "requirement": 4
          },
          {
            "advance": 15,
            "requirement": 5
          },
          {
            "advance": 20,
            "requirement": 6
          },
          {
            "advance": 25,
            "requirement": 7
          }
        ]
      }
    },
    {
      "id": 940039,
      "name": "水月笛",
      "hero": "马良",
      "icon": "assets/mibao-items/940039.png",
      "maxLevel": 500,
      "baseAttributes": [
        {
          "id": 100,
          "amount": 500
        },
        {
          "id": 54,
          "amount": 500
        },
        {
          "id": 55,
          "amount": 500
        },
        {
          "id": 51,
          "amount": 2500
        }
      ],
      "growthAttributes": [
        {
          "id": 100,
          "amount": 250
        },
        {
          "id": 54,
          "amount": 250
        },
        {
          "id": 55,
          "amount": 250
        },
        {
          "id": 51,
          "amount": 1250
        }
      ],
      "strengthen": {
        "fromLevel": 1,
        "toLevel": 500,
        "costRule": {
          "silverPerLevel": 50000,
          "stoneStart": 10,
          "stoneStep": 5,
          "costItemId": 60085
        },
        "levelsConfigured": 998,
        "upgradeAttributes": [
          {
            "id": 100,
            "amount": 2500
          },
          {
            "id": 54,
            "amount": 2500
          },
          {
            "id": 55,
            "amount": 2500
          },
          {
            "id": 51,
            "amount": 12500
          }
        ],
        "thresholds": [
          {
            "level": 20,
            "costs": [
              {
                "itemId": 60087,
                "amount": 40
              },
              {
                "itemId": 940039,
                "amount": 2
              }
            ]
          },
          {
            "level": 40,
            "costs": [
              {
                "itemId": 60087,
                "amount": 80
              },
              {
                "itemId": 940039,
                "amount": 4
              }
            ]
          },
          {
            "level": 60,
            "costs": [
              {
                "itemId": 60087,
                "amount": 120
              },
              {
                "itemId": 940039,
                "amount": 6
              }
            ]
          },
          {
            "level": 80,
            "costs": [
              {
                "itemId": 60087,
                "amount": 160
              },
              {
                "itemId": 940039,
                "amount": 8
              }
            ]
          },
          {
            "level": 100,
            "costs": [
              {
                "itemId": 60087,
                "amount": 200
              },
              {
                "itemId": 940039,
                "amount": 10
              }
            ]
          },
          {
            "level": 120,
            "costs": [
              {
                "itemId": 60087,
                "amount": 240
              },
              {
                "itemId": 940039,
                "amount": 12
              }
            ]
          },
          {
            "level": 140,
            "costs": [
              {
                "itemId": 60087,
                "amount": 280
              },
              {
                "itemId": 940039,
                "amount": 16
              }
            ]
          },
          {
            "level": 160,
            "costs": [
              {
                "itemId": 60087,
                "amount": 320
              },
              {
                "itemId": 940039,
                "amount": 20
              }
            ]
          },
          {
            "level": 180,
            "costs": [
              {
                "itemId": 60087,
                "amount": 360
              },
              {
                "itemId": 940039,
                "amount": 25
              }
            ]
          },
          {
            "level": 200,
            "costs": [
              {
                "itemId": 60087,
                "amount": 400
              },
              {
                "itemId": 940039,
                "amount": 30
              }
            ]
          },
          {
            "level": 220,
            "costs": [
              {
                "itemId": 60087,
                "amount": 440
              },
              {
                "itemId": 940039,
                "amount": 35
              }
            ]
          },
          {
            "level": 240,
            "costs": [
              {
                "itemId": 60087,
                "amount": 480
              },
              {
                "itemId": 940039,
                "amount": 40
              }
            ]
          },
          {
            "level": 260,
            "costs": [
              {
                "itemId": 60087,
                "amount": 520
              },
              {
                "itemId": 940039,
                "amount": 45
              }
            ]
          },
          {
            "level": 280,
            "costs": [
              {
                "itemId": 60087,
                "amount": 560
              },
              {
                "itemId": 940039,
                "amount": 50
              }
            ]
          },
          {
            "level": 300,
            "costs": [
              {
                "itemId": 60087,
                "amount": 600
              },
              {
                "itemId": 940039,
                "amount": 50
              }
            ]
          },
          {
            "level": 320,
            "costs": [
              {
                "itemId": 60087,
                "amount": 640
              },
              {
                "itemId": 940039,
                "amount": 50
              }
            ]
          },
          {
            "level": 340,
            "costs": [
              {
                "itemId": 60087,
                "amount": 680
              },
              {
                "itemId": 940039,
                "amount": 50
              }
            ]
          },
          {
            "level": 360,
            "costs": [
              {
                "itemId": 60087,
                "amount": 720
              },
              {
                "itemId": 940039,
                "amount": 50
              }
            ]
          },
          {
            "level": 380,
            "costs": [
              {
                "itemId": 60087,
                "amount": 760
              },
              {
                "itemId": 940039,
                "amount": 50
              }
            ]
          },
          {
            "level": 400,
            "costs": [
              {
                "itemId": 60087,
                "amount": 800
              },
              {
                "itemId": 940039,
                "amount": 50
              }
            ]
          },
          {
            "level": 420,
            "costs": [
              {
                "itemId": 60087,
                "amount": 840
              },
              {
                "itemId": 940039,
                "amount": 50
              }
            ]
          },
          {
            "level": 440,
            "costs": [
              {
                "itemId": 60087,
                "amount": 880
              },
              {
                "itemId": 940039,
                "amount": 50
              }
            ]
          },
          {
            "level": 460,
            "costs": [
              {
                "itemId": 60087,
                "amount": 920
              },
              {
                "itemId": 940039,
                "amount": 50
              }
            ]
          },
          {
            "level": 480,
            "costs": [
              {
                "itemId": 60087,
                "amount": 960
              },
              {
                "itemId": 940039,
                "amount": 50
              }
            ]
          },
          {
            "level": 500,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1000
              },
              {
                "itemId": 940039,
                "amount": 50
              }
            ]
          }
        ]
      },
      "advance": {
        "thresholds": [
          {
            "level": 10,
            "costs": [
              {
                "itemId": 60086,
                "amount": 150
              },
              {
                "itemId": 940039,
                "amount": 2
              }
            ]
          },
          {
            "level": 30,
            "costs": [
              {
                "itemId": 60086,
                "amount": 300
              },
              {
                "itemId": 940039,
                "amount": 4
              }
            ]
          },
          {
            "level": 50,
            "costs": [
              {
                "itemId": 60086,
                "amount": 450
              },
              {
                "itemId": 940039,
                "amount": 6
              }
            ]
          },
          {
            "level": 70,
            "costs": [
              {
                "itemId": 60086,
                "amount": 600
              },
              {
                "itemId": 940039,
                "amount": 8
              }
            ]
          },
          {
            "level": 90,
            "costs": [
              {
                "itemId": 60086,
                "amount": 750
              },
              {
                "itemId": 940039,
                "amount": 10
              }
            ]
          },
          {
            "level": 110,
            "costs": [
              {
                "itemId": 60086,
                "amount": 900
              },
              {
                "itemId": 940039,
                "amount": 12
              }
            ]
          },
          {
            "level": 130,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1050
              },
              {
                "itemId": 940039,
                "amount": 16
              }
            ]
          },
          {
            "level": 150,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1200
              },
              {
                "itemId": 940039,
                "amount": 20
              }
            ]
          },
          {
            "level": 170,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1350
              },
              {
                "itemId": 940039,
                "amount": 25
              }
            ]
          },
          {
            "level": 190,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1500
              },
              {
                "itemId": 940039,
                "amount": 30
              }
            ]
          },
          {
            "level": 210,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1650
              },
              {
                "itemId": 940039,
                "amount": 35
              }
            ]
          },
          {
            "level": 230,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1800
              },
              {
                "itemId": 940039,
                "amount": 40
              }
            ]
          },
          {
            "level": 250,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1950
              },
              {
                "itemId": 940039,
                "amount": 45
              }
            ]
          },
          {
            "level": 270,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2100
              },
              {
                "itemId": 940039,
                "amount": 50
              }
            ]
          },
          {
            "level": 290,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2250
              },
              {
                "itemId": 940039,
                "amount": 50
              }
            ]
          },
          {
            "level": 310,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2400
              },
              {
                "itemId": 940039,
                "amount": 50
              }
            ]
          },
          {
            "level": 330,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2550
              },
              {
                "itemId": 940039,
                "amount": 50
              }
            ]
          },
          {
            "level": 350,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2700
              },
              {
                "itemId": 940039,
                "amount": 50
              }
            ]
          },
          {
            "level": 370,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2850
              },
              {
                "itemId": 940039,
                "amount": 50
              }
            ]
          },
          {
            "level": 390,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3000
              },
              {
                "itemId": 940039,
                "amount": 50
              }
            ]
          },
          {
            "level": 410,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3150
              },
              {
                "itemId": 940039,
                "amount": 50
              }
            ]
          },
          {
            "level": 430,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3300
              },
              {
                "itemId": 940039,
                "amount": 50
              }
            ]
          },
          {
            "level": 450,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3450
              },
              {
                "itemId": 940039,
                "amount": 50
              }
            ]
          },
          {
            "level": 470,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3600
              },
              {
                "itemId": 940039,
                "amount": 50
              }
            ]
          },
          {
            "level": 490,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3750
              },
              {
                "itemId": 940039,
                "amount": 50
              }
            ]
          }
        ],
        "attributes": {
          "1": [
            {
              "id": 54,
              "amount": 5000
            }
          ],
          "2": [
            {
              "id": 56,
              "amount": 200
            }
          ],
          "3": [
            {
              "id": 55,
              "amount": 10000
            }
          ],
          "4": [
            {
              "id": 57,
              "amount": 300
            }
          ],
          "5": [
            {
              "id": 51,
              "amount": 100000
            }
          ],
          "6": [
            {
              "id": 60,
              "amount": 400
            }
          ],
          "7": [
            {
              "id": 100,
              "amount": 30000
            }
          ],
          "8": [
            {
              "id": 61,
              "amount": 500
            }
          ],
          "9": [
            {
              "id": 25,
              "amount": 600
            }
          ],
          "10": [
            {
              "id": 24,
              "amount": 700
            }
          ],
          "11": [
            {
              "id": 54,
              "amount": 40000
            }
          ],
          "12": [
            {
              "id": 22,
              "amount": 600
            }
          ],
          "13": [
            {
              "id": 55,
              "amount": 50000
            }
          ],
          "14": [
            {
              "id": 23,
              "amount": 700
            }
          ],
          "15": [
            {
              "id": 51,
              "amount": 300000
            }
          ],
          "16": [
            {
              "id": 100,
              "amount": 70000
            }
          ],
          "17": [
            {
              "id": 23,
              "amount": 600
            }
          ],
          "18": [
            {
              "id": 22,
              "amount": 700
            }
          ],
          "19": [
            {
              "id": 102,
              "amount": 600
            }
          ],
          "20": [
            {
              "id": 101,
              "amount": 700
            }
          ],
          "21": [
            {
              "id": 54,
              "amount": 80000
            }
          ],
          "22": [
            {
              "id": 101,
              "amount": 700
            }
          ],
          "23": [
            {
              "id": 102,
              "amount": 800
            }
          ],
          "24": [
            {
              "id": 180,
              "amount": 700
            }
          ],
          "25": [
            {
              "id": 179,
              "amount": 800
            }
          ]
        },
        "requirements": [
          {
            "advance": 1,
            "requirement": 1
          },
          {
            "advance": 3,
            "requirement": 2
          },
          {
            "advance": 6,
            "requirement": 3
          },
          {
            "advance": 10,
            "requirement": 4
          },
          {
            "advance": 15,
            "requirement": 5
          },
          {
            "advance": 20,
            "requirement": 6
          },
          {
            "advance": 25,
            "requirement": 7
          }
        ]
      }
    },
    {
      "id": 940040,
      "name": "犀角护臂",
      "hero": "朱桓",
      "icon": "assets/mibao-items/940040.png",
      "maxLevel": 500,
      "baseAttributes": [
        {
          "id": 100,
          "amount": 500
        },
        {
          "id": 54,
          "amount": 500
        },
        {
          "id": 55,
          "amount": 500
        },
        {
          "id": 51,
          "amount": 2500
        }
      ],
      "growthAttributes": [
        {
          "id": 100,
          "amount": 250
        },
        {
          "id": 54,
          "amount": 250
        },
        {
          "id": 55,
          "amount": 250
        },
        {
          "id": 51,
          "amount": 1250
        }
      ],
      "strengthen": {
        "fromLevel": 1,
        "toLevel": 500,
        "costRule": {
          "silverPerLevel": 50000,
          "stoneStart": 10,
          "stoneStep": 5,
          "costItemId": 60085
        },
        "levelsConfigured": 998,
        "upgradeAttributes": [
          {
            "id": 100,
            "amount": 2500
          },
          {
            "id": 54,
            "amount": 2500
          },
          {
            "id": 55,
            "amount": 2500
          },
          {
            "id": 51,
            "amount": 12500
          }
        ],
        "thresholds": [
          {
            "level": 20,
            "costs": [
              {
                "itemId": 60087,
                "amount": 40
              },
              {
                "itemId": 940040,
                "amount": 2
              }
            ]
          },
          {
            "level": 40,
            "costs": [
              {
                "itemId": 60087,
                "amount": 80
              },
              {
                "itemId": 940040,
                "amount": 4
              }
            ]
          },
          {
            "level": 60,
            "costs": [
              {
                "itemId": 60087,
                "amount": 120
              },
              {
                "itemId": 940040,
                "amount": 6
              }
            ]
          },
          {
            "level": 80,
            "costs": [
              {
                "itemId": 60087,
                "amount": 160
              },
              {
                "itemId": 940040,
                "amount": 8
              }
            ]
          },
          {
            "level": 100,
            "costs": [
              {
                "itemId": 60087,
                "amount": 200
              },
              {
                "itemId": 940040,
                "amount": 10
              }
            ]
          },
          {
            "level": 120,
            "costs": [
              {
                "itemId": 60087,
                "amount": 240
              },
              {
                "itemId": 940040,
                "amount": 12
              }
            ]
          },
          {
            "level": 140,
            "costs": [
              {
                "itemId": 60087,
                "amount": 280
              },
              {
                "itemId": 940040,
                "amount": 16
              }
            ]
          },
          {
            "level": 160,
            "costs": [
              {
                "itemId": 60087,
                "amount": 320
              },
              {
                "itemId": 940040,
                "amount": 20
              }
            ]
          },
          {
            "level": 180,
            "costs": [
              {
                "itemId": 60087,
                "amount": 360
              },
              {
                "itemId": 940040,
                "amount": 25
              }
            ]
          },
          {
            "level": 200,
            "costs": [
              {
                "itemId": 60087,
                "amount": 400
              },
              {
                "itemId": 940040,
                "amount": 30
              }
            ]
          },
          {
            "level": 220,
            "costs": [
              {
                "itemId": 60087,
                "amount": 440
              },
              {
                "itemId": 940040,
                "amount": 35
              }
            ]
          },
          {
            "level": 240,
            "costs": [
              {
                "itemId": 60087,
                "amount": 480
              },
              {
                "itemId": 940040,
                "amount": 40
              }
            ]
          },
          {
            "level": 260,
            "costs": [
              {
                "itemId": 60087,
                "amount": 520
              },
              {
                "itemId": 940040,
                "amount": 45
              }
            ]
          },
          {
            "level": 280,
            "costs": [
              {
                "itemId": 60087,
                "amount": 560
              },
              {
                "itemId": 940040,
                "amount": 50
              }
            ]
          },
          {
            "level": 300,
            "costs": [
              {
                "itemId": 60087,
                "amount": 600
              },
              {
                "itemId": 940040,
                "amount": 50
              }
            ]
          },
          {
            "level": 320,
            "costs": [
              {
                "itemId": 60087,
                "amount": 640
              },
              {
                "itemId": 940040,
                "amount": 50
              }
            ]
          },
          {
            "level": 340,
            "costs": [
              {
                "itemId": 60087,
                "amount": 680
              },
              {
                "itemId": 940040,
                "amount": 50
              }
            ]
          },
          {
            "level": 360,
            "costs": [
              {
                "itemId": 60087,
                "amount": 720
              },
              {
                "itemId": 940040,
                "amount": 50
              }
            ]
          },
          {
            "level": 380,
            "costs": [
              {
                "itemId": 60087,
                "amount": 760
              },
              {
                "itemId": 940040,
                "amount": 50
              }
            ]
          },
          {
            "level": 400,
            "costs": [
              {
                "itemId": 60087,
                "amount": 800
              },
              {
                "itemId": 940040,
                "amount": 50
              }
            ]
          },
          {
            "level": 420,
            "costs": [
              {
                "itemId": 60087,
                "amount": 840
              },
              {
                "itemId": 940040,
                "amount": 50
              }
            ]
          },
          {
            "level": 440,
            "costs": [
              {
                "itemId": 60087,
                "amount": 880
              },
              {
                "itemId": 940040,
                "amount": 50
              }
            ]
          },
          {
            "level": 460,
            "costs": [
              {
                "itemId": 60087,
                "amount": 920
              },
              {
                "itemId": 940040,
                "amount": 50
              }
            ]
          },
          {
            "level": 480,
            "costs": [
              {
                "itemId": 60087,
                "amount": 960
              },
              {
                "itemId": 940040,
                "amount": 50
              }
            ]
          },
          {
            "level": 500,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1000
              },
              {
                "itemId": 940040,
                "amount": 50
              }
            ]
          }
        ]
      },
      "advance": {
        "thresholds": [
          {
            "level": 10,
            "costs": [
              {
                "itemId": 60086,
                "amount": 150
              },
              {
                "itemId": 940040,
                "amount": 2
              }
            ]
          },
          {
            "level": 30,
            "costs": [
              {
                "itemId": 60086,
                "amount": 300
              },
              {
                "itemId": 940040,
                "amount": 4
              }
            ]
          },
          {
            "level": 50,
            "costs": [
              {
                "itemId": 60086,
                "amount": 450
              },
              {
                "itemId": 940040,
                "amount": 6
              }
            ]
          },
          {
            "level": 70,
            "costs": [
              {
                "itemId": 60086,
                "amount": 600
              },
              {
                "itemId": 940040,
                "amount": 8
              }
            ]
          },
          {
            "level": 90,
            "costs": [
              {
                "itemId": 60086,
                "amount": 750
              },
              {
                "itemId": 940040,
                "amount": 10
              }
            ]
          },
          {
            "level": 110,
            "costs": [
              {
                "itemId": 60086,
                "amount": 900
              },
              {
                "itemId": 940040,
                "amount": 12
              }
            ]
          },
          {
            "level": 130,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1050
              },
              {
                "itemId": 940040,
                "amount": 16
              }
            ]
          },
          {
            "level": 150,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1200
              },
              {
                "itemId": 940040,
                "amount": 20
              }
            ]
          },
          {
            "level": 170,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1350
              },
              {
                "itemId": 940040,
                "amount": 25
              }
            ]
          },
          {
            "level": 190,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1500
              },
              {
                "itemId": 940040,
                "amount": 30
              }
            ]
          },
          {
            "level": 210,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1650
              },
              {
                "itemId": 940040,
                "amount": 35
              }
            ]
          },
          {
            "level": 230,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1800
              },
              {
                "itemId": 940040,
                "amount": 40
              }
            ]
          },
          {
            "level": 250,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1950
              },
              {
                "itemId": 940040,
                "amount": 45
              }
            ]
          },
          {
            "level": 270,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2100
              },
              {
                "itemId": 940040,
                "amount": 50
              }
            ]
          },
          {
            "level": 290,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2250
              },
              {
                "itemId": 940040,
                "amount": 50
              }
            ]
          },
          {
            "level": 310,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2400
              },
              {
                "itemId": 940040,
                "amount": 50
              }
            ]
          },
          {
            "level": 330,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2550
              },
              {
                "itemId": 940040,
                "amount": 50
              }
            ]
          },
          {
            "level": 350,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2700
              },
              {
                "itemId": 940040,
                "amount": 50
              }
            ]
          },
          {
            "level": 370,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2850
              },
              {
                "itemId": 940040,
                "amount": 50
              }
            ]
          },
          {
            "level": 390,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3000
              },
              {
                "itemId": 940040,
                "amount": 50
              }
            ]
          },
          {
            "level": 410,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3150
              },
              {
                "itemId": 940040,
                "amount": 50
              }
            ]
          },
          {
            "level": 430,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3300
              },
              {
                "itemId": 940040,
                "amount": 50
              }
            ]
          },
          {
            "level": 450,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3450
              },
              {
                "itemId": 940040,
                "amount": 50
              }
            ]
          },
          {
            "level": 470,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3600
              },
              {
                "itemId": 940040,
                "amount": 50
              }
            ]
          },
          {
            "level": 490,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3750
              },
              {
                "itemId": 940040,
                "amount": 50
              }
            ]
          }
        ],
        "attributes": {
          "1": [
            {
              "id": 54,
              "amount": 5000
            }
          ],
          "2": [
            {
              "id": 56,
              "amount": 200
            }
          ],
          "3": [
            {
              "id": 55,
              "amount": 10000
            }
          ],
          "4": [
            {
              "id": 57,
              "amount": 300
            }
          ],
          "5": [
            {
              "id": 51,
              "amount": 100000
            }
          ],
          "6": [
            {
              "id": 60,
              "amount": 400
            }
          ],
          "7": [
            {
              "id": 100,
              "amount": 30000
            }
          ],
          "8": [
            {
              "id": 61,
              "amount": 500
            }
          ],
          "9": [
            {
              "id": 25,
              "amount": 600
            }
          ],
          "10": [
            {
              "id": 24,
              "amount": 700
            }
          ],
          "11": [
            {
              "id": 54,
              "amount": 40000
            }
          ],
          "12": [
            {
              "id": 22,
              "amount": 600
            }
          ],
          "13": [
            {
              "id": 55,
              "amount": 50000
            }
          ],
          "14": [
            {
              "id": 23,
              "amount": 700
            }
          ],
          "15": [
            {
              "id": 51,
              "amount": 300000
            }
          ],
          "16": [
            {
              "id": 100,
              "amount": 70000
            }
          ],
          "17": [
            {
              "id": 23,
              "amount": 600
            }
          ],
          "18": [
            {
              "id": 22,
              "amount": 700
            }
          ],
          "19": [
            {
              "id": 102,
              "amount": 600
            }
          ],
          "20": [
            {
              "id": 101,
              "amount": 700
            }
          ],
          "21": [
            {
              "id": 54,
              "amount": 80000
            }
          ],
          "22": [
            {
              "id": 101,
              "amount": 700
            }
          ],
          "23": [
            {
              "id": 102,
              "amount": 800
            }
          ],
          "24": [
            {
              "id": 180,
              "amount": 700
            }
          ],
          "25": [
            {
              "id": 179,
              "amount": 800
            }
          ]
        },
        "requirements": [
          {
            "advance": 1,
            "requirement": 1
          },
          {
            "advance": 3,
            "requirement": 2
          },
          {
            "advance": 6,
            "requirement": 3
          },
          {
            "advance": 10,
            "requirement": 4
          },
          {
            "advance": 15,
            "requirement": 5
          },
          {
            "advance": 20,
            "requirement": 6
          },
          {
            "advance": 25,
            "requirement": 7
          }
        ]
      }
    },
    {
      "id": 940041,
      "name": "深渊娃娃",
      "hero": "于吉",
      "icon": "assets/mibao-items/940041.png",
      "maxLevel": 500,
      "baseAttributes": [
        {
          "id": 100,
          "amount": 500
        },
        {
          "id": 54,
          "amount": 500
        },
        {
          "id": 55,
          "amount": 500
        },
        {
          "id": 51,
          "amount": 2500
        }
      ],
      "growthAttributes": [
        {
          "id": 100,
          "amount": 250
        },
        {
          "id": 54,
          "amount": 250
        },
        {
          "id": 55,
          "amount": 250
        },
        {
          "id": 51,
          "amount": 1250
        }
      ],
      "strengthen": {
        "fromLevel": 1,
        "toLevel": 500,
        "costRule": {
          "silverPerLevel": 50000,
          "stoneStart": 10,
          "stoneStep": 5,
          "costItemId": 60085
        },
        "levelsConfigured": 998,
        "upgradeAttributes": [
          {
            "id": 100,
            "amount": 2500
          },
          {
            "id": 54,
            "amount": 2500
          },
          {
            "id": 55,
            "amount": 2500
          },
          {
            "id": 51,
            "amount": 12500
          }
        ],
        "thresholds": [
          {
            "level": 20,
            "costs": [
              {
                "itemId": 60087,
                "amount": 40
              },
              {
                "itemId": 940041,
                "amount": 2
              }
            ]
          },
          {
            "level": 40,
            "costs": [
              {
                "itemId": 60087,
                "amount": 80
              },
              {
                "itemId": 940041,
                "amount": 4
              }
            ]
          },
          {
            "level": 60,
            "costs": [
              {
                "itemId": 60087,
                "amount": 120
              },
              {
                "itemId": 940041,
                "amount": 6
              }
            ]
          },
          {
            "level": 80,
            "costs": [
              {
                "itemId": 60087,
                "amount": 160
              },
              {
                "itemId": 940041,
                "amount": 8
              }
            ]
          },
          {
            "level": 100,
            "costs": [
              {
                "itemId": 60087,
                "amount": 200
              },
              {
                "itemId": 940041,
                "amount": 10
              }
            ]
          },
          {
            "level": 120,
            "costs": [
              {
                "itemId": 60087,
                "amount": 240
              },
              {
                "itemId": 940041,
                "amount": 12
              }
            ]
          },
          {
            "level": 140,
            "costs": [
              {
                "itemId": 60087,
                "amount": 280
              },
              {
                "itemId": 940041,
                "amount": 16
              }
            ]
          },
          {
            "level": 160,
            "costs": [
              {
                "itemId": 60087,
                "amount": 320
              },
              {
                "itemId": 940041,
                "amount": 20
              }
            ]
          },
          {
            "level": 180,
            "costs": [
              {
                "itemId": 60087,
                "amount": 360
              },
              {
                "itemId": 940041,
                "amount": 25
              }
            ]
          },
          {
            "level": 200,
            "costs": [
              {
                "itemId": 60087,
                "amount": 400
              },
              {
                "itemId": 940041,
                "amount": 30
              }
            ]
          },
          {
            "level": 220,
            "costs": [
              {
                "itemId": 60087,
                "amount": 440
              },
              {
                "itemId": 940041,
                "amount": 35
              }
            ]
          },
          {
            "level": 240,
            "costs": [
              {
                "itemId": 60087,
                "amount": 480
              },
              {
                "itemId": 940041,
                "amount": 40
              }
            ]
          },
          {
            "level": 260,
            "costs": [
              {
                "itemId": 60087,
                "amount": 520
              },
              {
                "itemId": 940041,
                "amount": 45
              }
            ]
          },
          {
            "level": 280,
            "costs": [
              {
                "itemId": 60087,
                "amount": 560
              },
              {
                "itemId": 940041,
                "amount": 50
              }
            ]
          },
          {
            "level": 300,
            "costs": [
              {
                "itemId": 60087,
                "amount": 600
              },
              {
                "itemId": 940041,
                "amount": 50
              }
            ]
          },
          {
            "level": 320,
            "costs": [
              {
                "itemId": 60087,
                "amount": 640
              },
              {
                "itemId": 940041,
                "amount": 50
              }
            ]
          },
          {
            "level": 340,
            "costs": [
              {
                "itemId": 60087,
                "amount": 680
              },
              {
                "itemId": 940041,
                "amount": 50
              }
            ]
          },
          {
            "level": 360,
            "costs": [
              {
                "itemId": 60087,
                "amount": 720
              },
              {
                "itemId": 940041,
                "amount": 50
              }
            ]
          },
          {
            "level": 380,
            "costs": [
              {
                "itemId": 60087,
                "amount": 760
              },
              {
                "itemId": 940041,
                "amount": 50
              }
            ]
          },
          {
            "level": 400,
            "costs": [
              {
                "itemId": 60087,
                "amount": 800
              },
              {
                "itemId": 940041,
                "amount": 50
              }
            ]
          },
          {
            "level": 420,
            "costs": [
              {
                "itemId": 60087,
                "amount": 840
              },
              {
                "itemId": 940041,
                "amount": 50
              }
            ]
          },
          {
            "level": 440,
            "costs": [
              {
                "itemId": 60087,
                "amount": 880
              },
              {
                "itemId": 940041,
                "amount": 50
              }
            ]
          },
          {
            "level": 460,
            "costs": [
              {
                "itemId": 60087,
                "amount": 920
              },
              {
                "itemId": 940041,
                "amount": 50
              }
            ]
          },
          {
            "level": 480,
            "costs": [
              {
                "itemId": 60087,
                "amount": 960
              },
              {
                "itemId": 940041,
                "amount": 50
              }
            ]
          },
          {
            "level": 500,
            "costs": [
              {
                "itemId": 60087,
                "amount": 1000
              },
              {
                "itemId": 940041,
                "amount": 50
              }
            ]
          }
        ]
      },
      "advance": {
        "thresholds": [
          {
            "level": 10,
            "costs": [
              {
                "itemId": 60086,
                "amount": 150
              },
              {
                "itemId": 940041,
                "amount": 2
              }
            ]
          },
          {
            "level": 30,
            "costs": [
              {
                "itemId": 60086,
                "amount": 300
              },
              {
                "itemId": 940041,
                "amount": 4
              }
            ]
          },
          {
            "level": 50,
            "costs": [
              {
                "itemId": 60086,
                "amount": 450
              },
              {
                "itemId": 940041,
                "amount": 6
              }
            ]
          },
          {
            "level": 70,
            "costs": [
              {
                "itemId": 60086,
                "amount": 600
              },
              {
                "itemId": 940041,
                "amount": 8
              }
            ]
          },
          {
            "level": 90,
            "costs": [
              {
                "itemId": 60086,
                "amount": 750
              },
              {
                "itemId": 940041,
                "amount": 10
              }
            ]
          },
          {
            "level": 110,
            "costs": [
              {
                "itemId": 60086,
                "amount": 900
              },
              {
                "itemId": 940041,
                "amount": 12
              }
            ]
          },
          {
            "level": 130,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1050
              },
              {
                "itemId": 940041,
                "amount": 16
              }
            ]
          },
          {
            "level": 150,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1200
              },
              {
                "itemId": 940041,
                "amount": 20
              }
            ]
          },
          {
            "level": 170,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1350
              },
              {
                "itemId": 940041,
                "amount": 25
              }
            ]
          },
          {
            "level": 190,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1500
              },
              {
                "itemId": 940041,
                "amount": 30
              }
            ]
          },
          {
            "level": 210,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1650
              },
              {
                "itemId": 940041,
                "amount": 35
              }
            ]
          },
          {
            "level": 230,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1800
              },
              {
                "itemId": 940041,
                "amount": 40
              }
            ]
          },
          {
            "level": 250,
            "costs": [
              {
                "itemId": 60086,
                "amount": 1950
              },
              {
                "itemId": 940041,
                "amount": 45
              }
            ]
          },
          {
            "level": 270,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2100
              },
              {
                "itemId": 940041,
                "amount": 50
              }
            ]
          },
          {
            "level": 290,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2250
              },
              {
                "itemId": 940041,
                "amount": 50
              }
            ]
          },
          {
            "level": 310,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2400
              },
              {
                "itemId": 940041,
                "amount": 50
              }
            ]
          },
          {
            "level": 330,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2550
              },
              {
                "itemId": 940041,
                "amount": 50
              }
            ]
          },
          {
            "level": 350,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2700
              },
              {
                "itemId": 940041,
                "amount": 50
              }
            ]
          },
          {
            "level": 370,
            "costs": [
              {
                "itemId": 60086,
                "amount": 2850
              },
              {
                "itemId": 940041,
                "amount": 50
              }
            ]
          },
          {
            "level": 390,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3000
              },
              {
                "itemId": 940041,
                "amount": 50
              }
            ]
          },
          {
            "level": 410,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3150
              },
              {
                "itemId": 940041,
                "amount": 50
              }
            ]
          },
          {
            "level": 430,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3300
              },
              {
                "itemId": 940041,
                "amount": 50
              }
            ]
          },
          {
            "level": 450,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3450
              },
              {
                "itemId": 940041,
                "amount": 50
              }
            ]
          },
          {
            "level": 470,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3600
              },
              {
                "itemId": 940041,
                "amount": 50
              }
            ]
          },
          {
            "level": 490,
            "costs": [
              {
                "itemId": 60086,
                "amount": 3750
              },
              {
                "itemId": 940041,
                "amount": 50
              }
            ]
          }
        ],
        "attributes": {
          "1": [
            {
              "id": 54,
              "amount": 5000
            }
          ],
          "2": [
            {
              "id": 56,
              "amount": 200
            }
          ],
          "3": [
            {
              "id": 55,
              "amount": 10000
            }
          ],
          "4": [
            {
              "id": 57,
              "amount": 300
            }
          ],
          "5": [
            {
              "id": 51,
              "amount": 100000
            }
          ],
          "6": [
            {
              "id": 60,
              "amount": 400
            }
          ],
          "7": [
            {
              "id": 100,
              "amount": 30000
            }
          ],
          "8": [
            {
              "id": 61,
              "amount": 500
            }
          ],
          "9": [
            {
              "id": 25,
              "amount": 600
            }
          ],
          "10": [
            {
              "id": 24,
              "amount": 700
            }
          ],
          "11": [
            {
              "id": 54,
              "amount": 40000
            }
          ],
          "12": [
            {
              "id": 22,
              "amount": 600
            }
          ],
          "13": [
            {
              "id": 55,
              "amount": 50000
            }
          ],
          "14": [
            {
              "id": 23,
              "amount": 700
            }
          ],
          "15": [
            {
              "id": 51,
              "amount": 300000
            }
          ],
          "16": [
            {
              "id": 100,
              "amount": 70000
            }
          ],
          "17": [
            {
              "id": 23,
              "amount": 600
            }
          ],
          "18": [
            {
              "id": 22,
              "amount": 700
            }
          ],
          "19": [
            {
              "id": 102,
              "amount": 600
            }
          ],
          "20": [
            {
              "id": 101,
              "amount": 700
            }
          ],
          "21": [
            {
              "id": 54,
              "amount": 80000
            }
          ],
          "22": [
            {
              "id": 101,
              "amount": 700
            }
          ],
          "23": [
            {
              "id": 102,
              "amount": 800
            }
          ],
          "24": [
            {
              "id": 180,
              "amount": 700
            }
          ],
          "25": [
            {
              "id": 179,
              "amount": 800
            }
          ]
        },
        "requirements": [
          {
            "advance": 1,
            "requirement": 1
          },
          {
            "advance": 3,
            "requirement": 2
          },
          {
            "advance": 6,
            "requirement": 3
          },
          {
            "advance": 10,
            "requirement": 4
          },
          {
            "advance": 15,
            "requirement": 5
          },
          {
            "advance": 20,
            "requirement": 6
          },
          {
            "advance": 25,
            "requirement": 7
          }
        ]
      }
    }
  ]
};
  window.mibaoData = data;
})();
