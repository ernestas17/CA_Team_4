import React from 'react';
import { StyledButton } from './Button.style';

const Button = (props) => {
  return (
    <StyledButton
      onClick={props.action}
      {...props}
      primary={props.primary}
      secondary={props.secondary}
    >
      {props.text}
    </StyledButton>
  );
};

export default Button;
