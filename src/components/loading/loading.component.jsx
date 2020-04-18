import React from 'react';

import './loading.styles.scss'

const Loading = ({type}) => (
  <div className='spiner-wrapper'>
    <div className={type == 'button' ? 'spiner button': 'spiner'}></div>
  </div>
);

export default Loading;