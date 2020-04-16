import React from 'react';

import './select-input.styles.scss';

const SelectInput = ({handleChange, label, options, placeholder, value, ...otherProps}) => {
  // const [style, setStyle] = React.useState({});

  // const handleSelect = () => setStyle({color: 'black'})
  
  return (
  <div className="select-group">
    <label>{label}</label>
    <select
      className='select-input'
      onChange={handleChange}
      // onClick={handleSelect}
      value={value}
      {...otherProps}
      style={!value ? {color: '#c4c4c4'} : {color: 'black'}}
    >
      <option className='default-value' value=''>{placeholder}</option>
      {
        options.map((option) => (<option key={option} value={option}>{option}</option>))
      }
    </select>
  </div>
)}

export default SelectInput;