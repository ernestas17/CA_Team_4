import React from 'react';
import { HomeButton } from './HomeButton.style';

const Button = (props) => {
  return (
    <HomeButton
      onClick={props.action}
      {...props}
      primary={props.primary}
      secondary={props.secondary}
    >
      {props.text}
    </HomeButton>
  );
};

export default Button;
