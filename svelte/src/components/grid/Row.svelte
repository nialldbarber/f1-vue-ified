<script>
	export let driver;
	import { Link } from "svelte-routing";
	import ChampRow from "./ChampRow.svelte";
	import TeamsRow from "./TeamsRow.svelte";
	import AgeRow from "./AgeRow.svelte";
</script>

<style>
</style>

<Link to={`/drivers/${driver.id}`}>
	<div class="row">
		<div>{driver.name}</div>
		<AgeRow born={driver.born} died={driver.died} />
		<div>{driver.country}</div>
		<TeamsRow teams={driver.teams} />
		<div>{driver.poles}</div>
		<div>{driver.wins}</div>
		<ChampRow champs={driver.championships} />
	</div>
</Link>
