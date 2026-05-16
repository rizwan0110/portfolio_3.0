export const profile = {
  name: "Muhammed Rizwan",
  handle: "Rizwan",
  role: "AI Engineer",
  location: "Stockholm, Sweden",
  tagline: "Building production RAG and agentic AI systems.",
  bio: "Master's in AI Engineering. I build and ship RAG systems end-to-end, from retrieval to evaluation and deployment. Background in machine learning and deep learning, with hands-on experience in production. I learn fast and pick up new tools quickly.",
  status: "open to work",
  email: "rizwanrazik724@gmail.com",
  socials: [
    { label: "github",   handle: "rizwan0110",       url: "https://github.com/rizwan0110" },
    { label: "linkedin", handle: "in/mhd-rizwan",       url: "https://www.linkedin.com/in/mhd-rizwan/" },
  
  ],
};

export const now = {
  updated: "2026-05-16",
  items: [
    { kind: "building", text: "An agentic AI project using LangGraph and multi-agent workflows." },
    { kind: "learning", text: "LangGraph, LangFuse, and production agentic workflow patterns." },
    { kind: "reading", text: "AI Engineering by Chip Huyen." },
    { kind: "listening", text: "AI podcasts for AI engineers and builders." },
  ],
};

export const work = [
  {
    company: "Volvo Construction Equipment",
    role: "AI Engineer (Master's Thesis)",
    type: "Full-time",
    location: "Eskilstuna, Sweden",
    start: "Jan 2025",
    end: "Jun 2025",
    current: false,
    summary: "Designed and deployed a persona-driven RAG chatbot on Azure for Volvo CE.",
    bullets: [
      "Built hybrid retrieval RAG chatbot (BM25 + semantic + HNSW vector) on Azure Web Apps using GPT-4o and Azure AI Search. Improved stakeholder-rated accuracy from 5.88 to 6.42/10, reduced token usage by 41%.",
      "Built a synthetic persona generation pipeline using Few-Shot and CoT prompting on 24 scraped customer success stories. Validated by 160+ stakeholders via McNemar's test, 81.8% rated the system useful.",
      "Engineered end-to-end Azure deployment (Web Apps + AI Foundry + AI Search). Delivered production-ready internal tool documented for engineering reuse across Volvo CE teams.",
      "Delivered internal tech talk on LLM prompting, RAG, and AI system design to 160+ Volvo employees. Submitted research findings to arXiv.",
    ],
    stack: ["Python", "GPT-4o", "Azure", "LangChain", "Azure AI Search", "BM25", "HNSW"],
  },
  {
    company: "PerformanceX",
    role: "Gen AI Intern",
    type: "Internship",
    location: "Gothenburg, Sweden (Remote)",
    start: "Aug 2024",
    end: "Sep 2024",
    current: false,
    summary: "Built a RAG-based AI sports coaching chatbot for mental wellness and performance optimization.",
    bullets: [
      "Delivered two production-ready apps (data ingestion + chat interface) in 6 weeks using LangChain, Pinecone, and GPT-4 across 4 knowledge domains.",
      "Benchmarked embedding models and LLMs on retrieval latency and answer quality . Selected all-MiniLM-L12-v2 at 1.32s retrieval time as the final embedding model.",
      "Processed 37 sources into a Pinecone vector database with optimised chunking strategy for domain-specific athlete queries.",
      "Managed delivery timelines on Trello across a small remote team, shipping the MVP within the 6-week window.",
    ],
    stack: ["LangChain", "Pinecone", "GPT-4", "Python", "all-MiniLM-L12-v2"],
  },
  {
    company: "Allianz Technology",
    role: "Software Engineer",
    type: "Full-time",
    location: "Trivandrum, India",
    start: "Mar 2022",
    end: "Jul 2023",
    current: false,
    summary: "Maintained IBM FileNet P8 enterprise document management systems for clients in Germany and the UK.",
    bullets: [
      "Resolved 98% of production incidents within SLA through root-cause analysis on IBM FileNet P8 systems.",
      "Prevented production downtime by configuring proactive Dynatrace monitoring and alerts across IBM WebSphere environments.",
      "Executed system upgrades and Linux environment configurations. Built enterprise deployment and debugging expertise that now directly informs AI system deployment work.",
    ],
    stack: ["IBM FileNet P8", "IBM WebSphere", "Dynatrace", "Linux"],
  },
  {
    company: "Quest Innovative Solutions",
    role: "Software Engineering Trainee",
    type: "Internship",
    location: "Kochi, India",
    start: "Sep 2021",
    end: "Mar 2022",
    current: false,
    summary: "Early career traineeship focused on data science.",
    bullets: [],
    stack: ["Python", "Data Science"],
  },
];
export const education = [
  {
    school: "Jönköping University",
    degree: "Master of Science in Artificial Intelligence",
    focus: "AI Engineering",
    start: "2023",
    end: "2025",
    notes: "Courses: Mathematics for Intelligent Systems, Machine Learning, Deep Learning, Reinforcement Learning, Data Science, Knowledge Representation, Ethics of AI, Research Methods, State-of-the-Art in AI Research.",
    transcript: "https://drive.google.com/file/d/15Gmty4MiCqApicCI8FCYYFAS6uLEocmi/view",
  },
  {
    school: "Mangalore Institute of Technology and Engineering",
    degree: "Bachelor of Engineering in Computer Science",
    focus: "Computer Science",
    start: "2017",
    end: "2021",
    notes: "Courses: Programming in C and Data Structures , Unix and Shell Programmings , Natural Language Processing , Internet of Things and Applications , Network Security and Cyber Law , Advanced JAVA and J2EE , Database Management System , Mgmt. and Entrepreneurship for IT Industry , Data Mining and Data Warehousing",
    transcript: "https://drive.google.com/file/d/1yjIniFfj-eD5AinoBLSkRdJ3MwblHK68/view",
  },
];
export const skills = [
  {
    group: "Languages",
    items: [
      { name: "Python", level: "primary" },
      { name: "SQL", level: "primary" },
      { name: "Linux", level: "secondary" },
    ],
  },
  {
    group: "AI & Machine Learning",
    items: [
      { name: "TensorFlow", level: "primary" },
      { name: "Keras", level: "primary" },
      { name: "Scikit-learn", level: "primary" },
      { name: "Pandas", level: "primary" },
      { name: "NumPy", level: "primary" },
      { name: "Reinforcement Learning", level: "secondary" },
    ],
  },
  {
    group: "GenAI & RAG",
    items: [
      { name: "LangChain", level: "primary" },
      { name: "Prompt Engineering", level: "primary" },
      { name: "GPT-4 / GPT-4o", level: "primary" },
      { name: "Llama 3", level: "primary" },
      { name: "Embeddings & Vector Search", level: "primary" },
      { name: "Hybrid Retrieval", level: "primary" },
      { name: "Agentic AI", level: "learning" },
    ],
  },
  {
    group: "Deployment & MLOps",
    items: [
      { name: "FastAPI", level: "primary" },
      { name: "Docker", level: "primary" },
      { name: "Azure", level: "primary" },
      { name: "GitHub Actions", level: "primary" },
      { name: "Streamlit", level: "primary" },
      { name: "Hugging Face Spaces", level: "primary" },
      { name: "Pinecone", level: "primary" },
      { name: "FAISS", level: "primary" },
    ],
  },
  {
    group: "Evaluation & Monitoring",
    items: [
      { name: "Precision / Recall / F1", level: "primary" },
      { name: "MRR", level: "primary" },
      { name: "Grad-CAM", level: "primary" },
      { name: "A/B Testing", level: "primary" },
      { name: "Dynatrace", level: "secondary" },
    ],
  },
  {
    group: "Tools",
    items: [
      { name: "Git", level: "primary" },
      { name: "Trello", level: "primary" },
      { name: "Notion", level: "primary" },
      { name: "Jupyter", level: "primary" },
      { name: "VS Code", level: "primary" },
    ],
  },
];
export const projects = [
  {
    id: "rag-troubleshooting-assistant",
    title: "rag-troubleshooting-assistant",
    blurb: "Production-style RAG system that answers questions from technical docs using hybrid retrieval, reranking, and cited answers. Used CI-gated evaluation, the pipeline fails if retrieval quality drops below threshold.",
    category: "Gen AI",
    stack: ["Python", "FastAPI", "FAISS", "BM25", "Groq (Llama 3.3 70B)", "Docker", "GitHub Actions", "Hugging Face Spaces"],
    year: "2026",
    status: "live",
    links: [
      { label: "demo", url: "https://rizwan99-troubleshooting-assisstance.hf.space/app" },
      { label: "github", url: "https://github.com/rizwan0110/troubleshooting_assisstant" },
    ],
    metric: "60% Recall@5 · 0.75 MRR ",
  },
  {
    id: "ai-job-search-workflow",
    title: "ai-job-search-workflow",
    blurb: "Daily AI pipeline that fetches AI job postings from the Swedish Employment Service Portal, filters irrelevant roles, scores them with an LLM, and emails the best matches every evening.",
    category: "Gen AI",
    stack: ["Python", "Groq", "Llama 3.1 8B", "JobTech API", "Gmail SMTP", "Windows Task Scheduler"],
    year: "2025",
    status: "live",
    links: [
      { label: "github", url: "https://github.com/rizwan0110/JobSearch_Agent" },
    ],
    metric: "Processes ~25 jobs/day · runs every evening",
  },
  {
    id: "performancex-sports-coaching",
    title: "performancex-sports-coaching-app",
    blurb: "RAG-based AI sports coaching assistant combining LLMs with a domain-specific vector database to deliver personalized mental wellness and performance advice for athletes.",
    category: "Gen AI",
    stack: ["Python", "LangChain", "GPT-4", "Pinecone", "Streamlit", "all-MiniLM-L12-v2"],
    year: "2024",
    status: "live",
    links: [
      { label: "github", url: "https://github.com/rizwan0110/PerformanceX" },
    ],
    metric: "Built during internship · 2 apps shipped in 6 weeks",
  },
  {
    id: "daily-ai-news-agent",
    title: "daily-ai-news-agent",
    blurb: "No-code AI agent built with n8n that fetches daily AI news, summarises articles with Gemini 2.5 Flash, and sends a formatted digest to inbox every morning. Built to explore agentic workflows.",
    category: "Gen AI",
    stack: ["n8n", "Gemini 2.5 Flash", "NewsAPI", "Gmail"],
    year: "2025",
    status: "live",
    links: [
      { label: "github", url: "https://github.com/rizwan0110/DailyAINewsAgent" },
    ],
    metric: "Learning project — agentic AI and workflow automation",
  },
  {
    id: "cable-drum-classification",
    title: "cable-drum-classification",
    blurb: "Deep learning image classifier that identifies reusable vs non-reusable cable drums for a Swedish recycling company. Used transfer learning with VGG16 and ResNet50, with Grad-CAM to explain predictions.",
    category: "Deep Learning",
    stack: ["Python", "TensorFlow", "Keras", "VGG16", "ResNet50", "Grad-CAM"],
    year: "2024",
    status: "academic",
    links: [ { label: "github", url: "https://github.com/rizwan0110/cable-drum-reusability-classification-cnn" },],
    metric: "~88% validation accuracy · ~92% F1 score · dataset confidential",
  },
  {
    id: "customer-churn-prediction",
    title: "customer-churn-prediction",
    blurb: "ML pipeline predicting customer churn for a Swedish spa business using 14,257 customer records. Engineered behavioral features and compared Logistic Regression, Random Forest, Gradient Boosting, and SVM.",
    category: "Machine Learning",
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    year: "2023",
    status: "academic",
    links: [ { label: "github", url: "https://github.com/rizwan0110/customer-churn-prediction" },],
    metric: "~84% accuracy · ~0.86 AUC · Random Forest best model · dataset confidential",
  },
  {
    id: "warehouse-robot-rl",
    title: "warehouse-robot-path-optimization",
    blurb: "Q-Learning agent that navigates a 15x15 warehouse grid, avoiding obstacles and finding optimal paths between pick-up and drop-off points. Includes GUI visualization and hyperparameter tuning.",
    category: "Reinforcement Learning",
    stack: ["Python", "Reinforcement Learning", "Q-Learning", "Tkinter"],
    year: "2024",
    status: "academic",
    links: [
      { label: "github", url: "https://github.com/rizwan0110/warehouse-path-optimization-q-learning" },
    ],
    metric: "Converges to optimal policy · tested across 3000–5000 episodes",
  },
];

