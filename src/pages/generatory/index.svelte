<script lang="ts">
  import Header from "../../components/Header.svelte";
  import Panel from "../../components/Panel.svelte";
  import { randomTables } from "../../data/RandomTables";

  const tables: { id:string, heading:string }[] = [];

  for (const [key, value] of Object.entries(randomTables))
  {
    tables.push({ id: key, heading: value.heading });
  }
</script>

<Header />
<Panel>
  {#each tables as table}
    <a href="/generatory/{table.id}" class="LinkToGenerator">
      {table.heading}
    </a>
	{/each}
</Panel>

<style>
  .LinkToGenerator
  {
    font-size: 1.4rem;
    display: block;
  }
</style>