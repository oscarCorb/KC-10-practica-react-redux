import React from 'react';

import Product from './Product';

const ProductList = (props) => {
  // console.log('$$ props $$ ', props);

  return (
    <ul className="product-list">
      <Product {...props} />
    </ul>
  );
};

export default ProductList;
