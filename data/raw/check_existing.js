const fs = require('fs');
let existing = new Set();
let existingMap = {};
try {
  let raw = fs.readFileSync('dashboard/data.js', 'utf8');
  let m, r = /"name"\s*:\s*"([^"]+)"/g;
  while ((m = r.exec(raw)) !== null) {
    existing.add(m[1].toLowerCase().trim().replace(/^dr\.\s+/i, '').replace(/^prof\.\s+/i, ''));
    existingMap[m[1].toLowerCase().trim()] = true;
  }
} catch(e){ console.error(e); }
try {
  let raw = fs.readFileSync('data/raw/rebuild_gaps.json', 'utf8');
  let m, r = /"name"\s*:\s*"([^"]+)"/g;
  while ((m = r.exec(raw)) !== null) {
    existing.add(m[1].toLowerCase().trim().replace(/^dr\.\s+/i, '').replace(/^prof\.\s+/i, ''));
    existingMap[m[1].toLowerCase().trim()] = true;
  }
} catch(e){ console.error(e); }

console.log('Total existing unique names:', existing.size);
fs.writeFileSync('data/raw/existing_names.json', JSON.stringify([...existing], null, 2));
