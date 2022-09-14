import styled from 'styled-components';
import BREAKPOINTS from '../../../../constants/breakpoints';

export const StyledProcessSection = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 70px;

  background-color: ${({ theme }) => theme.color.white};
  height: fit-content;
  padding: 64px 20px;

  max-width: 1922px;
  margin: 0 auto;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding: 128px 40px;
    gap: 131px;
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
  max-width: 555px;

  & h2 {
    ${({ theme }) => theme.h2}
    width: 100%;
    color: ${({ theme }) => theme.color.black};

    margin-bottom: 16px;
  }

  & p {
    ${({ theme }) => theme.body2}

    color: ${({ theme }) => theme.color.black};
    opacity: 0.6;

    max-width: 437px;
    margin-bottom: 32px;
  }
`;

export const StyledContainerR = styled.div`
  width: 100%;
  max-width: 555px;

  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: baseline;
`;
