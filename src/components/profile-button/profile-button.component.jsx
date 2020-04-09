import React from 'react';

import './profile-button.styles.scss';

const ProfileButton = ({icon, text}) => (
  <div className='profile-button'>
    <div className='right-section'>
      <div className='icon'>
        {icon}
      </div>
      <span className='text'>{text}</span>
    </div>
    <div className='arrow'>
      <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="1.39372" y1="14.3141" x2="8.86392" y2="6.84394" stroke="#312D2D" strokeOpacity="0.8" strokeWidth="2"/>
        <line x1="8.76311" y1="8.17732" x2="1.29291" y2="0.707125" stroke="#312D2D" strokeOpacity="0.8" strokeWidth="2"/>
      </svg>
    </div>
  </div>
);

export default ProfileButton;