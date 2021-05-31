import React, { useEffect, useState } from 'react';
import Layout from '../../layout/Layout';
import Modal from '../../shared/Modal';
import Button from '../../shared/Button';

import placeholderImg from '../../../assets/image_placeholder.png';
import './ProudctDetailPage.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  productDetailAction,
  productDeletedAction,
} from '../../../store/actions';
import { getProductDetail, getUi } from '../../../store/selectors';
import { Redirect, useHistory } from 'react-router';

const ProudctDetailPage = ({ match }) => {
  const productId = match.params.id;
  const baseUrl = process.env.REACT_APP_API_BASE_URL;

  const [displayModal, setDisplayModal] = useState(false);

  const dispatch = useDispatch();
  const product = useSelector((state) => getProductDetail(state, productId));
  const history = useHistory();
  const { loading, error } = useSelector(getUi);

  const handleClickModal = () => {
    setDisplayModal(!displayModal);
  };

  const deleteProductFn = (confirmDeletion) => {
    dispatch(productDeletedAction(productId, confirmDeletion));
  };

  useEffect(() => {
    dispatch(productDetailAction(productId));
  }, []);

  if (error?.statusCode === 401) {
    return <Redirect to="/login" />;
  }

  return (
    product && (
      <>
        <Layout />
        <main className="product-detail-container">
          <div className="product-detail-wrapper">
            <h2 className="product-detail-title title">{product.name}</h2>
            <img
              src={
                product.photo ? `${baseUrl}${product.photo}` : placeholderImg
              }
              alt={product.name}
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
              <Modal
                onDisplayModal={setDisplayModal}
                onConfirm={deleteProductFn}
                questionText="¿Estás seguro?"
              />
            )}
          </div>
        </main>
      </>
    )
  );
};

export default ProudctDetailPage;
