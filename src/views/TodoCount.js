import React from 'react'

export default function TodoFooter(props) {
  const todosRemaining = props.todos.filter(todo => !todo.completed)
  const plural = todosRemaining.length !== 1 ? 'items' : 'item'

  return (
    <span className="todo-count">
      <strong>{todosRemaining.length}</strong> {plural} left
    </span>
  )
}