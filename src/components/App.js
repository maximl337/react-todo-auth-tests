import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Welcome from './Welcome';
import Login from './Login';
import Dashboard from './Dashboard';
import Profile from './Profile';

export default () => {
  return (
    <div>
      <Header />
      <div>
        <Route path="/" exact component={Welcome} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/profile" component={Profile} />
      </div>
    </div>
  );
}
