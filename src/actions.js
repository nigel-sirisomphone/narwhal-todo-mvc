import { ADD_TODO, COMPLETE_TODO } from './constants';

export const addTodo = (text) => ({
  type: ADD_TODO,
  text
})

export const completeTodo = (id) => ({
  type: COMPLETE_TODO,
  id
})