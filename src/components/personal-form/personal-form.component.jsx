import React from 'react';

import FormInput from '../form-input/form-input.compoent';
import CustomButton from '../custom-button/custom-buton.components';

import './personal-form.styles.scss'

import { firestore } from '../../firebase/firebase.utils';

class PersonalForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      passport: '',
      birth: '',
      gender: '',
      phone: '',
    }
  }

  handleSubmit = async event => {
    event.preventDefault()

    const { firstname, lastname, passport, birth, gender, phone } = this.state;

    const personalData = {
      name: {
        first: firstname,
        last: lastname
      },
      gender,
      passport,
      birth,
      phone,
      percentage: 1
    }
    const displayName = `${firstname.split(' ')[0]} ${lastname[0]}`

    try {
      // await auth.signInWithEmailAndPassword(email, password);
      console.log(firestore.collection('users').doc('0Z4fPXp98Ef3eoQqOPMmzKTeTo43'))
      await firestore.collection('users').doc('0Z4fPXp98Ef3eoQqOPMmzKTeTo43')
        .update({
          displayName: displayName,
          personal: personalData
        })
      
      console.log('Updated')

    } catch(err) {
      console.log('Error updating personal data.', err);
    }

  }

  handleChange = event => {
    const { value, name } = event.target;
    
    this.setState({ [name] : value})
  }

  render() {
    return (
    <div className="personal-form">
      <form onSubmit={this.handleSubmit}>
        <FormInput
          label='Nombre'
          type='text'
          name='firstname'
          placeholder='Ingrese su nombre'
          handleChange={this.handleChange}
          value={this.state.firstname}
          required
        />
        <FormInput
          label='Apellidos'
          type='text'
          name='lastname'
          placeholder='Ingrese sus apellidos'
          handleChange={this.handleChange}
          value={this.state.lastname}
          required
        />
        <FormInput
          label='Documento de Identidad'
          type='text'
          name='passport'
          placeholder='Ingrese su DNI/CI/Pasaporte'
          handleChange={this.handleChange}
          value={this.state.passport}
          required
        />
        <FormInput
          label='Fecha de Nacimiento'
          type='date'
          name='birth'
          placeholder='DD/MM/AA'
          handleChange={this.handleChange}
          value={this.state.birth}
          required
        />
        <FormInput
          label='Sexo'
          type='select'
          name='gender'
          placeholder='Seleccione su sexo'
          handleChange={this.handleChange}
          value={this.state.gender}
          required
        />
        <FormInput
          label='Telefono'
          type='tel'
          name='phone'
          placeholder='Ej: +5492284232823'
          handleChange={this.handleChange}
          value={this.state.phone}
          required
        />

        <CustomButton type='submit'>Guardar datos personales</CustomButton>
      </form>
    </div>
  )}
}

export default PersonalForm;