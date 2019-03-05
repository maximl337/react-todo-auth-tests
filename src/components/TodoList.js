import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid/v1';
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

  handleEditTodo = (todoId, todo) => {
    this.props.editTodo(todoId, todo);
  }

  handleAddTodo = (todo) => {
    const todoId = uuidv1();
    this.props.addTodo(todo, todoId);
    this.toggleAddTodo();
  }

  renderShowAddTodoButton = () => {
    if(!this.state.showAddTodo) {
      return <button id="show_addtodo_button" onClick={() => this.toggleAddTodo()}>Add new todo</button>;
    }
  }

  render() {
    const { todos } = this.props;
    return (
      <div>
        {this.renderShowAddTodoButton()}
        {this.state.showAddTodo && <TodoForm handleAddTodo={this.handleAddTodo} />}
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