import React from 'react';
import { StyledCard, StyledCardText } from './Card.style';

const Card = (props) => {
  return (
    <StyledCard
      customWidth={props.customWidth}
      customHeight={props.customHeight}
    >
      <StyledCardText>{props.text}</StyledCardText>
    </StyledCard>
  );
};

export default Card;
