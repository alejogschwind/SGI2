import React from 'react';

import {ReactComponent as SuccessIcon} from './assets/success.svg';
import {ReactComponent as ErrorIcon} from './assets/error.svg';
import {ReactComponent as CloseIcon} from './assets/close.svg';

import './flashmessage.styles.scss'

const FlashMessage = ({ flashmessage: {message, type} }) => (
  <div
    className={`flash-message error ${type}`}
  >
      {
        type == 'success' ? (<SuccessIcon className='icon'/>)
        : (<ErrorIcon className='icon'/>)
      }
    <span className="message">
      {message}
    </span>
      <CloseIcon className='close'/>
  </div>
);

export default FlashMessage;