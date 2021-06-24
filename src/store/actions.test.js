import {
  productDetailFailure,
  productDetailRequest,
  productsCreatedRequest,
  productsCreatedSuccess,
} from './actions';
import {
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
