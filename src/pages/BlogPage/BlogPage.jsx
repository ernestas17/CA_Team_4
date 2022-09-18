import { StyledBlogPage } from './BlogPage.style';
import OurBlogSection from './components/OurBlogSection/OurBlogSection';
import PostsSection from './components/PostsSection';

const BlogPage = () => {
  return (
    <StyledBlogPage>
      <OurBlogSection />
      <PostsSection />
    </StyledBlogPage>
  );
};

export default BlogPage;
