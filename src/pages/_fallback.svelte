<script lang="ts">
  import Header from "../components/Header.svelte";
  import Panel from "../components/Panel.svelte";
  import Markdown from "../components/Markdown.svelte";
  import NotFound from "../data/NotFound.md";
</script>

<Header />

<Panel>
  <Markdown>
    <NotFound />
  </Markdown>
</Panel>