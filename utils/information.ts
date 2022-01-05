import {
  faCloud,
  faFire,
  faEnvelope,
  faDatabase,
  faVirus,
  faUsers,
  faVoicemail,
  faBox,
  faCamera,
  faBoxes,
  faCar,
  faHome,
} from '@fortawesome/free-solid-svg-icons';

import {
  faHtml5,
  faCss3,
  faSass,
  faBootstrap,
  faJsSquare,
  faReact,
  faNodeJs,
  faPhp,
  faLinkedin,
  faPage4,
  faBitcoin,
} from '@fortawesome/free-brands-svg-icons';

export const technologies = [
  {
    title: 'HTML',
    icon: faHtml5,
    url: 'https://en.wikipedia.org/wiki/HTML',
  },
  {
    title: 'CSS',
    icon: faCss3,
    url: 'https://www.w3schools.com/css/css_intro.asp',
  },
  {
    title: 'SASS',
    icon: faSass,
    url: 'https://sass-lang.com/',
  },
  {
    title: 'Tailwind CSS',
    icon: faCss3,
    url: 'https://tailwindcss.com/',
  },
  {
    title: 'Bootstrap',
    icon: faBootstrap,
    url: 'https://getbootstrap.com/',
  },
  {
    title: 'JS',
    icon: faJsSquare,
    url: 'https://www.w3schools.com/whatis/whatis_js.asp',
  },
  {
    title: 'TS',
    icon: faJsSquare,
    url: 'https://www.typescriptlang.org/',
  },
  {
    title: 'React',
    icon: faReact,
    url: 'https://reactjs.org/docs/getting-started.html',
  },
  {
    title: 'React Native',
    icon: faReact,
    url: 'https://reactnative.dev/',
  },
  {
    title: 'Next JS',
    icon: faReact,
    url: 'https://nextjs.org/',
  },
  {
    title: 'Node JS',
    icon: faNodeJs,
    url: 'https://nodejs.org/en/',
  },
  {
    title: 'MongoDB',
    icon: faCloud,
    url: 'https://www.mongodb.com/',
  },
  {
    title: 'Firebase',
    icon: faFire,
    url: 'https://firebase.google.com/',
  },
  {
    title: 'PostgreSQL',
    icon: faDatabase,
    url: 'https://www.postgresql.org/',
  },
  {
    title: 'PHP',
    icon: faPhp,
    url: 'https://www.php.net/',
  },
  {
    title: 'Symfony',
    icon: faPhp,
    url: 'https://symfony.com/',
  },
];

export const extras = [
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
  },
  {
    title: 'Angular / Angular JS',
    url: 'https://angular.io/',
  },
  {
    title: 'Express JS',
    url: 'http://expressjs.com/',
  },
  {
    title: 'Mongoose',
    url: 'https://mongoosejs.com/',
  },
  {
    title: 'JWT',
    url: 'https://jwt.io/',
  },
  {
    title: 'Heroku',
    url: 'https://id.heroku.com/login',
  },
  {
    title: 'Figma',
    url: 'https://www.figma.com/files/recent?fuid=957085985568642901',
  },
];

export const aboutMe = {
  name: 'André Lizarán',
  description: `
  Hi my name is André Lizarán, I'm frontend developer and 21 years old. 
  I love developing simple, and useful interfaces. 
  Mainly I've been working with Typescript and Javascript. I´m from 
  Veracruz, México.`,
};

export const contacts = [
  {
    title: 'Email',
    icon: faEnvelope,
    url: 'mailto:andrelizaran2000@gmail.com',
  },
  {
    title: 'Linkedin',
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/jes%C3%BAs-andr%C3%A9-lizar%C3%A1n-blanco-7342681ab/',
  },
  {
    title: 'Whatsapp',
    icon: faVoicemail,
    url: 'https://www.linkedin.com/in/jes%C3%BAs-andr%C3%A9-lizar%C3%A1n-blanco-7342681ab/',
  },
];

export const experiences = [
  {
    title: 'RayPal',
    description: 'React Native developer',
    technologies: [
      'Firebase',
      'React Native',
      'Expo',
      'React',
      'Tailwind CSS',
      'Next CSS',
      'Axios',
    ],
    initialDate: 'November 2021',
    finishDate: 'Current',
    img: '',
  },
  {
    title: 'Medio Melón',
    description: 'Frontend developer',
    technologies: [
      'React',
      'React Query',
      'Angular JS',
      'JQuery',
      'Redux',
      'Material UI',
    ],
    initialDate: 'November 2021',
    finishDate: 'Current',
    img: '',
  },
  {
    title: 'Academio',
    description: 'Frontend developer',
    technologies: ['React', 'Redux', 'Firebase', 'Material UI'],
    initialDate: 'February 2021',
    finishDate: 'November 2021',
    img: '',
  },
];

export const grades = [
  {
    title: 'Instituto Tecnológico de Veracruz',
    description: 'Computer System Enginnering',
    initialDate: 'August - 2018',
    finishDate: 'January - 2022',
  },
];

export const languages = ['Spanish (Native)', 'English (Advanced)'];

export const hobbies = [
  'Videogames',
  'Programming',
  'Hanging out with friends',
  'Music',
];

export const projects = [
  {
    title: 'Pandemia Tips',
    description:
      'Eiusmod amet deserunt excepteur consequat eu reprehenderit aliqua do non et ullamco amet ipsum eiusmod.',
    images: [''],
    technologies: [
      'React',
      'Tailwind CSS',
      'Axios',
      'Node JS',
      'Express JS',
      'JWT',
    ],
    icon: faVirus,
  },
  {
    title: 'CIS Platform',
    description:
      'Eiusmod amet deserunt excepteur consequat eu reprehenderit aliqua do non et ullamco amet ipsum eiusmod.',
    images: [''],
    technologies: ['Next JS', 'Tailwind CSS', 'Axios'],
    icon: faUsers,
  },
  {
    title: 'Raypal Test',
    description:
      'Eiusmod amet deserunt excepteur consequat eu reprehenderit aliqua do non et ullamco amet ipsum eiusmod.',
    images: [''],
    technologies: ['Next JS', 'Tailwind CSS', 'Axios'],
    icon: faBoxes,
  },
  {
    title: 'Libereth Test',
    description:
      'Eiusmod amet deserunt excepteur consequat eu reprehenderit aliqua do non et ullamco amet ipsum eiusmod.',
    images: [''],
    technologies: ['Next JS', 'Tailwind CSS', 'Axios'],
    icon: faBox,
  },
  {
    title: 'Blau Web',
    description:
      'Eiusmod amet deserunt excepteur consequat eu reprehenderit aliqua do non et ullamco amet ipsum eiusmod.',
    images: [''],
    technologies: ['Next JS', 'Tailwind CSS', 'Axios'],
    icon: faHome,
  },
  {
    title: 'Blau Driver',
    description:
      'Eiusmod amet deserunt excepteur consequat eu reprehenderit aliqua do non et ullamco amet ipsum eiusmod.',
    images: [''],
    technologies: ['React Native', 'Axios', 'Firebase'],
    icon: faCar,
  },
  {
    title: 'React Native Crypto',
    description:
      'Eiusmod amet deserunt excepteur consequat eu reprehenderit aliqua do non et ullamco amet ipsum eiusmod.',
    images: [''],
    technologies: ['React Native'],
    icon: faBitcoin,
  },
];
