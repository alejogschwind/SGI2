import React from 'react';
import { Link } from 'react-router-dom';

import {ReactComponent as EmailVerifyLogo} from './assets/email-verify.svg';
import './email-verify.styles.scss';

const EmailVerify = () => (
  <div className='email-verify'>
    <h1 className='title'>Revisa tu correo</h1>
    <EmailVerifyLogo />
    <p className='text'>
      Te enviamos un correo con un link para verificar tu cuenta.<br /><br />
      <span>Regresa al: </span><Link className='link' to='/signin'>Login</Link>
    </p>
  </div>
);

export default EmailVerify;