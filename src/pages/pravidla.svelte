<script lang="ts">
  // import { onMount } from "svelte";
  import Header from "../components/header/Header.svelte";
  import Panel from "../components/shared/Panel.svelte";
  import ScrollArea from "../components/shared/ScrollArea.svelte";
  import { guiLocalization } from "../localization/guiLocalization";
  import PDFObject from "pdfobject";

  const pdfNotSupported = guiLocalization.cs.rules.pdfNotSupported;
  const downloadHere = guiLocalization.cs.rules.downloadHere;
  const pdfPath = "/pravidla/DrDk6-pravidla.pdf";
</script>

<Header></Header>

{#if PDFObject.supportsPDFs}
  <embed src={pdfPath} type="application/pdf" width="100%" height="100%">
{:else}
  <Panel>
    <ScrollArea>
      <p>{pdfNotSupported}</p>
      <ul>
        <li><a href={pdfPath} target="_blank">{downloadHere}</a></li>
      </ul>
      </ScrollArea>
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