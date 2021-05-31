import React from 'react';

import CreateNewProductForm from '../CreateNewProductForm';

import Layout from '../../layout/Layout';

import './CreateNewProductPage.css';
import { useDispatch } from 'react-redux';
import { productCreatedAction } from '../../../store/actions';

const CreateNewProductPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (newProductData) => {
    dispatch(productCreatedAction(newProductData));
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
