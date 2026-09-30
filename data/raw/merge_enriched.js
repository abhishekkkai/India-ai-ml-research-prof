const fs = require('fs');

// Load data.js
eval(fs.readFileSync('dashboard/data.js', 'utf8').replace(/if\s*\(typeof module.*/, ''));
console.log('Professors:', PROFESSORS_DATA.length);

// Load enriched research
const enriched = JSON.parse(fs.readFileSync('data/raw/enriched_research.json', 'utf8'));
console.log('Enriched entries:', enriched.length);

// Build lookup by name
const lookup = {};
enriched.forEach(e => {
  lookup[e.name.toLowerCase().trim()] = e;
});

let matched = 0, unmatched = 0;
PROFESSORS_DATA.forEach(p => {
  const key = p.name.toLowerCase().trim();
  const e = lookup[key];
  if (e) {
    // Merge enriched fields
    if (e.research_summary) p.research_summary = e.research_summary;
    if (e.key_papers) p.key_papers = e.key_papers;
    if (e.how_to_read) p.how_to_read = e.how_to_read;
    if (e.project_for_you) p.project_for_you = e.project_for_you;
    matched++;
  } else {
    unmatched++;
  }
});

console.log('Matched:', matched);
console.log('Unmatched:', unmatched);

// Write back
let out = '// Indian AI Professors Database — Top Institutes\n// ' + PROFESSORS_DATA.length + ' professors, ' + matched + ' with deep research profiles\n\nvar PROFESSORS_DATA = [\n';
PROFESSORS_DATA.forEach((p, i) => { out += '  ' + JSON.stringify(p); if (i < PROFESSORS_DATA.length - 1) out += ','; out += '\n'; });
out += '];\n\nvar DOMAINS = ' + JSON.stringify(DOMAINS, null, 2) + ';\n\nvar DOMAIN_ROADMAPS = ' + JSON.stringify(DOMAIN_ROADMAPS, null, 2) + ';\n\nif (typeof module !== "undefined") module.exports = { PROFESSORS_DATA, DOMAINS, DOMAIN_ROADMAPS };\n';
fs.writeFileSync('dashboard/data.js', out);
console.log('\n✅ Merged! File:', (out.length / 1024).toFixed(0), 'KB');

// Show samples
console.log('\n=== Enriched Samples ===');
PROFESSORS_DATA.filter(p => p.research_summary).slice(0, 5).forEach(p => {
  console.log('\n' + p.name + ' (' + p.institute + ')');
  console.log('  Summary: ' + p.research_summary.substring(0, 100) + '...');
  console.log('  Papers: ' + (p.key_papers || []).slice(0, 2).join(' | '));
  console.log('  Project: ' + (p.project_for_you ? p.project_for_you.title : 'N/A'));
});
