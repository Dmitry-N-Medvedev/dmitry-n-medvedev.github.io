<script>
  export let href = null;
  export let target = '_blank';
  export let underline = true;

  const handleClick = (evt) => {
    const { protocol, pathname } = evt.srcElement;

    console.debug('A on:click', protocol, pathname);
  };
</script>

<style>
  a {
    display: flex;
    color: var(--font-color);
    text-decoration: none;
    pointer-events: all;
  }
  
  .underline {
    border-bottom: 1px solid var(--font-color);
  }
</style>

<a {href} {target} {...$$restProps} on:click={handleClick} class:underline>
  <slot>N/A</slot>
</a>