<script lang="ts">
	import { onMount } from 'svelte';

	let innerWidth: number;
	let innerHeight: number;
	let DEBUG: 0 | 1 | 2 = 1;
	let ratio: number;
	let w: number;
	let h: number;
	let minColWidth: number = 0;
	export let cols: number = 0;
	export let rows: number = 0;

	const handleResize = () => {
		minColWidth = 100;
		w = innerWidth;
		h = innerHeight;
		ratio = w / h;
		cols = Math.round(w / minColWidth);
		rows = Math.round(h / minColWidth);

		console.log(cols, rows);
	};

	onMount(() => {
		handleResize();
	});

	$: cellW = `${100 / cols}vw`;
	$: cellH = `${100 / rows}vh`;
	$: css = `--cell-w:${cellW};--cell-h:${cellH};grid-template-columns:repeat(${cols}, 1fr);grid-template-rows: ${cellH}`;
</script>

<svelte:window bind:innerWidth bind:innerHeight on:resize={handleResize} />

<div class="_grid" style={css}>
	{#each { length: 30 } as block, index}
		<div class="block" style={`--c: ${Math.round(Math.random() * cols)};`} />
	{/each}
</div>

<style>
	.\_grid {
		@apply grid bg-black overflow-auto flex-wrap w-full relative max-h-[100vh];

		& > * {
			min-height: var(--cell-h);
		}
	}

	.grid-border {
		@apply border-[#808080] opacity-50;
	}

	.block {
		@apply text-white self-center;
		grid-column: span var(--c) / span var(--c);
		height: var(--c) * var(--cell-h);

		content: var(--c);
		&:nth-of-type(4n) {
			@apply bg-[blue];
		}
		&:nth-of-type(4n + 1) {
			@apply bg-[red];
		}
		&:nth-of-type(4n + 2) {
			@apply bg-[yellow];
		}
		&:nth-of-type(4n + 3) {
			@apply bg-[green];
		}
	}
</style>
