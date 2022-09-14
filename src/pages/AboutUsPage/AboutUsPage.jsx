import { StyledAboutUsPage } from './AboutUsPage.style';
import BookingSection from './components/BookingSection/BookingSection';
import ProcessSection from './components/ProcessSection/ProcessSection';
import ObjectivesSection from './components/ObjectivesSection';
import ServicesSection from './components/ServicesSection';
const AboutUsPage = () => {
  return (
    <StyledAboutUsPage>
      <BookingSection />
      <ProcessSection />
      <ObjectivesSection />
      <ServicesSection />
    </StyledAboutUsPage>
  );
};

export default AboutUsPage;
