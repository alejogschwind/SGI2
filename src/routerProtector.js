import React, { Component } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from './firebase/firebase.utils';


export default function(ComposedComponent) {
  class Authenticate extends React.Component {
    componentDidMount() {
      // console.log(auth.currentUser);
      if (!this.props.isAuth) {
        this.props.history.push('/signin')
      }
    }
    
    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  function mapStateToProps(state) {
    console.log(state.user.currentUser)
    return {
      isAuth: (state.user.currentUser),
      // userId: state.user.currentUser.id
    }
  }

  return connect(mapStateToProps)(withRouter(Authenticate));
}