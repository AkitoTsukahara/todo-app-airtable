<script lang="ts">
  import TagList from '$lib/components/todo-list/block/TagList.svelte'

  export let Hst
</script>

<Hst.Story>
  <TagList/>

  <svelte:fragment slot="controls"></svelte:fragment>

</Hst.Story>
