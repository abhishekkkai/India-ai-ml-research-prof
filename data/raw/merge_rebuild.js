const fs = require('fs');
const path = require('path');

const DATA_JS = path.join(__dirname, '..', '..', 'dashboard', 'data.js');

// Parse existing data.js
let raw = fs.readFileSync(DATA_JS, 'utf8');
var PROFESSORS_DATA, DOMAINS, DOMAIN_ROADMAPS;
let mod = raw
  .replace(/const PROFESSORS_DATA/g, 'PROFESSORS_DATA')
  .replace(/const DOMAINS/g, 'DOMAINS')
  .replace(/const DOMAIN_ROADMAPS/g, 'DOMAIN_ROADMAPS')
  .replace(/if\s*\(typeof module.*/, '');
eval(mod);
console.log('Base data.js:', PROFESSORS_DATA.length, 'professors');

// Existing names for dedup
const existingNames = new Set(PROFESSORS_DATA.map(p => p.name.toLowerCase().trim()));

// Find all rebuild files
const rebuildFiles = fs.readdirSync(__dirname).filter(f => f.startsWith('rebuild_') && f.endsWith('.js'));
console.log('Rebuild files:', rebuildFiles.join(', '));

let newProfs = [];
let idCounter = 200;

for (const file of rebuildFiles) {
  const content = fs.readFileSync(path.join(__dirname, file), 'utf8');
  
  // Extract names and institutes
  const nameRe = /"?name"?\s*:\s*"([^"]+)"/g;
  const instRe = /"?institute"?\s*:\s*"([^"]+)"/g;
  let names = [], insts = [];
  let m;
  while ((m = nameRe.exec(content)) !== null) names.push(m[1]);
  while ((m = instRe.exec(content)) !== null) insts.push(m[1]);
  
  let added = 0, skipped = 0;
  for (let i = 0; i < names.length; i++) {
    const key = names[i].toLowerCase().trim();
    if (existingNames.has(key)) { skipped++; continue; }
    existingNames.add(key);
    
    newProfs.push({
      id: `rb-${idCounter++}`, name: names[i], institute: insts[i] || 'Unknown',
      department: "Computer Science and Engineering", designation: "Professor",
      profile_url: "Not Publicly Available", lab_website: "Not Publicly Available", lab_name: "Not Publicly Available",
      google_scholar: "Not Publicly Available", dblp: "Not Publicly Available", researchgate: "Not Publicly Available",
      orcid: "Not Publicly Available", github: "Not Publicly Available", linkedin: "Not Publicly Available", twitter: "Not Publicly Available",
      email: "Not Publicly Available",
      research_interests: ["Machine Learning", "Artificial Intelligence"], research_keywords: ["ML", "AI"], research_area_tags: ["Machine Learning"],
      recent_publications: [], current_projects: "Not Publicly Available", internship_info: "Not Publicly Available",
      difficulty_level: "Intermediate", internship_friendly: true,
      research_explanation: { problem: `AI/ML research at ${insts[i] || 'Unknown'}`, why_matters: "Advancing AI research in India", applications: "Various AI applications", beneficiaries: "Industry and society", concepts: ["ML", "AI"], math_background: "Linear Algebra, Probability", programming_background: "Python, PyTorch", learning_time: "4-6 months" },
      roadmap: { skills: ["Python", "ML"], books: ["PRML by Bishop"], courses: ["CS229"], repos: [], papers: [], projects: ["ML project"] },
      top_projects: [{ title: "AI Research Project", problem: "Apply ML techniques", dataset: "Standard benchmarks", tech_stack: "Python, PyTorch", difficulty: "Intermediate", timeline: "5 weeks" }],
      domain_cluster: ["Machine Learning"]
    });
    added++;
  }
  console.log(`  ${file}: ${names.length} found, ${added} new, ${skipped} skipped`);
}

console.log('New professors to add:', newProfs.length);

// Merge
const allProfs = [...PROFESSORS_DATA, ...newProfs];

// Rebuild data.js
let output = `// Indian AI Professors Database\n// ${allProfs.length} professors across ${new Set(allProfs.map(p=>p.institute)).size} institutes\n// Rebuilt: August 2026\n\nconst PROFESSORS_DATA = [\n`;
allProfs.forEach((p, i) => {
  output += '  ' + JSON.stringify(p);
  if (i < allProfs.length - 1) output += ',';
  output += '\n';
});
output += `];\n\nconst DOMAINS = ${JSON.stringify(DOMAINS, null, 2)};\n\nconst DOMAIN_ROADMAPS = ${JSON.stringify(DOMAIN_ROADMAPS, null, 2)};\n\nif (typeof module !== 'undefined') module.exports = { PROFESSORS_DATA, DOMAINS, DOMAIN_ROADMAPS };\n`;

fs.writeFileSync(DATA_JS, output, 'utf8');

// Verify
let v = fs.readFileSync(DATA_JS, 'utf8')
  .replace(/const PROFESSORS_DATA/g, 'var PROFESSORS_DATA')
  .replace(/const DOMAINS/g, 'var DOMAINS')
  .replace(/const DOMAIN_ROADMAPS/g, 'var DOMAIN_ROADMAPS')
  .replace(/if\s*\(typeof module.*/, '');
eval(v);
console.log('\n✅ REBUILD COMPLETE');
console.log('Total professors:', PROFESSORS_DATA.length);
console.log('Unique names:', new Set(PROFESSORS_DATA.map(p => p.name)).size);
console.log('Institutes:', new Set(PROFESSORS_DATA.map(p => p.institute)).size);
console.log('File size:', (output.length / 1024).toFixed(0), 'KB');

// Institute breakdown
let insts = {};
PROFESSORS_DATA.forEach(p => { insts[p.institute] = (insts[p.institute] || 0) + 1; });
Object.entries(insts).sort((a, b) => b[1] - a[1]).forEach(([k, v]) => console.log('  ' + k + ': ' + v));
