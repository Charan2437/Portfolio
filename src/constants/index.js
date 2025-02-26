import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  Rakumura,
  carrent,
  jobit,
  tripguide,
  threejs,
  programmingclub,
  afc,
  fusion
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
    url: "https://drive.google.com/drive/folders/1RhPSvDILPMTwwMKdjzVPVWRauOP0aP08?usp=sharing"
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "ML enthusiast",
    icon: mobile,
  },
  {
    title: "React-Native-Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "ML team",
    company_name: "AFC",
    icon: afc,
    iconBg: "#383E56",
    date: "December 2023 - April 2024",
    points: [
      "Member of the AI/ML Team, focusing on advanced computer vision applications",
      "Optimized object-detection models and integrated OpenCV for quadcopter projects",
      "Competed at IIT Roorkee's TechFest, securing 2nd place in Sky Maneuver for the club",
      "Contributed to the development and implementation of autonomous flight systems",
    ],
  },
  {
    title: "Dev Wing Member",
    company_name: "TPC",
    icon: programmingclub,
    iconBg: "#E6DEDD",
    date: "April 2024",
    points: [
      "Core Member of the Dev Wing, actively contributing to club projects and initiatives",
      "Drove AI/ML initiatives, supporting the club's technical advancement",
      "Collaborated with team members on various programming projects and challenges",
      "Participated in knowledge sharing and mentoring activities within the club",
    ],
  },
  {
    title: "Team Lead",
    company_name: "Fusion IIITDMJ",
    icon: fusion,
    iconBg: "#383E56",
    date: "August 2024-April 2025",
    points: [
      "Development Lead overseeing a team of 10, implementing the institute's ERP portal",
      "GitHub lead for the complete project, ensuring streamlined version control",
      "Managed code reviews and collaboration across the project",
      "Implemented best practices for software development and team coordination",
    ],
  },
  {
    title: "Full stack Developer Intern",
    company_name: "Rakumura IT Solutions",
    icon: Rakumura,
    iconBg: "#383E56",
    date: "November 2024 - February 2025",
    points: [
      "Developed and maintained web applications, contributing to successful project deployment and stability",
      "Resolved critical bugs and implemented new features, enhancing system performance and user experience",
      "Utilized AI development tools and documented technical processes",
      "Ensured scalability and maintainability of code through proper documentation and best practices",
    ],
  },
];
const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Learnify",
    description:
      "Learnify personalizes your learning with AI-driven course plans, resource recommendations, and real-time reminders. Track progress and stay on schedule.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/charan2437/learnify",
  },
  {
    name: "Trippy",
    description:
      "Web application that enables users from planning a trip to getting best suggestions of places to visit,things to do,best time to visit etc.A all in One Trip Guide",
    tags: [
      {
        name: "Next Js",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "Aceternity UI,",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "BAI",
    description:
      "BAI predicts the best EV charging spots using AI-driven analysis of location and demand. Optimized for speed and accuracy, it helps plan efficient charging networks in minutes!",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "FastAPI",
        color: "green-text-gradient",
      },
      {
        name: "Pytorch",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
