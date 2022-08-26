import Button from '../../../../components/atoms/Button/Button';
import clockSvg from '../../../../assets/icons/homePage/heroSection/clock.svg';
import star from '../../../../assets/icons/homePage/heroSection/Star 1.svg';
import TEXTS from '../../../../constants/texts';

import {
  StyledHeroSection,
  StyledContainerOne,
  StyledContainerTwo,
  StyledImageContainer,
  StyledOpenHContainer,
  StyledTitle,
  StyledOpenHours,
  StyledStickerBorderTop,
  StyledStickerTop,
  StyledStickerCircle,
  StyledStickerBorderBottom,
  StyledStickerBotom,
  StyledRatingBox,
  StyledRating,
  StyledStarsContainer,
} from './HeroSection.style';

const HeroSection = () => {
  return (
    <StyledHeroSection>
      <StyledContainerOne>
        <div>
          <h1>{TEXTS.homePage.sectionOne.heading}</h1>
          <Button primary text={TEXTS.homePage.sectionOne.button} />
        </div>
        <StyledOpenHContainer>
          <img src={clockSvg} alt='clockImg' />
          <div>
            <StyledTitle>{TEXTS.homePage.sectionOne.title}</StyledTitle>
            <StyledOpenHours>
              {TEXTS.homePage.sectionOne.workingHours}
            </StyledOpenHours>
          </div>
        </StyledOpenHContainer>
      </StyledContainerOne>
      <StyledContainerTwo>
        <StyledImageContainer />
        <StyledStickerBorderTop>
          <StyledStickerTop>
            <StyledStickerCircle>
              <p>
                {TEXTS.homePage.sectionOne.hours}
                <span> {TEXTS.homePage.sectionOne.hoursSh}</span>
              </p>
            </StyledStickerCircle>
            <p>{TEXTS.homePage.sectionOne.service}</p>
          </StyledStickerTop>
        </StyledStickerBorderTop>
        <StyledStickerBorderBottom>
          <StyledStickerBotom>
            <StyledRatingBox>
              <StyledRating>
                {TEXTS.homePage.sectionOne.rating.number}
              </StyledRating>
              <p>{TEXTS.homePage.sectionOne.rating.text}</p>
            </StyledRatingBox>
            <StyledStarsContainer>
              <ul>
                <li>
                  <img src={star} alt='Star' />
                </li>
                <li>
                  <img src={star} alt='Star' />
                </li>
                <li>
                  <img src={star} alt='Star' />
                </li>
                <li>
                  <img src={star} alt='Star' />
                </li>
                <li>
                  <img src={star} alt='Star' />
                </li>
              </ul>
            </StyledStarsContainer>
          </StyledStickerBotom>
        </StyledStickerBorderBottom>
      </StyledContainerTwo>
    </StyledHeroSection>
  );
};

export default HeroSection;
