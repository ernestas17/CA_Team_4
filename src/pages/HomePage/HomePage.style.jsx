import styled from 'styled-components';
import serviceImg from '../../assets/images/homePage/home-s1-img.jpg';

export const StyledHomePage = styled.main`
  max-width: 1280px;
  margin: 0 auto;
`;

export const StyledSectionOne = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 900px;

  padding: 40px;
`;

export const StyledContainerOne = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: fit-content;

  h1 {
    font-size: 36px;
    font-weight: 800;
    margin-bottom: 48px;
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

///////

export const StyledContainerTwo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  width: 100%;
  height: 100%;
`;

export const StyledImageContainer = styled.div`
  width: 100%;
  height: 100%;

  background-image: url(${serviceImg});

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const StyledStickerTop = styled.div`
  height: 102px;
  width: 281.64px;
  border-radius: 59px;
  background-color: #fff;
  padding: 15px;
`;

export const StyledStickerBorder = styled.div`
  position: absolute;
  top: 81px;
  left: -30px;
  height: calc(102px + 24px);
  width: calc(281.64px + 24px);
  background-color: rgba(225, 225, 225, 0.43);
  border-radius: 59px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
