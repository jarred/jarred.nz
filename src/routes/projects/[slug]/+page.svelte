<script lang="ts">
	import type { IPageData } from './$types';
	import snarkdown from 'snarkdown';
	import Gallery from '@components/media/gallery.svelte';
	import { themesFromObj } from '$lib/theme';
	import Grid from '@components/grid.svelte';
	export let data: IPageData;
	let intro: string | null = null;

	let themes = themesFromObj(data.metadata.themes);

	if (data.metadata.intro) {
		intro = snarkdown(data.metadata.intro);
	}

	console.log(data.metadata);
</script>

<svelte:head>
	<title>{data.metadata.h1} {data.metadata.h2}</title>
	<link rel="stylesheet" href={`/projects/${data.metadata.slug}/css`} />
</svelte:head>

<div class="theme-default bg-1 text-1 w-full min-h-[100vh] flex flex-col">
	<div class="w-full flex-grow">ajkds flakjsdhfa</div>
	{#if data.metadata.frames}
		<Gallery items={data.metadata.frames} {themes} />
	{/if}
</div>

<div class="hidden absolute inset-0 overflow-auto theme-default bg-1 text-1 ">
	<div class="min-h-[100vh]">
		<div class="min-h-[500px] p-unit">
			<h1 class="font-sans font-bold lg:text-3xl text-2">{data.metadata.h1} {data.metadata.h2}</h1>
			<h2 class="font-sans lg:text-3xl text-2">{data.metadata.year}</h2>
		</div>

		{#if intro}
			<div class="font-sans lg:text-3xl p-unit">{@html intro}</div>
		{/if}

		<svelte:component this={data.content} />
	</div>

	<div class="relative p-unit text-gray bg-white">
		Return to <a class="underline text-gray hover:text-black hover:no-underline" href="/">Index</a>
	</div>
</div>
