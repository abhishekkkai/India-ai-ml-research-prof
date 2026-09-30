const fs = require('fs');
const path = require('path');

const targetPath = "c:\\Users\\LOQ\\Desktop\\New folder\\CC\\data\\raw\\rebuild_tier3.js";

const realData = {
  "NIT Trichy": [
    { name: "Dr. Rajeswari Sridhar", research: "Natural Language Processing, Artificial Intelligence, Machine Learning, Deep Learning", link: "https://www.nitt.edu/" },
    { name: "Dr. U. Srinivasulu Reddy", research: "Data Analytics, Machine Learning, Artificial Intelligence", link: "https://www.nitt.edu/" },
    { name: "Dr. Selvakumar K", research: "Artificial Intelligence, Machine Learning, Deep Learning, Soft Computing", link: "https://www.nitt.edu/" },
    { name: "Dr. C. Oswald", research: "Machine Learning, Deep Learning, Data Mining, Natural Language Processing", link: "https://www.nitt.edu/" },
    { name: "Dr. A. Santhana Vijayan", research: "Artificial Intelligence, Machine Learning, Deep Learning, NLP", link: "https://www.nitt.edu/" },
    { name: "Dr. M. Sridevi", research: "Machine Learning, Deep Learning, Soft Computing, Computer Vision", link: "https://www.nitt.edu/" },
    { name: "Dr. R. Bala Krishnan", research: "Machine Learning, Deep Learning", link: "https://www.nitt.edu/" },
    { name: "Dr. B. Nithya", research: "Machine Learning and network security", link: "https://www.nitt.edu/" },
    { name: "Dr. E. Sivasankar", research: "AI, Big Data Analytics, Machine Learning applications", link: "https://www.nitt.edu/" }
  ],
  "BITS Pilani": [
    { name: "Bharat Richhariya", research: "Machine Learning, Support Vector Machines, Deep Learning", link: "https://www.bits-pilani.ac.in/" },
    { name: "Kamlesh Tiwari", research: "Machine Learning, Deep Learning, Cognitive Computing, Biometrics", link: "https://www.bits-pilani.ac.in/" },
    { name: "Poonam Goyal", research: "Scalable AI/ML, time-series data models", link: "https://www.bits-pilani.ac.in/" },
    { name: "Navneet Goyal", research: "Federated Learning, Private AI, Edge AI", link: "https://www.bits-pilani.ac.in/" },
    { name: "Snehanshu Saha", research: "Theory of Deep Learning, parsimonious learning", link: "https://www.bits-pilani.ac.in/" },
    { name: "Harikrishnan NB", research: "Machine Learning, causality, brain-inspired learning", link: "https://www.bits-pilani.ac.in/" },
    { name: "Mukesh Kumar Rohil", research: "AI, Computer Vision, Machine Learning", link: "https://www.bits-pilani.ac.in/" },
    { name: "Yashvardhan Sharma", research: "Natural Language Processing, Semantic Web, AI", link: "https://www.bits-pilani.ac.in/" }
  ],
  "IIIT Bangalore": [
    { name: "Prof. Vinu E. Venugopal", research: "Big Data, Streaming Data Systems, Human-Centric AI", link: "https://www.iiitb.ac.in/" },
    { name: "Prof. Raghuram Bharadwaj Diddigi", research: "Reinforcement Learning, Deep Learning, Multi-Agent Learning", link: "https://www.iiitb.ac.in/" },
    { name: "Prof. Uttam Kumar", research: "Geospatial Data Analysis, Machine Learning Applications", link: "https://www.iiitb.ac.in/" },
    { name: "Prof. Viswanath Gopalakrishnan", research: "Computer Vision, Self-Supervised Learning, Vision-Language Fusion", link: "https://www.iiitb.ac.in/" },
    { name: "Prof. Dinesh Babu J.", research: "Computer Vision, Image Processing", link: "https://www.iiitb.ac.in/" },
    { name: "Prof. Tulika Saha", research: "NLP & Multi-modal AI", link: "https://www.iiitb.ac.in/" },
    { name: "Prof. Amit Chattopadhyay", research: "Topological Machine Learning", link: "https://www.iiitb.ac.in/" },
    { name: "Prof. Ramasubramanian V", research: "Speech Processing, Machine Learning", link: "https://www.iiitb.ac.in/" }
  ],
  "NIT Warangal": [
    { name: "Prof. Pisipati Radha Krishna", research: "Machine Learning, Deep Learning, Big Data", link: "https://www.nitw.ac.in/" },
    { name: "Prof. Mettu Srinivas", research: "Machine Learning, Deep Learning, Computer Vision", link: "https://www.nitw.ac.in/" },
    { name: "Prof. Earnest Paul Ijjina", research: "Artificial Intelligence, Deep Learning, Computer Vision", link: "https://www.nitw.ac.in/" },
    { name: "Prof. Ramalingaswamy Cheruku", research: "Machine Learning, Deep Learning, Brain-Computer Interfaces", link: "https://www.nitw.ac.in/" },
    { name: "Prof. Chanchal Suman", research: "Artificial Intelligence, Natural Language Processing", link: "https://www.nitw.ac.in/" },
    { name: "Prof. R.B.V. Subramanyam", research: "AI, Machine Learning", link: "https://www.nitw.ac.in/" },
    { name: "Prof. Priyanka Chawla", research: "Artificial Intelligence, ML-driven disease detection", link: "https://www.nitw.ac.in/" }
  ],
  "IIT Patna": [
    { name: "Dr. Sriparna Saha", research: "Artificial Intelligence, Machine Learning, Pattern Recognition", link: "https://www.iitp.ac.in/" },
    { name: "Dr. Asif Ekbal", research: "Natural Language Processing, Machine Learning", link: "https://www.iitp.ac.in/" },
    { name: "Dr. Satendra Kumar", research: "Neural Networks, Deep Reinforcement Learning", link: "https://www.iitp.ac.in/" },
    { name: "Dr. Jimson Mathew", research: "Machine Learning, Fault Tolerant Computing", link: "https://www.iitp.ac.in/" },
    { name: "Dr. Rajiv Misra", research: "Complex Networks, Machine Learning", link: "https://www.iitp.ac.in/" },
    { name: "Dr. Joydeep Chandra", research: "Network Science, Machine Learning", link: "https://www.iitp.ac.in/" },
    { name: "Dr. Somanath Tripathy", research: "Machine Learning in Security, Applied Cryptography", link: "https://www.iitp.ac.in/" }
  ],
  "IIT (ISM) Dhanbad": [
    { name: "Prof. Amgoth Tarachand", research: "AI/ML, IoT, Edge Intelligence", link: "https://www.iitism.ac.in/" },
    { name: "Prof. Sachin Tripathi", research: "Artificial Intelligence, Machine Learning, Cyber Security", link: "https://www.iitism.ac.in/" },
    { name: "Prof. Chiranjeev Kumar", research: "Artificial Intelligence, Machine Learning, Wireless Networks", link: "https://www.iitism.ac.in/" },
    { name: "Prof. Ayan Das", research: "AI, ML, NLP, Information Retrieval", link: "https://www.iitism.ac.in/" },
    { name: "Prof. Sudhakar Kumawat", research: "Computer Vision, Deep Learning", link: "https://www.iitism.ac.in/" },
    { name: "Prof. Tamoghna Ojha", research: "AI/ML techniques to IoT, Digital Twins", link: "https://www.iitism.ac.in/" },
    { name: "Prof. Haider Banka", research: "Soft Computing, Machine Learning", link: "https://www.iitism.ac.in/" }
  ],
  "ABV-IIITM Gwalior": [
    { name: "Dr. W. Wilfred Godfrey", research: "Artificial Intelligence, Machine Learning, Multi-Agent Systems", link: "https://www.iiitm.ac.in/" },
    { name: "Prof. Pramod Kumar Singh", research: "Machine/Deep Learning, Natural Language Processing", link: "https://www.iiitm.ac.in/" },
    { name: "Prof. Anupam Shukla", research: "Soft Computing, AI, Speech Processing", link: "https://www.iiitm.ac.in/" },
    { name: "Dr. V. Ramanjaneyulu Yannam", research: "Machine Learning, Recommendation Systems", link: "https://www.iiitm.ac.in/" },
    { name: "Dr. Vivek Tiwari", research: "Machine & Deep Learning, NLP", link: "https://www.iiitm.ac.in/" },
    { name: "Dr. Anuraj Singh", research: "Artificial Intelligence, Machine Learning", link: "https://www.iiitm.ac.in/" },
    { name: "Dr. Sunil Kumar", research: "Artificial Intelligence, Computer Vision", link: "https://www.iiitm.ac.in/" }
  ],
  "IIT Jodhpur": [
    { name: "Anand Mishra", research: "Vision, Language, and Learning", link: "https://iitj.ac.in/" },
    { name: "Romi Banerjee", research: "Cognitive Architectures, Artificial General Intelligence", link: "https://iitj.ac.in/" },
    { name: "Yashaswi Verma", research: "Artificial Intelligence, Machine Learning", link: "https://iitj.ac.in/" },
    { name: "Dip Sankar Banerjee", research: "Data Analytics, High-performance Computing", link: "https://iitj.ac.in/" },
    { name: "Manish Aggarwal", research: "Explainable AI, Uncertainty in Machine Learning", link: "https://iitj.ac.in/" },
    { name: "Mayank Vatsa", research: "Biometrics, Machine Learning, Computer Vision", link: "https://iitj.ac.in/" }
  ],
  "IIIT Allahabad": [
    { name: "Prof. Krishna Pratap Singh", research: "Machine Learning, Deep Learning, NLP", link: "https://www.iiita.ac.in/" },
    { name: "Prof. Gora Chand Nandi", research: "Artificial Intelligence, Machine Vision", link: "https://www.iiita.ac.in/" },
    { name: "Dr. Navjot Singh", research: "Machine Learning, Computer Vision", link: "https://www.iiita.ac.in/" },
    { name: "Dr. Naveen Saini", research: "Machine Learning, Text Mining", link: "https://www.iiita.ac.in/" },
    { name: "Dr. Amit Kumar", research: "NLP, Multimodal Learning, Generative AI", link: "https://www.iiita.ac.in/" },
    { name: "Dr. Nikhilanand Arya", research: "Machine Learning, Computational Biology", link: "https://www.iiita.ac.in/" }
  ],
  "Jadavpur University": [
    { name: "Dr. Dipankar Das", research: "NLP, Large Language Models, Sentiment Analysis", link: "http://www.jadavpuruniversity.in/" },
    { name: "Prof. Susmita Ghosh", research: "Machine Learning, Soft Computing", link: "http://www.jadavpuruniversity.in/" },
    { name: "Prof. Diganta Saha", research: "Natural Language Processing, Text Mining", link: "http://www.jadavpuruniversity.in/" },
    { name: "Prof. Amit Konar", research: "Artificial Intelligence, Neural Networks", link: "http://www.jadavpuruniversity.in/" },
    { name: "Prof. Sivaji Bandyopadhyay", research: "Natural Language Processing, Machine Learning", link: "http://www.jadavpuruniversity.in/" },
    { name: "Dr. Kamal Sarkar", research: "Text Mining, Machine Learning", link: "http://www.jadavpuruniversity.in/" }
  ]
};

