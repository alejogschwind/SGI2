import React from 'react';
import { connect } from 'react-redux';

import SelectInput from '../select-input/select-input.component';
import CustomButton from '../custom-button/custom-buton.components';
import FormInput from '../form-input/form-input.compoent';

import './contact-form.styles.scss'

import { firestore } from '../../firebase/firebase.utils';
import { addFlashMessage } from '../../redux/flashmessage/flashmessage.action';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      percentage: null,
      fullName: '',
      relation: '',
      phone: '',
    }
  }

  handleSubmit = async event => {
    event.preventDefault()
    await this.setState({percentage: 1, loading:true})
    const { userId } = this.props;
    const contactData = {...this.state};
    delete contactData.loading;
    
    try {
      // await auth.signInWithEmailAndPassword(email, password);
      console.log(firestore.collection('users').doc(userId))
      await firestore.collection('users').doc(userId)
      .update({
        contact: contactData
      })
      
      this.setState({loading: false});
      this.props.addFlashMessage({message: 'Contacto de emergencias actualizado.', type: 'success'})
      
    } catch(err) {
      this.setState({percentage: 0, loading: false})
      this.props.addFlashMessage({message: 'Error actualizando contacto de emergencias.', type: 'error'})
    }

  }

  handleChange = event => {
    const { value, name } = event.target;
    
    this.setState({ [name] : value})
  }

  componentDidMount() {
    this.setState({...this.props.contact})
  }

  render() {
    return (
    <div className="contact-form">
      <form onSubmit={this.handleSubmit}>
        <FormInput
          label='Nombre completo'
          name='fullName'
          placeholder='Ingrese el nombre completo...'
          handleChange={this.handleChange}
          value={this.state.fullName}
          required
        />
        
        <SelectInput
          label='Relacion con su contacto de emergencia'
          name='relation'
          placeholder='Seleccione una opción...'
          handleChange={this.handleChange}
          value={this.state.relation}
          options={[
            'Madre',
            'Padre',
            'Tutor'
          ]}
          required
        />
        
        <FormInput
          label='Telefono'
          name='phone'
          placeholder='Ej: +5492284232823'
          handleChange={this.handleChange}
          value={this.state.phone}
          required
        />

        <CustomButton
          type='submit'
          loading={this.state.loading}
        >Guardar contacto de emergencia</CustomButton>
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

export default connect(mapStateToProps, mapsDispatchToProps)(ContactForm);