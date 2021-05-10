import React from 'react';

import CreateNewProductForm from '../CreateNewProductForm';

import { createProduct } from '../../../api/products';
import Layout from '../../layout/Layout';
import { useHistory } from 'react-router';

import './CreateNewProductPage.css';

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
      <div className="new-product-page">
        <h2 className="section-title title">Crear producto</h2>
        <CreateNewProductForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default CreateNewProductPage;
