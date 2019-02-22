import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

export default () => (ChildComponent) => {
  class WrappedComponent extends Component {
    checkAuth() {
      this.props.storePrevPath(this.props.pathname);
      if(!this.props.auth.token) {
        this.props.history.push('/login');
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

  const mapStateToProps = ({ auth, router }) => {
    return {
      auth,
      pathname: router.location.pathname
    }
  }

  return connect(mapStateToProps, actions)(WrappedComponent);
}