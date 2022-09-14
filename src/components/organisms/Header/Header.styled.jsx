import styled from 'styled-components';
import BREAKPOINTS from '../../../constants/breakpoints';

export const StyledHeader = styled.header`
  padding: 18px 20px 16px 20px;
  max-width: 1300px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  & svg {
    color: ${({ theme }) => theme.color.black};
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    flex-direction: row;
    justify-content: space-between;
    padding: 18px 40px 16px 40px;
  }

  @media screen and (min-width: ${BREAKPOINTS.xxl}) {
    padding: 18px 0px 16px 0px;
  }
`;

export const StyledNavWrapper = styled.div`
  display: ${({ displayNav }) => (displayNav ? 'flex' : 'none')};

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    display: flex;
  }
`;

export const StyledMobileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    width: 0px;
  }
`;

export const StyledCallWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 250px;
  gap: 18px;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    flex-direction: row;
    gap: 32px;
  }
`;

export const StyledSeparator = styled.div`
  background-color: ${({ theme }) => theme.color.darkGrey};
  border: 1px solid ${({ theme }) => theme.color.darkGrey};
  height: 0;
  width: 160px;
  opacity: 0.36;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    height: 42px;
    width: 0;
  }
`;

export const StyledCallContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;
`;

export const StyledCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.darkGreen};

  & svg {
    color: ${({ theme }) => theme.color.white};
  }
`;

export const StyledPhoneBox = styled.div`
  display: flex;
  flex-direction: column;

  & p:first-of-type {
    ${({ theme }) => theme.caption}
    color: ${({ theme }) => theme.color.black};
    opacity: 0.7;
  }

  & p:last-of-type {
    ${({ theme }) => theme.body1}
    color: ${({ theme }) => theme.color.black};
  }
`;
