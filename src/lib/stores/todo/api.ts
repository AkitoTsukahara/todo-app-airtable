import { base } from '$lib/package/airtable'
import type { Todo } from '$lib/stores/todo/store'
import type { FieldSet } from 'airtable/lib/field_set'

export const useTodoStoreApi = () => {
  const get = async () => {
    return await base('todo')
      .select({
        cellFormat: 'json'
      }).all().then((records) => {
        return records.map((record:Record<any, any>): Todo => {
          return {
            id: record.id,
            name: record.fields.name,
            notes: record.fields.notes,
            isDone: record.fields.isDone
          }
        })
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
  return {
    get,
    update
  }
}
