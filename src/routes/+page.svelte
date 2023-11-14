<script lang="ts">
	import type { PageData } from './$types';
	import Screensaver from '@components/screensaver/index.svelte';
	export let data: PageData;
</script>

<Screensaver data={data.slideshowItems} />
