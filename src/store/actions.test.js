import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  loginAction,
  productDetailFailure,
  productDetailRequest,
  productsCreatedRequest,
  productsCreatedSuccess,
} from './actions';
import {
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  PRODUCT_CREATED_REQUEST,
  PRODUCT_CREATED_SUCCESS,
  PRODUCT_DETAIL_FAILURE,
  PRODUCT_DETAIL_REQUEST,
} from './types';

// SYNC ACTIONS TESTS
describe('productsCreatedRequest', () => {
  test('should return a PRODUCT_CREATED_REQUEST action', () => {
    const excpectedAction = { type: PRODUCT_CREATED_REQUEST };
    const result = productsCreatedRequest();
    expect(result).toEqual(excpectedAction);
  });
});

describe('productsCreatedSuccess', () => {
  test('should return a PRODUCT_CREATED_SUCCESS action', () => {
    const product = 'product';
    const expectedAction = { type: PRODUCT_CREATED_SUCCESS, payload: product };
    const result = productsCreatedSuccess(product);
    expect(result).toEqual(expectedAction);
  });
});

describe('productDetailRequest', () => {
  test('should return a PRODUCT_DETAIL_REQUEST action', () => {
    const expectedAction = { type: PRODUCT_DETAIL_REQUEST };
    const result = productDetailRequest();
    expect(result).toEqual(expectedAction);
  });
});

describe('productDetailFailure', () => {
  test('should return a PRODUCT_DETAIL_FAILURE action', () => {
    const error = true;
    const result = productDetailFailure(error);
    const expectedAction = {
      type: PRODUCT_DETAIL_FAILURE,
      payload: error,
      error: true,
    };
    expect(result).toEqual(expectedAction);
  });
});

// ASYNC ACTION MOCK TEST
const createStore = (extraArgument) => (state) => {
  const middleware = [thunk.withExtraArgument(extraArgument)];
  const mockStore = configureStore(middleware);
  const store = mockStore(state);
  return store;
};

describe('loginAction', () => {
  describe('when login API resolve', () => {
    const credentials = 'credentials';
    const rememberMe = 'rememberMe';
    const history = { location: {}, replace: jest.fn() };
    const api = { auth: { login: jest.fn().mockResolvedValue() } };
    const store = createStore({ api, history })();

    test('should dispatch AUTH_LOGIN_SUCCESS action', async () => {
      await store.dispatch(loginAction(credentials, rememberMe));
      const actions = store.getActions();
      expect(actions).toEqual([
        { type: AUTH_LOGIN_REQUEST },
        { type: AUTH_LOGIN_SUCCESS },
      ]);
      expect(api.auth.login).toBeCalledWith(credentials, rememberMe);
    });
  });
});
