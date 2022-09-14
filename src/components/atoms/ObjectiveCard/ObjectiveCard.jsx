import React from 'react';
import { StyledObjectiveCard } from './ObjectiveCard.style';

const ObjectiveCard = ({ img, overlay, title, content }) => {
  return (
    <StyledObjectiveCard img={img} overlay={overlay}>
      <div>
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
    </StyledObjectiveCard>
  );
};

export default ObjectiveCard;
