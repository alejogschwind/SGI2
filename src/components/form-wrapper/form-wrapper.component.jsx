import React from 'react';

import './form-wrapper.styles.scss';

const FormWrapper = ({ children }) => (
  <div className='form-wrapper'>
    {children}
  </div>
);

export default FormWrapper;