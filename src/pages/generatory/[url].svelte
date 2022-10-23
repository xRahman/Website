<script lang="ts">
  import Header from "../../components/header/Header.svelte";
  import Panel from "../../components/shared/Panel.svelte";
  import ScrollArea from "../../components/shared/ScrollArea.svelte";
  import Markdown from "../../components/shared/Markdown.svelte";
  import NotFound from "../../data/NotFound.md";

  import Generator from "../../components/generators/Generator.svelte";
  import { randomTables } from "../../data/RandomTables";

  // This will be passed by routify
  // (it's the part of url after /generators/)
  export let url: string;

  // Expected format of url (after /generatory/)
  // is "{cathegoryId}-{generatorId}".
  const urlSplit = url.split("-");

  const cathegory = randomTables[urlSplit[0]];
  const table = cathegory.tables[urlSplit[1]];
</script>

<Header />

<Panel>
  <ScrollArea>
    {#if table}
      <h2>{cathegory.name} – {table.name}</h2>
      <!-- Make a copy of source data using [...sourceData] to
          ensure it doesn't get modified inside generator. -->
      <Generator sourceList={[...table.items]} itemType={table.itemType} />
    {:else}
      <Markdown>
        <NotFound />
      </Markdown>
    {/if}
  </ScrollArea>
</Panel>