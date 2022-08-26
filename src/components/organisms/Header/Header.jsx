import { useState, useEffect } from 'react';
import { LogoIcon, NavIcon, PhoneIcon } from '../../../assets/icons';
import TEXTS from '../../../constants/texts';
import Navigation from '../../atoms/Navigation/Navigation';

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
  StyledTitle,
  StyledNumber,
} from './Header.styled';
import { useLocation } from 'react-router-dom';

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

    return (_) => {
      window.removeEventListener('resize', handleResize);
    };
  });

  useEffect(() => {
    dimensions < 950 ? setDisplayNav(false) : setDisplayNav(true);
  }, [dimensions]);

  // const { pathname } = useLocation();

  // useEffect(() => {
  //   setDisplayNav(false);
  // }, [pathname]);

  return (
    <StyledHeader>
      <StyledMobileWrapper>
        <div>
          <LogoIcon />
        </div>
        <NavIcon
          onClick={() => {
            setDisplayNav(!displayNav);
          }}
        />
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
                  <StyledTitle>{TEXTS.header.title}</StyledTitle>
                  <StyledNumber>{TEXTS.header.number}</StyledNumber>
                </StyledPhoneBox>
              </StyledCallContainer>
            </StyledCallWrapper>
          </StyledNavWrapper>
        ))}
    </StyledHeader>
  );
};

export default Header;
