import React, { useEffect, useState } from 'react';
import { getProduct } from '../../../api/products';
import Layout from '../../layout/Layout';

const ProudctDetailPage = (props) => {
  const [product, setProduct] = useState({});
  const productId = props.match.params.id;

  console.log(product);

  useEffect(() => {
    getProduct(productId)
      .then((product) => setProduct(product))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Layout />
      <article className="product-detail-container">
        <h2 className="product-detail-title">{product.name}</h2>
        {/*** si no puedo abrir directamente en el navegador la foto de la imagen, es que hay algo mal hecho
        MIRAR A VER SI ES UN PROBLEMA CON LAS REDIRECCIONES - TIENE PINTA
         */}
        {/* client.js =>
         const client = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL });
         */}
        {/* probar a cambiar url hardcoded por ${process.env} pero cuidado con el
        "adverts", que se repite. Habrá que retocar el archivo donde esté */}
        <img src={`${product.photo}`} alt={product.name} />
        <p>{product.price}</p>
        <p>{product.tags}</p>
        <p>{product.sale}</p>
        {/* botón eliminar producto */}
      </article>
    </>
  );
};

export default ProudctDetailPage;
