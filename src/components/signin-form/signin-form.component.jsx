import React from 'react';

import FormInput from '../form-input/form-input.compoent';
import CustomButton from '../custom-button/custom-buton.components';
import './signin-form.styles.scss'

import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault()

    this.setState({ emial: '', password: ''})
  }

  handleChange = event => {
    const { value, name } = event.target;
    
    this.state({ [name] : value})
  }
  
  render() {
    return (
      <div className='signin-wrapper'>
        <div className="card-signin">
          <h2 className='form-title'>Ingresa al <br /> SGI2.0</h2>
          <form onSubmit={this.handleSubmit}>
            <FormInput
              type='text'
              name='email'
              label='Email'
              placeholder='Ingrese su email...'
              required={true}
            />
            <FormInput
              type='password'
              name='password'
              label='Contraseña'
              placeholder='Ingrese su contraseña...'
              required={true}
            />
            <CustomButton type='submit'>Ingresa</CustomButton>
          </form>
          <CustomButton
            secondary={true}
            onClick={signInWithGoogle}
          >Ingresa con Google</CustomButton>
        </div>
        <span className='signup-link'>No tienes una cuenta? Registrate aquí</span>
      </div>
    );
  }
} 

export default SignInForm;