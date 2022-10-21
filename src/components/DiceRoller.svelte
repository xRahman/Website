<script lang="ts">
  import ScrollArea from "../components/ScrollArea.svelte";
  import { Dice } from "../utils/Dice"

  let rollCommand = "";
  let results: string[] = [];

  let diceRollerInput: HTMLElement | undefined;

  function setFocus(element: HTMLElement)
  {
    element.focus();
  }

  function preventLosingFocus(event: FocusEvent)
  {
    diceRollerInput?.focus();
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
  <form class="DiceRollerForm" on:submit|preventDefault={onSubmit}>
    <input
      class="DiceRollerInput"
      type="text"
      placeholder="Příklady: k6 + 4, 3kz + 2, 2k8"
      bind:value={rollCommand}
      use:setFocus
      bind:this={diceRollerInput}
      on:blur={preventLosingFocus}
    >
  </form>
  <ScrollArea>
    {#each results as result}
		  <p>{result}</p>
	  {/each}
  </ScrollArea>
</div>

<style>
  .DiceRoller
  {
    height: 100%;
    box-sizing: border-box;

    /* ------- Children size and positioning ------- */
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr;
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