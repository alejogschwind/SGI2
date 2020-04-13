import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './header.styles.scss';

const Header = ({children, currentUser}) => (
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
        <span className='display-name'>{currentUser ? currentUser.displayName : ''}</span>
        <Link to='/profile'>
          <div
            className="small-avatar"
            style={{
              backgroundImage: `url(${currentUser ? currentUser.photoURL : ''})`
            }}
          ></div>
        </Link>
      </div>
    </div>
    {children}
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);