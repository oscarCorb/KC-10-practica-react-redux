import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProducts, getUi } from '../../../store/selectors';
import { productsLoadedAction } from '../../../store/actions';

import Layout from '../../layout/Layout';
import { defaultFilters, filterProducts } from '../ProductFilters/filters';
import ProductFiltersForm from '../ProductFilters/ProductFiltersForm';
import ProductList from './ProductList';
import './ProudctListPage.css';
import { Redirect } from 'react-router';

const ProudctListPage = () => {
  const [formValues, setFormValues] = useState(defaultFilters);
  const [filteredProducts, setFilteredProducts] = useState({});
  const [filtersOn, setFiltersOn] = useState(false);

  const dispatch = useDispatch();
  const productList = useSelector(getProducts);
  const { loading, error } = useSelector(getUi);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formValues !== defaultFilters) {
      setFilteredProducts(filterProducts(productList, formValues));
      setFiltersOn(true);
    }
  };

  useEffect(() => {
    dispatch(productsLoadedAction(productList));
  }, []);

  if (error?.statusCode === 401) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <Layout />
      {productList.length > 0 && (
        <ProductFiltersForm
          onSubmit={handleSubmit}
          productList={productList}
          setFormValues={setFormValues}
          formValues={formValues}
          setFiltersOn={setFiltersOn}
        />
      )}
      <ProductList
        productList={!filtersOn ? productList : filteredProducts}
        productsCount={productList.length}
      />
    </div>
  );
};

export default ProudctListPage;
