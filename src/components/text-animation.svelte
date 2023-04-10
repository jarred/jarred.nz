<script lang="ts">
	import { onMount } from 'svelte';
	let el: HTMLElement;
	let textVal: string;
	let frames: string[] = [];

	type states = 'server' | 'init' | 'animating' | 'completed';

	let state: states = 'server';

	onMount(() => {
		textVal = el.innerText;
		state = 'init';

		// console.log(val);

		state = 'animating';
	});
</script>

<div class="relative">
	{#if state !== 'server'}
		<div class="absolute inset-0 pointer-events-none">
			{textVal}
		</div>
	{/if}
	<div class="el" class:hidden={state === 'animating'} bind:this={el}>
		<slot />
	</div>
</div>

<style>
	.hidden {
		@apply opacity-0;
	}
</style>
