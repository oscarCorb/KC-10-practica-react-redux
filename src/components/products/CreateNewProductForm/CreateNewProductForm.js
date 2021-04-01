import React, { useEffect, useState } from 'react';
import { getTags } from '../../../api/products';
import FormField from '../../shared/FormField';

const CreateNewProductForm = (props) => {
  const [inputValues, setInputValues] = useState({
    productName: '',
    productPrice: '',
    productTags: [],
    productPicture: '',
  });
  const [onSaleValue, onSaleInputProps] = useRadioButtons('productsOnSale');

  const [tags, setTags] = useState([]);

  useEffect(() => {
    const getTagList = async () => {
      const tags = await getTags();
      setTags(tags);
    };
    getTagList();
  }, []);

  const handleChange = (event) => {
    setInputValues((oldValues) => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSelect = (selectedItems) => {
    const tags = [];
    for (let i = 0; i < selectedItems.length; i++) {
      tags.push(selectedItems[i].value);
    }
    setInputValues((oldValues) => ({
      ...oldValues,
      productTags: tags,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(inputValues);
    setInputValues({
      productName: '',
      productPrice: '',
      productOnSale: '',
      productTags: [],
      productPicture: '',
    });
  };

  // getTags()
  // Tags();
  console.log('inputValues', inputValues);

  return (
    <form className="createNewProductForm" onSubmit={handleSubmit}>
      <FormField
        type="text"
        name="productName"
        label="Nombre del producto"
        value={inputValues.productName}
        className="createNewProductForm-field"
        onChange={handleChange}
        autofocus
      />
      <FormField
        type="number"
        name="productPrice"
        label="Precio"
        value={inputValues.productPrice}
        className="createNewProductForm-field"
        onChange={handleChange}
      />

      <label>Tipo de anuncio</label>
      <fieldset>
        <label>
          Venta
          <input
            name="onSaleProduct"
            value={true}
            {...onSaleInputProps}
            className="createNewProductForm-radio"
            onChange={handleChange}
            // defaultChecked
          />
        </label>
        <label>
          Compra
          <input
            name="onSaleProduct"
            value={false}
            {...onSaleInputProps}
            className="createNewProductForm-radio"
            onChange={handleChange}
          />
        </label>
      </fieldset>

      {/* TAGS xxx */}
      <label>
        Categorías
        <fieldset>
          <select
            value={inputValues.productTags}
            multiple={true}
            onChange={(e) => {
              handleSelect(e.target.selectedOptions);
            }}
          >
            {tags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </fieldset>
      </label>

      {/* FOTO */}
    </form>
  );
};

function useRadioButtons(name) {
  const [value, setState] = useState(null);

  const handleChange = (e) => {
    setState(e.target.value);
  };

  const inputProps = {
    name,
    type: 'radio',
    onChange: handleChange,
  };

  return [value, inputProps];
}

export default CreateNewProductForm;
