import styled from 'styled-components';

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
  background-color: #1e1b1b;
  padding: 96px;
  height: 100%;

  padding: 40px 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 100;

  @media screen and (min-width: 466px) {
    padding: 96px;
  }

  @media screen and (min-width: 1280px) {
    top: 0;
    left: 70%;
  }

  & h1 {
    font-weight: 800;
    font-size: 64px;
    line-height: 84px;

    letter-spacing: -0.03em;
    color: #f2f2f2;

    margin-bottom: 16px;
  }

  & p {
    font-weight: 600;
    font-size: 18px;
    line-height: 175%;
    color: #f2f2f2;
    max-width: 541px;
    margin-bottom: 48px;
  }
`;
