<main onclick="console.log('main')">MAIN
  <div onclick="console.log('div')">DIV
    <p onclick="console.log('p')">P</p>
  </div>
</main>

<main on:click={() => console.log('main')}>MAIN
  <div on:click={() => console.log('div')}>DIV
    <p on:click|stopPropagation={() => console.log('p')}>P</p>
  </div>
</main>


<style>
    * {
        margin: 10px;
        border: 1px solid blue;
    }
</style>
