<script lang="ts">
  import RollSelect from "./rollSelect/RollSelect.svelte";
  import RollButton from "./rollSelect/RollButton.svelte";

  export let processCommand: (command: string) => void;

  let command = "";

  $: command = `k6 ${state.sign} ${state.constant}`;

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
    sign: signs[0],
    constant: constants[0]
  }
</script>

<form
  class="RollSelectForm"
  on:submit|preventDefault={ () => processCommand(command) }
>
  k6
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