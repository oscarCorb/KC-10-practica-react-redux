import React from 'react';
import LoginForm from './LoginForm';
import { login } from '../../../api/auth';

const LoginPage = () => {
  const handleSubmit = async (credentials) => {
    try {
      await login(credentials);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};

export default LoginPage;
