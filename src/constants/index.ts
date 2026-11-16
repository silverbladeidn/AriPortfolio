import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TEducation,
  TProject,
} from "../types";

import {
  vue,
  laravel,
  express,
  nocturnity,
  expresscomp,
  school,
  mutu,
  gundar,
  sqii,
  reactjs,
  msql,
  tribhakti,
  git,
  figma,
  nsi,
  muajeje,
  sau,
  easysoft,
  mysql,
  spring,
  goodong,
  ifam,
  postman,
  postgresql,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Spring Developer",
    icon: spring,
  },
  {
    title: "React.js Developer",
    icon: reactjs,
  },
  {
    title: "PHP Laravel Developer",
    icon: laravel,
  },
  {
    title: "Vue.js Developer",
    icon: vue,
  },
];

const technologies: TTechnology[] = [
  {
    name: "React.jS",
    icon: reactjs,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "Vue.js",
    icon: vue,
  },
  {
    name: "Express.js",
    icon: express,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Spring",
    icon: spring,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "MYSql",
    icon: mysql,
  },
  {
    name: "MSql",
    icon: msql,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Postman API",
    icon: postman,
  },
];

const experiences: TExperience[] = [
  {
    title: "Information and Technology Officer",
    companyName: "PT Tribhakti Inspektama",
    icon: tribhakti,
    iconBg: "#E6DEDD",
    date: "Feb 2026 - Now",
    points: [
      "Developed and maintained web-based Driver Booking and Vehicle Management system",
      "Researched and analyzed user requirements across multiple departments to optimize system design",
      "Designed and implemented system flowcharts and relational database schemas supporting CRUD operations and role-based authentication.",
      "Created wireframes and UI mockups using Figma and Draw.io to significantly improve application usability and user experience.",
      "Managed and supported daily office IT operations, network connectivity, and hardware maintenance, including wireless CCTV systems, modems, and printers.",
    ],
  },
  {
    title: "Software Developer (Assistant)",
    companyName: "PT Easysoft Indonesia",
    icon: easysoft,
    iconBg: "#E6DEDD",
    date: "Jul 2024 - Oct 2024",
    points: [
      "Develop an internal admin application using React.js to improve usability and workflow efficiency.",
      "Learn backend services using Java Spring Boot, implementing CRUD operations.",
      "Assist to the lead developer on system design and UI mock up using Figma.",
      "Assist to the web developer team in HTML and CSS Email Template development.",
      "Assist in chatbot dataset preparation using structured 5W1H methods.",
    ],
  },
  {
    title: "ICT Staff (Contract)",
    companyName: "PT Sucofindo Advisory Utama",
    icon: sau,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Jan 2024",
    points: [
      "Join in the team to develop internal web-based systems using Laravel and PostgreSQL.",
      "Design the basic ERD structures and assisted in database-related tasks.",
      "Create the UI mockups using Figma to support internal application development.",
      "Sharing session the introductory HTML for internal staff.",
    ],
  },
  {
    title: "IT Programmer",
    companyName: "Mutu Certification International",
    icon: mutu,
    iconBg: "#E6DEDD",
    date: "Apr 2022 - Jul 2022",
    points: [
      "Developed a web-based mapping application using PHP, Python, JavaScript, MySQL, and Leaflet.js.",
      "Designed and implemented entity relational database diagram to support mapping data.",
      "Created backend application mock up in Figma and implemented them using PHP, HTML, CSS, and JavaScript.",
    ],
  },
];

const educations: TEducation[] = [
  {
    title: "Informatics",
    companyName: "Gunadarma University",
    icon: gundar,
    iconBg: "#E6DEDD",
    date: "September 2018 - September 2022",
    points: [
      "GPA : 3.67/4.00",
      "Activity and Society : Tarung Drajat and Comma Design",
    ],
  },
  {
    title: "Natural Sciences",
    companyName: "SMA Quantum Indonesia",
    icon: sqii,
    iconBg: "#E6DEDD",
    date: "July 2015 - May 2018",
    points: [
      "Final Score : 86/100 (3rd Rank)",
      "Activity and Society : Additional Curriculum of Japanese Club, Band, Traditional Music, Swimming, and Soccer.",
    ],
  },
];

