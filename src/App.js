import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import SignIn from './pages/sign-in/signin.component';
import Profile from './pages/profile/profile.component';
import PersonalData from './pages/personal-data/personal-data.component';
import './App.css';

function App() {
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

export default App;
