import { uid } from 'uid';
import TEXTS from './texts';
import wrenchIcon from '../assets/icons/services-wrench.svg';
import mechanicIcon from '../assets/icons/services-mechanic.svg';
import dollarIcon from '../assets/icons/services-dollar.svg';

const PROVIDEDSERVICES = [
  {
    id: uid(),
    icon: wrenchIcon,
    title: `${TEXTS.aboutUsPage.servicesSection.card1.title}`,
    content: `${TEXTS.aboutUsPage.servicesSection.card1.description}`,
  },
  {
    id: uid(),
    icon: mechanicIcon,
    title: `${TEXTS.aboutUsPage.servicesSection.card2.title}`,
    content: `${TEXTS.aboutUsPage.servicesSection.card2.description}`,
  },
  {
    id: uid(),
    icon: dollarIcon,
    title: `${TEXTS.aboutUsPage.servicesSection.card3.title}`,
    content: `${TEXTS.aboutUsPage.servicesSection.card3.description}`,
  },
];

export default PROVIDEDSERVICES;
