import React from 'react';

import Loading from '../loading/loading.component';
import './custom-button.styles.scss';

const CustomButton = ({loading, children, secondary, onClick, ...otherProps }) => (
  <button disabled={loading} onClick={onClick} {...otherProps} className={`custom-button ${secondary ? 'googleButton':''}`}>
    {
      loading ?
      <Loading
        type='button'
      />
      :
      <span className='button-text'>{children}</span>
    }

  </button>
);

export default CustomButton;