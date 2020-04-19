import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.compoent';
import SelectInput from '../select-input/select-input.component';
import CustomButton from '../custom-button/custom-buton.components';

import './medical-form.styles.scss'

import { firestore } from '../../firebase/firebase.utils';
import { addFlashMessage } from '../../redux/flashmessage/flashmessage.action';

class MedicalForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      percentage: null,
      healthInsurance: '',
      affiliateNumber: '',
      bloodType: '',
      havePeriodicTreatment: '',
      obsPeriodicTreatment: '',
      haveAllergy: '',
      obsAllergy: '',
      haveSpecialDiet: '',
      obsSpecialDiet: '',
      haveSurgery: '',
      obsSurgery: '',
      takeMedication: '',
      obsMedication: '',
      havePhysicalLimitations: '',
      obsPhysicalLimitations: '',
      obsMedicalData: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault()
    await this.setState({percentage: 1, loading: true})
    const { userId } = this.props;
    const medicalData = {...this.state};
    delete medicalData.loading;
    
    try {
      console.log(firestore.collection('users').doc(userId))
      await firestore.collection('users').doc(userId)
      .update({
        medical: medicalData
      })
      
      this.setState({loading: false})
      this.props.addFlashMessage({message: 'Datos Medicos Actualizdos.', type:'success'})
      
    } catch(err) {
      this.setState({percentage: 0, loading: false})
      this.props.addFlashMessage({message: 'Error actualizando los datos medicos.', type:'error'})
    }

  }

  handleChange = event => {
    const { value, name } = event.target;
    
    this.setState({ [name] : value})
  }

  componentDidMount() {
    this.setState({...this.props.medical})
  }

  render() {
    return (
    <div className="medical-form">
      <form onSubmit={this.handleSubmit}>
        <FormInput
          label='Obra social'
          type='text'
          name='healthInsurance'
          placeholder='Ingrese su obra social...'
          handleChange={this.handleChange}
          value={this.state.healthInsurance}
          required
        />
        <FormInput
          label='Numero de Afiliado'
          type='text'
          name='affiliateNumber'
          placeholder='Ingrese su numero de afiliado...'
          handleChange={this.handleChange}
          value={this.state.affiliateNumber}
          required
        />
        <SelectInput
          label='Tipo de Sangre'
          name='bloodType'
          placeholder='Seleccione su tipo de sangre...'
          handleChange={this.handleChange}
          value={this.state.bloodType}
          options={[
            'A+',
            'A-',
            'B+',
            'B-',
            'AB+',
            'AB-',
            '0+',
            '0-'
          ]}
          required
        />

        <SelectInput
          label='¿Tienes un tratamiento periodico?'
          name='havePeriodicTreatment'
          placeholder='Seleccione una opción...'
          handleChange={this.handleChange}
          value={this.state.havePeriodicTreatment}
          options={[
            'No',
            'Si'
          ]}
          required
        />
        {
          this.state.havePeriodicTreatment == 'Si' &&
          <FormInput
            label='Información addicional:'
            type='text'
            name='obsPeriodicTreatment'
            placeholder='Detalles sobre tratamiento periodico...'
            handleChange={this.handleChange}
            value={this.state.obsPeriodicTreatment}
            required
          />
        }

        <SelectInput
          label='¿Tienes alergias?'
          name='haveAllergy'
          placeholder='Seleccione una opción...'
          handleChange={this.handleChange}
          value={this.state.haveAllergy}
          options={[
            'No',
            'Si'
          ]}
          required
        />
        {
          this.state.haveAllergy == 'Si' &&
          <FormInput
            label='Información addicional:'
            type='text'
            name='obsAllergy'
            placeholder='Detalles sobre su alergia...'
            handleChange={this.handleChange}
            value={this.state.obsAllergy}
            required
          />
        }
        
        <SelectInput
          label='¿Tienes una dieta especial?'
          name='haveSpecialDiet'
          placeholder='Seleccione una opción'
          handleChange={this.handleChange}
          value={this.state.haveSpecialDiet}
          options={[
            'No',
            'Si'
          ]}
          required
        />
        {
          this.state.haveSpecialDiet == 'Si' &&
          <SelectInput
            label='Seleccion su dieta especial:'
            type='text'
            name='obsSpecialDiet'
            placeholder='Seleccione una opción...'
            handleChange={this.handleChange}
            value={this.state.obsSpecialDiet}
            options={[
              'Sin Sal',
              'Diabetico',
              'Sin Gluten'
            ]}
            required
          />
        }
        
        <SelectInput
          label='¿Tiene cirugias?'
          name='haveSurgery'
          placeholder='Seleccione una opción...'
          handleChange={this.handleChange}
          value={this.state.haveSurgery}
          options={[
            'No',
            'Si'
          ]}
          required
        />
        {
          this.state.haveSurgery == 'Si' &&
          <FormInput
            label='Información addicional:'
            type='text'
            name='obsSurgery'
            placeholder='Detalles sobre sus cirugias...'
            handleChange={this.handleChange}
            value={this.state.obsSurgery}
            required
          />
        }
        
        <SelectInput
          label='¿Toma medicación?'
          name='takeMedication'
          placeholder='Seleccione una opción...'
          handleChange={this.handleChange}
          value={this.state.takeMedication}
          options={[
            'No',
            'Si'
          ]}
          required
        />
        {
          this.state.takeMedication == 'Si' &&
          <FormInput
            label='Información addicional:'
            type='text'
            name='obsMedication'
            placeholder='Detalles sobre su medicación...'
            handleChange={this.handleChange}
            value={this.state.obsMedication}
            required
          />
        }
        
        <SelectInput
          label='¿Tiene una limitación fisica?'
          name='havePhysicalLimitations'
          placeholder='Seleccione una opción...'
          handleChange={this.handleChange}
          value={this.state.havePhysicalLimitations}
          options={[
            'No',
            'Si'
          ]}
          required
        />
        {
          this.state.havePhysicalLimitations == 'Si' &&
          <FormInput
            label='Información addicional:'
            type='text'
            name='obsPhysicalLimitations'
            placeholder='Detalles sobre su limitación fisica...'
            handleChange={this.handleChange}
            value={this.state.obsPhysicalLimitations}
            required
          />
        }

        <FormInput
          label='Información addicional general (opcional):'
          type='text'
          name='obsMedicalData'
          placeholder='Informacion de relevancia...'
          handleChange={this.handleChange}
          value={this.state.obsMedicalData}
        />

        <CustomButton
          type='submit'
          loading={this.state.loading}
        >Guardar datos medicos</CustomButton>
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

export default connect(mapStateToProps, mapsDispatchToProps)(MedicalForm);