import {
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGOUT,
  PRODUCTS_LOADED,
  PRODUCT_CREATED,
} from './types';

const initialState = {
  auth: false,
  products: [],
  //   ui: {},
};

export function auth(state = initialState.auth, action) {
  switch (action.type) {
    case AUTH_LOGIN_SUCCESS:
      return { ...state, auth: true };
    case AUTH_LOGOUT:
      return { ...state, auth: false };
    default:
      return state;
  }
}

export function products(state = initialState.products, action) {
  switch (action.type) {
    case PRODUCTS_LOADED:
      return action.payload;
    default:
      return state;
  }
}
