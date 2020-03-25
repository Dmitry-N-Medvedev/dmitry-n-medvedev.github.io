<script>
  import { onMount } from 'svelte';

  export let gridArea = null;
  export let data = null;

  let root = null;

  onMount(() => {
    root = document.documentElement;

    root.style.setProperty('--timeline-grid-area', gridArea);
  });
</script>

<style>
  :root {
    --timeline-grid-area: '';
    --timeline-item-dates-background-color: hsl(203, 37%, 63%);
    --timeline-item-dates-before-size: 2rem;
    --timeline-item-dates-before-background-color: white;
  }

  #timeline {
    display: grid;
    grid-area: var(--timeline-grid-area);
    grid-template-columns: 1fr;
    grid-auto-rows: min-content;
    grid-gap: 0.125rem;

    position: relative;
  }

  .timeline-item {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
    grid-gap: 0.125rem;
    grid-template-areas:
      'timeline-item-dates timeline-item-info'
    ;

    position: relative;
  }

  .timeline-item-dates {
    grid-area: timeline-item-dates;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 0.5rem;
    grid-template-areas:
      'timeline-item-dates-started timeline-item-dates-ended'
    ;

    position: relative;
  }

  .timeline-item-dates::before {
    content: "";
    position: absolute;
    top: calc(100% * 0.25);
    left: calc(50% - (var(--timeline-item-dates-before-size) / 2));
    width: var(--timeline-item-dates-before-size);
    height: var(--timeline-item-dates-before-size);
    background-color: var(--timeline-item-dates-before-background-color);
    border-radius: 50%;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    filter: drop-shadow(0px 0px 2px hsla(0, 0%, 100%, 1.0));
  }

  .timeline-item-dates-started,
  .timeline-item-dates-ended {
    display: flex;
    position: relative;

    background-color: var(--timeline-item-dates-background-color);
    padding: 0.5rem 1rem;
  }

  .timeline-item-dates-started {
    grid-area: timeline-item-dates-started;
    justify-content: flex-end;
  }

  .timeline-item-dates-ended {
    grid-area: timeline-item-dates-ended;
    justify-content: flex-start;
  }

  .timeline-item-info {
    grid-area: timeline-item-info;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: min-content;
    grid-gap: 0.125rem;
    grid-template-areas:
      'timeline-item-info-company'
      'timeline-item-info-role'
    ;
    padding: 0.5rem 1rem;

    position: relative;
  }

  .timeline-item-info-company,
  .timeline-item-info-role {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .timeline-item-info-company {
    grid-area: timeline-item-info-company;
  }

  .timeline-item-info-role {
    grid-area: timeline-item-info-role;
  }

  .timeline-item-info-company-name,
  .timeline-item-info-role-name {
    display: flex;
    flex: 1;

    position: relative;
  }

  .timeline-item-info-company-description,
  .timeline-item-info-role-responsibilities {
    display: flex;
    flex: 1;

    position: relative;
  }

  .timeline-item-info-stack {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: min-content;
    grid-gap: 0.125rem;

    position: relative;
  }

  .stack-item {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0.25rem;

    position: relative;
  }
</style>

<article id='timeline'>
  {#each data as record}
    <article class='timeline-item'>
      <div class='timeline-item-dates'>
        <div class='timeline-item-dates-started'>{record.started}</div>
        <div class='timeline-item-dates-ended'>{record.ended}</div>
      </div>
      <div class='timeline-item-info'>
        <div class='timeline-item-info-company'>
          <div class='timeline-item-info-company-name'>{record.info.company.name}</div>
          <div class='timeline-item-info-company-description'>{record.info.company.description}</div>
        </div>
        <div class='timeline-item-info-role'>
          <div class='timeline-item-info-role-name'>{record.info.role.name}</div>
          <div class='timeline-item-info-role-responsibilities'>{record.info.role.responsibilities}</div>
        </div>
        <div class='timeline-item-info-stack'>
          {#each record.info.stack as stack_item}
            <div class='stack-item'>{stack_item}</div>
          {/each}
        </div>
      </div>
    </article>
  {/each}
</article>