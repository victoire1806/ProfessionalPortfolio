//import { projectImages } from '../img/projects';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export const pages = ['About', 'Portfolio', 'Contact', 'Skills'];

export const projects = [
  {
    title: 'App Project List',
    notes: [
      '1.DigiArt',
      '2.Password Generator',
      '3.Note Taker',
      '4.Band Tracker',
      '5.Work Day Schedule',
      '6.ReadMe Generator',
      '7.Progressive Budget',
      '8.Note Taker',
      '9.Olympic Medal Tracker',
      '10.Password Generator',

    ],
    source:'https://github.com/victoire1806?tab=repositories',
  },
 
];

export const skills = {
  frontEnd: {
    title: 'Front End',
    notes: [
      'HTML',
      'CSS',
      'JavaScript',
      'JQuery',
      'Bootstrap',
      'Tailwind CSS',
      'Materlialize CSS',
      'Sass CSS',
      'React',
    ],
  },
  backEnd: {
    title: 'Back End',
    notes: [
      'Node.js',
      'Python',
      'C++',
      'linux',
      'Express',
      'REST API  design',
      'GraphQL',
      'MySQL and Sequelize',
      'MongoDB and Mongoose',
    ],
  },
  devTools: {
    title: 'Dev Tools',
    notes: ['Git', 'GitHub', 'VS Code', 'NPM'],
  },
};

export const iconLinks = [
  
  {
    Icon: FaLinkedin,
    link: 'https://www.linkedin.com/in/anne-v-joseph-07720665/',
  },
  { Icon: FaGithub, link: 'https://github.com/settings/profile' },
  { Icon: FaEnvelope, link: 'mailto:victoire1806@yahoo.com' },
];