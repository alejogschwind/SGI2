import React from 'react';

import Layout from '../../components/layout/layout.component';
import CardList from '../../components/card-list/card-list.component';
import Filter from '../../components/filter/filter.component';
import VirtualCardEvent from '../../components/virtual-card-event/virtual-card-event.component';

import './homepage.styles.scss';

const HomePage = () => (
  <div className="homepage">
    <div>
      {/* <p style={{
        color: 'white',
        display: 'flex',
        justifyContent: 'center'
      }}>No hay eventos</p> */}
      <VirtualCardEvent />
    </div>
    {/* <CardList /> */}
  </div>
);

export default HomePage;