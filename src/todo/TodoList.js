import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import './TodoList';

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

  addTodo = (event) => {
    event.preventDefault();
    this.setState({
      userInput: '',
      items: [...this.state.items, this.state.userInput],
    });
  };

  showTodo = () => {
    return this.state.items.map((value) => {
      return (
        <div>
          <div className='list-group-item' key={value}>
            {value} |{' '}
          </div>
          <Button
            variant='contained'
            color='secondary'
            onClick={this.deleteTasks}
          >
            X
          </Button>
        </div>
      );
    });
  };

  deleteTasks = (event) => {
    event.preventDefault();
    let filteredArray = this.state.items;
    const index = filteredArray.indexOf(event.target.value);
    filteredArray.splice(index, 1);
    this.setState({
      items: filteredArray,
    });
  };

  render() {
    return (
      <div>
        <h1 align='center'>My TodoList</h1>
        <form className='form-row align-items-center'>
          <input
            className='form-control mb-2'
            value={this.state.userInput}
            type='text'
            placeholder='Renseigner un item'
            onChange={this.handleChange}
          />
          <Button
            variant='contained'
            color='primary'
            onClick={this.addTodo}
            type='submit'
          >
            Add
          </Button>
        </form>
        <div className='List-group'>{this.showTodo()}</div>
      </div>
    );
  }
}

export default TodoList;
