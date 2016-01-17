import {
  ADD_TODO, COMPLETE_TODO, DESTROY_TODO, EDIT_TODO, MARK_ALL_COMPLETED, CLEAR_COMPLETED, CHANGE_FILTER } from './constants'

export const addTodo = (text) => ({
  type: ADD_TODO,
  text
})

export const completeTodo = (id) => ({
  type: COMPLETE_TODO,
  id
})

export const destroyTodo = (id) => ({
  type: DESTROY_TODO,
  id
})

export const editTodo = (id, text) => ({
  type: EDIT_TODO,
  id,
  text
})

export const markAllCompleted = (isChecked) => ({
  type: MARK_ALL_COMPLETED,
  selected: isChecked
})

export const clearCompleted = () => ({
  type: CLEAR_COMPLETED
})

export const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  filter
})