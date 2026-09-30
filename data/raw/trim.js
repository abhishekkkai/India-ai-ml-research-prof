const fs = require('fs');
eval(fs.readFileSync('dashboard/data.js', 'utf8').replace(/if\s*\(typeof module.*/, ''));

// Keep only top institutes
const KEEP = [
  'IIT Bombay', 'IIT Delhi', 'IIT Madras', 'IIT Kanpur', 'IIT Kharagpur',
  'IIT Roorkee', 'IIT Guwahati', 'IIT Hyderabad', 'IIT Jodhpur',
  'IIT Gandhinagar', 'IIT Indore', 'IIT Mandi', 'IIT Ropar',
  'IIT (BHU) Varanasi', 'IIT Patna', 'IIT Bhubaneswar', 'IIT (ISM) Dhanbad',
  'IIT Bhilai', 'IIT Goa', 'IIT Jammu', 'IIT Dharwad', 'IIT Palakkad', 'IIT Tirupati',
  'IISc Bangalore',
  'ISI Kolkata', 'ISI Chennai', 'ISI Delhi',
  'IIIT Hyderabad', 'IIIT Delhi', 'IIIT Allahabad', 'IIIT Bangalore',
  'IIIT Sri City', 'IIIT Kancheepuram',
  'CMI Chennai',
  'BITS Pilani',
  'TIFR Mumbai',
];

const filtered = PROFESSORS_DATA.filter(p => KEEP.includes(p.institute));
console.log('Before:', PROFESSORS_DATA.length);
console.log('After:', filtered.length);
console.log('Removed:', PROFESSORS_DATA.length - filtered.length);

// Institute breakdown
let inst = {};
filtered.forEach(p => { inst[p.institute] = (inst[p.institute] || 0) + 1; });
Object.entries(inst).sort((a,b) => b[1] - a[1]).forEach(([k,v]) => console.log('  ' + k + ': ' + v));

// Write
let out = '// Indian AI Professors Database — Top Institutes Only\n// ' + filtered.length + ' professors across ' + Object.keys(inst).length + ' institutes\n\nvar PROFESSORS_DATA = [\n';
filtered.forEach((p,i) => { out += '  '+JSON.stringify(p); if(i<filtered.length-1) out+=','; out+='\n'; });
out += '];\n\nvar DOMAINS = '+JSON.stringify(DOMAINS,null,2)+';\n\nvar DOMAIN_ROADMAPS = '+JSON.stringify(DOMAIN_ROADMAPS,null,2)+';\n\nif (typeof module !== "undefined") module.exports = { PROFESSORS_DATA, DOMAINS, DOMAIN_ROADMAPS };\n';
fs.writeFileSync('dashboard/data.js', out);
console.log('\n✅ Trimmed! File:', (out.length/1024).toFixed(0), 'KB');
