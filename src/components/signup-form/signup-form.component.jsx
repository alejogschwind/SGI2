import React from 'react';
import { Link } from 'react-router-dom';

import FormInput from '../form-input/form-input.compoent';
import CustomButton from '../custom-button/custom-buton.components';
import './signup-form.styles.scss';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault()

    this.setState({
      name: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
  }

  handleChange = event => {
    const { value, name } = event.target;
    
    this.setState({ [name] : value})
  }
  
  render() {
    return (
      <div className='signup-wrapper'>
        <div className="card-signup">
          <h2 className='form-title'>Registrate al nuevo <br /> SGI2.0</h2>
          <form onSubmit={this.handleSubmit}>
            <FormInput
              type='text'
              name='name'
              label='Nombre'
              placeholder='Ingrese su nombre...'
              value={this.state.name}
              handleChange={this.handleChange}
              required
            />
            <FormInput
              type='text'
              name='lastName'
              label='Apellido'
              placeholder='Ingrese su apellido...'
              value={this.state.lastName}
              handleChange={this.handleChange}
              required
            />
            <FormInput
              type='text'
              name='email'
              label='Email'
              placeholder='Ingrese su email...'
              value={this.state.email}
              handleChange={this.handleChange}
              required
            />
            <FormInput
              type='password'
              name='password'
              label='Contraseña'
              placeholder='Ingrese su contraseña...'
              value={this.state.password}
              handleChange={this.handleChange}
              required
            />
            <FormInput
              type='password'
              name='confirmPassword'
              label='Confirme la contraseña'
              placeholder='Confirme su contraseña...'
              value={this.state.confirmPassword}
              handleChange={this.handleChange}
              required
            />
            <CustomButton type='submit'>Registrate</CustomButton>
          </form>
        </div>
        <span className='signin-link'>Ya estas registrado? <Link to='/signin'>Ingresa aquí</Link></span>
      </div>
    );
  }
} 

export default SignUpForm;