<script lang="ts">
  //import TextArea from '$lib/components/element/form/TextArea.svelte'
  import { useTodoStoreApi } from '$lib/stores/todo/api'

  let name = ''
  async function handleSubmit() {
    if (name) {
      await useTodoStoreApi().create(
        {
          name: name,
          notes: '',
          isDone: false
        }
      )
      window.location.reload()
    }
  }

</script>

<form on:submit|preventDefault={handleSubmit}>
  <div class="flex gap-8 items-center">
    <input
        class="w-full rounded-lg p-2 border border-solid border-gray-300"
        placeholder="What do you need to do today?"
        type="text" bind:value={name}
    >
    <button type="submit" class="rounded bg-blue-500 hover:bg-blue-400 text-white rounded px-4 py-2 h-8">Add</button>
  </div>
</form>
