<script lang="ts">
  import Header from "../../components/Header.svelte";
  import Panel from "../../components/Panel.svelte";
  import Markdown from "../../components/Markdown.svelte";
  import NotFound from "../../data/NotFound.md";

  import Generator from "../../components/Generator.svelte";
  // import { personnalItems } from "../../data/PersonnalItems";
  import { randomTables } from "../../data/RandomTables";

  export let generatorId: string;

  const table = randomTables[generatorId];
</script>

<Header />

<Panel>
  {#if table}
    <h2>{table.heading}</h2>
    <Generator sourceList={table.items} itemType={table.itemType} />
  {:else}
    <Markdown>
      <NotFound />
    </Markdown>
  {/if}
</Panel>