import styled from 'styled-components';

export const StyledServicesSection = styled.section`
  padding: 128px 10px;
  background-color: #f5f5f5;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media screen and (min-width: 1400px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const StyledContL = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 64px 20px 43px 20px;
  width: 100%;
  max-width: 624px;

  @media screen and (min-width: 820px) {
    padding: 64px 48px 43px 48px;
  }

  h3 {
    font-weight: 700;
    font-size: 48px;
    line-height: 140%;
    letter-spacing: -0.03em;
    color: #1e1b1b;
    margin-top: 32px;
    margin-bottom: 16px;
  }

  p {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -0.03em;
    color: #232536;
    opacity: 0.6;
    margin-bottom: 32px;
  }
`;

export const StyledContR = styled.div`
  display: grid;
  gap: 32px;
  grid-template-columns: 1fr;

  @media screen and (min-width: 820px) {
    grid-template-columns: 1fr 1fr;
  }
`;
