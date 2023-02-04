import type { Todo } from '$lib/stores/todo/store'
import type { ServerLoad } from '@sveltejs/kit';
import { useTodoStoreApi } from '$lib/stores/todo/api';
import { error } from '@sveltejs/kit';

export type DetailOutPut = {
  todo: Todo
}

export const load: ServerLoad = async ({params}): Promise<DetailOutPut> => {
  const [todo] = await Promise.all([useTodoStoreApi().get(params.id)]).catch((err) => {
    throw error(Number(err.response?.status), err.response?.statusText)
  })
  return {
    todo
  }
}
