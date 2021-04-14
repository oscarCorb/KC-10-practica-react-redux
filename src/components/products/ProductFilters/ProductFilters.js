import React, { useEffect, useState } from 'react';
import { getTags } from '../../../api/products';
import ProductList from '../ProudctListPage/ProductList';
import './ProductFilters.css';

const ProductFilters = (props) => {
  // storage maximun product price in productList
  const maxPrice = () => {
    const prices = props.productList.map((product) => product.price);
    return Math.max(...prices);
  };

  const [tagList, setTagList] = useState([]);
  const [filteredValues, setFilteredValues] = useState({
    name: '',
    priceFrom: 0,
    priceTo: maxPrice(),
    sale: true,
    tags: [],
  });

  const handleSale = (event) => {
    setFilteredValues((oldValues) => ({
      ...oldValues,
      [event.target.name]: !oldValues[event.target.name],
    }));
  };

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
    } else {
      resultArr = tagsCopy.filter((tag) => tag !== event.target.value);
    }
    setFilteredValues((oldValues) => ({
      ...oldValues,
      tags: [...resultArr],
    }));
    // console.log('filteredValues---', filteredValues);
  };

  useEffect(() => {
    getTags()
      .then((data) => setTagList(data))
      .catch((error) => console.error('ERROR.', error));
  }, []);

  // console.log('productList---x-->', props.productList);
  // console.log('filteredValues-->', filteredValues);
  // tener en cuenta el toLowerCase(), es importante
  const resultFilteredProducts = [];

  const comparison = () => {
    props.productList.map((product) => {
      if (product.name.includes(filteredValues.name)) {
        if (
          product.price >= filteredValues.priceFrom &&
          product.price <= filteredValues.priceTo
        ) {
          console.log('->', filteredValues.sale);
          console.log('xx', product);

          if (product.sale == filteredValues.sale) {
            if (product.tags.length) {
              for (const tag in product.tags) {
                if (product.tags.includes(filteredValues.tags[tag])) {
                  if (!resultFilteredProducts.includes(product)) {
                    // esto (push y setter) tiene que ir al final de la cadena
                    resultFilteredProducts.push(product);
                    // TODO meter este estado en botón para activar filtros al pinchar
                    props.setFiltersOn(true);
                  }
                }
              }
            }
          }
        }
      }
    });
  };
  comparison();

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
        {/* <label className="checkbox-container">
          Tipo de anuncios
          <input
            id="filter-type-sale"
            className="inputCheckbox"
            type="radio"
            name="sale"
            value={true}
            checked={filteredValues.sale === 'true'}
            onChange={handleChange}
          />
          <label htmlFor="filter-type-sale">Venta</label>
          <input
            id="filter-type-buy"
            className="inputCheckbox"
            type="radio"
            name="sale"
            value={false}
            checked={filteredValues.sale === 'false'}
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
        </label> */}
        {/* SALE TEST CON CHECKBOXES */}
        <input
          id="filter-type-sell"
          type="checkbox"
          name="sale"
          // value={filteredValues.sale}
          checked={filteredValues.sale[true]}
          onChange={handleSale}
        />
        <label htmlFor="filter-type-sell">Vender</label>
        <input
          id="filter-type-buy"
          type="checkbox"
          name="sale"
          // value={filteredValues.sale}
          checked={filteredValues.sale[false]}
          onChange={handleSale}
        />
        <label htmlFor="filter-type-buy">Comprar</label>

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
      </form>
      {resultFilteredProducts && (
        <ProductList productList={resultFilteredProducts} />
      )}
    </div>
  );
};

export default ProductFilters;
