import React from 'react';

import './input-item.styles.scss'

const InputItem = ({type, name, lable, placeholder, required}) => (
  <div className="input-item">
    <div className="lable">
      {lable}
    </div>
    <input
      className="input"
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
    />
  </div>
);

export default InputItem;