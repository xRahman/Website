<script lang="ts">
  // import { onMount } from "svelte";
  import Header from "../components/Header.svelte";
  import Panel from "../components/Panel.svelte";
  import { guiLocalization } from "../localization/guiLocalization";
  import PDFObject from "pdfobject";

  const pdfNotSupported = guiLocalization.cs.rules.pdfNotSupported;
  const downloadHere = guiLocalization.cs.rules.downloadHere;
</script>

<Header></Header>

{#if PDFObject.supportsPDFs}
  <embed src="/data/rules/Dracak-latest.pdf" type="application/pdf" width="100%" height="100%">
{:else}
  <Panel>
    <p>{pdfNotSupported}</p>
    <ul>
      <li><a href="[url]">{downloadHere}</a></li>
    </ul>
  </Panel>
{/if}

<!-- Embedding using google drive -->
<!-- <iframe
  frameborder="0"
  scrolling="no"
  width="640"
  height="480"
  src="https://drive.google.com/file/d/1MxI_A-DIasm9i2AQSANWzZuQbdvPpwwd/preview"
>
</iframe> -->