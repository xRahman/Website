<script lang="ts">
  export let disabled = false;
  export let hidden = false;
</script>

<!-- Not specifying the click handler will forward the
     click event to parent component. -->
<button
  class="Button"
  class:Hidden={hidden}
  {disabled}
  on:click
>
  <slot/>
</button>

<style>
  .Button
  {
    background-color: rgba(240, 240, 240, 0.6);
    border: 0.06rem solid black;
    border-radius: 0.1rem;
    padding: 0.2rem 0.5rem;

    /* Text color */
    color: rgb(60, 30, 0);
  }
  .Button:hover
  {
    background-color: rgba(255, 255, 255, 0.6);
  }
  .Button:active
  {
    background-color: rgba(220, 220, 220, 0.6);
  }
  .Button:disabled
  {
    color: gray;
    border: 0.06rem solid gray;
    background-color: rgba(220, 220, 220, 0.6);
    cursor: default;
  }

  .Hidden
  {
    visibility: hidden;
  }
</style>