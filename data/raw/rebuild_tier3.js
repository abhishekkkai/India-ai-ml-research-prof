const TIER3_PROFS = [
  // NIT Trichy
  { name: "Dr. Rajeswari Sridhar", research: "Natural Language Processing, Artificial Intelligence, Machine Learning, Deep Learning", link: "https://www.nitt.edu/", institute: "NIT Trichy" },
  { name: "Dr. U. Srinivasulu Reddy", research: "Data Analytics, Machine Learning, Artificial Intelligence", link: "https://www.nitt.edu/", institute: "NIT Trichy" },
  { name: "Dr. Selvakumar K", research: "Artificial Intelligence, Machine Learning, Deep Learning, Soft Computing", link: "https://www.nitt.edu/", institute: "NIT Trichy" },
  { name: "Dr. C. Oswald", research: "Machine Learning, Deep Learning, Data Mining, Natural Language Processing", link: "https://www.nitt.edu/", institute: "NIT Trichy" },
  { name: "Dr. A. Santhana Vijayan", research: "Artificial Intelligence, Machine Learning, Deep Learning, NLP", link: "https://www.nitt.edu/", institute: "NIT Trichy" },
  { name: "Dr. M. Sridevi", research: "Machine Learning, Deep Learning, Soft Computing, Computer Vision", link: "https://www.nitt.edu/", institute: "NIT Trichy" },
  { name: "Dr. R. Bala Krishnan", research: "Machine Learning, Deep Learning", link: "https://www.nitt.edu/", institute: "NIT Trichy" },
  { name: "Dr. B. Nithya", research: "Machine Learning and network security", link: "https://www.nitt.edu/", institute: "NIT Trichy" },
  { name: "Dr. E. Sivasankar", research: "AI, Big Data Analytics, Machine Learning applications", link: "https://www.nitt.edu/", institute: "NIT Trichy" },

  // BITS Pilani
  { name: "Bharat Richhariya", research: "Machine Learning, Support Vector Machines, Deep Learning", link: "https://www.bits-pilani.ac.in/", institute: "BITS Pilani" },
  { name: "Kamlesh Tiwari", research: "Machine Learning, Deep Learning, Cognitive Computing, Biometrics", link: "https://www.bits-pilani.ac.in/", institute: "BITS Pilani" },
  { name: "Poonam Goyal", research: "Scalable AI/ML, time-series data models", link: "https://www.bits-pilani.ac.in/", institute: "BITS Pilani" },
  { name: "Navneet Goyal", research: "Federated Learning, Private AI, Edge AI", link: "https://www.bits-pilani.ac.in/", institute: "BITS Pilani" },
  { name: "Snehanshu Saha", research: "Theory of Deep Learning, parsimonious learning", link: "https://www.bits-pilani.ac.in/", institute: "BITS Pilani" },
  { name: "Harikrishnan NB", research: "Machine Learning, causality, brain-inspired learning", link: "https://www.bits-pilani.ac.in/", institute: "BITS Pilani" },
  { name: "Mukesh Kumar Rohil", research: "AI, Computer Vision, Machine Learning", link: "https://www.bits-pilani.ac.in/", institute: "BITS Pilani" },
  { name: "Yashvardhan Sharma", research: "Natural Language Processing, Semantic Web, AI", link: "https://www.bits-pilani.ac.in/", institute: "BITS Pilani" },

  // IIIT Bangalore
  { name: "Prof. Vinu E. Venugopal", research: "Big Data, Streaming Data Systems, Human-Centric AI", link: "https://www.iiitb.ac.in/", institute: "IIIT Bangalore" },
  { name: "Prof. Raghuram Bharadwaj Diddigi", research: "Reinforcement Learning, Deep Learning, Multi-Agent Learning", link: "https://www.iiitb.ac.in/", institute: "IIIT Bangalore" },
  { name: "Prof. Uttam Kumar", research: "Geospatial Data Analysis, Machine Learning Applications", link: "https://www.iiitb.ac.in/", institute: "IIIT Bangalore" },
  { name: "Prof. Viswanath Gopalakrishnan", research: "Computer Vision, Self-Supervised Learning, Vision-Language Fusion", link: "https://www.iiitb.ac.in/", institute: "IIIT Bangalore" },
  { name: "Prof. Dinesh Babu J.", research: "Computer Vision, Image Processing", link: "https://www.iiitb.ac.in/", institute: "IIIT Bangalore" },
  { name: "Prof. Tulika Saha", research: "NLP & Multi-modal AI", link: "https://www.iiitb.ac.in/", institute: "IIIT Bangalore" },
  { name: "Prof. Amit Chattopadhyay", research: "Topological Machine Learning", link: "https://www.iiitb.ac.in/", institute: "IIIT Bangalore" },
  { name: "Prof. Ramasubramanian V", research: "Speech Processing, Machine Learning", link: "https://www.iiitb.ac.in/", institute: "IIIT Bangalore" },

  // NIT Warangal
  { name: "Prof. Pisipati Radha Krishna", research: "Machine Learning, Deep Learning, Big Data", link: "https://www.nitw.ac.in/", institute: "NIT Warangal" },
  { name: "Prof. Mettu Srinivas", research: "Machine Learning, Deep Learning, Computer Vision", link: "https://www.nitw.ac.in/", institute: "NIT Warangal" },
  { name: "Prof. Earnest Paul Ijjina", research: "Artificial Intelligence, Deep Learning, Computer Vision", link: "https://www.nitw.ac.in/", institute: "NIT Warangal" },
  { name: "Prof. Ramalingaswamy Cheruku", research: "Machine Learning, Deep Learning, Brain-Computer Interfaces", link: "https://www.nitw.ac.in/", institute: "NIT Warangal" },
  { name: "Prof. Chanchal Suman", research: "Artificial Intelligence, Natural Language Processing", link: "https://www.nitw.ac.in/", institute: "NIT Warangal" },
  { name: "Prof. R.B.V. Subramanyam", research: "AI, Machine Learning", link: "https://www.nitw.ac.in/", institute: "NIT Warangal" },
  { name: "Prof. Priyanka Chawla", research: "Artificial Intelligence, ML-driven disease detection", link: "https://www.nitw.ac.in/", institute: "NIT Warangal" },

  // IIT Patna
  { name: "Dr. Sriparna Saha", research: "Artificial Intelligence, Machine Learning, Pattern Recognition", link: "https://www.iitp.ac.in/", institute: "IIT Patna" },
  { name: "Dr. Asif Ekbal", research: "Natural Language Processing, Machine Learning", link: "https://www.iitp.ac.in/", institute: "IIT Patna" },
  { name: "Dr. Satendra Kumar", research: "Neural Networks, Deep Reinforcement Learning", link: "https://www.iitp.ac.in/", institute: "IIT Patna" },
  { name: "Dr. Jimson Mathew", research: "Machine Learning, Fault Tolerant Computing", link: "https://www.iitp.ac.in/", institute: "IIT Patna" },
  { name: "Dr. Rajiv Misra", research: "Complex Networks, Machine Learning", link: "https://www.iitp.ac.in/", institute: "IIT Patna" },
  { name: "Dr. Joydeep Chandra", research: "Network Science, Machine Learning", link: "https://www.iitp.ac.in/", institute: "IIT Patna" },
  { name: "Dr. Somanath Tripathy", research: "Machine Learning in Security, Applied Cryptography", link: "https://www.iitp.ac.in/", institute: "IIT Patna" },

  // IIT (ISM) Dhanbad
  { name: "Prof. Amgoth Tarachand", research: "AI/ML, IoT, Edge Intelligence", link: "https://www.iitism.ac.in/", institute: "IIT (ISM) Dhanbad" },
  { name: "Prof. Sachin Tripathi", research: "Artificial Intelligence, Machine Learning, Cyber Security", link: "https://www.iitism.ac.in/", institute: "IIT (ISM) Dhanbad" },
  { name: "Prof. Chiranjeev Kumar", research: "Artificial Intelligence, Machine Learning, Wireless Networks", link: "https://www.iitism.ac.in/", institute: "IIT (ISM) Dhanbad" },
  { name: "Prof. Ayan Das", research: "AI, ML, NLP, Information Retrieval", link: "https://www.iitism.ac.in/", institute: "IIT (ISM) Dhanbad" },
  { name: "Prof. Sudhakar Kumawat", research: "Computer Vision, Deep Learning", link: "https://www.iitism.ac.in/", institute: "IIT (ISM) Dhanbad" },
  { name: "Prof. Tamoghna Ojha", research: "AI/ML techniques to IoT, Digital Twins", link: "https://www.iitism.ac.in/", institute: "IIT (ISM) Dhanbad" },
  { name: "Prof. Haider Banka", research: "Soft Computing, Machine Learning", link: "https://www.iitism.ac.in/", institute: "IIT (ISM) Dhanbad" },

  // ABV-IIITM Gwalior
  { name: "Dr. W. Wilfred Godfrey", research: "Artificial Intelligence, Machine Learning, Multi-Agent Systems", link: "https://www.iiitm.ac.in/", institute: "ABV-IIITM Gwalior" },
  { name: "Prof. Pramod Kumar Singh", research: "Machine/Deep Learning, Natural Language Processing", link: "https://www.iiitm.ac.in/", institute: "ABV-IIITM Gwalior" },
  { name: "Prof. Anupam Shukla", research: "Soft Computing, AI, Speech Processing", link: "https://www.iiitm.ac.in/", institute: "ABV-IIITM Gwalior" },
  { name: "Dr. V. Ramanjaneyulu Yannam", research: "Machine Learning, Recommendation Systems", link: "https://www.iiitm.ac.in/", institute: "ABV-IIITM Gwalior" },
  { name: "Dr. Vivek Tiwari", research: "Machine & Deep Learning, NLP", link: "https://www.iiitm.ac.in/", institute: "ABV-IIITM Gwalior" },
  { name: "Dr. Anuraj Singh", research: "Artificial Intelligence, Machine Learning", link: "https://www.iiitm.ac.in/", institute: "ABV-IIITM Gwalior" },
  { name: "Dr. Sunil Kumar", research: "Artificial Intelligence, Computer Vision", link: "https://www.iiitm.ac.in/", institute: "ABV-IIITM Gwalior" },

  // IIT Jodhpur
  { name: "Anand Mishra", research: "Vision, Language, and Learning", link: "https://iitj.ac.in/", institute: "IIT Jodhpur" },
  { name: "Romi Banerjee", research: "Cognitive Architectures, Artificial General Intelligence", link: "https://iitj.ac.in/", institute: "IIT Jodhpur" },
  { name: "Yashaswi Verma", research: "Artificial Intelligence, Machine Learning", link: "https://iitj.ac.in/", institute: "IIT Jodhpur" },
  { name: "Dip Sankar Banerjee", research: "Data Analytics, High-performance Computing", link: "https://iitj.ac.in/", institute: "IIT Jodhpur" },
  { name: "Manish Aggarwal", research: "Explainable AI, Uncertainty in Machine Learning", link: "https://iitj.ac.in/", institute: "IIT Jodhpur" },
  { name: "Mayank Vatsa", research: "Biometrics, Machine Learning, Computer Vision", link: "https://iitj.ac.in/", institute: "IIT Jodhpur" },

  // IIIT Allahabad
  { name: "Prof. Krishna Pratap Singh", research: "Machine Learning, Deep Learning, NLP", link: "https://www.iiita.ac.in/", institute: "IIIT Allahabad" },
  { name: "Prof. Gora Chand Nandi", research: "Artificial Intelligence, Machine Vision", link: "https://www.iiita.ac.in/", institute: "IIIT Allahabad" },
  { name: "Dr. Navjot Singh", research: "Machine Learning, Computer Vision", link: "https://www.iiita.ac.in/", institute: "IIIT Allahabad" },
  { name: "Dr. Naveen Saini", research: "Machine Learning, Text Mining", link: "https://www.iiita.ac.in/", institute: "IIIT Allahabad" },
  { name: "Dr. Amit Kumar", research: "NLP, Multimodal Learning, Generative AI", link: "https://www.iiita.ac.in/", institute: "IIIT Allahabad" },
  { name: "Dr. Nikhilanand Arya", research: "Machine Learning, Computational Biology", link: "https://www.iiita.ac.in/", institute: "IIIT Allahabad" },

  // Jadavpur University
  { name: "Dr. Dipankar Das", research: "NLP, Large Language Models, Sentiment Analysis", link: "http://www.jadavpuruniversity.in/", institute: "Jadavpur University" },
  { name: "Prof. Susmita Ghosh", research: "Machine Learning, Soft Computing", link: "http://www.jadavpuruniversity.in/", institute: "Jadavpur University" },
  { name: "Prof. Diganta Saha", research: "Natural Language Processing, Text Mining", link: "http://www.jadavpuruniversity.in/", institute: "Jadavpur University" },
  { name: "Prof. Amit Konar", research: "Artificial Intelligence, Neural Networks", link: "http://www.jadavpuruniversity.in/", institute: "Jadavpur University" },
  { name: "Prof. Sivaji Bandyopadhyay", research: "Natural Language Processing, Machine Learning", link: "http://www.jadavpuruniversity.in/", institute: "Jadavpur University" },
  { name: "Dr. Kamal Sarkar", research: "Text Mining, Machine Learning", link: "http://www.jadavpuruniversity.in/", institute: "Jadavpur University" }
];

module.exports = { TIER3_PROFS };
