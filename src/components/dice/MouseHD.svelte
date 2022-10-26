<script lang="ts">
  import RollSelect from "./rollSelect/RollSelect.svelte";
  import RollButton from "./rollSelect/RollButton.svelte";

  export let processCommand: (command: string) => void;

  let command = "";

  $: command = `${state.diceQuantity}kz`
    + ` ${state.sign} ${state.constant}`;

  const diceQuantities =
  [
    "1", "2", "3", "4",
    "5", "6", "7", "8",
    "9", "10", "11", "12",
    "13", "14", "15", "16"
  ]
  const signs =
  [
    "+",
    "-"
  ];
  const constants =
  [
    "0", "1", "2", "3",
    "4", "5", "6", "7",
    "8", "9", "10", "11",
    "12", "13", "14", "15"
  ];

  const state =
  {
    diceQuantity: diceQuantities[0],
    sign: signs[0],
    constant: constants[0]
  }
</script>

<form
  class="RollSelectForm"
  on:submit|preventDefault={ () => processCommand(command) }
>
  <RollSelect
    items={diceQuantities}
    bind:value={state.diceQuantity}>
  </RollSelect>
  kz
  <RollSelect
    items={signs}
    bind:value={state.sign}>
  </RollSelect>
  <RollSelect
    items={constants}
    bind:value={state.constant}>
  </RollSelect>
  =
  <RollButton />
</form>

<style>
  .RollSelectForm
  {
    display: inline-block;
    white-space: nowrap;
    font-size: 2rem;
    margin: auto;
    user-select: none;
  }
</style>