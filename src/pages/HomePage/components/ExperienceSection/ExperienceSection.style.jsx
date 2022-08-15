import styled from 'styled-components';

export const StyledExperienceSection = styled.section`
  background: #f2f2f2;
  padding: 48px 10px;
  display: flex;
  justify-content: center;
`;

export const StyledWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  justify-content: center;

  flex-wrap: wrap;
  column-gap: 100px;
  row-gap: 50px;

  @media screen and (min-width: 1920px) {
    column-gap: 190px;
  }
`;

export const StyledExperience = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 2px;

  & h2 {
    font-weight: 800;
    font-size: 58px;
    line-height: 76px;

    color: #661ce7;
  }

  & p {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -0.03em;

    color: #1e1b1b;
    opacity: 0.7;
  }
`;
