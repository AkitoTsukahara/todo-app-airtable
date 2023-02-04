import { error, type ServerLoad } from '@sveltejs/kit'
import { useTodoStoreApi } from '$lib/stores/todo/api'
import type { Todo } from '$lib/stores/todo/store'

export type GetOutput = {
  todoList: Todo[]
}

export const load: ServerLoad = async (): Promise<GetOutput> => {
  const [todoList] = await Promise.all([useTodoStoreApi().getList()]).catch((err) => {
    throw error(Number(err.response?.status), err.response?.statusText)
  })
  return {
    todoList
  }
}
