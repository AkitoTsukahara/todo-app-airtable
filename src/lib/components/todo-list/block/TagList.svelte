<script lang="ts">
  type Tag = {
    key: string
    color: string
  }
  const tagList: Tag[] = [
    {key: 'work', color: 'bg-violet-300'},
    {key: 'study', color: 'bg-blue-300'},
    {key: 'entertainment', color: 'bg-red-300'},
    {key: 'family', color: 'bg-green-300'},
  ]
</script>

<ul class="mb-16">
  {#each tagList as tag}
    <li class="mb-6">
      <a href="#{ tag.key }" class="flex items-center gap-2">
        <div class="w-8 h-8 { tag.color } rounded-full mr-2"></div>
        { tag.key }
      </a>
    </li>
  {/each}
</ul>
