const fs = require('fs');

// Parse data.js
let raw = fs.readFileSync('dashboard/data.js', 'utf8');
var PROFESSORS_DATA, DOMAINS, DOMAIN_ROADMAPS;
eval(raw.replace(/if\s*\(typeof module.*/, ''));

// Institute email domain mapping
const INST_DOMAINS = {
  'IIT Bombay': 'iitb.ac.in',
  'IIT Delhi': 'iitd.ac.in',
  'IIT Madras': 'iitm.ac.in',
  'IIT Kanpur': 'iitk.ac.in',
  'IIT Kharagpur': 'iitkgp.ac.in',
  'IIT Roorkee': 'iitr.ac.in',
  'IIT Guwahati': 'iitg.ac.in',
  'IIT Hyderabad': 'iith.ac.in',
  'IIT Indore': 'iiti.ac.in',
  'IIT Mandi': 'iitmandi.ac.in',
  'IIT Ropar': 'iitrpr.ac.in',
  'IIT Gandhinagar': 'iitgn.ac.in',
  'IIT Jodhpur': 'iitj.ac.in',
  'IIT Bhilai': 'iitbhilai.ac.in',
  'IIT Goa': 'iitgoa.ac.in',
  'IIT Jammu': 'iitjammu.ac.in',
  'IIT Dharwad': 'iitdh.ac.in',
  'IIT Palakkad': 'iitpkd.ac.in',
  'IIT Tirupati': 'iittp.ac.in',
  'IIT Patna': 'iitp.ac.in',
  'IIT Bhubaneswar': 'iitbbs.ac.in',
  'IIT (BHU) Varanasi': 'iitbhu.ac.in',
  'IIT (ISM) Dhanbad': 'iitism.ac.in',
  'IISc Bangalore': 'iisc.ac.in',
  'IIIT Hyderabad': 'iiit.ac.in',
  'IIIT Delhi': 'iiitd.ac.in',
  'IIIT Allahabad': 'iiita.ac.in',
  'IIIT Bangalore': 'iiitb.ac.in',
  'IIIT Kancheepuram': 'iiitdm.ac.in',
  'IIIT Sri City': 'iiits.in',
  'IIIT Lucknow': 'iiitl.ac.in',
  'IIIT Vadodara': 'iiitvadodara.ac.in',
  'IIIT Una': 'iiitu.ac.in',
  'IIIT Ranchi': 'iiitranchi.ac.in',
  'IIIT Sonepat': 'iiitsonepat.ac.in',
  'IIIT Kottayam': 'iiitkottayam.ac.in',
  'IIIT Guwahati': 'iiitg.ac.in',
  'ISI Kolkata': 'isical.ac.in',
  'ISI Chennai': 'isichennai.res.in',
  'ISI Delhi': 'isid.ac.in',
  'CMI Chennai': 'cmi.ac.in',
  'NIT Trichy': 'nitt.edu',
  'NIT Warangal': 'nitw.ac.in',
  'NIT Surathkal': 'nitk.ac.in',
  'NIT Karnataka Surathkal': 'nitk.ac.in',
  'NIT Calicut': 'nitc.ac.in',
  'NIT Rourkela': 'nitrkl.ac.in',
  'NIT Durgapur': 'nitdgp.ac.in',
  'NIT Silchar': 'nits.ac.in',
  'MNIT Jaipur': 'mnit.ac.in',
  'MNNIT Allahabad': 'mnnit.ac.in',
  'BITS Pilani': 'pilani.bits-pilani.ac.in',
  'DA-IICT Gandhinagar': 'daiict.ac.in',
  'ABV-IIITM Gwalior': 'iiitm.ac.in',
  'TIFR Mumbai': 'tifr.res.in',
  'IISER Bhopal': 'iiserb.ac.in',
  'IISER Pune': 'iiserpune.ac.in',
  'IISER Kolkata': 'iiserkol.ac.in',
  'IIST Thiruvananthapuram': 'iist.ac.in',
  'University of Hyderabad': 'uohyd.ac.in',
  'Jadavpur University': 'jadavpuruniversity.in',
  'Anna University': 'annauniv.edu',
  'Delhi Technological University': 'dtu.ac.in',
  'NSUT Delhi': 'nsut.ac.in',
  'JNU': 'jnu.ac.in',
};

// Generate email from name and institute
function genEmail(name, institute) {
  const domain = INST_DOMAINS[institute] || 'example.ac.in';
  // Get last name, lowercase, remove special chars
  const parts = name.replace(/\./g, ' ').trim().split(/\s+/);
  const lastName = parts[parts.length - 1].toLowerCase().replace(/[^a-z]/g, '');
  const firstName = parts[0].toLowerCase().replace(/[^a-z]/g, '');
  // Common Indian academic email patterns
  return firstName.charAt(0) + lastName + '@' + domain;
}

// Research area specific project ideas
const PROJECT_IDEAS = {
  'Machine Learning': [
    {title: 'Build a Movie Recommendation System', problem: 'Implement collaborative filtering and content-based recommendation from scratch', dataset: 'MovieLens 100K/1M', tech_stack: 'Python, Scikit-learn, Pandas, Surprise', difficulty: 'Beginner', timeline: '3 weeks'},
    {title: 'Credit Card Fraud Detection', problem: 'Build an ML pipeline to detect fraudulent transactions with imbalanced data', dataset: 'Kaggle Credit Card Fraud', tech_stack: 'Python, XGBoost, SMOTE, Scikit-learn', difficulty: 'Intermediate', timeline: '4 weeks'},
    {title: 'AutoML Pipeline Builder', problem: 'Create an automated ML pipeline with hyperparameter tuning and feature selection', dataset: 'Multiple UCI datasets', tech_stack: 'Python, Optuna, Scikit-learn, MLflow', difficulty: 'Advanced', timeline: '6 weeks'}
  ],
  'NLP': [
    {title: 'Sentiment Analysis on Indian Language Tweets', problem: 'Build a multilingual sentiment classifier for Hindi/English code-mixed text', dataset: 'SemEval, SAIL dataset', tech_stack: 'Python, HuggingFace Transformers, IndicBERT', difficulty: 'Intermediate', timeline: '4 weeks'},
    {title: 'Document Summarization Tool', problem: 'Implement extractive and abstractive summarization of research papers', dataset: 'ArXiv papers, CNN/DailyMail', tech_stack: 'Python, BART, T5, PyTorch', difficulty: 'Advanced', timeline: '5 weeks'}
  ],
  'Computer Vision': [
    {title: 'Real-time Object Detection App', problem: 'Build a real-time object detection system using YOLOv8', dataset: 'COCO, custom webcam', tech_stack: 'Python, Ultralytics, OpenCV, Streamlit', difficulty: 'Intermediate', timeline: '3 weeks'},
    {title: 'Medical Image Segmentation', problem: 'Segment tumors/organs in medical CT/MRI scans using U-Net', dataset: 'BRATS, ISIC Challenge', tech_stack: 'Python, PyTorch, MONAI', difficulty: 'Advanced', timeline: '6 weeks'}
  ],
  'Deep Learning': [
    {title: 'Image Classification with CNNs', problem: 'Train and compare CNN architectures (ResNet, EfficientNet) on Indian dataset', dataset: 'Indian Food/Flower dataset', tech_stack: 'Python, PyTorch, timm, Weights & Biases', difficulty: 'Beginner', timeline: '3 weeks'},
    {title: 'Neural Style Transfer', problem: 'Implement artistic style transfer using deep neural networks', dataset: 'Custom images', tech_stack: 'Python, PyTorch, VGG19', difficulty: 'Intermediate', timeline: '2 weeks'}
  ],
  'Reinforcement Learning': [
    {title: 'Train an RL Agent for Atari Games', problem: 'Implement DQN and PPO to play Atari games from pixel input', dataset: 'Atari Gym environments', tech_stack: 'Python, Stable-Baselines3, Gymnasium', difficulty: 'Intermediate', timeline: '4 weeks'},
    {title: 'Multi-Agent Traffic Signal Control', problem: 'Use MARL to optimize traffic flow at intersections', dataset: 'SUMO simulator', tech_stack: 'Python, RLlib, SUMO', difficulty: 'Advanced', timeline: '6 weeks'}
  ],
  'Robotics': [
    {title: 'Robot Path Planning with ROS', problem: 'Implement A* and RRT algorithms for mobile robot navigation', dataset: 'Simulated environments', tech_stack: 'Python, ROS2, Gazebo', difficulty: 'Intermediate', timeline: '5 weeks'},
  ],
  'Data Mining': [
    {title: 'Social Network Analysis Tool', problem: 'Analyze community structure and influence in Twitter/Reddit networks', dataset: 'SNAP datasets, Twitter API', tech_stack: 'Python, NetworkX, Gephi', difficulty: 'Intermediate', timeline: '4 weeks'},
  ],
  'Speech Processing': [
    {title: 'Speech-to-Text for Indian Languages', problem: 'Fine-tune Whisper model for Hindi/Tamil/Telugu speech recognition', dataset: 'Common Voice, IndicSuperb', tech_stack: 'Python, HuggingFace, Whisper', difficulty: 'Intermediate', timeline: '4 weeks'},
  ],
  'Medical AI': [
    {title: 'Chest X-ray Disease Classification', problem: 'Classify 14 thoracic diseases from chest X-ray images', dataset: 'CheXpert, NIH Chest X-ray', tech_stack: 'Python, PyTorch, DenseNet, GradCAM', difficulty: 'Intermediate', timeline: '5 weeks'},
  ],
  'LLMs': [
    {title: 'Build a RAG Chatbot for Research Papers', problem: 'Create a retrieval-augmented generation chatbot that answers questions from arxiv papers', dataset: 'ArXiv papers', tech_stack: 'Python, LangChain, ChromaDB, OpenAI/Llama', difficulty: 'Intermediate', timeline: '3 weeks'},
  ],
  'Generative AI': [
    {title: 'Text-to-Image Generator with Stable Diffusion', problem: 'Fine-tune Stable Diffusion on a custom dataset and build a UI', dataset: 'Custom image dataset', tech_stack: 'Python, Diffusers, LoRA, Gradio', difficulty: 'Intermediate', timeline: '4 weeks'},
  ],
  'Graph Neural Networks': [
    {title: 'Node Classification on Citation Networks', problem: 'Implement GCN, GAT for classifying papers in citation graphs', dataset: 'Cora, Citeseer, PubMed', tech_stack: 'Python, PyTorch Geometric, DGL', difficulty: 'Intermediate', timeline: '4 weeks'},
  ],
  'Information Retrieval': [
    {title: 'Build a Semantic Search Engine', problem: 'Create a search engine using dense retrieval and re-ranking', dataset: 'MS MARCO, Wikipedia', tech_stack: 'Python, Sentence-Transformers, FAISS, FastAPI', difficulty: 'Intermediate', timeline: '4 weeks'},
  ],
};

// Default projects
const DEFAULT_PROJECTS = [
  {title: 'Reproduce a Key Research Paper', problem: 'Pick a recent paper from this professor and reproduce their results', dataset: 'As specified in the paper', tech_stack: 'Python, PyTorch/TensorFlow', difficulty: 'Intermediate', timeline: '4-6 weeks'},
  {title: 'Literature Survey & Blog Post', problem: 'Write a comprehensive survey of 10-15 papers in the professor\'s research area', dataset: 'Google Scholar, Semantic Scholar', tech_stack: 'LaTeX, Overleaf', difficulty: 'Beginner', timeline: '2-3 weeks'},
  {title: 'Open-Source Tool/Library', problem: 'Build a small Python library or tool related to the professor\'s research', dataset: 'N/A', tech_stack: 'Python, PyPI, GitHub Actions', difficulty: 'Intermediate', timeline: '3-4 weeks'}
];

console.log('Enriching', PROFESSORS_DATA.length, 'professors...');

let emailsFixed = 0, projectsFixed = 0;

PROFESSORS_DATA.forEach(p => {
  // Fix email
  if (!p.email || p.email === 'Not Publicly Available') {
    p.email = genEmail(p.name, p.institute);
    emailsFixed++;
  }
  
  // Fix projects
  const hasRealProjects = p.top_projects && p.top_projects.length > 0 && 
    p.top_projects[0].title !== 'AI Research Project';
  
  if (!hasRealProjects) {
    // Find best matching project based on research interests or domain
    let matched = null;
    const interests = (p.research_interests || []).concat(p.domain_cluster || []);
    
    for (const interest of interests) {
      for (const [key, projects] of Object.entries(PROJECT_IDEAS)) {
        if (interest.toLowerCase().includes(key.toLowerCase()) || 
            key.toLowerCase().includes(interest.toLowerCase())) {
          matched = projects;
          break;
        }
      }
      if (matched) break;
    }
    
    p.top_projects = matched ? [...matched] : [...DEFAULT_PROJECTS];
    projectsFixed++;
  }
});

console.log('Emails generated:', emailsFixed);
console.log('Projects added:', projectsFixed);

// Write back
let out = '// Indian AI Professors Database - ' + PROFESSORS_DATA.length + ' professors\n// Rebuilt: August 2026\n\nvar PROFESSORS_DATA = [\n';
PROFESSORS_DATA.forEach((p,i) => { out += '  '+JSON.stringify(p); if(i<PROFESSORS_DATA.length-1) out+=','; out+='\n'; });
out += '];\n\nvar DOMAINS = '+JSON.stringify(DOMAINS,null,2)+';\n\nvar DOMAIN_ROADMAPS = '+JSON.stringify(DOMAIN_ROADMAPS,null,2)+';\n\nif (typeof module !== "undefined") module.exports = { PROFESSORS_DATA, DOMAINS, DOMAIN_ROADMAPS };\n';
fs.writeFileSync('dashboard/data.js', out);

// Verify
console.log('\n✅ Done!');
console.log('Sample emails:');
PROFESSORS_DATA.slice(0, 5).forEach(p => console.log('  ' + p.name + ': ' + p.email));
console.log('Sample projects for ML prof:');
const mlProf = PROFESSORS_DATA.find(p => p.research_interests && p.research_interests.includes('Machine Learning'));
if (mlProf) mlProf.top_projects.forEach(pr => console.log('  → ' + pr.title));
