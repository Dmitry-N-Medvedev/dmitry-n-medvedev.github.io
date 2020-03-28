<script>
  import GridBlockRecord from '../Grid/GridBlockRecord.svelte';
  import A from '../html/A.svelte';
  import Icon from '../html/Icon.svelte';

  export let data = null;
</script>

<style>
  :root {
    --profile-photo-size: 12vw;
  }
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

  .contacts-photo > picture,
  .contacts-photo > picture > img {
    width: var(--profile-photo-size);
    height: var(--profile-photo-size);
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

<article class='contacts' itemscope itemtype='http://schema.org/Person'>
  <div class='contacts-photo' itemscope itemtype='http://schema.org/ImageObject'>
    <picture>
      <source type='image/webp' srcset='/photos/me.webp' />
      <source type='image/jpeg' srcset='/photos/me.jpg' />
      <img src='/photos/me.jpg' alt='me' itemprop='contentUrl' />
    </picture>
    <meta itemprop='caption' content='this is how I look like'>
    <meta itemprop='representativeOfPage' content='true'>
    <meta itemprop='jobTitle' content='{data.jobTitle}'>
  </div>
  <div class='contacts-content'>
    <GridBlockRecord className='display-flex justify-content-flex-end'>
      {data.name.givenName} {data.name.additionalName} {data.name.familyName}
      <meta itemprop='givenName' content='{data.name.givenName}'>
      <meta itemprop='additionalName' content='{data.name.additionalName}'>
      <meta itemprop='familyName' content='{data.name.familyName}'>
      <meta itemprop='birthDate' content='{data.birthDate}'>
    </GridBlockRecord>
    <span itemscope itemtype='http://schema.org/PostalAddress'>
      <GridBlockRecord className='display-flex justify-content-flex-end'>{data.address.addressLocality}</GridBlockRecord>
      <GridBlockRecord className='display-flex justify-content-flex-end'>{data.address.addressCountry}</GridBlockRecord>
      <meta itemprop='addressCountry' content='{data.address.addressCountry}'>
      <meta itemprop='addressRegion' content='{data.address.addressRegion}'>
      <meta itemprop='addressLocality' content='{data.address.addressLocality}'>
    </span>
    <GridBlockRecord
      className='display-flex justify-content-flex-end'
      itemscope
      itemtype='http://schema.org/ContactPoint'
    >
      <A href='mailto:{data.ContactPoint.email}'>{data.ContactPoint.email}</A>
      <meta itemprop='email' content='{data.ContactPoint.email}'>
      <meta itemprop='telephone' content='{data.ContactPoint.telephone}'>
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