"""Extract flag costs from the original APK, following the game's Lua references."""
import csv
import importlib
import json
import re
from pathlib import Path
from zipfile import ZipFile

native = importlib.import_module('extract-chaofan-native')
root = Path(__file__).resolve().parents[1]
with ZipFile(native.DEFAULT_APK) as apk:
    source = native.decrypt_basic(apk.read('assets/db/DB_Formation_id.lua'), native.DEFAULT_LIB.read_bytes()).decode('utf-8')

def materials(value):
    if value == 'nil':
        return []
    return [dict(zip(('type', 'id', 'count'), map(int, entry.split('|')))) for entry in value.split(',')]

rows = {}
for line in source.splitlines():
    match = re.match(r'\s*id_(\d+)\s*=\s*\{(.*)\},?\s*$', line)
    if match:
        fields = next(csv.reader([match[2]], skipinitialspace=True))
        rows[match[1]] = materials(fields[7]) + materials(fields[8])

data_path = root / 'assets/zhenqi-data.js'
data = json.loads(data_path.read_text(encoding='utf-8').split('=', 1)[1].strip().rstrip(';'))
used = set()
for group in data['types']:
    for record in group['records']:
        used.update(map(str, record['upgradeConfigIds']))
        if record.get('advanceCost'):
            used.add(str(record['advanceCost']))
missing = used - rows.keys()
if missing:
    raise ValueError(f'Missing cost IDs: {sorted(missing)}')
result = {
    'source': 'assets/db/DB_Formation_id.lua',
    'upgradeReference': 'FlagItemUpgradeData.getStrCostItem/getStrCostFlagItem',
    'advanceReference': 'FlagEvolveData.getEvolveCostArr',
    'costs': {key: rows[key] for key in sorted(used, key=int)},
}
(root / 'assets/zhenqi-costs.js').write_text('window.ZHENQI_COSTS = ' + json.dumps(result, ensure_ascii=False, indent=2) + ';\n', encoding='utf-8')
print(f'Extracted {len(used)} referenced cost records from {result["source"]}')
for end in (50, 60, 70, 80):
    entries = [item for level in range(1, end) for item in rows[str(401000 + level)]]
    for advance_id, threshold in ((1, 50), (9, 60), (17, 70)):
        if end > threshold:
            entries += rows[str(advance_id)]
    print(end, {item_id: sum(x['count'] for x in entries if x['id'] == item_id) for item_id in (60070, 60078, 931001)})
