import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <button //
      className={`button ${props.cName}`}
      onClick={props.handleClick}
    >
      {props.buttonText}
    </button>
  );
};

export default Button;
