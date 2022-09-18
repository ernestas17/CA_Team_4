import { StyledPostSm } from './PostSm.style';
import { Link } from 'react-router-dom';

const PostSm = ({ img, title, path, date }) => {
  return (
    <StyledPostSm img={img}>
      <Link to={path}></Link>
      <div></div>
      <div>
        <Link to={path}><h5>{title}</h5></Link>
        <p>{date}</p>
      </div>
    </StyledPostSm>
  );
};

export default PostSm;
