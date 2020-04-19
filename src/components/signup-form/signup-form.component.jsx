import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import FormInput from '../form-input/form-input.compoent';
import CustomButton from '../custom-button/custom-buton.components';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import './signup-form.styles.scss';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { addFlashMessage } from '../../redux/flashmessage/flashmessage.action';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault()
    this.setState({loading: true})

    const { firstname, lastname, email, password, confirmPassword} = this.state;

    if (password !== confirmPassword) {
      this.props.addFlashMessage({type: 'error', message: 'Passwords don´t match.'})
      this.setState({
        loading: false,
        password: '',
        confirmPassword: ''
      })
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)
      const displayName = `${firstname} ${lastname}`
      console.log(user);
      user.updateProfile({displayName: displayName})

      try {
        await createUserProfileDocument(user,{
          displayName: displayName,
          photoURL: null,
          loginWithGoogle: false,
          profileCompletePercentage: 0,
          personal: {
            percentage: 0.33,
            name: {
              first: firstname,
              last: lastname
            },
            birth: null,
            gender: null,
            passport: null,
            contry: '',
            state: '',
            city: '',
            phone: null
          },
          medical: {
            percentage: 0,
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
          },
          institutional: {
            percentage: 0,
            weel: '',
            district: '',
            club: '',
          },
          contact: {
            percentage: 0,
            fullName: '',
            relation: '',
            phone: ''
          }
        })

        try {
          await user.sendEmailVerification()
          this.props.history.push('/email-verify')
          console.log('We send you a email with a link to verify your account.')
        } catch(err) {
          this.props.addFlashMessage({type: 'error', ...err})
          this.setState({loading: false})
          // console.log('Error sending email verification',err)
        }
      } catch(err) {
        this.props.addFlashMessage({type: 'error', ...err})
        this.setState({loading: false})
        // console.log('Error trying to create user profile',err)
      }
      
    } catch(err) {
      this.props.addFlashMessage({type: 'error', ...err})
      this.setState({loading: false})
      // console.log('Error creating a user with email and password.', err)
    }
  }

  handleChange = event => {
    const { value, name } = event.target;
    
    this.setState({ [name] : value})
  }
  
  render() {
    return (
      <div className='signup-wrapper'>
        <div className="card-signup">
          <h2 className='form-title'></h2>
          <div className='logo'>
            <Logo />
          </div>
          <form onSubmit={this.handleSubmit}>
            <FormInput
              type='text'
              name='firstname'
              label='Nombre'
              placeholder='Ingrese su nombre...'
              value={this.state.firstname}
              handleChange={this.handleChange}
              required
            />
            <FormInput
              type='text'
              name='lastname'
              label='Apellido'
              placeholder='Ingrese su apellido...'
              value={this.state.lastname}
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
            <CustomButton
              type='submit'
              loading={this.state.loading}
            >Registrate</CustomButton>
          </form>
        </div>
        <span className='signin-link'>Ya estas registrado? <Link to='/signin'>Ingresa aquí</Link></span>
      </div>
    );
  }
} 

const mapStateToProps = state => ({

})

const mapsDispatchToProps = dispatch => ({
  addFlashMessage: (message) => dispatch(addFlashMessage(message))
})

export default connect(null, mapsDispatchToProps)(withRouter(SignUpForm));