import React from 'react';

import './form-input.styles.scss'

const FormInput = ({handleChange, label, ...otherProps}) => (
  <div className="form-group">
    <label>
      {label}
    </label>
    <input
      className="form-input"
      onChange={handleChange}
      {...otherProps}
    />
  </div>
);

export default FormInput;