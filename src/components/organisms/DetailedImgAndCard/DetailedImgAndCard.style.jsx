import styled from 'styled-components';
import BREAKPOINTS from '../../../constants/breakpoints';

export const StyledDetailedImgAndCard = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;

  position: relative;
`;

export const StyledImg = styled.div`
  background-image: url(${(props) => props.img});

  background-size: cover;
  background-position: center;
  position: absolute;
  left: 0;
  width: 72%;
  height: 100%;

  z-index: 1;
`;

export const StyledOverlay = styled.div`
  position: absolute;
  left: 0;
  width: 47%;
  height: 100%;
  background-color: rgba(30, 27, 27, 0.8);
  opacity: 0.8;
  z-index: 90;

  display: flex;
  align-items: center;
  justify-content: center;

  & h1 {
    ${({ theme }) => theme.h1};
    color: ${({ theme }) => theme.color.white};
    opacity: 1;
  }
`;

export const StyledTextBox = styled.div`
  background-color: ${({ theme }) => theme.color.black};
  padding: 96px;
  height: 100%;

  width: 100%;
  max-width: 1053px;

  padding: 64px 32px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 100;

  @media screen and (min-width: ${BREAKPOINTS.sm}) {
    padding: 96px;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    padding: 128px 64px;
    width: 60%;
  }

  @media screen and (min-width: ${BREAKPOINTS.xl}) {
    top: 0;
    left: 70%;
  }

  @media screen and (min-width: ${BREAKPOINTS.xxl}) {
    top: 0;
    left: 70%;
  }

  & > p:first-of-type {
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 2px;
    font-weight: 500;
    color: ${({ theme }) => theme.color.orange};

    margin-bottom: 16px;
  }

  & h4 {
    ${({ theme }) => theme.h4};
    color: ${({ theme }) => theme.color.white};
    max-width: 584px;

    margin-bottom: 16px;
  }

  & p:nth-of-type(2) {
    ${({ theme }) => theme.body1}
    color: ${({ theme }) => theme.color.white};
    max-width: 614px;

    margin-bottom: 24px;

    @media screen and (min-width: ${BREAKPOINTS.lg}) {
      margin-bottom: 48px;
    }
  }

  & div {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 32px;

    @media screen and (min-width: ${BREAKPOINTS.md}) {
      flex-direction: row;
    }

    & > p {
      ${({ theme }) => theme.body1}
      color: ${({ theme }) => theme.color.white};
      opacity: 0.8;
    }
  }
`;
