<script>
  import { onMount } from 'svelte';

  export let gridArea = '';
  export let data = null;

  let root = null;

  onMount(() => {
    root = document.documentElement;

    root.style.setProperty('--education-grid-area', gridArea);
  });
</script>

<style>
  :root {
    --education-grid-area: '';
  }

  #education-container {
    grid-area: var(--education-grid-area);
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: min-content;
    grid-gap: calc(var(--layout-padding) * 4);
  }

  .education-record {
    display: grid;
    grid-template-columns: 5vw 1fr;
    grid-auto-rows: min-content;
    grid-gap: var(--layout-padding);
    grid-template-areas:
      'education-record-year education-record-info'
    ;

    padding: 2vh 1vw;
    background-color: hsl(0, 0%, 93%, 1.0);
    border-radius: var(--layout-padding);
  }

  .education-record-year {
    grid-area: education-record-year;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: var(--layout-padding);
  }

  .education-record-info {
    grid-area: education-record-info;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
  }
</style>

<article id='education-container'>
  {#each data as record}
    <div class='education-record'>
      <div class='education-record-year'>{record.year}</div>
      <div class='education-record-info'>
        <div class='education-record-info-institution'>{record.institution}</div>

        {#if record.certificates}
          {#each record.certificates as certificate}
            <a
              href='{certificate.url}'
              class='education-record-info-certificate-url'
              target='_blank'
            >
              <div class='education-record-info-certificate'>
                <!-- <div class='education-record-info-certificate-dateIssued'>{certificate.dateIssued}</div> -->
                <div class='education-record-info-certificate-name'>{certificate.name}</div>
              </div>
            </a>
          {/each}
        {/if}
      </div>
    </div>
  {/each}
</article>