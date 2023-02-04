import { base } from '$lib/package/airtable'
import type { Todo } from '$lib/stores/todo/store'
import type { Records } from 'airtable/lib/records'
import type { FieldSet } from 'airtable'

// fieldsの型指定
interface ApiTodo extends FieldSet {
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
    get,
    getList,
    create,
    update,
    destroy
  }
}
