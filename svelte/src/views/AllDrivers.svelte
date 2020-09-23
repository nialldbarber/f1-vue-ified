<script>
	import { Link } from "svelte-routing";
	import GridHeader from "../components/grid/GridHeader.svelte";
	import ChampRow from "../components/grid/ChampRow.svelte";
	import TeamsRow from "../components/grid/TeamsRow.svelte";
	import { getAge } from "../utils";
	import { API } from "../constants";

	const fetchDrivers = (async () => {
		const response = await fetch(API);
		return await response.json();
	})();
</script>

<style type="text/scss">
	.row {
		display: grid;
		grid-template-columns: 3fr 1fr 2fr 3fr 2fr 2fr 2fr;
		min-height: 50px;
		align-items: center;
		border-top: 1px solid #555;

		& > div {
			min-height: 50px;
			display: flex;
			align-items: center;
		}
	}
</style>

<GridHeader />
{#await fetchDrivers}
	<p>...waiting</p>
{:then data}
	{#each data as driver}
		<Link to={`/drivers/${driver.id}`}>
			<div class="row">
				<div>{driver.name}</div>
				<div>{getAge(driver.born, driver.died)}</div>
				<div>{driver.country}</div>
				<TeamsRow teams={driver.teams} />
				<div>{driver.poles}</div>
				<div>{driver.wins}</div>
				<ChampRow champs={driver.championships} />
			</div>
		</Link>
	{/each}
{:catch err}
	<p>Oh dang! {err}</p>
{/await}
