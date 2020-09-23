<script>
	import { each } from "svelte/internal";

	export let champs;

	let count = champs.length;

	let isHovered = false;

	function enter() {
		isHovered = true;
	}

	function exit() {
		isHovered = false;
	}
</script>

<style type="text/scss">
	.modal-container {
		position: relative;
		.modal {
			position: absolute;
		}
	}
</style>

<div class="modal-container" on:mouseover={enter} on:mouseout={exit}>
	<div>{count}</div>
	{#if isHovered}
		<div class="modal">
			{#each champs as champ}
				<p>{champ}</p>
			{/each}
		</div>
	{/if}
</div>
