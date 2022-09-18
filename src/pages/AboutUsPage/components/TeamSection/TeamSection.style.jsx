import styled from 'styled-components';
import BREAKPOINTS from '../../../../constants/breakpoints';

export const StyledTeamSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 64px 20px;

  width: 100%;
  max-width: 1280px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding: 128px 40px;
  }

  & h1 {
    ${({ theme }) => theme.h1};
    text-align: center;
    margin-bottom: 33px;

    @media screen and (min-width: ${BREAKPOINTS.md}) {
      margin-bottom: 66px;
    }
  }

  & > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 432px;
    grid-column-gap: 16px;
    grid-row-gap: 24px;

    width: 100%;
    height: 1300px;

    @media screen and (min-width: ${BREAKPOINTS.lg}) {
      grid-template-columns: 1fr 1fr 1fr;
      height: 900px;
    }

    @media screen and (min-width: ${BREAKPOINTS.xl}) {
      grid-row-gap: 48px;
    }
  }
`;
