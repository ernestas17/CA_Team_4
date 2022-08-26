import { StyledServicesPage } from './ServicesPage.style';
import CallToAction from '../../components/organisms/CallToAction';
import FooterContacts from '../../components/organisms/FooterContacts';
import BookingSection from './components/BookingSection/BookingSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import ProcessSection from './components/ProcessSection';

const ServicesPage = () => {
  return (
    <StyledServicesPage>
      <BookingSection />
      <ServicesSection />
      <ProcessSection />
      <CallToAction />
      <FooterContacts />
    </StyledServicesPage>
  );
};

export default ServicesPage;
