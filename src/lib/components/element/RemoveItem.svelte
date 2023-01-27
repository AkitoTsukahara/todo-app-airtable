<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()
  function onClick() {
    dispatch('clickRemoveItem')
  }
</script>
<a href="#!" data-mdb-toggle="tooltip" title="Remove item" on:click={onClick}>
  <i>x</i>
</a>
