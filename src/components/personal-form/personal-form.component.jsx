import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.compoent';
import SelectInput from '../select-input/select-input.component';
import CustomButton from '../custom-button/custom-buton.components';

import './personal-form.styles.scss'

import { firestore } from '../../firebase/firebase.utils';
import { addFlashMessage } from '../../redux/flashmessage/flashmessage.action';

class PersonalForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
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
    this.setState({loading: true})
    const { firstname, lastname, passport, birth, gender, phone } = this.state;
    const { userId } = this.props;

    const personalData = {
      name: {
        first: firstname,
        last: lastname
      },
      gender: gender,
      passport: passport,
      birth: birth,
      phone: phone,
      percentage: 1
    }
    const displayName = `${firstname} ${lastname}`

    try {
      // await auth.signInWithEmailAndPassword(email, password);
      console.log(firestore.collection('users').doc(userId))
      await firestore.collection('users').doc(userId)
        .update({
          displayName: displayName,
          personal: personalData
        })
      
      this.setState({loading: false})
      this.props.addFlashMessage({message: 'Datos personales actualizados.', type: 'success'})
      
    } catch(err) {
      this.setState({loading: false})
      this.props.addFlashMessage({message: 'Error actualizando los datos personales.', type: 'error'})
      // console.log('Error updating personal data.', err);
    }

  }

  handleChange = event => {
    const { value, name } = event.target;
    
    this.setState({ [name] : value})
  }

  componentDidMount() {
    const { first, last } = this.props.personal.name;
    const { passport, birth, gender, phone } = this.props.personal;
    this.setState({
      firstname: first ? first : '',
      lastname: last ? last : '',
      passport: passport ? passport : '',
      birth: birth ? birth : undefined,
      gender: gender ? gender: '',
      phone: phone ? phone : ''
    })
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

        <SelectInput
          label='Sexo'
          name='gender'
          placeholder='Seleccione su sexo'
          handleChange={this.handleChange}
          options={[
            'Femenino',
            'Masculino',
            'Otro'
          ]}
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

        <CustomButton
          type='submit'
          loading={this.state.loading}
        >Guardar datos personales</CustomButton>
      </form>
    </div>
  )}
}

const mapStateToProps = state => ({
  userId: state.user.currentUser.id
})

const mapsDispatchToProps = dispatch => ({
  addFlashMessage: (message) => dispatch(addFlashMessage(message))
})

export default connect(mapStateToProps, mapsDispatchToProps)(PersonalForm);