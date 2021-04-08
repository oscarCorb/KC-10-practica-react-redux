import React, { useEffect } from 'react';
import { Redirect } from 'react-router';
import { logout } from '../../../api/auth';

const LogoutPage = (props) => {
  useEffect(() => {
    props.setIsLogged(false);
    logout().then();
  });

  return <Redirect to="/login"></Redirect>;
};

export default LogoutPage;
