import React from 'react';
import LoginForm from './LoginForm';

const LoginPage = () => {
  const handleSubmit = (credentials) => {
    console.log('LoginPage --> submit:');
    console.log('LoginPage --> credentials:', credentials);
    // enviar credenciales al API para autenticación
    // console.log(credentials);
  };

  return (
    <div>
      <h2>Login</h2>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};

export default LoginPage;
