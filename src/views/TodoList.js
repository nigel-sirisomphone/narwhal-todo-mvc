import React, { Component, PropTypes } from 'react'
import Todo from './Todo'

export default class TodoList extends Component {
  renderMarkAllCompleted() {
    if (this.props.todos.length) return [
        <input
          className="toggle-all"
          key="checkbox"
          type="checkbox"
          checked={this.props.allComplete}
          onChange={(e) => this.props.markAllCompleted(e.target.checked)}
        />,
        <label key="label" htmlFor="toggle-all">Mark all as complete</label>
    ]
  }

  render() {  
    return (
      <section className="main">
        {this.renderMarkAllCompleted()}

        <ul className="todo-list">
          {
            this.props.todos.map(todo => (
                <Todo
                  key={todo.id}
                  onChange={() => this.props.toggleTodo(todo.id)}
                  onDestroy={() => this.props.destroyTodo(todo.id)}
                  onEdit={(text) => this.props.editTodo(todo.id, text)}
                  {...todo}
                />
            ))
          }
        </ul>
      </section>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleTodo: PropTypes.func.isRequired
}