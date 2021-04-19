import React from 'react';

import './Product.css';
import Button from '../../shared/Button';
import { Link } from 'react-router-dom';
import EmptyList from './EmptyList';

const Product = (props) => {
  return (
    <article className="product">
      <div className="product-list-wrapper">
        {props.productList.length ? (
          props.productList.map((product) => {
            return (
              <li key={product.id}>
                <div className="product-wrapper">
                  <div>{product.name}</div>
                  <div>{product.price.toFixed(2).replace('.', ',')} €</div>
                  <div>Categorías: {product.tags.map((tag) => tag).join(', ')}</div>
                  <div>{product.sale ? '"Vendo"' : '"Compro"'}</div>
                  <Link to={`/advert/${product.id}`}>
                    <Button cName="is-info" buttonText="ver" />
                  </Link>
                </div>
              </li>
            );
          })
        ) : (
          <EmptyList productsCount={props.productsCount} />
        )}
      </div>
    </article>
  );
};

export default Product;
