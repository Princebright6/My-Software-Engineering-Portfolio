import { Github, Figma } from 'lucide-react';
import XLogo from '@/components/icons/x-logo';
import WhatsAppLogo from '@/components/icons/whatsapp-logo';

import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNextjs from '/public/images/logos/icon-nextjs.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoExpress from '/public/images/logos/icon-express.svg';
import LogoExpressLight from '/public/images/logos/icon-express-light.svg';
import LogoNest from '/public/images/logos/icon-nest.svg';
import LogoSocket from '/public/images/logos/icon-socket.svg';
import LogoSocketLight from '/public/images/logos/icon-socket-light.svg';
import LogoPostgreSQL from '/public/images/logos/icon-postgresql.svg';
import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';
import LogoPython from '/public/images/logos/icon-python.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoFigma from '/public/images/logos/icon-figma.svg';
import LogoCypress from '/public/images/logos/icon-cypress.svg';
import LogoCypressLight from '/public/images/logos/icon-cypress-light.svg';
import LogoStorybook from '/public/images/logos/icon-storybook.svg';
import LogoGit from '/public/images/logos/icon-git.svg';
import LogoHTML from '/public/images/logos/icon-html.svg';
import LogoCSS from '/public/images/logos/icon-css.svg';
import LogoFlutter from '/public/images/logos/flutter-icon.svg';
import LogoAndroidStudio from '/public/images/logos/android-studio-icon.svg';

import LogoUpwork from '/public/images/logos/logo-upwork.svg';
import LogoCodefiery from '/public/images/logos/codefiery1.jpg';
import LogoGreenApex from '/public/images/logos/logo-greenapex.svg';
import LogoGreenApexLight from '/public/images/logos/logo-greenapex-light.svg';
import LogoQuizbox from '/public/images/logos/quizbox.jpg';
import LogoDotnpixel from '/public/images/logos/logo-dotnpixel.svg';
import LogoDotnpixelLight from '/public/images/logos/logo-dotnpixel-light.svg';

import ProjectAppzone from '/public/images/appzone.png';
import ProjectFoodHub from '/public/images/foodhub.png';
import ProjectPepehousing from '/public/images/project-pepehousing.png';

