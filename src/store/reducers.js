import {
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGOUT,
} from './types';

const initialState = {
  auth: false,
  //   products: {},
  //   ui: {},
};

export function auth(state = initialState.auth, action) {
  switch (action.type) {
    case AUTH_LOGIN_SUCCESS:
      return { ...state, auth: true };
    case AUTH_LOGOUT:
      return { ...state, auth: true };
    default:
      return state;
  }
}
