import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: #ffffff;
  padding: 18px 10px 16px 10px;
  max-width: 1300px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 950px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 18px 40px 16px 40px;
  }

  @media screen and (min-width: 1400px) {
    padding: 18px 0px 16px 0px;
  }
`;

export const StyledMobileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 950px) {
    width: 0px;
  }
`;
