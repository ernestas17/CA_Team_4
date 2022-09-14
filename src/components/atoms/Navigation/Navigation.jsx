import React from 'react';
import { Link } from 'react-router-dom';
import { StyledNav } from './Navigation.styled';

const Navigation = ({ navLinks }) => {
  return (
    <StyledNav>
      <ul>
        {navLinks.map((path) => (
          <li key={path.name}>
            <Link to={path.link}>{path.name}</Link>
          </li>
        ))}
      </ul>
    </StyledNav>
  );
};

export default Navigation;
