import styled from 'styled-components';

export const StyledFooterContacts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px #1e1b1b solid;
  padding: 40px 10px;

  background-color: #1e1b1b;
  color: #fff;
  opacity: 0.98;

  @media screen and (min-width: 950px) {
    justify-content: space-around;
    padding: 64px 0px;
  }

  @media screen and (min-width: 1280px) {
    padding: 128px 0px;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 66.2px;
  width: 100%;
  max-width: 1280px;
  height: 100%;

  @media screen and (min-width: 950px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    padding: 0 64px;
  }
`;

export const StyledContainer = styled.div`
  max-width: 463px;
`;

export const StyledHeader = styled.h3`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 66.2px;
`;

export const StyledIconsUl = styled.ul`
  display: flex;
  gap: 23.6px;
  list-style: none;

  a {
    color: inherit;
  }
  i {
    font-size: 24px;
  }
`;

export const StyledContactBox = styled.div`
  margin-bottom: 32px;
`;

export const StyledContactType = styled.p`
  font-size: 18px;
  opacity: 0.6;
  font-weight: 600;
  line-height: 31.5px;
`;

export const StyledContact = styled.p`
  font-size: 24px;

  font-weight: 600;
  line-height: 36px;
`;
