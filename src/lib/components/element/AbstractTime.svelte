<script lang="ts">
  let time = '01月09日 19:00:00'
  let displayTime = '19:00'
  let position: 'top' | 'right' | 'left' | 'bottom' = 'bottom'
</script>
<div class="time">
  <a aria-label="{time}"
     class="tooltip {position}"
     href="#">
    <span>{displayTime}</span>
  </a>
</div>

<style lang="scss">
  .time {
    position: relative;
  }
  .tooltip {
    &:after {
      position: absolute;
      z-index: 9999;
      display: none;
      padding: 5px 8px;
      content: attr(aria-label);
      text-align: center;
      white-space: pre;
      text-decoration: none;
      letter-spacing: normal;
      text-transform: none;
      word-wrap: break-word;
      opacity: 0;
      color: #fff;
      border-radius: 3px;
      background: rgba(0, 0, 0, .8);
      text-shadow: none;
    }

    &:before {
      position: absolute;
      z-index: 10000;
      display: none;
      width: 0;
      height: 0;
      content: '';
      opacity: 0;
      color: #333;
      color: rgba(0, 0, 0, .8);
      border: 5px solid transparent;
    }

    &:hover{
      &:before,
      &:after {
        display: inline-block;
        -webkit-animation-name: fadein;
        animation-name: fadein;
        -webkit-animation-duration: .4s;
        animation-duration: .4s;
        text-decoration: none;
        opacity: 1;
      }
    }

    &.bottom {
      &:after {
        top: 100%;
        left: 0;
        margin-top: 4px;
      }

      &:before {
        top: auto;
        left: 0;
        bottom: -4px;
        margin-right: -5px;
        border-bottom-color: rgba(0, 0, 0, .8);
      }
    }
  }
</style>
