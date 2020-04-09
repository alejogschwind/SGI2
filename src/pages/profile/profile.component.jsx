import React from 'react';

import Header from '../../components/header/header.component';
import ProfileCard from '../../components/profile-card/profile-card.component';

import './profile.styles.scss';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        id: 1,
        first_name: 'Alejo',
        last_name: 'Gschwind',
        avatar: 'https://www.rotary.org/sites/default/files/styles/w_600/public/Paul%20Harris%201600x1600.jpg?itok=yoT8tu9x',
      }
    }
  }

  render() {
    return (
      <div className="profile">
        <Header avatar={this.state.user.avatar}/>
        <ProfileCard user={this.state.user}/>
      </div>
    );
  }
}

export default Profile;