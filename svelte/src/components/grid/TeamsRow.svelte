<script>
	import { onMount } from "svelte";
	export let teams;
	let output;

	function cycleTeams() {
		let current = 0;

		setInterval(() => {
			if (teams[current] === undefined) {
				current = 0;
				output = teams[0];
			} else {
				output = teams[current];
			}
			current++;
		}, 2000);
	}

	onMount(() => {
		output = teams[0];
		if (teams.length === 1) {
			output = teams[0];
		} else {
			cycleTeams();
		}
	});
</script>

<style>
	/* your styles go here */
</style>

<div>{output}</div>
