import styled from 'styled-components';
import BREAKPOINTS from '../../../../constants/breakpoints';

export const StyledPostsSection = styled.section`
  max-width: 1920px;
  background-color: ${({ theme }) => theme.color.lightGrey2};

  padding: 64px 20px;

  display: flex;
  flex-direction: column;
  gap: 32px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding: 64px 40px;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    padding: 128px 40px;

    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }

  @media screen and (min-width: ${BREAKPOINTS.xl}) {
  }
`;

export const StyledPostsCont = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  gap: 32px;
`;
