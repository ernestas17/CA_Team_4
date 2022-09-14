import styled from 'styled-components';
import BREAKPOINTS from '../../../../constants/breakpoints';

export const StyledObjectivesSection = styled.section`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: ${BREAKPOINTS.xl}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