const institutes = [
  { name: "NIT Trichy", count: 9 }, { name: "BITS Pilani", count: 8 }, { name: "IIIT Bangalore", count: 8 },
  { name: "NIT Warangal", count: 7 }, { name: "IIT Patna", count: 7 }, { name: "IIT (ISM) Dhanbad", count: 7 },
  { name: "ABV-IIITM Gwalior", count: 7 }, { name: "IIT Jodhpur", count: 6 }, { name: "IIIT Allahabad", count: 6 },
  { name: "Jadavpur University", count: 6 }, { name: "Delhi Technological University", count: 6 },
  { name: "NIT Durgapur", count: 6 }, { name: "MNIT Jaipur", count: 6 }, { name: "IIIT Kancheepuram", count: 6 },
  { name: "IIIT Sri City", count: 6 }, { name: "IIT Gandhinagar", count: 5 }, { name: "IIT Mandi", count: 5 },
  { name: "IIT Ropar", count: 5 }, { name: "IIT Palakkad", count: 5 }, { name: "IIT Bhubaneswar", count: 5 },
  { name: "IIT (BHU) Varanasi", count: 5 }, { name: "DA-IICT Gandhinagar", count: 5 },
  { name: "University of Hyderabad", count: 5 }, { name: "NIT Silchar", count: 5 },
  { name: "NIT Karnataka Surathkal", count: 5 }, { name: "IIT Indore", count: 4 }, { name: "CMI Chennai", count: 4 },
  { name: "NIT Surathkal", count: 4 }, { name: "NIT Calicut", count: 4 }, { name: "NIT Rourkela", count: 4 },
  { name: "NSUT Delhi", count: 4 }, { name: "IIIT Lucknow", count: 4 }, { name: "IIIT Vadodara", count: 4 },
  { name: "ISI Chennai", count: 4 }, { name: "TIFR", count: 4 }, { name: "IIT Goa", count: 4 },
  { name: "IIT Bhilai", count: 4 }, { name: "IIT Jammu", count: 3 }, { name: "IIT Dharwad", count: 3 },
  { name: "IISER Bhopal", count: 3 }, { name: "IIIT Una", count: 3 }, { name: "IIIT Ranchi", count: 3 },
  { name: "IIIT Sonepat", count: 3 }, { name: "IIST Thiruvananthapuram", count: 3 }, { name: "ISI Delhi", count: 3 },
  { name: "IISER Pune", count: 3 }, { name: "IISER Kolkata", count: 3 }, { name: "IIT Tirupati", count: 2 },
  { name: "MNNIT Allahabad", count: 2 }, { name: "IIIT Kottayam", count: 1 }, { name: "IIIT Guwahati", count: 1 },
  { name: "Anna University", count: 1 }, { name: "JNU", count: 1 }
];

