<script lang="ts">
  export let value = "";
  export let updateValue: (newValue: string) => void;
</script>

<li
  class="Option"
  on:click={() => { updateValue(value) }}>
  <slot></slot>
</li>

<style>
  .Option
  {
    background-color: rgba(240, 240, 240, 0.4);
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    text-align: center;
    white-space: nowrap;
  }
  .Option:hover
  {
    background-color: rgba(110, 110, 110, 0.6);
  }
</style>