import styled from 'styled-components';

export const StyledFooter = styled.footer`
  height: 250px;
  width: calc(100vw - (100vw - 100%));
  padding: 10px 0;
  background-color: #1e1b1b;
  /* background-color: ${(props) => props.background}; */
  border: 1px #1e1b1b solid;

  display: flex;
  align-items: center;
  justify-content: center;

  /* Tablet */
  @media screen and (min-width: 466px) {
    height: 157px;
    padding: 0;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  max-width: 1280px;
  height: 100%;

  /* Desktop */
  @media screen and (min-width: 820px) {
    flex-direction: row;
  }
`;

export const StyledCopyrights = styled.p`
  color: #939191;
  font-weight: 600;
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  /* Tablet */
  @media screen and (min-width: 466px) {
    flex-direction: row;
    gap: 40px;
  }

  li {
    list-style: none;

    a {
      text-decoration: none;
      color: #fff;
    }
  }
`;
