<script lang="ts">
  import CheckInput from '$lib/components/element/form/CheckInput.svelte'
  import RemoveItem from '$lib/components/element/RemoveItem.svelte'
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher()
  function requestDone() {
    dispatch('requestDone')
  }

  export let name: string
  export let notes: string
  export let isDone: boolean
</script>

<li class="list-group-item border-b flex justify-between p-1.5 text-slate-800">
  <CheckInput on:clickLabel={requestDone} {isDone}>{name}</CheckInput>
  <RemoveItem/>
</li>

<style lang="scss">

</style>
