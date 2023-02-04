import { writable } from 'svelte/store'

export type Todo = {
  id: string
  name: string
  notes: string
  isDone: boolean
}

const todoStore = writable<Todo>()

const setFromApi = (data: Todo) => {
  todoStore.set(data)
}

export const useTodo = () => {
  return {
    todoStore,
    setFromApi
  }
}
