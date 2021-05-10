import React from 'react';
import Button from '../../shared/Button';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
  return (
    <article className="product">
      <div className="product-list-wrapper">
        <p className="section-title title">Productos</p>
        {props.productList.length &&
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
          })}
      </div>
    </article>
  );
};

export default Product;
