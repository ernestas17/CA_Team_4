import styled from 'styled-components';
import BREAKPOINTS from '../../../constants/breakpoints';

export const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  order: 1;

  @media screen and (min-width: ${BREAKPOINTS.xxl}) {
    flex-direction: column;
    order: 0;
    justify-content: flex-start;
    gap: 53px;
  }
`;

export const StyledOtherServices = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.color.lightGrey2};
  padding: 32px;
  margin-bottom: 64px;

  @media screen and (min-width: ${BREAKPOINTS.xxl}) {
    margin-bottom: 0px;
  }
`;

export const StyledOtherServicesTitle = styled.p`
  ${({ theme }) => theme.title2};
  color: ${({ theme }) => theme.color.black};
  margin-bottom: 32px;
`;

export const StyledCardsCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    flex-direction: row;
  }

  @media screen and (min-width: ${BREAKPOINTS.xxl}) {
    flex-direction: column;
  }
`;

export const StyledTxtCardCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    flex-direction: row;
    width: 100%;
    max-width: 908px;
    gap: 32px;
  }

  @media screen and (min-width: ${BREAKPOINTS.xxl}) {
    flex-direction: column;
    max-width: 330px;
  }
`;
