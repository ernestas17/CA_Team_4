import TEXTS from '../../../../constants/texts';
import ferrariImg from '../../../../assets/images/servicesPage/bookingSection/Ferrari.jpg';
import ImgAndCard from '../../../../components/organisms/ImgAndCard/ImgAndCard';
import NAV_LINKS from '../../../../constants/navLinks';
import { StyledBookingSection } from './BookingSection.style';

const BookingSection = () => {
  return (
    <StyledBookingSection>
      <ImgAndCard
        img={ferrariImg}
        title={TEXTS.servicesPage.bookingSection.title}
        text={TEXTS.servicesPage.bookingSection.content}
        btnTxt={TEXTS.servicesPage.bookingSection.btnTxt}
        path={NAV_LINKS[4].link}
      />
    </StyledBookingSection>
  );
};

export default BookingSection;
