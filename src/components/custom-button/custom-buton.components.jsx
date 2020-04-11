import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, secondary, onClick, ...otherProps }) => (
  <button onClick={onClick} {...otherProps} className={`custom-button ${secondary ? 'googleButton':''}`}>
    <span className='button-text'>{children}</span>
  </button>
);

export default CustomButton;