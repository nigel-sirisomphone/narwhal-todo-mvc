import React, { Component } from 'react'

export default class ClearCompleted extends Component {
  render() {
    let button = null
    const todosCompleted = this.props.todos.filter(todo => todo.completed)

    if (todosCompleted.length) button = (
      <button
        className="clear-completed"
        onClick={this.props.onClick}>

        Clear completed
      </button>
    )

    return button
  }
}