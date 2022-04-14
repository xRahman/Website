<script lang="ts">
  import "svelte";
  import { Router } from "@sveltech/routify";
  import { routes } from "@sveltech/routify/tmp/routes";
  import { guiLocalization } from "./localization/guiLocalization";

  const language = "cs";
</script>

<svelte:head>
	<title>{guiLocalization[language].title}</title>
</svelte:head>


<Router routes={routes}/>

<style>
  /* Style the <html> element. */
  :global(html)
  {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;

    width: 100%;
    height: 100%;
  }

  /* Style the <body> element. */
  :global(body)
  {
    /* ------------- Size and position ------------- */

    /* Make the <body> as big as viewport. */
    width: 100%;
    height: 100%;

    /* ------- Children size and positioning ------- */

    display: grid;
    grid-template-rows: auto minmax(0, 1fr);
    justify-content: center;

    /*--------------- Default Font ---------------- */

    color: rgb(60, 30, 0);
    font-family: Cambria;

    /* ---------------- Background ----------------- */

    background-image: url(/assets/images/dragons.jpg);
    
    /* Make the background image always cover whole area. */
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
</style>