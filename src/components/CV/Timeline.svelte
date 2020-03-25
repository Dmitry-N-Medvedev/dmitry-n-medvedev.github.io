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
    --timeline-item-dates-background-color: hsla(203, 37%, 63%, 1.0);
    --timeline-item-dates-before-size: 2vw;
    --timeline-item-dates-before-background-color: var(--bg-color);
    --timeline-item-info-company-description-padding-top: 1.5vh;
  }

  #timeline {
    display: grid;
    grid-area: var(--timeline-grid-area);
    grid-template-columns: 1fr;
    grid-auto-rows: min-content;
    grid-gap: calc(var(--layout-padding) * 24);

    position: relative;
  }

  .timeline-item {
    display: grid;
    grid-template-columns: 8vw 1fr;
    grid-template-rows: 1fr;
    grid-gap: var(--layout-padding);
    grid-template-areas:
      'timeline-item-dates timeline-item-info'
    ;
    padding: 2.5vh 1.5vw;
    position: relative;
  }
  
  .timeline-item:hover {
    background-color: var(--bg-color);
    filter: drop-shadow(0px 0px 3px var(--drop-shadow-color));
  }

  .timeline-item-dates {
    grid-area: timeline-item-dates;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, min-content);
    grid-gap: 0.5vh;
    grid-template-areas:
      'timeline-item-dates-started'
      'timeline-item-dates-ended'
    ;

    position: relative;
  }

  .timeline-item-dates-started,
  .timeline-item-dates-ended {
    display: flex;
    position: relative;
    justify-content: center;
  }

  .timeline-item-dates-started {
    grid-area: timeline-item-dates-started;
    align-items: flex-end;
  }

  .timeline-item-dates-ended {
    grid-area: timeline-item-dates-ended;
    align-items: flex-start;
  }

  .timeline-item-info {
    grid-area: timeline-item-info;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: min-content;
    grid-gap: 3vh;
    grid-template-areas:
      'timeline-item-info-company'
      'timeline-item-info-role'
    ;
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

  .timeline-item-info-company-name {
    background-color: hsla(0, 0%, 44%, 1);
    color: hsl(0, 0%, 98%);
  }
  
  .timeline-item-info-company-name,
  .timeline-item-info-role-name {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    font-size: calc(var(--font-size) * 1.25);
    position: relative;
    padding: 1vh 0.25vw;
  }

  .timeline-item-info-company-description {
    display: flex;
    flex: 1;
    padding: 1.5vh 0;

    position: relative;
  }

  .timeline-item-info-company-description {
    padding: var(--timeline-item-info-company-description-padding-top) 0;
    font-variation-settings: var(--font-variation-settings-description);
    line-height: 2.5vh;
    justify-content: flex-start;
    margin: 1.5vh 0;
    line-height: 3.5vh;
  }

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(var(--font-size) * 1.5);
  }

  .timeline-item-info-role-responsibilities,
  .timeline-item-info-stack {
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-template-rows: min-content;
  }

  .timeline-item-info-role-responsibilities {
    grid-template-areas:
    'timeline-item-info-role-responsibilities-header timeline-item-info-role-responsibilities-items'
    ;
    margin-top: 3.5vh;
  }

  .timeline-item-info-role-responsibilities-header {
    grid-area: timeline-item-info-role-responsibilities-header;
    padding: 1vh 0;
  }

  .timeline-item-info-role-responsibilities-items {
    grid-area: timeline-item-info-role-responsibilities-items;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 1vh 0.25vw;
  }

  .timeline-item-info-role-responsibilities ul {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: min-content;
    grid-gap: calc(var(--layout-padding) * 4);
    padding: 0 0 0 2vw;
    margin: 0;
    list-style-type: decimal-leading-zero;
  }
  
  .timeline-item-info-stack {
    grid-template-areas:
      'timeline-item-info-stack-header timeline-item-info-stack-items'
    ;
  }

  .timeline-item-info-stack-header {
    grid-area: timeline-item-info-stack-header;
    display: flex;
  }

  .timeline-item-info-stack-items {
    grid-area: timeline-item-info-stack-items;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: min-content;
    grid-gap: var(--layout-padding);

    position: relative;
  }

  .stack-item {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    padding: 1.25vh 0.5vw;
    position: relative;
    background-color: var(--highlighted-background-color);
  }

  .kv-key,
  .kv-value {
    display: flex;
    align-items: center;
    align-items: flex-start;
  }

  .kv-key {
    flex: 1;
    justify-content: flex-start;
    font-variation-settings: "wght" 4, "opsz" 1, "SRIF" 10;
    font-size: calc(var(--font-size) * 1.25);
  }

  .kv-value {
    flex: 2;
    justify-content: flex-end;
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
          <div class='timeline-item-info-company-name'>
            {record.info.company.name}
          </div>
          {#if record.info.company.description.length > 0}
            <div class='timeline-item-info-company-description'>{record.info.company.description}</div>
          {/if}
        </div>
        <div class='timeline-item-info-role'>
          <div class='timeline-item-info-role-name'>
            {record.info.role.name}
          </div>
          <div class='timeline-item-info-role-responsibilities'>
            <div class='timeline-item-info-role-responsibilities-header'>responsibilities</div>
            <div class='timeline-item-info-role-responsibilities-items'>
              {#if record.info.role.responsibilities.length === 1}
                {record.info.role.responsibilities}
              {:else}
                <ul>
                  {#each record.info.role.responsibilities as responsibility}
                    <li>{responsibility}</li>
                  {/each}
                </ul>
              {/if}
            </div>
          </div>
        </div>
        {#if record.info.stack.length > 0}
        <div class='timeline-item-info-stack'>
            <div class='timeline-item-info-stack-header'>stack</div>
            <div class='timeline-item-info-stack-items'>
              {#each record.info.stack as stack_item}
                <div class='stack-item'>{stack_item}</div>
              {/each}
            </div>
          </div>
        {/if}
      </div>
    </article>
  {/each}
</article>