// Router
import { Link } from 'react-router-dom';
import TEXTS from '../../../constants/texts';
import { useState, useEffect } from 'react';
import logo from '../../../assets/icons/header/Logo.svg';
import call from '../../../assets/icons/header/Call.svg';
import {
  StyledHeader,
  StyledMobileWrapper,
  StyledCallContainer,
  StyledCallWrapper,
  StyledLine,
  StyledCircle,
  StyledPhoneBox,
  StyledTitle,
  StyledNumber,
} from './Header.styled';

const Header = ({ navLinks }) => {
  // State
  const [displayNav, setDisplayNav] = useState(true);

  const [dimensions, setDimensions] = useState(window.innerWidth);

  // Side effects
  useEffect(() => {
    function handleResize() {
      setDimensions(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return (_) => {
      window.removeEventListener('resize', handleResize);
    };
  });

  useEffect(() => {
    dimensions < 950 ? setDisplayNav(false) : setDisplayNav(true);
  }, [dimensions]);

  // Function
  const toggleDisplayNav = () => {
    displayNav ? setDisplayNav(false) : setDisplayNav(true);
  };

  return (
    <StyledHeader>
      <StyledMobileWrapper>
        <img src={logo} alt='Logo' />
        <i
          className='fa-solid fa-bars'
          onClick={() => {
            toggleDisplayNav();
          }}></i>
      </StyledMobileWrapper>
      {displayNav && (
        <nav>
          <ul>
            {navLinks.map((path) => (
              <li key={path.name}>
                <Link to={path.link}>{path.name}</Link>
              </li>
            ))}
            <StyledCallWrapper>
              {dimensions > 950 && <StyledLine />}
              <StyledCallContainer>
                <StyledCircle>
                  <img src={call} alt='call' />
                </StyledCircle>
                <StyledPhoneBox>
                  <StyledTitle>{TEXTS.header.title}</StyledTitle>
                  <StyledNumber>{TEXTS.header.number}</StyledNumber>
                </StyledPhoneBox>
              </StyledCallContainer>
            </StyledCallWrapper>
          </ul>
        </nav>
      )}
    </StyledHeader>
  );
};

export default Header;
