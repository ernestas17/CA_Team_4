import styled from 'styled-components';
import BREAKPOINTS from '../../../../constants/breakpoints';
import mechanicImg from '../../../../assets/images/homePage/heroSection/home-s1-img.jpg';

export const StyledHeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 1000px;
  padding: 40px;

  max-width: 1300px;
  margin: 0 auto;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    flex-direction: row;
    max-height: 802px;
    justify-content: space-between;
    padding: 80px 40px;
  }
`;

export const StyledContainerOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  max-width: 623px;
  height: fit-content;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    width: 50%;
    max-height: 632px;
  }

  & h1 {
    ${({ theme }) => theme.h1}
    margin-bottom: 32px;
  }
`;

export const StyledOpenHContainer = styled.div`
  display: flex;
  gap: 13px;
  margin-top: 48px;
  margin-bottom: 48px;

  & svg {
    color: ${({ theme }) => theme.color.grey};
  }
`;

export const StyledTitle = styled.div`
  ${({ theme }) => theme.caption}
  color:  ${({ theme }) => theme.color.darkGrey}
`;

export const StyledOpenHours = styled.div`
  ${({ theme }) => theme.body1}
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

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    max-height: 632px;
    width: 45%;
  }

  @media screen and (min-width: ${BREAKPOINTS.xxl}) {
    width: 50%;
  }
`;

export const StyledImageContainer = styled.div`
  width: 100%;
  height: 100%;

  background-image: url(${mechanicImg});

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const StyledStickerBorderTop = styled.div`
  position: absolute;
  top: 61px;
  left: -42px;
  height: calc(102px + 24px);
  width: calc(281.64px + 24px);
  background-color: rgba(225, 225, 225, 0.43);
  border-radius: 59px;
  margin-left: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: ${BREAKPOINTS.sm}) {
    top: 81px;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    margin-left: 0px;
  }
`;

export const StyledStickerTop = styled.div`
  height: 102px;
  width: 281.64px;
  border-radius: 57px;
  background-color: ${({ theme }) => theme.color.white};
  padding: 15px;

  display: flex;
  align-items: center;
  gap: 14.4px;

  & p {
    ${({ theme }) => theme.title2};
  }
`;

export const StyledStickerCircle = styled.div`
  height: 70px;
  width: 70px;
  background-color: ${({ theme }) => theme.color.darkGreen};
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  & p {
    font-size: 24px;
    ${({ theme }) => theme.title2};
    color: ${({ theme }) => theme.color.white};

    & span {
      font-size: 16px;
    }
  }
`;

export const StyledStickerBorderBottom = styled.div`
  position: absolute;
  bottom: 61px;
  right: -42px;
  height: calc(102px + 24px);
  width: calc(326px + 24px);
  background-color: rgba(225, 225, 225, 0.43);
  border-radius: 59px;
  margin-right: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: ${BREAKPOINTS.sm}) {
    bottom: 81px;
  }
`;

export const StyledStickerBotom = styled.div`
  height: 102px;
  width: 326px;
  border-radius: 57px;
  background-color: ${({ theme }) => theme.color.white};
  padding-left: 38px;

  display: flex;
  align-items: center;
  gap: 14.4px;
`;

export const StyledRatingBox = styled.div`
  display: flex;
  flex-direction: column;

  & p {
    ${({ theme }) => theme.caption};
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

    & li {
      list-style: none;

      & svg {
        color: ${({ theme }) => theme.color.yellow};
      }
    }

    & li:last-of-type {
      svg {
        color: ${({ theme }) => theme.color.grey2};
      }
    }
  }
`;
