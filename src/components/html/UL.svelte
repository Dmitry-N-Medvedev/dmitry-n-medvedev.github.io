<style>
  .ul {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: min-content;
    grid-gap: calc(var(--layout-padding) * 4);
    padding: 0 0 0 2vw;
    margin: 0;
    list-style-type: decimal-leading-zero;
  }

  :global(.ul > li) {
    text-align: left;
  }
</style>

<ul class='ul'>
  <slot>N/A</slot>
</ul>