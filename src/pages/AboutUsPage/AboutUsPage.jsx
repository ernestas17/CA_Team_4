import CallToAction from '../../components/CallToAction';
import FooterContacts from '../../components/FooterContacts';
import ServiceAndExperienceSection from './components/ServiceAndExperienceSection/ServiceAndExperienceSection';
import TeamSection from './components/TeamSection/TeamSection';

import { StyledAboutUsPage } from './AboutUsPage.style';
import ObjectivesSection from './components/ObjectivesSection/ObjectivesSection';
import CustomerJourneySection from './components/CustomerJourneySection/CustomerJourneySection';
import HeroElementSection from './components/HeroElementSection/HeroElementSection';

const AboutUsPage = () => {
  return (
    <StyledAboutUsPage>
      <HeroElementSection />
      <CustomerJourneySection />
      <ObjectivesSection />
      <ServiceAndExperienceSection />
      <TeamSection />
      <CallToAction />
      <FooterContacts />
    </StyledAboutUsPage>
  );
};

export default AboutUsPage;
