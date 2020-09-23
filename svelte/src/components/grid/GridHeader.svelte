<script>
</script>

<style scoped type="text/scss">
	.grid-container {
		position: sticky;
		top: 0;
		display: grid;
		background: #fff;
		z-index: 2;
		border-bottom: 1px solid #555;
	}

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

<div class="grid-container">
	<div class="header row">
		<div>Name</div>
		<div>Age</div>
		<div>Country</div>
		<div>Team(s)</div>
		<div>Poles</div>
		<div>Wins</div>
		<div>Championship(s)</div>
	</div>
</div>
