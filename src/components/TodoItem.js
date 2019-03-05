import React, { Component } from 'react';
import EditTodoForm from './EditTodoForm';
import './styles/todo.css';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditForm: false,
    }
  }

  toggleEditForm = () => {
    this.setState({
      ...this.state,
      showEditForm: !this.state.showEditForm,
    })
  }

  handleEditTodo = (todoId, todo) => {
    this.props.onEditTodo(todoId, todo);
    this.toggleEditForm();
  }

  toggleDone = () => {
    const { id, done } = this.props.todo;
    this.props.onEditTodo(id, {
      done: !done
    });
  }

  renderTodoItem = () => {
    const { todo, onDelete } = this.props;
    const todoBody = todo.body;
    if(!this.state.showEditForm) {
      return (
        <div>
          <strong 
          className={todo.done ? 'done' : ''}
          >{todoBody}</strong>
          <button id="delete_button" onClick={() => onDelete(todo)}>x</button>
          <button id="edit_button" onClick={() => this.toggleEditForm()}>edit</button>
          <button id="done_button" onClick={() => this.toggleDone()}>
            {todo.done ? 'undo' : 'Mark as done'}
          </button>
        </div>
      );
    }
  }

  render() {
    const { todo } = this.props;
    return (
      <li>
        {this.renderTodoItem()}
        {this.state.showEditForm && <EditTodoForm handleEditTodo={this.handleEditTodo} todo={todo} />}
        <br />
      </li>
    );  
  }
}

export default TodoItem;