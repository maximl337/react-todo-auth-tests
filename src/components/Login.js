import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from '../actions'
import guestOnly from './guestOnly';

class Login extends Component {

  onSubmit = (formProps) => {
    this.props.login(formProps, () => {
      if(!this.props.auth.errorMessage) {
        this.props.history.push(
          this.props.prevPath
        );  
      }
    });
  }

  render() {
    // handleSubmit is coming from redux-form
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field
            name="email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field
            name="password"
            type="password"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <div>{this.props.auth.errorMessage}</div>
        <button>Sign In!</button>
      </form>
    );
  }
}

function mapStateToProps({ auth, prevPath }) {
  return {
    auth,
    prevPath
  }
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'login'}),
  guestOnly(),
)(Login);