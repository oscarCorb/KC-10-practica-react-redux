import React, { useState } from 'react';
import LoginForm from './LoginForm';
import { login } from '../../../api/auth';
import Layout from '../../layout/Layout';
import { useHistory } from 'react-router';

const LoginPage = (props) => {
  const [rememberMe, setRememberMe] = useState(false);
  const history = useHistory();

  const handleSubmit = async (credentials) => {
    try {
      await login(credentials, rememberMe);
      props.setIsLogged(true);
      history.push('/');
    } catch (error) {
      console.error(error);
      // TODO: Mostrar error al usuario, ahora no queda claro
    }
  };

  return (
    <div>
      <Layout />
      <h2>Login</h2>
      <LoginForm
        onSubmit={handleSubmit}
        setRememberMe={setRememberMe}
        rememberMe={rememberMe}
      />
    </div>
  );
};

export default LoginPage;
