<script lang="ts">
  import ItemGroup from '$lib/components/block/ItemGroup.svelte'

  export let Hst
  let isChecked = false
  let item = 'Todo Item'
</script>

<Hst.Story>
  <ItemGroup
      {isChecked}
      {item}
  />

  <svelte:fragment slot="controls">
    <Hst.Checkbox bind:value={isChecked} title="isChecked"/>
    <Hst.Text bind:value={item} title="Item"/>
    <pre>{JSON.stringify({ isChecked }, { item },null, 2)}</pre>
  </svelte:fragment>
</Hst.Story>
