import React, { useState } from 'react';
import LoginForm from './LoginForm';
import Layout from '../../layout/Layout';
import { useHistory, useLocation } from 'react-router';

import { useDispatch } from 'react-redux';
import { loginAction } from '../../../store/actions';

import './LoginPage.css';

const LoginPage = ({ onLogin }) => {
  const [rememberMe, setRememberMe] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const handleSubmit = (credentials) => {
    dispatch(loginAction(credentials, rememberMe, history, location));
  };

  return (
    <div>
      <Layout />
      <div className="login-page-container">
        <h2 className="section-title title">Entrar</h2>
        <LoginForm
          onSubmit={handleSubmit}
          setRememberMe={setRememberMe}
          rememberMe={rememberMe}
        />
      </div>
    </div>
  );
};

export default LoginPage;