const testimonials: TTestimonial[] = [
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

const projects: TProject[] = [
  {
    name: "Company Inventory Management SaaS Platform (Goodong.id)",
    description:
      "Built dashboard components and managed feature releases for the SaaS platform of Goodong.id using React.js, Laravel, and MySQL.",
    tags: [
      {
        name: "laravel",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
      {
        name: "postman-api",
        color: "orange-text-gradient",
      },
    ],
    image: goodong,
    sourceCodeLink: "https://github.com/silverbladeidn/gudangin-admin-fe",
    sourceCodeLink2: "https://github.com/silverbladeidn/gudangin-be",
    websiteLink: "https://goodong.id",
  },
  {
    name: "Fleet and Asset Management SaaS Platform (IFAM)",
    description:
      "Develop the website backend and frontend. And, test the API of Fleet and Asset Management SaaS Platform (IFAM) with Spring Java, React.js, and PostgreSQL.",
    tags: [
      {
        name: "spring",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "blue-text-gradient",
      },
    ],
    image: ifam,
    sourceCodeLink: "https://github.com/silverbladeidn/ifam-admin-fe",
    sourceCodeLink2: "https://github.com/silverbladeidn/ifam-admin-be",
    websiteLink: "",
  },
  {
    name: "Website of Marketing Agency Company Profile",
    description:
      "Develop the website frontend of Marketing Agency Company Profile Website and integrate the Email Sending feature using React.js, ExpressJS, and Tailwind CSS.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "black-text-gradient",
      },
    ],
    image: nocturnity,
    sourceCodeLink: "https://github.com/silverbladeidn/nocturnity-fe",
    sourceCodeLink2: "https://github.com/silverbladeidn/nocturnity-be",
    websiteLink: "https://nocturnity-creative.vercel.app/",
  },
  {
    name: "Website of Computer Store Management",
    description:
      "Develop the website backend and frontend. And, connect the API of Computer Store Management Website with Express.js, Vue.js, and MySQL.",
    tags: [
      {
        name: "expressjs",
        color: "black-text-gradient",
      },
      {
        name: "vuejs",
        color: "green-text-gradient",
      },
    ],
    image: expresscomp,
    sourceCodeLink: "https://github.com/silverbladeidn/express-vue-electronic",
    sourceCodeLink2: "",
    websiteLink: "",
  },
  {
    name: "Website of School Invetory Management",
    description:
      "Develop the website backend and frontend. And, test the API of School Invetory Management Website with Laravel, React.js, MySQL and Postman API.",
    tags: [
      {
        name: "laravel",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
      {
        name: "postman-api",
        color: "orange-text-gradient",
      },
    ],
    image: school,
    sourceCodeLink: "https://github.com/silverbladeidn/inventopia-fe",
    sourceCodeLink2: "https://github.com/silverbladeidn/inventopia-be",
    websiteLink: "",
  },
  {
    name: "Production and Distribution of Chemical Factory Website",
    description:
      "Develop the website backend and frontend. And, test the API of Production and Distribution of Chemical Factory with Vue.js, Laravel 10, Laragon and Postman API.",
    tags: [
      {
        name: "laravel",
        color: "pink-text-gradient",
      },
      {
        name: "vue",
        color: "green-text-gradient",
      },
      {
        name: "laragon",
        color: "blue-text-gradient",
      },
      {
        name: "postman-api",
        color: "orange-text-gradient",
      },
      {
        name: "msql",
        color: "orange-text-gradient",
      },
    ],
    image: nsi,
    sourceCodeLink: "https://github.com/nsi-hpkom/fe",
    sourceCodeLink2: "https://github.com/nsi-hpkom/be",
    websiteLink: "",
  },
  {
    name: "Make Up Artist's Portfolio Website",
    description:
      "Develop the website of Makeup Artist Portfolio with React.js and Bootstrap 5. And, the frontend was integrated with API from Laravel 11 and MySQL Database.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },

      {
        name: "laravel",
        color: "pink-text-gradient",
      },
      {
        name: "laragon",
        color: "blue-text-gradient",
      },
      {
        name: "postman-api",
        color: "orange-text-gradient",
      },
      {
        name: "mysql",
        color: "orange-text-gradient",
      },
    ],
    image: muajeje,
    sourceCodeLink: "https://github.com/silverbladeidn/MuaByJelita",
    sourceCodeLink2: "https://github.com/silverbladeidn/nocturnity-be",
    websiteLink: "https://mua-by-jelita.vercel.app/",
  },
];

export {
  services,
  technologies,
  experiences,
  educations,
  testimonials,
  projects,
};
