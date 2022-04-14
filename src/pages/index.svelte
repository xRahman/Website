<script lang="ts">
  import About from "../data/About.md";
  import DiscordWidget from "../components/DiscordWidget.svelte";
  import Header from "../components/Header.svelte";
  import Panel from "../components/Panel.svelte";
  import { guiLocalization } from "../localization/guiLocalization";
</script>

<Header />

<Panel>
  <main>
    <About />
  </main>
  <hr />
  <p>{guiLocalization["cs"].connectToDiscord}</p>
  <DiscordWidget />
</Panel>