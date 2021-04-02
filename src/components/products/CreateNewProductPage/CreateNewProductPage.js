import React from 'react';

import CreateNewProductForm from '../CreateNewProductForm';

import { createProduct } from '../../../api/products';
import Layout from '../../layout/Layout';

const CreateNewProductPage = () => {
  const handleSubmit = (newProductData) => {
    try {
      createProduct(newProductData);
    } catch (error) {
      console.error(error);
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
