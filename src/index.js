import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import { createBrowserHistory } from 'history';

import App from './App';
import './index.css';

import storage from './utils/storage';
import { configureClient } from './api/client';
import configureStore from './store';
import { Provider } from 'react-redux';

const accessToken = storage.get('auth');
configureClient({ accessToken });
const history = createBrowserHistory();

const store = configureStore({
  preloadedState: { auth: !!accessToken, products: [] },
  history,
});

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
    document.getElementById('root')
  );
};

render();
