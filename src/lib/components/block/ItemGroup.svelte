<script lang="ts">
  import CheckInput from '$lib/components/element/form/CheckInput.svelte'
  import RemoveItem from '$lib/components/element/RemoveItem.svelte'

  export let item: string
  export let isChecked: boolean
</script>

<li class="list-group-item border-b flex justify-between p-1.5 text-slate-800">
  <CheckInput {isChecked}>{item}</CheckInput>
  <RemoveItem/>
</li>

<style lang="scss">

</style>
