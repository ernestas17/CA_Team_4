import styled from 'styled-components';

export const StyledSliderBtn = styled.button`
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  background: #fff;
  transition: all 0.2s;
  cursor: pointer;

  & i {
    font-size: 20px;
  }

  &:hover {
    background: #1e1b1b;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    scale: calc(1.335);

    color: #fff;
  }
`;
