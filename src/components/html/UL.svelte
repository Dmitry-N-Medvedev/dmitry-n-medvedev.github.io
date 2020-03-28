<style>
  :root {
    --ul-li-before-size: 2vw;
  }
  .ul {
    counter-reset: section;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: min-content;
    grid-gap: calc(var(--layout-padding) * 4);
    padding: 0 0 0 3vw;
    margin: 0;
    list-style-type: none;
    list-style-position: unset;
    width: 100%;
  }

  :global(.ul > li) {
    text-align: justify;
    padding: 0.25vh 0.25vw;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  :global(.ul > li::before) {
    counter-increment: section;
    content: counter(section, decimal-leading-zero);
    position: absolute;
    width: var(--ul-li-before-size);
    height: var(--ul-li-before-size);
    left: calc(var(--ul-li-before-size) * -1.25);
    display: flex;
    justify-content: center;
    align-items: center;
    top: calc(50% - var(--ul-li-before-size) / 2);
    color: var(--font-color);
    /* background-color: yellowgreen; */
  }
</style>

<ul class='ul' {...$$restProps}>
  <slot>N/A</slot>
</ul>