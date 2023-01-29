<script lang="ts">
	import { onMount } from 'svelte';
	import { debounce } from 'lodash';

	let DEBUG: 0 | 1 | 2 = 1;
	let el: HTMLElement;
	let ro: ResizeObserver;
	let ratio: number;
	let w: number;
	let h: number;
	let minColWidth: number = 0;
	export let cols: number = 0;
	export let rows: number = 0;

	$: cellW = `${100 / cols}vw`;
	$: cellH = `${100 / rows}vh`;

	onMount(() => {
		handleResize();
		ro = new ResizeObserver(debounce(handleResize, 12));
		ro.observe(el);
	});

	const handleResize = () => {
		if (!el) return;
		let rect = el.getBoundingClientRect();
		minColWidth = Number(getComputedStyle(document.documentElement).getPropertyValue('--col-min'));
		w = rect.width;
		h = rect.height;
		ratio = w / h;
		cols = Math.round(w / minColWidth);
		rows = Math.round(h / minColWidth);
	};

	$: css = `--cell-w:${cellW};--cell-h:${cellH};grid-template-rows:repeat(${rows}, 1fr);grid-template-columns:repeat(${cols}, 1fr);`;
</script>

<div class="overflow-auto relative w-full h-full grid" bind:this={el} style={css}>
	<div class="text-gray">
		<div class="p-unit">{cols}:{rows}</div>
	</div>

	<slot />

	{#if DEBUG > 0 && ratio}
		<div class="absolute inset-0 pointer-events-none opacity-75 z-50">
			{#if DEBUG === 2}
				<div class="absolute w-4cw top-0 right-0">
					<div class="bg-black text-white p-2">
						minColWidth:{minColWidth} / w:{w} / h:{h} / ratio:{ratio} / cols:{cols} / rows:{rows}
						/ cellW:{cellW} / cellH:{cellH}
					</div>
				</div>
				<div
					class="absolute left-0 bottom-0 bg-gray"
					style={`width: var(--cell-w); height: var(--cell-h);`}
				/>
			{/if}
			<div class="absolute inset-0 grid" style={css}>
				{#each { length: rows } as row}
					<div class="col-span-full border-b border-gray" />
				{/each}
			</div>
			<div class="absolute inset-0 grid" style={css}>
				{#each { length: cols } as col}
					<div class="row-span-full border-r border-gray" />
				{/each}
			</div>
		</div>
	{/if}
</div>
