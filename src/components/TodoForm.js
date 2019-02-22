import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import uuidv1 from 'uuid/v1';
import * as actions from '../actions';

class TodoForm extends Component {

  onSubmit = (formProps) => {
    const { todo } = formProps;
    const todoId = uuidv1();

    this.props.addTodo(todo, todoId);
    this.props.handleAddTodo();
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            name="todo"
            type="text"
            component="input"
            autoComplete="none"
          />
          <button>
            Add todo
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ todos }) {
  return {
    todos
  }
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({'form': 'todo'})
)(TodoForm);