<script lang="ts">
  export let disabled = false;
</script>

<button
  class="RollButton"
  disabled={disabled}
  type=submit
>
  🎲
</button>

<style>
  .RollButton
  {
    box-sizing: border-box;
    vertical-align: bottom;
    
    padding: 0.2rem;

    border: 0.01rem solid black;
    border-radius: 0.1rem;

    background-color: rgba(240, 240, 240, 0.7);

    /* 🎲 is for some reason much bigger than the rest of the font.
       We us "em" here to scale it down relative to parent font size. */
    font-size: 0.875em;
    text-align: center;

    /* Text color */
    color: rgb(60, 30, 0);

    cursor: pointer;
  }
  .RollButton:hover
  {
    background-color: rgba(255, 255, 255, 0.8);
  }
  .RollButton:active
  {
    background-color: rgba(220, 220, 220, 0.6);
  }
  .RollButton:disabled
  {
    color: gray;
    border: 0.06rem solid gray;
    background-color: rgba(220, 220, 220, 0.6);
    cursor: default;
  }
</style>