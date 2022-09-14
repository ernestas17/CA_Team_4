import styled from 'styled-components';
import BREAKPOINTS from '../../../constants/breakpoints';

export const StyledFooterContacts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px ${({ theme }) => theme.color.black} solid;
  padding: 40px 20px;
  max-width: 1920px;
  margin: 0 auto;

  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  opacity: 0.98;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    padding: 64px 0px;
  }

  @media screen and (min-width: ${BREAKPOINTS.xl}) {
    padding: 128px 0px;
  }
`;

export const StyledWrapper = styled.div`
  max-width: 1300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 1280px;
  height: 100%;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0 40px;
    gap: 66.2px;
  }

  @media screen and (min-width: ${BREAKPOINTS.xl}) {
    gap: 193px;
  }

  @media screen and (min-width: ${BREAKPOINTS.xxl}) {
    padding: 0;
  }
`;

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 463px;

  & h3 {
    ${({ theme }) => theme.h3}
    margin-bottom: 33px;

    @media screen and (min-width: ${BREAKPOINTS.lg}) {
      margin-bottom: 66.2px;
    }
  }

  & ul {
    display: flex;
    align-items: center;
    gap: 23.6px;
    list-style: none;

    & a {
      color: inherit;
    }
  }
`;

export const StyledContactBox = styled.div`
  &:not(:last-child) {
    margin-bottom: 20px;

    @media screen and (min-width: ${BREAKPOINTS.lg}) {
      margin-bottom: 32px;
    }
  }

  & p:first-of-type {
    ${({ theme }) => theme.body1}
    opacity: 0.6;
  }

  & p:last-of-type {
    ${({ theme }) => theme.title2}
  }
`;
