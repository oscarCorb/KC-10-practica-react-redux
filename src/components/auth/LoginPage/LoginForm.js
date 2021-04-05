import React, { useState } from 'react';
import { FormField } from '../../shared/index';
import { Button } from '../../shared/index';

const LoginForm = (props) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    setCredentials((oldValue) => ({
      ...oldValue,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(credentials);
    setCredentials({
      username: '',
      password: '',
    });
  };

  return (
    <form className="loginForm" onSubmit={handleSubmit}>
      <FormField
        type="text"
        name="username"
        value={credentials.username}
        label="Usuario"
        className="loginForm-field"
        onChange={handleChange}
      />
      <FormField
        type="password"
        name="password"
        value={credentials.password}
        label="Constraseña"
        className="loginForm-field"
        onChange={handleChange}
      />

      <Button cName="is-info" type="button" buttonText="Enviar"></Button>
    </form>
  );
};

export default LoginForm;
