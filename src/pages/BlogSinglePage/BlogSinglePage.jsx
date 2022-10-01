import {
  StyledBlogSinglePage,
  StyledImgWide,
  StyledPost1,
  StyledImg,
  StyledPost2,
} from './BlogSinglePage.style';
import CallToAction from '../../components/organisms/CallToAction';
import { useParams } from 'react-router-dom';
import SINGLEPOSTS from '../../constants/singlePosts';

const BlogSinglePage = () => {
  const { id } = useParams();

  const post = SINGLEPOSTS.find((post) => `${post.id}` === id);
  console.log(post);
  return (
    <>
      <StyledBlogSinglePage>
        <section>
          <p>{post.date}</p>
          <h3>{post.title}</h3>
          <p>{post.p1}</p>
        </section>
        <StyledImgWide img={post.img1} />
        <StyledPost1>
          <h4>{post.article1.header}</h4>
          <p>{post.article1.p1}</p>
          <p>{post.article1.p3}</p>
          <StyledImg img={post.article1.img2} />
        </StyledPost1>
        <StyledPost2>
          <h5>{post.article2.header}</h5>
          <p>{post.article2.p1}</p>
          <p>{post.article2.p2}</p>
          <p>{post.article2.p3}</p>
        </StyledPost2>
      </StyledBlogSinglePage>
      <CallToAction />
    </>
  );
};

export default BlogSinglePage;
