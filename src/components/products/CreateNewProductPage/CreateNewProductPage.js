import React from 'react';

import CreateNewProductForm from '../CreateNewProductForm';

import { createProduct } from '../../../api/products';
import Layout from '../../layout/Layout';
import { useHistory } from 'react-router';

const CreateNewProductPage = () => {
  const history = useHistory();

  const handleSubmit = async (newProductData) => {
    try {
      const { id } = await createProduct(newProductData);
      history.push(`/advert/${id}`);
      // TODO: (si hay tiempo) mostrar 'producto creado correctamente'
    } catch (error) {
      console.error(error);
      // TODO: Mostrar error al usuario, ahora no queda claro
    }
  };

  return (
    <div>
      <Layout />
      <h2>Create new product</h2>
      <CreateNewProductForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateNewProductPage;
