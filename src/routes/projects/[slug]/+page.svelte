<script lang="ts">
	export let data;
</script>

<h1>{data.metadata.h1}</h1>
{#if data.metadata.h2}
	<h2>{data.metadata.h2}</h2>
{/if}

<div>
	<svelte:component this={data.content} />
</div>
