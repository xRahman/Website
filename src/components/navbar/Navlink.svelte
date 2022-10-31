<script lang="ts">
  import HeaderText from "../shared/HeaderText.svelte";

  export let href = "/";
</script>

<a class="Navlink" href="{href}">
  <HeaderText>
    <slot />
  </HeaderText>
</a>

<style>
  .Navlink
  {
    /* Remove default styling of hyperlink.
       Note that this must be first unless you
       want to also remove your own styling. */
    all: unset;

    /* Spacing between navlinks. */
    margin-left: 0.8rem;
    margin-right: 0.8rem;

    font-size: 1.2rem;

    cursor: pointer;
  }

  /* @media screen and (max-width: 24rem)
  {
    .Navlink
    {
      font-size: 1rem;
    }
  } */
</style>