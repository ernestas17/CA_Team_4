import styled from 'styled-components';
import BREAKPOINTS from '../../../constants/breakpoints';
export const StyledProvidedServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  background-color: ${({ theme }) => theme.color.white};
  padding: 44px 33px;

  @media screen and (min-width: ${BREAKPOINTS.xxl}) {
    padding: 88px 66px;
  }

  & div {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 64px;
    width: 64px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.lightOrange};
    margin-bottom: 24px;
  }

  & p:first-of-type {
    ${({ theme }) => theme.title1};
    text-align: center;
    margin-bottom: 16px;
  }

  & p:last-of-type {
    ${({ theme }) => theme.body1};
    opacity: 0.6;
    text-align: center;
    max-width: 295px;
  }
`;
