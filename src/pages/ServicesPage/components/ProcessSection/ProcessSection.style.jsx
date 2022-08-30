import styled from 'styled-components';
import BREAKPOINTS from '../../../../constants/breakpoints.js';

export const StyledProcessSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 20px;
  max-width: 1300px;
  margin: 0 auto;
  gap: 64px;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    padding: 128px 0;
  }
`;

export const StyledTopPart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;

  @media screen and (min-width: ${BREAKPOINTS.xxl}) {
    flex-direction: row;
    justify-content: center;

    gap: 141px;
  }
`;

export const StyledBottomPart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;

  @media screen and (min-width: ${BREAKPOINTS.xxl}) {
    flex-direction: row;
    justify-content: center;

    gap: 88px;
  }
`;
