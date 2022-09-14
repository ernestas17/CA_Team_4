import TEXTS from '../../../../constants/texts';
import ProvidedServiceCard from '../../../../components/atoms/ProvidedServiceCard/ProvidedServiceCard';
import { StyledServicesSection } from './ServicesSection.style';
import PROVIDEDSERVICES from '../../../../constants/providedServices';
import ExperienceSection from '../../../HomePage/components/ExperienceSection/ExperienceSection';

const ServicesSection = () => {
  return (
    <StyledServicesSection>
      <h2>{TEXTS.aboutUsPage.servicesSection.header}</h2>
      <div>
        {PROVIDEDSERVICES.map((service) => (
          <ProvidedServiceCard
            key={service.id}
            icon={service.icon}
            title={service.title}
            content={service.content}
          />
        ))}
      </div>
      <ExperienceSection />
    </StyledServicesSection>
  );
};

export default ServicesSection;
