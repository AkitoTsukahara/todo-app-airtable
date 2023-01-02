<script lang="ts">
  import BaseButton from '$lib/components/element/button/BaseButton.svelte'

  export let Hst
  export let size
  export let shadow
</script>

<Hst.Story>
  <BaseButton
      link="#"
      {size}
      {shadow}
  >
    Click!!!
  </BaseButton>

  <svelte:fragment slot="controls">
    <Hst.Select
        bind:value={size}
        options={['XXL' , 'XL' , 'L' , 'XM' , 'M' , 'S' , 'auto']}
        title="Size"
    />
    <Hst.Select
        bind:value={shadow}
        options={['shadow' , '']}
        title="Shadow"
    />
    <pre>{JSON.stringify({ size }, { shadow }, null, 2)}</pre>
  </svelte:fragment>
</Hst.Story>
