import React from 'react';
import { StyledServicesCards } from './ServicesCards.style';

const ServicesCards = (props) => {
  return (
    <StyledServicesCards>
      <img src={props.icon} alt='icon' />
      <h5>{props.title}</h5>
      <p>{props.description}</p>
    </StyledServicesCards>
  );
};

export default ServicesCards;
