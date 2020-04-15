import React from 'react';
// import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-buton.components';

import './image-uploader.styles.scss';

import { storage, firestore } from '../../firebase/firebase.utils';

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
          
          console.log('Updated profile photo')
    
        } catch(err) {
            console.log('Error updating profile photo.', err);
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

export default ImageUploader;