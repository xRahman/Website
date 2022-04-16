<script lang="ts">
  import Adventures from "../data/Adventures.md";
  import Header from "../components/Header.svelte";
  import Markdown from "../components/Markdown.svelte";
  import Panel from "../components/Panel.svelte";
</script>

<Header />

<Panel>
  <Markdown>
    <Adventures />
  </Markdown>
</Panel>