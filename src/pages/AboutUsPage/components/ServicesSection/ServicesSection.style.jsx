import styled from 'styled-components';
import BREAKPOINTS from '../../../../constants/breakpoints';

export const StyledServicesSection = styled.section`
  background-color: ${({ theme }) => theme.color.lightGrey3};
  margin: 0 auto;
  width: 100%;
  max-width: 1920px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 20px 18px 20px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding: 64px 40px;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    padding: 128px 40px 80px 40px;
  }

  & > h2 {
    ${({ theme }) => theme.h2};
    text-align: center;
    max-width: 861px;
    margin-bottom: 32px;

    @media screen and (min-width: ${BREAKPOINTS.lg}) {
      margin-bottom: 64px;
    }
  }

  & > div {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2px;

    width: 100%;
    max-width: 1280px;

    @media screen and (min-width: ${BREAKPOINTS.lg}) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;
