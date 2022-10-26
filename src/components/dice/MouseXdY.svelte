<script lang="ts">
  import RollSelect from "./rollSelect/RollSelect.svelte";
  import RollButton from "./rollSelect/RollButton.svelte";

  export let processCommand: (command: string) => void;

  let command = "";

  $: command = `${state.diceQuantity}${state.diceSize}`
    + ` ${state.sign} ${state.constant}`;

  const diceQuantities =
  [
    "1", "2", "3", "4",
    "5", "6", "7", "8",
    "9", "10", "11", "12",
    "13", "14", "15", "16"
  ]
  // const diceSizes =
  // [
  //   "kz", "k4", "k6", "k8", "k10", "k12", "k16", "k20"
  // ];
  const diceSizes =
  [
    "kz", "k2", "k3", "k4",
    "k5", "k6", "k7", "k8",
    "k9", "k10", "k11", "k12",
    "k13", "k14", "k15", "k16",
    "k17", "k18", "k19","k20"
  ];
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
    diceSize: diceSizes[5],
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
  <RollSelect
    items={diceSizes}
    bind:value={state.diceSize}>
  </RollSelect>
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