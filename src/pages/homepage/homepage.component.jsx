import React from 'react';

import Header from '../../components/header/header.component';
import CardList from '../../components/card-list/card-list.component';
import Filter from '../../components/filter/filter.component';

import './homepage.styles.scss';

const HomePage = () => (
  <div className="homepage">
    <Header>
      <Filter />
    </Header>
    <CardList />
  </div>
);

export default HomePage;