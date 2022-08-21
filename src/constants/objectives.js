import TEXT from '../constants/texts';
import image1 from '../assets/images/aboutUsPage/objectives/Image.png';
import image2 from '../assets/images/aboutUsPage/objectives/Image2.png';
import image3 from '../assets/images/aboutUsPage/objectives/Image3.png';
import { uid } from 'uid';

const OBJECTIVES = [
  {
    id: uid(),
    img: `${image1}`,
    title: `${TEXT.aboutUsPage.objectives.titles.titleFirst}`,
    desc: `${TEXT.aboutUsPage.objectives.description}`,
    color: `#F85B29`,
  },
  {
    id: uid(),
    img: `${image2}`,
    title: `${TEXT.aboutUsPage.objectives.titles.titleSecond}`,
    desc: `${TEXT.aboutUsPage.objectives.description}`,
    color: `#000000`,
  },
  {
    id: uid(),
    img: `${image3}`,
    title: `${TEXT.aboutUsPage.objectives.titles.titleThird}`,
    desc: `${TEXT.aboutUsPage.objectives.description}`,
    color: `#7443CA`,
  },
];

export default OBJECTIVES;
