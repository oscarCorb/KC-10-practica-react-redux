import React, { useEffect, useState } from 'react';
import { getTags } from '../../../api/products';
import RadioGroup from '../../shared/RadioGroup';
import ProductList from '../ProudctListPage/ProductList';
import { defaultFilters, saleFilter } from './filters';
import './ProductFiltersForm.css';

const ProductFiltersForm = (props) => {
  // storage maximun product price in productList
  // esto no funciona bien
  // const maxPrice = () => {
  //   const prices = props.productList.map((product) => product.price);
  //   return Math.max(...prices);
  // };

  const [tagList, setTagList] = useState([]);
  const [formValues, setFormValues] = useState(defaultFilters);

  // const handleSale = (event) => {
  //   setFormValues((oldValues) => ({
  //     ...oldValues,
  //     [event.target.name]: !oldValues[event.target.name],
  //   }));
  // };

  const handleChange = (event) => {
    setFormValues((oldValues) => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
    // console.log('formValues:::', formValues);
    // console.log('event.target.name ->', event.target.name);
    // console.log('event.target.value ->', event.target.value);
  };

  const handleTags = (event) => {
    let resultArr;
    const tagsCopy = [...formValues.tags];
    if (!formValues.tags.includes(event.target.value)) {
      tagsCopy.push(event.target.value);
      resultArr = tagsCopy;
    } else {
      resultArr = tagsCopy.filter((tag) => tag !== event.target.value);
    }
    setFormValues((oldValues) => ({
      ...oldValues,
      tags: [...resultArr],
    }));
    // console.log('formValues---', formValues);
  };

  const handleResetClick = (event) => {
    // console.log('handleResetClick');
    // console.log('formValues antes->', formValues);
    event.preventDefault();
    setFormValues(defaultFilters);
    // aquí hay que desmarcar los checkboxes *** xxx ***
    // no tiene que ver con el estado, sino con los propios checkboxes

    // checked={false}

    // console.log('formValues después 1->', formValues);
  };
  // console.log('formValues después 2->', formValues);

  const handleSubmit = (event) => {
    event.preventDefault();
    // aquí hay que hacer submit de los filtros y enviarlos a donde sea o ejecutar la función de los filtros
  };

  useEffect(() => {
    getTags()
      .then((data) => setTagList(data))
      .catch((error) => console.error('ERROR.', error));
  }, []);

  // console.log('productList---x-->', props.productList);
  // console.log('formValues-->', formValues);
  // tener en cuenta el toLowerCase(), es importante
  // const resultFilteredProducts = [];

  // const comparison = () => {
  //   props.productList.map((product) => {
  //     if (product.name.includes(formValues.name)) {
  //       if (
  //         product.price >= formValues.priceFrom &&
  //         product.price <= formValues.priceTo
  //       ) {
  //         // console.log('->', formValues.sale);
  //         // console.log('xx', product);

  //         if (product.sale == formValues.sale) {
  //           if (product.tags.length) {
  //             for (const tag in product.tags) {
  //               if (product.tags.includes(formValues.tags[tag])) {
  //                 if (!resultFilteredProducts.includes(product)) {
  //                   // esto (push y setter) tiene que ir al final de la cadena
  //                   resultFilteredProducts.push(product);
  //                   // TODO meter este estado en botón para activar filtros al pinchar
  //                   props.setFiltersOn(true);
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   });
  // };
  // comparison();

  return (
    <div className="filter-container">
      <h2 className="section-title">Filtros</h2>
      <form onSubmit={handleSubmit}>
        {/* NAME SEARCH BOX */}
        <label htmlFor="filter-name">Nombre</label>
        <input
          id="filter-name"
          type="search"
          name="name"
          value={formValues.name}
          placeholder="Buscar producto..."
          onChange={handleChange}
        />

        {/* SALE */}
        <RadioGroup
          name="sale"
          value={formValues.sale}
          options={Object.values(saleFilter)}
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
            value={formValues.priceFrom}
            onChange={handleChange}
          />
          <label htmlFor="filter-price-to">hasta</label>
          <input
            id="filter-price-to"
            type="number"
            name="priceTo"
            value={formValues.priceTo}
            onChange={handleChange}
          />
        </div>

        {/* TAGS */}
        {/* TODO: Crear un componente para manejar los tags */}
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
                    // esto provoca un warning pero me hace falta para desmarcar los checkboxes después del 'reset filters'
                    checked={formValues.tags.length && formValues.tags[`${tag}`]}
                    onChange={handleTags}
                  />
                  <label htmlFor={`filter-tag-${tag}`}>{tag}</label>
                </div>
              );
            })}
          </div>
        </div>

        {/* BUTTONS */}
        <button type="submit">Filtrar</button>
        <button onClick={handleResetClick}>Borrar filtros</button>
      </form>

      {/* {resultFilteredProducts && (
        <ProductList productList={resultFilteredProducts} />
      )} */}
    </div>
  );
};

export default ProductFiltersForm;
