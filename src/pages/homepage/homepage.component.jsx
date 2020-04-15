import React from 'react';

import Layout from '../../components/layout/layout.component';
import CardList from '../../components/card-list/card-list.component';
import Filter from '../../components/filter/filter.component';

import './homepage.styles.scss';

const HomePage = () => (
  <div className="homepage">
    <CardList />
  </div>
);

export default HomePage;