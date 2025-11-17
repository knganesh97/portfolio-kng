export const NAVIGATION_ITEMS = [
  { id: 'projects', label: 'Projects'},
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'achievements', label: 'Achievements' }
];

export const workExperience = [
  {
    title: "Web Development Engineer (Freelance)",
    companyName: "HumAIn Co. Ltd.",
    startDate: "Dec 2024",
    endDate: "Feb 2025",
    description:
      "Frontend revamp and full-stack development for b-align platform using modern web technologies.",
    contributions: [
      "Revamped the front-end for b-align using React, TypeScript, and Tailwind CSS",
      "Migrated a complex Django codebase, ensuring smooth integration and stability",
      "Built dynamic, scalable components, and backend features in React and Django",
      "Contributed 48 clean pull requests in a 6-member team, delivering on tight deadlines",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Django",
      "Git",
    ],
  },
  {
    title: "Web Development Engineer (Freelance)",
    companyName: "Ashvini Divodasa",
    location: "Hyderabad, India",
    startDate: "Sep 2024",
    endDate: "Dec 2024",
    description:
      "Full-stack website development with booking, scheduling, and payment integration features.",
    contributions: [
      "Built a full-stack website using React.js (frontend) and Go (backend), featuring booking, scheduling, and payment integration with automatic refunds",
      "Developed a custom CMS for administrators to manage content seamlessly",
      "Integrated Firebase for storage and frontend hosting, and deployed backend via Render, ensuring smooth and reliable operations",
    ],
    techStack: [
      "React.js",
      "Go",
      "Firebase",
      "Render",
    ],
  },
  {
    title: "Programmer Analyst I",
    companyName: "Amazon India",
    location: "Hyderabad, India",
    startDate: "Apr 2022",
    endDate: "Aug 2023",
    description:
      "Full-stack development and infrastructure optimization for internal utility systems, achieving significant productivity gains.",
    contributions: [
      "Developed new features using Java and Spring Boot for an internal utility website, boosting cross-team productivity by 150%",
      "Debugged client-integrated Java codebases, improving system stability and support turnaround",
      "Conducted code reviews in Java and JSP, ensuring quality, and promoting team-wide knowledge sharing",
      "Built automation tools in Python, increasing team productivity by 50% through simplified workflows",
      "Contributed to $10,000 IMR savings by optimising AWS infrastructure and guiding 60+ clients on API rate limiting for peak traffic",
      "Collaborated with cross-functional teams and project managers to resolve system issues, and ensure smooth, on-time project delivery",
    ],
    techStack: [
      "Java",
      "Spring Boot",
      "JSP",
      "Python",
      "AWS",
    ],
  },
  {
    title: "Tech Administrator",
    companyName: "ChessBase India",
    location: "Mumbai, India",
    startDate: "May 2020",
    endDate: "Feb 2022",
    description:
      "Backend development and UI/UX improvements for chess platform, significantly enhancing performance and user engagement.",
    contributions: [
      "Built backend APIs using Go, improving platform performance by 25%",
      "Developed a CMS with Go, enhancing backend efficiency by 400%",
      "Revamped UI/UX with React.js, increasing user engagement by 10%",
    ],
    techStack: [
      "Go",
      "React.js",
    ],
  },
];

export const githubRepositories = [
  {
    owner: "knganesh97",
    repo: "skillzcollab-assignment",
    description: "Assignment project for SkillzCollab",
  },
  {
    owner: "knganesh97",
    repo: "dookan-assignment",
    description: "Assignment project for Dookan",
  },
  {
    owner: "knganesh97",
    repo: "portfolio-kng",
    description: "Personal portfolio website",
  },
  // Add more repositories as needed
];

// Skills Data
export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["Golang", "Python", "Java", "Spring Boot", "Javascript"]
  },
  {
    category: "Frontend Technologies",
    skills: ["React", "Node.js", "Typescript", "CSS", "HTML"]
  },
  {
    category: "Database Technologies",
    skills: ["Postgres", "MongoDB", "DynamoDB", "Firestore"]
  },
  {
    category: "Cloud & Infrastructure",
    skills: ["AWS", "Firebase", "micro services architecture"]
  },
  {
    category: "Core Skills",
    skills: ["Problem solving", "data structures", "algorithms"]
  }
];

// Education Data
export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  grade?: string;
  description?: string;
  highlights?: string[];
}

export const educationData: EducationItem[] = [
  {
    degree: "Integrated Dual Degree: M.Sc.(Hons.) Mathematics + B.E.(Hons.) Civil Engineering",
    institution: "BITS Pilani - Hyderabad Campus",
    location: "Hyderabad, India",
    startDate: "2014",
    endDate: "2019",
    description: "Integrated dual degree program combining advanced mathematics and civil engineering.",
    highlights: [
      "Thesis on Differential Equations for Fluid Flow in Pipes",
      "Design Project on Pipe Network Optimisation through Water Cycle Algorithm",
      "Study Project on Application of Differential Equations in Structural Engineering"
    ]
  }
];

// Achievements Data
export interface Achievement {
  title: string;
  description: string;
  category: 'Professional' | 'Technical' | 'Academic' | 'Leadership';
  date?: string;
  metrics?: string;
}

export const achievements: Achievement[] = [
  {
    title: "Customer Obsession Accolade",
    description: "Received 'Customer Obsession' accolade at Amazon for exceptional customer-focused approach.",
    category: "Professional",
    date: "2022-2023",
    metrics: "Recognition award"
  },
  {
    title: "10 Stars Recognition",
    description: "Received 10 stars for task completions at HumAIn, demonstrating consistent high-quality delivery.",
    category: "Professional",
    date: "2024-2025",
    metrics: "10 stars"
  },
  {
    title: "150% Productivity Boost",
    description: "Developed new features for internal utility website that boosted cross-team productivity significantly.",
    category: "Technical",
    date: "2022",
    metrics: "150% increase"
  },
  {
    title: "Platform Performance Enhancement",
    description: "Built backend APIs using Go, improving platform performance by 25% at ChessBase India.",
    category: "Technical",
    date: "2020-2022",
    metrics: "25% improvement"
  },
  {
    title: "Clean Code Delivery",
    description: "Contributed 48 clean pull requests in a 6-member team, delivering on tight deadlines.",
    category: "Professional",
    date: "2024-2025",
    metrics: "48 PRs"
  }
];

// Social Links Data
export interface SocialLink {
  name: string;
  url: string;
  description: string;
  icon: React.ReactNode;
  category: 'Professional' | 'Social' | 'Portfolio' | 'Contact';
}

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ganesh-kantimahanthi-297385154/",
    description: "Connect with me professionally",
    icon: null, // Will be set in component
    category: "Professional"
  },
  {
    name: "GitHub",
    url: "https://github.com/knganesh97",
    description: "Check out my open source projects and contributions",
    icon: null, // Will be set in component
    category: "Professional"
  },
  {
    name: "Email",
    url: "mailto:knganesh97@gmail.com",
    description: "Send me an email for collaborations",
    icon: null, // Will be set in component
    category: "Contact"
  }
];
