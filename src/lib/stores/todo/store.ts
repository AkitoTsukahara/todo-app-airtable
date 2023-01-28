import { writable } from 'svelte/store'

export type Todo = {
  id: string
  name: string
  notes: string
  isDone: boolean
}

const todoStore = writable<Todo[]>([])

const setFromApi = (data: Todo[]) => {
  todoStore.set(data)
}

const updateTodoDoneState = (id: string, isDone: boolean) => {
  todoStore.update((state:Todo[]) => {

    const targetTodo = state.find((todo: Todo) => todo.id === id)
    if (targetTodo) {
      targetTodo.isDone = isDone
    }
    return state
  })
}

const deleteTodoState = (id: string) => {
  todoStore.update((state:Todo[]) => {

    const targetTodoIndex = state.findIndex((todo: Todo) => todo.id === id)
    if (targetTodoIndex) {
      state.slice(targetTodoIndex)
    }
    return state
  })
}

export const useTodo = () => {
  return {
    todoStore,
    setFromApi,
    updateTodoDoneState,
    deleteTodoState
  }
}
