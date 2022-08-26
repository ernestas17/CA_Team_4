import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;

  @media screen and (min-width: 950px) {
    flex-direction: row;
    justify-content: flex-end;
  }

  & ul {
    display: flex;
    align-items: center;

    flex-direction: column;
    margin-top: 20px;

    @media screen and (min-width: 950px) {
      flex-direction: row;
      margin-top: 0px;
    }

    & li {
      list-style: none;
      margin-bottom: 18px;

      @media screen and (min-width: 950px) {
        margin-bottom: 0px;
        &:not(:nth-child(5)) {
          margin-right: 40px;
        }
      }

      & a {
        text-decoration: none;
        color: #1e1b1b;
        &:hover {
        }
      }
    }
  }
`;
