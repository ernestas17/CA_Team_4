import { StyledTeamMember } from './TeamMember.style';

const TeamMember = ({ img, name, specialty }) => {
  return (
    <StyledTeamMember img={img}>
      <div>
        <p>{name}</p>
        <p>{specialty}</p>
      </div>
    </StyledTeamMember>
  );
};

export default TeamMember;
