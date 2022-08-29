import styled from 'styled-components';
import BREAKPOINTS from '../../../../constants/breakpoints';

export const StyledRewiewSection = styled.section`
  background: ${({ theme }) => theme.color.lightGrey};
  padding: 64px 20px;

  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding: 64px 40px;
  }

  @media screen and (min-width: ${BREAKPOINTS.xl}) {
    padding: 128px 40px;
  }

  & h3 {
    ${({ theme }) => theme.h3};
    color: ${({ theme }) => theme.color.black};
    max-width: 909px;
    text-align: center;
    margin-bottom: 64px;
    @media screen and (min-width: ${BREAKPOINTS.xl}) {
      margin-bottom: 94px;
    }
  }
`;

export const StyledCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;

  width: 100%;

  @media screen and (min-width: ${BREAKPOINTS.xl}) {
    justify-content: center;
    flex-direction: row;
  }
`;

export const StyledPaginationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 43px;
  width: 100%;
  max-width: 1300px;

  @media screen and (min-width: ${BREAKPOINTS.xl}) {
    flex-direction: row;
    justify-content: flex-end;
  }
`;

export const StyledPaginationContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: baseline;
  width: 100%;
  height: 62px;

  @media screen and (min-width: ${BREAKPOINTS.xl}) {
    flex-direction: row;
    width: 100%;

    align-items: baseline;
    justify-content: space-between;
  }

  & ul {
    position: absolute;
    left: calc(50% - 86.5px);
    top: 31px;
    display: flex;
    flex-direction: row;
    gap: 15px;

    & li {
      list-style: none;
      cursor: pointer;
    }
  }
`;

export const StyledDot = styled.div`
  width: 32px;
  background-color: ${({ theme }) => theme.color.darkGrey};
  height: 0px;
  border: 2px solid ${({ theme }) => theme.color.darkGrey};
`;

export const StyledDotActive = styled.div`
  width: 32px;
  background-color: ${({ theme }) => theme.color.orange};
  height: 0px;
  border: 2px solid ${({ theme }) => theme.color.orange};
`;

export const StyledBtnsWrapper = styled.div`
  width: 100%;
  gap: 34px;
  height: 62px;

  justify-content: center;
  align-items: center;
  margin-top: 43px;
  display: none;

  @media screen and (min-width: ${BREAKPOINTS.xl}) {
    display: flex;
    margin-top: 0;
    justify-content: flex-end;
  }
`;
