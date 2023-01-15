<script lang="ts">
  import CheckInput from '$lib/components/element/form/CheckInput.svelte'
  import RemoveItem from '$lib/components/element/RemoveItem.svelte'

  export let item: string
  export let isChecked: boolean
</script>

<li class="list-group-item">
  <CheckInput {isChecked}>{item}</CheckInput>
  <RemoveItem/>
</li>

<style lang="scss">
  .list-group-item {
    display: flex;
    position: relative;
    padding: 0.5rem 1rem;
    color: #212529;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, .125);
    justify-content: space-between;
  }
</style>
