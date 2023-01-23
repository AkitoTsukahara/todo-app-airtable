import { base } from '$lib/package/airtable'
import type { Todo } from '$lib/stores/todo/store'

export const useTodoStoreApi = () => {
  const get = async () => {
    return await base('todo')
      .select({
        cellFormat: 'json'
      }).all().then((records) => {
        return records.map((record:Record<any, any>): Todo => {
          return {
            name: record.fields.name,
            notes: record.fields.notes,
            isDone: record.fields.isDone
          }
        })
      })
  }
  return {
    get
  }
}
