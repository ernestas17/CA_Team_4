import styled from 'styled-components';
import BREAKPOINTS from '../../constants/breakpoints';

export const StyledBlogSinglePage = styled.main`
  max-width: 1920px;
  margin: 0 auto;
  padding: 64px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${BREAKPOINTS.md}) {
    padding: 64px 40px;
  }

  @media screen and (min-width: ${BREAKPOINTS.xl}) {
    padding: 128px 40px;
  }

  & section,
  article {
    max-width: 896px;
  }

  & p:first-child {
    color: ${({ theme }) => theme.color.darkGrey};
  }

  & p {
    ${({ theme }) => theme.body2}
    color: ${({ theme }) => theme.color.darkBlue};
    opacity: 0.6;
  }

  & h3 {
    ${({ theme }) => theme.h3}
    color: ${({ theme }) => theme.color.black};

    margin: 16px 0;
  }
`;

export const StyledImgWide = styled.div`
  background-image: url(${(props) => props.img});
  width: 100%;
  max-width: 1280px;
  height: 255px;

  background-position: center;
  background-size: cover;
  margin: 32px 0;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    margin: 64px 0;
    height: 512px;
  }
`;

export const StyledPost1 = styled.article`
  & h4 {
    ${({ theme }) => theme.h4}
    color: ${({ theme }) => theme.color.black};
    width: 100%;

    margin-bottom: 20px;
  }

  & p:first-of-type {
    margin-bottom: 20px;
  }
`;

export const StyledImg = styled.div`
  background-image: url(${(props) => props.img});
  width: 100%;
  height: 300px;

  background-position: center;
  background-size: cover;
  margin: 28px 0 40px 0;

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    margin: 56px 0 80px 0;
    height: 598px;
  }
`;

export const StyledPost2 = styled.article`
  & h5 {
    ${({ theme }) => theme.title1}
    color: ${({ theme }) => theme.color.black};
    width: 100%;

    margin-bottom: 16px;
  }

  & p:first-of-type {
    margin-bottom: 24px;
  }

  & p:nth-last-of-type(2) {
    margin-bottom: 24px;
    border-left: 3.2px solid ${({ theme }) => theme.color.black};
    padding-left: 17px;

    @media screen and (min-width: ${BREAKPOINTS.lg}) {
      padding-left: 34px;
    }
  }
`;
