import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProductList } from '../../../api/products';
import Layout from '../../layout/Layout';
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

  useEffect(() => {
    let reverseProductList = [];
    getProductList().then((data) => {
      data.forEach((item) => reverseProductList.unshift(item));
      setProductList(reverseProductList);
    });
  }, []);

  return (
    <div>
      <Layout />
      {productList.length ? (
        <ProductList productList={productList} />
      ) : (
        <EmptyList />
      )}
    </div>
  );
};

export default ProudctListPage;
