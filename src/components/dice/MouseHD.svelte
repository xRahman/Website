<script lang="ts">
  import RollSelect from "./rollSelect/RollSelect.svelte";
  import RollButton from "./rollSelect/RollButton.svelte";

  export let value = "";

  $: value = `${command.diceQuantity}kz`
    + ` ${command.sign} ${command.constant}`;

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
    sign: signs[0],
    constant: constants[0]
  }
</script>

<form
  class="RollSelectForm"
  on:submit
>
  <RollSelect
    items={diceQuantities}
    bind:value={command.diceQuantity}>
  </RollSelect>
  kz
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
  .RollSelectForm
  {
    display: inline-block;
    white-space: nowrap;
    font-size: 2rem;
    /* padding: 0.4rem;
    border: 0.1rem solid black;
    border-radius: 0.1rem; */
  }
</style>