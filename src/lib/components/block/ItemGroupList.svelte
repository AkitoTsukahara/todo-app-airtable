<script lang="ts">
  import ItemGroup from '$lib/components/block/ItemGroup.svelte'
  import type { Todo } from '$lib/stores/todo/store'
  export let todoList: Todo[] = []
</script>

<ul>
  {#each todoList as item}
    <ItemGroup
        {...item}
    />
  {/each}
</ul>
