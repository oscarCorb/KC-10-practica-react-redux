import {
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  // AUTH_LOGIN_FAILURE,
  AUTH_LOGOUT,
  TAGS_LOADED_REQUEST,
  TAGS_LOADED_SUCCESS,
  // TAGS_LOADED_FAILURE,
  PRODUCT_CREATED_REQUEST,
  PRODUCT_CREATED_SUCCESS,
  // PRODUCT_CREATED_FAILURE,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
  // PRODUCT_DETAIL_FAILURE,
  PRODUCT_DELETED_REQUEST,
  PRODUCT_DELETED_SUCCESS,
  // PRODUCT_DELETED_FAILURE,
  PRODUCTS_LOADED_REQUEST,
  PRODUCTS_LOADED_SUCCESS,
  // PRODUCTS_LOADED_FAILURE,
  UI_RESET_ERROR,
} from './types';

const initialState = {
  auth: false,
  tags: [],
  products: {
    data: [],
    loaded: false,
  },
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

export function products(state = initialState.products, action) {
  switch (action.type) {
    case PRODUCTS_LOADED_SUCCESS:
      return { ...state, loaded: true, data: action.payload };
    case PRODUCT_CREATED_SUCCESS:
      // case PRODUCT_DETAIL_SUCCESS:
      return { ...state, data: [...state.data, action.payload] };
    case PRODUCT_DELETED_SUCCESS:
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };
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
    case TAGS_LOADED_REQUEST:
    case PRODUCT_CREATED_REQUEST:
    case PRODUCT_DETAIL_REQUEST:
    case PRODUCT_DELETED_REQUEST:
    case PRODUCTS_LOADED_REQUEST:
      return { ...state, loading: true, error: null };
    case AUTH_LOGIN_SUCCESS:
    case TAGS_LOADED_SUCCESS:
    case PRODUCT_CREATED_SUCCESS:
    case PRODUCT_DETAIL_SUCCESS:
    case PRODUCT_DELETED_SUCCESS:
    case PRODUCTS_LOADED_SUCCESS:
      return { ...state, loading: false, error: null };
    case UI_RESET_ERROR:
      return { ...state, error: null };
    default:
      return state;
  }
}
