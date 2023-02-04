import { base } from '$lib/package/airtable'
import type { Records } from 'airtable/lib/records'
import type { FieldSet } from 'airtable'
import type { ApiTodo } from '$lib/stores/todo/detail/api'
import type { Todo } from '$lib/stores/todo/detail/store';

export const useTodoStoreApi = () => {
  const getList = async () => {
    return await base('todo')
      .select({
        cellFormat: 'json'
      }).all().then((records: Records<ApiTodo>) => {
        return records.map((record): Todo => {
          return {
            id: record.id,
            name: record.fields.name,
            notes: record.fields.notes,
            isDone: record.fields.isDone
          }
        })
      })
  }
  const create = async (data: Partial<FieldSet>) => {
    return await base('todo')
      .create(data)
      .catch((err) => {
        throw err
      })
  }
  const update = async (id: string, data: Partial<FieldSet>) => {
    return await base('todo')
      .update(
        id,
        data
      )
      .catch((err) => {
        throw err
      })
  }
  const destroy = async (id: string) => {
    return await base('todo')
      .destroy(id)
      .catch((err) => {
        throw err
      })
  }
  return {
    getList,
    create,
    update,
    destroy
  }
}
