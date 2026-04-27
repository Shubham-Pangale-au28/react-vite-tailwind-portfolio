export const personal = {
  name: 'Shubham Vishram Pangale',
  title: 'Java Developer | MERN Developer Aspirant',
  email: 'pangaleshubham10@gmail.com',
  phone: '+91 88053 87392',
  phoneHref: 'tel:+918805387392',
  linkedin: 'https://www.linkedin.com/in/shubham-pangale-a525ba1b5/',
  github: 'https://github.com/Shubham-Pangale-au28',
  dob: '04 June 2000',
  gender: 'Male',
  maritalStatus: 'Unmarried',
  locationCurrent: 'Mumbai, Maharashtra',
  locationNative: 'Ratnagiri, Maharashtra',
  profile:
  'Highly self-motivated and goal-oriented professional committed to building a long-term career in developing reliable and scalable software solutions. I am passionate about continuously learning new technologies and improving my technical and problem-solving skills. I enjoy studying, implementing, and validating my knowledge by contributing effectively within collaborative team environments. I aim to grow alongside the organization while delivering high-quality results.'
} as const

export const experience = [
  {
    company: 'Sublime Technocorp Pvt. Ltd',
    location: 'Mumbai',
    role: 'Full Stack Developer',
    period: 'Feb 2026 – Present',
    highlights: [
      'Developed responsive web applications with React.js.',
      'Implemented Google reCAPTCHA for secure authentication and bot prevention.',
      'Translated Figma designs into pixel-perfect UI with strong UX focus.',
      'Built reusable components, improved UX through interactive, optimised interfaces.',
    ],
  },
  {
    company: 'Navadhan Capital Pvt. Ltd',
    location: 'Mumbai',
    role: 'Software Development Engineer',
    period: 'Dec 2025 – Feb 2026',
    highlights: [
      'Built a Node.js automation service using Selenium for image processing.',
      'Automated distribution to ~50 WhatsApp groups via whatsapp-web.js.',
      'Used Worker Threads for parallel processing and better throughput.',
      'Delivered automated image download and distribution with tuned execution.',
    ],
  },
  {
    company: 'Agami Tech Pvt. Ltd',
    location: 'Surat',
    role: 'Software Developer – II',
    period: 'Jan 2023 – Nov 2025',
    highlights: [
      'Shipped high-performance web apps with React.js, Next.js, JavaScript, HTML, and CSS.',
      'REST APIs with Node.js, Express.js, and Spring (auth, business logic, data).',
      'MongoDB and MySQL design, query tuning, and data integrity.',
      'Refactored heavy SQL with Java multithreading and collections (up to ~10× speed-up).',
      'Real-time features with Socket.io: chat, presence, and activity tracking.',
      'Chat and chatbot work with Chatbase analytics for engagement insights.',
      'Code reviews, performance work, and Jenkins CI/CD; GitHub and GitLab.',
    ],
  },
] as const

export const education = [
  {
    title: 'Full Stack Web Development (MERN)',
    org: 'AttainU',
    period: 'Nov 2021 – Nov 2022',
    detail: 'Intensive MERN stack programme.',
  },
  {
    title: 'B.E. Electronics & Telecommunication Engineering',
    org: 'Rajendra Mane College of Engineering and Technology, Devrukh, Sangmeshwar',
    period: 'Jul 2018 – Jul 2022',
    detail: 'First rank in branch · CGPA 8.19',
  },
] as const

export const skills = [
  'Java',
  'Spring Boot',
  'Thread',
  'React.js',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Python',
  'MongoDB',
  'MySQL',
  'PostgreSQL',
  'Prisma',
  'Socket.io',
  'Docker',
  'Nginx',
  'Jenkins',
  'Git',
  'MUI',
  'Cursor',
  'Codex',
] as const

export const languages = [
  { name: 'English', level: 'Professional working proficiency' },
  { name: 'Hindi', level: 'Native / bilingual' },
  { name: 'Marathi', level: 'Native / bilingual' },
] as const

export const projects = [
  {
    name: 'Task Manager App',
    type: 'Backend',
    period: 'Jul 2022',
    description:
      'Backend-focused task management API and workflows from the AttainU curriculum.',
    tags: ['Node.js', 'REST', 'MongoDB'],
    github: 'https://github.com/attainu/backend-project-Shubham-Pangale-au28',
    live: null as string | null,
  },
  {
    name: 'Coffee Shop Website',
    type: 'Frontend',
    period: 'May 2022',
    description: 'Marketing-style frontend for a coffee shop with responsive layout.',
    tags: ['React', 'HTML', 'CSS'],
    github: 'https://github.com/Shubham-Pangale-au28/Coffee-Shop-Website',
    live: 'https://shubhampangaleportfolio.netlify.app',
  },
  {
    name: 'The Memory App',
    type: 'Full Stack',
    period: 'Sep 2022 – Oct 2022',
    description: 'Capstone full-stack application with auth, data layer, and UI.',
    tags: ['MERN', 'Full Stack'],
    github: 'https://github.com/attainu/capstone-project-Shubham-Pangale-au28',
    live: null as string | null,
  },
] as const

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
] as const

export const sectionIds = navItems.map((n) => n.id)
