import EXPERIENCE from '../../../../constants/experience';
import {
  StyledExperienceSection,
  StyledWrapper,
  StyledExperience,
} from './ExperienceSection.style';

const ExperienceSection = ({ background }) => {
  return (
    <StyledExperienceSection background={background}>
      <StyledWrapper>
        {EXPERIENCE.map((experience) => (
          <StyledExperience key={experience.id}>
            <h2>{experience.number}</h2>
            <p>{experience.text}</p>
          </StyledExperience>
        ))}
      </StyledWrapper>
    </StyledExperienceSection>
  );
};

export default ExperienceSection;
