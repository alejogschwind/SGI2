import React, { Component } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from './firebase/firebase.utils';


export default function(ComposedComponent) {
  class Authenticate extends React.Component {
    componentWillMount() {
      if (!auth) {
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
    return {
      // isAuth: (state.user.currentUser != null),
      // userId: state.user.currentUser.id
    }
  }

  return connect(mapStateToProps)(withRouter(Authenticate));
}