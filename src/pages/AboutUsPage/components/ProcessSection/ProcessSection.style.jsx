import styled from 'styled-components';
import BREAKPOINTS from '../../../../constants/breakpoints';
import img from '../../../../assets/images/aboutUsPage/processSection/aboutUs-process-mazda.jpg';

export const StyledProcessSection = styled.section`
  width: 100%;
  max-width: 1300px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 70px;

  background-color: ${({ theme }) => theme.color.white};
  height: fit-content;
  padding: 0px 20px 64px 20px;

  margin: 0 auto;

  @media screen and (min-width: ${BREAKPOINTS.sm}) {
    padding: 0px 40px 64px 40px;
    gap: 131px;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    flex-direction: row;
    gap: 87px;
    align-items: flex-start;
  }

  @media screen and (min-width: ${BREAKPOINTS.xxl}) {
    padding: 0px 0px 128px 0px;
  }
`;

export const StyledContentCont = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 620px;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    max-width: 50%;
  }

  & h3 {
    ${({ theme }) => theme.h3}
    width: 100%;
    color: ${({ theme }) => theme.color.black};

    margin-bottom: 16px;
  }

  & > p {
    ${({ theme }) => theme.title2}

    color: ${({ theme }) => theme.color.darkBlue};
    opacity: 0.6;

    max-width: 614px;
    margin-bottom: 48px;
  }
`;

export const StyledProcessCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
`;

export const StyledImgCont = styled.div`
  display: none;

  width: 100%;
  height: 773px;
  max-width: 573px;

  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media screen and (min-width: ${BREAKPOINTS.xl}) {
    display: flex;
  }
`;
