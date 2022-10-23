<script lang="ts">
  import HeaderText from "../shared/HeaderText.svelte";
  import { guiLocalization } from "../../localization/guiLocalization";
</script>

<a class="Logo" href="{"./"}">
  <img class="Logo-image" src="/assets/images/logoTransparent.png" alt="Logo" />
  <HeaderText>
    {guiLocalization["cs"].title}
  </HeaderText>
</a>

<style>
  .Logo
  {
    /* Remove default styling of hyperlink.
       Note that this must be first unless you
       want to also remove your own styling. */
    all: unset;

    font-size: 1.8rem;

    cursor: pointer;

    justify-self: center;

    /* Center contained image and text vertically. */
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
  }
  
  .Logo-image
  {
    width: 1.8rem;
    height: 1.8rem;

    margin: 0.5rem;

    /* By default images are aligned to text baseline, which
       makes the <img> element higher than it should be. */
    vertical-align: top;
  }

  /* @media screen and (max-width: 32rem)
  {
    .Logo
    {
      justify-self: center;
    }
  } */

  @media screen and (max-width: 24rem)
  {
    .Logo
    {
      font-size: 1.2rem;
    }

    .Logo-image
    {
      width: 1.2rem;
      height: 1.2rem;
      margin: 0.3rem;
    }
  }


</style>