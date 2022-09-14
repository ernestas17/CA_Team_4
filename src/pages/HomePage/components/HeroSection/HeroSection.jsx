import Button from '../../../../components/atoms/Button/Button';
import { ClockIcon, StarIcon } from '../../../../assets/icons';
import TEXTS from '../../../../constants/texts';
import NAV_LINKS from '../../../../constants/navLinks';

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
          <Button
            primary
            text={TEXTS.homePage.sectionOne.button}
            path={NAV_LINKS[4].link}
          />
        </div>
        <StyledOpenHContainer>
          <ClockIcon />
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
                  <StarIcon />
                </li>
                <li>
                  <StarIcon />
                </li>
                <li>
                  <StarIcon />
                </li>
                <li>
                  <StarIcon />
                </li>
                <li>
                  <StarIcon />
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
