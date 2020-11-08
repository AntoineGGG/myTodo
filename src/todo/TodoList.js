import React, { Component } from 'react';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      items: [],
    };
  }

  handleChange = (event) => {
    this.setState({ userInput: event.target.value });
  };

  addTodo = (event) => {};

  render() {
    return (
      <div>
        <h1>My TodoList</h1>
        <form>
          <input
            value={this.state.userInput}
            type='text'
            placeholder='Renseigner un item'
            onChange={this.handleChange}
          />
          <button onClick={this.addTodo} type='submit'>
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default TodoList;
