<script>
  import { onMount } from 'svelte';
  import A from '../html/A.svelte';
  import UL from '../html/UL.svelte';

  export let data = null;

  const currentLocale = () => (navigator.languages && navigator.languages.length) ? navigator.languages[0] : navigator.language;
  const formatDate = new Intl.DateTimeFormat(currentLocale());

  const dateIssued = (date) => {
    return formatDate.format(new Date(date));
  };
</script>

<style>
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
    justify-content: center;
    align-items: center;
    padding: var(--layout-padding);
  }

  .education-record-info {
    grid-area: education-record-info;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
      'education-record-info-institution'
      'education-record-info-certificates'
    ;
  }

  .education-record-info > * {
    width: 100%;
  }

  .education-record-info-institution {
    grid-area: education-record-info-institution;
    display: flex;
    justify-content: flex-end;
    font-size: calc(var(--font-size) * 1.25);
    color: hsl(0, 0%, 98%);
    background-color: hsla(0, 0%, 44%, 1);
    padding: 1vh 0.25vw;
    width: 100%;
  }

  .education-record-info-certificates {
    grid-area: education-record-info-certificates;
    display: flex;
    margin-top: 2vh;
    flex: 1;
  }

  :global(.education-record-info-certificates > ul) {
    width: 100%;
  }

  :global(.education-record-info-certificates > ul > li) {
    display: flex;
  }

  .education-record-info-certificate {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: min-content;
    grid-gap: calc(var(--layout-padding) * 10);
    width: 100%;
  }

  /* :global(.education-record-info-certificate > a) {
    display: flex;
    flex: 1;
  }

  :global(.education-record-info-certificate > a:nth-of-type(2n)) {
    justify-content: flex-end;
  } */

  .education-record-info-certificate-name,
  .education-record-info-certificate-id {
    display: flex;
    flex: 1;
  }
</style>

<article id='education-container'>
  {#if data.length > 0}
    <h2>education</h2>
  {/if}
  {#each data as record}
    <div class='education-record' itemscope itemprop='http://schema.org/EducationalOccupationalProgram'>
      <div class='education-record-year' itemprop='endDate'>{record.year}</div>
      <div class='education-record-info'>
        <A href='{record.url}' target='_blank'>
          <div class='education-record-info-institution'>
            {record.institution}
            <meta itemprop='name' content='{record.institution}'>
          </div>
        </A>
        {#if record.certificates && record.certificates.length > 0}
          <div class='education-record-info-certificates'>
            <UL>
              {#each record.certificates as certificate}
                <li class='education-record-info-certificate' itemscope itemprop='additionalType' href='http://schema.org/educationalCredentialAwarded'>
                  <meta itemprop='endDate' content='{data.dateIssued}'>
                  {#if certificate.name}
                  <A href='{certificate.url}' underline={false}>
                    <div class='education-record-info-certificate-name' itemprop='name'>{certificate.name}</div>
                    <meta itemprop='educationalCredentialAwarded' content='{certificate.name}'>
                    <meta itemprop='url' content='{certificate.url}'>
                  </A>
                  {/if}
                  {#if certificate.id}
                    <A href='{certificate.url}' underline={false}>
                      <div class='education-record-info-certificate-id'>ID: {certificate.id}</div>
                    </A>
                  {:else}
                    <A href='{certificate.url}' underline={false}>
                      <div class='education-record-info-certificate-id'>&nbsp;&nbsp;&nbsp;</div>
                    </A>
                  {/if}
                </li>
              {/each}
            </UL>
          </div>
        {/if}
      </div>
    </div>
  {/each}
</article>