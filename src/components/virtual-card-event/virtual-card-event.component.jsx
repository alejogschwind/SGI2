import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-buton.components';
import DataBox from '../data-box/data-box.component';
import {ReactComponent as InfinityIcon} from './assets/infinity.svg';

import './virtual-card-event.styles.scss'
import { addFlashMessage } from '../../redux/flashmessage/flashmessage.action';
import { firestore } from '../../firebase/firebase.utils';
import firebase from 'firebase';

class VirtualCardEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userIsInscript: true
    }

    this.handleInscription = this.handleInscription.bind(this);
  }

  async handleInscription() {
    // If user allready inscript return
    if (this.state.userIsInscript) return

    const inscriptionsSnapshot = await firestore.collection(`events/${this.props.id}/inscriptions`)
    const userRef = await firestore.doc(`users/${this.props.userId}`)
    await inscriptionsSnapshot.add({
      user: userRef
    })

    this.setState({userIsInscript: true});
    this.props.addFlashMessage({message: 'Solicitud de inscripción enviada.', type: 'success'})


  }

  async componentDidMount() {
    const inscriptionsSnapshot = await firestore.collection(`events/${this.props.id}/inscriptions`)
    const userRef = await firestore.doc(`users/${this.props.userId}`)

    const userInscription = await inscriptionsSnapshot.where('user', '==', userRef).get()
    await this.setState({ userIsInscript: !!(userInscription.docs[0])})
  }


  render() {
    return (
      <div className="virtual-card-event">
        <div className="image-wrapper">
          <img src={this.props.imageURL} className="image" alt={this.props.name}/>
        </div>
        <div className="box-data-list">
          <DataBox lable={"Fecha:"}>26 de marzo</DataBox>
          <DataBox lable={"Hora:"}>17hs</DataBox>
          <DataBox lable={"Cupos:"}>{this.props.withLimit ? this.props.limit : <InfinityIcon />}</DataBox>
          <DataBox lable={"Medio:"}>{this.props.plataform}</DataBox>
        </div>
        <div className="button-wrapper">
          {
            this.state.userIsInscript ?
            <CustomButton disabled>Ya estas inscripto!</CustomButton>
            :
            <CustomButton onClick={this.handleInscription}>Inscribirse</CustomButton>
          }
          <div className="avatar-list"></div>
        </div>
      </div>
    );
  }
} 

const mapStateToProps = state => ({
  userId: state.user.currentUser.id
});

const mapDispatchToProps = dispatch => ({
  addFlashMessage: message => dispatch(addFlashMessage(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(VirtualCardEvent);