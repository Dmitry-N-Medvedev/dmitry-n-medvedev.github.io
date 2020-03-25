<script>
  import Contacts from './Contacts.svelte';
  import Foreword from './Foreword.svelte';
  import Stack from './Stack.svelte';
  import Timeline from './Timeline.svelte';
  import Education from './Education.svelte';
  import Footer from './Footer.svelte';

  export let data = null;
</script>

<style>
  #cv {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: min-content;
    grid-template-areas:
      'contacts'
      'foreword'
      'stack-header'
      'stack'
      'timeline-header'
      'timeline'
      'education-header'
      'education'
      'footer'
    ;
    grid-gap: 3vh;
    margin-top: 3vh;
  }

  .stack-header {
    grid-area: stack-header;
  }

  .timeline-header {
    grid-area: timeline-header;
  }

  .education-header {
    grid-area: education-header;
  }
</style>

<article id='cv'>
  {#if data}
    {#if data.contacts}
      <Contacts gridArea='contacts' data={data.contacts} />
    {/if}
    {#if data.foreword}
      <Foreword gridArea='foreword'>{data.foreword}</Foreword>
    {/if}
    {#if data.stack}
      <h2 class='stack-header'>tech stack</h2>
      <Stack gridArea='stack' data={data.stack} />
    {/if}
    {#if data.timeline}
      <h2 class='timeline-header'>employment record</h2>
      <Timeline gridArea='timeline' data={data.timeline} />
    {/if}
    {#if data.education}
      <h2 class='education-header'>education</h2>
      <Education gridArea='education' data={data.education} />
    {/if}
    <Footer>
    </Footer>
  {/if}
</article>