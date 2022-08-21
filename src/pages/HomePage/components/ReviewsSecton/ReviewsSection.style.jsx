import styled from 'styled-components';

export const StyledRewiewSection = styled.section`
  background: #f2f2f2;
  padding: 128px 10px;

  display: flex;
  align-items: center;
  flex-direction: column;

  & h3 {
    font-weight: 700;
    font-size: 48px;
    line-height: 140%;

    letter-spacing: -0.03em;
    color: #1e1b1b;
    max-width: 909px;
    text-align: center;

    margin-bottom: 94px;
  }
`;

export const StyledCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;

  width: 100%;

  @media screen and (min-width: 1280px) {
    justify-content: center;
    flex-direction: row;
  }
`;

export const StyledPaginationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 43px;
  width: 100%;
  max-width: 1150px;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    justify-content: flex-end;
  }
`;

export const StyledPaginationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: baseline;
  width: 100%;

  @media screen and (min-width: 1280px) {
    gap: 424px;
  }

  & ul {
    display: flex;
    flex-direction: row;
    gap: 15px;

    & li {
      list-style: none;
      cursor: pointer;
    }
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    width: 100%;
    align-items: baseline;
    max-width: 660px;
  }
`;

export const StyledDot = styled.div`
  width: 32px;
  background-color: #939191;
  height: 0px;
  border: 2px solid #939191;
`;

export const StyledDotActive = styled.div`
  width: 32px;
  background-color: #ff6433;
  height: 0px;
  border: 2px solid #ff6433;
`;

export const StyledBtnsWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 34px;
  height: 62px;

  justify-content: center;
  margin-top: 43px;

  @media screen and (min-width: 1280px) {
    margin-top: 0;
    align-items: center;
  }
`;
