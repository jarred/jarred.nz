<script lang="ts">
	import { getContext } from 'svelte';
	import type { Project, Theme } from '$lib/types';
	import type { SiteStore } from '$lib/site-store';
	import ThemeCss from './theme-css.svelte';
	import Media from './media/index.svelte';
	import { firstTheme, themesFromObj } from '$lib/theme';

	export let item: any;
	const { zoom }: SiteStore = getContext('site');
	const url = `/projects/${item.slug}`;
	const content: Project = item;
	let el: HTMLElement;
	let themes: Theme[] = themesFromObj(content.themes, content.colors);
	console.log(themes);
</script>

<ThemeCss colors={content.colors} themes={content.themes}>
	<div
		bind:this={el}
		class="project-card"
		style={`background:var(--color-${themes[0].bg[0]}); color: var(--color-${themes[0].text[0]});`}
	>
		{#if content.frames}
			<a href={url}>
				<Media {themes} frames={content.frames} colors={content.colors} />
			</a>
		{/if}

		<div class="content">
			<a href={url} class="info">
				{content.h1}<br />
				{content.h2}
			</a>
			<div class="text-right">
				<a href={url}>OPEN</a>
			</div>
			<span>{content.year}</span>
			<div class="self-end">akdjhfald</div>
		</div>
	</div>
</ThemeCss>
