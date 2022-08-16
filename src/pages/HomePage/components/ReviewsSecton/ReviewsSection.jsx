import TEXTS from '../../../../constants/texts';
import user1 from '../../../../assets/images/homePage/reviewsSection/user1.jpg';
import user2 from '../../../../assets/images/homePage/reviewsSection/user2.jpg';
import {
  StyledRewiewSection,
  StyledReviewsContainer,
  StyledCard,
  StyledUserBox,
} from './ReviewsSection.style';

const ReviewsSection = () => {
  return (
    <StyledRewiewSection>
      <h3>{TEXTS.homePage.reviwsSection.heading}</h3>
      <StyledReviewsContainer>
        <StyledCard>
          <StyledUserBox>
            <img src={user1} alt='user' />
          </StyledUserBox>
        </StyledCard>
      </StyledReviewsContainer>
    </StyledRewiewSection>
  );
};

export default ReviewsSection;
