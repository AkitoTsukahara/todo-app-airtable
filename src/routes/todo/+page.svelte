<script lang="ts">
  import TodoForm from '$lib/components/section/TodoForm.svelte'
  import ItemGroupList from '$lib/components/block/ItemGroupList.svelte'
  import type { GetOutput } from './+page.server'
  import { type Todo, useTodo } from '$lib/stores/todo/store'
  import { useTodoStoreApi } from '$lib/stores/todo/api';

  export let data: GetOutput
  const { todoStore, setFromApi, updateTodoDoneState, deleteTodoState } = useTodo()
  $: setFromApi(data.todoList)

  $: todoList = $todoStore

  async function requestDone(item: Todo) {
    updateTodoDoneState(item.id, !item.isDone)
    await useTodoStoreApi()
      .update(item.id, {
        name: item.name,
        notes: item.notes,
        isDone: item.isDone
      })
      .catch(() => {
        updateTodoDoneState(item.id, item.isDone)
      })
  }

  async function requestDelete(item: Todo) {
    await useTodoStoreApi().destroy(item.id)
    deleteTodoState(item.id)
    window.location.reload()
  }
</script>
<div class="bg-slate-300 flex justify-center h-screen items-center ">
  <main class="grid gap-8 w-2/3 m-0-auto bg-white p-6 rounded">
    <h1 class="text-2xl">Todo List</h1>
    <TodoForm/>
    <ItemGroupList
        todoList={todoList}
        onRequestDone={requestDone}
        onRequestDelete={requestDelete}
    />
  </main>
</div>
