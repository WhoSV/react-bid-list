import React, { useState } from 'react';

import './style.css';

const Input = (props) => {
  const [inputType] = useState(props.type);

  function handleChange(event) {
    if (props.onChange) props.onChange(event.target.value);
  }

  return <input className="custom-input" type={inputType} onChange={handleChange} />;
};

export default Input;
