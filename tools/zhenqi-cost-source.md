# 阵旗费用来源核对

原始安装包：`D:/fknsango_export_20260803_174000/apk_extract/fknsango_uc_base.apk`

费用表：安装包内 `assets/db/DB_Formation_id.lua`。之前导出的数据库目录没有包含此文件，不能据此认定原始数据库缺少费用。

游戏脚本 `FlagItemUpgradeData.getStrCostItem` 和 `getStrCostFlagItem` 将 `DB_Item_flag.enforeCost` 按当前等级索引，然后读取费用表的 `lv_cost` 和 `flag_cost`。前者包含强化令、精华等物品，后者包含同名阵旗。

升阶脚本 `FlagEvolveData.getEvolveCostArr` 使用 `DB_Item_flag.advance_cost` 查询同一费用表的上述两列。

确认的原始记录：

- 401001：当前1级升2级，`lv_cost=7|60070|20`。
- 401004：当前4级升5级，`lv_cost=7|60070|50`，`flag_cost=7|931001|1`。
- 401049：当前49级升50级，`lv_cost=7|60070|4250`，`flag_cost=7|931001|10`。
- 1：锋矢星旗橙升红，`lv_cost=7|60070|500,7|60078|100`，`flag_cost=7|931001|5`。

由原表自动计算，从已持有橙色1级锋矢星旗开始：

| 目标 | 强化令 | 精华 | 额外同名阵旗 |
| --- | ---: | ---: | ---: |
| 橙色50级 | 71115 | 0 | 55 |
| 红色60级 | 109115 | 475 | 83 |
| 金色70级 | 149615 | 1650 | 120 |
| 暗金80级 | 193115 | 3625 | 165 |

用户提供的图片仅用于独立比对，没有作为费用生成来源。图片阵旗合计包含起始持有的1面旗，计算器只计算额外消耗。

`extract-zhenqi-costs.py` 从原始安装包解码和解析费用表，并按页面记录引用的编号生成 `assets/zhenqi-costs.js`。所有1444个引用费用编号均找到原始记录。`test-zhenqi-costs.cjs` 检查单级、升阶、同级零消耗、跨品质合计和分段计算一致性。

紫色阵旗记录没有升阶到橙色的关联，因此页面不再把“合成橙旗的10个碎片”冒充紫升橙费用。
