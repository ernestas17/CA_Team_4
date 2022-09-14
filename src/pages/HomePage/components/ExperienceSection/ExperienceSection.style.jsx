import styled from 'styled-components';
import BREAKPOINTS from '../../../../constants/breakpoints';

export const StyledExperienceSection = styled.section`
  background: ${(props) =>
    props.background ? props.background : 'transparent'};
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

  column-gap: 50px;
  row-gap: 50px;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: space-between;
  }

  @media screen and (min-width: ${BREAKPOINTS.xl}) {
    column-gap: auto;
  }

  @media screen and (min-width: ${BREAKPOINTS.xxl}) {
    column-gap: 190px;
  }
`;

export const StyledExperience = styled.div`
  justify-self: center;
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
    display: inline-block;
    white-space: nowrap;
  }
`;
