<script lang="ts">
  import Header from "../components/Header.svelte";
  import Panel from "../components/Panel.svelte";
  import ScrollArea from "../components/ScrollArea.svelte";
  import Links from "../data/Links.md";
  import Markdown from "../components/Markdown.svelte";
</script>

<Header />

<Panel>
  <ScrollArea>
    <Markdown>
      <Links />
    </Markdown>
  </ScrollArea>
</Panel>