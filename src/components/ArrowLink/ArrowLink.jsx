import { StyledArrowLink } from './ArrowLink.style';
import { Link } from 'react-router-dom';
import arrowIcon from '../../assets/icons/componentIcons/Arrow.svg';

const ArrowLink = ({ link, text }) => {
  return (
    <StyledArrowLink>
      <Link to={link}>{text}</Link>
      <img src={arrowIcon} alt='arrow' />
    </StyledArrowLink>
  );
};

export default ArrowLink;
