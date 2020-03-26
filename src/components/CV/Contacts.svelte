<script>
  import GridBlockRecord from '../Grid/GridBlockRecord.svelte';
  import A from '../html/A.svelte';
  import Icon from '../html/Icon.svelte';

  export let data = null;
</script>

<style>
  .contacts {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: min-content min-content min-content min-content min-content;

    font-size: calc(var(--font-size) * 1.25);
  }

  :global(.social-network-icons) {
    display: flex;
  }

  :global(.social-network-icons > *:not(:first-of-type)) {
    margin-left: calc(var(--layout-padding) * 2);
  }
</style>

<article class='contacts'>
  <GridBlockRecord className='display-flex justify-content-flex-end'>{data.name}</GridBlockRecord>
  <GridBlockRecord className='display-flex justify-content-flex-end'>{data.city}</GridBlockRecord>
  <GridBlockRecord className='display-flex justify-content-flex-end'>{data.country}</GridBlockRecord>
  <GridBlockRecord className='display-flex justify-content-flex-end'>
    <A href='mailto:{data.email}'>{data.email}</A>
  </GridBlockRecord>
  <GridBlockRecord className='display-flex justify-content-flex-end social-network-icons'>
    <!-- see: https://www.flaticon.com/packs/social-circles -->
    {#each data.links as { name, url, svg }}
      <a href={url} target='_blank'>
        <Icon src='{svg}' alt='{name}' />
      </a>
    {/each}
  </GridBlockRecord>
</article>