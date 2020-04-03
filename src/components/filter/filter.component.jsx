import React from 'react';

import Dropdown from '../dropdown/dropdown.compnent';

import './filter.styles.scss';

const Filter = () => (
  <div className="filter">
    <div className="filter-item">
      <span className="lable">Categoria</span>
      <Dropdown />
    </div>
    <div className="filter-item">
      <span className="lable">Orden</span>
      <Dropdown />
    </div>
  </div>
);

export default Filter;