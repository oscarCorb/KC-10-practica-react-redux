import React, { useEffect, useState } from 'react';
import './ProductFilters.css';

const ProductFilters = (props) => {
  const [inputValues, setInputValues] = useState({
    name: '',
    priceFrom: 0,
    priceTo: 0,
    sale: false,
    tags: [],
  });

  const handleChange = (event) => {
    setInputValues((oldValues) => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
    console.log('inputValues', inputValues);
  };

  // Nada de esto me sirve
  // if (inputValues.name.length > 0) {
  //   props.productList.forEach((product) => {
  //     if (product.name.includes(inputValues.name))  {
  //       setInputValues((oldValues) => [...oldValues, product]);
  //     }
  //   });
  // }
  // console.log('inpinputValues', inputValues);

  return (
    <div className="filter-container">
      <h2 className="section-title">Filtros</h2>
      <form>
        {/* PRODUCT NAME SEARCH BOX */}
        <label htmlFor="filter-name">Nombre</label>
        <input
          id="filter-name"
          type="search"
          name="name"
          value={inputValues.name}
          placeholder="Buscar producto..."
          onChange={handleChange}
        />
        {/* PRICE RANGE */}
        <p className="form-titles">Price</p>
        <div className="filter-price">
          <label htmlFor="filter-price-from">from</label>
          <input
            id="filter-price-from"
            type="number"
            name="priceFrom"
            value={inputValues.priceFrom}
            onChange={handleChange}
          />
          <label htmlFor="filter-price-to">to</label>
          <input
            id="filter-price-to"
            type="number"
            name="priceTo"
            value={inputValues.priceTo}
            onChange={handleChange}
          />
        </div>
        {/* PRODUCT TYPE: SALE/BUY */}
        <label className="checkbox-container">
          Tipo de anuncio
          <input
            id="filter-type-sale"
            className="inputCheckbox"
            type="checkbox"
            name="sale"
          />
          <label htmlFor="filter-type-sale">Venta</label>
          <input
            id="filter-type-buy"
            className="inputCheckbox"
            type="checkbox"
            name="buy"
          />
          <label htmlFor="filter-type-buy">Compra</label>
          <input
            id="filter-type-all"
            className="inputCheckbox"
            type="checkbox"
            name="all"
          />
          <label htmlFor="filter-type-all">Todos</label>
        </label>
        {/* TAGS */}
        {/* PENDIENTE DE HACER EL FILTRO DE CATEGORÍAS */}
        {/* creo que habría que hacerlo dinámico, no en duro */}
      </form>
    </div>
  );
};

export default ProductFilters;
