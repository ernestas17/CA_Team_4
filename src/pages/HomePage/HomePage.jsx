import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import ProcessSection from './components/ProcessSection/ProcessSection';
import CardsSection from './components/CardsSection/CardsSection';
import CallToAction from '../../components/CallToAction';
import ExperienceSection from './components/ExperienceSection/ExperienceSection';
import BrandsSection from './components/BrandsSection';
import ReviewsSection from './components/ReviewsSecton';
import FaqSection from './components/FaqSection';
import FooterContacts from '../../components/FooterContacts';

import { StyledHomePage } from './HomePage.style';

const HomePage = () => {
  return (
    <StyledHomePage>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <CardsSection />
      <CallToAction />
      <ExperienceSection />
      <BrandsSection />
      <ReviewsSection />
      <FaqSection />
      <FooterContacts />
    </StyledHomePage>
  );
};

export default HomePage;
