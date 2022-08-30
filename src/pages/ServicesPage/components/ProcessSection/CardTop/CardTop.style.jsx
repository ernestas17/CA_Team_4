import styled from 'styled-components';
import BREAKPOINTS from '../../../../../constants/breakpoints';

export const StyledCardTop = styled.div`
  display: flex;
  flex-direction: column;

  & h3 {
    ${({ theme }) => theme.h3}
    color: ${({ theme }) => theme.color.black};
    max-width: 489px;
  }

  & ul {
    display: flex;
    flex-direction: column;
    gap: 32px;

    margin-top: 48px;

    & li {
      display: flex;
      gap: 24px;
      align-items: baseline;
      list-style: none;
      width: 100%;

      & p {
        ${({ theme }) => theme.title2}
        width: 80%;
        max-width: 443px;
        color: ${({ theme }) => theme.color.black};

        @media screen and (min-width: ${BREAKPOINTS.md}) {
          width: 100%;
        }
      }
    }
  }
`;

export const StyledCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.green};
`;
