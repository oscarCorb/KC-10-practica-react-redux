import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import * as reducers from './reducers.js';
import * as auth from '../api/auth';
import * as products from '../api/products';

const api = { auth, products };

const configureStore = ({ preloadedState, history }) => {
  const middleware = [thunk.withExtraArgument({ api, history })];

  const store = createStore(
    combineReducers({ ...reducers }),
    preloadedState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  return store;
};

export default configureStore;
