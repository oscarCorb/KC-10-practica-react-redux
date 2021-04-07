import client, { configureClient, resetClient } from './client';
import storage from '../utils/storage';

export const login = (credentials, rememberMe) => {
  return client
    .post('/api/auth/login', {
      email: credentials.username,
      password: credentials.password,
    })
    .then(({ accessToken }) => {
      configureClient({ accessToken });
      if (rememberMe) {
        storage.set('auth', accessToken);
      }
    });
};

export const logout = () => {
  return Promise.resolve().then(() => {
    resetClient();
    storage.remove('auth');
  });
};
