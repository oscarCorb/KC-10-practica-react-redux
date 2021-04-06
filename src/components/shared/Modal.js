import React from 'react';
import { useHistory } from 'react-router-dom';
import { deleteProduct } from '../../api/products';
import Button from './Button';
import './Modal.css';

const Modal = (props) => {
  const history = useHistory();

  const handleClickYes = async () => {
    await deleteProduct(props.productId);
    history.push('/');
  };

  const handleClickNo = () => {
    props.setDisplayModal((oldValue) => !oldValue);
  };

  return (
    <>
      <div className="modal-buttons-container">
        <p>¿Estás seguro?</p>
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
