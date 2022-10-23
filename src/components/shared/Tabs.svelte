<script lang="ts">
  import HeaderText from "../shared/HeaderText.svelte";

  export let tabs: { id: string, name: string }[] = [];
  export let activeTabId: string;
</script>

<div class = "Tabs">
  {#each tabs as tab, i}
    <div
      class="Tab"
      class:ActiveTab={ tabs[i].id === activeTabId }
      on:click={() => { activeTabId = tabs[i].id; }}
    >
      <HeaderText>{tab.name}</HeaderText>
    </div>
  {/each}
</div>

<style>
  .Tabs
  {
    justify-self: center;

    margin-bottom: 1rem;
  }
  .Tab
  {
    display: inline-block;

    margin-left: 1rem;
    margin-right: 1rem;

    font-size: 1rem;

    cursor: pointer;
  }
  .ActiveTab
  {
    border-bottom: 0.1rem solid black;
  }
</style>