<script lang="ts">
import TextArea from '$lib/components/element/form/TextArea.svelte'
</script>

<form method="POST">
  <div class="flex gap-8 items-center">
    <TextArea></TextArea>
    <button class="rounded bg-blue-500 hover:bg-blue-400 text-white rounded px-4 py-2 h-8">Add</button>
  </div>
</form>

<style lang="scss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
