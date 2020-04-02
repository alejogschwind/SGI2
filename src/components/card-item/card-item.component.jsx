import React from 'react';
import { withRouter } from 'react-router-dom';

import DataItem from '../data-item/data-item.component';
import InfoBox from '../info-box/info-box.component';

import './card-item.styles.scss';

const CardItem = ({event: { id, title, imageURL }, history}) => (
  <div
    className="card-item"
    onClick={() => history.push(`event/${id}`)}
  >
    <div className="top-card">
      <div 
        className="image-wrapper"
        style={{
          backgroundImage: `url(${imageURL})`
        }}
      >
      </div>
      <InfoBox title={title}/>
    </div>
    <div className="bottom-card">
      <DataItem lable={'Precio'} data={'AR$ 500'}/>
      <DataItem lable={'Inscriptos'} data={100}/>
      <DataItem lable={'Disponibles'} data={50}/>
      <DataItem lable={'Cupos totales'} data={200}/>
    </div>
  </div>
);

export default withRouter(CardItem);