import { useState, useEffect } from 'react';
import { LogoIcon, NavIcon } from '../../../assets/icons';
import Navigation from '../../atoms/Navigation/Navigation';
import links from '../../../constants/navLinks';
import { StyledHeader, StyledMobileWrapper } from './Header.styled';

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

  // Function
  const toggleDisplayNav = () => {
    displayNav ? setDisplayNav(false) : setDisplayNav(true);
  };

  return (
    <StyledHeader>
      <StyledMobileWrapper>
        <div>
          <LogoIcon />
        </div>
        <NavIcon
          onClick={() => {
            toggleDisplayNav();
          }}
        />
      </StyledMobileWrapper>
      {displayNav && <Navigation navLinks={links} />}
    </StyledHeader>
  );
};

export default Header;
