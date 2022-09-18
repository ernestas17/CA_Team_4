import { StyledPostsSection, StyledPostsCont } from './PostsSection.style';
import TEXTS from '../../../../constants/texts';
import img1 from '../../../../assets/images/blogPage/postsSection/post1.jpg';
import PostLg from './components/PostLg/PostLg';
import PostSm from './components/PostSm/PostSm';
import POSTS from '../../../../constants/posts';
const PostsSection = () => {
  return (
    <StyledPostsSection>
      <PostLg
        img={img1}
        date={TEXTS.blogPage.postsSection.largePost.date}
        title={TEXTS.blogPage.postsSection.largePost.title}
        content={TEXTS.blogPage.postsSection.largePost.content}
        btnTxt={TEXTS.blogPage.postsSection.largePost.btnTxt}
        path={'/blog/single'}
      />
      <StyledPostsCont>
        {POSTS.map((post) => (
          <PostSm
            key={post.id}
            img={post.img}
            title={post.title}
            path={'/blog/single'}
            date={post.date}
          />
        ))}
      </StyledPostsCont>
    </StyledPostsSection>
  );
};

export default PostsSection;
