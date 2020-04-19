import React from 'react';

import {ReactComponent as IconWork} from './assets/work.svg';

import './buildpage.styles.scss';

const BuildPage = () => (
  <div className="buildpage">
    <div className='icon'>
      <IconWork />
    </div>
    <div className="text">
      <h4>Estamos trabajando, por favor regrese en unos minutos...</h4>
    </div>
  </div>
);

export default BuildPage;