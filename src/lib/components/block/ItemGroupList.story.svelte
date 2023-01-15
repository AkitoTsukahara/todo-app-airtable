<script lang="ts">
  import ItemGroupList, { type TodoItem } from '$lib/components/block/ItemGroupList.svelte'

  export let Hst
  let itemList: TodoItem[] = [
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

<Hst.Story>
  <ItemGroupList
      {itemList}
  />
</Hst.Story>
