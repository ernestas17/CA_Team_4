import { StyledBlogPage } from './BlogPage.style';
import OurBlogSection from './components/OurBlogSection/OurBlogSection';
import PostsSection from './components/PostsSection';
import ArticlesSection from './components/ArticlesSection/ArticlesSection';

const BlogPage = () => {
  return (
    <StyledBlogPage>
      <OurBlogSection />
      <PostsSection />
      <ArticlesSection />
    </StyledBlogPage>
  );
};

export default BlogPage;
