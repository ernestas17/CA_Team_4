import styled from 'styled-components';
import BREAKPOINTS from '../../../../constants/breakpoints';

export const StyledArticlesSection = styled.section`
  max-width: 1920px;
  background-color: ${({ theme }) => theme.color.white};
  padding: 64px 20px;
  max-width: fit-content;
  margin: 0 auto;

  display: grid;
  gap: 32px;
  grid-template-columns: 1fr;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding: 64px 40px;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: ${BREAKPOINTS.xl}) {
    padding: 128px 40px;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (min-width: ${BREAKPOINTS.xl}) {
  }
`;
