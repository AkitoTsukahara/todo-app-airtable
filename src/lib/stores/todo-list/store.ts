import { writable } from 'svelte/store'

export type TodoItem = {
  id: string
  name: string
  notes: string
  isDone: boolean
  categoryList: Category[]
  categoryKey: string[]
  categoryColor: string[]
}

export type Category = {
  key: string
  color: string
}

const todoStore = writable<TodoItem[]>([])

const setFromApi = (data: TodoItem[]) => {
  todoStore.set(data)
}

const updateTodoDoneState = (id: string, isDone: boolean) => {
  todoStore.update((state:TodoItem[]) => {

    const targetTodo = state.find((todo: TodoItem) => todo.id === id)
    if (targetTodo) {
      targetTodo.isDone = isDone
    }
    return state
  })
}

const deleteTodoState = (id: string) => {
  todoStore.update((state:TodoItem[]) => {

    const targetTodoIndex = state.findIndex((todo: TodoItem) => todo.id === id)
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
