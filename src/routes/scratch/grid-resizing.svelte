<script lang="ts">
	import Grid from '@components/grid.svelte';
	import type { ILayoutMatrix, ILayout } from '/types';

	import { layoutFromString } from '$lib/layout/layout-from-string';

	import { bestAspectMatch } from '$lib/layout/layout';

	let inputs = [
		`1`,
		`01
		 02`,
		`102
		 333`,
		`1022
		 3333
		 3333
		 3333
		 4445`
	];
	let layouts: ILayoutMatrix[] = [];

	inputs.forEach((item) => {
		let result = layoutFromString(item);
		layouts.push(result);
	});

	let rows: number;
	let cols: number;

	let ratioOptions = ['1:1', '3:4', '3x6', '4:8', '4:3', '16:9'];
</script>

<div class="outer w-[800px] h-[800px] bg-black overflow-scroll resize-both">
	<Grid bind:rows bind:cols>
		<div class="bg-[#f03] text-white col-span-2 row-span-2 p-unit">
			{cols}:{rows} => {ratioOptions[bestAspectMatch(`${cols}:${rows}`, ratioOptions)]}
		</div>
	</Grid>
</div>

<style>
	.outer {
		resize: both;
	}
</style>
