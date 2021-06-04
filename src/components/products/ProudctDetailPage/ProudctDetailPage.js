import React, { useEffect, useState } from 'react';
import Layout from '../../layout/Layout';

import './ProudctDetailPage.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  productDetailAction,
  productDeletedAction,
} from '../../../store/actions';
import { getProductDetail, getUi } from '../../../store/selectors';
import { Redirect } from 'react-router';
import ProductDetail from './ProductDetail';

const ProudctDetailPage = ({ match }) => {
  const productId = match.params.id;
  const [displayModal, setDisplayModal] = useState(false);

  const dispatch = useDispatch();
  const product = useSelector((state) => getProductDetail(state, productId));
  const { error } = useSelector(getUi);

  const handleClickModal = () => {
    setDisplayModal(!displayModal);
  };

  const deleteProductConfirm = (confirmDeletion) => {
    dispatch(productDeletedAction(productId, confirmDeletion));
  };

  useEffect(() => {
    dispatch(productDetailAction(productId));
  }, []);

  if (error?.statusCode === 401) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Layout>
        {product && (
          <ProductDetail
            product={product}
            productId={productId}
            handleClickModal={handleClickModal}
            displayModal={displayModal}
            onDisplayModal={handleClickModal}
            onConfirmDeletion={deleteProductConfirm}
          />
        )}
      </Layout>
    </>
  );
};

export default ProudctDetailPage;
