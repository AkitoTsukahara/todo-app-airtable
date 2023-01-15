<script lang="ts">
  import ListGroupItem from '$lib/components/block/ListGroupItem.svelte'

  export let Hst
  let isChecked = false
  let item = 'Todo Item'
</script>

<Hst.Story>
  <ListGroupItem
      {isChecked}
      {item}
  />

  <svelte:fragment slot="controls">
    <Hst.Checkbox bind:value={isChecked} title="isChecked"/>
    <Hst.Text bind:value={item} title="Item"/>
    <pre>{JSON.stringify({ isChecked }, { item },null, 2)}</pre>
  </svelte:fragment>
</Hst.Story>
