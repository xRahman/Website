<script lang="ts">
  import { Strings } from "../../../utils/Strings";

  import RollOption from "./RollOption.svelte";

  export let items: string[] = [];
  export let menuVisible = true;
  export let updateValue: (newValue: string) => void;
  
  function setFocus(element: HTMLElement)
  {
    element.focus();
  }

  function close()
  {
    menuVisible = false;
  }

  function onKeyDown(event: KeyboardEvent)
  {
    if (event.key === "Escape")
    {
			close();	
		}
  }
</script>

<ul
  class="RollOptions"
  tabindex="0"
  use:setFocus
  on:blur={close}
  on:keydown={onKeyDown}
>
  {#each items as item}
    <RollOption
      value={item}
      updateValue={updateValue}
    >
      {Strings.beautifyMinuses(item)}
    </RollOption>
  {/each}
</ul>

<style>
  .RollOptions
  {
    position: absolute;
    list-style: none;
    margin: 0;
    padding: 0;
    top: 120%;
    /* Position horizontally at the middle of parent element. */
    left: 50%;
    transform: translateX(-50%);

    background-image: url("/assets/images/marbleTransparent.png");
    background-repeat: repeat;
    border: 0.06rem solid black;
    border-radius: 0.1rem;

    display: grid;
    grid-template-columns: repeat(4, max-content);
    grid-template-rows: repeat(auto-fill, 1fr);
    align-items: center;
  }
  .RollOptions:focus
  {
    outline: 0;
  }
</style>