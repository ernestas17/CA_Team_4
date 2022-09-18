import TEXTS from './texts';
import { uid } from 'uid';
import img2 from '../assets/images/blogPage/postsSection/post2.jpg';
import img3 from '../assets/images/blogPage/postsSection/post3.jpg';
import img4 from '../assets/images/blogPage/postsSection/post4.jpg';

const POSTS = [
  {
    id: uid(),
    img: img2,
    title: TEXTS.blogPage.postsSection.posts.post1.title,
    date: TEXTS.blogPage.postsSection.posts.post1.date,
  },
  {
    id: uid(),
    img: img3,
    title: TEXTS.blogPage.postsSection.posts.post2.title,
    date: TEXTS.blogPage.postsSection.posts.post2.date,
  },
  {
    id: uid(),
    img: img4,
    title: TEXTS.blogPage.postsSection.posts.post3.title,
    date: TEXTS.blogPage.postsSection.posts.post3.date,
  },
];

export default POSTS;
