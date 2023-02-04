<script lang="ts">
  import ItemGroup from '$lib/components/block/ItemGroup.svelte'
  import type { Todo } from '$lib/stores/todo/store'
  export let todoList: Todo[] = []
  export let onRequestDone: (item: Todo) => void
  export let onRequestDelete: (item: Todo) => void
</script>

<ul>
  {#each todoList as item}
    <ItemGroup
        {...item}
        on:clickLabel={() => onRequestDone(item)}
        on:clickRemoveItem={() => onRequestDelete(item)}
    />
  {/each}
</ul>
