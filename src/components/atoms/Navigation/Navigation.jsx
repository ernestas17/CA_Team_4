import React from 'react';
import { Link } from 'react-router-dom';
import TEXTS from '../../../constants/texts';
import { PhoneIcon } from '../../../assets/icons';
import {
  StyledNav,
  StyledCallContainer,
  StyledCallWrapper,
  StyledSeparator,
  StyledCircle,
  StyledPhoneBox,
  StyledTitle,
  StyledNumber,
} from './Navigation.styled';

const Navigation = ({ navLinks }) => {
  return (
    <StyledNav>
      <ul>
        {navLinks.map((path) => (
          <li key={path.name}>
            <Link to={path.link}>{path.name}</Link>
          </li>
        ))}
        <StyledCallWrapper>
          {/* {dimensions > 950 && <StyledSeparator />} */}
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
      </ul>
    </StyledNav>
  );
};

export default Navigation;
