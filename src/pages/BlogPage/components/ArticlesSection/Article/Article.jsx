import { StyledArticle } from './Article.style';
import { Link } from 'react-router-dom';

const Article = ({ img, date, title, content }) => {
  return (
    <StyledArticle img={img}>
      <div></div>
      <p>{date}</p>
      <Link to={'/blog/single'}>
        <h5>{title}</h5>
      </Link>

      <p>{content}</p>
    </StyledArticle>
  );
};

export default Article;
