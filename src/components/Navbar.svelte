<script lang="ts">
  import Navlink from "./Navlink.svelte";
  import { guiLocalization } from "../localization/guiLocalization";

  const navbarLocalization = guiLocalization.cs.navbar;
</script>

<nav class="Navbar">
  {#each navbarLocalization as navlink}
    <Navlink href="{navlink.route}">
      {navlink.label}
    </Navlink>
  {/each}
</nav>

<style>
  .Navbar
  {
    justify-self: end;
  }

  @media screen and (max-width: 38rem)
  {
    .Navbar
    {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      align-items: center;
    }
  }

  @media screen and (max-width: 32rem)
  {
    .Navbar
    {
      display: block;
      justify-self: center;
    }
  }
</style>