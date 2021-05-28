import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { auth } from './reducers';

// import * as reducers from './reducers.js';
// import thunk from 'redux-thunk';

const configureStore = ({ preloadedState /* , history */ }) => {
  //   const middleware = [thunk.withExtraArgument({ api, history })];

  const store = createStore(auth, preloadedState, composeWithDevTools());
  return store;
};

export default configureStore;
