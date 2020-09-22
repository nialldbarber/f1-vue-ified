<script>
	import { input } from "./store";
	import Header from "./components/Header.svelte";
	import Grid from "./components/Grid.svelte";
	import Search from "./components/Search.svelte";
</script>

<style>
</style>

<main>
	<Header />
	<Grid />
	<Search />
	<p>Input is: {$input}</p>
</main>
