import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { logoutAction } from '../../../store/actions';

const LogoutPage = () => {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(logoutAction());

  useEffect(() => {
    onLogout();
  });

  return <Redirect to="/login"></Redirect>;
};

export default LogoutPage;
