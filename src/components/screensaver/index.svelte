<script lang="ts">
	import { onMount } from 'svelte';
	import Item from './item.svelte';
	export let data;

	let activeIndex: number = 0;
	let timer: ReturnType<typeof setInterval>;
	const delay = 10000;

	onMount(() => {
		timer = setInterval(() => {
			if (activeIndex >= data.length - 1) {
				activeIndex = 0;
			} else {
				activeIndex++;
			}
		}, delay);
	});
</script>

{#each data as data, index}
	{#if activeIndex === index}
		<Item {data} />
	{/if}
{/each}
