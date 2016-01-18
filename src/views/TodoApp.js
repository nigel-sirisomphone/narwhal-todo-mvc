import React, { Component, PropTypes } from 'react'
import { addTodo, completeTodo, destroyTodo, editTodo, markAllCompleted, clearCompleted, changeFilter } from '../actions'
import { FILTERS } from '../constants'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'

function getTodosByFilter(todos, filter) {
  switch (filter) {
    case (FILTERS.SHOW_COMPLETED):
      return todos.filter(todo => todo.completed)

    case (FILTERS.SHOW_ACTIVE):
      return todos.filter(todo => !todo.completed)

    default:
      return todos
  }
}

export default class TodoApp extends Component {
  render() {
    const {dispatch, filter, allCompleted, todos} = this.props
    const visibleTodos = getTodosByFilter(todos, filter)

    const todoListActions = {
      markAllCompleted: (isSelected) => dispatch(markAllCompleted(isSelected)),
      toggleTodo: id => dispatch(completeTodo(id)),
      editTodo: (id, text) => dispatch(editTodo(id, text)),
      destroyTodo: id => dispatch(destroyTodo(id))
    }

    return (
      <div>
        <AddTodo onSubmit={text => dispatch(addTodo(text))} />

        <TodoList
          todos={visibleTodos}
          allCompleted={allCompleted}
          {...todoListActions}
        />

        <TodoFooter
          todos={todos}
          clearCompleted={() => dispatch(clearCompleted())}
          filter={filter}
          changeFilter={(nextFilter) => dispatch(changeFilter(nextFilter))}
        />
      </div>
    )
  }
}

TodoApp.propTypes = {
  todos: PropTypes.array,
  filter: PropTypes.string,
  allCompleted: PropTypes.bool,
  dispatch: PropTypes.func
}
