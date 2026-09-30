const REMAINING_PROFS = [
  // IIT Madras
  {
    name: "Balaraman Ravindran",
    institute: "IIT Madras",
    researchAreas: ["Reinforcement Learning", "Machine Learning", "Data Mining"],
    email: "ravindran@cse.iitm.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=5P2o8kQAAAAJ",
    website: "https://www.cse.iitm.ac.in/~ravi/"
  },
  {
    name: "Mitesh M. Khapra",
    institute: "IIT Madras",
    researchAreas: ["Deep Learning", "Natural Language Processing", "Machine Learning"],
    email: "miteshk@cse.iitm.ac.in",
    googleScholar: "https://scholar.google.co.in/citations?user=zO0E4C0AAAAJ",
    website: "https://www.cse.iitm.ac.in/~miteshk/"
  },
  {
    name: "Pratyush Kumar",
    institute: "IIT Madras",
    researchAreas: ["Deep Learning", "Computer Architecture", "Systems for ML"],
    email: "pratyush@cse.iitm.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=eG2G-H0AAAAJ",
    website: "https://www.cse.iitm.ac.in/~pratyush/"
  },
  {
    name: "Kaushik Mitra",
    institute: "IIT Madras",
    researchAreas: ["Computational Imaging", "Computer Vision", "Machine Learning"],
    email: "kmitra@ee.iitm.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=J1eH9y8AAAAJ",
    website: "https://www.ee.iitm.ac.in/kmitra/"
  },
  {
    name: "A.N. Rajagopalan",
    institute: "IIT Madras",
    researchAreas: ["Computer Vision", "Image Processing", "Pattern Recognition"],
    email: "raju@ee.iitm.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=4r4x-2kAAAAJ",
    website: "https://www.ee.iitm.ac.in/~raju/"
  },
  {
    name: "Arun Rajkumar",
    institute: "IIT Madras",
    researchAreas: ["Machine Learning", "Optimization", "Statistical Learning"],
    email: "arunr@cse.iitm.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=W1Dk1XgAAAAJ",
    website: "https://www.cse.iitm.ac.in/~arunr/"
  },
  {
    name: "Sutanu Chakraborti",
    institute: "IIT Madras",
    researchAreas: ["Natural Language Processing", "Information Retrieval", "Machine Learning"],
    email: "sutanuc@cse.iitm.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=1PqjNf0AAAAJ",
    website: "https://www.cse.iitm.ac.in/~sutanuc/"
  },
  {
    name: "Nandan Sudarsanam",
    institute: "IIT Madras",
    researchAreas: ["Data Mining", "Experimentation", "Machine Learning"],
    email: "nandan@iitm.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=V9nN8W0AAAAJ",
    website: "https://doms.iitm.ac.in/nandan/"
  },
  {
    name: "C. Chandra Sekhar",
    institute: "IIT Madras",
    researchAreas: ["Speech Recognition", "Machine Learning", "Neural Networks"],
    email: "chandra@cse.iitm.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=v6nS6e8AAAAJ",
    website: "https://www.cse.iitm.ac.in/~chandra/"
  },
  {
    name: "Chandrashekar Lakshminarayanan",
    institute: "IIT Madras",
    researchAreas: ["Reinforcement Learning", "Machine Learning"],
    email: "chandru@cse.iitm.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=w-R-MvUAAAAJ",
    website: "https://www.cse.iitm.ac.in/~chandru/"
  },
  {
    name: "Harish Guruprasad Ramaswamy",
    institute: "IIT Madras",
    researchAreas: ["Machine Learning", "Statistical Learning Theory"],
    email: "harishg@cse.iitm.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=Q-m_J9MAAAAJ",
    website: "https://www.cse.iitm.ac.in/~harishg/"
  },
  {
    name: "Gopalakrishnan Srinivasan",
    institute: "IIT Madras",
    researchAreas: ["Machine Learning", "Data Analytics"],
    email: "gopal@cse.iitm.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.cse.iitm.ac.in/"
  },
  {
    name: "Krishna Pillutla",
    institute: "IIT Madras",
    researchAreas: ["Machine Learning", "Federated Learning"],
    email: "krishnap@cse.iitm.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.cse.iitm.ac.in/"
  },
  {
    name: "Anurag Mittal",
    institute: "IIT Madras",
    researchAreas: ["Computer Vision", "Machine Learning"],
    email: "amittal@cse.iitm.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.cse.iitm.ac.in/~amittal/"
  },
  {
    name: "Deepak Khemani",
    institute: "IIT Madras",
    researchAreas: ["Artificial Intelligence", "Knowledge Representation"],
    email: "khemani@iitm.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.cse.iitm.ac.in/~khemani/"
  },
  {
    name: "B. Sriram",
    institute: "IIT Madras",
    researchAreas: ["Machine Learning", "Data Mining"],
    email: "sriram@iitm.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iitm.ac.in/"
  },
  {
    name: "Hema A Murthy",
    institute: "IIT Madras",
    researchAreas: ["Speech Processing", "Music Information Retrieval"],
    email: "hema@cse.iitm.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.cse.iitm.ac.in/~hema/"
  },
  {
    name: "S. Raman",
    institute: "IIT Madras",
    researchAreas: ["Computer Vision", "Machine Learning"],
    email: "raman@iitm.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iitm.ac.in/"
  },
  {
    name: "Nitin Chandrachoodan",
    institute: "IIT Madras",
    researchAreas: ["Machine Learning", "VLSI"],
    email: "nitin@ee.iitm.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.ee.iitm.ac.in/~nitin/"
  },
  {
    name: "Abhishek Sinha",
    institute: "IIT Madras",
    researchAreas: ["Reinforcement Learning", "Control Systems"],
    email: "abhishek.sinha@ee.iitm.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.ee.iitm.ac.in/~abhisheksinha/"
  },
  {
    name: "Ganapathy Krishnamurthi",
    institute: "IIT Madras",
    researchAreas: ["Medical Imaging", "Machine Learning"],
    email: "gankrish@iitm.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iitm.ac.in/"
  },
  {
    name: "S. Umesh",
    institute: "IIT Madras",
    researchAreas: ["Speech Recognition", "Machine Learning"],
    email: "umeshs@ee.iitm.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.ee.iitm.ac.in/~umeshs/"
  },
  {
    name: "Pravin Nair",
    institute: "IIT Madras",
    researchAreas: ["Machine Learning", "Robotics"],
    email: "pravin@iitm.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iitm.ac.in/"
  },
  {
    name: "Krishna Jagannathan",
    institute: "IIT Madras",
    researchAreas: ["Networks", "Machine Learning"],
    email: "krishnaj@ee.iitm.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.ee.iitm.ac.in/~krishnaj/"
  },
  {
    name: "Balaji Srinivasan",
    institute: "IIT Madras",
    researchAreas: ["Machine Learning", "Computational Mechanics"],
    email: "balajis@iitm.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iitm.ac.in/"
  },
  {
    name: "Siddhesh Sakhalkar",
    institute: "IIT Madras",
    researchAreas: ["Machine Learning"],
    email: "siddhesh@iitm.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iitm.ac.in/"
  },
  {
    name: "N. Arunachalam",
    institute: "IIT Madras",
    researchAreas: ["Machine Learning"],
    email: "narunachalam@iitm.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iitm.ac.in/"
  },
  {
    name: "Aditi Kathpalia",
    institute: "IIT Madras",
    researchAreas: ["Machine Learning"],
    email: "aditi@iitm.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iitm.ac.in/"
  },
  {
    name: "S. Ganga Prasath",
    institute: "IIT Madras",
    researchAreas: ["Machine Learning"],
    email: "gangap@iitm.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iitm.ac.in/"
  },
  {
    name: "Kannabiran S.",
    institute: "IIT Madras",
    researchAreas: ["Machine Learning"],
    email: "kannabiran@iitm.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iitm.ac.in/"
  },

  // IIIT Hyderabad
  {
    name: "C.V. Jawahar",
    institute: "IIIT Hyderabad",
    researchAreas: ["Computer Vision", "Machine Learning", "Pattern Recognition"],
    email: "jawahar@iiit.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=bXb1I6UAAAAJ",
    website: "https://cvit.iiit.ac.in/jawahar/"
  },
  {
    name: "K. Madhava Krishna",
    institute: "IIIT Hyderabad",
    researchAreas: ["Robotics", "Computer Vision"],
    email: "mkrishna@iiit.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=gDq4Z6gAAAAJ",
    website: "https://robotics.iiit.ac.in/"
  },
  {
    name: "Vinay Namboodiri",
    institute: "IIIT Hyderabad",
    researchAreas: ["Computer Vision", "Machine Learning"],
    email: "vinay.namboodiri@iiit.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=k79uP70AAAAJ",
    website: "https://iiit.ac.in/"
  },
  {
    name: "Ponnurangam Kumaraguru",
    institute: "IIIT Hyderabad",
    researchAreas: ["Cybersecurity", "Social Computing", "Privacy"],
    email: "pk@iiit.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=5P2o8kQAAAAJ",
    website: "https://precog.iiit.ac.in/"
  },
  {
    name: "Ravi Kiran Sarvadevabhatla",
    institute: "IIIT Hyderabad",
    researchAreas: ["Computer Vision", "Deep Learning"],
    email: "ravi.kiran@iiit.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=eG2G-H0AAAAJ",
    website: "https://faculty.iiit.ac.in/~ravi.kiran/"
  },
  {
    name: "Anoop Namboodiri",
    institute: "IIIT Hyderabad",
    researchAreas: ["Pattern Recognition", "Biometrics", "Computer Vision"],
    email: "anoop@iiit.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=zO0E4C0AAAAJ",
    website: "https://faculty.iiit.ac.in/~anoop/"
  },
  {
    name: "Vasudeva Varma",
    institute: "IIIT Hyderabad",
    researchAreas: ["Information Retrieval", "Natural Language Processing"],
    email: "vv@iiit.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=J1eH9y8AAAAJ",
    website: "https://faculty.iiit.ac.in/~vv/"
  },
  {
    name: "Jayanthi Sivaswamy",
    institute: "IIIT Hyderabad",
    researchAreas: ["Medical Image Processing", "Computer Vision"],
    email: "jsivaswamy@iiit.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=4r4x-2kAAAAJ",
    website: "https://faculty.iiit.ac.in/~jsivaswamy/"
  },
  {
    name: "P. J. Narayanan",
    institute: "IIIT Hyderabad",
    researchAreas: ["Computer Vision", "Graphics"],
    email: "pjn@iiit.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=W1Dk1XgAAAAJ",
    website: "https://faculty.iiit.ac.in/~pjn/"
  },
  {
    name: "Makarand Tapaswi",
    institute: "IIIT Hyderabad",
    researchAreas: ["Computer Vision", "Natural Language Processing"],
    email: "makarand.tapaswi@iiit.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=1PqjNf0AAAAJ",
    website: "https://faculty.iiit.ac.in/~makarand/"
  },
  {
    name: "Dipti Mishra Sharma",
    institute: "IIIT Hyderabad",
    researchAreas: ["Natural Language Processing", "Computational Linguistics"],
    email: "dipti@iiit.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://iiit.ac.in/"
  },
  {
    name: "Manish Shrivastava",
    institute: "IIIT Hyderabad",
    researchAreas: ["Natural Language Processing", "Machine Learning"],
    email: "m.shrivastava@iiit.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://iiit.ac.in/"
  },
  {
    name: "Girish Varma",
    institute: "IIIT Hyderabad",
    researchAreas: ["Computer Vision", "Machine Learning"],
    email: "girish.varma@iiit.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://iiit.ac.in/"
  },
  {
    name: "Vineet Gandhi",
    institute: "IIIT Hyderabad",
    researchAreas: ["Computer Vision", "Machine Learning"],
    email: "vgandhi@iiit.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://iiit.ac.in/"
  },
  {
    name: "Radhika Mamidi",
    institute: "IIIT Hyderabad",
    researchAreas: ["Natural Language Processing", "Dialogue Systems"],
    email: "radhika.mamidi@iiit.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://iiit.ac.in/"
  },
  {
    name: "Chiranjeevi Yarra",
    institute: "IIIT Hyderabad",
    researchAreas: ["Speech Processing", "Machine Learning"],
    email: "chiranjeevi.yarra@iiit.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://iiit.ac.in/"
  },
  {
    name: "Anil Kumar Vuppala",
    institute: "IIIT Hyderabad",
    researchAreas: ["Speech Processing", "Machine Learning"],
    email: "anil.vuppala@iiit.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://iiit.ac.in/"
  },
  {
    name: "Avinash Sharma",
    institute: "IIIT Hyderabad",
    researchAreas: ["Computer Vision", "Machine Learning"],
    email: "asharma@iiit.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://iiit.ac.in/"
  },

  // IIT Kanpur
  {
    name: "Piyush Rai",
    institute: "IIT Kanpur",
    researchAreas: ["Machine Learning", "Bayesian Methods"],
    email: "piyush@cse.iitk.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.cse.iitk.ac.in/users/piyush/"
  },
  {
    name: "Ashutosh Modi",
    institute: "IIT Kanpur",
    researchAreas: ["Natural Language Processing", "Machine Learning"],
    email: "ashutoshm@cse.iitk.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.cse.iitk.ac.in/users/ashutoshm/"
  },
  {
    name: "Vipul Arora",
    institute: "IIT Kanpur",
    researchAreas: ["Audio Processing", "Machine Learning"],
    email: "vipular@iitk.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iitk.ac.in/"
  },
  {
    name: "Purushottam Kar",
    institute: "IIT Kanpur",
    researchAreas: ["Optimization", "Machine Learning Theory"],
    email: "purushot@cse.iitk.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.cse.iitk.ac.in/users/purushot/"
  },
  {
    name: "Nisheeth Srivastava",
    institute: "IIT Kanpur",
    researchAreas: ["Cognitive Science", "Machine Learning"],
    email: "nsrivast@cse.iitk.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.cse.iitk.ac.in/users/nsrivast/"
  },
  {
    name: "Arnab Bhattacharya",
    institute: "IIT Kanpur",
    researchAreas: ["Databases", "Data Mining"],
    email: "arnabb@cse.iitk.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.cse.iitk.ac.in/users/arnabb/"
  },
  {
    name: "Gaurav Sharma",
    institute: "IIT Kanpur",
    researchAreas: ["Computer Vision", "Machine Learning"],
    email: "grv@cse.iitk.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.cse.iitk.ac.in/users/grv/"
  },
  {
    name: "Indranil Saha",
    institute: "IIT Kanpur",
    researchAreas: ["Formal Methods", "Cyber-Physical Systems"],
    email: "isaha@cse.iitk.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.cse.iitk.ac.in/users/isaha/"
  },
  {
    name: "Amey Karkare",
    institute: "IIT Kanpur",
    researchAreas: ["Compilers", "Programming Languages"],
    email: "karkare@cse.iitk.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.cse.iitk.ac.in/users/karkare/"
  },
  {
    name: "Sayak Ray Chowdhury",
    institute: "IIT Kanpur",
    researchAreas: ["Machine Learning", "Bandits"],
    email: "sayakrc@iitk.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iitk.ac.in/"
  },
  {
    name: "Hamim Zafar",
    institute: "IIT Kanpur",
    researchAreas: ["Computational Biology", "Machine Learning"],
    email: "hamim@iitk.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iitk.ac.in/"
  },
  {
    name: "Harish Karnick",
    institute: "IIT Kanpur",
    researchAreas: ["Artificial Intelligence", "Machine Learning"],
    email: "hk@cse.iitk.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.cse.iitk.ac.in/users/hk/"
  },
  {
    name: "Amit Mitra",
    institute: "IIT Kanpur",
    researchAreas: ["Statistics", "Machine Learning"],
    email: "amitra@iitk.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iitk.ac.in/"
  },
  {
    name: "Anil Seth",
    institute: "IIT Kanpur",
    researchAreas: ["Logic", "Automata Theory"],
    email: "seth@cse.iitk.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.cse.iitk.ac.in/users/seth/"
  },
  {
    name: "Sunil Kumar",
    institute: "IIT Kanpur",
    researchAreas: ["Computer Vision", "Machine Learning"],
    email: "sunilk@iitk.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iitk.ac.in/"
  },
  {
    name: "Laxmidhar Behera",
    institute: "IIT Kanpur",
    researchAreas: ["Robotics", "Control Systems"],
    email: "lbehera@iitk.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iitk.ac.in/"
  },
  {
    name: "K. S. Venkatesh",
    institute: "IIT Kanpur",
    researchAreas: ["Computer Vision", "Image Processing"],
    email: "venkats@iitk.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iitk.ac.in/"
  },
  {
    name: "Swaprava Nath",
    institute: "IIT Kanpur",
    researchAreas: ["Game Theory", "Mechanism Design"],
    email: "swaprava@cse.iitk.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.cse.iitk.ac.in/users/swaprava/"
  },

  // IIT Hyderabad
  {
    name: "Vineeth N. Balasubramanian",
    institute: "IIT Hyderabad",
    researchAreas: ["Deep Learning", "Machine Learning", "Computer Vision"],
    email: "vineethnb@cse.iith.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://iith.ac.in/~vineethnb/"
  },
  {
    name: "Maunendra Sankar Desarkar",
    institute: "IIT Hyderabad",
    researchAreas: ["Data Mining", "Recommender Systems"],
    email: "maunendra@cse.iith.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://iith.ac.in/~maunendra/"
  },
  {
    name: "Srijith P.K.",
    institute: "IIT Hyderabad",
    researchAreas: ["Machine Learning", "Bayesian Learning"],
    email: "srijith@cse.iith.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://iith.ac.in/~srijith/"
  },
  {
    name: "C. Krishna Mohan",
    institute: "IIT Hyderabad",
    researchAreas: ["Video Analytics", "Machine Learning"],
    email: "ckm@cse.iith.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://iith.ac.in/~ckm/"
  },
  {
    name: "Sumohana Channappayya",
    institute: "IIT Hyderabad",
    researchAreas: ["Image/Video Quality Assessment", "Computer Vision"],
    email: "sumohana@ee.iith.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://iith.ac.in/~sumohana/"
  },
  {
    name: "Naresh Manwani",
    institute: "IIT Hyderabad",
    researchAreas: ["Machine Learning", "Data Mining"],
    email: "nareshmanwani@ai.iith.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://iith.ac.in/~nareshmanwani/"
  },
  {
    name: "Ganesh Ghalme",
    institute: "IIT Hyderabad",
    researchAreas: ["Machine Learning", "Game Theory"],
    email: "ganeshghalme@ai.iith.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://iith.ac.in/~ganeshghalme/"
  },
  {
    name: "Konda Reddy Mopuri",
    institute: "IIT Hyderabad",
    researchAreas: ["Computer Vision", "Machine Learning"],
    email: "kondareddy@ai.iith.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://iith.ac.in/~kondareddy/"
  },
  {
    name: "PN Karthik",
    institute: "IIT Hyderabad",
    researchAreas: ["Machine Learning", "Bandits"],
    email: "pnkarthik@ai.iith.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://iith.ac.in/~pnkarthik/"
  },
  {
    name: "Gogulapati Sreedurga",
    institute: "IIT Hyderabad",
    researchAreas: ["Machine Learning"],
    email: "sreedurga@ai.iith.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://iith.ac.in/~sreedurga/"
  },
  {
    name: "R Prasanth Kumar",
    institute: "IIT Hyderabad",
    researchAreas: ["Robotics", "Machine Learning"],
    email: "prasanth@mae.iith.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://iith.ac.in/~prasanth/"
  },
  {
    name: "Venkatraman Renganathan",
    institute: "IIT Hyderabad",
    researchAreas: ["Control Systems", "Machine Learning"],
    email: "vrengana@ai.iith.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://iith.ac.in/~vrengana/"
  },
  {
    name: "K Sri Rama Murty",
    institute: "IIT Hyderabad",
    researchAreas: ["Speech Processing", "Machine Learning"],
    email: "ksrm@ee.iith.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://iith.ac.in/~ksrm/"
  },
  {
    name: "Manish Singh",
    institute: "IIT Hyderabad",
    researchAreas: ["Information Retrieval", "Data Mining"],
    email: "msingh@cse.iith.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://iith.ac.in/~msingh/"
  },

  // IIT Kharagpur
  {
    name: "Niloy Ganguly",
    institute: "IIT Kharagpur",
    researchAreas: ["Complex Networks", "Machine Learning"],
    email: "niloy@cse.iitkgp.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "http://www.facweb.iitkgp.ac.in/~niloy/"
  },
  {
    name: "Sudeshna Sarkar",
    institute: "IIT Kharagpur",
    researchAreas: ["Natural Language Processing", "Machine Learning"],
    email: "sudeshna@cse.iitkgp.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "http://www.facweb.iitkgp.ac.in/~sudeshna/"
  },
  {
    name: "Pawan Goyal",
    institute: "IIT Kharagpur",
    researchAreas: ["Natural Language Processing", "Information Retrieval"],
    email: "pawang@cse.iitkgp.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "http://www.facweb.iitkgp.ac.in/~pawang/"
  },
  {
    name: "Animesh Mukherjee",
    institute: "IIT Kharagpur",
    researchAreas: ["Complex Networks", "Natural Language Processing"],
    email: "animeshm@cse.iitkgp.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "http://www.facweb.iitkgp.ac.in/~animeshm/"
  },
  {
    name: "Debdoot Sheet",
    institute: "IIT Kharagpur",
    researchAreas: ["Medical Imaging", "Machine Learning"],
    email: "debdoot@ee.iitkgp.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "http://www.facweb.iitkgp.ac.in/~debdoot/"
  },
  {
    name: "Sourangshu Bhattacharya",
    institute: "IIT Kharagpur",
    researchAreas: ["Machine Learning", "Data Mining"],
    email: "sourangshu@cse.iitkgp.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "http://www.facweb.iitkgp.ac.in/~sourangshu/"
  },
  {
    name: "Pabitra Mitra",
    institute: "IIT Kharagpur",
    researchAreas: ["Machine Learning", "Data Mining"],
    email: "pabitra@cse.iitkgp.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "http://www.facweb.iitkgp.ac.in/~pabitra/"
  },
  {
    name: "Jayanta Mukhopadhyay",
    institute: "IIT Kharagpur",
    researchAreas: ["Image Processing", "Pattern Recognition"],
    email: "jay@cse.iitkgp.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "http://www.facweb.iitkgp.ac.in/~jay/"
  },
  {
    name: "Mainack Mondal",
    institute: "IIT Kharagpur",
    researchAreas: ["Usable Security", "Privacy"],
    email: "mainack@cse.iitkgp.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "http://www.facweb.iitkgp.ac.in/~mainack/"
  },
  {
    name: "Abhir Das",
    institute: "IIT Kharagpur",
    researchAreas: ["Computer Vision", "Machine Learning"],
    email: "abhir@cse.iitkgp.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "http://www.facweb.iitkgp.ac.in/~abhir/"
  },
  {
    name: "Abhijnan Chakraborty",
    institute: "IIT Kharagpur",
    researchAreas: ["Social Computing", "Fairness in ML"],
    email: "abhijnan@cse.iitkgp.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "http://www.facweb.iitkgp.ac.in/~abhijnan/"
  },
  {
    name: "K. Sreenivasa Rao",
    institute: "IIT Kharagpur",
    researchAreas: ["Speech Processing", "Machine Learning"],
    email: "ksrao@cse.iitkgp.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "http://www.facweb.iitkgp.ac.in/~ksrao/"
  },
  {
    name: "Jibesh Patra",
    institute: "IIT Kharagpur",
    researchAreas: ["Machine Learning", "Software Engineering"],
    email: "jibesh@cse.iitkgp.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "http://www.facweb.iitkgp.ac.in/~jibesh/"
  },
  {
    name: "Soumya Kanti Ghosh",
    institute: "IIT Kharagpur",
    researchAreas: ["Spatial Data Science", "Cloud Computing"],
    email: "skg@cse.iitkgp.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "http://www.facweb.iitkgp.ac.in/~skg/"
  },
  {
    name: "Plaban Bhowmick",
    institute: "IIT Kharagpur",
    researchAreas: ["Machine Learning", "Data Mining"],
    email: "plaban@cse.iitkgp.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "http://www.facweb.iitkgp.ac.in/~plaban/"
  },
  {
    name: "Jiaul Hoque Paik",
    institute: "IIT Kharagpur",
    researchAreas: ["Information Retrieval", "Machine Learning"],
    email: "jhpaik@cse.iitkgp.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "http://www.facweb.iitkgp.ac.in/~jhpaik/"
  },
  {
    name: "Adway Mitra",
    institute: "IIT Kharagpur",
    researchAreas: ["Machine Learning", "Climate Science"],
    email: "adway@cse.iitkgp.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "http://www.facweb.iitkgp.ac.in/~adway/"
  },
  {
    name: "Koustav Rudra",
    institute: "IIT Kharagpur",
    researchAreas: ["Information Retrieval", "Social Computing"],
    email: "koustav@cse.iitkgp.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "http://www.facweb.iitkgp.ac.in/~koustav/"
  },
  {
    name: "Debashis Sen",
    institute: "IIT Kharagpur",
    researchAreas: ["Computer Vision", "Machine Learning"],
    email: "dsen@cse.iitkgp.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "http://www.facweb.iitkgp.ac.in/~dsen/"
  },
  {
    name: "Goutam Saha",
    institute: "IIT Kharagpur",
    researchAreas: ["Speech Processing", "Machine Learning"],
    email: "gsaha@cse.iitkgp.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "http://www.facweb.iitkgp.ac.in/~gsaha/"
  },

  // IIIT Delhi
  {
    name: "Rajiv Ratn Shah",
    institute: "IIIT Delhi",
    researchAreas: ["Multimedia", "Machine Learning", "Natural Language Processing"],
    email: "rajivratn@iiitd.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iiitd.ac.in/~rajivratn/"
  },
  {
    name: "Tanmoy Chakraborty",
    institute: "IIIT Delhi",
    researchAreas: ["Data Mining", "Social Network Analysis", "Machine Learning"],
    email: "tanmoy@iiitd.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iiitd.ac.in/~tanmoy/"
  },
  {
    name: "Md. Shad Akhtar",
    institute: "IIIT Delhi",
    researchAreas: ["Natural Language Processing", "Machine Learning"],
    email: "shad.akhtar@iiitd.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iiitd.ac.in/~shad.akhtar/"
  },
  {
    name: "Saket Anand",
    institute: "IIIT Delhi",
    researchAreas: ["Computer Vision", "Machine Learning"],
    email: "anands@iiitd.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iiitd.ac.in/~anands/"
  },
  {
    name: "Bapi Chatterjee",
    institute: "IIIT Delhi",
    researchAreas: ["Machine Learning"],
    email: "bapi@iiitd.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iiitd.ac.in/~bapi/"
  },
  {
    name: "Vinayak Abrol",
    institute: "IIIT Delhi",
    researchAreas: ["Machine Learning", "Signal Processing"],
    email: "abrol@iiitd.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iiitd.ac.in/~abrol/"
  },
  {
    name: "V. Raghava Mutharaju",
    institute: "IIIT Delhi",
    researchAreas: ["Semantic Web", "Knowledge Graphs"],
    email: "raghava.mutharaju@iiitd.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iiitd.ac.in/~raghava/"
  },
  {
    name: "Debarka Sengupta",
    institute: "IIIT Delhi",
    researchAreas: ["Computational Biology", "Machine Learning"],
    email: "debarka@iiitd.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iiitd.ac.in/~debarka/"
  },
  {
    name: "A.V. Subramanyam",
    institute: "IIIT Delhi",
    researchAreas: ["Information Forensics", "Machine Learning"],
    email: "subramanyam@iiitd.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iiitd.ac.in/~subramanyam/"
  },
  {
    name: "Ganesh Bagler",
    institute: "IIIT Delhi",
    researchAreas: ["Computational Gastronomy", "Complex Networks"],
    email: "bagler@iiitd.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iiitd.ac.in/~bagler/"
  },
  {
    name: "Jainendra Shukla",
    institute: "IIIT Delhi",
    researchAreas: ["Human-Computer Interaction", "Affective Computing"],
    email: "jainendra@iiitd.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iiitd.ac.in/~jainendra/"
  },
  {
    name: "Tammam Tillo",
    institute: "IIIT Delhi",
    researchAreas: ["Computer Vision", "Image Processing"],
    email: "tammam@iiitd.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iiitd.ac.in/~tammam/"
  },
  {
    name: "Sanjit Kaul",
    institute: "IIIT Delhi",
    researchAreas: ["Wireless Networks", "Machine Learning"],
    email: "skau@iiitd.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iiitd.ac.in/~skau/"
  },

  // IIT Roorkee
  {
    name: "Partha Pratim Roy",
    institute: "IIT Roorkee",
    researchAreas: ["Computer Vision", "Machine Learning"],
    email: "partha.roy@cs.iitr.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iitr.ac.in/~CSE/Partha_Pratim_Roy"
  },
  {
    name: "Balasubramanian Raman",
    institute: "IIT Roorkee",
    researchAreas: ["Computer Vision", "Machine Learning"],
    email: "balasubramanian.raman@cs.iitr.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iitr.ac.in/~CSE/Balasubramanian_Raman"
  },
  {
    name: "Durga Toshniwal",
    institute: "IIT Roorkee",
    researchAreas: ["Data Mining", "Machine Learning"],
    email: "durga.toshniwal@cs.iitr.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iitr.ac.in/~CSE/Durga_Toshniwal"
  },
  {
    name: "Sanjeev Manhas",
    institute: "IIT Roorkee",
    researchAreas: ["Machine Learning", "VLSI"],
    email: "sanjeev.manhas@ece.iitr.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iitr.ac.in/~ECE/Sanjeev_Manhas"
  },
  {
    name: "Sanjeev Kumar",
    institute: "IIT Roorkee",
    researchAreas: ["Machine Learning", "Data Science"],
    email: "sanjeev.kumar@cs.iitr.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iitr.ac.in/~CSE/Sanjeev_Kumar"
  },
  {
    name: "Gaurav Dixit",
    institute: "IIT Roorkee",
    researchAreas: ["Business Analytics", "Machine Learning"],
    email: "gaurav.dixit@doms.iitr.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iitr.ac.in/~DOMS/Gaurav_Dixit"
  },
  {
    name: "Gaurav Kumar Nayak",
    institute: "IIT Roorkee",
    researchAreas: ["Machine Learning", "Data Mining"],
    email: "gaurav.nayak@cs.iitr.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iitr.ac.in/~CSE/Gaurav_Kumar_Nayak"
  },
  {
    name: "Neetesh Kumar",
    institute: "IIT Roorkee",
    researchAreas: ["Machine Learning", "Optimization"],
    email: "neetesh.kumar@cs.iitr.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iitr.ac.in/~CSE/Neetesh_Kumar"
  },
  {
    name: "Manu Kumar Gupta",
    institute: "IIT Roorkee",
    researchAreas: ["Machine Learning"],
    email: "manu.gupta@cs.iitr.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iitr.ac.in/~CSE/Manu_Kumar_Gupta"
  },
  {
    name: "Sparsh Mittal",
    institute: "IIT Roorkee",
    researchAreas: ["Computer Architecture", "Machine Learning"],
    email: "sparsh.mittal@ece.iitr.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iitr.ac.in/~ECE/Sparsh_Mittal"
  },

  // ISI Kolkata
  {
    name: "Sanghamitra Bandyopadhyay",
    institute: "ISI Kolkata",
    researchAreas: ["Machine Learning", "Computational Biology"],
    email: "sanghami@isical.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.isical.ac.in/~sanghami/"
  },
  {
    name: "Ujjwal Maulik",
    institute: "ISI Kolkata",
    researchAreas: ["Machine Learning", "Bioinformatics", "Data Mining"],
    email: "umaulik@isical.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.isical.ac.in/~umaulik/"
  },
  {
    name: "Umapada Pal",
    institute: "ISI Kolkata",
    researchAreas: ["Computer Vision", "Pattern Recognition", "Machine Learning"],
    email: "umapada@isical.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.isical.ac.in/~umapada/"
  },
  {
    name: "Bidyut Baran Chaudhuri",
    institute: "ISI Kolkata",
    researchAreas: ["Pattern Recognition", "Natural Language Processing", "Image Processing"],
    email: "bbc@isical.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.isical.ac.in/~bbc/"
  },
  {
    name: "Swagatam Das",
    institute: "ISI Kolkata",
    researchAreas: ["Machine Learning", "Optimization", "Pattern Recognition"],
    email: "swagatam@isical.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.isical.ac.in/~swagatam/"
  },
  {
    name: "Ashish Ghosh",
    institute: "ISI Kolkata",
    researchAreas: ["Pattern Recognition", "Image Processing", "Machine Learning"],
    email: "ash@isical.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.isical.ac.in/~ash/"
  },
  {
    name: "Nikhil Ranjan Pal",
    institute: "ISI Kolkata",
    researchAreas: ["Machine Learning", "Neural Networks", "Fuzzy Logic"],
    email: "nrpal@isical.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.isical.ac.in/~nrpal/"
  },
  {
    name: "Sankar K. Pal",
    institute: "ISI Kolkata",
    researchAreas: ["Pattern Recognition", "Machine Learning", "Fuzzy Sets"],
    email: "sankar@isical.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.isical.ac.in/~sankar/"
  },
  {
    name: "Bhabatosh Chanda",
    institute: "ISI Kolkata",
    researchAreas: ["Image Processing", "Computer Vision", "Pattern Recognition"],
    email: "chanda@isical.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.isical.ac.in/~chanda/"
  },
  {
    name: "Utpal Garain",
    institute: "ISI Kolkata",
    researchAreas: ["Natural Language Processing", "Machine Learning", "Pattern Recognition"],
    email: "utpal@isical.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.isical.ac.in/~utpal/"
  },

  // IIT Guwahati
  {
    name: "Ashish Anand",
    institute: "IIT Guwahati",
    researchAreas: ["Machine Learning", "Computational Biology"],
    email: "anand.ashish@iitg.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iitg.ac.in/anand.ashish/"
  },
  {
    name: "Rashmi Dutta Baruah",
    institute: "IIT Guwahati",
    researchAreas: ["Machine Learning", "Fuzzy Systems"],
    email: "r.duttabaruah@iitg.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iitg.ac.in/r.duttabaruah/"
  },
  {
    name: "S.R. Mahadeva Prasanna",
    institute: "IIT Guwahati",
    researchAreas: ["Speech Processing", "Machine Learning"],
    email: "prasanna@iitg.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iitg.ac.in/prasanna/"
  },
  {
    name: "M. K. Bhuyan",
    institute: "IIT Guwahati",
    researchAreas: ["Computer Vision", "Machine Learning"],
    email: "mkb@iitg.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iitg.ac.in/mkb/"
  },
  {
    name: "Teena Sharma",
    institute: "IIT Guwahati",
    researchAreas: ["Machine Learning", "Optimization"],
    email: "teena@iitg.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iitg.ac.in/teena/"
  },
  {
    name: "Samarendra Dandapat",
    institute: "IIT Guwahati",
    researchAreas: ["Signal Processing", "Machine Learning"],
    email: "samarendra@iitg.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iitg.ac.in/samarendra/"
  },
  {
    name: "Rohit Sinha",
    institute: "IIT Guwahati",
    researchAreas: ["Speech Processing", "Machine Learning"],
    email: "rsinha@iitg.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iitg.ac.in/rsinha/"
  },
  {
    name: "Prithwijit Guha",
    institute: "IIT Guwahati",
    researchAreas: ["Computer Vision", "Machine Learning"],
    email: "pguha@iitg.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iitg.ac.in/pguha/"
  },
  {
    name: "Shyamanta M. Hazarika",
    institute: "IIT Guwahati",
    researchAreas: ["Robotics", "Artificial Intelligence", "Machine Learning"],
    email: "s.m.hazarika@iitg.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iitg.ac.in/s.m.hazarika/"
  },
  {
    name: "Kannan Karthik",
    institute: "IIT Guwahati",
    researchAreas: ["Information Security", "Machine Learning"],
    email: "k.karthik@iitg.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iitg.ac.in/k.karthik/"
  },
  {
    name: "Rhythm Grover",
    institute: "IIT Guwahati",
    researchAreas: ["Machine Learning"],
    email: "rhythm@iitg.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iitg.ac.in/rhythm/"
  },
  {
    name: "Arghyadip Roy",
    institute: "IIT Guwahati",
    researchAreas: ["Reinforcement Learning", "Machine Learning"],
    email: "arghyadip@iitg.ac.in",
    googleScholar: "https://scholar.google.com/citations?user=xxx",
    website: "https://www.iitg.ac.in/arghyadip/"
  }
];

export default REMAINING_PROFS;
