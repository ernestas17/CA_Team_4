import { StyledAboutUsPage } from './AboutUsPage.style';
import BookingSection from './components/BookingSection/BookingSection';
import ProcessSection from './components/ProcessSection/ProcessSection';
import ObjectivesSection from './components/ObjectivesSection';
import ServicesSection from './components/ServicesSection';
import TeamSection from './components/TeamSection';
import CallToAction from '../../components/organisms/CallToAction';
import FooterContacts from '../../components/organisms/FooterContacts';
const AboutUsPage = () => {
  return (
    <StyledAboutUsPage>
      <BookingSection />
      <ProcessSection />
      <ObjectivesSection />
      <ServicesSection />
      <TeamSection />
      <CallToAction />
      <FooterContacts />
    </StyledAboutUsPage>
  );
};

export default AboutUsPage;
