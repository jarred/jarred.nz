<script lang="ts">
	import type { IFrame, ITheme } from '$lib/types';
	import Frame from './frame.svelte';
	import Img from '@components/img.svelte';
	import { themeFromSlug } from '$lib/theme';
	import Grid from '@components/grid.svelte';

	export let items: IFrame[];
	export let themes: ITheme[];
</script>

<div class="w-full">
	{#each items as item, index}
		<Frame theme={themeFromSlug(item.theme, themes)}>
			{#if item.image}
				<div><Img src={item.image} alt={item.alt} /></div>
			{/if}
			<div class="absolute bottom-0 top-0 p-unit">{index}</div>
		</Frame>
	{/each}
</div>
