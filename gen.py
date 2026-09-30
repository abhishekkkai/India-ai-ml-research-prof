import json

professors = [
    {
        "name": "Pushpak Bhattacharyya",
        "research_summary": "His research focuses heavily on Natural Language Processing (NLP), Machine Translation, and Cross-Lingual Information Retrieval. He is particularly renowned for his foundational work on Indian language processing, creating IndoWordNet, and advancing Sentiment Analysis.",
        "key_papers": [
            "IndoWordNet: A lexical knowledgebase of Indian languages",
            "A sentiment analysis paradigm for Indian languages"
        ],
        "how_to_read": "Start with [IndoWordNet: A lexical knowledgebase of Indian languages], then read [A sentiment analysis paradigm for Indian languages]. Follow their Google Scholar for latest work.",
        "project_for_you": {
            "title": "Cross-Lingual Sentiment Analyzer for Indian Languages",
            "description": "Build a sentiment classification model that leverages aligned word embeddings to transfer knowledge from resource-rich languages to regional Indian languages.",
            "tech_stack": ["Python", "PyTorch", "HuggingFace Transformers", "IndicNLP"]
        }
    },
    {
        "name": "Sunita Sarawagi",
        "research_summary": "Her work centers on Information Extraction, sequence labeling, and continuous learning. She is famous for her fundamental contributions to Conditional Random Fields (CRFs) and domain adaptation techniques in Machine Learning.",
        "key_papers": [
            "Semi-Markov Conditional Random Fields for Information Extraction",
            "Domain Adaptation for Sequence Labeling"
        ],
        "how_to_read": "Start with [Semi-Markov Conditional Random Fields for Information Extraction], then read [Domain Adaptation for Sequence Labeling]. Follow their Google Scholar for latest work.",
        "project_for_you": {
            "title": "Adaptive NER for Specialized Domains",
            "description": "Develop a Named Entity Recognition system that dynamically adapts to new, unseen domains with minimal labeled data using meta-learning.",
            "tech_stack": ["Python", "Transformers", "spaCy", "Scikit-Learn"]
        }
    },
    {
        "name": "Ganesh Ramakrishnan",
        "research_summary": "He researches human-in-the-loop Machine Learning, relational learning, and active learning. A core theme of his work is optimizing data labeling and subset selection for efficient model training.",
        "key_papers": [
            "Data Subset Selection for Efficient Model Training",
            "Human-in-the-loop Machine Learning Paradigm"
        ],
        "how_to_read": "Start with [Data Subset Selection for Efficient Model Training], then read [Human-in-the-loop Machine Learning Paradigm]. Follow their Google Scholar for latest work.",
        "project_for_you": {
            "title": "Active Learning Annotation Tool",
            "description": "Create an interactive tool that selects the most informative data samples for humans to label, accelerating the training of text classifiers.",
            "tech_stack": ["Python", "Flask", "PyTorch", "Active Learning Frameworks"]
        }
    },
    {
        "name": "Preethi Jyothi",
        "research_summary": "Her research is in speech processing and automatic speech recognition (ASR), with a strong focus on handling low-resource languages and accented speech. She explores ways to build robust speech models without massive labeled datasets.",
        "key_papers": [
            "Transliteration based Data Augmentation for Low-resource ASR",
            "Acoustic Modeling for Accented Speech"
        ],
        "how_to_read": "Start with [Transliteration based Data Augmentation for Low-resource ASR], then read [Acoustic Modeling for Accented Speech]. Follow their Google Scholar for latest work.",
        "project_for_you": {
            "title": "Accented Speech Recognizer",
            "description": "Fine-tune an open-source ASR model (like Wav2Vec 2.0) to accurately transcribe heavily accented regional Indian English using minimal audio samples.",
            "tech_stack": ["Python", "Torchaudio", "HuggingFace", "Librosa"]
        }
    },
    {
        "name": "Shivaram Kalyanakrishnan",
        "research_summary": "He explores Reinforcement Learning (RL), multi-armed bandits, and multi-agent systems. His theoretical contributions emphasize Probably Approximately Correct (PAC) bounds and efficient exploration strategies in AI.",
        "key_papers": [
            "PAC Subset Selection in Stochastic Multi-armed Bandits",
            "Efficient Exploration in Multi-Agent Reinforcement Learning"
        ],
        "how_to_read": "Start with [PAC Subset Selection in Stochastic Multi-armed Bandits], then read [Efficient Exploration in Multi-Agent Reinforcement Learning]. Follow their Google Scholar for latest work.",
        "project_for_you": {
            "title": "Multi-Armed Bandit Recommender",
            "description": "Implement a content recommendation engine using Thompson Sampling and UCB algorithms that balances exploration of new content with exploitation of popular items.",
            "tech_stack": ["Python", "NumPy", "OpenAI Gym", "Matplotlib"]
        }
    },
    {
        "name": "Soumen Chakrabarti",
        "research_summary": "His expertise lies in information retrieval, web search, and knowledge graph mining. He pioneered focused web crawling and continues to innovate in entity linking and representation learning on graphs.",
        "key_papers": [
            "Focused crawling: a new approach to topic-specific Web resource discovery",
            "Joint Learning of Entity and Word Embeddings"
        ],
        "how_to_read": "Start with [Focused crawling: a new approach to topic-specific Web resource discovery], then read [Joint Learning of Entity and Word Embeddings]. Follow their Google Scholar for latest work.",
        "project_for_you": {
            "title": "Entity-Linked Knowledge Graph Explorer",
            "description": "Build a pipeline that extracts text from news articles and links recognized entities to Wikipedia/Wikidata nodes using graph embeddings.",
            "tech_stack": ["Python", "NetworkX", "Transformers", "Wikidata API"]
        }
    },
    {
        "name": "Amit Sethi",
        "research_summary": "He applies Computer Vision and Deep Learning to medical image analysis, particularly in computational pathology. His algorithms help in cancer grading, prognosis prediction, and understanding tumor microenvironments.",
        "key_papers": [
            "Deep Learning for Computational Pathology",
            "Automated Cancer Grading from Histopathology Images"
        ],
        "how_to_read": "Start with [Deep Learning for Computational Pathology], then read [Automated Cancer Grading from Histopathology Images]. Follow their Google Scholar for latest work.",
        "project_for_you": {
            "title": "Histopathology Image Classifier",
            "description": "Develop a CNN-based tool to classify patches of gigapixel Whole Slide Images (WSIs) into benign and malignant tumor regions.",
            "tech_stack": ["Python", "OpenSlide", "TensorFlow", "OpenCV"]
        }
    },
    {
        "name": "Suyash Awate",
        "research_summary": "His work concentrates on statistical medical image analysis and computer vision. He develops algorithms for image reconstruction, segmentation, and statistical shape modeling, primarily for clinical diagnostics.",
        "key_papers": [
            "Nonparametric Neighborhood Statistics for Ultrasound Images",
            "Statistical Shape Analysis for Medical Imaging"
        ],
        "how_to_read": "Start with [Nonparametric Neighborhood Statistics for Ultrasound Images], then read [Statistical Shape Analysis for Medical Imaging]. Follow their Google Scholar for latest work.",
        "project_for_you": {
            "title": "MRI Brain Segmentation Tool",
            "description": "Implement a 3D U-Net to automatically segment brain tissues and lesions from MRI volumetric data.",
            "tech_stack": ["Python", "MONAI", "PyTorch", "Nibabel"]
        }
    },
    {
        "name": "Abir De",
        "research_summary": "He researches Temporal Point Processes and Graph NNs. His work focuses on modeling discrete events over time, influence maximization in social networks, and structured representation learning.",
        "key_papers": [
            "Learning Temporal Point Processes with Recurrent Neural Networks",
            "Influence Maximization in Dynamic Networks"
        ],
        "how_to_read": "Start with [Learning Temporal Point Processes with Recurrent Neural Networks], then read [Influence Maximization in Dynamic Networks]. Follow their Google Scholar for latest work.",
        "project_for_you": {
            "title": "Social Network Information Cascade Predictor",
            "description": "Model and predict how a piece of information or rumor spreads over time across a social network using graph neural networks.",
            "tech_stack": ["Python", "PyTorch Geometric", "NetworkX"]
        }
    },
    {
        "name": "Ajit Rajwade",
        "research_summary": "His expertise lies in compressive sensing, computational photography, and inverse problems in imaging. He develops mathematical techniques to reconstruct high-quality images from sparse or degraded sensor data.",
        "key_papers": [
            "Image Denoising using Compressive Sensing",
            "Coded Exposure Imaging for Motion Blur Removal"
        ],
        "how_to_read": "Start with [Image Denoising using Compressive Sensing], then read [Coded Exposure Imaging for Motion Blur Removal]. Follow their Google Scholar for latest work.",
        "project_for_you": {
            "title": "Sparse Image Reconstruction Engine",
            "description": "Create an algorithm that reconstructs a full high-resolution image from only 20% of its randomly sampled pixels using compressive sensing optimization.",
            "tech_stack": ["Python", "SciPy", "OpenCV", "CVXPY"]
        }
    },
    {
        "name": "Chiranjib Bhattacharyya",
        "research_summary": "His research deals with Machine Learning, robust optimization, and kernel methods. He explores the intersection of optimization theory and its practical applications in bioinformatics and scalable ML.",
        "key_papers": [
            "Robust Support Vector Machines",
            "Large Scale Kernel Methods for Bioinformatics"
        ],
        "how_to_read": "Start with [Robust Support Vector Machines], then read [Large Scale Kernel Methods for Bioinformatics]. Follow their Google Scholar for latest work.",
        "project_for_you": {
            "title": "Robust Outlier Detection with SVMs",
            "description": "Implement a custom kernelized SVM variant that is mathematically robust against heavily corrupted data and adversarial outliers.",
            "tech_stack": ["Python", "NumPy", "Scikit-Learn"]
        }
    },
    {
        "name": "Partha Pratim Talukdar",
        "research_summary": "He is a leading figure in Knowledge Graphs and NLP. His research involves information extraction, graph-based semi-supervised learning, and designing Graph Transformer Networks for relational reasoning.",
        "key_papers": [
            "Graph Transformer Networks",
            "Knowledge Graph Embedding for Link Prediction"
        ],
        "how_to_read": "Start with [Graph Transformer Networks], then read [Knowledge Graph Embedding for Link Prediction]. Follow their Google Scholar for latest work.",
        "project_for_you": {
            "title": "Fact-Checking with Knowledge Graphs",
            "description": "Construct an automated fact-checking system that verifies claims by predicting missing links in a factual knowledge graph using Graph Attention Networks.",
            "tech_stack": ["Python", "PyTorch Geometric", "DGL", "Transformers"]
        }
    },
    {
        "name": "R. Venkatesh Babu",
        "research_summary": "His work in Computer Vision heavily targets deep learning model compression, video analytics, and adversarial robustness. He creates neural networks that are both compact for edge deployment and highly resilient to adversarial attacks.",
        "key_papers": [
            "Data-Free Knowledge Distillation",
            "Adversarial Robustness via Defense Mechanisms"
        ],
        "how_to_read": "Start with [Data-Free Knowledge Distillation], then read [Adversarial Robustness via Defense Mechanisms]. Follow their Google Scholar for latest work.",
        "project_for_you": {
            "title": "Edge-Friendly Defended Vision Model",
            "description": "Compress a large ResNet model using knowledge distillation while simultaneously training it to resist Fast Gradient Sign Method (FGSM) adversarial attacks.",
            "tech_stack": ["Python", "PyTorch", "Torchvision", "CleverHans"]
        }
    },
    {
        "name": "Shalabh Bhatnagar",
        "research_summary": "His theoretical AI research focuses on stochastic approximation, reinforcement learning, and optimization. He has proposed several fundamental actor-critic algorithms and schemes for optimizing complex, uncertain systems.",
        "key_papers": [
            "Actor-Critic Algorithms for Reinforcement Learning",
            "Stochastic Approximation Algorithms for Optimization"
        ],
        "how_to_read": "Start with [Actor-Critic Algorithms for Reinforcement Learning], then read [Stochastic Approximation Algorithms for Optimization]. Follow their Google Scholar for latest work.",
        "project_for_you": {
            "title": "Custom Actor-Critic RL Environment solver",
            "description": "Build an agent from scratch that learns to solve a continuous control task (like LunarLanderContinuous) using a custom implementation of the Actor-Critic algorithm.",
            "tech_stack": ["Python", "Gymnasium", "PyTorch", "NumPy"]
        }
    },
    {
        "name": "Soma Biswas",
        "research_summary": "Her domain is Computer Vision, specifically cross-modal retrieval, face recognition, and domain adaptation. She builds systems that can match images across different modalities, such as matching a sketch of a face to a photograph.",
        "key_papers": [
            "Cross-Modal Retrieval for Sketch-based Image Search",
            "Domain Adaptation for Face Recognition"
        ],
        "how_to_read": "Start with [Cross-Modal Retrieval for Sketch-based Image Search], then read [Domain Adaptation for Face Recognition]. Follow their Google Scholar for latest work.",
        "project_for_you": {
            "title": "Sketch-to-Photo Face Matching",
            "description": "Develop a dual-stream Siamese network that learns a common embedding space to accurately match hand-drawn facial sketches to real identity photos.",
            "tech_stack": ["Python", "PyTorch", "OpenCV", "Torchvision"]
        }
    },
    {
        "name": "Sriram Ganapathy",
        "research_summary": "He researches audio processing and speech recognition, often drawing inspiration from neuromorphic engineering. He works on biologically inspired auditory models for robust speech processing in noisy environments.",
        "key_papers": [
            "Neuromorphic Models for Speech Processing",
            "Robust Audio Feature Extraction in Noisy Environments"
        ],
        "how_to_read": "Start with [Neuromorphic Models for Speech Processing], then read [Robust Audio Feature Extraction in Noisy Environments]. Follow their Google Scholar for latest work.",
        "project_for_you": {
            "title": "Noise-Resilient Keyword Spotter",
            "description": "Implement a keyword spotting system that uses auditory filter banks inspired by human hearing to maintain accuracy in high-background-noise scenarios.",
            "tech_stack": ["Python", "Librosa", "TensorFlow", "Torchaudio"]
        }
    },
    {
        "name": "Y. Narahari",
        "research_summary": "His expertise bridges AI and microeconomics, focusing on mechanism design, game theory, and auctions. He models intelligent multi-agent scenarios where agents have conflicting interests, applying these to e-commerce and networks.",
        "key_papers": [
            "Game Theory and Mechanism Design for E-Commerce",
            "Auctions and Pricing in Multi-Agent Systems"
        ],
        "how_to_read": "Start with [Game Theory and Mechanism Design for E-Commerce], then read [Auctions and Pricing in Multi-Agent Systems]. Follow their Google Scholar for latest work.",
        "project_for_you": {
            "title": "Automated Bidding Agent Simulation",
            "description": "Build a simulation of an ad-exchange auction where reinforcement learning agents learn optimal bidding strategies using game-theoretic principles.",
            "tech_stack": ["Python", "Nashpy", "PettingZoo", "NumPy"]
        }
    },
    {
        "name": "Aditya Gopalan",
        "research_summary": "He specializes in online learning, multi-armed bandits, and sequential decision making. His theoretical models solve dynamic resource allocation and recommendation problems under uncertainty.",
        "key_papers": [
            "Online Learning and Multi-Armed Bandits",
            "Regret Bounds for Thompson Sampling"
        ],
        "how_to_read": "Start with [Online Learning and Multi-Armed Bandits], then read [Regret Bounds for Thompson Sampling]. Follow their Google Scholar for latest work.",
        "project_for_you": {
            "title": "Dynamic Content Allocator via Contextual Bandits",
            "description": "Create a contextual bandit algorithm that dynamically adjusts the layout of a web page based on real-time user click feedback to minimize regret.",
            "tech_stack": ["Python", "Vowpal Wabbit", "Pandas", "Scikit-Learn"]
        }
    },
    {
        "name": "Mausam",
        "research_summary": "His work spans Natural Language Processing, Open Information Extraction, and automated planning. He is recognized for co-developing seminal OpenIE systems and researching neuro-symbolic methods that combine neural networks with logic.",
        "key_papers": [
            "Open Language Learning for Information Extraction (OLLIE)",
            "Markov Decision Processes for Planning"
        ],
        "how_to_read": "Start with [Open Language Learning for Information Extraction (OLLIE)], then read [Markov Decision Processes for Planning]. Follow their Google Scholar for latest work.",
        "project_for_you": {
            "title": "OpenIE Relationship Extractor",
            "description": "Build an NLP pipeline that reads unstructured text and extracts structured (subject, predicate, object) triplets without relying on pre-defined schemas.",
            "tech_stack": ["Python", "spaCy", "Transformers", "StanfordNLP"]
        }
    },
    {
        "name": "Chetan Arora",
        "research_summary": "His research is in Computer Vision and Machine Learning, focusing on egocentric (first-person) vision, 3D vision, and making AI systems robust and efficient for practical real-world deployments.",
        "key_papers": [
            "Egocentric Video Summarization",
            "Robust 3D Vision and Reconstruction"
        ],
        "how_to_read": "Start with [Egocentric Video Summarization], then read [Robust 3D Vision and Reconstruction]. Follow their Google Scholar for latest work.",
        "project_for_you": {
            "title": "First-Person Action Summarizer",
            "description": "Develop a model that takes a long, continuous GoPro video and extracts the most important action frames to create a coherent visual summary.",
            "tech_stack": ["Python", "PyTorch", "OpenCV", "Kinetics Dataset"]
        }
    },
    {
        "name": "Parag Singla",
        "research_summary": "He is a prominent researcher in Neuro-Symbolic AI and Probabilistic Graphical Models. His work seamlessly integrates the logical reasoning capabilities of Markov Logic Networks with the representational power of Deep Learning.",
        "key_papers": [
            "Markov Logic Networks for Probabilistic Reasoning",
            "Neuro-Symbolic Integration for Relational Data"
        ],
        "how_to_read": "Start with [Markov Logic Networks for Probabilistic Reasoning], then read [Neuro-Symbolic Integration for Relational Data]. Follow their Google Scholar for latest work.",
        "project_for_you": {
            "title": "Logical Rule-Guided Neural Classifier",
            "description": "Create a hybrid AI model that classifies relationships between entities in an image, guided by explicit logical constraints (e.g., 'a person must ride a bike, not vice-versa').",
            "tech_stack": ["Python", "PyTorch", "ProbLog", "DeepProblog"]
        }
    },
    {
        "name": "Rohan Paul",
        "research_summary": "His work is at the intersection of Robotics and Natural Language Processing. He focuses on language grounding, enabling physical robots to understand human instructions and map them to real-world environments and actions.",
        "key_papers": [
            "Language Grounding for Robotic Manipulation",
            "Semantic SLAM and Navigation"
        ],
        "how_to_read": "Start with [Language Grounding for Robotic Manipulation], then read [Semantic SLAM and Navigation]. Follow their Google Scholar for latest work.",
        "project_for_you": {
            "title": "Instruction-Following Virtual Robot",
            "description": "Train an agent in a 3D simulation environment (like AI2-THOR) to navigate to a target object purely based on natural language spatial instructions.",
            "tech_stack": ["Python", "ROS", "AI2-THOR", "Transformers"]
        }
    },
    {
        "name": "Sayan Ranu",
        "research_summary": "His research focuses on Data Mining and Machine Learning on graph-structured data. He tackles problems in spatio-temporal network mining, trajectory routing, and discovering patterns in massive graph databases.",
        "key_papers": [
            "Graph Neural Networks for Spatio-Temporal Mining",
            "Frequent Subgraph Discovery in Large Networks"
        ],
        "how_to_read": "Start with [Graph Neural Networks for Spatio-Temporal Mining], then read [Frequent Subgraph Discovery in Large Networks]. Follow their Google Scholar for latest work.",
        "project_for_you": {
            "title": "Traffic Routing via Graph NNs",
            "description": "Utilize spatio-temporal Graph Neural Networks to predict traffic congestion in a city grid and suggest the optimal routing trajectories for vehicles.",
            "tech_stack": ["Python", "PyTorch Geometric", "Pandas", "OSMnx"]
        }
    },
    {
        "name": "Brejesh Lall",
        "research_summary": "He specializes in signal processing, multimedia analytics, and computer vision. His recent work applies deep learning architectures to improve biomedical imaging, remote sensing, and video processing.",
        "key_papers": [
            "Deep Learning for Biomedical Image Analysis",
            "Advanced Signal Processing for Multimedia"
        ],
        "how_to_read": "Start with [Deep Learning for Biomedical Image Analysis], then read [Advanced Signal Processing for Multimedia]. Follow their Google Scholar for latest work.",
        "project_for_you": {
            "title": "Biomedical Signal Denoiser",
            "description": "Construct an autoencoder to process noisy EEG/ECG signals and reconstruct clean, medically-analyzable waveforms.",
            "tech_stack": ["Python", "TensorFlow", "SciPy", "Matplotlib"]
        }
    },
    {
        "name": "Balaraman Ravindran",
        "research_summary": "A pioneer in Indian AI, his research heavily explores Reinforcement Learning, representation learning, and multi-agent systems. His foundational work involves Hierarchical RL and Semi-Markov Decision Processes (SMDPs).",
        "key_papers": [
            "Relativized Options for Hierarchical Reinforcement Learning",
            "Representation Learning for Complex Networks"
        ],
        "how_to_read": "Start with [Relativized Options for Hierarchical Reinforcement Learning], then read [Representation Learning for Complex Networks]. Follow their Google Scholar for latest work.",
        "project_for_you": {
            "title": "Hierarchical RL Navigation Agent",
            "description": "Implement a Hierarchical RL agent using 'Options' framework that learns high-level strategies (go to door) and low-level skills (move legs) in a maze environment.",
            "tech_stack": ["Python", "Ray RLlib", "PyTorch", "Gymnasium"]
        }
    },
    {
        "name": "Mitesh Khapra",
        "research_summary": "His research focuses on Deep Learning for Natural Language Processing, computer vision, and multimodal AI. He is a key driver of AI4Bharat, advancing state-of-the-art NLP models and translations for diverse Indian languages.",
        "key_papers": [
            "Samanantar: The Largest Publicly Available Parallel Corpora for Indic Languages",
            "Multimodal Deep Learning for Vision and Language"
        ],
        "how_to_read": "Start with [Samanantar: The Largest Publicly Available Parallel Corpora for Indic Languages], then read [Multimodal Deep Learning for Vision and Language]. Follow their Google Scholar for latest work.",
        "project_for_you": {
            "title": "Indic Visual Question Answering",
            "description": "Build a multimodal VQA system that takes an image and a question in Hindi, and outputs an accurate answer in Hindi by fusing vision and language embeddings.",
            "tech_stack": ["Python", "Transformers", "PyTorch", "OpenCV"]
        }
    },
    {
        "name": "Pratyush Kumar",
        "research_summary": "His work bridges efficient deep learning, NLP, and system architectures. Also a co-founder of AI4Bharat, he focuses on democratizing AI by building lightweight NLP models that can deploy efficiently on edge devices.",
        "key_papers": [
            "Efficient Deep Learning for Edge Devices",
            "IndicNLPSuite: Resources and Tools for Indian Languages"
        ],
        "how_to_read": "Start with [IndicNLPSuite: Resources and Tools for Indian Languages], then read [Efficient Deep Learning for Edge Devices]. Follow their Google Scholar for latest work.",
        "project_for_you": {
            "title": "Edge-Optimized Translation Model",
            "description": "Quantize and prune a heavy neural machine translation model so it can run efficiently and with low latency on mobile hardware.",
            "tech_stack": ["Python", "ONNX Runtime", "PyTorch Mobile", "Transformers"]
        }
    },
    {
        "name": "Kaushik Mitra",
        "research_summary": "His core research is computational imaging and deep optics. He develops AI algorithms that co-design camera hardware and software to capture images impossible with traditional lenses, like seeing through fog.",
        "key_papers": [
            "Deep Optics for Computational Imaging",
            "Seeing through Scattering Media"
        ],
        "how_to_read": "Start with [Deep Optics for Computational Imaging], then read [Seeing through Scattering Media]. Follow their Google Scholar for latest work.",
        "project_for_you": {
            "title": "Fog De-scattering Image Restorer",
            "description": "Train a generative model to reconstruct clear scenes from images heavily degraded by simulated fog and atmospheric scattering.",
            "tech_stack": ["Python", "PyTorch", "OpenCV", "Torchvision"]
        }
    },
    {
        "name": "A.N. Rajagopalan",
        "research_summary": "He researches image restoration, computational photography, and multi-view vision. His seminal work includes depth from defocus, motion deblurring, and solving complex underwater vision challenges.",
        "key_papers": [
            "Depth from Defocus via Markov Random Fields",
            "Motion Deblurring and Image Restoration"
        ],
        "how_to_read": "Start with [Depth from Defocus via Markov Random Fields], then read [Motion Deblurring and Image Restoration]. Follow their Google Scholar for latest work.",
        "project_for_you": {
            "title": "Dynamic Motion Deblurrer",
            "description": "Implement an end-to-end deep learning pipeline that removes non-uniform motion blur from fast-moving objects in a static scene.",
            "tech_stack": ["Python", "PyTorch", "Keras", "OpenCV"]
        }
    },
    {
        "name": "Piyush Rai",
        "research_summary": "His research deals with Bayesian Machine Learning, generative models, and zero-shot learning. He builds probabilistic models that quantify uncertainty, allowing AI to learn efficiently from very few examples.",
        "key_papers": [
            "Bayesian Zero-Shot Learning",
            "Deep Generative Models for Multi-view Learning"
        ],
        "how_to_read": "Start with [Bayesian Zero-Shot Learning], then read [Deep Generative Models for Multi-view Learning]. Follow their Google Scholar for latest work.",
        "project_for_you": {
            "title": "Bayesian Few-Shot Image Classifier",
            "description": "Create a Bayesian Neural Network that classifies rare classes and explicitly outputs its uncertainty (confidence intervals) for out-of-distribution data.",
            "tech_stack": ["Python", "TensorFlow Probability", "Pyro", "PyTorch"]
        }
    },
    {
        "name": "Ashutosh Modi",
        "research_summary": "He researches NLP, affective computing, and conversational AI. His models focus on understanding human emotions, humor, and complex discourse in text to create more empathetic and natural dialogue systems.",
        "key_papers": [
            "Affective Computing and Emotion Recognition in Text",
            "Conversational AI for Empathic Dialogues"
        ],
        "how_to_read": "Start with [Affective Computing and Emotion Recognition in Text], then read [Conversational AI for Empathic Dialogues]. Follow their Google Scholar for latest work.",
        "project_for_you": {
            "title": "Empathetic Chatbot Engine",
            "description": "Fine-tune a language model to not only answer queries but detect the user's emotional state from text and adjust its response tone accordingly.",
            "tech_stack": ["Python", "HuggingFace Transformers", "NLTK", "Flask"]
        }
    },
    {
        "name": "Vipul Arora",
        "research_summary": "His expertise covers speech processing, audio source separation, and music information retrieval. He works on extracting structured information from complex audio, like separating a singer's voice from background instruments.",
        "key_papers": [
            "Audio Source Separation using Deep Learning",
            "Music Information Retrieval and Time Series Analysis"
        ],
        "how_to_read": "Start with [Audio Source Separation using Deep Learning], then read [Music Information Retrieval and Time Series Analysis]. Follow their Google Scholar for latest work.",
        "project_for_you": {
            "title": "Vocal Track Extractor",
            "description": "Build an AI model utilizing U-Net architectures on audio spectrograms to isolate and extract vocals from complex polyphonic music tracks.",
            "tech_stack": ["Python", "Librosa", "PyTorch", "Spleeter"]
        }
    },
    {
        "name": "Purushottam Kar",
        "research_summary": "His work focuses on Machine Learning theory, optimization, and large-scale learning. He designs highly efficient optimization algorithms for non-convex problems, ranking tasks, and robust AI.",
        "key_papers": [
            "Optimization Algorithms for Non-Convex Machine Learning",
            "Efficient Learning to Rank Algorithms"
        ],
        "how_to_read": "Start with [Optimization Algorithms for Non-Convex Machine Learning], then read [Efficient Learning to Rank Algorithms]. Follow their Google Scholar for latest work.",
        "project_for_you": {
            "title": "Custom Learning-to-Rank Engine",
            "description": "Implement a custom loss function (like NDCG optimization) in a neural network to rank document relevance for search engine queries.",
            "tech_stack": ["Python", "PyTorch", "LightGBM", "Scikit-Learn"]
        }
    },
    {
        "name": "C.V. Jawahar",
        "research_summary": "He is highly renowned for Computer Vision, Document Image Analysis, and multimodal AI. He pioneers OCR technologies for Indian languages and works on retrieving information directly from visual document data.",
        "key_papers": [
            "Document Image Analysis and OCR for Indian Languages",
            "Fine-grained Visual Classification"
        ],
        "how_to_read": "Start with [Document Image Analysis and OCR for Indian Languages], then read [Fine-grained Visual Classification]. Follow their Google Scholar for latest work.",
        "project_for_you": {
            "title": "Multilingual Document Information Extractor",
            "description": "Develop an end-to-end OCR and layout analysis system that scans historical Indian documents and extracts structured text preserving spatial layouts.",
            "tech_stack": ["Python", "Tesseract", "Detectron2", "OpenCV"]
        }
    },
    {
        "name": "K. Madhava Krishna",
        "research_summary": "His domain is Robotics, spanning SLAM, autonomous navigation, and multi-agent systems. He designs algorithms that allow autonomous vehicles and robot swarms to dynamically map and navigate crowded environments.",
        "key_papers": [
            "Simultaneous Localization and Mapping (SLAM) in Dynamic Environments",
            "Multi-Agent Path Planning for Autonomous Robots"
        ],
        "how_to_read": "Start with [Simultaneous Localization and Mapping (SLAM) in Dynamic Environments], then read [Multi-Agent Path Planning for Autonomous Robots]. Follow their Google Scholar for latest work.",
        "project_for_you": {
            "title": "Swarm Robot Path Planner",
            "description": "Simulate an environment where multiple distinct robots must navigate a shared space to reach independent goals without colliding using multi-agent pathfinding algorithms.",
            "tech_stack": ["Python", "ROS", "Gazebo", "NetworkX"]
        }
    },
    {
        "name": "Vinay Namboodiri",
        "research_summary": "He works extensively in Computer Vision and Generative AI. His research tackles zero-shot learning, object detection, and using generative adversarial networks to synthesize and manipulate visual content.",
        "key_papers": [
            "Zero-Shot Learning for Object Recognition",
            "Generative Adversarial Networks for Image Synthesis"
        ],
        "how_to_read": "Start with [Zero-Shot Learning for Object Recognition], then read [Generative Adversarial Networks for Image Synthesis]. Follow their Google Scholar for latest work.",
        "project_for_you": {
            "title": "Zero-Shot Object Detector",
            "description": "Build a vision-language model pipeline (leveraging CLIP) that can draw bounding boxes around novel objects it has never explicitly been trained to detect.",
            "tech_stack": ["Python", "PyTorch", "Transformers", "OpenCV"]
        }
    },
    {
        "name": "Niloy Ganguly",
        "research_summary": "His research focuses on Network Science, complex networks, and social computing. He studies the spread of information, hate speech detection, and the structural properties of massive social media graphs.",
        "key_papers": [
            "Complex Networks and Social Media Analytics",
            "Hate Speech Detection in Online Social Networks"
        ],
        "how_to_read": "Start with [Complex Networks and Social Media Analytics], then read [Hate Speech Detection in Online Social Networks]. Follow their Google Scholar for latest work.",
        "project_for_you": {
            "title": "Social Network Echo Chamber Analyzer",
            "description": "Mine Twitter/Reddit data to construct user interaction graphs and apply community detection to quantify algorithmic echo chambers and sentiment polarization.",
            "tech_stack": ["Python", "NetworkX", "Tweepy/PRAW", "HuggingFace"]
        }
    },
    {
        "name": "Sudeshna Sarkar",
        "research_summary": "She specializes in Natural Language Processing, machine translation, and AI applied to the legal domain. Her work helps automate the extraction of facts and sentiments from massive corpora of legal text and regional languages.",
        "key_papers": [
            "Machine Translation for Indian Languages",
            "Natural Language Processing for Legal Texts"
        ],
        "how_to_read": "Start with [Machine Translation for Indian Languages], then read [Natural Language Processing for Legal Texts]. Follow their Google Scholar for latest work.",
        "project_for_you": {
            "title": "Legal Document Summarizer",
            "description": "Fine-tune a sequence-to-sequence transformer to condense long, complex Indian legal judgments into concise, readable summaries for legal professionals.",
            "tech_stack": ["Python", "PyTorch", "Transformers", "SpaCy"]
        }
    },
    {
        "name": "Pawan Goyal",
        "research_summary": "His expertise encompasses text mining, information retrieval, and Sanskrit computational linguistics. He builds AI systems that understand the grammatical structure of ancient languages as well as modern network text analytics.",
        "key_papers": [
            "Sanskrit Computational Linguistics and Parsing",
            "Text Mining for Information Retrieval"
        ],
        "how_to_read": "Start with [Sanskrit Computational Linguistics and Parsing], then read [Text Mining for Information Retrieval]. Follow their Google Scholar for latest work.",
        "project_for_you": {
            "title": "Sanskrit Syntax Parser",
            "description": "Develop an NLP tool that tokenizes and parses traditional Sanskrit sentences, identifying root words and morphological features using rule-based and ML hybrid approaches.",
            "tech_stack": ["Python", "NLTK", "IndicNLP", "Transformers"]
        }
    },
    {
        "name": "Animesh Mukherjee",
        "research_summary": "He works in computational social science and NLP. His research models how language evolves, how hate speech and fake news propagate online, and leverages AI to foster safer digital ecosystems.",
        "key_papers": [
            "Computational Social Science and Web Analytics",
            "Understanding the Dynamics of Hate Speech on Social Media"
        ],
        "how_to_read": "Start with [Computational Social Science and Web Analytics], then read [Understanding the Dynamics of Hate Speech on Social Media]. Follow their Google Scholar for latest work.",
        "project_for_you": {
            "title": "Misinformation Cascade Visualizer",
            "description": "Build an NLP and Graph hybrid system that detects potential fake news claims and visualizes how quickly they are reshared across synthetic social networks.",
            "tech_stack": ["Python", "DGL", "PyTorch", "Gephi"]
        }
    },
    {
        "name": "Sanghamitra Bandyopadhyay",
        "research_summary": "A pioneer in computational biology and evolutionary ML. She develops multi-objective evolutionary algorithms and applies clustering techniques to analyze genetic markers and complex bioinformatics data.",
        "key_papers": [
            "Archived Multi-objective Simulated Annealing (AMOSA)",
            "Evolutionary Algorithms for Clustering Bioinformatics Data"
        ],
        "how_to_read": "Start with [Archived Multi-objective Simulated Annealing (AMOSA)], then read [Evolutionary Algorithms for Clustering Bioinformatics Data]. Follow their Google Scholar for latest work.",
        "project_for_you": {
            "title": "Multi-Objective Gene Clusterer",
            "description": "Implement a multi-objective genetic algorithm to group co-expressed genes from microarray datasets to discover hidden biological functions.",
            "tech_stack": ["Python", "DEAP", "SciPy", "Pandas"]
        }
    },
    {
        "name": "Swagatam Das",
        "research_summary": "His research focuses heavily on evolutionary computation, meta-heuristics, and robust clustering. He designs mathematical optimization algorithms like Differential Evolution and Particle Swarm Optimization for ML applications.",
        "key_papers": [
            "Differential Evolution: A Survey of the State-of-the-Art",
            "Robust Clustering algorithms using Meta-Heuristics"
        ],
        "how_to_read": "Start with [Differential Evolution: A Survey of the State-of-the-Art], then read [Robust Clustering algorithms using Meta-Heuristics]. Follow their Google Scholar for latest work.",
        "project_for_you": {
            "title": "Swarm-Optimized Neural Network",
            "description": "Replace backpropagation with a custom Particle Swarm Optimization (PSO) loop to discover optimal weights for a neural network on a non-differentiable loss function.",
            "tech_stack": ["Python", "PySwarm", "PyTorch", "NumPy"]
        }
    }
]

output_file = r"c:\Users\LOQ\Desktop\New folder\CC\data\raw\enriched_research.json"
with open(output_file, 'w') as f:
    json.dump(professors, f, indent=4)

print("Saved enriched data.")
