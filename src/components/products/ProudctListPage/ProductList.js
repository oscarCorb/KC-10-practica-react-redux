import React from 'react';
import EmptyList from './EmptyList';

import Product from './Product';

const ProductList = (props) => {
  return (
    <ul className="product-list">
      {props.productList.length ? (
        <Product {...props} />
      ) : (
        <EmptyList productsCount={props.productsCount} />
      )}
    </ul>
  );
};

export default ProductList;
