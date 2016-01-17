import { ADD_TODO, COMPLETE_TODO, DESTROY_TODO, EDIT_TODO,MARK_ALL_COMPLETED, CLEAR_COMPLETED, CHANGE_FILTER } from './constants'

let nextTodoId = 0

export default function (state, action) {
  switch (action.type) {
    case (ADD_TODO): {
      const {text} = action
      const id = nextTodoId++

      if (text) state.todos.push({
        text,
        id,
        completed: false
      })

      return state
    }

    case (COMPLETE_TODO):
      state.todos = state.todos.map(todo => {
        if (todo.id === action.id) todo.completed = !todo.completed

        return todo
      })

      state.allComplete = state.todos.every(todo => todo.completed)

      return state

    case (DESTROY_TODO):
      state.todos = state.todos.filter(todo => todo.id !== action.id)

      return state

    case (EDIT_TODO):
      state.todos = state.todos.map(todo => {
        if (todo.id === action.id) {
          todo.text = action.text
        }

        return todo
      })

      return state

    case (MARK_ALL_COMPLETED):
      state.todos = state.todos.map(todo => {
        todo.completed = action.selected

        return todo
      })

      return state

    case (CLEAR_COMPLETED):
      state.todos = state.todos.filter(todo => !todo.completed)

      return state

    case (CHANGE_FILTER):
      state.filter = action.filter

      return state

    default:
      return state
  }
}