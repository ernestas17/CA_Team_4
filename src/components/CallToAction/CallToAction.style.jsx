import styled from 'styled-components';
import firstImg from '../../assets/images/callToAction/cta-car1.jpg';
import secondImg from '../../assets/images/callToAction/cta-car2.jpg';

export const StyledCallToAction = styled.section`
  width: 100vw - (100vw - 100%);
  max-width: 1920px;
  max-height: 493px;

  height: 502px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  @media screen and (min-width: 950px) {
    height: calc(25.8vw);
    flex-direction: row;
  }
`;

export const StyledImgContainerOne = styled.div`
  width: 100%;
  height: 100%;

  background-image: url(${firstImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  position: relative;
  max-height: 493px;

  @media screen and (min-width: 950px) {
    width: 50%;
    height: calc(25.9vw);
  }
`;

export const StyledImgContainerTwo = styled.div`
  width: 100%;
  height: 100%;

  background-image: url(${secondImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  max-height: 493px;

  @media screen and (min-width: 950px) {
    width: 50%;
    height: calc(25.9vw);
  }
`;

export const StyledAbsoluteDiv = styled.div`
  position: absolute;
  top: 40%;
  left: 0;
  background-color: #ff6433;
  z-index: 100;

  width: 100%;
  max-height: 493px;

  padding: 40px 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 950px) {
    top: 0;
    left: 35%;
    max-width: 729px;
    height: calc(25.9vw);
  }

  & h3 {
    color: #fff;
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 49.4px;
    max-width: 480px;

    @media screen and (min-width: 1280px) {
      font-size: 48px;
    }
  }
`;
