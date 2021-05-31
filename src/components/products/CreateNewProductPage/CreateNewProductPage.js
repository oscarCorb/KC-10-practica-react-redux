import React from 'react';

import CreateNewProductForm from '../CreateNewProductForm';

import Layout from '../../layout/Layout';

import './CreateNewProductPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { productCreatedAction } from '../../../store/actions';
import { getUi } from '../../../store/selectors';
import { Redirect } from 'react-router';

const CreateNewProductPage = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(getUi);

  const handleSubmit = async (newProductData) => {
    dispatch(productCreatedAction(newProductData));
  };

  if (error?.statusCode === 401) {
    return <Redirect to="/login" />;
  }

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
