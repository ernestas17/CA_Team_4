import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: #ffffff;
  padding: 18px 10px 16px 10px;
  max-width: 1300px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  & i {
    font-size: 24px;
  }

  @media screen and (min-width: 950px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 18px 40px 16px 40px;

    & i {
      display: none;
    }
  }

  @media screen and (min-width: 1400px) {
    padding: 18px 0px 16px 0px;
  }

  & nav {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 950px) {
      flex-direction: row;
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

        &:last-child {
          margin-bottom: 16px;

          @media screen and (min-width: 950px) {
            margin-bottom: 0px;
          }
        }

        @media screen and (min-width: 950px) {
          &:not(:nth-child(5)) {
            margin-right: 40px;
          }
        }

        & a {
          text-decoration: none;
          color: #1e1b1b;
          font-weight: 600;
          font-size: 16px;
          line-height: 28px;
          &:hover {
          }
        }
      }
    }
  }
`;

export const StyledMobileWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 950px) {
    width: 0px;
  }
`;

export const StyledLine = styled.div`
  background-color: #939191;
  border: 1px solid #939191;
  height: 42px;
  width: 0;
  opacity: 0.36;
`;

export const StyledCallWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  @media screen and (min-width: 950px) {
    margin-left: 32px;
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
  background-color: #61c3a1;
`;

export const StyledPhoneBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledTitle = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #1e1b1b;
  opacity: 0.7;
`;

export const StyledNumber = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 175%;
  color: #1e1b1b;
`;
