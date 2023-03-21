<script lang="ts">
  import TodoCard from '$lib/components/todo-list/block/TodoCard.svelte';
  import type { TodoItem } from '$lib/stores/todo-list/store';
  export let todoList: TodoItem[] = []
</script>

<ul>
  {#each todoList as todoItem}
    <TodoCard
        {...todoItem}
    />
  {/each}
</ul>
