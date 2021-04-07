import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = (props) => {
  // console.log('props--->', props);
  // console.log('props.isLogged--->', props.isLogged);
  return props.isLogged ? <Route {...props} /> : <Redirect to="/login" />;
};

export default PrivateRoute;

// ####### SOLUCIONAR ESTE PROBLEMA CON LAS RUTAS PRIVADA #########
// NO VA MUY FINO ESTO DE LAS RUTAS PRIVADAS/PÚBLICAS.
// DARLE UNA VUELTA
// Cuando borro el token, tengo que recargar pestaña para que funcione
// ¡CUIDADO! He podido borrar prodcutos después de borrar el token, es como si hasta que no recargas la pestaña, no se borrase el token o no surtiera efecto el borrado del token
