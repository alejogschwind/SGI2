import React from 'react';

import './data-box.styles.scss';

const DataBox = ({lable, children}) => (
  <div className="data-box">
    <div className="lable">{lable}</div>
    <div className="box">
      {children}
    </div>
  </div>
);

export default DataBox;