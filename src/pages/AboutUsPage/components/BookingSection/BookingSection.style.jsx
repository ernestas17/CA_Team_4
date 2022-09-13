import styled from 'styled-components';
import BREAKPOINTS from '../../../../constants/breakpoints';

export const StyledBookingSection = styled.section`
  padding: 64px 0px 64px 0px;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    padding: 80px 0px 128px 0px;
  }
`;
