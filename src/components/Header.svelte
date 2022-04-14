<script lang="ts">
  import Logo from "./Logo.svelte";
  import Navbar from "./Navbar.svelte";
</script>

<div class="Header">
  <Logo />
  <Navbar />
</div>

<style>
  .Header
  {
    max-width: 40rem;

    /* ------- Children size and positioning ------- */
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;

    /* ----------- Background and border ----------- */
    background-image: url("/assets/images/marbleTransparent.png");
    background-repeat: repeat;
    border: 0.1rem ridge var(--panelBorderColor);
  }

  @media screen and (max-width: 32rem)
  {
    .Header
    {
      max-width: 40rem;

      /* ------- Children size and positioning ------- */
      display: grid;
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 1fr;
      align-items: center;
    }
  }
</style>