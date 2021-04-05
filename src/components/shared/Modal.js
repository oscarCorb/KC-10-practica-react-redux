import React, { useState } from 'react';
import { Redirect, Route, useHistory } from 'react-router-dom';
import { deleteProduct } from '../../api/products';
import Button from './Button';
import './Modal.css';

const Modal = (props) => {
  const history = useHistory();

  const [toHome, setToHome] = useState(null);

  const handleClickYes = async () => {
    await deleteProduct(props.productId);
    history.push('/');
  };

  const handleClickNo = () => {
    props.setDisplayModal((oldValue) => !oldValue);
    // probar aquí, en el NO, el redireccionamiento hasta que funcione
    // return <Redirect to="/" />;
    // return <Route path="/adverts" />;
    // props.history.push('/');
  };

  // if (!toHome) {
  //   // return <Redirect to="/" />;
  //   return <Redirect to="/" />;
  // }

  return (
    <>
      {/* {toHome ? <Redirect to="/" /> : null} */}
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
