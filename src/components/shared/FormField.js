import React, { useState } from 'react';

const FormField = (props) => {
  // const handleChange = (e) => {
  //   props.onChange(e);
  // };

  return (
    <div>
      <label className="formFieldLabel">
        <span>{props.label}</span>
      </label>
      <input
        className="formField"
        value={props.value}
        name={props.name}
        type={props.type}
        onChange={props.onChange}
      />
    </div>
  );
};

export default FormField;
