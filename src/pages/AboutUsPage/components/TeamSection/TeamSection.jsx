import TEXTS from '../../../../constants/texts';
import { TEAM } from '../../../../constants/teamMembers';
import TeamMember from './TeamMember/TeamMember';
import { StyledTeamSection } from './TeamSection.style';

const TeamSection = () => {
  return (
    <StyledTeamSection>
      <h1>{TEXTS.aboutUsPage.team.heading}</h1>
      <div>
        {TEAM.map((member) => (
          <TeamMember
            key={member.id}
            img={member.image}
            name={member.name}
            specialty={member.specialty}
          />
        ))}
      </div>
    </StyledTeamSection>
  );
};

export default TeamSection;
