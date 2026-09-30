const fs = require('fs');
eval(fs.readFileSync('dashboard/data.js', 'utf8').replace(/if\s*\(typeof module.*/, ''));

// Force update ALL professors with generic-titled projects
const ML_PROJECTS = [
  {title: 'Build a Movie Recommendation System', problem: 'Implement collaborative filtering and content-based recommendation from scratch', dataset: 'MovieLens 100K/1M', tech_stack: 'Python, Scikit-learn, Pandas, Surprise', difficulty: 'Beginner', timeline: '3 weeks'},
  {title: 'Credit Card Fraud Detection', problem: 'Build an ML pipeline to detect fraudulent transactions with imbalanced data', dataset: 'Kaggle Credit Card Fraud', tech_stack: 'Python, XGBoost, SMOTE, Scikit-learn', difficulty: 'Intermediate', timeline: '4 weeks'},
  {title: 'AutoML Pipeline Builder', problem: 'Create an automated ML pipeline with hyperparameter tuning and feature selection', dataset: 'Multiple UCI datasets', tech_stack: 'Python, Optuna, Scikit-learn, MLflow', difficulty: 'Advanced', timeline: '6 weeks'}
];
const NLP_PROJECTS = [
  {title: 'Sentiment Analysis on Indian Language Tweets', problem: 'Build a multilingual sentiment classifier for Hindi/English code-mixed text', dataset: 'SemEval, SAIL dataset', tech_stack: 'Python, HuggingFace Transformers, IndicBERT', difficulty: 'Intermediate', timeline: '4 weeks'},
  {title: 'Research Paper Summarizer', problem: 'Implement extractive and abstractive summarization of arxiv papers', dataset: 'ArXiv papers, CNN/DailyMail', tech_stack: 'Python, BART, T5, PyTorch', difficulty: 'Advanced', timeline: '5 weeks'},
  {title: 'Build a RAG Chatbot', problem: 'Create a retrieval-augmented chatbot that answers questions from research papers', dataset: 'ArXiv papers', tech_stack: 'Python, LangChain, ChromaDB, Llama', difficulty: 'Intermediate', timeline: '3 weeks'}
];
const CV_PROJECTS = [
  {title: 'Real-time Object Detection App', problem: 'Build a real-time object detection system using YOLOv8 with a web UI', dataset: 'COCO, custom webcam', tech_stack: 'Python, Ultralytics, OpenCV, Streamlit', difficulty: 'Intermediate', timeline: '3 weeks'},
  {title: 'Medical Image Segmentation', problem: 'Segment tumors/organs in medical CT/MRI scans using U-Net variants', dataset: 'BRATS, ISIC Challenge', tech_stack: 'Python, PyTorch, MONAI', difficulty: 'Advanced', timeline: '6 weeks'},
  {title: 'Image Super-Resolution', problem: 'Implement ESRGAN/SwinIR for upscaling low-resolution images', dataset: 'DIV2K, Set5', tech_stack: 'Python, PyTorch, BasicSR', difficulty: 'Intermediate', timeline: '4 weeks'}
];
const RL_PROJECTS = [
  {title: 'Train RL Agent for Atari Games', problem: 'Implement DQN and PPO to play Atari games from pixel input', dataset: 'Atari Gym environments', tech_stack: 'Python, Stable-Baselines3, Gymnasium', difficulty: 'Intermediate', timeline: '4 weeks'},
  {title: 'Multi-Agent Traffic Signal Control', problem: 'Use multi-agent RL to optimize traffic flow at intersections', dataset: 'SUMO traffic simulator', tech_stack: 'Python, RLlib, SUMO', difficulty: 'Advanced', timeline: '6 weeks'}
];
const DEFAULT_PROJECTS = [
  {title: 'Reproduce a Key Research Paper', problem: 'Pick a recent paper from this professor, reproduce results, and write a blog post', dataset: 'As specified in the paper', tech_stack: 'Python, PyTorch/TensorFlow', difficulty: 'Intermediate', timeline: '4-6 weeks'},
  {title: 'Build an End-to-End ML Pipeline', problem: 'Design a complete ML pipeline: data collection, EDA, feature engineering, model training, and deployment', dataset: 'Kaggle competition dataset', tech_stack: 'Python, Scikit-learn, FastAPI, Docker', difficulty: 'Intermediate', timeline: '4 weeks'},
  {title: 'Open-Source Research Tool', problem: 'Build a small Python library or tool related to the professor\'s research area', dataset: 'N/A', tech_stack: 'Python, PyPI, GitHub Actions, pytest', difficulty: 'Intermediate', timeline: '3-4 weeks'}
];

const LOOKUP = {
  'nlp': NLP_PROJECTS, 'natural language': NLP_PROJECTS, 'text mining': NLP_PROJECTS, 'language': NLP_PROJECTS,
  'speech': NLP_PROJECTS, 'llm': NLP_PROJECTS, 'large language': NLP_PROJECTS,
  'computer vision': CV_PROJECTS, 'image': CV_PROJECTS, 'video': CV_PROJECTS, 'visual': CV_PROJECTS, 'object detection': CV_PROJECTS,
  'reinforcement': RL_PROJECTS, 'robotics': RL_PROJECTS, 'autonomous': RL_PROJECTS,
  'machine learning': ML_PROJECTS, 'data mining': ML_PROJECTS, 'deep learning': ML_PROJECTS,
  'neural': ML_PROJECTS, 'classification': ML_PROJECTS, 'regression': ML_PROJECTS,
};

let updated = 0;
PROFESSORS_DATA.forEach(p => {
  // Check if projects need updating (generic titles)
  const needsUpdate = !p.top_projects || p.top_projects.length === 0 || 
    ['AI Research Project', 'NLP System', 'Machine Learning System', 'Computer Vision System',
     'Deep Learning System', 'Reinforcement Learning System', 'Data Mining System',
     'Signal Processing System', 'Speech Processing System', 'Robotics System']
    .includes(p.top_projects[0]?.title);
  
  if (needsUpdate) {
    const allTerms = [...(p.research_interests || []), ...(p.domain_cluster || [])].map(s => s.toLowerCase());
    let matched = null;
    for (const term of allTerms) {
      for (const [key, projects] of Object.entries(LOOKUP)) {
        if (term.includes(key) || key.includes(term)) {
          matched = projects;
          break;
        }
      }
      if (matched) break;
    }
    p.top_projects = matched ? JSON.parse(JSON.stringify(matched)) : JSON.parse(JSON.stringify(DEFAULT_PROJECTS));
    updated++;
  }
});

console.log('Updated projects for:', updated, 'professors');

// Write
let out = '// Indian AI Professors Database - ' + PROFESSORS_DATA.length + ' professors\n// Rebuilt: August 2026\n\nvar PROFESSORS_DATA = [\n';
PROFESSORS_DATA.forEach((p,i) => { out += '  '+JSON.stringify(p); if(i<PROFESSORS_DATA.length-1) out+=','; out+='\n'; });
out += '];\n\nvar DOMAINS = '+JSON.stringify(DOMAINS,null,2)+';\n\nvar DOMAIN_ROADMAPS = '+JSON.stringify(DOMAIN_ROADMAPS,null,2)+';\n\nif (typeof module !== "undefined") module.exports = { PROFESSORS_DATA, DOMAINS, DOMAIN_ROADMAPS };\n';
fs.writeFileSync('dashboard/data.js', out);

console.log('\n✅ All projects enriched!');
console.log('Samples:');
PROFESSORS_DATA.slice(0, 8).forEach(p => {
  console.log('  ' + p.name + ' (' + p.institute + ')');
  console.log('    Email: ' + p.email);
  console.log('    Projects: ' + p.top_projects.map(pr => pr.title).join(' | '));
});
