import TEXTS from '../../../../constants/texts';
import NAV_LINKS from '../../../../constants/navLinks';
import ArrowLink from '../../../../components/atoms/ArrowLink/ArrowLink';
import Button from '../../../../components/atoms/Button/Button';
import SERVICES from '../../../../constants/services';
import ServiceCard from '../../../../components/atoms/ServiceCard';
import {
  StyledServicesSection,
  StyledContainerL,
  StyledContainerR,
} from './ServicesSection.style';

const ServicesSection = () => {
  return (
    <StyledServicesSection>
      <StyledContainerL>
        <h2>{TEXTS.homePage.servicesSection.services.heading}</h2>
        {SERVICES.map((service) => (
          <ServiceCard
            icon={service.icon}
            title={service.title}
            text={service.description}
          />
        ))}
        <ArrowLink
          link={NAV_LINKS[1].link}
          text={TEXTS.homePage.servicesSection.services.button.text}
        />
      </StyledContainerL>
      <StyledContainerR>
        <h3>{TEXTS.homePage.servicesSection.form.title}</h3>
        <form action='#'>
          <input
            type='text'
            placeholder={TEXTS.homePage.servicesSection.form.paceholder}
          />
          <input
            type='text'
            placeholder={TEXTS.homePage.servicesSection.form.paceholder}
          />
          <input
            type='text'
            placeholder={TEXTS.homePage.servicesSection.form.paceholder}
          />
          <input
            type='text'
            placeholder={TEXTS.homePage.servicesSection.form.paceholder}
          />
        </form>
        <Button
          primary
          text={TEXTS.homePage.servicesSection.form.button.text}
        />
      </StyledContainerR>
    </StyledServicesSection>
  );
};

export default ServicesSection;
