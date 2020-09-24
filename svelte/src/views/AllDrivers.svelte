<script>
	import { onMount } from "svelte";
	import { input } from "../store";
	import GridHeader from "../components/grid/GridHeader.svelte";
	import Row from "../components/Row.svelte";
	import { API } from "../constants";

	let drivers = [];

	onMount(async () => {
		const res = await fetch(API);
		drivers = await res.json();
	});

	$: updatedDrivers = drivers.filter(driver => {
		return driver.name.toLowerCase().includes($input.toLowerCase());
	});
</script>

<style type="text/scss">
	:global(.row) {
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
{#each updatedDrivers as driver}
	<Row {driver} />
{/each}
