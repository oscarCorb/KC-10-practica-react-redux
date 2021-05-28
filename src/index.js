import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import './index.css';

import storage from './utils/storage';
import { configureClient } from './api/client';
import configureStore from './store';
import { Provider } from 'react-redux';
// import { Router } from 'react-router';

const accessToken = storage.get('auth');
configureClient({ accessToken });

const store = configureStore({
  preloadedState: { auth: !!accessToken },
});
// console.log('store.getState() ->', store.getState());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