export const certificates = [
  {
    name: "AI-900: Microsoft Azure AI Fundamentals ",
    issuer: "Microsoft",
    date: "May 2025",
    id: "7619EE098F471F62",
  },
 
];

export const talks = [
  {
    title: "International AI Talent Show",
    venue: "Gothenburg Artificial Intelligence Alliance (GAIA) Conference 2026",
    date: "2026",
    kind: "talk",
    link: "https://www.linkedin.com/company/gaia-gbg/",
    note: "Selected as 1 of 10 international AI talents. GAIA brings together 1,200+ AI, ML, and data science professionals across Sweden.",
  },
  {
    title: "VCE-PersonaBOT: Bringing Customer Personas to Life with LLMs & RAG",
    venue: "Open Demo Session · Volvo Construction Equipment",
    date: "Jun 2025",
    kind: "talk",
    link: "",
    note: "Keynote speaker at internal open demo session presenting the RAG chatbot built during Master's thesis.",
  },
  
  {
    title: "Thesis Exhibition — Xjobbsmässan Final Thesis Fair",
    venue: "Campus Arena, Jönköping University",
    date: "May 2025",
    kind: "talk",
    link: "",
    note: "Exhibited Master's thesis project exploring RAG and customer personas for business decision-making.",
  },
  {
    title: "Research Paper: RAG Systems for Customer Persona Generation",
    venue: "arXiv",
    date: "June 2025",
    kind: "paper",
    link: "https://arxiv.org/abs/2505.17156",
    note: "Research findings from Master's thesis at Volvo Construction Equipment. Also published on DiVA.",
  },
];

export const writing = [
  { title: "Post title goes here",                date: "Apr 2026", reads: "8 min",  url: "#" },
  { title: "Another post about something useful", date: "Feb 2026", reads: "12 min", url: "#" },
  { title: "Notes on a topic I explored",         date: "Nov 2025", reads: "6 min",  url: "#" },
];

export const extra = {
  languages: [
    { name: "English", level: "Fluent" },
    { name: "Swedish",   level: "Beginner" },
    { name: "Malayalam",   level: "Fluent" },
    { name: "Hindi",   level: "Fluent" },
    { name: "Arabic",   level: "Intermediate" },
  ],
   interests: [
    "football",
    "gaming",
    "travel",
    "cooking",
  ],
};
