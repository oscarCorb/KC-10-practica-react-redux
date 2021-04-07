import client from './client';

const productsBaseUrl = '/api/v1';

// request tags
export const getTags = () => {
  const url = `${productsBaseUrl}/adverts/tags`;
  return client.get(url);
};

// create a new product
export const createProduct = (product) => {
  const url = `${productsBaseUrl}/adverts`;

  // upload image as binary ===>
  const file = new Blob([product.photo], { type: 'multipart/form-data' });
  const formData = new FormData();

  if (product.photo) {
    formData.append('photo', file);
  }
  formData.append('name', product.name);
  formData.append('sale', product.sale);
  formData.append('price', product.price);
  formData.append('tags', product.tags);
  // upload image as binary <===

  return client
    .post(url, formData)
    .then((data) => data)
    .catch((error) => console.error(error));
};

// request all products
export const getProductList = () => {
  const url = `${productsBaseUrl}/adverts`;
  return client.get(url);
};

// get one product by id
export const getProduct = (id) => {
  const url = `${productsBaseUrl}/adverts/${id}`;
  return client.get(url);
};

// delete one product by id
export const deleteProduct = (id) => {
  const url = `${productsBaseUrl}/adverts/${id}`;
  return client.delete(url);
};
