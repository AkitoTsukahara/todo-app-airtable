<script lang="ts">
  import TodoForm from '$lib/components/block/TodoForm.svelte';
  import ItemGroupList from '$lib/components/block/ItemGroupList.svelte';
</script>
<div class="bg-slate-300 flex justify-center h-screen items-center ">
  <main class="grid gap-8 w-2/3 m-0-auto bg-white p-6 rounded">
    <h1 class="text-2xl">Todo List</h1>
    <TodoForm/>
    <ItemGroupList/>
  </main>
</div>
