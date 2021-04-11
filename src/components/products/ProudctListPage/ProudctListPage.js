import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProductList } from '../../../api/products';
import Layout from '../../layout/Layout';
import ProductFilters from '../ProductFilters/ProductFilters';
import ProductList from './ProductList';
import './ProudctListPage.css';

const EmptyList = () => {
  return (
    <div className="empty-list-container">
      <h1>Ups!</h1>
      <p>Todavía no hay productos.</p>
      <Link to="advert/new">
        <p>¡Crear el primero ahora!</p>
      </Link>
    </div>
  );
};

const ProudctListPage = () => {
  const [productList, setProductList] = useState([]);
  const [filtersOn, setFiltersOn] = useState(false);
  // let validatedProducts = [];
  // console.log('## validatedProducts ##', validatedProducts);
  // console.log('filtersOn', filtersOn);

  useEffect(() => {
    getProductList().then((data) => {
      // order by creation date: new ones first
      setProductList(data.reverse().map((item) => item));
    });
  }, []);

  return (
    <div>
      <Layout />
      <ProductFilters
        productList={productList}
        setFiltersOn={setFiltersOn}
        // validatedProducts={validatedProducts}
      />
      {productList.length && !filtersOn ? (
        <ProductList productList={productList} />
      ) : (
        <EmptyList />
      )}
    </div>
  );
};

export default ProudctListPage;
