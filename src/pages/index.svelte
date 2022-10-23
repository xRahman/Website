<script lang="ts">
  import About from "../data/About.md";
  import DiscordWidget from "../components/shared/DiscordWidget.svelte";
  import Header from "../components/header/Header.svelte";
  import Markdown from "../components/shared/Markdown.svelte";
  import Panel from "../components/shared/Panel.svelte";
  import ScrollArea from "../components/shared/ScrollArea.svelte";
  import { guiLocalization } from "../localization/guiLocalization";
</script>

<Header />

<Panel>
  <ScrollArea>
    <main>
      <Markdown>
        <About />
      </Markdown>
    </main>
    <hr />
    <p>{guiLocalization["cs"].connectToDiscord}</p>
    <DiscordWidget />
  </ScrollArea>
</Panel>