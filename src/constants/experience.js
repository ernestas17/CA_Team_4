import TEXTS from './texts';
import { uid } from 'uid';

const EXPERIENCE = [
  {
    id: uid(),
    number: TEXTS.homePage.experienceSection.experience1.number,
    text: TEXTS.homePage.experienceSection.experience1.text,
  },
  {
    id: uid(),
    number: TEXTS.homePage.experienceSection.experience2.number,
    text: TEXTS.homePage.experienceSection.experience2.text,
  },
  {
    id: uid(),
    number: TEXTS.homePage.experienceSection.experience3.number,
    text: TEXTS.homePage.experienceSection.experience3.text,
  },
  {
    id: uid(),
    number: TEXTS.homePage.experienceSection.experience4.number,
    text: TEXTS.homePage.experienceSection.experience4.text,
  },
];

export default EXPERIENCE;
