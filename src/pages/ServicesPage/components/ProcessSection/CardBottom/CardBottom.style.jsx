import styled from 'styled-components';
import BREAKPOINTS from '../../../../../constants/breakpoints';

export const StyledCardBottom = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 547px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    order: -1;
  }

  @media screen and (min-width: ${BREAKPOINTS.xxl}) {
    order: 0;
  }

  & h3 {
    ${({ theme }) => theme.h3};
    color: ${({ theme }) => theme.color.black};
  }
`;

export const StyledCardText = styled.p`
  ${({ theme }) => theme.body1};
  color: ${({ theme }) => theme.color.darkBlue};
  opacity: 0.6;
  margin: 32px 0;
  max-width: 512px;
`;
