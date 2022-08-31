import styled from 'styled-components';
import BREAKPOINTS from '../../../constants/breakpoints';

export const StyledArticle = styled.article`
  width: 100%;
  max-width: 854px;
  display: flex;
  flex-direction: column;
  margin: 0 auto 64px auto;

  @media screen and (min-width: ${BREAKPOINTS.xxl}) {
    margin: 0 auto 0 auto;
  }

  & h4 {
    ${({ theme }) => theme.h4}
    color:  ${({ theme }) => theme.color.black};
    margin-bottom: 24px;
  }
`;

export const StyledImg = styled.img`
  width: 100%;
  margin-bottom: 26px;
  @media screen and (min-width: ${BREAKPOINTS.md}) {
    margin-bottom: 56px;
  }
`;

export const StyledP1 = styled.p`
  ${({ theme }) => theme.body2};
  color: ${({ theme }) => theme.color.darkBlue};
  opacity: 0.6;
  margin-bottom: 33px;
`;
export const StyledP2 = styled.p`
  ${({ theme }) => theme.body2};
  color: ${({ theme }) => theme.color.darkBlue};
  opacity: 0.6;
  margin-bottom: 48px;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    margin-bottom: 48px;
  }
`;

export const StyledSubHeading = styled.p`
  ${({ theme }) => theme.title1};
  color: ${({ theme }) => theme.color.black};
  margin-bottom: 24px;
`;

export const StyledP3 = styled.p`
  ${({ theme }) => theme.body2};
  color: ${({ theme }) => theme.color.darkBlue};
  opacity: 0.6;
  margin-bottom: 24px;
`;

export const StyledLeftBorder = styled.div`
  display: flex;
  align-items: center;

  height: 112px;
  border-left: solid 3.04px ${({ theme }) => theme.color.black};
  padding-left: 32.46px;
`;

export const StyledP4 = styled.p`
  ${({ theme }) => theme.body1};
  color: ${({ theme }) => theme.color.darkBlue};
  opacity: 0.6;
  max-width: 818px;
`;
