<script lang="ts">
	import type { ColorItem, Theme } from '$lib/types';
	import { colorVars } from '$lib/theme';
	export let colors: ColorItem[];
	export let themes: Theme[];
	let inlineCss = colorVars(colors);
	// let objs =

	// console.log(colorVars);
</script>

<div style={inlineCss}>
	<slot />
</div>
