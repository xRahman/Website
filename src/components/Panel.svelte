<script lang="ts">
</script>

<div class="Panel">
  <slot />
</div>

<style>
  .Panel
  {
    --margin: 0.1rem;

    margin: var(--margin) auto;

    /* Subtract margins so we don't overflow our parent. */
    height: calc(100% - 2 * var(--margin));
    width: calc(100% - 2 * var(--margin));
    max-width: 40rem;

    /* ----------- Background and outline ----------- */
    background-image: url("/assets/images/marbleTransparent.png");
    background-repeat: repeat;
    outline: 0.1rem groove var(--panelBorderColor);
  }
</style>