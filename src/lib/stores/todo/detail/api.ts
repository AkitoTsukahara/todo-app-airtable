import { base } from '$lib/package/airtable'
import type { FieldSet } from 'airtable'
import type { Todo } from '$lib/stores/todo/detail/store'

// fieldsの型指定
export interface ApiTodo extends FieldSet {
  name: string
  notes: string
  isDone: boolean
}

export const useTodoStoreApi = () => {
  const get = async (id: string) => {
    return await base('todo')
      .find(id).then((record: Record<ApiTodo>): Todo => {
        console.log(record)
        return {
          id: record.id,
          name: record.fields.name,
          notes: record.fields.notes,
          isDone: record.fields.isDone
        }
      })
  }
  return {
    get
  }
}
