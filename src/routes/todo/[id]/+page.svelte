<script lang="ts">
  import type { DetailOutPut } from './+page.server'
  import { useTodo } from '$lib/stores/todo/detail/store'

  export let data: DetailOutPut
  const { todoStore, setFromApi } = useTodo()
  $: setFromApi(data.todo)

  $: todo = $todoStore
</script>

<div>
  <ul>
    <li>{todo.id}</li>
    <li>{todo.name}</li>
    <li>{todo.notes}</li>
    <li>{todo.isDone}</li>
  </ul>
</div>
