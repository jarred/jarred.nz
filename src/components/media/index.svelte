<script lang="ts">
	import type { IColorItem, IFrame, ITheme } from '$lib/types';
	import { themeFromSlug } from '$lib/theme';
	import Img from '../img.svelte';
	import Frame from './frame.svelte';
	export let frames: IFrame[];
	export let featured: boolean = false;
	export let themes: ITheme[];
	export let colours: IColorItem[];

	if (featured) {
		frames = frames.filter((item) => {
			return item.featured;
		});
	}

	console.log('media', themes);
</script>

<div class="media absolute inset-0">
	{#if frames}
		<Frame theme={themeFromSlug(frames[0].theme, themes)}>
			{#if frames[0].image}
				<Img src={frames[0].image} alt={frames[0].alt} />
			{/if}
		</Frame>
	{/if}
</div>
