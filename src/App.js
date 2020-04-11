import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import SignIn from './pages/sign-in/signin.component';
import Profile from './pages/profile/profile.component';
import PersonalData from './pages/personal-data/personal-data.component';
import './App.css';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log(this.state)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/login' component={SignIn} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/profile/personal' component={PersonalData} />
        </Switch>
      </div>
    );
  }
}

export default App;
