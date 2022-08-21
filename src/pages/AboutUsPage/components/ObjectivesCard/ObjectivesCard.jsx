import React from 'react';
import {
  StyledObjectivesCard,
  StyledObjectiveCardOverlay,
} from './ObjectivesCard.style';

const ObjectivesCard = ({ image, title, description, color }) => {
  return (
    <StyledObjectivesCard image={image}>
      <StyledObjectiveCardOverlay color={color}>
        <h4>{title}</h4>
        <p>{description}</p>
      </StyledObjectiveCardOverlay>
    </StyledObjectivesCard>
  );
};

export default ObjectivesCard;
