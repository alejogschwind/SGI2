import React, {forwardRef, useImperativeHandle} from 'react';
import ReactDOM from 'react-dom';

import {ReactComponent as CloseIcon} from './assets/close.svg';

import './modal.styles.scss';

const Modal = forwardRef((props, ref) => {
  const [display, setDisplay] = React.useState(false);

  useImperativeHandle(ref, () => {
    return {
      openModal: () => open(),
      closeModal: () => close()
    }
  });

  const open = () => setDisplay(true);
  const close = () => setDisplay(false);
  
  if (display) {
  
    return ReactDOM.createPortal(
      <div className="modal-wrapper">
        <div onClick={close} className="modal-backdrop" />
        <div className="modal-box">
          <CloseIcon onClick={close} className='close-btn' />
          {props.children}
        </div>
      </div>, document.getElementById('modal-root'))
  }

  return '';
});

export default Modal;