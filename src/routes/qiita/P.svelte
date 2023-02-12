<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  function clickElement() {
    console.log('P');
    dispatch('pClick');
  }
</script>
<p on:click={clickElement}>P</p>

<style>
    * {
        margin: 10px;
        border: 1px solid blue;
    }
</style>
