<script lang="ts">
  import AbstractTime from '$lib/components/element/AbstractTime.svelte'

  export let Hst
  export let position
</script>

<Hst.Story>
  <AbstractTime/>


  <svelte:fragment slot="controls">
    <Hst.Select
        bind:value={position}
        options={['top' , 'right' , 'left' , 'bottom']}
        title="Position"
    />
    <pre>{JSON.stringify({ position }, null, 2)}</pre>
  </svelte:fragment>

</Hst.Story>
