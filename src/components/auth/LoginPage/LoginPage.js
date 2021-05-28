import React, { useState } from 'react';
import LoginForm from './LoginForm';
import { login } from '../../../api/auth';
import Layout from '../../layout/Layout';
import { useHistory } from 'react-router';

import './LoginPage.css';
import { connect } from 'react-redux';
import { authLoginRequest, authLoginSuccess } from '../../../store/actions';

const LoginPage = ({ onLogin }) => {
  const [rememberMe, setRememberMe] = useState(false);
  const history = useHistory();

  const handleSubmit = async (credentials) => {
    try {
      await login(credentials, rememberMe);
      onLogin();
      history.push('/');
    } catch (error) {
      console.error(error);
      // TODO: Mostrar error al usuario, ahora no queda claro
    }
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

const mapDispatchToProps = (dispatch) => ({
  onLogin: () => dispatch(authLoginSuccess()),
});

export default connect(null, mapDispatchToProps)(LoginPage);
