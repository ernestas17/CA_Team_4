import TEXTS from '../../../../constants/texts';
import {
  StyledExperienceSection,
  StyledWrapper,
  StyledExperience,
} from './ExperienceSection.style';

const ExperienceSection = () => {
  return (
    <StyledExperienceSection>
      <StyledWrapper>
        <StyledExperience>
          <h2>{TEXTS.homePage.experienceSection.experience1.number}</h2>
          <p>{TEXTS.homePage.experienceSection.experience1.text}</p>
        </StyledExperience>
        <StyledExperience>
          <h2>{TEXTS.homePage.experienceSection.experience2.number}</h2>
          <p>{TEXTS.homePage.experienceSection.experience2.text}</p>
        </StyledExperience>
        <StyledExperience>
          <h2>{TEXTS.homePage.experienceSection.experience3.number}</h2>
          <p>{TEXTS.homePage.experienceSection.experience3.text}</p>
        </StyledExperience>
        <StyledExperience>
          <h2>{TEXTS.homePage.experienceSection.experience4.number}</h2>
          <p>{TEXTS.homePage.experienceSection.experience4.text}</p>
        </StyledExperience>
      </StyledWrapper>
    </StyledExperienceSection>
  );
};

export default ExperienceSection;
