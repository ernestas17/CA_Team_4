import TEXTS from '../../../../constants/texts';
import { StyledRewiewSection } from './ReviewsSection.style';

const ReviewsSection = () => {
  return (
    <StyledRewiewSection>
      <h3>{TEXTS.homePage.reviwsSection.heading}</h3>
    </StyledRewiewSection>
  );
};

export default ReviewsSection;
