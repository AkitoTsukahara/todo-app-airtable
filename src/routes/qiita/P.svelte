<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  function clickElement() {
    console.log('P');
    dispatch('pClick');
  }
</script>
<div on:click={() => console.log('div')}>DIV
  <p on:click={clickElement}>P</p>
</div>

<style>
    * {
        margin: 10px;
        border: 1px solid blue;
    }
</style>
