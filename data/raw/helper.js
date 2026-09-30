const fs = require('fs');

const existNames = new Set(JSON.parse(fs.readFileSync('data/raw/existing_names.json')).map(s => s.toLowerCase().trim()));

function isExist(name) {
  let n = name.toLowerCase().trim().replace(/^dr\.\s+/i, '').replace(/^prof\.\s+/i, '');
  return existNames.has(n);
}

function searchDB(str) {
  let raw = fs.readFileSync('dashboard/data.js', 'utf8') + fs.readFileSync('data/raw/rebuild_gaps.json', 'utf8');
  let regex = new RegExp(`"name"\\s*:\\s*"([^"]+)"[^}]+?"institute"\\s*:\\s*"[^"]*?${str}[^"]*?"`, 'gi');
  let m, found = [];
  while ((m = regex.exec(raw)) !== null) {
    found.push(m[1]);
  }
  return found;
}

console.log('IIT Tirupati in DB:', searchDB('Tirupati'));
