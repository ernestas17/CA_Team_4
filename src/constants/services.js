import TEXTS from './texts';
import wrenchIcon from '../assets/icons/services-wrench.svg';
import mechanicIcon from '../assets/icons/services-mechanic.svg';
import dollarIcon from '../assets/icons/services-dollar.svg';
import { uid } from 'uid';

const SERVICES = [
  {
    id: uid(),
    icon: `${wrenchIcon}`,
    title: `${TEXTS.homePage.servicesSection.services.service1.title}`,
    description: `${TEXTS.homePage.servicesSection.services.service1.text}`,
  },
  {
    id: uid(),
    icon: `${mechanicIcon}`,
    title: `${TEXTS.homePage.servicesSection.services.service2.title}`,
    description: `${TEXTS.homePage.servicesSection.services.service2.text}`,
  },
  {
    id: uid(),
    icon: `${dollarIcon}`,
    title: `${TEXTS.homePage.servicesSection.services.service3.title}`,
    description: `${TEXTS.homePage.servicesSection.services.service3.text}`,
  },
];

export default SERVICES;
