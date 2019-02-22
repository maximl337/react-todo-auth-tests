import React, { Component } from 'react';
import requireAuth from './requireAuth';
import TodoList from './TodoList';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h2>Todos</h2>
        <TodoList />
      </div>
    );
  }
} // EO Dashboard

export default requireAuth()(Dashboard);