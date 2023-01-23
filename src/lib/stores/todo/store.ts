import { writable } from 'svelte/store'

export type Todo = {
  name: string
  notes: string
  isDone: boolean
}

const todoStore = writable<Todo[] | null>(null)

const setFromApi = (data: Todo[]) => {
  const todoList: Todo[] = data.map((record: Todo) => ({
    name: record.name,
    notes: record.notes,
    isDone: record.isDone
  }))
  todoStore.set(todoList)
}

export const useTodo = () => {
  return {
    todoStore,
    setFromApi
  }
}
