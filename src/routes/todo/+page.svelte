<script lang="ts">
  import TodoForm from '$lib/components/block/TodoForm.svelte';
  import ItemGroupList from '$lib/components/block/ItemGroupList.svelte';
</script>
<div class="bg-slate-300 flex justify-center h-screen items-center ">
  <main class="grid gap-10 w-2/3 m-0-auto">
    <TodoForm/>
    <ItemGroupList/>
  </main>
</div>

<style lang="scss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
