import styled from 'styled-components';

export const StyledObjectivesCard = styled.div`
  background-image: url(${(props) => props.image});
  background-position: 50% 50%;
  background-size: cover;
`;

export const StyledObjectiveCardOverlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: ${(props) => props.color};
  opacity: 90%;
  height: 629px;

  padding: 0px 101px 0px 102px;

  h4 {
    padding-bottom: 32px;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 140%;

    letter-spacing: -0.03em;

    color: #ffffff;
  }

  p {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;

    letter-spacing: -0.03em;

    color: #ffffff;

    opacity: 0.7;
  }
`;
