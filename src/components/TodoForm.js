import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

export class TodoForm extends Component {

  onSubmit = (formProps) => {
    const { todo } = formProps;
    this.props.handleAddTodo(todo);
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

export default reduxForm({'form': 'todo'})(TodoForm);