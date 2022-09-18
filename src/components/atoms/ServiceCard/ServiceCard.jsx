import React from 'react';
import {
  StyledServiceCard,
  StyledIconCircle,
  StyledServiceTxtWrapper,
} from './ServiceCard.style';

const ServiceCard = ({ icon, title, text }) => {
  return (
    <StyledServiceCard>
      <StyledIconCircle>
        <img src={icon} alt='icon' />
      </StyledIconCircle>
      <StyledServiceTxtWrapper>
        <h6>{title}</h6>
        <p>{text}</p>
      </StyledServiceTxtWrapper>
    </StyledServiceCard>
  );
};

export default ServiceCard;
