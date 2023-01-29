<script>
	import '../css/app.postcss';
	import { initSiteStore } from '$lib/site-store';
	import { setContext, getContext } from 'svelte';
	import Grid from '../components/grid.svelte';

	const site = setContext(
		'site',
		initSiteStore({
			zoom: '1'
		})
	);

	const { zoom } = getContext('site');
</script>

<main data-zoom={$zoom}>
	<slot />
</main>
