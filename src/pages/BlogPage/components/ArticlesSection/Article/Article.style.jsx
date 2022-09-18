import styled from 'styled-components';

export const StyledArticle = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 405px;
  justify-self: center;

  & div {
    background-image: url(${(props) => props.img});
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: contain;

    width: 100%;
    height: 266px;

    margin-bottom: 24px;
  }

  & p:first-of-type {
    ${({ theme }) => theme.body2};
    color: ${({ theme }) => theme.color.darkGrey};

    margin-bottom: 16px;
  }

  & h5 {
    ${({ theme }) => theme.title1}
    margin-bottom: 16px;
  }

  & p:last-of-type {
    ${({ theme }) => theme.body2};
    color: ${({ theme }) => theme.color.darkBlue};
  }
`;
