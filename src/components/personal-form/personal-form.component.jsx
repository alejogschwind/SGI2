import React from 'react';

import InputItem from '../input-item/input-item.compoent';

import './personal-form.styles.scss'

const PersonalForm = () => (
  <div className="personal-form">
    <form>
      <InputItem
        lable='Nombre'
        type='text'
        name='firstname'
        placeholder='Ingrese su nombre'
        required={true}
      />
      <InputItem
        lable='Apellidos'
        type='text'
        name='lastname'
        placeholder='Ingrese sus apellidos'
        required={true}
      />
      <InputItem
        lable='Documento de Identidad'
        type='text'
        name='id-number'
        placeholder='Ingrese su DNI/CI/Pasaporte'
        required={true}
      />
      <InputItem
        lable='Fecha de Nacimiento'
        type='date'
        name='birthdate'
        placeholder='DD/MM/AA'
        required={true}
      />
      <InputItem
        lable='Sexo'
        type='select'
        name='gender'
        placeholder='Seleccione su sexo'
        required={true}
      />
      <InputItem
        lable='Telefono'
        type='tel'
        name='phone'
        placeholder='Ej: +5492284232823'
        required={true}
      />
    </form>
  </div>
);

export default PersonalForm;