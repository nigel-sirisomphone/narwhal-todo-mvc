import { ADD_TODO, COMPLETE_TODO } from './constants'

let nextTodoId = 0

export default function (state, action) {
  switch (action.type) {
    case (ADD_TODO): {
      const {text} = action
      const id = nextTodoId++

      state.todos.push({
        text,
        id,
        completed: false
      })

      return state
    }

    case(COMPLETE_TODO):
      state.todos = state.todos.map(todo => {
        if (todo.id === action.id) todo.completed = !todo.completed

        return todo
      })

      return state

    default:
      return state
  }
}