import React, { useEffect, useState } from 'react';
import { getProductList } from '../../../api/products';
import Layout from '../../layout/Layout';
import { defaultFilters, filterProducts } from '../ProductFilters/filters';
import ProductFiltersForm from '../ProductFilters/ProductFiltersForm';
import ProductList from './ProductList';
import './ProudctListPage.css';

const ProudctListPage = () => {
  const [productList, setProductList] = useState([]);
  const [formValues, setFormValues] = useState(defaultFilters);
  const [filteredProducts, setFilteredProducts] = useState({});
  const [filtersOn, setFiltersOn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formValues !== defaultFilters) {
      setFilteredProducts(filterProducts(productList, formValues));
      setFiltersOn(true);
    }
  };

  useEffect(() => {
    getProductList().then((data) => {
      setProductList(data.reverse().map((item) => item));
      // productMaxPrice();
    });
  }, []);

  // function productMaxPrice() {
  //   const prices = productList.map((product) => product.price);
  //   const max = Math.max(...prices);

  //   console.log('prices-->', prices);
  //   console.log('max-->', max);

  //   defaultFilters.priceTo = max;
  // }

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
