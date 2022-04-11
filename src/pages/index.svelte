<script lang="ts">
  import Header from "../components/Header.svelte";
  import Panel from "../components/Panel.svelte";
  import About from "../data/About.md";
  import { guiLocalization } from "../localization/guiLocalization";
</script>

<Header />

<Panel>
  <main>
    <About />
  </main>
  <hr />
  <p>{guiLocalization["cs"].connectToDiscord}</p>
  <iframe class="Discord" title="Discord server" src="https://discord.com/widget?id=913419391381676102&theme=dark" width="350" height="500" allowtransparency frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" />
</Panel>

<style>
  .Discord
  {
    /* Center the iframe horizontally. */
    display: block;

    margin: 0 auto;
    max-width: 100%;
  }
</style>