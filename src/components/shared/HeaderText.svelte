<span class="HeaderText">
  <slot/>
</span>

<style>
  .HeaderText
  {
    font-family: Constantia;
    font-weight: bold;

    /* Make the text look engraved. */
    text-shadow: 0 0.1rem 0 var(--headerTextEngravingColor);

    user-select: none;
  }
  .HeaderText:hover
  {
    /* Make the text look engraved. */
    text-shadow: 0 0.1rem 0 var(--headerTextEngravingColor),
    /* Add a glow (multiple times to make it strong). */
                 0 0 0.6rem var(--headerTextShadowColor),
                 0 0 0.8rem var(--headerTextShadowColor),
                 0 0 1.0rem var(--headerTextShadowColor);
  }
  .HeaderText:active
  {
    /* Make the text look engraved. */
    text-shadow: 0 0.1rem 0 var(--headerTextEngravingColor),
    /* Add a glow (multiple times to make it strong). */
                 0 0 0.6rem var(--headerTextShadowActiveColor),
                 0 0 0.8rem var(--headerTextShadowActiveColor),
                 0 0 1.0rem var(--headerTextShadowActiveColor);
  }
</style>