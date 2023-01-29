<script lang="ts">
	import type { ColorItem, Frame, Theme } from '$lib/types';
	import { themeFromSlug } from '$lib/theme';
	import Img from '../img.svelte';
	import Crop from './crop.svelte';
	export let frames: Frame[];
	export let featured: boolean = false;
	export let themes: Theme[];
	export let colours: ColorItem[];

	if (featured) {
		frames = frames.filter((item) => {
			return item.featured;
		});
	}

	console.log('media', themes);
</script>

<div class="media absolute inset-0">
	{#each frames as item}
		<Crop theme={themeFromSlug(item.theme, themes)}>
			{#if item.image}
				<Img src={item.image} alt={item.alt} />
			{/if}
		</Crop>
	{/each}
</div>
