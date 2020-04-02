import React from 'react';

import './data-item.styles.scss';

const DataItem = ({ lable, data }) => (
  <div className="data-item">
    <h5 className="lable">{lable}</h5>
    <span className="data">{data}</span>
  </div>
);

export default DataItem;