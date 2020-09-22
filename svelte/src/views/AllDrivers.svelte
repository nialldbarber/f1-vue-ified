<script>
	import { Link } from "svelte-routing";
	import { API } from "../constants";

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
		<Link to={`/drivers/${driver.id}`}>
			<li>{driver.name}</li>
		</Link>
	{/each}
{:catch err}
	<p>Oh dang! {err}</p>
{/await}
