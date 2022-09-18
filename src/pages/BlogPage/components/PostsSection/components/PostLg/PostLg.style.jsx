import styled from 'styled-components';
import BREAKPOINTS from '../../../../../../constants/breakpoints';

export const StyledPostLg = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  background-color: ${({ theme }) => theme.color.white};

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    max-width: 45%;
  }
  @media screen and (min-width: ${BREAKPOINTS.xxl}) {
    max-width: 537px;
  }

  & div:first-child {
    width: 100%;
    height: 330px;

    background-image: url(${(props) => props.img});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    margin-bottom: 32px;

    @media screen and (min-width: ${BREAKPOINTS.md}) {
      height: 330px;
    }
  }

  & p:first-of-type {
    ${({ theme }) => theme.body2};
    color: ${({ theme }) => theme.color.darkGrey};
    opacity: 0.8;

    max-width: 473px;
    margin-bottom: 16px;
  }

  & h4 {
    ${({ theme }) => theme.h4};
    max-width: 466px;
    margin-bottom: 16px;
  }

  & p:last-of-type {
    ${({ theme }) => theme.body2};
    opacity: 0.6;

    margin-bottom: 32px;
  }
`;
