import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <div className="button">
      <button className="button">{props.buttonText}</button>
    </div>
  );
};

export default Button;
