import { StyledPostLg } from './PostLg.style';
import ArrowLink from '../../../../../../components/atoms/ArrowLink';
import { Link } from 'react-router-dom';

const PostLg = ({ img, date, title, content, btnTxt, path }) => {
  return (
    <StyledPostLg img={img}>
      <div></div>
      <p>{date}</p>
      <Link to={path}>
        <h4>{title}</h4>
      </Link>
      <p>{content}</p>
      <ArrowLink text={btnTxt} link={path} />
    </StyledPostLg>
  );
};

export default PostLg;
