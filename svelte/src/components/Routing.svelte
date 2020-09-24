<script>
	import { Router, Route } from "svelte-routing";
	import AllDrivers from "../views/AllDrivers.svelte";
	import Driver from "../views/Driver.svelte";
</script>

<style>
</style>

<Router>
	<div>
		<Route path="/" component={AllDrivers} />
		<Route path="/drivers/:id">
			<Driver />
		</Route>
	</div>
</Router>
