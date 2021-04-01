import client from './client';

const productsBaseUrl = '/api/v1/adverts';

export const getTags = async () => {
  const url = `${productsBaseUrl}/tags`;
  return await client.get(url);
};
