/**
 * Resume Data - Extracted from Muhammad Saram's CV
 * All content is dynamically generated from the uploaded resume
 */

export const personalInfo = {
  name: "Muhammad Saram",
  title: "Frontend React Engineer & AI Student",
  tagline: "Building high-fidelity, component-driven web interfaces with React.js & MERN Stack",
  location: "Faisalabad, Punjab, Pakistan",
  email: "saramxhk10@gmail.com",
  phone: "+923002502926",
  avatar: "/avatar.jpg",
  summary: `Frontend-focused React Engineer with production experience building high-fidelity, component-driven web interfaces. Skilled at translating Figma wireframes and design mockups into responsive, pixel-accurate UIs using React.js, HTML5, CSS3, and 3rd-party UI libraries. Developed a full-stack MERN platform with end-to-end API integration and a mobile-first architecture. Currently pursuing a BS in Artificial Intelligence, with a strong foundation in software design, OOP, and Agile workflows.`,
  careerGoal: "Eager to contribute to a senior-led team delivering world-class products while continuously expanding expertise in AI/ML integration with modern web technologies.",
  passion: "Passionate about creating seamless user experiences, clean component architectures, and leveraging AI to build intelligent web applications that solve real-world problems.",
};

export const skills = {
  Languages: {
    icon: "Code2",
    color: "from-accent-cyan to-primary-400",
    items: [
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "TypeScript", level: 70 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
    ],
  },
  "Frontend & UI": {
    icon: "Layout",
    color: "from-primary-400 to-accent-purple",
    items: [
      { name: "React.js", level: 92 },
      { name: "React Native", level: 65 },
      { name: "Component Architecture", level: 88 },
      { name: "Responsive & Mobile-First", level: 90 },
    ],
  },
  "UI Libraries": {
    icon: "Palette",
    color: "from-accent-purple to-accent-rose",
    items: [
      { name: "Bootstrap", level: 85 },
      { name: "Material UI", level: 80 },
      { name: "Tailwind CSS", level: 88 },
    ],
  },
  "Backend & APIs": {
    icon: "Server",
    color: "from-accent-emerald to-accent-cyan",
    items: [
      { name: "Node.js", level: 82 },
      { name: "Express.js", level: 80 },
      { name: "RESTful APIs", level: 88 },
      { name: "JWT Authentication", level: 75 },
      { name: "MongoDB (NoSQL)", level: 78 },
    ],
  },
  "Design & Tools": {
    icon: "Figma",
    color: "from-accent-rose to-accent-amber",
    items: [
      { name: "Figma", level: 85 },
      { name: "Git & GitHub", level: 88 },
      { name: "VS Code", level: 92 },
      { name: "Postman", level: 80 },
      { name: "Agile/Scrum", level: 85 },
    ],
  },
};

export const experience = [
  {
    id: 1,
    role: "React / MERN Stack Developer Intern",
    company: "Nexape",
    location: "Faisalabad, Pakistan",
    period: "Jun 2025 — Oct 2025",
    type: "work",
    highlights: [
      "Developed production-level React.js features with reusable, modular UI components — increasing component reuse by ~40%",
      "Translated Figma wireframes into fully functional, responsive React components with state management and hooks",
      "Integrated RESTful API endpoints (Node.js/Express.js) into React frontend for reliable data flow",
      "Leveraged 3rd-party UI libraries to maximize reuse and accelerate delivery",
      "Collaborated in structured code reviews within Agile/Scrum team workflows",
    ],
  },
  {
    id: 2,
    role: "Development Intern",
    company: "Career Institute",
    location: "Faisalabad, Pakistan",
    period: "Jun 2024 — Aug 2024",
    type: "work",
    highlights: [
      "Completed intensive training in frontend and full-stack web development",
      "Built practical proficiency in JavaScript, React.js, HTML5, CSS3, and component-driven architecture",
      "Assisted senior developers in building and testing application modules across the SDLC",
      "Applied OOP principles and functional programming patterns in JavaScript projects",
    ],
  },
];

