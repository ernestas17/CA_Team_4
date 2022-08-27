import TEXTS from '../../../constants/texts';
import { Link } from 'react-router-dom';
import { LogoIcon } from '../../../assets/icons';
import { StyledFooter, StyledWrapper } from './Footer.style';

const Footer = ({ navLinks }) => {
  const currentYear = new Date().getFullYear();
  return (
    <StyledFooter>
      <StyledWrapper>
        <Link to={'/'}>
          <LogoIcon />
        </Link>
        <nav>
          <ul>
            {navLinks.map((page) => (
              <li key={page.name}>
                <Link to={page.link}>{page.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <p>
          &copy; {TEXTS.footer.copyR} {TEXTS.footer.name} {currentYear}
        </p>
      </StyledWrapper>
    </StyledFooter>
  );
};

export default Footer;
