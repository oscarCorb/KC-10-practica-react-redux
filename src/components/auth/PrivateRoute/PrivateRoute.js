import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { getIsLogged } from '../../../store/selectors';

const PrivateRoute = ({ isLogged, ...props }) => {
  return isLogged ? <Route {...props} /> : <Redirect to="/login" />;
};

const mapStateToProps = (state) => ({
  isLogged: getIsLogged(state),
});

export default connect(mapStateToProps)(PrivateRoute);
