import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-buton.components';

import './image-uploader.styles.scss';

import { storage, firestore } from '../../firebase/firebase.utils';
import { addFlashMessage } from '../../redux/flashmessage/flashmessage.action';

class ImageUploader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      image: null,
    }
    this.handelUpload = this.handelUpload.bind(this);
  }

  handelChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState({image})
    }
  }

  handelUpload = async () => {
    const { image } = this.state;
    if (!image) return;
    const uploadTask = storage.ref(`profile-photos/${image.name}`).put(image);
    const { userId } = this.props;
    
    uploadTask.on('state_changed',
      (snapshot) => {
        // progress func
      },
      (err) => {
        console.log(err)
      },
      async () => {
        const url = await storage.ref('profile-photos').child(image.name).getDownloadURL()
        console.log(url);
        try {
          // Updating photo url
          await firestore.collection('users').doc(userId)
            .update({
              photoURL: url
            })
          
          this.props.addFlashMessage({message: 'Foto de perfil actualizada.', type: 'success'})
          
        } catch(err) {
          this.props.addFlashMessage({message: 'Error actualizando foto de perfil.', type: 'error'})
        }
      }
    )
  }

  render() {
    return (
      <div className='image-uploader'>
        <input type='file' onChange={this.handelChange}/>
        <CustomButton onClick={this.handelUpload}>Guardar Imagen</CustomButton>
      </div>
    )
  }
}

// const mapStateToProps = state => ({
//   userId: state.user.currentUser.id
// })

const mapsDispatchToProps = dispatch => ({
  addFlashMessage: (message) => dispatch(addFlashMessage(message))
})

export default connect(null, mapsDispatchToProps)(ImageUploader);