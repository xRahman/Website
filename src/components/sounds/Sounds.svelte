<script lang="ts">
  // import { onMount } from "svelte";
  import { sounds } from "../../data/Sounds";

  // const audioPlayers = [];

  let player: undefined | HTMLAudioElement = undefined;

  // onMount(() => {
	// 	player.loop = true
  //   // Like players.push(player)
  //   players.add(player)
  // })
</script>

<div class="Sounds">
  {#each sounds as sound}
      <p><b>{sound.name}</b></p>
      <audio bind:this={player} src={sound.file} loop controls>
        <track kind="captions" />
      </audio>
	{/each}
</div>

<style>
  p
  {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  audio
  {
    display: block
  }
</style>