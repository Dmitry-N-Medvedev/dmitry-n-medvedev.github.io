<script>
  import GridBlock from '../Grid/GridBlock.svelte';

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
    grid-gap: 3vh;
    width: 100%;
  }
</style>

<article id='cv'>
  {#if data}
    {#if data.contacts}
      <GridBlock>
        <Contacts data={data.contacts} />
      </GridBlock>
    {/if}
    {#if data.foreword}
      <GridBlock>
        <Foreword>{data.foreword}</Foreword>
      </GridBlock>
    {/if}
    {#if data.stack}
      <GridBlock>
        <Stack data={data.stack} />
      </GridBlock>
    {/if}
    {#if data.timeline}
      <GridBlock>
        <Timeline data={data.timeline} />
      </GridBlock>
    {/if}
    {#if data.education}
      <GridBlock>
        <Education data={data.education} />
      </GridBlock>
    {/if}
    <Footer>
    </Footer>
  {/if}
</article>