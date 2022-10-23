<script lang="ts">
  import Header from "../../components/header/Header.svelte";
  import Panel from "../../components/shared/Panel.svelte";
  import ScrollArea from "../../components/shared/ScrollArea.svelte";
  import { randomTables } from "../../data/RandomTables";
</script>

<Header />
<Panel>
  <ScrollArea>
    {#each Object.entries(randomTables) as [cathegorId, cathegory]}
      <p class="GeneratorCathegory">{cathegory.name}</p>
      {#each Object.entries(cathegory.tables) as [generatorId, table]}
        <a href="/generatory/{cathegorId}-{generatorId}" class="Generator">
          {table.name}
        </a>
      {/each}
    {/each}
  </ScrollArea>
</Panel>

<style>
  .GeneratorCathegory
  {
    font-size: 1.2rem;
    line-height: 142%;
    margin-bottom: 0.4rem;
  }

  .Generator
  {
    display: block;
    font-size: 1.1rem;
    line-height: 142%;
  }
</style>