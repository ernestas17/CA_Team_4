import styled from 'styled-components';
import BREAKPOINTS from '../../../constants/breakpoints';

export const StyledFooter = styled.footer`
  height: fit-content;
  width: calc(100vw - (100vw - 100%));
  padding: 20px 0;
  background-color: ${({ theme }) => theme.color.black};
  border: 1px ${({ theme }) => theme.color.black} solid;

  max-width: 1920px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  & p {
    ${({ theme }) => theme.body2}
    color: ${({ theme }) => theme.color.darkGrey};
  }

  @media screen and (min-width: ${BREAKPOINTS.sm}) {
    padding: 20px 40px;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    height: 157px;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 1300px;
  height: 100%;

  & svg {
    color: ${({ theme }) => theme.color.white};
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    flex-direction: row;
  }

  & nav {
    padding: 16px 0;
  }

  & ul {
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media screen and (min-width: ${BREAKPOINTS.sm}) {
      flex-direction: row;
      gap: 40px;
    }

    & li {
      list-style: none;

      & a {
        color: ${({ theme }) => theme.color.white};

        &:hover {
          color: ${({ theme }) => theme.color.grey};
          transition: 0.2s;
        }
      }
    }
  }
`;
