<script lang="ts">
  import Tabs from "../shared/Tabs.svelte";
  import ScrollArea from "../shared/ScrollArea.svelte";
  import MouseXdY from "./MouseXdY.svelte";
  import MouseD6 from "./MouseD6.svelte";
  import MouseHD from "./MouseHD.svelte";
  import { Dice } from "../../utils/Dice"

  let rollCommand = "";
  let results: string[] = [];

  const tabs =
  [
    { id: "d6hd-mouse", name: "🖰 k6, kz" },
    { id: "XdY-mouse", name: "🖰 XkY" },
    { id: "XdY-keyboard", name: "⌨ XkY" }
  ];
  let activeTab = tabs[0].id;

  let diceRollerInput: HTMLElement | undefined;

  function setFocus(element: HTMLElement)
  {
    element.focus();
  }

  function preventLosingFocus(event: FocusEvent)
  {
    diceRollerInput?.focus();
  }

  function onRollSelectorSubmit(event: SubmitEvent)
  {
    event.preventDefault();

    const rollResult =
      `[${rollCommand}]: ${Dice.evaluate(rollCommand)}`;

    // Svelte will notice the assignment and rerender the list.
    results = [rollResult, ...results];

    rollCommand = "";
  }

  function onSubmit(event: SubmitEvent)
  {    
    const rollResult =
      `[${rollCommand}]: ${Dice.evaluate(rollCommand)}`;

    // Svelte will notice the assignment and rerender the list.
    results = [rollResult, ...results];

    rollCommand = "";
  }
</script>

<div class="DiceRoller">
  <Tabs
    tabs={tabs}
    bind:activeTabId={activeTab}
  />
  {#if activeTab === "d6hd-mouse"}
    <div class = D6HDMouseContainer>
      <MouseD6
        on:submit={onRollSelectorSubmit}
        bind:value={rollCommand}/>
      <MouseHD
        on:submit={onRollSelectorSubmit}
        bind:value={rollCommand}/>
    </div>
  {/if}
  {#if activeTab === "XdY-mouse"}
    <MouseXdY
      on:submit={onRollSelectorSubmit}
      bind:value={rollCommand}/>
  {/if}
  <!-- {#if activeTab === "XdY-keyboard"}
    <KeyboardXdY
      on:submit={onRollSelectorSubmit}
      bind:value={rollCommand}/>
  {/if} -->
  <ScrollArea>
    {#each results as result}
		  <p>{result}</p>
	  {/each}
  </ScrollArea>
  <!-- <MouseXdY
    on:submit={onRollSelectorSubmit}
    bind:value={rollCommand}
    />
  <MouseD6
    on:submit={onRollSelectorSubmit}
    bind:value={rollCommand}
    />
  <MouseHD
    on:submit={onRollSelectorSubmit}
    bind:value={rollCommand}
    />
  <form class="DiceRollerForm" on:submit|preventDefault={onSubmit}>
    <input
      class="DiceRollerInput"
      type="text"
      placeholder="Příklady: k6 + 4, 3kz + 2, 2k8"
      bind:value={rollCommand}
      use:setFocus
      bind:this={diceRollerInput}
      on:blur={preventLosingFocus} />
  </form>
  <ScrollArea>
    {#each results as result}
		  <p>{result}</p>
	  {/each}
  </ScrollArea> -->
</div>

<style>
  .DiceRoller
  {
    height: 100%;
    box-sizing: border-box;

    /* ------- Children size and positioning ------- */
    display: grid;
    grid-template-rows: auto auto 1fr;
    grid-template-columns: 1fr;
  }
  .D6HDMouseContainer
  {
    /* display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    align-items: center; */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    grid-column-gap: 2rem;
    grid-row-gap: 1rem;
    margin-left: 2rem;
    margin-right: 2rem;
    margin-bottom: 1rem;
    /* display: grid; */
    /* grid-template-columns: repeat(auto-fill, auto);
    grid-auto-columns: fit-content; */
    /* grid-template-columns: repeat(auto-fit, minmax(max-content, 1fr)); */
    /* grid-template-columns: repeat(auto-fit, minmax(0, 1fr)); */
    /* grid-template-columns: repeat(auto-fill, 20rem); */
    /* grid-template-columns: repeat(auto-fill, 1fr);
    grid-template-rows: repeat(auto-fill, 1fr); */
    /* grid-auto-flow: column; */
    /* grid-column-gap: 2rem;
    grid-row-gap: 1rem; */
  }
  .DiceRollerForm
  {
    /* width:100%; */
    /* padding-top: 2rem;
    padding-left: 2rem;
    padding-right: 2rem; */
    padding-bottom: 1rem;
    /* padding: 2rem; */
  }
  /* .DiceRollerForm
  {
    display: inline;
  } */
  .DiceRollerInput
  {
    width: 100%;
    box-sizing: border-box;
    display: inline-block;
    background-color: rgba(255, 255, 255, 0.7);
    border: 0.08rem solid black;
    border-radius: 0.1rem;
    padding: 0.2rem 0.5rem;
  }
  .DiceRollerInput:focus
  {
    background-color: rgba(255, 255, 255, 0.8);
    border: 0.1rem solid black;
    border-radius: 0.1rem;
    outline:none;
  }
</style>