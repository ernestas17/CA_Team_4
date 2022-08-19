import TEXTS from '../../constants/texts';

import {
  StyledFooter,
  StyledCopyrights,
  StyledUl,
  StyledWrapper,
} from './Footer.style';

import { Link } from 'react-router-dom';

const Footer = ({ logo, navLinks }) => {
  const currentYear = new Date().getFullYear();
  return (
    <StyledFooter>
      <StyledWrapper>
        <a href='/'>
          <img src={logo} alt='Logo' />
        </a>
        <nav>
          <StyledUl>
            {navLinks.map((page) => (
              <li key={page.name}>
                <Link to={page.link}>{page.name}</Link>
              </li>
            ))}
          </StyledUl>
        </nav>
        <StyledCopyrights>
          &copy; Copyright {TEXTS.footer.name} {currentYear}
        </StyledCopyrights>
      </StyledWrapper>
    </StyledFooter>
  );
};

export default Footer;
