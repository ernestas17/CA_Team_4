import CallToAction from '../../components/CallToAction';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import ProcessSection from './components/processSection/ProcessSection';
import ExperienceSection from './components/ExperienceSection/ExperienceSection';
import BrandsSection from './components/BrandsSection';
import ReviewsSection from './components/ReviewsSecton';

import { StyledHomePage } from './HomePage.style';

const HomePage = () => {
  return (
    <StyledHomePage>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <CallToAction />
      <ExperienceSection />
      <BrandsSection />
      <ReviewsSection />
    </StyledHomePage>
  );
};

export default HomePage;
