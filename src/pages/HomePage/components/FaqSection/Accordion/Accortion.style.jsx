import styled from 'styled-components';

export const StyledAccordion = styled.div`
  width: 100%;
  max-width: 896px;
  -webkit-tap-highlight-color: transparent;

  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const StyledAccordionTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background-color: #fff;
  padding: ${(props) => (props.expanded ? '38px 40px' : '38px 40px 16px 40px')};

  & h6 {
    font-weight: 600;
    font-size: 18px;
    line-height: 36px;
    letter-spacing: -0.03em;
    color: #1e1b1b;

    @media screen and (min-width: 466px) {
      font-size: 24px;
    }
  }

  div {
    width: 51.08px;
    height: 48px;
    background-color: #ff6433;
    color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledAccordionContent = styled.div`
  padding: 0px 40px 38px 40px;
  background-color: #fff;

  & p {
    font-weight: 600;
    font-size: 18px;
    line-height: 175%;

    color: #939191;
    max-width: 701px;
  }
`;
