import React, { useEffect, useState } from 'react';
import Layout from '../../layout/Layout';
import Modal from '../../shared/Modal';
import Button from '../../shared/Button';

import { getProduct } from '../../../api/products';
import placeholderImg from '../../../assets/image_placeholder.png';

import './ProudctDetailPage.css';
import { useHistory } from 'react-router';

const ProudctDetailPage = (props) => {
  // NOTA: es mejor inicializar product a null. Y para que funcione bien,
  // hay que poner una condición para que en el primer render, cuando
  // product todavía es null, no renderice nada
  const [product, setProduct] = useState(null);
  const [displayModal, setDisplayModal] = useState(false);
  const history = useHistory();
  const productId = props.match.params.id;
  const baseUrl = process.env.REACT_APP_API_BASE_URL;

  const handleClickModal = () => {
    setDisplayModal((oldValue) => !oldValue);
  };

  useEffect(() => {
    getProduct(productId)
      .then((product) => setProduct(product))
      .catch((error) => {
        console.error(error);
        if (error.status === 404) {
          return history.push('/');
        }
      });
  }, []);

  return (
    product && (
      <>
        <Layout />
        <main className="product-detail-container">
          <div className="product-detail-wrapper">
            <h2 className="product-detail-title">{product.name}</h2>
            <img
              src={product.photo ? `${baseUrl}${product.photo}` : placeholderImg}
            />
            <div className="product-details">
              <p className="product-detail-price">
                {product.price && product.price.toFixed(2).replace('.', ',')} €
              </p>
              <p className="product-detail-tags">
                Categorías:{' '}
                {product.tags && product.tags.map((tag) => tag).join(', ')}
              </p>
              <p className="product-detail-sale">
                Anuncio de
                {product.sale ? ' venta' : ' compra'}
              </p>
            </div>
            <Button
              cName="is-danger"
              buttonText="Eliminar"
              handleClick={handleClickModal}
            />
            {displayModal && (
              <Modal productId={product.id} setDisplayModal={setDisplayModal} />
            )}
          </div>
        </main>
      </>
    )
  );
};

export default ProudctDetailPage;
