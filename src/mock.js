// Mock data for Pragati Nagarkar's Portfolio
// Frontend-only portfolio site.

import {
  Code2,
  Database,
  Braces,
  Cpu,
  Palette,
  ShieldCheck,
  Network,
  Smartphone,
  Brain,
  Github,
  Linkedin,
  Mail,
  Phone,
  GraduationCap,
  Award,
  FolderGit2,
} from 'lucide-react';

export const profile = {
  name: 'Pragati Prakash Nagarkar',
  firstName: 'Pragati',
  role: 'Aspiring Software Developer',
  tagline: 'Building meaningful software — one project at a time.',
  location: 'Maharashtra, India',
  available: 'Open to internships & entry-level roles',
  bio: `I'm an Information Technology student with a strong passion for full-stack development, mobile apps, and emerging tech like AI. I love turning ideas into functional, well-crafted products — from web dashboards and Android apps to intelligent assistants. Currently in the exploration phase of my career, I'm building, learning, and growing every single day.`,
  photo:
    'https://customer-assets.emergentagent.com/job_frontend-builder-39/artifacts/o7d1606h_WhatsApp%20Image%202026-04-30%20at%208.12.18%20PM.jpeg',
  email: 'pragatinagarkar1610@gmail.com',
  phone: '+91 8884799773',
  github: 'https://github.com/PragatiNagarkar',
  linkedin: 'https://www.linkedin.com/in/pragati-n-099222313',
};

export const stats = [
  { label: 'Projects Built', value: '3+' },
  { label: 'Certifications', value: '4' },
  { label: 'Core Languages', value: '5' },
  { label: 'Years Learning', value: '3+' },
];

export const education = [
  {
    id: 'btech',
    degree: 'B.Tech in Information Technology',
    school: 'Bachelor of Technology (Lateral Entry)',
    period: '2025 — 2028 (Expected)',
    status: 'Currently Pursuing',
    details:
      'Strengthening expertise in full-stack development, data structures, AI and emerging technologies.',
  },
  {
    id: 'diploma',
    degree: 'Diploma in Computer Engineering',
    school: 'Polytechnic',
    period: 'Completed',
    status: '78%',
    details:
      'Built strong fundamentals in programming, databases and web development.',
  },
  {
    id: 'ssc',
    degree: 'Secondary Education (SSC)',
    school: 'Shri Sanganabasaveshwar Shivyogi Kanya Prashala, Modnimb',
    period: '2022',
    status: '77.80%',
    details:
      'Consistent academic performance with focus on science and mathematics.',
  },
];

export const skillGroups = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: Palette,
    items: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'backend',
    title: 'Backend & DB',
    icon: Database,
    items: ['PHP', 'MySQL'],
  },
  {
    id: 'languages',
    title: 'Languages',
    icon: Braces,
    items: ['Java', 'Python', 'C++'],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    icon: Code2,
    items: ['Android Studio', 'GitHub', 'VS Code'],
  },
  {
    id: 'interests',
    title: 'Focus Areas',
    icon: Cpu,
    items: ['Artificial Intelligence', 'UI/UX Design', 'Networking', 'Cybersecurity'],
  },
];

export const projects = [
  {
    id: 'attendance',
    title: 'Student Attendance Tracker',
    type: 'Web Application',
    description:
      'A role-based attendance system with dashboards and reporting. Teachers mark attendance, admins manage classes, and students view personal reports.',
    tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    icon: GraduationCap,
    highlights: [
      'Role-based authentication (Admin, Teacher, Student)',
      'Dynamic dashboards with attendance analytics',
      'Exportable reports with filters',
    ],
    link: 'https://github.com/PragatiNagarkar',
  },
  {
    id: 'recipe',
    title: 'Recipe Roulette',
    type: 'Android App',
    description:
      'A mobile app that suggests recipes based on ingredients you have. Integrates a public recipe API to surface step-by-step cooking guides.',
    tags: ['Java', 'Android Studio', 'REST API', 'XML'],
    icon: Smartphone,
    highlights: [
      'Ingredient-based recipe discovery',
      'Clean Material UI with smooth transitions',
      'Favorites & offline recipe caching',
    ],
    link: 'https://github.com/PragatiNagarkar',
  },
  {
    id: 'vita',
    title: 'Vita AI Assistant',
    type: 'AI Project',
    description:
      'An AI-powered assistant that provides intelligent conversational responses and context-aware support for everyday queries.',
    tags: ['Python', 'AI / NLP', 'APIs'],
    icon: Brain,
    highlights: [
      'Natural language understanding',
      'Context-aware conversational flow',
      'Modular architecture for easy skill plug-ins',
    ],
    link: 'https://github.com/PragatiNagarkar',
  },
];

export const certifications = [
  {
    id: 'cyber',
    title: 'Cybersecurity Essentials',
    issuer: 'Cisco Networking Academy',
    icon: ShieldCheck,
    year: '2024',
  },
  {
    id: 'linux',
    title: 'Linux Essentials',
    issuer: 'Cisco Networking Academy',
    icon: Network,
    year: '2024',
  },
  {
    id: 'ai',
    title: 'Introduction to AI',
    issuer: 'Cisco Networking Academy',
    icon: Brain,
    year: '2024',
  },
  {
    id: 'it',
    title: 'IT Essentials',
    issuer: 'Cisco Networking Academy',
    icon: Cpu,
    year: '2023',
  },
];

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export const socials = [
  { id: 'github', label: 'GitHub', href: profile.github, icon: Github },
  { id: 'linkedin', label: 'LinkedIn', href: profile.linkedin, icon: Linkedin },
  { id: 'email', label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
  { id: 'phone', label: 'Phone', href: `tel:${profile.phone.replace(/\s/g, '')}`, icon: Phone },
];

export const quickFacts = [
  { icon: GraduationCap, label: 'B.Tech IT, 2028' },
  { icon: FolderGit2, label: '3+ Hands-on Projects' },
  { icon: Award, label: '4 Cisco Certifications' },
];
