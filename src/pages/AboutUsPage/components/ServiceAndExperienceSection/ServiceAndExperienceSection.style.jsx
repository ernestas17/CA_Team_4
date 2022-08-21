import styled from 'styled-components';

export const StyledServiceAndExperienceSection = styled.section`
  background: #f2f2f2;
  padding: 128px 320px 128px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledWrapper = styled.div`
  width: 100%;

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

export const StyledHeading = styled.h2`
  padding-bottom: 64px;
  width: 861px;

  font-style: normal;
  font-weight: 800;
  font-size: 58px;
  line-height: 76px;

  text-align: center;
  letter-spacing: -0.03em;

  color: #1e1b1b;
`;

export const StyledServicesCards = styled.div`
  display: flex;
  flex-direction: row;
`;
