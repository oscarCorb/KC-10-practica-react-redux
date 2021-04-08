import React from 'react';

const FormButton = (props) => {
  return (
    <button
      className={`button ${props.cName}`}
      onClick={props.handleClick}
      disabled={!props.formValidation}
    >
      {props.buttonText}
    </button>
  );
};

export default FormButton;
