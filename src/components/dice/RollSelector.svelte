<script lang="ts">
  import RollSelect from "./rollSelect/RollSelect.svelte";
  import RollButton from "./rollSelect/RollButton.svelte";

  export let value = "";

  $: value = `${command.diceQuantity}${command.diceSize}`
    + ` ${command.sign} ${command.constant}`;

  // const diceQuantities =
  //   Array.from({ length: 10 }, (v, i) => i + 1);
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
    "–"
  ];
  const constants =
  [
    "0", "1", "2", "3",
    "4", "5", "6", "7",
    "8", "9", "10", "11",
    "12", "13", "14", "15"
  ];

  const command =
  {
    diceQuantity: diceQuantities[0],
    diceSize: diceSizes[1],
    sign: signs[0],
    constant: constants[0]
  }
</script>

<form
  class="RollSelector"
  on:submit>
  <RollSelect
    items={diceQuantities}
    bind:value={command.diceQuantity}>
  </RollSelect>
  <RollSelect
    items={diceSizes}
    bind:value={command.diceSize}>
  </RollSelect>
  <RollSelect
    items={signs}
    bind:value={command.sign}>
  </RollSelect>
  <RollSelect
    items={constants}
    bind:value={command.constant}>
  </RollSelect>
  =
  <RollButton />
</form>

<style>
  .RollSelector
  {
    font-size: 2rem;
    padding: 0.4rem;
    border: 0.1rem solid black;
    border-radius: 0.1rem;
  }
</style>