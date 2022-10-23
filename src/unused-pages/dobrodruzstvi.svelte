<script lang="ts">
  import Adventures from "../data/Adventures.md";
  import Header from "../components/header/Header.svelte";
  import Markdown from "../components/shared/Markdown.svelte";
  import Panel from "../components/shared/Panel.svelte";
  import ScrollArea from "../components/shared/ScrollArea.svelte";
</script>

<Header />

<Panel>
  <ScrollArea>
    <Markdown>
      <Adventures />
    </Markdown>
  </ScrollArea>
</Panel>