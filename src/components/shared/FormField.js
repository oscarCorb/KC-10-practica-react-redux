import React from 'react';

const FormField = (props) => {
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
