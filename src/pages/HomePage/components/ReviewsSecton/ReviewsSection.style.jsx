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
  }
`;

export const StyledReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #fff;
  border: 1px solid rgba(172, 172, 172, 0.29);

  box-shadow: 11px 130px 100px 30px rgba(0, 0, 0, 0.02);
  border-radius: 6px;

  width: 100%;
  padding: 72px;
`;

export const StyledUserBox = styled.div`
  display: flex;
  gap: 16px;
`;
