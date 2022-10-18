<script lang="ts">
</script>

<div class="ScrollArea">
  <slot />
</div>

<style>
  .ScrollArea
  {
    box-sizing: border-box;
    height: 100%;

    /* padding: 2rem; */

    text-align: justify;
    hyphens: manual;
    overflow-y: auto;
  }
</style>