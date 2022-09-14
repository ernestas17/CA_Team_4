import TEXTS from './texts';
import { uid } from 'uid';
import teamMember1 from '../assets/images/aboutUsPage/teamSection/teamMember1.jpg';
import teamMember2 from '../assets/images/aboutUsPage/teamSection/teamMember2.jpg';
import teamMember3 from '../assets/images/aboutUsPage/teamSection/teamMember3.jpg';
import teamMember4 from '../assets/images/aboutUsPage/teamSection/teamMember4.jpg';
import teamMember5 from '../assets/images/aboutUsPage/teamSection/teamMember5.jpg';
import teamMember6 from '../assets/images/aboutUsPage/teamSection/teamMember6.jpg';

export const TEAM = [
  {
    id: uid(),
    name: `${TEXTS.aboutUsPage.team.member1.name}`,
    specialty: `${TEXTS.aboutUsPage.team.member1.position}`,
    image: `${teamMember1}`,
  },
  {
    id: uid(),
    name: `${TEXTS.aboutUsPage.team.member2.name}`,
    specialty: `${TEXTS.aboutUsPage.team.member2.position}`,
    image: `${teamMember2}`,
  },
  {
    id: uid(),
    name: `${TEXTS.aboutUsPage.team.member3.name}`,
    specialty: `${TEXTS.aboutUsPage.team.member3.position}`,
    image: `${teamMember3}`,
  },
  {
    id: uid(),
    name: `${TEXTS.aboutUsPage.team.member4.name}`,
    specialty: `${TEXTS.aboutUsPage.team.member4.position}`,
    image: `${teamMember4}`,
  },
  {
    id: uid(),
    name: `${TEXTS.aboutUsPage.team.member5.name}`,
    specialty: `${TEXTS.aboutUsPage.team.member5.position}`,
    image: `${teamMember5}`,
  },
  {
    id: uid(),
    name: `${TEXTS.aboutUsPage.team.member6.name}`,
    specialty: `${TEXTS.aboutUsPage.team.member6.position}`,
    image: `${teamMember6}`,
  },
];
