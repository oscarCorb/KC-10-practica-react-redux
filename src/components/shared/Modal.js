import React from 'react';

import Button from './Button';
import './Modal.css';

const Modal = (props) => {
  const handleClickYes = () => {
    props.onDisplayModal(true);
    props.onConfirm(true);
  };

  const handleClickNo = () => {
    props.onDisplayModal(false);
    props.onConfirm(false);
  };

  return (
    <>
      <div className="modal-buttons-container">
        <p>{props.questionText}</p>
        <Button
          cName="is-warning is-light is-outlined confirm-delete"
          handleClick={handleClickYes}
          buttonText={'Sí'}
        ></Button>
        <Button
          cName="is-info is-light is-outlined confirm-delete"
          handleClick={handleClickNo}
          buttonText={'No'}
        ></Button>
      </div>
    </>
  );
};

export default Modal;
