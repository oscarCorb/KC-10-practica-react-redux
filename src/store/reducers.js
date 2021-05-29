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

const initialState = {
  auth: false,
  products: [],
  tags: [],
  ui: {
    loading: false,
    error: null,
  },
};

export function auth(state = initialState.auth, action) {
  switch (action.type) {
    case AUTH_LOGIN_SUCCESS:
      return true;
    case AUTH_LOGOUT:
      return false;
    default:
      return state;
  }
}

// export function tags() {}

export function products(state = initialState.products, action) {
  switch (action.type) {
    case PRODUCTS_LOADED_SUCCESS:
      return action.payload;
    case PRODUCT_CREATED_SUCCESS:
      // ojo con esto, hay que probarlo
      return action.payload;
    default:
      return state;
  }
}

export function tags(state = initialState.tags, action) {
  switch (action.type) {
    case TAGS_LOADED_REQUEST:
      return action.payload;
    case TAGS_LOADED_SUCCESS:
      return action.payload;
    // TODO falta manejar error
    default:
      return state;
  }
}

export function ui(state = initialState.ui, action) {
  if (action.error) {
    return { ...state, loading: false, error: action.payload };
  }
  switch (action.type) {
    case AUTH_LOGIN_REQUEST:
      return { ...state, loading: true, error: null };
    case AUTH_LOGIN_SUCCESS:
      return { ...state, loading: false };
    case UI_RESET_ERROR:
      return { ...state, error: null };
    default:
      return state;
  }
}
