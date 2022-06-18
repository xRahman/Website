<script lang="ts">
  import Header from "../components/Header.svelte";
  import Panel from "../components/Panel.svelte";
  import PersonnalItems from "../data/PersonnalItems.md";
  import Markdown from "../components/Markdown.svelte";
</script>

<Header />

<Panel>
  <div class="AlignLeft">
    <Markdown>
      <PersonnalItems />
    </Markdown>
  </div>
</Panel>

<style>
  .AlignLeft
  {
    text-align: left;
  }
</style>