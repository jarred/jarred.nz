<script lang="ts">
	import type { Frame, Theme } from '$lib/types';
	import Crop from './crop.svelte';
	import Img from '@components/img.svelte';
	import { themeFromSlug } from '$lib/theme';

	export let items: Frame[];
	export let themes: Theme[];
</script>

<div class="w-[300px] h-[300px]">
	{#each items as item}
		<Crop theme={themeFromSlug(item.theme, themes)}>
			{#if item.image}
				<Img src={item.image} alt={item.alt} />
			{/if}
		</Crop>
	{/each}
</div>
