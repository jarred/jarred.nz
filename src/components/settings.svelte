<script lang="ts">
	import { getContext } from 'svelte';
	import type { SiteStore } from '$lib/store';
	const { zoom }: SiteStore = getContext('site');
	const zoomOptions = ['1', '2', '3', '4'];
	const handleZoom = (n: string) => {
		zoom.set(n);
	};
</script>

<div class="flex gap-unit">
	<div>zoom:</div>
	{#each zoomOptions as option}
		<button
			class:active={$zoom === option}
			on:click={() => {
				handleZoom(option);
			}}>{option}</button
		>
	{/each}
</div>

<style>
	button.active {
		@apply opacity-[0.5];
	}
</style>
