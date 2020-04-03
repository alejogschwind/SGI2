import React from 'react';

import './dropdown.styles.scss';

const Dropdown = () => (
  <div className="dropdown">
    <span className="text">Distrital</span>
    <div className="arrow">
      <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line y1="-0.5" x2="5.048" y2="-0.5" transform="matrix(0.713767 -0.700384 0.713767 0.700384 4.5414 4.53552)" stroke="#312D2D"/>
        <line y1="-0.5" x2="5.048" y2="-0.5" transform="matrix(0.713767 0.700384 -0.713767 0.700384 0.464966 1)" stroke="#312D2D"/>
      </svg>
    </div>
  </div>
);

export default Dropdown;