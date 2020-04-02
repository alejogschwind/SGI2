import React from 'react';

import Header from '../../components/header/header.component';
import CardList from '../../components/card-list/card-list.component';


import './homepage.styles.scss';

const HomePage = () => (
  <div className="homepage">
    <Header />
    <CardList />
  </div>
);

export default HomePage;