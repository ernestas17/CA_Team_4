import React from 'react';
import { StyledTeamSection, StyledTeamHeading } from './TeamSection.style';
import TEXT from '../../../../constants/texts';

const TeamSection = () => {
  return (
    <StyledTeamSection>
      <StyledTeamHeading>
        {TEXT.aboutUsPage.teamHeader.heading}
      </StyledTeamHeading>
    </StyledTeamSection>
  );
};

export default TeamSection;
