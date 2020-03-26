<script>
  import { onMount } from 'svelte';
  import {
    ALL_TAG,
  } from '../../common/constants.mjs';

  export let data = null;
  let tags = [];
  let items = [];
  let currentTag = ALL_TAG;
  const NOT_FOUND = -1;

  $: if (data) {
    tags = data.tags;
    items = data.items;
  }

  $: if (tags) {
    tags = Array.from(new Set([ALL_TAG, ...tags]));
  }

  $: if (items) {
    for (const item of Object.keys(items)) {
      (items[item]).tags = [ALL_TAG, ...(items[item]).tags];
    }

    items = items;
  }

  $: reactToCurrentTag(currentTag);
  
  const reactToCurrentTag = (tag) => {
    document.querySelectorAll('.items > .stack-item[data-tags]').forEach((element) => {
      if (element.dataset.tags.indexOf(tag) !== NOT_FOUND) {
        element.classList.add('highlighted-stack-item');
      } else {
        element.classList.remove('highlighted-stack-item');
      }
    });
  };

  const handleTagClick = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();

    if (evt.srcElement.dataset.tag) {
      currentTag = evt.srcElement.dataset.tag;
    } else {
      currentTag = ALL_TAG;
    }
  };

  const itemTags = (itemName) => (items[itemName]).tags.join(' ');

  onMount(() => {
    currentTag = ALL_TAG;

    reactToCurrentTag(currentTag);
  });
</script>

<style>
  .stack {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: min-content 4vh 1fr;
    grid-template-areas:
      'stack-header'
      'stack-tags'
      'stack-items'
    ;
    grid-gap: calc(var(--layout-padding) * 6);
  }

  .stack-header {
    grid-area: stack-header;
  }

  .stack > .tags {
    grid-area: stack-tags;
    display: flex;
    contain: strict;
  }

  .stack > .items {
    grid-area: stack-items;
    contain: strict;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 8vh;
    grid-gap: calc(var(--layout-padding) / 2);
  }

  .stack > .items .stack-item {
    display: flex;
    justify-content: center;
    align-items: center;

    filter: opacity(0.25);

    background-color: var(--highlighted-background-color);
    will-change: background-color;
    color: var(--font-color);
  }

  .stack > .tags > .tag {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-bottom: 1px solid transparent;
    transition: border-bottom-color 500ms var(--timing-function);
    will-change: border-bottom-color;
    contain: strict;
  }

  @media (pointer: fine) {
    .stack > .tags:hover > .tag:not(:hover):not(.currentTag) {
      filter: blur(2px) opacity(0.5);
    }
  
    .stack > .tags:hover > .tag:not(.currentTag):hover {
      border-bottom-color: var(--accented-color-hover);
      transition: border-bottom-color 150ms var(--timing-function), filter 50ms var(--timing-function);
      filter: blur(0);
    }
  }

  .currentTag {
    border-bottom-color: var(--accented-color) !important;
    transition: border-bottom-color 50ms var(--timing-function), filter 50ms var(--timing-function);
  }

  :global(.highlighted-stack-item) {
    filter: opacity(1) !important;
  }
</style>

<article class='stack'>
  {#if Object.keys(items).length > 0}
    <h2 class='stack-header'>stack</h2>
  {/if}
  <section class='tags'>
    {#each tags as tag}
      <div class='tag' data-tag={tag} on:click={handleTagClick} class:currentTag="{tag === currentTag}">{tag}</div>
    {/each}
  </section>
  <section class='items'>
    {#each Object.keys(items) as item}
      <div class='stack-item' data-tags={itemTags(item)}>
        {item}
      </div>
    {/each}
  </section>
</article>