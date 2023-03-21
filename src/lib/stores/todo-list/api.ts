import { base } from '$lib/package/airtable'
import type { Records } from 'airtable/lib/records'
import type { FieldSet } from 'airtable'
import type { Todo } from '$lib/stores/todo/detail/store';
import type { Category, TodoItem } from '$lib/stores/todo-list/store';


// fieldsの型指定
interface ApiTodo extends FieldSet {
  name: string
  notes: string
  isDone: boolean
  categoryList: Category[]
  key: string[]
  color: string[]
}

export const useTodoStoreApi = () => {
  const getList = async () => {
    return await base('todo')
      .select({
        cellFormat: 'json'
      }).all().then((records: Records<ApiTodo>) => {
        return records.map((record): TodoItem => {
          console.log(record.fields)
          return {
            id: record.id,
            name: record.fields.name,
            notes: record.fields.notes,
            isDone: record.fields.isDone,
            categoryList: record.fields.categoryList,
            categoryKey: record.fields.key,
            categoryColor: record.fields.color,
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
