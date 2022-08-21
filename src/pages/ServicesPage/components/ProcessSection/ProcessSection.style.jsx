import styled from 'styled-components';

export const StyledProcessSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 128px 10px;
  max-width: 1300px;
  margin: 0 auto;
  gap: 64px;

  @media screen and (min-width: 1400px) {
    padding: 128px 0;
  }
`;

export const StyledTopPart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;

  @media screen and (min-width: 1400px) {
    flex-direction: row;
    justify-content: center;

    gap: 141px;
  }
`;

export const StyledCardTop = styled.div`
  display: flex;
  flex-direction: column;

  & h3 {
    font-weight: 700;
    font-size: 48px;
    line-height: 140%;
    letter-spacing: -0.03em;
    color: #1e1b1b;
    max-width: 489px;
  }

  & ul {
    display: flex;
    flex-direction: column;
    gap: 32px;

    margin-top: 48px;

    & li {
      display: flex;
      gap: 24px;
      align-items: baseline;
      list-style: none;
      width: 100%;

      & p {
        width: 100%;
        max-width: 443px;
        font-weight: 600;
        font-size: 24px;
        line-height: 36px;
        letter-spacing: -0.03em;
        color: #1e1b1b;
      }
    }
  }
`;

export const StyledCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background-color: #00d289;
`;

export const StyledBottomPart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;

  @media screen and (min-width: 1400px) {
    flex-direction: row;
    justify-content: center;

    gap: 88px;
  }
`;

export const StyledCardBottom = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 547px;

  @media screen and (min-width: 820px) {
    order: -1;
  }

  @media screen and (min-width: 1400px) {
    order: 0;
  }

  & h3 {
    font-weight: 700;
    font-size: 48px;
    line-height: 140%;
    letter-spacing: -0.03em;
    color: #1e1b1b;
  }
`;

export const StyledCardText = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 175%;
  color: #232536;
  opacity: 0.6;
  margin: 32px 0;
  max-width: 512px;
`;
