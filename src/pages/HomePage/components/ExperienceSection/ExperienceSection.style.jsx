import styled from 'styled-components';
import BREAKPOINTS from '../../../../constants/breakpoints';

export const StyledExperienceSection = styled.section`
  background: ${({ theme }) => theme.color.lightGrey};
  padding: 48px 20px;
  display: flex;
  justify-content: center;

  @media screen and (min-width: ${BREAKPOINTS.sm}) {
    padding: 48px 40px;
  }
`;

export const StyledWrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;

  column-gap: 100px;
  row-gap: 50px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media screen and (min-width: ${BREAKPOINTS.xl}) {
    column-gap: 190px;
  }
`;

export const StyledExperience = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 2px;

  & h2 {
    ${({ theme }) => theme.h2};
    color: ${({ theme }) => theme.color.purple};
  }

  & p {
    ${({ theme }) => theme.title2};
    color: ${({ theme }) => theme.color.black};
    opacity: 0.7;
  }
`;
