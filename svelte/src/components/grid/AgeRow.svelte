<script>
	import { getAge } from "../../utils";

	export let born;
	export let died;
</script>

<style>
	.died {
		color: red;
	}
</style>

<div class={died ? 'died' : ''}>{getAge(born, died)}</div>
