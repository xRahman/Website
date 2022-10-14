<script lang="ts">
  import Header from "../components/Header.svelte";
  import Panel from "../components/Panel.svelte";
  import ScrollArea from "../components/ScrollArea.svelte";
  import Markdown from "../components/Markdown.svelte";
  import NotFound from "../data/NotFound.md";
</script>

<Header />

<Panel>
  <ScrollArea>
    <Markdown>
      <NotFound />
    </Markdown>
  </ScrollArea>
</Panel>