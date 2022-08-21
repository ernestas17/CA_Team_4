import styled from 'styled-components';

export const StyledServicesSection = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  gap: 72px;

  background-color: #e2e6e9;
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
  max-width: 584px;

  & h2 {
    font-size: 58px;
    font-weight: 800;
    line-height: 76px;
    color: #1e1b1b;
    -webkit-text-stroke: 2px #000;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    max-width: 583px;
    margin-bottom: 48px;
  }

  & a {
    margin-left: 63px;
  }
`;

export const StyledServiceWrapper = styled.div`
  display: flex;
  align-items: baseline;
  width: 100%;
  gap: 16px;

  margin-bottom: 32px;
`;
export const StyledIconCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 47px;
  width: 47px;
  background-color: #fff;
  border-radius: 50%;
`;

export const StyledServiceTxtWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 83%;

  & h6 {
    font-size: 24px;
    line-height: 28px;

    color: #1e1b1b;
    margin-bottom: 6px;
  }

  p {
    font-weight: 600;
    color: #1e1b1b;
    opacity: 0.6;
    max-width: 322px;
  }
`;

// Right container

export const StyledContainerR = styled.div`
  width: 100%;
  max-width: 625px;

  display: flex;
  flex-direction: column;

  & form {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 32px;

    & ::placeholder {
      line-height: 28px;
      font-weight: 600;
      font-size: 16px;
      color: #1e1b1b;
      opacity: 0.5;
    }
  }

  & h3 {
    font-size: 48px;
    font-weight: 700;
    line-height: 67.2px;
    margin-bottom: 32px;
  }

  & input {
    width: 100%;
    padding: 22.91px 40.33px;
    border: none;
  }
`;
