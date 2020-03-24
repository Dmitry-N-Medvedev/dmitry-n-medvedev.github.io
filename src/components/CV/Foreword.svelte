<script>
  import { onMount } from 'svelte';

  export let gridArea = null;
  let root = null;

  onMount(() => {
    root = document.documentElement;

    root.style.setProperty('--foreword-grid-area', gridArea);
  });
</script>

<style>
  :root {
    --foreword-grid-area: '';
  }
  #foreword {
    grid-area: var(--foreword-grid-area);
    display: flex;
    padding: 1rem 1.5rem;
  }
</style>

<article id='foreword'>
  <slot></slot>
</article>