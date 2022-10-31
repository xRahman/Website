<script lang="ts">
  import RollSelect from "./select/RollSelect.svelte";
  import RollButton from "./RollButton.svelte";
  import RollSelectForm from "./RollSelectForm.svelte";

  export let processCommand: (command: string) => void;

  const diceQuantities =
  [
    "1", "2", "3", "4",
    "5", "6", "7", "8",
    "9", "10", "11", "12",
    "13", "14", "15", "16"
  ];

  const signs = [ "+", "-" ];

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

  function submit(event: SubmitEvent)
  {
    event.preventDefault();
  
    processCommand
    (
      `${state.diceQuantity}kz${state.sign}${state.constant}`
    );
  }
</script>

<RollSelectForm on:submit={submit}>
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
</RollSelectForm>