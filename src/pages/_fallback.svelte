<script lang="ts">
  import Header from "../components/header/Header.svelte";
  import Panel from "../components/shared/Panel.svelte";
  import ScrollArea from "../components/shared/ScrollArea.svelte";
  import Markdown from "../components/shared/Markdown.svelte";
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