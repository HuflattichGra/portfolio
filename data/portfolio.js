// Portfolio data s                { name      { n      { name: "Model Optimization", level: 92, icon: "🎯" }me: "SQL Server", level: 85, icon: "🗄️" }, "OpenCV", level: 88, icon: "👁️" },{ name: "MATLAB", level: 80, icon: "📊" }{ name: "C#", level: 82, icon: "🔹" },ructure
export const portfolioData = {
  personal: {
    name: "Grace Tao",
    title: "Full Stack & Deep Learning Engineer",
    location: "Hoboken, New Jersey",
    email: "jtao11@stevens.edu",
    phone: "551 359 1768",
    linkedin: "https://linkedin.com/in/junran-tao-7381222ba",
    github: "https://github.com/HuflattichGra",
    bio: "Passionate Full Stack & Deep Learning Engineer with expertise in scalable software development and GPU optimization. Currently pursuing MS in Computer Science at Stevens Institute of Technology while conducting cutting-edge research in Graph Neural Networks.",
    tagline: "Developing AI and Web systems"
  },
  
  skills: {
    languages: [
      { name: "JavaScript", level: 90, icon: "⚡" },
      { name: "TypeScript", level: 85, icon: "🔷" },
      { name: "Python", level: 95, icon: "🐍" },
      { name: "Java", level: 88, icon: "☕" },
      { name: "C/C++", level: 85, icon: "⚙️" },
      { name: "C#", level: 82, icon: "🔹" },
      { name: "HTML/CSS", level: 92, icon: "🌐" },
      { name: "SQL", level: 88, icon: "🗄️" },
      { name: "MATLAB", level: 80, icon: "📊" }
    ],
    technologies: [
      { name: "PyTorch", level: 95, icon: "🔥" },
      { name: "TensorFlow", level: 90, icon: "🧠" },
      { name: "OpenCV", level: 88, icon: "👁️" },
      { name: "scikit-learn", level: 85, icon: "📈" },
      { name: "CUDA", level: 92, icon: "🚀" },
      { name: "Computer Vision", level: 90, icon: "👀" },
      { name: "Graph Neural Networks", level: 88, icon: "🕸️" },
      { name: "GPU Acceleration", level: 95, icon: "⚡" }
    ],
    backend: [
      { name: "Spring Boot", level: 88, icon: "🍃" },
      { name: "Spring Cloud", level: 85, icon: "☁️" },
      { name: ".NET", level: 82, icon: "🔷" },
      { name: "Microservices", level: 85, icon: "🔧" },
      { name: "SQL Server", level: 85, icon: "🗄️" },
      { name: "Google Cloud", level: 80, icon: "☁️" }
    ],
    tools: [
      { name: "Git", level: 92, icon: "📝" },
      { name: "Docker", level: 78, icon: "🐳" },
      { name: "JUnit/Mockito", level: 85, icon: "🧪" },
      { name: "CUDA Kernels", level: 90, icon: "🚀" },
      { name: "Multi-Stream CUDA", level: 88, icon: "⚡" },
      { name: "Model Optimization", level: 92, icon: "🎯" }
    ]
  },

  projects: [
       {
      id: 1,
      title: "DR-CircuitGNN: GPU-Accelerated Circuit Graph Neural Network",
      description: "Cutting-edge research project optimizing Circuit Graph Neural Networks with custom CUDA kernels, achieving 4.8× training speedup.",
      image: "/api/placeholder/600/400",
      technologies: ["PyTorch", "CUDA", "Multi-Stream CUDA", "GPU Profiling", "Python"],
      features: [
        "4.8× training speedup achieved",
        "Custom CUDA kernel optimization",
        "Multi-server PyTorch deployment",
        "Reduced memory usage significantly",
        "Published in ICS 2025 conference"
      ],
      github: "https://hpcrl.github.io/ICS2025-webpage/program/Proceedings_ICS25/ics25-76.pdf",
      demo: null,
      category: "Deep Learning",
      status: "Published Research"
    },
      {
      id: 2,
      title: "Travel Companion Web Application",
      description: "A comprehensive travel planning and companion web application built with modern web technologies.",
      image: "/api/placeholder/600/400",
      technologies: ["JavaScript", "Node.js", "Web Programming", "Full-Stack"],
      features: [
        "Travel planning interface",
        "Companion matching system",
        "Interactive web interface",
        "Full-stack implementation",
        "Modern web technologies",
        "User-friendly design"
      ],
      github: "https://github.com/TOXXXX/TravelCompanion",
      demo: null,
      category: "Web Development",
      status: "Academic Project"
    },
    {
      id: 3,
      title: "ConHub Web Application",
      description: "A modern social media platform for discovering conventions, showcasing your art and hobbies, and connecting with like-minded communities.",
      image: "/api/placeholder/600/400",
      technologies: ["TypeScript", "Redis", "Modern Frameworks"],
      features: [
        "Create, publish, and manage convention details",
        "Engage with fans via posts and updates",
        "Feeds for official updates from organizers",
        "Sign up and link your posts to conventions you are attending",
        "Promote your art, merchandise, or cosplay",
        "Fundraising and donation features for artists and creators"
      ],
      github: "https://github.com/FilipSigda/CS554FinalProject",
      demo: null,
      category: "Web Development",
      status: "Academic Project"
    },
    {
      id: 4,
      title: "Publication Display Web Application",
      description: "A professional ASP.NET web application designed to showcase academic research, publications, and team achievements. Comprehensive portal for research dissemination and academic collaboration.",
      image: "/api/placeholder/600/400",
      technologies: ["ASP.NET", "C#", "SQL Server", "HTML5", "CSS3", "JavaScript"],
      features: [
        "User Authentication System",
        "Research Publication Showcase",
        "Team Member Profiles",
        "Document Management & PDF viewing",
        "Advanced Search functionality",
        "Code & Data Sharing platform"
      ],
      github: "https://github.com/HuflattichGra/projectShowcaseWeb",
      demo: null,
      category: "Web Development",
      status: "Academic Platform"
    },
    {
      id: 5,
      title: "Pipeline Video Recognition & Defect Detection System",
      description: "Complete end-to-end video recognition pipeline with real-time defect detection capabilities. Features deep learning-based ResNet18 architecture, CUDA acceleration, and comprehensive ML workflow from dataset processing to deployment.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "PyTorch", "ResNet18", "OpenCV", "CUDA", "Optuna", "GUI", "Machine Learning"],
      features: [
        "82.4% detection accuracy with ResNet18",
        "Real-time video processing & defect detection",
        "CUDA acceleration for performance optimization",
        "GUI-based interface for easy operation",
        "Complete ML pipeline: dataset processing to deployment",
        "Video to frames conversion & preprocessing",
        "Hyperparameter tuning with Optuna",
        "Industrial-grade performance standards"
      ],
      github: "https://github.com/HuflattichGra/pipe-classify",
      demo: null,
      category: "Deep Learning",
      status: "Production Ready"
    },
  
 
  ],

  experience: [
    {
      company: "Stevens Institute of Technology",
      position: "Deep Learning Research Assistant",
      duration: "Sep 2024 – Present",
      type: "Internship",
      location: "Hoboken, New Jersey",
      achievements: [
        "Optimized GPU-based test software using custom CUDA kernels, achieving 4.8× training speedup and reduced memory usage",
        "Enhanced software performance through GPU profiling and integrated solutions into PyTorch for multi-server deployment",
        "Built tools to support testing, validation, and deployment of deep learning models across diverse datasets",
        "Published research paper 'DR-CircuitGNN: Training Acceleration of Heterogeneous Circuit Graph Neural Network on GPUs' in ICS 2025"
      ]
    },
    {
      company: "EarthView Image Inc.",
      position: "Full Stack & Deep Learning Engineer",
      duration: "Jul 2023 – Jun 2024",
      type: "Full-time",
      location: "Chengdu, China",
      achievements: [
        "Developed a deep learning-based real-time video defect detection system using ResNet18 and OpenCV, achieving 82.4% accuracy with CUDA acceleration",
        "Developed an advanced training optimization pipeline with CosineAnnealingWarmRestarts and custom logging, boosting model iteration efficiency by 27%",
        "Optimized and refactored the authentication system (C, .NET), reducing latency by 30% through caching and lazy-loading",
        "Enhanced internal test tools for GIS software, accelerating map load times by 50%",
        "Designed a resilient form validation engine to reduce data errors during user testing by 40%",
        "Built internal software update modules for GIS deployment environments, automating release propagation across distributed servers"
      ]
    },
    {
      company: "Chengdu Yunshang Chuangxiang Intelligent Technology Co.",
      position: "Software Engineer",
      duration: "Jun 2022 – Aug 2022",
      type: "Internship",
      location: "Chengdu, China",
      achievements: [
        "Implemented scalable microservices architecture with Spring Boot and Spring Cloud, improving modularity and deployment",
        "Developed test coverage using JUnit/Mockito, achieving 85%+ unit test coverage for QA reliability",
        "Supported CRM system integration with backend services, enhancing production line management tools"
      ]
    },
    {
      company: "University of Shanghai for Science and Technology",
      position: "Computer Vision & Software Development Research Assistant",
      duration: "Sep 2020 – Jan 2022",
      type: "Internship",
      location: "Shanghai, China",
      achievements: [
        "Engineered a flame recognition algorithm (MATLAB) leveraging HSV color space and connected component analysis, boosting detection accuracy under diverse conditions",
        "Built and deployed a large-scale Chinese Opera Search System (.NET, SQL Server, Google Cloud) managing 100K+ records with over 95% test coverage",
        "Improved computational efficiency for dynamic video feature extraction with low simulation costs, enhancing real-time performance"
      ]
    }
  ],

  education: [
    {
      institution: "Stevens Institute of Technology",
      degree: "Master of Science in Computer Science",
      duration: "Sep 2024 – May 2026",
      location: "Hoboken, New Jersey",
      gpa: "3.8/4.0"
    },
    {
      institution: "University of Shanghai for Science and Technology",
      degree: "Bachelor of Engineering in New Media Technology",
      duration: "Sep 2019 – Jun 2023",
      location: "Shanghai, China"
    }
  ]
};

export default portfolioData;
