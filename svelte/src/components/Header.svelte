<script>
	import { Router, Link } from "svelte-routing";
	import { input } from "../store";
</script>

<style>
</style>

<Router>
	<Link to="/" on:click={() => ($input = '')}>
		<h1>F1 Stats</h1>
	</Link>
</Router>
