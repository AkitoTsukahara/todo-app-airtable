<script lang="ts">
  import P from './P.svelte'
</script>

<div>DIV
  <P on:pClick/>
</div>

<style>
    * {
        margin: 10px;
        border: 1px solid blue;
    }
</style>
