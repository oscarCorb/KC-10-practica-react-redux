import React, { useEffect, useState } from 'react';
import { getProductList } from '../../../api/products';
import Layout from '../../layout/Layout';
import ProductList from './ProductList';

const EmptyList = () => {
  return (
    <>
      <p>No hay productos. Crear el primero</p>
    </>
  );
};

const ProudctListPage = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProductList().then(setProductList);
  }, []);

  return (
    <div>
      <Layout />
      <h2>Product List page</h2>

      {productList.length ? (
        <ProductList productList={productList} />
      ) : (
        <EmptyList />
      )}
      {/* al revés para pruebas */}
      {/* {productList.length ? <EmptyList /> : <ProductList />} */}
      {/* </Layout> */}
    </div>
  );
};

export default ProudctListPage;
