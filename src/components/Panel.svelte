<script lang="ts">
</script>

<div class="Panel">
  <div class="Panel-scrollarea">
    <slot />
  </div>
</div>

<style>
  .Panel
  {
    --margin: 0.1rem;

    margin: var(--margin) auto;

    /* width: 100%; */
    /* Subtract margins so we don't overflow our parent. */
    height: calc(100% - 2 * var(--margin));

    width: calc(100% - 2 * var(--margin));
    max-width: 40rem;
    /* max-width: 40rem;
    min-width: calc(100% - 2 * var(--margin)); */
    /* width: 40rem;
    max-width: calc(100% - 2 * var(--margin)); */

    /* ----------- Background and outline ----------- */
    background-image: url("/assets/images/marbleTransparent.png");
    background-repeat: repeat;
    outline: 0.1rem groove var(--panelBorderColor);
  }

  .Panel-scrollarea
  {
    box-sizing: border-box;
    height: 100%;

    padding: 2rem;

    text-align: justify;
    hyphens: manual;
    overflow-y: auto;
  }
</style>