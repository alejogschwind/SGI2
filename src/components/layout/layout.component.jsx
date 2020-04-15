import React from 'react';

import Header from '../header/header.component';

const Layout = ({children}) => (
  <div className='layout'>
    <Header />
    {children}
  </div>
);

export default Layout;