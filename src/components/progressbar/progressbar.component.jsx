import React from 'react';

import './progressbar.styles.scss'

const Progressbar = ({ progress}) => (
  <div className='progressbar'>
    <div className='progress-done' style={{
      opacity: 1,
      width: `${progress * 100}%`,
    }}>
      <span>{`${progress * 100} %`}</span>
    </div>
  </div>
)

export default Progressbar;