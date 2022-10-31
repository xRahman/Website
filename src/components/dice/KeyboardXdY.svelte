<script lang="ts">
  import { Dice } from "../../utils/Dice";

  import RollButton from "./RollButton.svelte";

  export let processCommand: (command: string) => void;

  let command = "";
  let rollButtonDisabled = true;

  let inputElement: HTMLInputElement | undefined;

  function setFocus(element: HTMLElement)
  {
    element.focus();
  }

  function preventLosingFocus(event: FocusEvent)
  {
    inputElement?.focus();
  }

  function submit()
  {
    // Select text in input element.
    inputElement?.select();

    processCommand(command);
  }

  function validateCommand()
  {
    rollButtonDisabled = !Dice.isCommandValid(command);
  }
</script>

<form
  class="DiceForm"
  on:submit|preventDefault={submit} >
  <input
    class="DiceInput"
    type="text"
    placeholder="Příklady: k6 + 4, 3kz + 2, 2k8"
    bind:value={command}
    use:setFocus
    bind:this={inputElement}
    on:blur={preventLosingFocus}
    on:input={validateCommand} />
  <RollButton disabled={rollButtonDisabled} />
</form>

<style>
  .DiceForm
  {
    padding-bottom: 1rem;
 
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr;
    grid-gap: 0.4rem;
  }

  .DiceInput
  {
    box-sizing: border-box;
    display: inline-block;
    background-color: rgba(255, 255, 255, 0.7);
    border: 0.08rem solid black;
    border-radius: 0.1rem;
    padding: 0.2rem 0.5rem;
  }
  .DiceInput:focus
  {
    background-color: rgba(255, 255, 255, 0.8);
    border: 0.1rem solid black;
    border-radius: 0.1rem;
    outline:none;
  }
</style>