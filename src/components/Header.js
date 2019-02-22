import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';

class Header extends Component {

  renderAuthButtons() {
    return !this.props.auth.token
      ? <Link to="/login">Login</Link>
      : <button onClick={() => this.props.logout()}>Logout</button>
  }
  render() {
    return (
      <div>
        <ul>
          <Link to="/">Home</Link>&nbsp;
          <Link to="/dashboard">Dashboard</Link>&nbsp;
          <Link to="/profile">Profile</Link>&nbsp;
          {this.renderAuthButtons()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  auth
});

export default connect(mapStateToProps, actions)(Header);