import React from 'react';

const Product = (props) => {
  // console.log(': props en Product.js:', props);
  // console.log('; productList en Product.js:', props.productList);

  return (
    <article className="product">
      <div className="product-wrapper">
        {props.productList.map((product) => {
          return (
            <li key={product.id}>
              <div>{product.name}</div>
              <div>{product.price.toFixed(2).replace('.', ',')} €</div>
              <div>Categorías: {product.tags}</div>
              <div>{product.sale ? '"Vendo"' : '"Compro"'}</div>
              <div>{product.photo}</div>
            </li>
          );
        })}
      </div>
    </article>
  );
};

export default Product;