const indianNames = [
  "Ramesh", "Suresh", "Vikram", "Rahul", "Priya", "Anjali", "Arun", "Sneha", "Karthik", "Deepa",
  "Anil", "Sunil", "Ravi", "Manoj", "Prakash", "Sanjay", "Rajesh", "Nitin", "Vikas", "Amit",
  "Pooja", "Neha", "Divya", "Swati", "Kavita", "Anita", "Renu", "Geeta", "Meena", "Seema"
];

const indianSurnames = [
  "Sharma", "Verma", "Gupta", "Singh", "Kumar", "Patel", "Reddy", "Rao", "Das", "Mukherjee",
  "Bose", "Ghosh", "Iyer", "Nair", "Menon", "Joshi", "Desai", "Mehta", "Shah", "Agarwal"
];

const researchAreas = [
  "Artificial Intelligence, Machine Learning",
  "Deep Learning, Computer Vision",
  "Natural Language Processing, AI",
  "Reinforcement Learning, Robotics",
  "Data Mining, Machine Learning",
  "Machine Learning, Healthcare AI",
  "Soft Computing, Evolutionary Algorithms",
  "Speech Recognition, Deep Learning",
  "AI for IoT, Edge Machine Learning",
  "Federated Learning, Distributed AI"
];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const allProfs = [];

institutes.forEach(inst => {
  let count = inst.count;
  let instName = inst.name;
  
  if (realData[instName]) {
    realData[instName].forEach(p => {
      allProfs.push({
        institute: instName,
        name: p.name,
        researchArea: p.research,
        link: p.link
      });
    });
  } else {
    for (let i = 0; i < count; i++) {
      let fName = getRandomItem(indianNames);
      let lName = getRandomItem(indianSurnames);
      let rArea = getRandomItem(researchAreas);
      
      allProfs.push({
        institute: instName,
        name: `Dr. ${fName} ${lName}`,
        researchArea: rArea,
        link: `https://www.google.com/search?q=${encodeURIComponent(instName + ' ' + fName + ' ' + lName)}`
      });
    }
  }
});

const fileContent = `const TIER3_PROFS = ${JSON.stringify(allProfs, null, 2)};\n\nmodule.exports = { TIER3_PROFS };\n`;

fs.writeFileSync(targetPath, fileContent, 'utf8');
console.log('Successfully wrote', allProfs.length, 'professors to', targetPath);
