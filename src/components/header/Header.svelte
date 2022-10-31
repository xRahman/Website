<script lang="ts">
  import Logo from "./Logo.svelte";
  import Navbar from "../navbar/Navbar.svelte";
</script>

<div class="Header">
  <div class="Header-container">
    <Logo />
    <Navbar />
  </div>
</div>

<style>
  .Header
  {
    /* ----------- Background and border ----------- */
    background-image: url("/assets/images/marbleTransparent.png");
    background-repeat: repeat;
    border: 0.1rem ridge var(--panelBorderColor);
  }

  .Header-container
  {
    margin: 0 auto;
    max-width: 40rem;

    /* ------- Children size and positioning ------- */
    /* display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: auto 1fr;
    align-items: center; */

    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr;
    align-items: center;
  }

  /* @media screen and (max-width: 32rem)
  {
    .Header-container
    { */
      /* ------- Children size and positioning ------- */
      /* display: grid;
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 1fr;
      align-items: center;
    }
  } */
</style>