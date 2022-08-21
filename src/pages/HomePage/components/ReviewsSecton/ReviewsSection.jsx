import TEXTS from '../../../../constants/texts';
import user1 from '../../../../assets/images/homePage/reviewsSection/user1.jpg';
import user2 from '../../../../assets/images/homePage/reviewsSection/user2.jpg';
import ReviewCard from './ReviewCard';
import SliderBtn from './SliderBtn';
import {
  StyledRewiewSection,
  StyledCardsContainer,
  StyledPaginationWrapper,
  StyledPaginationContainer,
  StyledDot,
  StyledDotActive,
  StyledBtnsWrapper,
} from './ReviewsSection.style';

const ReviewsSection = () => {
  return (
    <StyledRewiewSection>
      <h3>{TEXTS.homePage.reviwsSection.heading}</h3>

      <StyledCardsContainer>
        <ReviewCard
          img={user1}
          name={TEXTS.homePage.reviwsSection.card1.name}
          city={TEXTS.homePage.reviwsSection.card1.city}
          text={TEXTS.homePage.reviwsSection.card1.text}
        />
        <ReviewCard
          img={user2}
          name={TEXTS.homePage.reviwsSection.card2.name}
          city={TEXTS.homePage.reviwsSection.card2.city}
          text={TEXTS.homePage.reviwsSection.card2.text}
        />
      </StyledCardsContainer>
      <StyledPaginationWrapper>
        <StyledPaginationContainer>
          <ul>
            <li>
              <StyledDot />
            </li>
            <li>
              <StyledDot />
            </li>
            <li>
              <StyledDotActive />
            </li>
            <li>
              <StyledDot />
            </li>
          </ul>
          <StyledBtnsWrapper>
            <SliderBtn
              icon={<i className='fa-solid fa-arrow-left-long'></i>}
              action={null}
            />
            <SliderBtn
              icon={<i className='fa-solid fa-arrow-right-long'></i>}
              action={null}
            />
          </StyledBtnsWrapper>
        </StyledPaginationContainer>
      </StyledPaginationWrapper>
    </StyledRewiewSection>
  );
};

export default ReviewsSection;
