import React from 'react';

const InputItem = ({type, name, lable, placehodler, required}) => (
  <div className="input-item">
    <div className="lable">
      {lable}
    </div>
    <input
      className="input"
      type={type}
      name={name}
      placeholder={placehodler}
      required={required}
    />
  </div>
);

export default InputItem;