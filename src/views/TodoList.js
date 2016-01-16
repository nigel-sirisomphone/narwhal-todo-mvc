import React, { Component, PropTypes } from 'react'
import Todo from './Todo'

export default class TodoList extends Component {
  render() {  
    return (
      <ul>
        {
          this.props.todos.map(todo => (
              <Todo
                key={todo.id}
                onClick={() => this.props.onTodoClick(todo.id)}
                {...todo}
              />
          ))
        }
      </ul>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onTodoClick: PropTypes.func.isRequired
}