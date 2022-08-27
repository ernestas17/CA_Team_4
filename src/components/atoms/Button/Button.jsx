import React from 'react';
import { StyledButton } from './Button.style';
import { useNavigate } from 'react-router-dom';

const Button = (props) => {
  const navigate = useNavigate();

  const clickHandler = () => (props.path ? navigate(props.path) : null);

  return (
    <StyledButton
      {...props}
      onClick={clickHandler}
      primary={props.primary}
      secondary={props.secondary}>
      {props.text}
    </StyledButton>
  );
};

export default Button;
