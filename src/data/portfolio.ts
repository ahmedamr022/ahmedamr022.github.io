export const profile = {
  name: 'Ahmed Amr',
  roles: [
  'Machine Learning Engineer',
  'Data Analyst',
  'Computer Vision Engineer',
  'Deep Learning Developer',
  'AI Problem Solver'],

  email: 'ahmedamr021222@gmail.com',
  phone: '+20 111 139 3711',
  location: 'Cairo, Egypt',
  timezone: 'GMT+2 (EET)',
  github: 'https://github.com/ahmedamr022',
  linkedin: 'https://www.linkedin.com/in/ahmed-amr-13040227b/',
  huggingface: 'https://huggingface.co/BoTahex',
  kaggle: 'https://www.kaggle.com/ahmedamr0222',
  resume: 'assets/Ahmed_Amr_Resume.pdf',
  photo: 'https://raw.githubusercontent.com/ahmedamr022/ahmedamr022.github.io/main/assets/me.png'
};

export const navItems = [
{ label: 'About', href: '#about' },
{ label: 'Skills', href: '#skills' },
{ label: 'Internship', href: '#internship' },
{ label: 'Education', href: '#education' },
{ label: 'Projects', href: '#projects' },
{ label: 'Certs', href: '#certifications' }];


export const aboutHighlights = [
'End-to-End ML Pipelines',
'Medical AI & MRI Classification',
'Exploratory Data Analysis (EDA)',
'Production Model Deployment',
'REST APIs & System Integration'];


export const stats = [
{ icon: '🚀', value: '3+', label: 'AI Projects' },
{ icon: '📜', value: '3', label: 'Certifications' },
{ icon: '🏢', value: '1', label: 'Internships' },
{ icon: '📊', value: '500K+', label: 'Data Points Processed' }];


export const marqueeItems = [
'Python', 'PyTorch', 'Scikit-learn', 'OpenCV', 'YOLO', 'NumPy', 'Pandas',
'Matplotlib', 'Excel', 'Power BI', 'Flask', 'Docker', 'SQL', 'SciPy',
'Git & GitHub', 'Jupyter Notebook', 'Object Detection', 'Image Segmentation'];


