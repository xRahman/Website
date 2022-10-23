<script lang="ts">
  import RollOptions from "./RollOptions.svelte";

  export let value = "";
  export let items: string[] = [];

  let menuVisible = false;

  function updateValue(newValue: string)
  {
    value = newValue;
  };
</script>

<div
  class="RollSelect"
  on:click={ () => { menuVisible = !menuVisible; } }>
  {value}
  {#if (menuVisible)}
    <RollOptions
      items={items}
      updateValue={updateValue}
    />
  {/if}
</div>

<style>
  .RollSelect
  {
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    vertical-align: bottom;

    cursor: pointer;

    padding: 0.05rem 0.2rem;

    background-color: rgba(240, 240, 240, 0.7);

    border: 0.01rem solid black;
    border-radius: 0.1rem;

    /* Text color */
    color: rgb(60, 30, 0);
  }
  .RollSelect:hover
  {
    background-color: rgba(255, 255, 255, 0.8);
  }
  .RollSelect:active
  {
    background-color: rgba(220, 220, 220, 0.6);
  }

  /* This adds a "⏷" below the element. */
  /* .RollSelect::after
  {
    position: absolute;
    padding: 0;
    top: 69%;
    left: 0;
    right: 0;

    content: "⏷";
    font-size: 0.7em;
    text-align: center;
  } */
</style>