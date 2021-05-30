import {
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGOUT,
  TAGS_LOADED_REQUEST,
  TAGS_LOADED_SUCCESS,
  TAGS_LOADED_FAILURE,
  PRODUCT_CREATED_REQUEST,
  PRODUCT_CREATED_SUCCESS,
  PRODUCT_CREATED_FAILURE,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DETAIL_FAILURE,
  PRODUCT_DELETED_REQUEST,
  PRODUCT_DELETED_SUCCESS,
  PRODUCT_DELETED_FAILURE,
  PRODUCTS_LOADED_REQUEST,
  PRODUCTS_LOADED_SUCCESS,
  PRODUCTS_LOADED_FAILURE,
  UI_RESET_ERROR,
} from './types';

import { login } from '../api/auth';

// AUTH LOGIN
export const authLoginRequest = () => {
  return {
    type: AUTH_LOGIN_REQUEST,
  };
};

export const authLoginSuccess = () => {
  return {
    type: AUTH_LOGIN_SUCCESS,
  };
};

export const authLoginFailure = (error) => {
  return {
    type: AUTH_LOGIN_FAILURE,
    payload: error,
    error: true,
  };
};

// middleware
export const loginAction = (credentials, rememberMe, history, location) => {
  return async function (dispatch, getState /* , { api, history } */) {
    dispatch(authLoginRequest());
    try {
      await login(credentials, rememberMe);
      dispatch(authLoginSuccess());
      // onLogin();
      // history.push('/');
      const { from } = location.state || { from: { pathname: '/' } };
      history.replace(from);
    } catch (error) {
      dispatch(authLoginFailure(error));
      // TODO: Mostrar error al usuario, ahora no queda claro
    }
  };
};

export const authLogout = () => {
  return {
    type: AUTH_LOGOUT,
  };
};

// PRODUCTS CREATION ======== ****** ======== *******
// PRODUCTS CREATION ======== ****** ======== *******
// PRODUCTS CREATION ======== ****** ======== *******
export const productsCreated = (products) => {
  return {
    type: PRODUCT_CREATED_SUCCESS,
    payload: products,
  };
};

export const productsCreatedSuccess = (product) => {
  return {
    type: PRODUCT_CREATED_SUCCESS,
    payload: product,
  };
};

export const productsCreatedFailure = (product) => {
  return {
    type: PRODUCT_CREATED_FAILURE,
    payload: product,
    error: true,
  };
};
// PRODUCTS CREATION ======== ****** ======== *******
// PRODUCTS CREATION ======== ****** ======== *******
// PRODUCTS CREATION ======== ****** ======== *******

// PRODUCT DETAIL
export const productDetailRequest = (product) => {
  return {
    type: PRODUCT_DETAIL_REQUEST,
    payload: product,
  };
};

export const productDetailSuccess = (product) => {
  return {
    type: PRODUCT_DETAIL_SUCCESS,
    payload: product,
  };
};

export const productDetailFailure = (product) => {
  return {
    type: PRODUCT_DETAIL_FAILURE,
    payload: product,
    error: true,
  };
};

// TAGS LOADING
export const tagsLoadedRequest = (tags) => {
  return {
    type: TAGS_LOADED_REQUEST,
    payload: tags,
  };
};

export const tagsLoadedSuccess = (tags) => {
  return {
    type: TAGS_LOADED_SUCCESS,
    payload: tags,
  };
};

export const tagsLoadedFailure = (error) => {
  return {
    type: TAGS_LOADED_FAILURE,
    payload: error,
    error: true,
  };
};

// PRODUCTS LOADING
export const productsLoaded = (products) => {
  return {
    type: PRODUCTS_LOADED_SUCCESS,
    payload: products,
  };
};

// UI RESET ERROR
export const resetError = () => {
  return {
    type: UI_RESET_ERROR,
  };
};
