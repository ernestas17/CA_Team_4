import { useState, useEffect } from 'react';
import { LogoIcon, NavIcon, PhoneIcon } from '../../../assets/icons';
import TEXTS from '../../../constants/texts';
import Navigation from '../../atoms/Navigation/Navigation';
import { Link } from 'react-router-dom';
import links from '../../../constants/navLinks';
import {
  StyledHeader,
  StyledMobileWrapper,
  StyledNavWrapper,
  StyledCallContainer,
  StyledCallWrapper,
  StyledSeparator,
  StyledCircle,
  StyledPhoneBox,
} from './Header.styled';

const Header = () => {
  // State
  const [displayNav, setDisplayNav] = useState(true);

  const [dimensions, setDimensions] = useState(window.innerWidth);

  // Side effects
  useEffect(() => {
    function handleResize() {
      setDimensions(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  useEffect(() => {
    dimensions < 950 ? setDisplayNav(false) : setDisplayNav(true);
  }, [dimensions]);

  return (
    <StyledHeader>
      <StyledMobileWrapper>
        <Link to={'/'}>
          <LogoIcon />
        </Link>
        {!displayNav && (
          <NavIcon
            onClick={() => {
              setDisplayNav(!displayNav);
            }}
          />
        )}
      </StyledMobileWrapper>
      {displayNav && <Navigation navLinks={links} />}
      {displayNav &&
        ((<Navigation navLinks={links} />),
        (
          <StyledNavWrapper displayNav={displayNav}>
            <StyledCallWrapper>
              <StyledSeparator />
              <StyledCallContainer>
                <StyledCircle>
                  <PhoneIcon />
                </StyledCircle>
                <StyledPhoneBox>
                  <p>{TEXTS.header.title}</p>
                  <p>{TEXTS.header.number}</p>
                </StyledPhoneBox>
              </StyledCallContainer>
            </StyledCallWrapper>
          </StyledNavWrapper>
        ))}
    </StyledHeader>
  );
};

export default Header;
