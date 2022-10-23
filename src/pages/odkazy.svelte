<script lang="ts">
  import Header from "../components/header/Header.svelte";
  import Panel from "../components/shared/Panel.svelte";
  import ScrollArea from "../components/shared/ScrollArea.svelte";
  import Links from "../data/Links.md";
  import Markdown from "../components/shared/Markdown.svelte";
</script>

<Header />

<Panel>
  <ScrollArea>
    <Markdown>
      <Links />
    </Markdown>
  </ScrollArea>
</Panel>