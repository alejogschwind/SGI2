import React from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

import SignInForm from '../../components/signin-form/signin-form.component';
import './signin.styles.scss';

const SignIn = (props) => (
  <div className='signin'>
    {
      props.isAuth ?
      <Redirect to='/profile'/>
      :
      <SignInForm />
    }
  </div>
);

const mapStateToProps = state => ({
  isAuth: (state.user.currentUser)
})

export default connect(mapStateToProps)(SignIn);