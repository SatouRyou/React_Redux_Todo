import React, { Component } from 'react';
import TodoTextInput from './TodoTextInput';

class TodoItem extends Component {
  render() {
    const { todo } = this.props;
    return (
      <div className="view">
        <label>
          {todo.text}
        </label>
        <button className="destroy" />
      </div>
    );
  }
}
export default TodoItem;
