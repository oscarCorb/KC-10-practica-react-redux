import React from 'react';

import CreateNewProductForm from '../CreateNewProductForm';

import { createProduct } from '../../../api/products';

const CreateNewProductPage = () => {
  const handleSubmit = (newProductData) => {
    // console.log('newProductData:', newProductData);
    // console.log(typeof newProductData.price);
    // aquí llamamos a la función que crea el producto y le pasamos los valores del formulario
    try {
      createProduct(newProductData);
    } catch (error) {}
  };

  return (
    <div>
      {/* <h2>Create new product</h2> */}
      <CreateNewProductForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateNewProductPage;
