import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = ({children, avatar}) => (
  <div className='header'>
    <div className="top-header">
      <Link to='/'>
        <div className='menu-btn'>
          <svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="1" x2="20" y2="1" stroke="white" strokeWidth="2"/>
            <line y1="10" x2="27" y2="10" stroke="white" strokeWidth="2"/>
            <line x1="7" y1="19" x2="27" y2="19" stroke="white" strokeWidth="2"/>
          </svg>
        </div>
      </Link>
      <div className='user-info'>
        <span className='display-name'>Alejo G</span>
        <Link to='/profile'>
          <div
            className="small-avatar"
            style={{
              backgroundImage: `url(${avatar})`
            }}
          ></div>
        </Link>
      </div>
    </div>
    {children}
  </div>
);

export default Header;