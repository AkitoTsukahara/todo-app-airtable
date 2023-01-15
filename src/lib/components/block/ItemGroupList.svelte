<script lang="ts">
  import ItemGroup from '$lib/components/block/ItemGroup.svelte'

  export type TodoItem = {
    item: string,
    isChecked: boolean
  }

  export let itemList: TodoItem[] = [
    {
      item: 'Todo Item01',
      isChecked: false
    },
    {
      item: 'Todo Item02',
      isChecked: false
    },
    {
      item: 'Todo Item03',
      isChecked: true
    },
  ]
</script>

<ul>
  {#each itemList as item}
    <ItemGroup
        {...item}
    />
  {/each}
</ul>
