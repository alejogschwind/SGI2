import React from 'react';
import { connect } from 'react-redux';

import Header from '../../components/header/header.component';
import ProfileCard from '../../components/profile-card/profile-card.component';
import ImageUploader from '../../components/image-uploader/image-uploader.component';

import './profile.styles.scss';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      currentUser: null
    }
  }
  
  componentDidMount() {
    const { currentUser } = this.props;
    if (currentUser) {
      this.setState({currentUser: currentUser, loading: false})
    }
  }

  render() {
    const { currentUser, loading } = this.state;
    return (
      <div className="profile">
        <Header />
        <ProfileCard history={this.props.history}/>
        { !loading ?
            <ImageUploader userId={this.state.currentUser.id}/>
          :
            ''
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Profile);