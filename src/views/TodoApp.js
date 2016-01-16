import React, { Component, PropTypes } from 'react'
import { addTodo, completeTodo } from '../actions'
import TodoList from './TodoList'
import AddTodo from './AddTodo'

export default class TodoApp extends Component {
  render() {
    const {dispatch} = this.props

    return (
      <div>
        <h1>Todo</h1>

        <TodoList
          todos={this.props.todos}
          onTodoClick={id => dispatch(completeTodo(id))}
        />

        <AddTodo onSubmit={text => dispatch(addTodo(text))}/>
      </div>
    )
  }
}

TodoApp.propTypes = {
  todos: PropTypes.array
}