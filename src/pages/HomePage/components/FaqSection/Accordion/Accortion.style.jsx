import styled from 'styled-components';
import BREAKPOINTS from '../../../../../constants/breakpoints';

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
  background-color: ${({ theme }) => theme.color.white};
  padding: ${(props) => (props.expanded ? '38px 40px' : '38px 40px 16px 40px')};

  & h6 {
    ${({ theme }) => theme.title2};
    color: #${({ theme }) => theme.color.black};
  }

  div {
    width: 51.08px;
    height: 48px;
    background-color: ${({ theme }) => theme.color.orange};
    color: ${({ theme }) => theme.color.white};

    align-items: center;
    justify-content: center;
    display: none;

    @media screen and (min-width: ${BREAKPOINTS.sm}) {
      display: flex;
    }
  }
`;

export const StyledAccordionContent = styled.div`
  padding: 0px 40px 38px 40px;
  background-color: ${({ theme }) => theme.color.white};

  & p {
    ${({ theme }) => theme.body1};
    color: #${({ theme }) => theme.color.darkGrey};
    max-width: 701px;
  }
`;
