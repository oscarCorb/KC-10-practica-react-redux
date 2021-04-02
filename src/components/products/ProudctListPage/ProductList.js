import React from 'react';
import { Link } from 'react-router-dom';

import Product from './Product';

const ProductList = (props) => {
  return (
    <ul className="product-list">
      <Product {...props} />
    </ul>
  );
};

export default ProductList;
