<script>
	import { input } from "../store";
	let val = "";

	function poop() {
		$input = val;
		if ($input.length === 0) {
			val = "";
		}
	}
</script>

<style>
</style>

<input type="text" bind:value={val} on:input={poop} />
