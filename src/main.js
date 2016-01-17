import React from 'react'
import ReactDOM from 'react-dom'
import TodoApp from './views/TodoApp'
import { FILTERS } from './constants'
import { createStore } from 'narwhal'
import { NarwhalBinder } from 'narwhal/react'
import { addTodo } from './actions'
import handler from './actionHandler'

let data = {
  todos: [],
  allComplete: false,
  filter: FILTERS.SHOW_ALL
}

const store = createStore(data, handler)

ReactDOM.render(
  <NarwhalBinder store={store}>
    <TodoApp />
  </NarwhalBinder>,
  document.querySelector('.todoapp')
)