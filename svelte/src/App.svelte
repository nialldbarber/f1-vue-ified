<script>
	import { input } from "./store";
	import Routing from "./components/Routing.svelte";
	import Header from "./components/Header.svelte";
	import Grid from "./components/Grid.svelte";
	import Search from "./components/Search.svelte";
</script>

<style>
</style>

<Routing />
<main>
	<Header />
	<Grid />
	<Search />
	<p>Input is: {$input}</p>
</main>
