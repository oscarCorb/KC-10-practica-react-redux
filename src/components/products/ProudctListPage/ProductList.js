import React from 'react';
import { Link } from 'react-router-dom';

import Product from './Product';

const ProductList = (props) => {
  return (
    <ul className="product-list">
      {/* <Link to={`/advert/${product.id}`}> */}
      <Link to="/">
        <Product {...props} />
      </Link>
    </ul>
  );
};

export default ProductList;
