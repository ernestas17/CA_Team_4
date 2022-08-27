import styled from 'styled-components';
import BREAKPOINTS from '../../../constants/breakpoints';
import firstImg from '../../../assets/images/callToAction/cta-car1.jpg';
import secondImg from '../../../assets/images/callToAction/cta-car2.jpg';

export const StyledCallToAction = styled.section`
  width: 100vw - (100vw - 100%);
  max-width: 1920px;
  max-height: 493px;

  height: 502px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
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

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
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

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    width: 50%;
    height: calc(25.9vw);
  }
`;

export const StyledAbsoluteDiv = styled.div`
  position: absolute;
  top: 40%;
  left: 0;
  background-color: ${({ theme }) => theme.color.orange};
  z-index: 100;

  width: 100%;
  max-height: 493px;

  padding: 40px 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    top: 0;
    left: 35%;
    max-width: 729px;
    height: calc(25.9vw);

    padding: 40px 40px;
  }

  & h3 {
    ${({ theme }) => theme.h3}
    color:  ${({ theme }) => theme.color.white};
    margin-bottom: 49.4px;
    max-width: 480px;

    @media screen and (min-width: ${BREAKPOINTS.lg}) {
      font-size: 28px;
    }
    @media screen and (min-width: ${BREAKPOINTS.xl}) {
      font-size: 38px;
    }

    @media screen and (min-width: ${BREAKPOINTS.xxl}) {
      font-size: 48px;
    }
  }
`;
