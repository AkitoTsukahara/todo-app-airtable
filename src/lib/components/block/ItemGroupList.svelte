<script lang="ts">
  import ItemGroup from '$lib/components/block/ItemGroup.svelte'
  import type { Todo } from '$lib/stores/todo/store'
  export let todoList: Todo[] = []
  export let onRequestDone: (item: Todo) => void
</script>

<ul>
  {#each todoList as item}
    <ItemGroup
        {...item}
        on:requestDone={() => onRequestDone(item)}
    />
  {/each}
</ul>
