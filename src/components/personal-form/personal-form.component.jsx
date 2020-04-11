import React from 'react';

import FormInput from '../form-input/form-input.compoent';

import './personal-form.styles.scss'

const PersonalForm = () => (
  <div className="personal-form">
    <form>
      <FormInput
        label='Nombre'
        type='text'
        name='firstname'
        placeholder='Ingrese su nombre'
        required={true}
      />
      <FormInput
        label='Apellidos'
        type='text'
        name='lastname'
        placeholder='Ingrese sus apellidos'
        required={true}
      />
      <FormInput
        label='Documento de Identidad'
        type='text'
        name='id-number'
        placeholder='Ingrese su DNI/CI/Pasaporte'
        required={true}
      />
      <FormInput
        label='Fecha de Nacimiento'
        type='date'
        name='birthdate'
        placeholder='DD/MM/AA'
        required={true}
      />
      <FormInput
        label='Sexo'
        type='select'
        name='gender'
        placeholder='Seleccione su sexo'
        required={true}
      />
      <FormInput
        label='Telefono'
        type='tel'
        name='phone'
        placeholder='Ej: +5492284232823'
        required={true}
      />
    </form>
  </div>
);

export default PersonalForm;