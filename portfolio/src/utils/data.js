import {
  Code2,
  GraduationCap,
  Briefcase,
  Award,
  Rocket,
  Heart,
  Coffee,
  BookOpen,
  Zap,
  Database,
  Server,
  Cloud,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';

import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

import PROJECT_IMG_1 from '../assets/images/project-1.png';
import PROJECT_IMG_2 from '../assets/images/project-2.png';

export const SKILLS_CATEGORY = [
  {
    title: 'Frontend',
    icon: Code2,
    description: 'Designing beautiful, responsive user interfaces.',
    skills: [
      { name: 'React', level: 95, color: 'bg-blue-500' },
      { name: 'TypeScript', level: 90, color: 'bg-blue-600' },
      { name: 'Next.js', level: 88, color: 'bg-gray-900' },
      { name: 'Tailwind CSS', level: 92, color: 'bg-cyan-500' },
      { name: 'Framer Motion', level: 20, color: 'bg-pink-500' },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    description: 'Building robust and scalable server-side solutions',
    skills: [
      { name: 'Node.js', level: 90, color: 'bg-green-500' },
      { name: 'Express.js', level: 88, color: 'bg-green-700' },
      { name: 'Springboot', level: 50, color: 'bg-yellow-500' },
      { name: 'Rest APIs', level: 92, color: 'bg-orange-500' },
    ],
  },
  {
    title: 'Database',
    icon: Database,
    description: 'Managing and optimizing data storage',
    skills: [
      { name: 'MongoDB', level: 88, color: 'bg-green-600' },
      { name: 'Redis', level: 85, color: 'bg-blue-500' },
      { name: 'SQL', level: 80, color: 'bg-indigo-600' },
    ],
  },
];

export const TECH_STACK = [
  'JavaScript',
  'TypeScript',
  'HTML5',
  'CSS3',
  'Vite',
  'Jest',
  'Springboot',
];

export const STATS = [
  { number: '5+', label: 'Projects Completed' },
  { number: '1+', label: 'Years Experience' },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'Eduflow',
    description:
      'Created a platform for developers to communicate and interact with each other. Integrated Gemini API for helpful answers to the questions asked.User can ask questions, add code snippets, add tags for specified topics the question is related to. Used MongoDB database to manage and retrieve data. Implemented global search functionality with recommend system to users who are particularly interactive to some topics/tags.',
    image: PROJECT_IMG_1,
    tags: ['Next.js, JavaScript', 'MongoDB', 'SSR'],
    liveUrl: 'https://eduflow-h1qz.vercel.app/',
    githubUrl: 'https://github.com/Sid-bit28/Eduflow',
    featured: false,
    category: 'Full Stack',
  },
  {
    id: 2,
    title: 'CollaboraFest',
    image: PROJECT_IMG_2,
    tags: ['React, Express.js', 'MongoDB', 'Node.js'],
    liveUrl: 'https://eduflow-h1qz.vercel.app/',
    githubUrl: 'https://github.com/Sid-bit28/CollaboraFest',
    featured: false,
    category: 'Full Stack',
  },
];

export const JOURNEY_STEPS = [
  {
    year: '2020',
    title: 'Started learning DSA',
    company: 'Self-Taught',
    description:
      'Started learning core DSA concepts and problem solving using C/C++. Learning hard concepts like Dynamic programming and Graph algos',
    icon: Code2,
    color: 'bg-blue-500',
  },
  {
    year: '2022',
    title: 'First Internship',
    company: 'IMocha',
    description:
      'Joined IMocha as a problem setter. Created problems based on Data Structures & Algorithms. Implemented the entire problem solving, writing a well defined problem statement, deciding constraints, creating test cases and editorials, and a working code for the problem.',
    icon: Briefcase,
    color: 'bg-green-500',
  },
  {
    year: '2023',
    title: 'Web Development Intern',
    company: 'IMocha',
    description:
      'Joined IMocha as a web developer mostly frontend. Working with React and learning modern development practices. Contributed in various assignments and well testimonials.',
    icon: Briefcase,
    color: 'bg-purple-500',
  },
  {
    year: '2023',
    title: 'Research and Innovation Engineer Intern',
    company: 'Adrosonic',
    description:
      'Joined Adrosonic as a R&I Engineer trainee. Worked mostly with senior automation developers for automating solutions using UiPath and Java. Contributed to web development using React and Tailwind CSS',
    icon: Briefcase,
    color: 'bg-orange-500',
  },
  {
    year: '2024',
    title: 'Bachelor Degree',
    company: 'BIT, Mesra',
    description:
      'Graduated from BIT, Mesra with 8.81 CGPA. Got A grades in DSA and Object Oriented programming and Design. Contributed to the ACM and GDSC student clubs as the Competitive Programming lead and mentor.',
    icon: Briefcase,
    color: 'bg-orange-500',
  },
  {
    year: '2024',
    title: 'Research and Innovation Engineer',
    company: 'Adrosonic',
    description:
      'Joined Adrosonic as a R&I Engineer. Collaborated with a four‑person team in the development of the latest website using react. Converted legacy code with modern web frameworks and tools. Worked on reducing the Wait Queue Time of loading critical scripts from 300ms to 4ms by Lazy Loading the render blocking non‑critical CSS resources. Developed CI/CD pipeline for automated pipeline deployment and testing on a routine basis reducing the manual efforts by 80%. Soft Skills: Agile Methodology, Teamwork, Time Management, Communication, Presentation skills.',
    icon: Briefcase,
    color: 'bg-yellow-500',
  },
];
