import { StyledAboutUsPage } from './AboutUsPage.style';
import BookingSection from './components/BookingSection/BookingSection';
import ProcessSection from './components/ProcessSection/ProcessSection';
const AboutUsPage = () => {
  return (
    <StyledAboutUsPage>
      <BookingSection />
      <ProcessSection />
    </StyledAboutUsPage>
  );
};

export default AboutUsPage;
