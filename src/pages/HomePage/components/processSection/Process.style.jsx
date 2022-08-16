import styled from 'styled-components';

export const StyledProcessSection = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 131px;

  background-color: #fff;
  height: fit-content;
  padding: 128px 10px;

  max-width: 1922px;
  margin: 0 auto;

  @media screen and (min-width: 820px) {
    padding: 128px 40px;
  }

  @media screen and (min-width: 950px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const StyledContainerL = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 555px;

  & h2 {
    width: 100%;
    font-size: 58px;
    font-weight: 800;
    line-height: 76px;
    color: #1e1b1b;

    margin-bottom: 16px;
  }

  & p {
    font-size: 16px;
    font-weight: 600;
    color: #1e1b1b;
    opacity: 0.6;
    line-height: 28px;

    max-width: 437px;
    margin-bottom: 32px;
  }
`;

export const StyledIconsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledBigCircle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background-color: #661ce7;

  & span {
    color: #fff;
    font-weight: 600;
    font-size: 28px;
  }
`;

export const StyledSmallCircle = styled.div`
  position: absolute;
  top: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.24);
`;

export const StyledLineBox = styled.div`
  height: 71px;
  z-index: 100;
  margin-top: 15px;
`;

// Right container

export const StyledContainerR = styled.div`
  width: 100%;
  max-width: 555px;

  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: baseline;
`;

export const StyledServiceWrapper = styled.div`
  width: 100%;

  display: flex;
  gap: 24px;
  align-items: baseline;
`;

export const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & h5 {
    font-size: 32px;
    line-height: 48px;
    font-weight: 700;
    letter-spacing: -0.03em;

    margin-bottom: 8px;
  }

  & p {
    max-width: 336px;
    font-weight: 600;
    font-size: 18px;
    line-height: 175%;

    color: #1e1b1b;
    opacity: 0.6;
  }
`;
