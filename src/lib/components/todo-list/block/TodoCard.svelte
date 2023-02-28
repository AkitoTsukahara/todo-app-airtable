<script lang="ts">
  import type { Category } from '$lib/components/todo-list/block/CategoryList.svelte'
  import CategoryList from '$lib/components/todo-list/block/CategoryList.svelte';

  export type TodoItem = {
    id: string
    name: string
    notes: string
    isDone: boolean
    categoryList: Category[]
  }

  export let todoItem: TodoItem
</script>

<div class="task gap-1 bg-amber-200 p-6 rounded-xl mb-6 overflow-auto">
  <div class="task-top flex justify-between mb-4 items-center">
    <h2 class="text-2xl font-bold">{todoItem.name}</h2>
    <div>
      <button data-dropdown-toggle="dropdownDotsHorizontal" class="inline-flex items-center p-2 text-2xl font-medium text-center text-gray-900 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none" type="button">
        <svg class="w-8 h-8" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
        </svg>
      </button>
      <!-- Dropdown menu -->
      <div class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
        <ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdownMenuIconHorizontalButton">
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Edit...</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-10">Delete</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <p class="text-xl mb-6">{todoItem.notes}</p>
  <div class="task-bottom flex justify-between">
    <div class="category">
      <div class="category-tag">
        <ul class="flex gap-2">
          {#each todoItem.categoryList as category}
          <li><a href="#{category.key}"><div class="w-8 h-8 {category.color} rounded-full mr-2"></div></a></li>
          {/each}
        </ul>
      </div>
    </div>
    <label class="inline-flex items-center text-xl font-light">
      <input type="checkbox" bind:checked={todoItem.isDone} class="w-6 h-6 rounded-xl mr-2"/>
      Done
    </label>
  </div>
</div>
