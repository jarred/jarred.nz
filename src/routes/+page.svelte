<script lang="ts">
	import type { IPageData } from './$types';
	export let data: IPageData;
	import ProjectCard from '../components/project-card.svelte';
	import Settings from '../components/settings.svelte';
</script>

<div class="flex flex-col h-[100vh] relative overflow-auto">
	<div class="font-sans p-unit sticky left-0 right-0 top-0 flex-grow flex flex-col">
		<p class=" lg:text-3xl mb-1ch">
			<span lang="mi">Kia ora</span> (hello). I do brand+digital design and web dev in Aotearoa, New
			Zealand.
		</p>
		<div class="flex-grow" />
		<div class="self-end">
			<Settings />
		</div>
	</div>

	<div class="flex projects flex-wrap">
		{#each data.projects as item}
			<ProjectCard {item} />
		{/each}
	</div>
</div>
