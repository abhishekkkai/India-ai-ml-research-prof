const fs = require('fs');

const final60 = [
  // 1. IISER Pune - 5 ML faculty
  { name: "Leelavati Narlikar", institute: "IISER Pune" },
  { name: "Bedartha Goswami", institute: "IISER Pune" },
  { name: "Collins Assisi", institute: "IISER Pune" },
  { name: "Pranay Goel", institute: "IISER Pune" },
  { name: "Arnab Mukherjee", institute: "IISER Pune" },

  // 2. IISER Kolkata - 3 ML faculty
  { name: "Kripabandhu Ghosh", institute: "IISER Kolkata" },
  { name: "Monidipa Das", institute: "IISER Kolkata" },
  { name: "Dwaipayan Roy", institute: "IISER Kolkata" },

  // 3. IISER Bhopal - 3 more ML faculty
  { name: "Tanmay Basu", institute: "IISER Bhopal" },
  { name: "Akshay Agarwal", institute: "IISER Bhopal" },
  { name: "Jasabanta Patro", institute: "IISER Bhopal" },

  // 4. IIT Tirupati - 3 more
  { name: "Rama Krishna Sai Gorthi", institute: "IIT Tirupati" },
  { name: "Chalavadi Vishnu", institute: "IIT Tirupati" },
  { name: "Kalidas Yeturu", institute: "IIT Tirupati" },

  // 5. NIT Surathkal - 4 AI faculty
  { name: "G. Ram Mohana Reddy", institute: "NIT Surathkal" },
  { name: "Sowmya Kamath S.", institute: "NIT Surathkal" },
  { name: "Anand Kumar M.", institute: "NIT Surathkal" },
  { name: "Shyam Lal", institute: "NIT Surathkal" },

  // 6. IIT Delhi - 5 more ScAI faculty
  { name: "Shaurya Shriyam", institute: "IIT Delhi" },
  { name: "Souvik Chakraborty", institute: "IIT Delhi" },
  { name: "Sitikantha Roy", institute: "IIT Delhi" },
  { name: "Arpan Chattopadhyay", institute: "IIT Delhi" },
  { name: "Ashwini Vaidya", institute: "IIT Delhi" },

  // 7. IIT Madras - 4 more RBCDSAI faculty
  { name: "Karthik Raman", institute: "IIT Madras" },
  { name: "Raghunathan Rengaswamy", institute: "IIT Madras" },
  { name: "Chandra Shekar Lakshminarayanan", institute: "IIT Madras" },
  { name: "Rohit Batra", institute: "IIT Madras" },

  // 8. IIT Kharagpur - 5 more School of AI faculty
  { name: "Prabir Kumar Biswas", institute: "IIT Kharagpur" },
  { name: "Prabhat Kumar Mishra", institute: "IIT Kharagpur" },
  { name: "Somdyuti Paul", institute: "IIT Kharagpur" },
  { name: "Srinivas Reddy Kota", institute: "IIT Kharagpur" },
  { name: "Shreya Ghosh", institute: "IIT Kharagpur" },

  // 9. IIIT Hyderabad - 5 more CVIT / LTRC / RRC faculty
  { name: "Harikumar Kandath", institute: "IIIT Hyderabad" },
  { name: "Spandan Roy", institute: "IIIT Hyderabad" },
  { name: "Sourav Garg", institute: "IIIT Hyderabad" },
  { name: "Charu Sharma", institute: "IIIT Hyderabad" },
  { name: "Sujit Gujar", institute: "IIIT Hyderabad" },

  // 10. IIIT Delhi - 5 more AI faculty
  { name: "Anubha Gupta", institute: "IIIT Delhi" },
  { name: "Ranjitha Prasad", institute: "IIIT Delhi" },
  { name: "Pravesh Biyani", institute: "IIIT Delhi" },
  { name: "Arun Balaji Buduru", institute: "IIIT Delhi" },
  { name: "Angshul Majumdar", institute: "IIIT Delhi" },

  // 11. IIT Kanpur - 5 more from EE dept
  { name: "Rajesh M. Hegde", institute: "IIT Kanpur" },
  { name: "Koteswar Rao Jerripothula", institute: "IIT Kanpur" },
  { name: "Tushar Sandhan", institute: "IIT Kanpur" },
  { name: "Nishchal K. Verma", institute: "IIT Kanpur" },
  { name: "Ketan Rajawat", institute: "IIT Kanpur" },

  // 12. IIIT Ranchi (3)
  { name: "Kirti Kumari", institute: "IIIT Ranchi" },
  { name: "Jayadeep Pati", institute: "IIIT Ranchi" },
  { name: "Roshan Singh", institute: "IIIT Ranchi" },

  // IIIT Sonepat (3)
  { name: "Rajiv Verma", institute: "IIIT Sonepat" },
  { name: "Chanchal Kumar", institute: "IIIT Sonepat" },
  { name: "Sourabh Jain", institute: "IIIT Sonepat" },

  // IIIT Una (3)
  { name: "Shatrughan Modi", institute: "IIIT Una" },
  { name: "Mrityunjay Singh", institute: "IIIT Una" },
  { name: "Nishtha Hooda", institute: "IIIT Una" },

  // IIST Thiruvananthapuram (3)
  { name: "Deepak Mishra", institute: "IIST Thiruvananthapuram" },
  { name: "B. S. Manoj", institute: "IIST Thiruvananthapuram" },
  { name: "Sumitra S.", institute: "IIST Thiruvananthapuram" },

  // ISI Delhi (3)
  { name: "Soham Sarkar", institute: "ISI Delhi" },
  { name: "Deepayan Sarkar", institute: "ISI Delhi" },
  { name: "Swagata Nandi", institute: "ISI Delhi" }
];

console.log('Total entries:', final60.length);

// Check for internal duplicates
const names = new Set();
final60.forEach((item, idx) => {
  let n = item.name.toLowerCase().trim();
  if (names.has(n)) {
    console.error('Duplicate in list:', item.name);
  }
  names.add(n);
});
console.log('Unique names in list:', names.size);

// Check against existing names
const existNames = new Set(JSON.parse(fs.readFileSync('data/raw/existing_names.json')).map(s => s.toLowerCase().trim()));
let conflictCount = 0;
final60.forEach(item => {
  let n = item.name.toLowerCase().trim().replace(/^dr\.\s+/i, '').replace(/^prof\.\s+/i, '');
  if (existNames.has(n)) {
    console.error('Conflict with existing DB:', item.name);
    conflictCount++;
  }
});
console.log('Conflicts count:', conflictCount);

// Save to rebuild_final50.json
const outputPath = 'c:\\Users\\LOQ\\Desktop\\New folder\\CC\\data\\raw\\rebuild_final50.json';
fs.writeFileSync(outputPath, JSON.stringify(final60, null, 2));
console.log('Successfully saved', final60.length, 'records to', outputPath);
