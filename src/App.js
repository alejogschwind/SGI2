import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import SignIn from './pages/sign-in/signin.component';
import SignUp from './pages/sign-up/sign-up.component';
import Profile from './pages/profile/profile.component';
import PersonalData from './pages/personal-data/personal-data.component';
import './App.css';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.action';
import requiredAuth from './routerProtector';
import Layout from './components/layout/layout.component';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    }
  }
  unsubscribeFromAuth = null

  componentWillMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        await userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
        });

      } else {
        await setCurrentUser({ userAuth })
      }
      setTimeout(async() => {
        await this.setState({loading: false})
      }, 1000)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        {
          !loading ?
          <Switch>
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/signup' component={SignUp} />
            <Layout>
              <Route exact path='/' component={requiredAuth(HomePage)} />
              <Route exact path='/profile' component={requiredAuth(Profile)} />
              <Route exact path='/profile/personal' component={requiredAuth(PersonalData)} />
            </Layout>
          </Switch>
          :
          'Loading..'
        }
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
