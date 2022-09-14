import styled from 'styled-components';

export const StyledSplitImg = styled.div`
  width: 100%;
  max-width: 624px;
  gap: 16px;

  display: none;

  @media screen and (min-width: 820px) {
    display: flex;
  }

  & img {
    width: 100%;
  }
`;
