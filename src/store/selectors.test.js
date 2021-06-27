import { getProducts } from './selectors';

describe('getProducts', () => {
  const data = [
    { updatedAt: '1', id: 'a' },
    { updatedAt: '2', id: 'b' },
    { updatedAt: '3', id: 'c' },
    { updatedAt: '4', id: 'd' },
  ];

  test('should return the product list', () => {
    const result = getProducts({ products: { data } });
    expect(result).toHaveLength(data.length);
  });

  test('should return products sorted by createdAt', () => {
    const result = getProducts({ products: { data } });
    expect(result[0].id).toBe('a');
  });
});
