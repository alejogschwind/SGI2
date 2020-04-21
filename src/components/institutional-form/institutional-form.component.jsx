import React from 'react';
import { connect } from 'react-redux';

import SelectInput from '../select-input/select-input.component';
import CustomButton from '../custom-button/custom-buton.components';

import './institutional-form.styles.scss'

import clubData from './clubsData';
import { firestore } from '../../firebase/firebase.utils';
import { addFlashMessage } from '../../redux/flashmessage/flashmessage.action';

class InstitutionalForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      percentage: null,
      weel: '',
      club: '',
      district: '',
    }
  }

  handleSubmit = async event => {
    event.preventDefault()
    await this.setState({percentage: 1, loading: true})
    const { userId } = this.props;
    const institutionalData = {...this.state};
    delete institutionalData.loading;

    try {
      await firestore.collection('users').doc(userId)
      .update({
        institutional: institutionalData
      })
      
      this.setState({loading: false})
      this.props.addFlashMessage({message: 'Datos institucionales actualizados.', type: 'success'})
      
    } catch(err) {
      this.setState({percentage: 0, loading: false})
      this.props.addFlashMessage({message: 'Error actualizando datos institucionales.', type: 'error'})
    }

  }

  handleChange = event => {
    const { value, name } = event.target;
    
    this.setState({ [name] : value})
  }

  componentDidMount() {
    this.setState({...this.props.institutional})
  }

  render() {
    return (
    <div className="institutional-form">
      <form onSubmit={this.handleSubmit}>
        <SelectInput
          label='Rueda Rotaria'
          name='weel'
          placeholder='Seleccione una opción...'
          handleChange={this.handleChange}
          value={this.state.weel}
          options={[
            'Rotaract',
            'Interact',
            'Rotary'
          ]}
          required
        />
        
        <SelectInput
          label='Distrito'
          name='district'
          placeholder='Seleccione su distrito...'
          handleChange={this.handleChange}
          value={this.state.district}
          options={[
            'Otro',
            '4845',
            '4851',
            '4895',
            '4905',
            '4921',
            '4945',
            '4875',
          ]}
          required
        />
        
        <SelectInput
          label='Club'
          name='club'
          placeholder='Seleccione su club...'
          handleChange={this.handleChange}
          value={this.state.club}
          options={clubData}
          required
        />

        <CustomButton
          type='submit'
          loading={this.state.loading}
        >Guardar datos institucionales</CustomButton>
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

export default connect(mapStateToProps, mapsDispatchToProps)(InstitutionalForm);