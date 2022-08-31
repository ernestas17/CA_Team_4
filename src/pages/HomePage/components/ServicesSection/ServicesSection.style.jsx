import styled from 'styled-components';
import BREAKPOINTS from '../../../../constants/breakpoints';

export const StyledServicesSection = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  gap: 72px;

  background-color: ${({ theme }) => theme.color.grey};
  height: fit-content;
  padding: 64px 20px;

  max-width: 1922px;
  margin: 0 auto;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding: 128px 40px;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const StyledContainerL = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 584px;

  & h2 {
    ${({ theme }) => theme.h2}
    line-height: 76px;
    color: ${({ theme }) => theme.color.black};
    -webkit-text-stroke: 2px ${({ theme }) => theme.color.darkBlack};
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    max-width: 583px;
    margin-bottom: 48px;
  }

  & a {
    margin-left: 63px;
  }
`;

export const StyledCardsCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 32px;
`;
// Right container

export const StyledContainerR = styled.div`
  width: 100%;
  max-width: 625px;

  display: flex;
  flex-direction: column;

  & form {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 32px;
  }

  & h3 {
    ${({ theme }) => theme.h3}
    margin-bottom: 32px;
  }
`;
