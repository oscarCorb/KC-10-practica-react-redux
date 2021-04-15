import React from 'react';

const RadioGroup = (props) => {
  return (
    <div>
      {props.options.map((item) => (
        <label key={item.value}>
          <input
            type="radio"
            value={item.value}
            checked={item.value === props.value}
            name={props.name}
            onChange={props.onChange}
          />
          {item.label}
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
