const fs = require('fs');
const DATA_JS = 'dashboard/data.js';

// Parse existing
let raw = fs.readFileSync(DATA_JS, 'utf8');
var PROFESSORS_DATA, DOMAINS, DOMAIN_ROADMAPS;
eval(raw.replace(/const PROFESSORS_DATA/g,'PROFESSORS_DATA').replace(/const DOMAINS/g,'DOMAINS').replace(/const DOMAIN_ROADMAPS/g,'DOMAIN_ROADMAPS').replace(/if\s*\(typeof module.*/,''));
console.log('Base:', PROFESSORS_DATA.length);

const existingNames = new Set(PROFESSORS_DATA.map(p => p.name.toLowerCase().trim()));

// Read gaps file
const content = fs.readFileSync('data/raw/rebuild_gaps.json', 'utf8');
const nr = /"name"\s*:\s*"([^"]+)"/g;
const ir = /"institute"\s*:\s*"([^"]+)"/g;
let names = [], insts = [], m;
while ((m = nr.exec(content)) !== null) names.push(m[1]);
while ((m = ir.exec(content)) !== null) insts.push(m[1]);

let idC = 600, newP = [], added = 0, skipped = 0;
for (let i = 0; i < names.length; i++) {
  const key = names[i].toLowerCase().trim();
  if (existingNames.has(key)) { skipped++; continue; }
  existingNames.add(key);
  newP.push({
    id: 'gp-'+(idC++), name: names[i], institute: insts[i]||'Unknown',
    department:'Computer Science and Engineering', designation:'Professor',
    profile_url:'Not Publicly Available', lab_website:'Not Publicly Available', lab_name:'Not Publicly Available',
    google_scholar:'Not Publicly Available', dblp:'Not Publicly Available', researchgate:'Not Publicly Available',
    orcid:'Not Publicly Available', github:'Not Publicly Available', linkedin:'Not Publicly Available', twitter:'Not Publicly Available',
    email:'Not Publicly Available',
    research_interests:['Machine Learning','Artificial Intelligence'], research_keywords:['ML','AI'], research_area_tags:['Machine Learning'],
    recent_publications:[], current_projects:'Not Publicly Available', internship_info:'Not Publicly Available',
    difficulty_level:'Intermediate', internship_friendly:true,
    research_explanation:{problem:'AI/ML research at '+(insts[i]||'Unknown'),why_matters:'Advancing AI research in India',applications:'Various AI applications',beneficiaries:'Industry and society',concepts:['ML','AI'],math_background:'Linear Algebra, Probability',programming_background:'Python, PyTorch',learning_time:'4-6 months'},
    roadmap:{skills:['Python','ML'],books:['PRML by Bishop'],courses:['CS229'],repos:[],papers:[],projects:['ML project']},
    top_projects:[{title:'AI Research Project',problem:'Apply ML techniques',dataset:'Standard benchmarks',tech_stack:'Python, PyTorch',difficulty:'Intermediate',timeline:'5 weeks'}],
    domain_cluster:['Machine Learning']
  });
  added++;
}
console.log('Gaps:', names.length, 'found,', added, 'new,', skipped, 'skipped');

const all = [...PROFESSORS_DATA, ...newP];
let out = '// Indian AI Professors Database - ' + all.length + ' professors\n\nconst PROFESSORS_DATA = [\n';
all.forEach((p,i) => { out += '  '+JSON.stringify(p); if(i<all.length-1) out+=','; out+='\n'; });
out += '];\n\nconst DOMAINS = '+JSON.stringify(DOMAINS,null,2)+';\n\nconst DOMAIN_ROADMAPS = '+JSON.stringify(DOMAIN_ROADMAPS,null,2)+';\n\nif (typeof module !== "undefined") module.exports = { PROFESSORS_DATA, DOMAINS, DOMAIN_ROADMAPS };\n';
fs.writeFileSync(DATA_JS, out);
console.log('Total:', all.length, '| Unique:', new Set(all.map(p=>p.name)).size, '| Institutes:', new Set(all.map(p=>p.institute)).size);
console.log('File:', (out.length/1024).toFixed(0), 'KB');

// Breakdown
let inst = {};
all.forEach(p => { inst[p.institute] = (inst[p.institute]||0)+1; });
Object.entries(inst).sort((a,b) => b[1]-a[1]).forEach(([k,v]) => console.log('  '+k+': '+v));
