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

  handleEditTodo = (todoId, todoBody) => {
    this.props.onEditTodo(todoId, todoBody);
    this.toggleEditForm();
  }

  renderTodoItem = () => {
    const { todo, onDelete } = this.props;
    const todoBody = todo.body;
    if(!this.state.showEditForm) {
      return (
        <div>
          <strong 
          class={todo.done ? 'done' : ''}
          >{todoBody}</strong>
          &nbsp;<button onClick={() => onDelete(todo)}>x</button>
          &nbsp;<button onClick={() => this.toggleEditForm()}>edit</button>
          &nbsp;<button>done</button>
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