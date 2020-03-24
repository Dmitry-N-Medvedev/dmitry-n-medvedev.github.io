<script>
  import { onMount } from 'svelte';

  export let schema;
  let component;

  onMount(() => {
    Object.keys(schema).forEach((key) => {
      component.setAttribute(key, schema[key]);
    });
  });
</script>

{#if schema}
  <span
    bind:this={component}
    itemscope
  >
    <slot></slot>
  </span>
{/if}