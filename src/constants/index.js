export const navLinks = [
  { id: 'about', title: 'About' },
  { id: 'skills', title: 'Skills' },
  { id: 'leetcode', title: 'LeetCode' },
  { id: 'experience', title: 'Experience' },
  { id: 'projects', title: 'Projects' },
  { id: 'contact', title: 'Contact' },
];

export const hero = {
  name: 'John Doe',
  title: 'Senior Frontend Engineer',
  description:
    'I craft exceptional digital experiences with modern web technologies. Passionate about clean code, elegant design, and solving complex problems.',
  cvUrl: '/resume.pdf',
};

export const about = {
  imageSrc: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800',
  bio: "I'm a passionate Frontend Engineer with 5+ years of experience building scalable web applications. I specialize in React, TypeScript, and modern web technologies. My approach combines technical excellence with a keen eye for design, ensuring that every project not only works flawlessly but also delivers an exceptional user experience.",
  bio2: 'When I\'m not coding, you can find me contributing to open-source projects, writing technical articles, or exploring the latest trends in web development.',
};

export const skills = [
  { name: 'React', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Backend' },
  { name: 'MongoDB', category: 'Backend' },
  { name: 'Git', category: 'Tools' },
  { name: 'Docker', category: 'Tools' },
  { name: 'AWS', category: 'Tools' },
  { name: 'Figma', category: 'Design' },
  { name: 'Framer Motion', category: 'Frontend' },
];

export const education = [
  {
    id: 1,
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Technology',
    period: '2017 - 2021',
    description: 'Specialized in Web Development and Software Engineering with a focus on modern frontend technologies.',
    gpa: '3.8/4.0',
    highlights: ['Dean\'s List', 'Full Scholarship', 'Student Developer Award'],
  },
  {
    id: 2,
    degree: 'Advanced Certification in Full-Stack Development',
    institution: 'Tech Academy Online',
    period: '2021 - 2022',
    description: 'Intensive bootcamp covering React, Node.js, and DevOps practices.',
    highlights: ['Top 5% of cohort', 'Capstone Project: E-commerce Platform'],
  },
];

export const experiences = [
  {
    id: 1,
    title: 'Senior Frontend Engineer',
    company: 'TechCorp Inc.',
    period: '2022 - Present',
    description:
      'Leading the development of enterprise-level web applications. Architecting scalable frontend solutions and mentoring junior developers.',
    highlights: [
      'Reduced page load time by 40% through optimization',
      'Led a team of 5 frontend developers',
      'Implemented micro-frontend architecture',
    ],
  },
  {
    id: 2,
    title: 'Frontend Engineer',
    company: 'StartupXYZ',
    period: '2020 - 2022',
    description:
      'Built responsive web applications from scratch using React and TypeScript. Collaborated with designers and backend teams.',
    highlights: [
      'Developed 15+ reusable component libraries',
      'Improved accessibility score to 95+',
      'Implemented CI/CD pipelines',
    ],
  },
  {
    id: 3,
    title: 'Junior Frontend Developer',
    company: 'WebSolutions Co.',
    period: '2019 - 2020',
    description:
      'Developed and maintained client websites. Gained expertise in modern frontend frameworks and best practices.',
    highlights: [
      'Built 20+ responsive websites',
      'Learned React and modern JavaScript',
      'Participated in agile development process',
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/johndoe/ecommerce',
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'A collaborative task management tool with real-time updates, team collaboration features, and advanced filtering.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/johndoe/taskmanager',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description:
      'Beautiful weather dashboard with forecasts, interactive maps, and location-based weather alerts.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'OpenWeather API', 'Chart.js'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/johndoe/weather',
  },
  {
    id: 4,
    title: 'Portfolio CMS',
    description:
      'A headless CMS for managing portfolio content with a beautiful admin interface and REST API.',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'MongoDB', 'Express', 'TailwindCSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/johndoe/portfolio-cms',
  },
];

export const contact = {
  email: 'john.doe@example.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
};

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/johndoe',
    icon: 'Github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/johndoe',
    icon: 'Linkedin',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/johndoe',
    icon: 'Twitter',
  },
  {
    name: 'Email',
    url: 'mailto:john.doe@example.com',
    icon: 'Mail',
  },
];

export const leetcode = {
  totalSolved: 547,
  easy: {
    solved: 187,
    total: 250,
  },
  medium: {
    solved: 234,
    total: 350,
  },
  hard: {
    solved: 126,
    total: 200,
  },
  ranking: 'Top 5%',
  rating: 2847,
  profileUrl: 'https://leetcode.com/johndoe',
};

export const footer = {
  copyright: '2024 John Doe. All rights reserved.',
  quickLinks: [
    { title: 'Privacy Policy', url: '#' },
    { title: 'Terms of Service', url: '#' },
  ],
};
