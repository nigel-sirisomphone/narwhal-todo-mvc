import React, { Component, PropTypes } from 'react'

export default class Todo extends Component {
  handleSubmit() {
    const value = this._input.value.trim()

    this.props.onSubmit(value)
  }

  render() {  
    return (
      <div>
        <input
          type="text"
          placeholder="What needs to get done?"
          ref={c => this._input = c}
        />

        <button onClick={() => this.handleSubmit()}>Add</button>
      </div>
    )
  }
}