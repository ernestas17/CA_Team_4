import { StyledArticle } from './Article.style';

const Article = ({ img, date, title, content }) => {
  return (
    <StyledArticle img={img}>
      <div></div>
      <p>{date}</p>
      <h5>{title}</h5>
      <p>{content}</p>
    </StyledArticle>
  );
};

export default Article;
