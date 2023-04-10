<script lang="ts">
	import type { IColorItem, ITheme } from '$lib/types';
	import { colorVars } from '$lib/theme';
	export let colors: IColorItem[];
	export let themes: ITheme[];
	let inlineCss = colorVars(colors);
	// let objs =

	// console.log(colorVars);
</script>

<div style={inlineCss}>
	<slot />
</div>
