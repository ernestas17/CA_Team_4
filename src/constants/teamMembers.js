import TEXTS from './texts';
import { uid } from 'uid';
import teamMember1 from '../assets/images/aboutUsPage/team/First';

export const TEAM = [
  {
    id: uid(),
    title: `${TEXTS.aboutUsPage.team.memberOne.name}`,
    desc: `${TEXTS.aboutUsPage.team.memberOne.position}`,
    image: `${teamMember1}`,
  },
];
