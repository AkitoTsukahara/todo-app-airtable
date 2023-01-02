<script lang="ts">
  export let link: string
  export let target = '_self'
  export let shadow: 'shadow' | ''
  export let size: 'XXL' | 'XL' | 'L' | 'XM' | 'M' | 'S' | 'auto'
</script>


<a href={link}
   {target}
   class="{size} {shadow}"
>
  <slot/>
</a>

<style lang="scss">
  a {
    box-sizing: border-box;
    background: #1ea7fd;
    display: grid;
    align-content: center;
    justify-content: center;
    padding: 16px;
    font-size: 20px;
    font-weight: 700;
    line-height: 20px;
    text-align: center;
    text-decoration: none;
    border-radius: 30px;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
      opacity: 0.6;
    }

    &.is-sp {
      padding: 12px;
    }

    &.shadow {
      filter: drop-shadow(0px 0px 8px rgba(74, 80, 158, 0.5));
    }

    &.XXL {
      width: 500px;
      font-size: 20px;

      &.is-sp {
        width: 200px;
        font-size: 16px;
      }
    }

    &.XL {
      width: 400px;
      font-size: 20px;
    }

    &.L {
      width: 200px;
      font-size: 20px;
    }

    &.XM {
      width: 300px;
      font-size: 16px;
    }

    &.M {
      width: 200px;
      font-size: 16px;
    }

    &.S {
      width: 120px;
      font-size: 16px;
    }

    &.auto {
      display: inline-grid;
      place-items: center;
      padding: 0;
    }
  }
</style>
