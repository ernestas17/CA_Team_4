import Button from '../../components/Button/Button';
import clockSvg from '../../assets/icons/clock.svg';

import {
  StyledHomePage,
  StyledSectionOne,
  StyledContainerOne,
  StyledContainerTwo,
  StyledImageContainer,
  StyledOpenHContainer,
  StyledTitle,
  StyledOpenHours,
  StyledStickerBorder,
  StyledStickerTop,
} from './HomePage.style';

const HomePage = ({
  heading,
  btnText,
  title,
  workingHours,
  hours,
  hoursSh,
  service,
  rating,
}) => {
  return (
    <StyledHomePage>
      <StyledSectionOne>
        <StyledContainerOne>
          <div>
            <h1>{heading}</h1>
            <Button primary text={btnText} />
          </div>
          <StyledOpenHContainer>
            <img src={clockSvg} alt='clockImg' />
            <div>
              <StyledTitle>{title}</StyledTitle>
              <StyledOpenHours>{workingHours}</StyledOpenHours>
            </div>
          </StyledOpenHContainer>
        </StyledContainerOne>
        <StyledContainerTwo>
          <StyledImageContainer />
          <StyledStickerBorder>
            <StyledStickerTop></StyledStickerTop>
          </StyledStickerBorder>

          <div></div>
        </StyledContainerTwo>
      </StyledSectionOne>
    </StyledHomePage>
  );
};

export default HomePage;
