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
  school,
  mutu,
  gundar,
  sqii,
  nodejs,
  reactjs,
  msql,
  git,
  figma,
  nsi,
  muajeje,
  fph8,
  oilcoco,
  sau,
  arabic,
  easysoft,
  mysql,
  mobirise,
  spring,
  postman,
  postgresql
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
    name: "React JS",
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
    name: "Node.js",
    icon: nodejs,
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
    name: "Mobirise",
    icon: mobirise,
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
    title: "Founder",
    companyName: "Galaksi Teknologi Nusantara",
    icon: "",
    iconBg: "#E6DEDD",
    date: "Sep 2025 - Now",
    points: [
      "Lead application development services and digital product initiatives",
      "Responsible for business planning, team management, and collaboration with schools and marketing agencies to design technology solutions, develop promotional strategies, and expand partner networks"
    ],
  },
  {
    title: "Software Developer (Contract)",
    companyName: "PT Easysoft Indonesia",
    icon: easysoft,
    iconBg: "#E6DEDD",
    date: "Jul 2024 - Oct 2024",
    points: [
      "Developed an admin application using React.js with a futuristic UI to enhance user experience.",
      "Built a Spring Boot system with CRUD functionality, asynchronous & synchronous processing, and ThreadPool concurrency management.",
      "Designed mockups with Figma and collaborated closely with the lead developer.",
      "Contributed to an editable chat feature (15-minute window) with initial exposure to Kotlin.",
      "Trained an AI Chatbot dataset using the 5W1H method to improve accuracy and relevance.",
    ],
  },
  {
    title: "ICT Staff (Contract)",
    companyName: "PT Sucofindo Advisory Utama",
    icon: sau,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Jan 2024",
    points: [
      "Supported ICT operations and testing while contributing to internal projects using Laravel, PostgreSQL, and ERD design.",
      "Designed basic ERD structures and created UI mockups in Figma.",
      "Conducted introductory HTML training for staff to improve digital literacy.",
    ],
  },
  {
    title: "IT Programmer",
    companyName: "Mutu Certification International",
    icon: mutu,
    iconBg: "#E6DEDD",
    date: "Apr 2022 - Jul 2022",
    points: [
      "Built a web mapping application using Python, PHP, JavaScript, MySQL, and Leaflet.js.",
      "Designed and integrated ERD structures, ensuring optimized database performance.",
      "Created interactive location data selection & visualization features with Leaflet.js.",
      "Developed backend application mockups in Figma, then implemented with PHP, JS, HTML, and CSS.",
      "Presented proposals to the supervisory team, showcasing workflow and application benefits.",
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
        name: "postgresql",
        color: "blue-text-gradient",
      },
      {
        name: "postman-api",
        color: "orange-text-gradient",
      }
    ],
    image: school,
    sourceCodeLink: "https://github.com/nsi-hpkom",
    websiteLink: "https://nsi.athenateknologi.com/"
  },
  {
    name: "Website of Arabic Vocabulary Learning",
    description:
      "Develop the website backend and frontend. And, test the API of Arabic Vocabulary Learning Website with Spring Boot, React.js, PostgreSQL and Postman API.",
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
        name: "postgresql",
        color: "blue-text-gradient",
      },
      {
        name: "postman-api",
        color: "orange-text-gradient",
      }
    ],
    image: arabic,
    sourceCodeLink: "https://github.com/nsi-hpkom",
    websiteLink: "https://nsi.athenateknologi.com/"
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
      }
    ],
    image: nsi,
    sourceCodeLink: "https://github.com/nsi-hpkom",
    websiteLink: "https://nsi.athenateknologi.com/"
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
      }
    ],
    image: muajeje,
    sourceCodeLink: "https://github.com/silverbladeidn/MuaByJelita",
    websiteLink: "https://muabyjelita.aribiya.com/"
  },
  {
    name: "Distribution of Oil and Coconut Consumers Web Mapping",
    description:
      "Develop the web mapping of Distribution of Oil and Coconut Consumers with Laravel, AJAX, Bootstrap, Mobirise, Leaflet.js, and MySQL.",
    tags: [
      {
        name: "laravel",
        color: "pink-text-gradient",
      },
      {
        name: "mysql",
        color: "orange-text-gradient",
      },
      {
        name: "postman-api",
        color: "orange-text-gradient",
      },
      {
        name: "mobirise",
        color: "orange-text-gradient",
      }
    ],
    image: oilcoco,
    sourceCodeLink: "https://github.com/silverbladeidn/OilCocoMap",
    websiteLink: "https://oilcoco.aribiya.com/"
  },
  {
    name: "Final Project of Hacktiv8",
    description:
      "Develop the front end of Movie website with React.Js.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      }
    ],
    image: fph8,
    sourceCodeLink: "https://github.com/silverbladeidn/Final-Project-H8_Ari",
    websiteLink: "https://final-project-h8-kfjk0pw0w-aris-projects-a196f4da.vercel.app/"
  },
];

export { services, technologies, experiences, educations, testimonials, projects };
