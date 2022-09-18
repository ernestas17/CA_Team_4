import { StyledArticlesSection } from './ArticlesSection.style';
import Article from './Article/Article';
import ARTICLES from '../../../../constants/articles';
const ArticlesSection = () => {
  return (
    <StyledArticlesSection>
      {ARTICLES.map((article) => (
        <Article
          key={article.id}
          img={article.img}
          date={article.date}
          title={article.title}
          content={article.content}
        />
      ))}
    </StyledArticlesSection>
  );
};

export default ArticlesSection;
