<script lang="ts">
  import type { DetailOutPut } from './+page.server'
  import { useTodo } from '$lib/stores/todo/detail/store'

  export let data: DetailOutPut
  const { todoStore, setFromApi } = useTodo()
  $: setFromApi(data.todo)

  $: todo = $todoStore
</script>

<div class="bg-slate-300 flex justify-center h-screen items-center">
  <main class="grid gap-8 w-2/3 m-0-auto bg-white p-6 rounded">
    <h1>{todo.name}</h1>
    <p>{todo.notes ? todo.notes : 'タスク内容が未登録です'}</p>
  </main>
</div>
