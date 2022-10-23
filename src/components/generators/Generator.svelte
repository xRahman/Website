<script lang="ts">
  import { Dice } from "../../utils/Dice"
  import Button from "../shared/Button.svelte"

  export let sourceList: string[] = [];
  export let itemType = "položka";

  let buttonDisabled = false;
  let outputList: string[] = [];

  function removeItem(array: string[], index: number)
  {
    array.splice(index, 1);
  }

  function generateItem()
  {
    if (sourceList.length < 1)
    {
      buttonDisabled = true;
      return;
    }

    const randomIndex = Dice.getRandomInt(sourceList.length);
    
    // Svelte will notice the assignment and rerender the list.
    outputList = [sourceList[randomIndex], ...outputList];
    removeItem(sourceList, randomIndex);
  }

  // Populate the list with first random item.
  generateItem();
</script>

<div class="Generator">
  <Button on:click={generateItem} disabled={buttonDisabled}>
    Další {itemType}
  </Button>
  {#each outputList as outputItem}
		<p>{outputItem}</p>
	{/each}
</div>

<style>
  .Generator
  {
    line-height: 142%;
    text-align: left;
  }
</style>