<script lang="ts">
  import CheckInput from '$lib/components/element/form/CheckInput.svelte'
  import RemoveItem from '$lib/components/element/RemoveItem.svelte'

  export let id: string
  export let name: string
  export let notes: string
  export let isDone: boolean
</script>

<li class="list-group-item border-b flex justify-between p-1.5 text-slate-800">
  <CheckInput on:clickLabel {isDone}>{name}</CheckInput>
  <a href="/todo/{id}">DETAIL</a>
  <RemoveItem on:clickRemoveItem/>
</li>

<style lang="scss">

</style>
