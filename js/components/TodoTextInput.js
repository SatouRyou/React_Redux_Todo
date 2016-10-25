import React, { Component, PropTypes } from 'react';

class TodoTextInput extends Component {
  render() {
    const { placeholder } = this.props;
    return (
      <input
        placeholder={placeholder}
        type="text"
        autoFocuse
      />
    );
  }
}

export default TodoTextInput;
