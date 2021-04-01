import React from 'react';
import CreateNewProductForm from '../CreateNewProductForm';

const CreateNewProductPage = () => {
  const handleSubmit = () => {
    // aquí llamamos a la función que crea el producto y le pasamos los valores del formulario
  };

  return (
    <div>
      <h2>Create new product</h2>
      <CreateNewProductForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateNewProductPage;
