<script lang="ts">
	import type { ISlideshowItem } from '$lib/types';
	import { themeCSSFromObj } from '$lib/theme';
	import ThemeCss from '@components/theme-css.svelte';
	export let data: ISlideshowItem;

	console.log(data.theme);

	let themeVars = themeCSSFromObj(data.theme, data.colors);

	console.log(themeVars);
</script>

<ThemeCss colors={data.colors} themes={[data.theme]}>
	<div class={`theme-${data.frame.theme}`}>
		<h2>{data.frame.alt}</h2>
	</div>
</ThemeCss>
