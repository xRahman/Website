<script lang="ts">
  import Header from "../components/header/Header.svelte";
  import Panel from "../components/shared/Panel.svelte";
  import ScrollArea from "../components/shared/ScrollArea.svelte";
  import Sounds from "../components/sounds/Sounds.svelte";
</script>

<Header />

<Panel>
  <ScrollArea>
    <Sounds />
  </ScrollArea>
</Panel>