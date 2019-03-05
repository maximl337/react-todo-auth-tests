import React, { Component } from 'react';

class EditTodoForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      body: props.todo.body,
      id: props.todo.id
    };
  }

  handleChange = e => {
    this.setState({
      body: e.target.value
    });
  }

  render() {
    const { handleEditTodo } = this.props;
    return (
      <div>
        <input 
          type="text" 
          onChange={this.handleChange} 
          value={this.state.body}
        />
        &nbsp;<button onClick={() => handleEditTodo(this.state.id, this.state)}>Save</button>
      </div>
    );
  }
  
}

export default EditTodoForm;