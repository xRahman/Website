<script lang="ts">
  import Header from "../components/Header.svelte";
  import Panel from "../components/Panel.svelte";
  import Downloads from "../data/Downloads.md";
  import Markdown from "../components/Markdown.svelte";
</script>

<Header />

<Panel>
  <Markdown>
    <Downloads />
  </Markdown>
</Panel>