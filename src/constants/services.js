import TEXTS from './texts';
import { uid } from 'uid';
import iconOne from '../assets/icons/aboutUsPage/Icon.png';
import serviceIconTwo from '../assets/icons/aboutUsPage/Icon2.svg';
import serviceIconThree from '../assets/icons/aboutUsPage/Icon3.svg';

const SERVICES = [
  {
    id: uid(),
    icon: `${iconOne}`,
    title: `${TEXTS.aboutUsPage.service.convenient.title}`,
    description: `${TEXTS.aboutUsPage.service.convenient.description}`,
  },
  {
    id: uid(),
    icon: `${serviceIconTwo}`,
    title: `${TEXTS.aboutUsPage.service.expert.title}`,
    description: `${TEXTS.aboutUsPage.service.expert.description}`,
  },
  {
    id: uid(),
    icon: `${serviceIconThree}`,
    title: `${TEXTS.aboutUsPage.service.transparent.title}`,
    description: `${TEXTS.aboutUsPage.service.transparent.description}`,
  },
];

export default SERVICES;
