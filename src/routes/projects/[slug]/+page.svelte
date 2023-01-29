<script lang="ts">
	import type { PageData } from './$types';
	import snarkdown from 'snarkdown';
	import Gallery from '@components/media/gallery.svelte';
	import { themesFromObj } from '$lib/theme';
	export let data: PageData;
	let intro: string | null = null;

	let themes = themesFromObj(data.metadata.themes);

	if (data.metadata.intro) {
		intro = snarkdown(data.metadata.intro);
	}
</script>

<svelte:head>
	<title>{data.metadata.h1} {data.metadata.h2}</title>
	<link rel="stylesheet" href={`/projects/${data.metadata.slug}/css`} />
</svelte:head>

<div class="absolute inset-0 overflow-auto theme-default bg-1 text-1 ">
	<div class="min-h-[100vh]">
		<div class="min-h-[500px] p-unit">
			<h1 class="font-sans font-bold lg:text-3xl" text-2>{data.metadata.h1} {data.metadata.h2}</h1>
			<h2 class="font-sans lg:text-3xl text-2">{data.metadata.year}</h2>
		</div>

		{#if intro}
			<div class="font-sans lg:text-3xl p-unit">{@html intro}</div>
		{/if}

		<svelte:component this={data.content} />

		{#if data.metadata.frames}
			<Gallery items={data.metadata.frames} {themes} />
		{/if}
	</div>

	<div class="relative p-unit text-gray bg-white">
		Return to <a class="underline text-gray hover:text-black hover:no-underline" href="/">Index</a>
	</div>
</div>
