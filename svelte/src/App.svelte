<script>
	import { input } from "./store";
	import Routing from "./components/Routing.svelte";
	import Header from "./components/Header.svelte";
	import Search from "./components/Search.svelte";
</script>

<style type="text/scss">
	a {
		color: inherit;
	}
</style>

<main>
	<Header />
	<Search />
	<Routing />
</main>
