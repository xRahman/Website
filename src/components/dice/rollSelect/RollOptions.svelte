<script lang="ts">
  import RollOption from "./RollOption.svelte";

  export let items: string[] = [];
  export let updateValue: (newValue: string) => void;
</script>

<ul class="RollOptions">
  {#each items as item}
    <RollOption
      value={item}
      updateValue={updateValue}
    >
      {item}
    </RollOption>
  {/each}
</ul>

<style>
  .RollOptions
  {
    position: absolute;
    list-style: none;
    padding: 0;
    top: 100%;
    left: 0;

    background-color: rgba(240, 240, 240, 0.6);
    border: 0.06rem solid black;
    border-radius: 0.1rem;

    display: grid;
    grid-template-columns: repeat(4, max-content);
    grid-template-rows: repeat(auto-fill, 1fr);
    align-items: center;
  }
</style>