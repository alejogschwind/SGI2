import React from 'react';

import './info-box.styles.scss';

const InfoBox = ({ title }) => (
  <div className="info-box">
    <h1 className="title">{title}</h1>
    <h3 className="description">Descripcion breve del evento en cuestion.</h3>
    <div className="date-box">
      <div className="start-date">
        <h5 className="date">12 Julio 2019</h5>
        <span className="time">desde las 10am</span>
      </div>
      <div className="end-date">
        <h5 className="date">14 Julio 2019</h5>
        <span className="time">hasta las 12am</span>
      </div>
    </div>
  </div>
);

export default InfoBox;