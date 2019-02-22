import React, { Component } from 'react';

class EditTodoForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todoBody: props.todo.body,
      todoId: props.todo.id
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      todoBody: e.target.value
    });
  }

  render() {
    const { handleEditTodo } = this.props;
    return (
      <div>
        <input 
          type="text" 
          onChange={this.handleChange} 
          value={this.state.todoBody} 
        />
        &nbsp;<button onClick={() => handleEditTodo(this.state.todoId, this.state.todoBody)}>Save</button>
      </div>
    );
  }
  
}

export default EditTodoForm;