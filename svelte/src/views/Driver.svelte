<script>
	import { getContext } from "svelte";
	import { ROUTER } from "svelte-routing/src/contexts";
	const { activeRoute } = getContext(ROUTER);
	import { API } from "../constants";

	const uri = $activeRoute.uri;
	const driverId = uri.substr(uri.lastIndexOf("/") + 1);

	const fetchDrivers = (async () => {
		const response = await fetch(API);
		return await response.json();
	})();
</script>

<style>
</style>

{#await fetchDrivers}
	<p>...waiting</p>
{:then data}
	{#each data as driver}
		{#if driver.id === driverId}
			<li>{driver.name}</li>
		{/if}
	{/each}
{:catch err}
	<p>Oh dang! {err}</p>
{/await}
