import { writable } from 'svelte/store'

export type Todo = {
  id: string
  name: string
  notes: string
  isDone: boolean
}

const todoStore = writable<Todo[] | null>(null)

const setFromApi = (data: Todo[]) => {
  const todoList: Todo[] = data.map((record: Todo) => ({
    id: record.id,
    name: record.name,
    notes: record.notes,
    isDone: record.isDone
  }))
  todoStore.set(todoList)
}

const updateTodoDoneState = (id: string, isDone: boolean) => {
  todoStore.update((state) => {
    if (!state) {
      return state
    }
    
    const targetTodo = state.find((todo) => todo.id === id)
    if (targetTodo) {
      targetTodo.isDone = isDone
    }
    return {
      ...state
    }
  })
}

export const useTodo = () => {
  return {
    todoStore,
    setFromApi,
    updateTodoDoneState
  }
}
