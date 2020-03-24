<script>
  import Foreword from './Foreword.svelte';
  import Stack from './Stack.svelte';

  export let data = null;
</script>

<style>
  #cv {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 1fr 2fr;
    grid-template-areas:
      'foreword'
      'stack'
    ;
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
  {/if}
</article>