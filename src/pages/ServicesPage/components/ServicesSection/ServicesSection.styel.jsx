import styled from 'styled-components';
import BREAKPOINTS from '../../../../constants/breakpoints';

export const StyledServicesSection = styled.section`
  padding: 128px 10px;
  background-color: ${({ theme }) => theme.color.lightGrey2};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media screen and (min-width: ${BREAKPOINTS.xxl}) {
    flex-direction: row;
    justify-content: center;
    padding: 128px 0;
  }
`;

export const StyledContL = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  padding: 64px 20px 43px 20px;
  width: 100%;
  max-width: 624px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding: 64px 48px 43px 48px;
  }

  h3 {
    ${({ theme }) => theme.h3};
    color: ${({ theme }) => theme.color.black};
    margin-top: 32px;
    margin-bottom: 16px;
  }

  p {
    ${({ theme }) => theme.title2};
    color: ${({ theme }) => theme.color.darkBlue};
    opacity: 0.6;
    margin-bottom: 32px;
  }
`;

export const StyledContR = styled.div`
  display: grid;
  gap: 8px;
  width: 100%;
  max-width: 624px;
  grid-template-columns: 1fr 1fr;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    gap: 32px;
  }
`;
