<script lang="ts">
  import Header from "../components/Header.svelte";
  import Panel from "../components/Panel.svelte";
  import Markdown from "../components/Markdown.svelte";
  import News from "../data/News.md";
</script>

<Header />

<Panel>
  <Markdown>
    <News />
  </Markdown>
</Panel>