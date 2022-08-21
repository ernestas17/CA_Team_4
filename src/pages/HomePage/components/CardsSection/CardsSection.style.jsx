import styled from 'styled-components';

export const StyledCardsSection = styled.section`
  background: #f2f2f2;
  width: 100%;
  padding: 128px 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  & h6 {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    letter-spacing: -0.03em;
    color: #1e1b1b;
    margin-bottom: 8px;
  }

  & h2 {
    font-weight: 800;
    font-size: 58px;
    line-height: 76px;
    text-align: center;
    letter-spacing: -0.03em;
    color: #1e1b1b;
    max-width: 858px;
    margin-bottom: 64px;
  }
`;

export const StyledCardsContainer = styled.div`
  display: grid;
  gap: 8px;
  grid-template-columns: 1fr;
  margin-bottom: 32px;

  @media screen and (min-width: 820px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (min-width: 1400px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const StyledLinkWrapper = styled.div`
  width: 316px;
  display: flex;
  justify-content: flex-end;

  @media screen and (min-width: 820px) {
    width: 638px;
  }

  @media screen and (min-width: 1280px) {
    width: 960px;
  }

  @media screen and (min-width: 1400px) {
    width: 1282px;
  }
`;

export const StyledLink = styled.div`
  display: flex;
  align-items: baseline;
  gap: 21px;
  margin-top: 32px;
  align-items: center;

  a {
    font-weight: 600;
    font-size: 18px;
    line-height: 175%;

    color: #1e1b1b;
    text-decoration: none;
  }
`;
