import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import * as actions from '../actions';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showAddTodo: false
    };
  }


  toggleAddTodo = () => {
    this.setState({
      ...this.state,
      showAddTodo: !this.state.showAddTodo
    });
  }

  handleDeleteTodo = (todo) => {
    this.props.removeTodo(todo.id);
  }

  handleEditTodo = (todoId, todoBody) => {
    this.props.editTodo(todoId, todoBody);
  }

  renderShowAddTodoButton = () => {
    if(!this.state.showAddTodo) {
      return <button onClick={() => this.toggleAddTodo()}>Add new todo</button>;
    }
  }

  render() {
    const { todos } = this.props;
    return (
      <div>
        {this.renderShowAddTodoButton()}
        {this.state.showAddTodo && <TodoForm handleAddTodo={this.toggleAddTodo} />}
        <hr />
        <ul>
          {todos.map((todo, i) => 
            <TodoItem 
              onDelete={this.handleDeleteTodo} 
              key={todo.id} 
              todo={todo} 
              onEditTodo={this.handleEditTodo}
            />
          )}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ todos }) {
  return {
    todos
  }
}

export default connect(mapStateToProps, actions)(TodoList);