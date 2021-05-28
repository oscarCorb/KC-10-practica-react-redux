import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { logout } from '../../../api/auth';
import { authLogout } from '../../../store/actions';

const LogoutPage = () => {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(authLogout());

  useEffect(() => {
    onLogout();
    logout().then();
  });

  return <Redirect to="/login"></Redirect>;
};

export default LogoutPage;
