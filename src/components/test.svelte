<script lang="ts">
	export let theme;
	let n = 1;

	console.log(theme);
</script>

<div>What is this?</div>

<div>{n}</div>

<button
	on:click={() => {
		n++;
	}}
/>
