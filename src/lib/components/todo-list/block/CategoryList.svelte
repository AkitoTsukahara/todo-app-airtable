<script lang="ts">
  export type Category = {
    key: string
    color: string
  }
  const categoryList: Category[] = [
    {key: 'work', color: 'bg-violet-300'},
    {key: 'study', color: 'bg-blue-300'},
    {key: 'entertainment', color: 'bg-red-300'},
    {key: 'family', color: 'bg-green-300'},
  ]
</script>

<ul class="mb-16">
  {#each categoryList as category}
    <li class="mb-6">
      <a href="#{ category.key }" class="flex items-center gap-2">
        <div class="w-8 h-8 { category.color } rounded-full mr-2"></div>
        { category.key }
      </a>
    </li>
  {/each}
</ul>
