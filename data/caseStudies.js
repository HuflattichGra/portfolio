// Case Studies Data - Narrative-Driven, Evidence-Based
export const caseStudies = [
  {
    id: 1,
    slug: "earthview-fullstack-optimization",
    title: "EarthView Inc. - B2B SaaS Full Stack Performance Engineering",
    company: "EarthView Image Inc.",
    companyUrl: "https://www.ev-image.com/",
    role: "Full Stack Developer",
    duration: "Jul 2023 – Jun 2024",
    category: "Full Stack",
    
    // Card Display
    hook: "Optimized workflow from 24h → <5s & reduced API response time by 40%",
    techStack: ["C#", "Node.js", "Kafka", "React", "CesiumJS", "PyTorch", "PostgreSQL", "WebSocket"],
    thumbnail: "/Earthview1.png",
    
    // Images for detail page (moved to top)
    images: [
      {
        src: "/Earthview1.png",
        alt: "Rural Homestead Visualization System",
        caption: "Rural Homestead Visualization System: Designed and developed every feature of this geospatial platform from ground up"
      },
      {
        src: "/Earthview2.png",
        alt: "Intelligent Remote Sensing Monitoring Cloud Platform",
        caption: "Intelligent Remote Sensing Monitoring Cloud Platform: Optimized CesiumJS rendering achieving 50+ FPS with 50,000+ data points"
      },
      {
        src: "/Earthview3.png",
        alt: "Approval Management System",
        caption: "Approval Management System: Refactored backend with event-driven architecture reducing processing time by 40%"
      }
    ],
    
    // Detail Page Content - Combined Challenge & Approach
    challengeAndApproach: {
      title: "Challenge & Solution",
      challenge: "Three systems needed comprehensive optimization: the Rural Homestead Visualization System required complete ground-up development, the Intelligent Remote Sensing Platform hit rendering bottlenecks at 50K+ data points, and the Approval Management System suffered from poor performance with 24-hour workflows.",
      role: "Full Stack Engineer leading end-to-end development and optimization.",
      solutions: [
        {
          title: "Rural Homestead Visualization System",
          description: "Designed and developed every feature from ground up. Built complete geospatial platform with interactive mapping and data management capabilities."
        },
        {
          title: "Remote Sensing Monitoring Platform",
          description: "Optimized CesiumJS rendering pipeline with client-side clustering, achieving stable 50+ FPS with 50,000+ data points. Built 30+ reusable React components."
        },
        {
          title: "Approval Management System",
          description: "Refactored backend with event-driven architecture using Kafka and RESTful APIs, reducing request processing time by 40% and workflow time from 24h to <5s."
        }
      ]
    },
    
    results: {
      title: "Results & Impact",
      metrics: [
        {
          metric: "Workflow Speed",
          improvement: "24h → <5s",
          impact: "10,000× improvement in data processing"
        },
        {
          metric: "Backend Performance",
          improvement: "40% faster",
          impact: "Significantly improved system responsiveness"
        },
        {
          metric: "Frontend Rendering",
          improvement: "50+ FPS @ 50K+ points",
          impact: "Smooth visualization with massive datasets"
        },
        {
          metric: "AI Detection",
          improvement: "87% accuracy, 50% efficiency",
          impact: "Zero server cost through client-side deployment"
        },
        {
          metric: "Code Reusability",
          improvement: "40% reuse rate",
          impact: "Built 30+ reusable components"
        }
      ]
    },
    
    technicalDeepDive: {
      title: "Technical Stack Deep Dive",
      sections: [
        {
          category: "Backend & Data",
          technologies: [
            { name: "C#", usage: "Core backend services and business logic" },
            { name: "Node.js", usage: "API gateway and microservices" },
            { name: "Kafka", usage: "Event-driven architecture for approval workflow" },
            { name: "WebSocket", usage: "Real-time data streaming and updates" },
            { name: "PostgreSQL", usage: "Primary database for structured data" }
          ]
        },
        {
          category: "Frontend Development",
          technologies: [
            { name: "React", usage: "Component-based UI architecture" },
            { name: "CesiumJS", usage: "3D geospatial visualization and rendering" },
            { name: "Element UI", usage: "Enterprise UI component library" },
            { name: "ECharts", usage: "Data analytics and visualization charts" },
            { name: "JavaScript", usage: "Core frontend logic and DOM manipulation" }
          ]
        },
        {
          category: "AI & Machine Learning",
          technologies: [
            { name: "PyTorch", usage: "Deep learning model training and inference" },
            { name: "Client-Side Deployment", usage: "Browser-based model inference eliminating server costs" }
          ]
        },
        {
          category: "DevOps & Infrastructure",
          technologies: [
            { name: "Docker", usage: "Application containerization" },
            { name: "AWS", usage: "Cloud infrastructure and deployment" },
            { name: "CI/CD", usage: "Automated build and deployment pipeline" }
          ]
        }
      ]
    },
    
    hasGithub: false,
    hasDemo: false
  },
  
  {
    id: 2,
    slug: "convention-platform-fullstack",
    title: "Convention Platform - Full Stack Social Platform",
    company: "Stevens Institute of Technology (Academic Project)",
    role: "Full Stack Developer",
    duration: "Academic Project",
    category: "Full Stack",
    
    // Card Display
    hook: "Integrated Stripe API for secure payments & reduced media loading by 35%",
    techStack: ["React", "Node.js", "MongoDB", "Redis", "Stripe API", "TypeScript"],
    thumbnail: "/api/placeholder/600/400",
    
    // Images for detail page
    // images: [
    //   {
    //     src: "/convention1.png",
    //     alt: "Convention Platform Main Interface",
    //     caption: "Convention Platform Main Interface: Full-featured social platform with event management and user interactions"
    //   },
    //   {
    //     src: "/convention2.png",
    //     alt: "Stripe Payment Integration",
    //     caption: "Stripe Payment Integration: Secure payment processing with support for multiple payment methods"
    //   },
    //   {
    //     src: "/convention3.png",
    //     alt: "Real-time Social Features",
    //     caption: "Real-time Social Features: Posts, comments, and following system with optimized media loading"
    //   }
    // ],
    
    // Detail Page Content - Combined Challenge & Approach
    challengeAndApproach: {
      title: "Challenge & Solution",
      challenge: "Built a feature-complete convention social platform from scratch, requiring complex user permission management, secure payment integration, real-time social features, and performance optimization for large amounts of media content.",
      role: "Core Full Stack Developer responsible for architecture design, key functional modules, and system performance optimization.",
      solutions: [
        {
          title: "Full Stack Architecture & Payment Integration",
          description: "Designed RESTful API architecture with Node.js/Express backend, integrated Stripe API for secure payments, implemented JWT authentication, and used Redis for caching hot data."
        },
        {
          title: "Frontend Development & User Experience",
          description: "Built SPA using React + TypeScript with responsive UI design, optimized media resource loading strategy, and implemented real-time update features."
        },
        {
          title: "Performance Optimization",
          description: "Implemented image lazy loading and compression (35% improvement), used Redis caching to reduce MongoDB queries, optimized API response time, and frontend code splitting."
        }
      ]
    },
    
    results: {
      title: "Results & Impact",
      metrics: [
        {
          metric: "Media Loading Time",
          improvement: "35% faster",
          impact: "Through lazy loading and compression strategies"
        },
        {
          metric: "Payment Integration",
          improvement: "Full Stripe API",
          impact: "Supports secure transactions and refunds"
        },
        {
          metric: "Database Performance",
          improvement: "Redis caching layer",
          impact: "Significantly reduced MongoDB query load"
        },
        {
          metric: "Code Quality",
          improvement: "TypeScript integration",
          impact: "Improved maintainability and type safety"
        }
      ]
    },
    
    technicalDeepDive: {
      title: "Technical Stack Deep Dive",
      sections: [
        {
          category: "Frontend Technologies",
          technologies: [
            { name: "React", usage: "Component-based UI development" },
            { name: "TypeScript", usage: "Type safety and code quality" },
            { name: "React Router", usage: "Client-side routing" },
            { name: "Axios", usage: "HTTP request management" }
          ]
        },
        {
          category: "Backend Technologies",
          technologies: [
            { name: "Node.js", usage: "Server runtime" },
            { name: "Express", usage: "Web framework and API routing" },
            { name: "MongoDB", usage: "NoSQL database" },
            { name: "Mongoose", usage: "MongoDB ODM" },
            { name: "Redis", usage: "Caching and session storage" }
          ]
        },
        {
          category: "Third-Party Integrations",
          technologies: [
            { name: "Stripe API", usage: "Payment processing" },
            { name: "JWT", usage: "Authentication tokens" },
            { name: "bcrypt", usage: "Password hashing" }
          ]
        },
        {
          category: "Development Tools",
          technologies: [
            { name: "Git", usage: "Version control and team collaboration" },
            { name: "Postman", usage: "API testing" },
            { name: "ESLint", usage: "Code standards" }
          ]
        }
      ]
    },
    
    hasGithub: true,
    githubUrl: "https://github.com/FilipSigda/CS554FinalProject",
    hasDemo: false
  },
  
  {
    id: 3,
    slug: "stevens-gnn-gpu-acceleration",
    title: "Stevens GNN - GPU Acceleration Research",
    company: "Stevens Institute of Technology",
    role: "Deep Learning Research Assistant",
    duration: "Sep 2024 – Present",
    category: "AI Research",
    
    // Card Display
    hook: "4.8× model training speedup & 46.8% reduction in end-to-end training time",
    techStack: ["Python", "PyTorch", "CUDA", "PyTorch Profiler", "Multi-Stream CUDA"],
    thumbnail: "/api/placeholder/600/400",
    
    // Detail Page Content - Combined Challenge & Approach
    challengeAndApproach: {
      title: "Challenge & Solution",
      challenge: "Circuit Graph Neural Networks (CircuitGNN) faced severe training speed bottlenecks when processing large-scale circuit graphs. Traditional CPU and single-GPU training methods couldn't meet research requirements, with insufficient GPU utilization and low memory efficiency limiting batch size.",
      role: "Deep Learning Research Assistant responsible for complete optimization pipeline from low-level CUDA kernels to PyTorch integration.",
      solutions: [
        {
          title: "Performance Analysis & CUDA Kernel Optimization",
          description: "Identified bottlenecks using NVIDIA Nsight and PyTorch Profiler, wrote custom CUDA kernels for graph operations, implemented Multi-Stream CUDA for parallel execution, and optimized memory access patterns with shared memory."
        },
        {
          title: "PyTorch Integration & Distributed Deployment",
          description: "Wrapped optimized CUDA kernels as PyTorch operators with automatic differentiation support, implemented multi-GPU and multi-server training with efficient gradient synchronization."
        },
        {
          title: "Research Publication & Open Source",
          description: "Conducted benchmark tests on multiple datasets, authored research paper documenting optimization methods, and open-sourced tools for community use. Published at ICS 2025 international conference."
        }
      ]
    },
    
    results: {
      title: "Results & Impact",
      metrics: [
        {
          metric: "Training Acceleration",
          improvement: "4.8× speedup",
          impact: "Significantly shortened model iteration cycles"
        },
        {
          metric: "End-to-End Training Time",
          improvement: "46.8% reduction",
          impact: "From hours to minutes"
        },
        {
          metric: "GPU Utilization",
          improvement: "Dramatically improved",
          impact: "Through Multi-Stream parallel execution"
        },
        {
          metric: "Memory Efficiency",
          improvement: "Significantly reduced usage",
          impact: "Supports larger batch sizes and models"
        },
        {
          metric: "Research Publication",
          improvement: "ICS 2025 conference",
          impact: "Paper: 'DR-CircuitGNN: Training Acceleration of Heterogeneous Circuit Graph Neural Network on GPUs'"
        }
      ]
    },
    
    technicalDeepDive: {
      title: "Technical Stack Deep Dive",
      sections: [
        {
          category: "GPU Programming",
          technologies: [
            { name: "CUDA C++", usage: "Custom kernel development" },
            { name: "Multi-Stream CUDA", usage: "Parallel execution optimization" },
            { name: "Shared Memory", usage: "Reduce global memory access" },
            { name: "Coalesced Access", usage: "Memory access pattern optimization" }
          ]
        },
        {
          category: "Deep Learning Framework",
          technologies: [
            { name: "PyTorch", usage: "Training framework and automatic differentiation" },
            { name: "PyTorch C++ Extension", usage: "CUDA kernel integration" },
            { name: "DDP", usage: "Distributed data parallel" }
          ]
        },
        {
          category: "Performance Analysis",
          technologies: [
            { name: "NVIDIA Nsight", usage: "GPU performance analysis" },
            { name: "PyTorch Profiler", usage: "Framework-level performance analysis" },
            { name: "nvprof", usage: "Kernel performance measurement" }
          ]
        },
        {
          category: "Graph Neural Networks",
          technologies: [
            { name: "Graph Convolution", usage: "Graph convolution operations" },
            { name: "Message Passing", usage: "Information propagation between nodes" },
            { name: "Heterogeneous Graphs", usage: "Heterogeneous graph processing" }
          ]
        }
      ]
    },
    
    hasGithub: true,
    githubUrl: "https://hpcrl.github.io/ICS2025-webpage/program/Proceedings_ICS25/ics25-76.pdf",
    hasDemo: false,
    isPaper: true
  }
];

export default caseStudies;
