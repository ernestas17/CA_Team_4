import styled from 'styled-components';
import BREAKPOINTS from '../../../constants/breakpoints';

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    flex-direction: row;
    justify-content: flex-end;
  }

  & ul {
    display: flex;
    align-items: center;

    flex-direction: column;
    margin-top: 20px;

    @media screen and (min-width: ${BREAKPOINTS.lg}) {
      flex-direction: row;
      margin-top: 0px;
    }

    & li {
      list-style: none;
      margin-bottom: 18px;

      @media screen and (min-width: ${BREAKPOINTS.lg}) {
        margin-bottom: 0px;
        &:not(:nth-child(5)) {
          margin-right: 40px;
        }
      }

      & a {
        ${({ theme }) => theme.body2}
        color: ${({ theme }) => theme.color.black};
        transition: all 0.5s;

        &:hover {
          opacity: 0.8;
          transition: color 0.15s ease-in;
        }
      }
    }
  }
`;
