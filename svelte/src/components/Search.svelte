<script>
	import { input } from "../store";

	let val = "";
</script>

<style>
</style>

<input type="text" bind:value={val} on:input={() => ($input = val)} />
