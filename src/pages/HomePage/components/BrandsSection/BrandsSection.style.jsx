import styled from 'styled-components';

export const StyledBrandsSection = styled.section`
  width: 100vw - (100vw - 100%);
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 128px 10px;

  & h3 {
    font-weight: 700;
    font-size: 48px;
    line-height: 140%;
    text-align: center;
    letter-spacing: -0.03em;
    color: #1e1b1b;
    margin-bottom: 41px;
  }
`;

export const StyledLogosContainerTop = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1280px;

  @media screen and (min-width: 1280px) {
    justify-content: space-between;
  }
`;

export const StyledLogosContainerBottom = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;

  display: none;

  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
  }
`;
