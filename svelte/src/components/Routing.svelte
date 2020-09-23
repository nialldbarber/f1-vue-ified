<script>
	import { Router, Link, Route } from "svelte-routing";
	import AllDrivers from "./views/AllDrivers.svelte";
	import Driver from "./views/Driver.svelte";
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
		<Route path="/drivers/:id">
			<Driver />
		</Route>
	</div>
</Router>
