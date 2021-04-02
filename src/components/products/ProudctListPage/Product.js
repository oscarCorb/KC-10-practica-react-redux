import React from 'react';

import './Product.css';

const Product = (props) => {
  return (
    <article className="product">
      <div className="product-list-wrapper">
        {props.productList.map((product) => {
          return (
            <li key={product.id}>
              <div className="product-wrapper">
                <div>{product.name}</div>
                <div>{product.price.toFixed(2).replace('.', ',')} €</div>
                <div>Categorías: {product.tags}</div>
                <div>{product.sale ? '"Vendo"' : '"Compro"'}</div>
                <div>{product.photo}</div>
              </div>
            </li>
          );
        })}
      </div>
    </article>
  );
};

export default Product;