export const skillCategories = [
{
  icon: '🧠',
  title: 'AI & Computer Vision',
  tags: ['PyTorch', 'OpenCV', 'YOLO', 'Image Segmentation', 'Object Detection']
},
{
  icon: '📊',
  title: 'ML & Data Analysis',
  tags: ['NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'SciPy', 'Excel', 'Power BI']
},
{
  icon: '⚙️',
  title: 'Backend & Tools',
  tags: ['Python', 'SQL', 'Flask', 'Docker', 'Git', 'GitHub', 'Jupyter Notebook']
}];


export type Project = {
  emoji: string;
  category: 'ml' | 'cv' | 'fullstack';
  tag: string;
  name: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  image?: string;
  featured?: boolean;
};

export const projects: Project[] = [
{
  emoji: '🏢',
  category: 'fullstack',
  tag: 'AI Platform',
  name: 'عواطلي (3watly) — Egyptian Career Intelligence Platform',
  description:
    'Full-stack AI-powered career platform built for the Egyptian tech job market. Scrapes and indexes real job postings from Wuzzuf, matches candidates with AI against real skill demand, audits CVs with ATS scoring, analyzes personalized skill gaps, and provides live Egyptian market insights — all in one platform.',
  tech: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Python', 'NLP', 'Vercel'],
  github: 'https://github.com/ahmedamr022/3watly',
  demo: 'https://3watly.vercel.app/',
  image: '3watly-hero.png',
  featured: true,
},
{
  emoji: '🧠',
  category: 'cv',
  tag: 'Deep Learning',
  name: "Axon: Alzheimer's Detection",
  description:
  "Custom CNN model trained on 33,984 augmented MRI scans to classify 4 stages of Alzheimer's Disease with 93.2% accuracy and 99% precision on severe cases. Deployed live on Hugging Face Spaces.",
  tech: ['TensorFlow', 'Keras', 'OpenCV', 'Gradio'],
  github: 'https://github.com/ahmedamr022/Axon-Alzheimers-Detection',
  demo: 'https://huggingface.co/spaces/BoTahex/axon-alzheimer-detection'
},
{
  emoji: '📊',
  category: 'ml',
  tag: 'Machine Learning',
  name: 'Customer Churn Prediction',
  description:
  'Built 6 ML models (both built-in and from scratch) to predict customer churn on 440K records. Best performing model: Random Forest achieving 93% accuracy. Includes full EDA, feature engineering, and model comparison.',
  tech: ['Python', 'Scikit-learn', 'Pandas', 'Random Forest'],
  github: 'https://github.com/ahmedamr022/Customer-Churn-Prediction'
},
{
  emoji: '🍔',
  category: 'cv',
  tag: 'Computer Vision',
  name: 'Food Image Classifier',
  description:
  'Fine-tuned ResNet50 on the Food-101 dataset (101K images, 101 classes) to classify food from images and estimate calories. Successfully deployed as an interactive web application on Hugging Face Spaces.',
  tech: ['PyTorch', 'ResNet50', 'Hugging Face', 'Transfer Learning'],
  github: 'https://github.com/ahmedamr022/Food-Classification',
  demo: 'https://huggingface.co/spaces/BoTahex/food-image-classifier'
}];


export const certifications = [
  {
    icon: '📊',
    name: 'Statistics 101',
    issuer: 'Cognitive Class (IBM)',
    date: 'November 2025',
    link: 'https://courses.cognitiveclass.ai/certificates/87cf4d26b0d145d291c5b5f58b766a7b',
    skills: ['Probability', 'Descriptive Stats', 'Hypothesis Testing', 'Data Distribution'],
    badgeColor: '#38bdf8',
    verifiedId: 'IBM-CC-87CF4D'
  },
  {
    icon: '🐍',
    name: 'Scientific Computing with Python',
    issuer: 'freeCodeCamp',
    date: 'March 2026',
    link: 'https://www.freecodecamp.org/certification/ahmedamr21/python-v9',
    skills: ['Algorithms', 'Data Structures', 'OOP', 'Data Wrangling'],
    badgeColor: '#a855f7',
    verifiedId: 'FCC-PY-V9'
  },
  {
    icon: '📈',
    name: 'Data Analysis with Excel Pivot Tables',
    issuer: '365 Data Science',
    date: 'November 2025',
    link: 'https://learn.365datascience.com/certificates/CC-A20A705028/',
    skills: ['Pivot Tables', 'KPI Dashboards', 'Data Aggregation', 'Business Analytics'],
    badgeColor: '#10b981',
    verifiedId: '365DS-A20A7'
  }
];


export const terminalLines: Array<Array<{c?: string;t: string;}>> = [
[{ c: 'c-cm', t: '# ahmed_toolkit.py' }],
[],
[{ c: 'c-cm', t: '# AI & Computer Vision' }],
[{ c: 'c-kw', t: 'import ' }, { c: 'c-mod', t: 'torch' }],
[{ c: 'c-kw', t: 'import ' }, { c: 'c-mod', t: 'tensorflow ' }, { c: 'c-kw', t: 'as ' }, { c: 'c-var', t: 'tf' }],
[{ c: 'c-kw', t: 'import ' }, { c: 'c-mod', t: 'cv2' }],
[{ c: 'c-kw', t: 'from ' }, { c: 'c-mod', t: 'ultralytics ' }, { c: 'c-kw', t: 'import ' }, { c: 'c-fn', t: 'YOLO' }],
[],
[{ c: 'c-cm', t: '# ML & Data Analysis' }],
[{ c: 'c-kw', t: 'import ' }, { c: 'c-mod', t: 'numpy ' }, { c: 'c-kw', t: 'as ' }, { c: 'c-var', t: 'np' }],
[{ c: 'c-kw', t: 'import ' }, { c: 'c-mod', t: 'pandas ' }, { c: 'c-kw', t: 'as ' }, { c: 'c-var', t: 'pd' }],
[{ c: 'c-kw', t: 'from ' }, { c: 'c-mod', t: 'sklearn.ensemble ' }, { c: 'c-kw', t: 'import ' }, { c: 'c-fn', t: 'RandomForestClassifier' }],
[{ c: 'c-kw', t: 'import ' }, { c: 'c-mod', t: 'matplotlib.pyplot ' }, { c: 'c-kw', t: 'as ' }, { c: 'c-var', t: 'plt' }],
[{ c: 'c-kw', t: 'import ' }, { c: 'c-mod', t: 'scipy' }],
[],
[{ c: 'c-cm', t: '# Backend & Deployment' }],
[{ c: 'c-kw', t: 'from ' }, { c: 'c-mod', t: 'flask ' }, { c: 'c-kw', t: 'import ' }, { c: 'c-fn', t: 'Flask' }],
[{ c: 'c-kw', t: 'import ' }, { c: 'c-mod', t: 'gradio ' }, { c: 'c-kw', t: 'as ' }, { c: 'c-var', t: 'gr' }],
[],
[{ c: 'c-kw', t: 'print' }, { c: 'c-var', t: '(' }, { c: 'c-str', t: '"All modules loaded successfully."' }, { c: 'c-var', t: ')' }]];