import TEXTS from '../../../../constants/texts';
import ProvidedServiceCard from '../../../../components/atoms/ProvidedServiceCard/ProvidedServiceCard';
import { StyledServicesSection } from './ServicesSection.style';
import wrenchIcon from '../../../../assets/icons/services-wrench.svg';
import mechanicIcon from '../../../../assets/icons/services-mechanic.svg';
import dollarIcon from '../../../../assets/icons/services-dollar.svg';

const ServicesSection = () => {
  return (
    <StyledServicesSection>
      <h2>{TEXTS.aboutUsPage.servicesSection.header}</h2>
      <div>
        <ProvidedServiceCard
          icon={wrenchIcon}
          title={TEXTS.aboutUsPage.servicesSection.card1.title}
          content={TEXTS.aboutUsPage.servicesSection.card1.description}
        />
        <ProvidedServiceCard
          icon={mechanicIcon}
          title={TEXTS.aboutUsPage.servicesSection.card2.title}
          content={TEXTS.aboutUsPage.servicesSection.card2.description}
        />
        <ProvidedServiceCard
          icon={dollarIcon}
          title={TEXTS.aboutUsPage.servicesSection.card3.title}
          content={TEXTS.aboutUsPage.servicesSection.card3.description}
        />
      </div>
    </StyledServicesSection>
  );
};

export default ServicesSection;
