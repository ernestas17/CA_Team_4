import styled from 'styled-components';
import BREAKPOINTS from '../../../../constants/breakpoints';

export const StyledFaqSection = styled.section`
  background: ${({ theme }) => theme.color.grey};
  padding: 64px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding: 64px 40px;
  }

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding: 128px 40px;
  }

  & h3 {
    ${({ theme }) => theme.h3};
    text-align: center;
    color: ${({ theme }) => theme.color.black};
    margin-bottom: 95px;
  }
`;
