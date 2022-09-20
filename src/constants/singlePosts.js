import TEXTS from './texts';
import car1 from '../assets/images/blogSinglePage/blogSingle-1.jpg';
import car2 from '../assets/images/blogSinglePage/blogSingle-2.jpg';

const SINGLEPOSTS = [
  {
    id: 1,
    date: TEXTS.blogSinglePage.date,
    title: TEXTS.blogSinglePage.title,
    img1: car1,
    p1: TEXTS.blogSinglePage.content,
    article1: {
      header: TEXTS.blogSinglePage.article1.header,
      p1: TEXTS.blogSinglePage.article1.paragraph1,
      p2: TEXTS.blogSinglePage.article1.paragraph2,
      img2: car2,
    },
    article2: {
      header: TEXTS.blogSinglePage.article2.header,
      p1: TEXTS.blogSinglePage.article2.paragraph1,
      p2: TEXTS.blogSinglePage.article2.paragraph2,
      p3: TEXTS.blogSinglePage.article2.paragraph3,
    },
  },
];

export default SINGLEPOSTS;
