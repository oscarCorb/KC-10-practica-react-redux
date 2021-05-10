import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { getTags } from '../../../api/products';
import RadioGroup from '../../shared/RadioGroup';
import { defaultFilters, saleFilter } from './filters';
import './ProductFiltersForm.css';

const ProductFiltersForm = (props) => {
  const [tagList, setTagList] = useState([]);

  const handleChange = (event) => {
    props.setFormValues((oldValues) => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  };

  const handleTags = (event) => {
    let resultArr;
    const tagsCopy = [...props.formValues.tags];
    if (!props.formValues.tags.includes(event.target.value)) {
      tagsCopy.push(event.target.value);
      resultArr = tagsCopy;
    } else {
      resultArr = tagsCopy.filter((tag) => tag !== event.target.value);
    }
    props.setFormValues((oldValues) => ({
      ...oldValues,
      tags: [...resultArr],
    }));
  };
  const history = useHistory();
  const handleResetClick = (event) => {
    event.preventDefault();
    props.setFormValues(defaultFilters);
    props.setFiltersOn(false);
    // TODO buscar manera más eficiente de limpiar filtros y renderizar productList
    history.push('/');
  };

  useEffect(() => {
    getTags()
      .then((data) => setTagList(data))
      .catch((error) => console.error('ERROR.', error));
  }, []);

  return (
    <div className="filter-container">
      <h2 className="section-title title">Filtros</h2>
      <form onSubmit={props.onSubmit}>
        {/* NAME SEARCH BOX */}
        <label htmlFor="filter-name">Nombre</label>
        <input
          id="filter-name"
          type="search"
          name="name"
          value={props.formValues.name}
          placeholder="Buscar producto..."
          onChange={handleChange}
        />

        {/* SALE */}
        <RadioGroup
          name="sale"
          value={props.formValues.sale}
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
            value={props.formValues.priceFrom}
            onChange={handleChange}
          />
          <label htmlFor="filter-price-to">hasta</label>
          <input
            id="filter-price-to"
            type="number"
            name="priceTo"
            value={props.formValues.priceTo}
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
                    checked={
                      props.formValues.tags.length && props.formValues.tags[`${tag}`]
                    }
                    onChange={handleTags}
                  />
                  <label htmlFor={`filter-tag-${tag}`}>{tag}</label>
                </div>
              );
            })}
          </div>
        </div>

        {/* BUTTONS */}
        <button //
          type="submit"
          className="button is-info is-light is-outlined filters-buttons"
        >
          Filtrar
        </button>
        <button //
          onClick={handleResetClick}
          className="button is-info is-light is-outlined filters-buttons"
        >
          Borrar filtros
        </button>
      </form>
    </div>
  );
};

export default ProductFiltersForm;
