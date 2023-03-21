<script lang="ts">
  import CategoryList from '$lib/components/todo-list/block/CategoryList.svelte';
  import { useTodo } from '$lib/stores/todo-list/store';
  import type { GetOutput } from './+page.server';
  import TodoCardList from '$lib/components/todo-list/block/TodoCardList.svelte';

  export let data: GetOutput
  const { todoStore, setFromApi } = useTodo()
  // console.log(data.todoList)
  $: setFromApi(data.todoList)

  $: todoList = $todoStore
</script>

<div class="w-10/12 mx-auto my-10">
  <header class="flex text-4xl justify-between items-center mb-10">
    <h1 class="font-bold">todo</h1>
    <div id="add-item" class="text-6xl">+</div>
  </header>
  <div class="wrapper flex">
    <aside class="w-1/5 text-xl font-light">
      <CategoryList />
      <div id="hide-done-task" >
        <label class="inline-flex items-center">
          <input type="checkbox" class="w-6 h-6 rounded-2xl mr-2"/>
          Hide Done Task
        </label>
      </div>
    </aside>
    <main class="w-4/5 columns-2 gap-x-6">
      <TodoCardList {todoList} />
    </main>
  </div>
</div>
