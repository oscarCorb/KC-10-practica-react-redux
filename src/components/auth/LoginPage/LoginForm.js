import React, { useEffect, useState } from 'react';
import FormButton from '../../shared/FormButton';
import { FormField } from '../../shared/index';
import './LoginForm.css';

const LoginForm = (props) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const [formValidation, setFormValidation] = useState(false);

  const handleChange = (event) => {
    setCredentials((oldValue) => ({
      ...oldValue,
      [event.target.name]: event.target.value,
    }));
  };

  useEffect(() => {
    if (
      credentials.username.length > 0 && //
      credentials.password.length > 0
    ) {
      setFormValidation(true);
    } else {
      setFormValidation(false);
    }
  });

  const handleClickCheckBox = (e) => {
    props.setRememberMe(!props.rememberMe);
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

      <FormButton
        cName="is-info"
        type="button"
        buttonText="Enviar"
        formValidation={formValidation}
      ></FormButton>

      <div className="checkbox-container">
        <input
          id="input-checkbox"
          type="checkbox"
          checked={props.rememberMe}
          onChange={handleClickCheckBox}
        />
        <label htmlFor="input-checkbox">Recordar</label>
      </div>
    </form>
  );
};

export default LoginForm;
