<script>
  export let className = '';
</script>

<style>
  .grid-block-record {
    display: block;
    /* padding: calc(var(--layout-padding) * 4) 0; */
  }
</style>

<div class='grid-block-record {className}'>
  <slot>N/A</slot>
</div>