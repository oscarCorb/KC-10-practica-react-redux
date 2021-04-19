import React from 'react';
import { Link } from 'react-router-dom';

const EmptyList = (props) => {
  return (
    <div className="empty-list-container">
      <h1>Ups!</h1>
      <p>No hay anuncios</p>
      {props.productsCount > 0 ? (
        <p>Prueba con otra búsqueda</p>
      ) : (
        <>
          <Link to="advert/new">
            <p>¡Crear el primero ahora!</p>
          </Link>
        </>
      )}
    </div>
  );
};

export default EmptyList;
