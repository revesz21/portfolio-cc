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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,

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
    title: "React JS, MongoDB, Express JS, Node JS",
    icon: web,
  },
  {
    title: "Java, Spring, Spring Boot, Hibernate, PostgreSQL",
    icon: mobile,
  },
  {
    title: "Javascript, Bootstrap, Tailwind, MUI",
    icon: backend,
  },
  {
    title: "English, German, Hungarian",
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
    title: "E-Learning Architect",
    company_name: "CNW Zrt. · Part-time",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2021 - July 2021",
    points: [
      "Coordinated mailings, marketing materials, and website content.",
      "Organized and analyzed data and marketing results.",
      "Analyzed past marketing initiatives and revamped the company's marketing efforts to keep readers and attract new ones.",
      "Skills: Scrum · Presentation Skills · E-Learning · Marketing",
    ],
  },
  {
    title: "Salesperson",
    company_name: "iSTYLE Hungary · Part-time",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 2020 - Jan 2021",
    points: [
      "Settled any customer disputes in a professional and pleasant manner.",
      "Worked to ensure a neat and attractive sales environment, and assisted in the setup of visual displays.",
      "Skills: Sales · Technical Support · Apple Products",
    ],
  },
  {
    title: "Bartender",
    company_name: "Hedon Brewery · Part-time",
    icon: shopify,
    iconBg: "#383E56",
    date: "Sep 2019 - Jul 2020",
    points: [
      "Built positive rapport with guests.",
      "Worked in a collaborative manner with other restaurant employees to ensure outstanding customer experiences.",
      "Skills: Sales · Customer Service",
    ],
    
  },
  {
    title: "Eötvös Loránd University",
    company_name: "BSc in Economics",
    icon: meta,
    iconBg: "#383E56",
    date: "Sep 2019 - 2023",
    points: [
      "Business Economics & Marketing with full state scholarship",
      "Skills: Corporate Finance · Economics · Mathematics · International Business Law · Business · English · Accounting · Hungarian · Psychology · Marketing · German · Cultural Anthropology · Business Law · Econometrics · Statistics",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
