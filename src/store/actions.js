import { getProductDetail } from './selectors';
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

// AUTH LOGIN middleware
export const loginAction = (credentials, rememberMe, history, location) => {
  return async function (dispatch, getState, { api, history }) {
    dispatch(authLoginRequest());
    try {
      await api.auth.login(credentials, rememberMe);
      dispatch(authLoginSuccess());
      const { from } = history.location.state || { from: { pathname: '/' } };
      history.replace(from);
    } catch (error) {
      dispatch(authLoginFailure(error));
      console.error('ERROR', error);
      // TODO: Mostrar el error al usuario
    }
  };
};

// LOGOUT
export const authLogout = () => {
  return {
    type: AUTH_LOGOUT,
  };
};

// LOGOUT middleware
export const logoutAction = () => {
  return async function (dispatch, getState, { api }) {
    dispatch(authLogout());
    try {
      await api.auth.logout().then();
    } catch (error) {
      console.error('ERROR', error);
    }
  };
};

// PRODUCT CREATION
export const productsCreatedRequest = () => {
  return {
    type: PRODUCT_CREATED_REQUEST,
  };
};

export const productsCreatedSuccess = (newProduct) => {
  return {
    type: PRODUCT_CREATED_SUCCESS,
    payload: newProduct,
  };
};

export const productsCreatedFailure = (error) => {
  return {
    type: PRODUCT_CREATED_FAILURE,
    payload: error,
    error: true,
  };
};

// PRODUCT CREATION middleware
export const productCreatedAction = (newProduct) => {
  return async function (dispatch, getState, { api, history }) {
    dispatch(productsCreatedRequest());
    try {
      const product = await api.products.createProduct(newProduct);
      dispatch(productsCreatedSuccess(product));
      history.push(`/advert/${product.id}`);
    } catch (error) {
      dispatch(productsCreatedFailure(error));
    }
  };
};

// PRODUCT DETAIL
export const productDetailRequest = () => {
  return {
    type: PRODUCT_DETAIL_REQUEST,
  };
};

export const productDetailSuccess = (product) => {
  return {
    type: PRODUCT_DETAIL_SUCCESS,
    payload: product,
  };
};

export const productDetailFailure = (error) => {
  return {
    type: PRODUCT_DETAIL_FAILURE,
    payload: error,
    error: true,
  };
};

// PRODUCT DETAIL middleware
export const productDetailAction = (productId) => {
  return async function (dispatch, getState, { api, history }) {
    const productLoaded = getProductDetail(getState(), productId);
    if (productLoaded) {
      return;
    }
    dispatch(productDetailRequest());
    try {
      const productDetail = await api.products.getProduct(productId);
      dispatch(productDetailSuccess(productDetail));
    } catch (error) {
      dispatch(productDetailFailure(error));
      if (error.status === 404) {
        return history.push('/404');
      }
    }
  };
};

// PRODUCT DELETION
export const productDeletedRequest = () => {
  return {
    type: PRODUCT_DELETED_REQUEST,
  };
};

export const productDeletedSuccess = (productId) => {
  return {
    type: PRODUCT_DELETED_SUCCESS,
    payload: productId,
  };
};

export const productDeletedFailure = (error) => {
  return {
    type: PRODUCT_DELETED_FAILURE,
    payload: error,
    error: true,
  };
};

// PRODUCT DELETION middleware
export const productDeletedAction = (productId, confirmDeletion) => {
  return async function (dispatch, getState, { api, history }) {
    dispatch(productDeletedRequest());
    try {
      if (confirmDeletion) {
        await api.products.deleteProduct(productId);
        history.push('/');
        dispatch(productDeletedSuccess(productId));
      }
    } catch (error) {
      dispatch(productDeletedFailure(error));
    }
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

// TAGS middleware
export const tagsAction = (tags) => {
  return async function (dispatch, getState, { api, history }) {
    dispatch(tagsLoadedRequest(tags));
    try {
      const tags = await api.products.getTags();
      dispatch(tagsLoadedSuccess(tags));
    } catch (error) {
      dispatch(tagsLoadedFailure(error));
    }
  };
};

// PRODUCTS LOADING
export const productsLoadedRequest = () => {
  return {
    type: PRODUCTS_LOADED_REQUEST,
  };
};

export const productsLoadedSuccess = (productList) => {
  return {
    type: PRODUCTS_LOADED_SUCCESS,
    payload: productList,
  };
};

export const productsLoadedFailure = (error) => {
  return {
    type: PRODUCTS_LOADED_FAILURE,
    payload: error,
    error: true,
  };
};

// PRODUCTS LOADING middleware
export const productsLoadedAction = () => {
  return async function (dispatch, getSate, { api, history }) {
    dispatch(productsLoadedRequest());
    try {
      const productList = await api.products.getProductList();
      dispatch(productsLoadedSuccess(productList));
    } catch (error) {
      dispatch(productsLoadedFailure(error));
    }
  };
};

// UI RESET ERROR
export const resetError = () => {
  return {
    type: UI_RESET_ERROR,
  };
};
