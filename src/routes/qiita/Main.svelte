<script lang="ts">
  import Div from './Div.svelte'

  function catchEvent() {
    console.log('Main')
  }
</script>

<main>MAIN
  <Div on:pClick={catchEvent}/>
</main>

<style>
    * {
        margin: 10px;
        border: 1px solid blue;
    }
</style>
