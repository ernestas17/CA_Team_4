import styled from 'styled-components';

export const StyledSingleServicePage = styled.main`
  max-width: 1920px;

  /* display: flex;
  flex-direction: column;
  margin: 0 auto; */

  & h1 {
    text-align: center;
    max-width: 1300px;
    font-weight: 800;
    font-size: 64px;
    line-height: 84px;
    letter-spacing: -0.03em;
    color: #1e1b1b;
    /* margin-bottom: 96px; */
    margin: 0 auto 96px auto;

    @media screen and (min-width: 1400px) {
      text-align: start;
    }
  }
`;

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0px 10px 136px 10px;

  @media screen and (min-width: 820px) {
    padding: 0px 40px 136px 40px;
  }

  @media screen and (min-width: 1400px) {
    flex-direction: row;
    padding: 0px 0px 136px 0px;
  }
`;

export const StyledCardsBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 53px;
  justify-content: center;
  margin-bottom: 96px;

  @media screen and (min-width: 820px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1400px) {
    flex-direction: column;
  }
`;

export const StyledOtherServices = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 328px;
  background: #f5f5f5;
  padding: 32px;
  margin-bottom: 96px;

  @media screen and (min-width: 1400px) {
    margin-bottom: 0px;
  }
`;

export const StyledOtherServicesH5 = styled.h5`
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  letter-spacing: -0.03em;
  color: #1e1b1b;
  margin-bottom: 32px;
`;

export const StyledCardsCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

export const StyledTxtCardCont = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 330px;
  gap: 32px;
`;

export const StyledContentBlock = styled.div`
  width: 100%;
  max-width: 854px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  & h4 {
    font-weight: 700;
    font-size: 40px;
    line-height: 140%;
    letter-spacing: -0.03em;
    color: #1e1b1b;
    margin-bottom: 24px;
  }
`;

export const StyledImg = styled.img`
  width: 100%;
  margin-bottom: 56px;
`;

export const StyledP1 = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  color: #232536;
  opacity: 0.6;
  margin-bottom: 33px;
`;
export const StyledP2 = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  color: #232536;
  opacity: 0.6;
  margin-bottom: 68px;
`;

export const StyledContentH5 = styled.h5`
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  letter-spacing: -0.03em;
  color: #1e1b1b;
  margin-bottom: 24px;
`;

export const StyledP3 = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  color: #232536;
  opacity: 0.6;
  margin-bottom: 24px;
`;

export const StyledLeftBorder = styled.div`
  display: flex;
  align-items: center;

  height: 112px;
  border-left: solid 3.04px #1e1b1b;
  padding-left: 32.46px;
`;

export const StyledP4 = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 175%;
  color: #232536;
  opacity: 0.6;
  max-width: 818px;
`;
