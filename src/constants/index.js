import {
  // mobile,
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
  meta,
  starbucks,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
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
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Python Programmer",
    icon: python,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
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
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    icon: starbucks,
    iconBg: "#151030",
    points: [
      "Built and maintained user interfaces with React.js for responsive, cross-device compatibility.",
      "Managed application state using Redux to enhance performance and scalability.",
      "Worked with designers and developers to implement features and resolve issues.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    icon: shopify,
    iconBg: "#151030",
    points: [
      "Designed and implemented responsive websites using HTML, CSS, and JavaScript to ensure a seamless user experience across devices.",
      "Integrated APIs and third-party services to enhance website functionality and user interactions.",
      "Troubleshot and resolved front-end issues, improving website performance and accessibility.",
      "Collaborated with clients and teams to gather requirements and deliver tailored web solutions.",
    ],
  },
  {
    title: "Full stack Developer",
    icon: meta,
    iconBg: "#151030",
    points: [
      "Developed full-stack applications using React for front-end and Node.js for back-end.",
      "Created and integrated RESTful APIs to connect front-end and back-end seamlessly.",
      "Ensured responsive design and optimized performance across different devices.",
      "Worked with teams to gather requirements, implement features, and resolve issues.",
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
    name: "Paradise Nursery",
    description:
      "Web application built with React and Redux Toolkit, designed for efficient nursery management and features scalable state management to handle complex data.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/SumairAziz/E-shopping",
    deployed_link: "https://e-shopping-gray.vercel.app/"
  },
  {
    name: "Copilot with GPT2",
    description:
      " This project replicates the design and functionality of the original GitHub Copilot homepage with a focus on clean and responsive styling.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/SumairAziz/copilotwithgpt2?tab=readme-ov-file",
    deployed_link: "https://copilotwithgpt2.000webhostapp.com/"
  },
  {
    name: "Todo App",
    description:
      "It provides a user-friendly interface for creating, managing, and organizing tasks with efficient state management and responsive design.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/SumairAziz/ToDoAppWithReactJs",
    deployed_link: "https://to-do-app-with-react-js.vercel.app/"
  },
];

export { services, technologies, experiences, testimonials, projects };