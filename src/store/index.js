import { createStore } from 'redux';
import { auth } from './reducers';

// import * as reducers from './reducers.js';
// import thunk from 'redux-thunk';

const configureStore = ({ preloadedState /* , history */ }) => {
  //   const middleware = [thunk.withExtraArgument({ api, history })];

  const store = createStore(auth, preloadedState);
  return store;
};

export default configureStore;
