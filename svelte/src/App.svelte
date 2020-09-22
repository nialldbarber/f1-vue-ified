<script>
	import { Router, Link, Route } from "svelte-routing";
	import { input } from "./store";
	import AllDrivers from "./views/AllDrivers.svelte";
	import Driver from "./views/Driver.svelte";
	import Header from "./components/Header.svelte";
	import Grid from "./components/Grid.svelte";
	import Search from "./components/Search.svelte";
</script>

<style>
</style>

<Router>
	<nav>
		<Link to="/">All Drivers</Link>
		<Link to="/drivers">Individual driver</Link>
	</nav>
	<div>
		<Route path="/" component={AllDrivers} />
		<Route path="/drivers/:id" let:params>
			<Driver id={params.id} />
		</Route>
	</div>
</Router>
<main>
	<Header />
	<Grid />
	<Search />
	<p>Input is: {$input}</p>
</main>
