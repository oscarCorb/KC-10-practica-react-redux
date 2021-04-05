import client from './client';

const productsBaseUrl = '/api/v1';

export const getTags = () => {
  const url = `${productsBaseUrl}/adverts/tags`;
  return client.get(url);
};

export const createProduct = (product) => {
  const url = `${productsBaseUrl}/adverts`;

  const file = new Blob([product.photo], { type: 'multipart/form-data' });
  const formData = new FormData();

  if (product.photo) {
    formData.append('photo', file);
  }
  formData.append('name', product.name);
  formData.append('sale', product.sale);
  formData.append('price', product.price);
  formData.append('tags', product.tags);

  return (
    client
      .post(url, formData)
      // luego necesitaré la url de la foto que me da 'data.photo'
      .then((data) => console.log('product image:', data.photo))
      .catch((error) => console.error(error))
  );
};

// pedir listado de productos
export const getProductList = () => {
  const url = `${productsBaseUrl}/adverts`;
  return client.get(url);
};

// pedir un producto
export const getProduct = (id) => {
  const url = `${productsBaseUrl}/adverts/${id}`;
  return client.get(url);
};

// eliminar un producto
export const deleteProduct = (id) => {
  const url = `${productsBaseUrl}/adverts/${id}`;
  return client.delete(url);
};
