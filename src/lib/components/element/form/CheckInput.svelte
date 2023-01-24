<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let isDone = false
  const dispatch = createEventDispatcher()
  function onClickLabel() {
    dispatch('clickLabel')
  }
</script>
<div class="flex text-xl">
  <label on:click={onClickLabel}>
    <input type="checkbox"
           class="mr-1"
           bind:checked={isDone}
    />
    {#if isDone}
      <s>
        <slot/>
      </s>
    {:else}
      <slot/>
    {/if}
  </label>
</div>

<style lang="scss">
  input[type=checkbox] {
    border-radius: 0.25em;
    width: 16px;
    height: 16px;
  }
</style>