import AvatarKrisztian from '/public/images/avatar-krisztian.png';
import AvatarEugen from '/public/images/avatar-eugen.png';
import AvatarDummy from '/public/images/avatar-dummy.svg';

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/Princebright6',
  GITHUB_REPO: 'https://github.com/Princebright6/Carset-Application-Admin.git',
  TWITTER: 'https://x.com/CommandaGold',
  FIGMA: 'https://www.figma.com/@Princebright Commanda Gold',
  FIGMA_FILE:
    'https://www.figma.com/design/K26NcwtkxCipd1LPKO3ggg/SNACKS-ORDERING-APP-FOR-MOVIE-THEATER--Community-?node-id=0-1&t=t5yYQsTdeGhQEQ6h-1',
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Projects',
    href: '#projects',
  },
  /*
  {
    label: 'Testimonials',
    href: '#testimonials',
  },
  */
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/Princebright6',
  },
  {
    icon: XLogo,
    url: 'https://x.com/CommandaGold',
  },
  {
    icon: Figma,
    url: 'https://www.figma.com/@Princebright Commanda Gold',
  },
  {
    icon: WhatsAppLogo,
    url: 'https://wa.me/233554152929',
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'HTML',
    logo: LogoHTML,
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    label: 'CSS',
    logo: LogoCSS,
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Typescript',
    logo: LogoTypescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Next.js',
    logo: LogoNextjs,
    url: 'https://nextjs.org/',
  },
  // Backend technologies - commented out as you're still learning them
  /*
  {
    label: 'Node.js',
    logo: LogoNodejs,
    url: 'https://nodejs.org/en',
  },
  {
    label: 'Express.js',
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: 'https://expressjs.com/',
  },
  {
    label: 'Nest.js',
    logo: LogoNest,
    url: 'https://nestjs.com/',
  },
  {
    label: 'Socket.io',
    logo: LogoSocket,
    darkModeLogo: LogoSocketLight,
    url: 'https://socket.io/',
  },
  {
    label: 'PostgreSQL',
    logo: LogoPostgreSQL,
    url: 'https://www.postgresql.org/',
  },
  {
    label: 'MongoDB',
    logo: LogoMongoDB,
    url: 'https://www.mongodb.com/',
  },
  */
  {
    label: 'Python',
    logo: LogoPython,
    url: 'https://www.python.org/',
  },
  // Styling technologies - commented out as you're still learning them
  /*
  {
    label: 'Sass/Scss',
    logo: LogoSass,
    url: 'https://sass-lang.com/',
  },
  */
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
  {
    label: 'Figma',
    logo: LogoFigma,
    url: 'https://www.figma.com/',
  },
  // Testing and Development Tools - commented out as you're still learning them
  /*
  {
    label: 'Cypress',
    logo: LogoCypress,
    darkModeLogo: LogoCypressLight,
    url: 'https://www.cypress.io/',
  },
  {
    label: 'Storybook',
    logo: LogoStorybook,
    url: 'https://storybook.js.org/',
  },
  */
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
  {
    label: 'Flutter',
    logo: LogoFlutter,
    url: 'https://flutter.dev/',
  },
  {
    label: 'Android Studio',
    logo: LogoAndroidStudio,
    url: 'https://developer.android.com/studio',
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoCodefiery,
    logoAlt: 'Codefiery logo',
    position: 'Quality Assurance Engineer / Frontend Developer',
    startDate: new Date(2021, 10),
    currentlyWorkHere: true,
    summary: [
      'Worked with a variety of technologies, including React, Next.js, Typescript,Tailwindcss and others.',
      'Collaborated with developers and designers to build responsive, accessible, and high-performance user interfaces.',
      'Conducted cross-browser and device compatibility testing to ensure consistent performance across different environments.',
      'Contributed to maintaining code quality by reporting bugs early and verifying fixes during development cycles.'
    ],
  },
  {
    logo: LogoQuizbox,
    darkModeLogo: LogoQuizbox,
    logoAlt: 'Quizbox logo',
    position: 'Quality Assurance Engineer',
    startDate: new Date(2022, 11),
    endDate: new Date(2023, 4),
    summary: [
      'Ensure Functionality and Performance Across Devices: Conduct comprehensive testing to verify that applications function as intended across various browsers, screen sizes, and devices, ensuring a seamless user experience.',
      'Identify and Report Bugs Early in the Development Cycle: Collaborate closely with developers to detect, document, and track bugs or usability issues early, helping to maintain high product quality and reduce time spent on post-release fixes.',
      
    ],
  },
  /*
  {
    logo: LogoDotnpixel,
    darkModeLogo: LogoDotnpixelLight,
    logoAlt: 'Dotnpixel logo',
    position: 'Full Stack Developer',
    startDate: new Date(2015, 11),
    endDate: new Date(2017, 4),
    summary: ['Worked as a full stack developer (React / Laravel).'],
  },
  */
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'FoodHub',
    description:
      'A modern food delivery platform that connects users with local restaurants, offering a seamless ordering experience with real-time tracking and secure payment options.',
    url: 'https://www.figma.com/design/GK7YWEoe0ykkh2wQHqfu7J/Eli-Food-Hub?node-id=342-144&t=IDfebpziI3dGH3Bx-1',
    previewImage: ProjectFoodHub,
    technologies: [
      'Figma'
    ],
  },
  {
    name: 'Appzone',
    description:
      'An electrical appliance shopping app.',
    url: 'https://www.figma.com/design/eP8Xf9ljc9S5CgqFUwBdt5/Appzone?node-id=0-1&t=lnrsvpmkz3VEFEHo-1',
    previewImage: ProjectAppzone,
    technologies: [
      'Figma'
    ],
  },
  {
    name: 'Pepehousing',
    description:
      'A platform for renting a flat or room in Poland. You may browse hundreds of verified deals, contact the vendor, and pay online in a simple and secure manner.',
    url: '#',
    previewImage: ProjectPepehousing,
    technologies: [
      'Figma',
    ],
  },
];

/*
export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: 'Krisztian Gyuris',
    personAvatar: AvatarKrisztian,
    title: 'Founder - inboxgenie.io',
    testimonial:
      'Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.',
  },
  {
    personName: 'Eugen Esanu',
    personAvatar: AvatarEugen,
    title: 'Founder - shosho.design',
    testimonial:
      'Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.',
  },
  {
    personName: 'Joe Matkin',
    personAvatar: AvatarDummy,
    title: 'Freelancer',
    testimonial:
      'Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.',
  },
];
*/
