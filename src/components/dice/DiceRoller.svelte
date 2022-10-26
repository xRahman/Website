<script lang="ts">
  import Tabs from "../shared/Tabs.svelte";
  import ScrollArea from "../shared/ScrollArea.svelte";
  import MouseD6 from "./MouseD6.svelte";
  import MouseHD from "./MouseHD.svelte";
  import MouseXdY from "./MouseXdY.svelte";
  import KeyboardXdY from "./KeyboardXdY.svelte";
  import { Dice } from "../../utils/Dice"

  // let rollCommand = "";
  let rollResults: string[] = [];

  const tabs =
  [
    { id: "d6hd-mouse", name: "🖰 k6, kz" },
    { id: "XdY-mouse", name: "🖰 XkY" },
    { id: "XdY-keyboard", name: "⌨ XkY" }
  ];
  let activeTab = tabs[0].id;

  function uglifyMinuses(str: string)
  {
    return str.split("–").join("-");
  }

  function beautifyMinuses(str: string)
  {
    return str.split("-").join("–");
  }

  function processCommand(command: string)
  {
    console.log("processCommand(): ", command);

    if (!command)
      return;

    const fixedCommand = uglifyMinuses(command);

    const result = `[${command}]: ${Dice.evaluate(fixedCommand)}`;

    // Svelte will notice the assignment and rerender the list.
    rollResults = [beautifyMinuses(result), ...rollResults];
  }
</script>

<div class="DiceRoller">
  <Tabs
    tabs={tabs}
    bind:activeTabId={activeTab}
  />
  {#if activeTab === "d6hd-mouse"}
    <div class = D6HDMouseContainer>
      <MouseD6 processCommand={processCommand} />
      <MouseHD processCommand={processCommand} />
    </div>
  {/if}
  {#if activeTab === "XdY-mouse"}
    <MouseXdY processCommand={processCommand} />
  {/if}
  {#if activeTab === "XdY-keyboard"}
    <KeyboardXdY processCommand={processCommand} />
  {/if}
  <ScrollArea>
    {#each rollResults as result}
		  <p>{result}</p>
	  {/each}
  </ScrollArea>
</div>

<style>
  .DiceRoller
  {
    height: 100%;
    box-sizing: border-box;

    /* ------- Children size and positioning ------- */
    display: grid;
    grid-template-rows: auto auto 1fr;
    grid-template-columns: 1fr;
  }
  .D6HDMouseContainer
  {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    grid-column-gap: 2rem;
    grid-row-gap: 1rem;
    margin-left: 2rem;
    margin-right: 2rem;
    margin-bottom: 1rem;
  }
</style>