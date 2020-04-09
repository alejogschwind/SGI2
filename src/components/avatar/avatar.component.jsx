import React from 'react';

import './avatar.styles.scss';

const Avatar = ({avatar}) => (
  <div
    className='avatar'
    style={{
      backgroundImage: `url(${avatar})`
    }}
  >
    <div className='edit-btn'></div>
  </div>
);

export default Avatar;