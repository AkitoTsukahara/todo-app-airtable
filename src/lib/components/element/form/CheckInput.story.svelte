<script lang="ts">
  import CheckInput from '$lib/components/element/form/CheckInput.svelte'

  export let Hst
  let isChecked = false
</script>

<Hst.Story>
  <CheckInput
      {isChecked}
  >
    Todo Item
  </CheckInput>

  <svelte:fragment slot="controls">
    <Hst.Checkbox bind:value={isChecked} title="isChecked"/>
    <pre>{JSON.stringify({ isChecked }, null, 2)}</pre>
  </svelte:fragment>
</Hst.Story>
