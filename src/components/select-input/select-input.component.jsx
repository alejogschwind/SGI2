import React from 'react';

import './select-input.styles.scss';

const SelectInput = ({handleChange, label, ...otherProps}) => (
  <div className="select-group">
    <label>{label}</label>
    <select
      className='select-input'
      onChange={handleChange}
      {...otherProps}
    >
      <option value=''></option>
      <option value='Femenino'>Femenino</option>
      <option value='Masculino'>Masculino</option>
      <option value='Otro'>Otro</option>
    </select>
  </div>
)

export default SelectInput;