export const education = [
  {
    id: 1,
    degree: "BS in Artificial Intelligence",
    institution: "University of Faisalabad",
    location: "Faisalabad, Pakistan",
    period: "Jan 2022 — Jan 2026",
    type: "education",
    details: "Relevant coursework: Data Structures & Algorithms, Object-Oriented Programming, Web Technologies, Software Design, Machine Learning",
  },
  {
    id: 2,
    degree: "Matriculation in Computer Science",
    institution: "Lahore Lyceum",
    location: "Lahore, Pakistan",
    period: "2021",
    type: "education",
    details: "Foundation in Computer Science principles and programming fundamentals",
  },
];

export const projects = [
  {
    id: 1,
    name: "Smart-AD Suite",
    subtitle: "AI-Powered Ad Automation Platform",
    org: "University of Faisalabad",
    period: "2024 — 2026",
    description:
      "Full-stack MERN web application with a React.js dashboard and a multi-agent AI pipeline that automates digital ad creation and multi-platform publishing. Built mobile-first for real-world deployment.",
    highlights: [
      "Engineered React.js frontend dashboard with reusable component libraries and responsive mobile-first layouts",
      "Integrated Google Ads API and Meta Marketing API via Node.js/Express.js API layer",
      "Implemented multi-agent AI pipeline (Vision, Keyword, Ad Writer, Compliance, Auto-Publishing agents)",
      "Applied MVC architecture and modular design principles throughout",
      "Delivered across 18 Agile/Scrum sprints with full technical documentation",
    ],
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "TypeScript",
      "RESTful APIs",
      "Google Ads API",
      "Meta Marketing API",
      "Clarifai",
      "Figma",
      "Git/GitHub",
    ],
    github: "https://github.com/saramxhk/smart-ad-suite",
    demo: "https://smart-ad-suite.vercel.app",
    featured: true,
  },
  {
    id: 2,
    name: "Portfolio Website",
    subtitle: "Personal Developer Portfolio",
    org: "Personal Project",
    period: "2025",
    description:
      "A modern, animated portfolio website built with React.js, Tailwind CSS, and Framer Motion. Features dark mode, smooth animations, and responsive design.",
    highlights: [
      "Built with React.js and Tailwind CSS for modern styling",
      "Implemented Framer Motion animations for smooth transitions",
      "Fully responsive design with dark/light mode toggle",
      "SEO-optimized structure with semantic HTML",
    ],
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "Vite", "Lucide React"],
    github: "https://github.com/saramxhk/portfolio",
    demo: "https://saram.dev",
    featured: false,
  },
  {
    id: 3,
    name: "E-Commerce Dashboard",
    subtitle: "Admin Dashboard with Analytics",
    org: "Personal Project",
    period: "2025",
    description:
      "A comprehensive e-commerce admin dashboard with real-time analytics, order management, and inventory tracking built with React.js and Material UI.",
    highlights: [
      "Built responsive admin dashboard with Material UI components",
      "Implemented data visualization with charts and graphs",
      "Created reusable table components with sorting and filtering",
      "Integrated mock REST API for data fetching",
    ],
    tech: ["React.js", "Material UI", "Chart.js", "REST APIs", "JavaScript"],
    github: "https://github.com/saramxhk/ecommerce-dashboard",
    demo: "https://ecommerce-dashboard-demo.vercel.app",
    featured: false,
  },
];

export const certifications = [
  {
    id: 1,
    name: "Cisco JavaScript Essential 1",
    issuer: "Cisco Networking Academy",
    date: "2024",
    icon: "Award",
    color: "from-primary-500 to-primary-600",
  },
  {
    id: 2,
    name: "Cisco JavaScript Essential 2",
    issuer: "Cisco Networking Academy",
    date: "2024",
    icon: "Award",
    color: "from-primary-500 to-primary-600",
  },
];

export const socialLinks = {
  github: "https://github.com/saramxhk",
  linkedin: "https://linkedin.com/in/muhammad-saram",
  twitter: "https://twitter.com/saramxhk",
  email: "saramxhk10@gmail.com",
  phone: "+923002502926",
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];
