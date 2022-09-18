import { uid } from 'uid';
import TEXTS from './texts';
import img1 from '../assets/images/blogPage/articlesSection/article1.jpg';
import img2 from '../assets/images/blogPage/articlesSection/article2.jpg';
import img3 from '../assets/images/blogPage/articlesSection/article3.jpg';
import img4 from '../assets/images/blogPage/articlesSection/article4.jpg';
import img5 from '../assets/images/blogPage/articlesSection/article5.jpg';
import img6 from '../assets/images/blogPage/articlesSection/article6.jpg';

const ARTICLES = [
  {
    id: uid(),
    img: img1,
    date: TEXTS.blogPage.articlesSection.article1.date,
    title: TEXTS.blogPage.articlesSection.article1.title,
    content: TEXTS.blogPage.articlesSection.article1.content,
  },
  {
    id: uid(),
    img: img2,
    date: TEXTS.blogPage.articlesSection.article2.date,
    title: TEXTS.blogPage.articlesSection.article2.title,
    content: TEXTS.blogPage.articlesSection.article2.content,
  },
  {
    id: uid(),
    img: img3,
    date: TEXTS.blogPage.articlesSection.article3.date,
    title: TEXTS.blogPage.articlesSection.article3.title,
    content: TEXTS.blogPage.articlesSection.article3.content,
  },
  {
    id: uid(),
    img: img4,
    date: TEXTS.blogPage.articlesSection.article4.date,
    title: TEXTS.blogPage.articlesSection.article4.title,
    content: TEXTS.blogPage.articlesSection.article4.content,
  },
  {
    id: uid(),
    img: img5,
    date: TEXTS.blogPage.articlesSection.article5.date,
    title: TEXTS.blogPage.articlesSection.article5.title,
    content: TEXTS.blogPage.articlesSection.article5.content,
  },
  {
    id: uid(),
    img: img6,
    date: TEXTS.blogPage.articlesSection.article6.date,
    title: TEXTS.blogPage.articlesSection.article6.title,
    content: TEXTS.blogPage.articlesSection.article6.content,
  },
];

export default ARTICLES;
