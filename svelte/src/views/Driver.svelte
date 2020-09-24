<script>
	import { getContext } from "svelte";
	import { ROUTER } from "svelte-routing/src/contexts";
	import { API } from "../constants";

	const { activeRoute } = getContext(ROUTER);
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
	<p>...loading</p>
{:then data}
	{#each data as driver}
		{#if driver.id === driverId}
			<h2>{driver.name}</h2>
			<p>Born: {driver.born}</p>
			<p>Died: {driver.died}</p>
			<p>Country: {driver.country}</p>

			<div class="teams">
				<span>Teams: </span>
				{#each driver.teams as team}<span>{team}</span>{/each}
			</div>

			<p>Poles: {driver.poles}</p>
			<p>Wins: {driver.wins}</p>
			<p>Championships: {driver.championships}</p>
		{/if}
	{/each}
{:catch err}
	<p>Oh dang! {err}</p>
{/await}
