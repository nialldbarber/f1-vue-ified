<script>
	import { Link } from "svelte-routing";
	import GridHeader from "../components/grid/GridHeader.svelte";
	import { API } from "../constants";

	const fetchDrivers = (async () => {
		const response = await fetch(API);
		return await response.json();
	})();
</script>

<style>
</style>

<GridHeader />
{#await fetchDrivers}
	<p>...waiting</p>
{:then data}
	{#each data as driver}
		<Link to={`/drivers/${driver.id}`}>
			<div>{driver.name}</div>
			<div>{driver.born}</div>
			<div>{driver.country}</div>
		</Link>
	{/each}
{:catch err}
	<p>Oh dang! {err}</p>
{/await}
