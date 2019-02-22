import React, { Component } from 'react';
import { connect } from 'react-redux';

export default () => (ChildComponent) => {

  class WrappedComponent extends Component {

    checkAuth() {
      if(this.props.auth.token) {
        this.props.history.push('/dashboard');
      }
    }

    componentDidMount() {
      this.checkAuth();
    }

    componentDidUpdate() {
      this.checkAuth();
    }

    render() {
      return <ChildComponent {...this.props} />
    }
  }

  const mapStateToprops = ({ auth }) => {
    return { 
      auth
    }
  }

  return connect(mapStateToprops)(WrappedComponent);
}