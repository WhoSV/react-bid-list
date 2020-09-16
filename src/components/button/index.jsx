import React from 'react';

import './style.css';

const Button = (props) => {
  return (
    <button className={`custom-button btn-${props.colorType}`} onClick={props.btnClick}>
      {props.name}
    </button>
  );
};

export default Button;
