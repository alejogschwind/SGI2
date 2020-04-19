import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


export default function(ComposedComponent) {
  class Authenticate extends React.Component {
    componentDidMount() {
      console.log(this.props);
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
    return {
      isAuth: !!(state.user.currentUser),
    }
  }

  return connect(mapStateToProps)(withRouter(Authenticate));
}