<script lang="ts">
  import Adventures from "../data/Adventures.md";
  import Header from "../components/Header.svelte";
  import Markdown from "../components/Markdown.svelte";
  import Panel from "../components/Panel.svelte";
  import ScrollArea from "../components/ScrollArea.svelte";
</script>

<Header />

<Panel>
  <ScrollArea>
    <Markdown>
      <Adventures />
    </Markdown>
  </ScrollArea>
</Panel>