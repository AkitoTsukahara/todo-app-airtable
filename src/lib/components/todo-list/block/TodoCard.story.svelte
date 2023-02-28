<script lang="ts">
  import TodoCard, { type TodoItem } from '$lib/components/todo-list/block/TodoCard.svelte'

  export let Hst
  let todoItem: TodoItem = {
    id: 'abcdef',
    name: 'The first task title',
    notes: 'sample message.sample message.sample message.sample message.sample message.sample message.sample message.',
    isDone: true,
    categoryList: [
      {key: 'work', color: 'bg-violet-300'},
      {key: 'study', color: 'bg-blue-300'},
      {key: 'entertainment', color: 'bg-red-300'},
    ]
  }
</script>

<Hst.Story>
  <TodoCard {todoItem}/>

  <svelte:fragment slot="controls">

  </svelte:fragment>

</Hst.Story>
