import styled from 'styled-components';
import BREAKPOINTS from '../../../../constants/breakpoints';

export const StyledBrandsSection = styled.section`
  width: 100vw - (100vw - 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 20px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding: 64px 40px;
  }
  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    padding: 128px 40px;
  }

  & h3 {
    ${({ theme }) => theme.h3}
    text-align: center;
    color: ${({ theme }) => theme.color.black};
    margin-bottom: 41px;
  }

  & svg {
    color: ${({ theme }) => theme.color.black};
    width: 150px;
    height: auto;

    @media screen and (min-width: ${BREAKPOINTS.md}) {
      width: 226px;
    }
  }
`;

export const StyledLogosContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1300px;
`;
