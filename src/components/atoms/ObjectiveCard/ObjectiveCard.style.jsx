import styled from 'styled-components';
import BREAKPOINTS from '../../../constants/breakpoints';

export const StyledObjectiveCard = styled.div`
  background-image: url(${(props) => props.img});
  width: 100%;
  height: 100%;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  & div {
    padding: 60px 40px;
    background-color: ${(props) => props.overlay};
    opacity: 0.9;

    height: 100%;

    @media screen and (min-width: ${BREAKPOINTS.sm}) {
      padding: 128px 102px 100px 102px;
    }

    @media screen and (min-width: ${BREAKPOINTS.md}) {
      padding: 150px 102px 135px 102px;
    }

    @media screen and (min-width: ${BREAKPOINTS.xl}) {
      padding: 60px 40px;
    }

    @media screen and (min-width: ${BREAKPOINTS.xxl}) {
      padding: 150px 102px 135px 102px;
    }

    & h4 {
      ${({ theme }) => theme.h4}
      color: ${({ theme }) => theme.color.white};
      margin-bottom: 16px;

      @media screen and (min-width: ${BREAKPOINTS.lg}) {
        margin-bottom: 32px;
      }
    }

    & p {
      ${({ theme }) => theme.title2}
      color: ${({ theme }) => theme.color.white};
      opacity: 0.7;
    }
  }
`;
