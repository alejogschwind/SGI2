import React from 'react';
import { Link } from 'react-router-dom';

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

    this.setState({ email: '', password: ''})
  }

  handleChange = event => {
    const { value, name } = event.target;
    
    this.setState({ [name] : value})
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
              value={this.state.email}
              placeholder='Ingrese su email...'
              handleChange={this.handleChange}
              required
            />
            <FormInput
              type='password'
              name='password'
              label='Contraseña'
              value={this.state.password}
              placeholder='Ingrese su contraseña...'
              handleChange={this.handleChange}
              required
            />
            <CustomButton type='submit'>Ingresa</CustomButton>
          </form>
          <CustomButton
            secondary
            onClick={signInWithGoogle}
          >Ingresa con Google</CustomButton>
        </div>
        <span className='signup-link'>No tienes una cuenta? <Link to='/signup'>Registrate aquí</Link></span>
      </div>
    );
  }
} 

export default SignInForm;