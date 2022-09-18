import { StyledArrowLink } from './ArrowLink.style';
import { Link } from 'react-router-dom';
import { ArrowIcon } from '../../../assets/icons';

const ArrowLink = ({ link, text }) => {
  return (
    <StyledArrowLink>
      <Link to={link}>
        {text}
        <ArrowIcon />
      </Link>
    </StyledArrowLink>
  );
};

export default ArrowLink;
