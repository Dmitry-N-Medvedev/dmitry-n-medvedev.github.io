<script>
  import GridBlockRecord from '../Grid/GridBlockRecord.svelte';
  import A from '../html/A.svelte';
  import Icon from '../html/Icon.svelte';

  export let data = null;
</script>

<style>
  .contacts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: min-content min-content min-content 6vh min-content;
    grid-template-areas:
      'contacts-photo contacts-content'
      'contacts-photo contacts-content'
      'contacts-photo contacts-content'
      'contacts-photo contacts-content'
      'contacts-photo contacts-content'
    ;
    grid-gap: calc(var(--layout-padding) * 2) 0;
    font-size: calc(var(--font-size) * 1.25);
  }

  .contacts-photo {
    grid-area: contacts-photo;
    display: flex;
    justify-content: flex-start;
    padding: 0 0 0 1.5vw;
  }

  .contacts-photo > img {
    width: 10vw;
    height: 10vw;
    filter: drop-shadow(0px 0px 3px var(--font-color));
  }

  .contacts-content {
    grid-area: contacts-content;
  }

  :global(.social-network-icons) {
    display: flex;
    margin-top: 2vh;
  }

  :global(.social-network-icons > *:not(:first-of-type)) {
    margin-left: calc(var(--layout-padding) * 4);
  }

  .a {
    pointer-events: all;
  }
</style>

<article class='contacts'>
  <div class='contacts-photo'>
    <img src='/photos/me.jpg' alt='me' />
  </div>
  <div class='contacts-content'>
    <GridBlockRecord className='display-flex justify-content-flex-end'><span itemprop='name'>{data.name}</span></GridBlockRecord>
    <GridBlockRecord className='display-flex justify-content-flex-end'>{data.city}</GridBlockRecord>
    <GridBlockRecord className='display-flex justify-content-flex-end'>{data.country}</GridBlockRecord>
    <GridBlockRecord className='display-flex justify-content-flex-end'>
      <A href='mailto:{data.email}'><span itemprop='email'>{data.email}</span></A>
    </GridBlockRecord>
    <GridBlockRecord className='display-flex justify-content-flex-end social-network-icons'>
      <!-- see: https://www.flaticon.com/packs/social-circles -->
      {#each data.links as { name, url, svg }}
        <a class='a' href={url} target='_blank'>
          <Icon src='{svg}' alt='{name}' />
        </a>
      {/each}
    </GridBlockRecord>
  </div>
</article>