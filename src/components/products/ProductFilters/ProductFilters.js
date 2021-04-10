import React, { useEffect, useState } from 'react';
import { getTags } from '../../../api/products';
import './ProductFilters.css';

const ProductFilters = (props) => {
  const [filteredValues, setFilteredValues] = useState({
    name: '',
    priceFrom: 0,
    priceTo: 0,
    sale: true,
    tags: [],
  });

  const handleChange = (event) => {
    setFilteredValues((oldValues) => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
    // console.log('filteredValues:::', filteredValues);
  };

  const handleTags = (event) => {
    let resultArr;
    const tagsCopy = [...filteredValues.tags];
    if (!filteredValues.tags.includes(event.target.value)) {
      tagsCopy.push(event.target.value);
      resultArr = tagsCopy;
      // console.log('añadido => resultArray__', resultArr);
    } else {
      resultArr = tagsCopy.filter((tag) => tag !== event.target.value);
      // console.log('borrado => resultArray__', resultArr);
    }
    setFilteredValues((oldValues) => ({
      ...oldValues,
      tags: [...resultArr],
    }));
    // console.log('filteredValues:::', filteredValues);
  };

  const [tagList, setTagList] = useState([]);
  useEffect(() => {
    getTags()
      .then((data) => setTagList(data))
      .catch((error) => console.error('ERROR.', error));
  });

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
          value={filteredValues.name}
          placeholder="Buscar producto..."
          onChange={handleChange}
        />
        {/* PRICE RANGE */}
        <p className="form-titles">Precio</p>
        <div className="filter-price">
          <label htmlFor="filter-price-from">desde</label>
          <input
            id="filter-price-from"
            type="number"
            name="priceFrom"
            value={filteredValues.priceFrom}
            onChange={handleChange}
          />
          <label htmlFor="filter-price-to">hasta</label>
          <input
            id="filter-price-to"
            type="number"
            name="priceTo"
            value={filteredValues.priceTo}
            onChange={handleChange}
          />
        </div>
        {/* PRODUCT TYPE: SALE/BUY */}
        {/* ### HAY QUE CAMBIAR LOS CHECKBOX POR RADIOS: VENTA, COMPRA, TODO ### */}
        <label className="checkbox-container">
          Tipo de anuncios
          <input
            id="filter-type-sale"
            className="inputCheckbox"
            type="radio"
            name="sale"
            value={true}
            checked={filteredValues.sale === true}
            onChange={handleChange}
          />
          <label htmlFor="filter-type-sale">Venta</label>
          <input
            id="filter-type-buy"
            className="inputCheckbox"
            type="radio"
            name="sale"
            value={false}
            checked={filteredValues.sale === false}
            onChange={handleChange}
          />
          <label htmlFor="filter-type-buy">Compra</label>
          <input
            id="filter-type-all"
            className="inputCheckbox"
            type="radio"
            name="sale"
            value="all"
            checked={filteredValues.sale === 'all'}
            onChange={handleChange}
          />
          <label htmlFor="filter-type-all">Todos</label>
        </label>
        {/* TAGS */}
        <div className="filter-tags-container">
          <label>Categorías</label>
          <div className="filter-tags-wrapper">
            {tagList.map((tag) => {
              return (
                <div className="filter-tag" key={tag}>
                  <input
                    id={`filter-tag-${tag}`}
                    type="checkbox"
                    name="tags"
                    value={tag}
                    checked={filteredValues.tags[`${tag}`]}
                    onChange={handleTags}
                  />
                  <label htmlFor={`filter-tag-${tag}`}>{tag}</label>
                </div>
              );
            })}
          </div>
        </div>

        {/*  */}
        {/* TEST, VER selección
        <div>TEST:</div>
        <p>{inputValues.sale}</p> */}
      </form>
    </div>
  );
};

export default ProductFilters;
