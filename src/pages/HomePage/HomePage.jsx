import CallToAction from '../../components/CallToAction';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection/ServicesSection';

import { StyledHomePage } from './HomePage.style';

const HomePage = () => {
  return (
    <StyledHomePage>
      <HeroSection />
      <ServicesSection />
      <CallToAction />
    </StyledHomePage>
  );
};

export default HomePage;
