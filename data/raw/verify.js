const fs = require('fs');
let c = fs.readFileSync('dashboard/data.js', 'utf8');
console.log('Has var PROFESSORS_DATA:', c.includes('var PROFESSORS_DATA'));
console.log('Has var DOMAINS:', c.includes('var DOMAINS'));

// Quick parse test
eval(c.replace(/if\s*\(typeof module.*/, ''));
console.log('Professors loaded:', PROFESSORS_DATA.length);
console.log('First 5 names:', PROFESSORS_DATA.slice(0, 5).map(p => p.name));
console.log('Domains:', Object.keys(DOMAINS).length);
console.log('Roadmaps:', Object.keys(DOMAIN_ROADMAPS).length);
