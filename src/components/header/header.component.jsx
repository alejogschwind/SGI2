import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './header.styles.scss';
import withLoading from '../../HOCs/withLoading';

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
          > 
            {
              currentUser &&

              !currentUser.photoURL ? 
              <svg width="30" height="30" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="75" cy="75" r="75" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M15.2212 120.3C17.0003 118.474 19.938 116.707 24.0343 115C24.5105 114.762 28.4242 113.452 35.7754 111.071C43.1265 108.69 46.8914 107.47 47.07 107.411C51.1771 105.923 53.8706 104.777 55.1504 103.973C56.4301 103.17 57.3974 102.054 58.0521 100.625L60.1057 96.3393C60.4033 94.8512 60.0462 93.631 59.0343 92.6786C51.1176 85.5357 47.189 75.8631 47.2486 63.6607C47.2486 53.8393 49.6593 45.7738 54.4807 39.4643C59.3021 33.1548 65.9986 30 74.57 30C83.1414 30 89.8378 33.1548 94.6593 39.4643C99.4807 45.7738 101.891 53.8393 101.891 63.6607C101.951 75.8631 98.0224 85.5357 90.1057 92.6786C89.0938 93.631 88.7367 94.8512 89.0343 96.3393L91.0878 100.625C91.7426 102.054 92.7099 103.17 93.9896 103.973C95.2694 104.777 97.9628 105.923 102.07 107.411C102.249 107.47 106.013 108.69 113.365 111.071C120.716 113.452 124.63 114.762 125.106 115C129.584 116.866 132.678 118.804 134.386 120.813C122.444 136.271 104.6 146.938 84.23 149.438C81.0591 149.792 77.8384 149.982 74.5766 149.999C50.3471 149.865 28.8382 138.242 15.2212 120.3Z" fill="#D81B5D"/>
              </svg>
              :
                ''
            }
          </div>
        </Link>
      </div>
    </div>
    {children}
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(withLoading(Header));