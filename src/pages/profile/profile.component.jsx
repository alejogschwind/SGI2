import React from 'react';
import { connect } from 'react-redux';

import ProfileCard from '../../components/profile-card/profile-card.component';
import ImageUploader from '../../components/image-uploader/image-uploader.component';
import withLoading from '../../HOCs/withLoading';
import './profile.styles.scss';
import { addFlashMessage, deleteFlashMessages } from '../../redux/flashmessage/flashmessage.action';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      currentUser: null
    }
  }
  
  componentDidMount() {
    this.props.deleteFlashMessages();
    const { currentUser } = this.props;
    if (currentUser) {
      this.setState({currentUser: currentUser, loading: false})
    }
  }

  render() {
    const { currentUser, loading } = this.state;
    return (
      <div className="profile">
        <ProfileCard history={this.props.history}/>
        {/* { !loading ?
            <ImageUploader userId={this.state.currentUser.id}/>
          :
            ''
        } */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
  addFlashMessage: (message) => dispatch(addFlashMessage(message)),
  deleteFlashMessages: () => dispatch(deleteFlashMessages())
})

export default  withLoading(connect(mapStateToProps, mapDispatchToProps)(Profile));