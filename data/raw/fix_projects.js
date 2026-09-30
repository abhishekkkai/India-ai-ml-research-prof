const fs = require('fs');
eval(fs.readFileSync('dashboard/data.js', 'utf8').replace(/if\s*\(typeof module.*/, ''));

const FIXES = {
  'Medical AI System': [
    {title: 'Chest X-ray Disease Classification', problem: 'Classify 14 thoracic diseases from chest X-ray images using DenseNet with GradCAM explanations', dataset: 'CheXpert, NIH Chest X-ray', tech_stack: 'Python, PyTorch, DenseNet, GradCAM', difficulty: 'Intermediate', timeline: '5 weeks'},
    {title: 'ECG Arrhythmia Detection', problem: 'Build a 1D CNN to detect cardiac arrhythmias from ECG signals', dataset: 'PhysioNet MIT-BIH', tech_stack: 'Python, PyTorch, scipy', difficulty: 'Intermediate', timeline: '4 weeks'}
  ],
  'Graph Neural Networks System': [
    {title: 'Node Classification on Citation Networks', problem: 'Implement GCN, GAT for classifying papers in citation graphs', dataset: 'Cora, Citeseer, PubMed', tech_stack: 'Python, PyTorch Geometric, DGL', difficulty: 'Intermediate', timeline: '4 weeks'},
    {title: 'Social Network Link Prediction', problem: 'Predict future connections in social networks using GNN embeddings', dataset: 'Facebook, Twitter SNAP graphs', tech_stack: 'Python, PyTorch Geometric', difficulty: 'Intermediate', timeline: '4 weeks'}
  ],
  'AI Security System': [
    {title: 'Adversarial Attack & Defense Framework', problem: 'Implement FGSM, PGD attacks and adversarial training defenses on image classifiers', dataset: 'CIFAR-10, ImageNet subset', tech_stack: 'Python, PyTorch, CleverHans', difficulty: 'Advanced', timeline: '5 weeks'},
    {title: 'Differential Privacy in ML', problem: 'Train a model with DP-SGD and measure privacy-utility tradeoffs', dataset: 'MNIST, CIFAR', tech_stack: 'Python, Opacus, PyTorch', difficulty: 'Advanced', timeline: '4 weeks'}
  ],
  'Optimization System': [
    {title: 'Hyperparameter Optimization Benchmark', problem: 'Compare Bayesian optimization, random search, and evolutionary methods on ML tasks', dataset: 'Multiple Kaggle datasets', tech_stack: 'Python, Optuna, SMAC, scikit-learn', difficulty: 'Intermediate', timeline: '4 weeks'}
  ],
  'Bioinformatics System': [
    {title: 'Protein Structure Prediction', problem: 'Implement a simplified protein folding predictor using graph neural networks', dataset: 'PDB, ProteinNet', tech_stack: 'Python, PyTorch Geometric, BioPython', difficulty: 'Advanced', timeline: '6 weeks'}
  ],
  'Signal Processing System': [
    {title: 'Audio Event Detection System', problem: 'Build a CNN-based system to detect and classify environmental sounds', dataset: 'ESC-50, UrbanSound8K', tech_stack: 'Python, librosa, PyTorch', difficulty: 'Intermediate', timeline: '4 weeks'}
  ],
  'Information Retrieval System': [
    {title: 'Build a Semantic Search Engine', problem: 'Create a search engine using dense retrieval with bi-encoder and cross-encoder re-ranking', dataset: 'MS MARCO, Wikipedia', tech_stack: 'Python, Sentence-Transformers, FAISS, FastAPI', difficulty: 'Intermediate', timeline: '4 weeks'}
  ],
  'Federated Learning System': [
    {title: 'Federated Learning Simulator', problem: 'Implement FedAvg and FedProx on non-IID data distributions', dataset: 'CIFAR-10 partitioned', tech_stack: 'Python, Flower, PyTorch', difficulty: 'Advanced', timeline: '5 weeks'}
  ],
  'Knowledge Graphs System': [
    {title: 'Knowledge Graph Embedding', problem: 'Implement TransE, RotatE for link prediction on knowledge graphs', dataset: 'FB15k-237, WN18RR', tech_stack: 'Python, PyKEEN, PyTorch', difficulty: 'Intermediate', timeline: '4 weeks'}
  ],
  'Generative AI System': [
    {title: 'Text-to-Image with Stable Diffusion', problem: 'Fine-tune Stable Diffusion on a custom dataset with LoRA', dataset: 'Custom image dataset', tech_stack: 'Python, Diffusers, LoRA, Gradio', difficulty: 'Intermediate', timeline: '4 weeks'}
  ],
  'Agentic AI System': [
    {title: 'Build an AI Agent with Tool Use', problem: 'Create an LLM-powered agent that can browse the web, write code, and answer questions', dataset: 'N/A', tech_stack: 'Python, LangChain, OpenAI API, Tavily', difficulty: 'Intermediate', timeline: '3 weeks'}
  ],
  'Robotics System': [
    {title: 'Robot Path Planning with ROS', problem: 'Implement A* and RRT algorithms for mobile robot navigation in simulated environments', dataset: 'Simulated maps', tech_stack: 'Python, ROS2, Gazebo, Nav2', difficulty: 'Intermediate', timeline: '5 weeks'}
  ],
  'Speech Processing System': [
    {title: 'Speech Recognition for Indian Languages', problem: 'Fine-tune Whisper model for Hindi/Tamil/Telugu speech-to-text', dataset: 'Common Voice, IndicSuperb', tech_stack: 'Python, HuggingFace, Whisper', difficulty: 'Intermediate', timeline: '4 weeks'}
  ]
};

let fixed = 0;
PROFESSORS_DATA.forEach(p => {
  const title = p.top_projects?.[0]?.title;
  if (FIXES[title]) {
    p.top_projects = JSON.parse(JSON.stringify(FIXES[title]));
    fixed++;
  }
});
console.log('Fixed:', fixed);

let out = '// Indian AI Professors Database - ' + PROFESSORS_DATA.length + ' professors\n// Rebuilt: August 2026\n\nvar PROFESSORS_DATA = [\n';
PROFESSORS_DATA.forEach((p,i) => { out += '  '+JSON.stringify(p); if(i<PROFESSORS_DATA.length-1) out+=','; out+='\n'; });
out += '];\n\nvar DOMAINS = '+JSON.stringify(DOMAINS,null,2)+';\n\nvar DOMAIN_ROADMAPS = '+JSON.stringify(DOMAIN_ROADMAPS,null,2)+';\n\nif (typeof module !== "undefined") module.exports = { PROFESSORS_DATA, DOMAINS, DOMAIN_ROADMAPS };\n';
fs.writeFileSync('dashboard/data.js', out);
console.log('✅ All projects now have real detailed ideas!');
console.log('File:', (out.length/1024).toFixed(0), 'KB');
