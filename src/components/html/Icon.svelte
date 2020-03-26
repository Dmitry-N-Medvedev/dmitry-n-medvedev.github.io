<script>
  export let src = '';
  export let alt = '';
</script>

<style>
  .icon {
    width: var(--icon-size);
    height: var(--icon-size);

    filter: opacity(0.45);
    transition: filter var(--hover-out-ms) var(--timing-function);
    will-change: opacity;
  }

  .icon:hover {
    filter: opacity(0.95);
    transition: filter var(--hover-in-ms) var(--timing-function);
  }
</style>

<img {src} {alt} class='icon' />