import styled from 'styled-components';

import serviceImg from '../../../../assets/images/homePage/home-s1-img.jpg';

export const StyledHeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 1000px;
  padding: 40px;

  @media screen and (min-width: 950px) {
    flex-direction: row;
    max-height: 802px;
    justify-content: center;
    gap: 51px;
    padding: 80px 40px;
  }
`;

export const StyledContainerOne = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 624px;
  height: fit-content;

  @media screen and (min-width: 950px) {
    width: 45%;
    max-height: 632px;
  }

  & h1 {
    font-size: 36px;
    font-weight: 800;
    margin-bottom: 48px;

    @media screen and (min-width: 820px) {
      font-size: 64px;
      line-height: 84px;
    }
  }
`;

export const StyledOpenHContainer = styled.div`
  display: flex;
  gap: 13px;
  margin-top: 48px;
  margin-bottom: 48px;
`;

export const StyledTitle = styled.div`
  font-weight: 500;
  line-height: 24px;
  color: #939191;
`;

export const StyledOpenHours = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  color: #1e1b1b;
  line-height: 31.5px;
`;

// Container 2

export const StyledContainerTwo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  width: 100%;
  max-width: 605px;
  height: 100%;

  max-height: 632px;

  @media screen and (min-width: 950px) {
    width: 45%;
    max-height: 632px;
  }
`;

export const StyledImageContainer = styled.div`
  width: 100%;
  height: 100%;

  background-image: url(${serviceImg});

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const StyledStickerBorderTop = styled.div`
  position: absolute;
  top: 81px;
  left: -42px;
  height: calc(102px + 24px);
  width: calc(281.64px + 24px);
  background-color: rgba(225, 225, 225, 0.43);
  border-radius: 59px;
  margin-left: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 950px) {
    margin-left: 0px;
  }
`;

export const StyledStickerTop = styled.div`
  height: 102px;
  width: 281.64px;
  border-radius: 57px;
  background-color: #fff;
  padding: 15px;

  display: flex;
  align-items: center;
  gap: 14.4px;

  & p {
    font-size: 24px;
    font-weight: 600;
  }
`;

export const StyledStickerCircle = styled.div`
  height: 70px;
  width: 70px;
  background-color: #5cba99;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  & p {
    font-size: 24px;
    font-weight: 600;
    line-height: 36px;
    color: #fff;

    & span {
      font-size: 16px;
    }
  }
`;

export const StyledStickerBorderBottom = styled.div`
  position: absolute;
  bottom: 81px;
  right: -42px;
  height: calc(102px + 24px);
  width: calc(326px + 24px);
  background-color: rgba(225, 225, 225, 0.43);
  border-radius: 59px;
  margin-right: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledStickerBotom = styled.div`
  height: 102px;
  width: 326px;
  border-radius: 57px;
  background-color: #fff;
  padding-left: 38px;

  display: flex;
  align-items: center;
  gap: 14.4px;
`;

export const StyledRatingBox = styled.div`
  display: flex;
  flex-direction: column;

  & p {
    font-weight: 500;
  }
`;

export const StyledRating = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

export const StyledStarsContainer = styled.div`
  & ul {
    display: flex;
    gap: 6px;
  }

  li {
    list-style: none;
  }
`;

// Section 2
export const StyledSectionTwo = styled.section`
  display: flex;
  flex-direction: column;

  background-color: #e2e6e9;
  height: fit-content;
  padding: 128px 10px;
`;

export const StyledContainerL = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StyledContainerR = styled.div``;
