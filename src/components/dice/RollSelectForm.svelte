<form
  class="RollSelectForm"
  on:submit
>
  <slot />
</form>

<style>
  .RollSelectForm
  {
    display: inline-block;
    white-space: nowrap;
    font-size: 2rem;
    margin: auto;
    user-select: none;
  }
</style>