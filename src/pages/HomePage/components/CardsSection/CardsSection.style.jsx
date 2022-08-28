import styled from 'styled-components';
import BREAKPOINTS from '../../../../constants/breakpoints';

export const StyledCardsSection = styled.section`
  background: ${({ theme }) => theme.color.lightGrey};
  width: 100%;
  padding: 64px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    padding: 128px 40px;
  }

  & h6 {
    ${({ theme }) => theme.title2}
    text-align: center;
    color: ${({ theme }) => theme.color.black};
    margin-bottom: 8px;
  }

  & h2 {
    ${({ theme }) => theme.h2}
    text-align: center;
    color: ${({ theme }) => theme.color.black};
    max-width: 858px;
    margin-bottom: 64px;
  }
`;

export const StyledCardsContainer = styled.div`
  display: grid;
  gap: 8px;
  grid-template-columns: 1fr;
  margin-bottom: 32px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: ${BREAKPOINTS.xl}) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (min-width: ${BREAKPOINTS.xxl}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const StyledLinkWrapper = styled.div`
  width: 316px;
  display: flex;
  justify-content: flex-end;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    width: 638px;
  }

  @media screen and (min-width: ${BREAKPOINTS.xl}) {
    width: 960px;
  }

  @media screen and (min-width: ${BREAKPOINTS.xxl}) {
    width: 1282px;
  }
`;
