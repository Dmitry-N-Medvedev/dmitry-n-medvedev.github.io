<script>
  import Foreword from './Foreword.svelte';
  import Stack from './Stack.svelte';
  import Timeline from './Timeline.svelte';

  export let data = null;
</script>

<style>
  #cv {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: min-content;
    grid-template-areas:
      'foreword'
      'stack'
      'timeline'
    ;
    grid-gap: 3vh;
  }
</style>

<article id='cv'>
  {#if data}
    {#if data.foreword}
      <Foreword gridArea='foreword'>{data.foreword}</Foreword>
    {/if}
    {#if data.stack}
      <Stack gridArea='stack' data={data.stack} />
    {/if}
    {#if data.timeline}
      <Timeline gridArea='timeline' data={data.timeline} />
    {/if}
  {/if}
</article>