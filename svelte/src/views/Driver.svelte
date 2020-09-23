<script>
	import { getContext } from "svelte";
	import { ROUTER } from "svelte-routing/src/contexts";
	const { activeRoute } = getContext(ROUTER);
	const uri = $activeRoute.uri;
	const driverId = uri.substr(uri.lastIndexOf("/") + 1);

	console.log(driverId);
</script>

<style>
</style>

<p>Hello</p>
