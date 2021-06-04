import React from 'react';
import Button from '../../shared/Button';
import Modal from '../../shared/Modal';
import imgPlaceholder from '../../../assets/image_placeholder.png';

const ProductDetail = (props) => {
  const baseUrl = process.env.REACT_APP_API_BASE_URL;

  return (
    <>
      <div className="product-detail-container">
        <div className="product-detail-wrapper">
          <h2 className="product-detail-title title">{props.product.name}</h2>
          <img
            src={
              props.product.photo
                ? `${baseUrl}${props.product.photo}`
                : imgPlaceholder
            }
            alt={props.product.name}
          />
          <div className="product-details">
            <p className="product-detail-price">
              {props.product.price &&
                props.product.price.toFixed(2).replace('.', ',')}{' '}
              €
            </p>
            <p className="product-detail-tags">
              Categorías:{' '}
              {props.product.tags &&
                props.product.tags.map((tag) => tag).join(', ')}
            </p>
            <p className="product-detail-sale">
              Anuncio de
              {props.product.sale ? ' venta' : ' compra'}
            </p>
          </div>
          <Button
            // DELETE BUTTON
            cName="is-danger"
            handleClick={props.handleClickModal}
            buttonText="Eliminar"
            {...props}
          />
          {props.displayModal && (
            <Modal //
              questionText="¿Estás seguro?"
              {...props}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
