import styled from 'styled-components';
import BREAKPOINTS from '../../../constants/breakpoints';

export const StyledImgAndCard = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;

  position: relative;
  max-width: 1300px;
  margin: 0 auto;
`;

export const StyledImg = styled.div`
  background-image: url(${(props) => props.img});

  background-size: cover;
  background-position: center;
  position: absolute;
  left: 0;
  width: 66%;
  height: 100%;

  z-index: 1;
`;

export const StyledTextBox = styled.div`
  background-color: ${({ theme }) => theme.color.black};
  padding: 96px;
  height: 100%;

  padding: 40px 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 100;

  @media screen and (min-width: ${BREAKPOINTS.sm}) {
    padding: 96px;
  }

  @media screen and (min-width: ${BREAKPOINTS.xl}) {
    top: 0;
    left: 70%;
  }

  & h1 {
    ${({ theme }) => theme.h1};
    color: ${({ theme }) => theme.color.white};
    margin-bottom: 16px;
  }

  & p {
    ${({ theme }) => theme.body1}
    color: ${({ theme }) => theme.color.lightGrey};
    max-width: 541px;
    margin-bottom: 48px;
  }
`;
