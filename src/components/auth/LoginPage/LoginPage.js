import React from 'react';
import LoginForm from './LoginForm';
import { login } from '../../../api/auth';
import Layout from '../../layout/Layout';
import { useHistory } from 'react-router';

const LoginPage = () => {
  const history = useHistory();

  const handleSubmit = async (credentials) => {
    try {
      await login(credentials);
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
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};

export default LoginPage;
