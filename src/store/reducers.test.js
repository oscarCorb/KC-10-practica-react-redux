import { auth, initialState, products } from './reducers';
import {
  AUTH_LOGIN_SUCCESS,
  PRODUCTS_LOADED_SUCCESS,
  PRODUCT_DETAIL_SUCCESS,
} from './types';

describe('auth', () => {
  test('should manage ANY action', () => {
    const state = initialState.auth;
    const action = { type: 'ANY' };
    const nextState = auth(state, action);
    expect(nextState).toBe(state);
  });

  test('should manage a AUTH_LOGIN_SUCCESS action', () => {
    const state = initialState.auth;
    const action = { type: AUTH_LOGIN_SUCCESS };
    const nextState = auth(state, action);
    expect(nextState).toBe(true);
  });
});

describe('products', () => {
  test('should manage ANY action', () => {
    const state = initialState.products;
    const action = { type: 'ANY' };
    const nextState = products(state, action);
    expect(nextState).toBe(state);
  });

  test('should manage a PRODUCTS_LOADED_SUCCESS action', () => {
    const state = initialState.products;
    const action = { type: PRODUCTS_LOADED_SUCCESS, payload: [] };
    const expectedState = {
      ...initialState.products,
      loaded: true,
      data: action.payload,
    };
    const nextState = products(state, action);
    expect(nextState).toStrictEqual(expectedState);
  });

  test('should manage a PRODUCT_DETAIL_SUCCESS action', () => {
    const state = initialState.products;
    const product = {};
    const action = { type: PRODUCT_DETAIL_SUCCESS, payload: product };
    const expectedState = {
      ...initialState.products,
      data: [...initialState.products.data, product],
    };
    const nextState = products(state, action);
    expect(nextState).toStrictEqual(expectedState);
  });
});
