import { error, type ServerLoad } from '@sveltejs/kit'
import type { TodoItem } from '$lib/stores/todo-list/store';
import { useTodoStoreApi } from '$lib/stores/todo-list/api';

export type GetOutput = {
  todoList: TodoItem[]
}

export const load: ServerLoad = async (): Promise<GetOutput> => {
  console.log('test')
  const [todoList] = await Promise.all([useTodoStoreApi().getList()]).catch((err) => {
    throw error(Number(err.response?.status), err.response?.statusText)
  })
  console.log(todoList)
  return {
    todoList
  }
}
