import styled from 'styled-components';

export const StyledPostSm = styled.div`
  display: flex;
  gap: 24px;

  transition: all 0.2s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px;
  }

  & div:first-of-type {
    background-image: url(${(props) => props.img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    width: 100%;
    max-width: 192px;
    height: 192px;
  }

  & div:last-of-type {
    padding: 32px 0px 16px 0px;

    & a {
      & h5 {
        ${({ theme }) => theme.title1};
      }
    }

    & p:last-of-type {
      ${({ theme }) => theme.body2};
      color: ${({ theme }) => theme.color.darkGrey};
    }
  }
`;
