import {
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGOUT,
  PRODUCTS_LOADED,
  PRODUCT_CREATED,
} from './types';

export const authLoginRequest = () => {
  return { type: AUTH_LOGIN_REQUEST };
};

export const authLoginSuccess = () => {
  return { type: AUTH_LOGIN_SUCCESS };
};

export const authLoginFailure = (error) => {
  return {
    type: AUTH_LOGIN_FAILURE,
    payload: error,
    error: true,
  };
};

// pasar aquí la lógica del componente del login
// antes creo que hay que hacer el middleware Thunk

// export const loginAction = (credentials) => {
//   return async function (dispatch, getState, { api, history }) {
//     //
//   };
// };

export const authLogout = () => {
  return {
    type: AUTH_LOGOUT,
  };
};

export const productsLoaded = (products) => {
  return {
    type: PRODUCTS_LOADED,
    payload: products,
  };
};

export const productsCreated = (products) => {
  return {
    type: PRODUCT_CREATED,
    payload: products,
  };
};
