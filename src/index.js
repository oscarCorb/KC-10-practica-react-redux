import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import storage from './utils/storage';
import { configureClient } from './api/client';

const accessToken = storage.get('auth');
configureClient({ accessToken });

ReactDOM.render(
  <React.StrictMode>
    <App isInitiallyLogged={!!accessToken} />
  </React.StrictMode>,
  document.getElementById('root')
);
