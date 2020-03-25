<script>
  import { onMount } from 'svelte';

  export let gridArea = '';
  export let data = null;

  let root = null;

  onMount(() => {
    root = document.documentElement;

    root.style.setProperty('--contacts-grid-area', gridArea);
  });
</script>

<style>
  :root {
    --contacts-grid-area: '';
  }

  #contacts {
    grid-area: var(--contacts-grid-area);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-size: calc(var(--font-size) * 1.25);
    padding: 1vh 1.5vw;
  }

  #contacts > #contacts-name {
    display: flex;
  }

  #contacts > #contacts-city,
  #contacts > #contacts-country,
  #contacts > #contacts-email {
    display: flex;
  }

  #contacts > #contacts-email,
  #contacts > #contacts-links {
    margin-top: 4vh;
  }

  #contacts > #contacts-email {
    text-decoration: none;
    color: var(--font-color);
    border-bottom: 1px solid var(--font-color);
  }

  #contacts > #contacts-links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-gap: var(--layout-padding);
  }

  .contacts-link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2vw;
    height: 2vw;
  }

  .contacts-link > img {
    width: 2vw;
    height: 2vw;
  }
</style>

<article id='contacts'>
  <div id='contacts-name'>{data.name}</div>
  <div id='contacts-city'>{data.city}</div>
  <div id='contacts-country'>{data.country}</div>
  <a href='mailto:{data.email}' id='contacts-email'>{data.email}</a>
  <div id='contacts-links'>
    <!-- see: https://www.flaticon.com/packs/social-circles -->
    {#each data.links as { name, url, svg }}
      <a href='{url}' target='_blank' class='contacts-link'>
        <img src='{svg}' alt='{name}' />
      </a>
    {/each}
  </div>
</article>