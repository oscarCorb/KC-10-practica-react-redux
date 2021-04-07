import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = (props) => {
  return props.isLogged ? <Route {...props} /> : <Redirect to="/login" />;
};

export default PrivateRoute;
