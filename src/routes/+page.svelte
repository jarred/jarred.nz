<script lang="ts">
	export let data;
</script>

{#each data.projects as item}
	<a href={`/projects/${item.slug}`}>{item.h1}</a>
{/each}
