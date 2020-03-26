<script>
  export let href = null;
  export let target = '_blank';

  const handleClick = (evt) => {
    const { protocol, pathname } = evt.srcElement;

    console.debug('A on:click', protocol, pathname);
  };
</script>

<a {href} {target} on:click={handleClick}>
  <slot>N/A</slot>
</a>