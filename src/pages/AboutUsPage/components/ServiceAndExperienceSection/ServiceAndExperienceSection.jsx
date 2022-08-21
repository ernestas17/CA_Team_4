import React from 'react';
import TEXTS from '../../../../constants/texts';
import SERVICES from '../../../../constants/services';
import ServicesCards from '../ServicesCards/ServicesCards';
import {
  StyledServiceAndExperienceSection,
  StyledHeading,
  StyledWrapper,
  StyledExperience,
  StyledServicesCards,
} from './ServiceAndExperienceSection.style';

const ServiceAndExperienceSection = () => {
  return (
    <StyledServiceAndExperienceSection>
      <StyledHeading>{TEXTS.aboutUsPage.service.header}</StyledHeading>
      <StyledServicesCards>
        {SERVICES.map((service) => (
          <ServicesCards
            key={service.id}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </StyledServicesCards>
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
    </StyledServiceAndExperienceSection>
  );
};

export default ServiceAndExperienceSection;
