import React, { Component } from 'react';
import requireAuth from './requireAuth';

class Profile extends Component {
  render() {
    return (
      <div>
        <h3>This is my profile. Authenticated users only!</h3>
      </div>
    );  
  }
}

export default requireAuth()(Profile);