import React from 'react';
import {
  StyledTeamMemberCard,
  StyledCardBottom,
  StyledCardName,
  StyledCardPosition,
} from './TeamMemberCard.style';

const TeamMemberCard = (props) => {
  return (
    <StyledTeamMemberCard>
      <img scr={props.image} alt='image' />
      <StyledCardBottom>
        <StyledCardName>{props.name}</StyledCardName>
        <StyledCardPosition>{props.position}</StyledCardPosition>
      </StyledCardBottom>
    </StyledTeamMemberCard>
  );
};

export default TeamMemberCard;
